import 'babel-polyfill';
import { call, put, takeEvery } from 'redux-saga/effects'
import * as actionTypes from 'utils/actionTypes';
import JSZip from 'jszip';
import path from 'path';
import { Promise } from 'es6-promise';

const rejectPtn = /.*__MACOSX.*/;
const supportExtPtn = /^\.(jpg|jpeg|png|gif)$/;

function* handleUnzip(action) {
  try {
    const files = action.files;
    const zip = yield call(JSZip.loadAsync, files[0]);
    const selectFiles = zip.filter((relativePath, file) => {
      if (file.dir) {
        return false;
      }

      if (rejectPtn.exec(file.name)) {
        return false;
      }

      const ext = path.extname(file.name);
      return supportExtPtn.exec(ext);
    });


    const uint8arrayFiles = yield Promise.all(selectFiles.map(function(file){
      // return
      return file.async('uint8array');
    }));

    const unzipFiles = uint8arrayFiles.map((data, index) => {
      return new File([data], index, { type: "image/*" });
    });

    yield put({type: actionTypes.ON_DROP_FILES, files: unzipFiles});
  } catch (e) {
    // console.log(e);
  }
}

function* rootSaga() {
  yield takeEvery(actionTypes.UNZIP, handleUnzip);
}

export default rootSaga;
