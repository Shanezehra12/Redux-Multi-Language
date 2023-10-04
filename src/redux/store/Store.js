import { createStore, combineReducers } from "redux";
import { Reducers } from "../reducer/Reducers";
import { ThemeReducer } from "../reducer/ThemeReducer";
import { LanguageReducer } from "../reducer/LanguageReducer";

const totalReducer = combineReducers({Reducers, ThemeReducer, LanguageReducer});
export const mystore = createStore(totalReducer);