import {ADD_ITEM, REMOVE_ITEM} from '../constants';

export const add = function(payload) {
  return {
    type: ADD_ITEM,
    payload,
  };
};

export const remove = function(payload) {
  return {
    type: REMOVE_ITEM,
    payload,
  };
};
