import Axios from 'axios';
import { ADD_ITEM, DELETE_ITEM, GET_ITEMS, ITEMS_LOADING } from './types';

export const getItems = () => async (dispatch) => {
  // Dispatch an action that you are retrieving data from database,
  dispatch(setItemLoading());
  try {
    // Make request to the backend
    const { data } = await Axios.get('/api/items');
    // On success send data the reducer
    dispatch({
      type: GET_ITEMS,
      payload: data,
    });
  } catch (error) {
    return error;
  }
}

export const addItem = (item) => async (dispatch) => {
  try {
    const { data } = await Axios.post('/api/items', item );
    dispatch({
      type: ADD_ITEM,
      payload: data
    })
  } catch (error) {
    return error;
  }
}

export const deleteItem = (id) => async (dispatch) => {
  try {
    await Axios.delete(`/api/items/${id}`);
    dispatch({
      type: DELETE_ITEM,
      payload: id,
    });
  } catch (error) {
    return error;
  }
}

export const setItemLoading =() =>{
  return {
    type: ITEMS_LOADING
  }
}