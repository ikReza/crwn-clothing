import * as actions from "./shopConstants";

export const updateCollections = (collectionsMap) => async (dispatch) => {
  dispatch({
    type: actions.UPDATE_COLLECTIONS,
    payload: collectionsMap,
  });
};
