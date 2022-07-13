import { all, put, takeEvery } from "redux-saga/effects";
import {
  addLevelError,
  addLevelSuccess,
  addSpacesError,
  addSpacesSuccess,
  registerPlateError,
  registerPlateSuccess,
  unregisterPlateError,
  unregisterPlateSuccess,
} from "../store/actions/garage";
import {
  ADD_LEVEL,
  ADD_SPACES,
  REGISTER_PLATE,
  UNREGISTER_PLATE,
} from "../store/constants/garage";
/**
 * Log in user
 *
 * Hit the Express endpoint to get the current GitHub user from the cookie
 */

function* addLevel(action) {
  try {
    yield put(addLevelSuccess(action.payload));
  } catch (error) {
    yield put(addLevelError(error));
  }
}

function* addSpaces(action) {
  try {
    console.log(action);
    yield put(addSpacesSuccess(action.payload));
  } catch (error) {
    console.log(error);
    yield put(addSpacesError(error));
  }
}

function* registerPlate(action) {
  try {
    yield put(registerPlateSuccess(action.payload));
  } catch (error) {
    yield put(registerPlateError(error));
  }
}

function* unregisterPlate(action) {
  try {
    yield put(unregisterPlateSuccess(action.payload));
  } catch (error) {
    yield put(unregisterPlateError(error));
  }
}

// If any of these functions are dispatched, invoke the appropriate saga
function* rootSaga() {
  yield all([
    takeEvery(ADD_SPACES, addSpaces),
    takeEvery(ADD_LEVEL, addLevel),
    takeEvery(REGISTER_PLATE, registerPlate),
    takeEvery(UNREGISTER_PLATE, unregisterPlate),
  ]);
}

export default rootSaga;
