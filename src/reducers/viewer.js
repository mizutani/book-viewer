import * as actionTypes from 'utils/actionTypes';

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
      };
    default:
      return state;
  }
};

export default viewer;
