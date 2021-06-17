import { call, put, takeEvery } from 'redux-saga/effects'
import {GET_USER, GET_ITEM_USER} from './action_const';
import axios from 'axios';
import { HOST } from '../env_const';
import { getsuccess, geterros, setDisplay, getItemSuccess } from './actions';

export function* rootSaga() {
  yield takeEvery(GET_USER, fetchUser);
  yield takeEvery(GET_ITEM_USER, fetchItemUser);
}

function* fetchUser(){
    try {
        let res = yield call(getAllUser);
        yield put(setDisplay("none"));
        if(res.status == "200"){
           yield put(getsuccess(res.data));
        } else{
           yield put(geterros(res.message));
        }
      } catch (error) {
        yield put(geterros(error));
      }
}

function* fetchItemUser(action){
  try {
      let res = yield call(getItemUser, action.payload);
      if(res.status == "200"){
         yield put(getItemSuccess(res.data));
      } else{
         yield put(geterros(res.message));
      }
    } catch (error) {
      yield put(geterros(error));
    }
}

function getAllUser() {
    return axios.get(`${HOST}/users`);
  }

  function getItemUser(id) {
    return axios.get(`${HOST}/users/${id}`);
  }