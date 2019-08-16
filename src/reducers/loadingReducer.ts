import { loadingTypes } from "../types/action";

export default (state = false, action: loadingTypes): boolean => {
  switch (action.type) {
    case "LOADING":
      return true;
    case "LOADED":
      return false;
    default:
      return state;
  }
};
