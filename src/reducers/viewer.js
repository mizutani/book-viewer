import * as actionTypes from 'utils/actionTypes';
import { createObjectURL } from 'utils/imageHelper';

const initialAppState = {
  currentPageNum: 0,
  open: false,
  items: [
    {
      id: 1,
      file: '/img/sample/1.png',
    },
    {
      id: 2,
      file: '/img/sample/2.png',
    },
    {
      id: 3,
      file: '/img/sample/3.png',
    },
    {
      id: 4,
      file: '/img/sample/4.png',
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
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: state.items.length + 1,
            file: createObjectURL(action.files[0])
          }
        ]
      };
    default:
      return state;
  }
};

export default viewer;
