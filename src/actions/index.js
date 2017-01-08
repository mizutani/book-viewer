// import { createAction } from "redux-actions";
import * as actionTypes from 'utils/actionTypes';

export const nextButtonClick = () => ({
  type: actionTypes.NEXT_BUTTON_CLICK,
});
export const prevButtonClick = () => ({
  type: actionTypes.PREV_BUTTON_CLICK,
});
export const onChangeCurrent = (currentPageNum) => ({
  type: actionTypes.ON_CHANGE_CURRENT,
  currentPageNum: currentPageNum,
});
export const onChangeMiniMap = (open) => ({
  type: actionTypes.ON_CHANGE_MINI_MAP,
  open: open,
});
export const onDropFiles = (files) => ({
  type: actionTypes.ON_DROP_FILES,
  files: files
});

export const unzip = (files) => ({
  type: actionTypes.UNZIP,
  files: files
});
