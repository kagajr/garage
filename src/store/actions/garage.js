import {
  ADD_LEVEL,
  ADD_LEVEL_ERROR,
  ADD_LEVEL_SUCCESS,
  ADD_SPACES,
  ADD_SPACES_ERROR,
  ADD_SPACES_SUCCESS,
  REGISTER_PLATE_ERROR,
  REGISTER_PLATE_SUCCESS,
  REMOVE_LEVEL,
  REMOVE_LEVEL_ERROR,
  REMOVE_LEVEL_SUCCESS,
  UNREGISTER_PLATE,
  UNREGISTER_PLATE_ERROR,
  UNREGISTER_PLATE_SUCCESS,
} from "../constants/garage";

export const addLevel = (level) => ({
  type: ADD_LEVEL,
  payload: level,
});
export const addLevelSuccess = (level) => ({
  type: ADD_LEVEL_SUCCESS,
  payload: level,
});
export const addLevelError = (error) => ({
  type: ADD_LEVEL_ERROR,
  payload: error,
});
export const addSpaces = (spaces) => ({
  type: ADD_SPACES,
  payload: spaces,
});
export const addSpacesSuccess = (spaces) => ({
  type: ADD_SPACES_SUCCESS,
  payload: spaces,
});
export const addSpacesError = (error) => ({
  type: ADD_SPACES_ERROR,
  payload: error,
});
export const removeLevel = (level) => ({
  type: REMOVE_LEVEL,
  payload: level,
});
export const removeLevelSuccess = (level) => ({
  type: REMOVE_LEVEL_SUCCESS,
  payload: level,
});
export const removeLevelError = (error) => ({
  type: REMOVE_LEVEL_ERROR,
  payload: error,
});
export const registerPlate = (plate) => ({
  type: ADD_LEVEL,
  payload: plate,
});
export const unregisterPlate = (plate) => ({
  type: UNREGISTER_PLATE,
  payload: plate,
});
export const registerPlateSuccess = (plate) => ({
  type: REGISTER_PLATE_SUCCESS,
  payload: plate,
});
export const registerPlateError = (error) => ({
  type: REGISTER_PLATE_ERROR,
  payload: error,
});
export const unregisterPlateSuccess = (plate) => ({
  type: UNREGISTER_PLATE_SUCCESS,
  payload: plate,
});
export const unregisterPlateError = (error) => ({
  type: UNREGISTER_PLATE_ERROR,
  payload: error,
});
