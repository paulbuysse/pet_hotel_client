import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

//sagas
function* fetchPets() {
  try {
    let response = yield axios.get('/pets')
    yield put ({ type: 'SET_PETS', payload: response.data})

  } catch (error) {
    console.log('error in fetchPets', error)
  }
}

function* fetchOwners(){
  try {
    let response = yield axios.get('/owners')
    yield put({type: 'SET_OWNERS', payload: response.data})
  } catch (error) {
    console.log('error in fetchOwners', error)
  }
}

function* addPet(action) {
  try {
    yield axios.post('/pets', action.payload)
    yield put({type: 'FETCH_PETS'})
  } catch (error) {
    console.log('error in addPet', error)
  }
}

function* addOwner(action) {
  try {
    console.log(action.payload)
      yield axios.post('/owners', action.payload)
      yield put ({type: 'FETCH_OWNERS'})
  } catch (error) {
    console.log('error in addOwner', error)
  }
}

function* deletePet(action){
  try{
    yield axios.delete(`/pets/${action.payload}`)
    yield put ({ type: 'FETCH_PETS' })
  } catch (error) {
    console.log('error in deletePet', error)
  }
}

function* deleteOwner(action) {
  try{
    yield axios.delete(`/owners/${action.payload}`)
    yield put ({type: 'FETCH_OWNERS'})
  } catch(error) {
    console.log('error in deleteOwner', error)
  }
}

function* checkIn(action){
  try{
    yield axios.put(`/pets/${action.payload}`)
    yield put ({ type: 'FETCH_PETS' })
  } catch(error){
    console.log('error checking in pet', error)
  }
}


// const pets = [
//   {
//     id: 1,
//     owner: 'Riley',
//     name: 'Bella',
//     breed: 'Shorthair',
//     color: 'orange',
//     checked_in: true
//   },
//   {
//     id: 2,
//     owner: 'Jenni',
//     name: 'Doggo',
//     breed: 'Pupper',
//     color: 'brown',
//     checked_in: false
//   }
// ]


// reducers
const petsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PETS':
      return action.payload
    default:
      return state
  }
}


const ownerReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_OWNERS':
      return action.payload
    default:
      return state
  }
}



// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_PETS', fetchPets)
    yield takeEvery('FETCH_OWNERS', fetchOwners)
    yield takeEvery('ADD_PET', addPet)
    yield takeEvery('ADD_OWNER', addOwner)
    yield takeEvery('DELETE_PET', deletePet)
    yield takeEvery('DELETE_OWNER', deleteOwner)
    yield takeEvery('CHECK_IN', checkIn)
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const reduxStore = createStore(
  combineReducers({
    petsReducer,
    ownerReducer
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render( <Provider store={reduxStore}> <App /></Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
