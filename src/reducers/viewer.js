import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
  currentPageNum: 0,
};

const calPageNum = (currentPageNum, num) => {
  const result = currentPageNum + num;
  if (result >= 0) {
    return result;
  }

  return 0;
};

const viewer = (state = initialAppState, action) => {
  if (action.type === actionTypes.NEXT_BUTTON_CLICK) {
    return {
      ...state,
      currentPageNum: calPageNum(state.currentPageNum, 1),
    };
  } else if (action.type === actionTypes.PREV_BUTTON_CLICK) {
    return {
      ...state,
      currentPageNum: calPageNum(state.currentPageNum, -1),
    };
  }

  return state;
};

export default viewer;
