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
