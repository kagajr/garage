import {
  ADD_LEVEL,
  ADD_LEVEL_ERROR,
  ADD_LEVEL_SUCCESS,
  ADD_SPACES,
  ADD_SPACES_ERROR,
  ADD_SPACES_SUCCESS,
  REGISTER_PLATE,
  REGISTER_PLATE_ERROR,
  REGISTER_PLATE_SUCCESS,
  REMOVE_LEVEL,
  REMOVE_LEVEL_ERROR,
  REMOVE_LEVEL_SUCCESS,
  UNREGISTER_PLATE_ERROR,
  UNREGISTER_PLATE_SUCCESS,
} from "../constants/garage";
import { v4 as uuidv4 } from "uuid";

const GARAGE = {
  id: uuidv4(),
  name: `Vence's garage`,
  levels: [
    {
      name: 1,
      id: uuidv4(),
      spaces: [
        {
          id: uuidv4(),
          plate: "",
          available: true,
          group: "A0",
        },
      ],
    },
  ],
  registered: [],
};

const garageReducer = (state = GARAGE, action) => {
  switch (action.type) {
    case ADD_LEVEL:
      return {
        ...state,
      };
    case ADD_LEVEL_SUCCESS:
      return {
        ...state,
        levels: [
          ...state.levels,
          {
            name: action.payload,
            id: uuidv4(),
            spaces: [],
          },
        ],
      };
    case ADD_LEVEL_ERROR:
      return { ...state, error: action.payload };
    case REMOVE_LEVEL:
      return {
        ...state,
        levels: state.levels.filter((level) => level.name !== action.payload),
      };
    case REMOVE_LEVEL_SUCCESS:
      return {
        ...state,
        levels: state.levels.filter((level) => level.name !== action.payload),
      };
    case REMOVE_LEVEL_ERROR:
      return { ...state, error: action.payload };
    case ADD_SPACES:
      return {
        ...state,
      };
    case ADD_SPACES_SUCCESS:
      return {
        ...state,
        levels: [].concat(
          state.levels.slice(
            0,
            state.levels.findIndex((e) => e.name === action.payload.levelName)
          ),
          {
            ...state.levels.find((e) => e.name === action.payload.levelName),
            spaces: [
              ...state.levels.find((e) => e.name === action.payload.levelName)
                .spaces,
              ...Array.from(Array(action.payload.numberOfSpaces)).map(
                (idx) => ({
                  id: uuidv4(),
                  plate: "",
                  available: true,
                  group: action.payload.group,
                })
              ),
            ],
          },
          state.levels.slice(
            state.levels.findIndex((e) => e.name === action.payload.levelName) +
              1,
            state.levels.length
          )
        ),
      };
    case ADD_SPACES_ERROR:
      return { ...state, error: action.payload };
    case REGISTER_PLATE:
      return { ...state };
    case REGISTER_PLATE_SUCCESS:
      return {
        ...state,
        registered: [...state.registered, action.payload.plate],
        levels: [].concat(
          state.levels.slice(
            0,
            state.levels.findIndex((e) => e.name === action.payload.levelName)
          ),
          {
            ...state.levels.findIndex(
              (e) => e.name === action.payload.levelName
            ),
            spaces: [].concat(
              state.levels
                .find((e) => e.name === action.payload.levelName)
                .spaces.slice(
                  0,
                  state.levels
                    .find((e) => e.name === action.payload.levelName)
                    .spaces.findIndex((s) => s.id === action.payload.spaceId)
                ),
              {
                ...state.levels
                  .find((e) => e.name === action.payload.levelName)
                  .spaces.find((s) => s.id === action.payload.spaceId),
                plate: action.payload.plate,
                available: false,
              },
              state.levels
                .find((e) => e.name === action.payload.levelName)
                .spaces.slice(
                  state.levels
                    .find((e) => e.name === action.payload.levelName)
                    .spaces.findIndex((s) => s.id === action.payload.spaceId) +
                    1,
                  state.levels.find((e) => e.name === action.payload.levelName)
                    .spaces.length
                )
            ),
          },
          state.levels.slice(
            state.levels.findIndex((e) => e.name === action.payload.levelName) +
              1,
            state.levels.length
          )
        ),
      };
    case REGISTER_PLATE_ERROR:
      return { ...state, error: action.payload };
    case UNREGISTER_PLATE_SUCCESS:
      return {
        ...state,
        registered: state.registered.filter((p) => p !== action.payload.plate),
        levels: [].concat(
          state.levels.slice(
            0,
            state.levels.findIndex((e) => e.name === action.payload.levelName)
          ),
          {
            ...state.levels.findIndex(
              (e) => e.name === action.payload.levelName
            ),
            spaces: [].concat(
              state.levels
                .find((e) => e.name === action.payload.levelName)
                .spaces.slice(
                  0,
                  state.levels
                    .find((e) => e.name === action.payload.levelName)
                    .spaces.findIndex((s) => s.id === action.payload.spaceId)
                ),
              {
                ...state.levels
                  .find((e) => e.name === action.payload.levelName)
                  .spaces.find((s) => s.id === action.payload.spaceId),
                plate: "",
                available: true,
              },
              state.levels
                .find((e) => e.name === action.payload.levelName)
                .spaces.slice(
                  state.levels
                    .find((e) => e.name === action.payload.levelName)
                    .spaces.findIndex((s) => s.id === action.payload.spaceId) +
                    1,
                  state.levels.find((e) => e.name === action.payload.levelName)
                    .spaces.length
                )
            ),
          },
          state.levels.slice(
            state.levels.findIndex((e) => e.name === action.payload.levelName) +
              1,
            state.levels.length
          )
        ),
      };
    case UNREGISTER_PLATE_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default garageReducer;
