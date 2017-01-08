import * as actionTypes from 'utils/actionTypes';
import { createObjectURL } from 'utils/imageHelper';

const initialAppState = {
  currentPageNum: 0,
  open: false,
  items: [
    {
      id: 1,
      file: '/img/sample/1.png',
    }
  ]
};

const calPageNum = (currentPageNum, num) => {
  const result = currentPageNum + num;
  if (result >= 0) {
    return result;
  }

  return 0;
};

const viewer = (state = initialAppState, action) => {
  switch (action.type) {
    case actionTypes.NEXT_BUTTON_CLICK:
      return {
        ...state,
        currentPageNum: calPageNum(state.currentPageNum, 1),
      };
    case actionTypes.PREV_BUTTON_CLICK:
      return {
        ...state,
        currentPageNum: calPageNum(state.currentPageNum, -1),
      };
    case actionTypes.ON_CHANGE_CURRENT:
      return {
        ...state,
        currentPageNum: action.currentPageNum,
        open: false,
      };
    case actionTypes.ON_CHANGE_MINI_MAP:
      return {
        ...state,
        open: action.open,
      };
    case actionTypes.ON_DROP_FILES:
      const imtes = action.files.map((file, index) => ({
        id: state.items.length + 1 + index,
        file: createObjectURL(file)
      }));
      return {
        ...state,
        items: [
          ...state.items,
          ...imtes
        ]
      };
    default:
      return state;
  }
};

export default viewer;
