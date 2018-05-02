const initialState = {
  selectItems: [
    {
      id: Math.random(),
      selectField: "Twin",
      numberField: 0
    }
  ],
  isModalOpen: false
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      state = Object.assign({}, state, {
        isModalOpen: action.payload.isModalOpen
      });
      break;

    case "ADD_SELECT_ITEM":
      state = Object.assign({}, state, {
        selectItems: action.payload.selectItems
      });
      break;

    case "EDIT_SELECT_ITEM":
      state = Object.assign({}, state, {
        selectItems: action.payload.selectItems
      });
      break;

    case "REMOVE_SELECT_ITEM":
      state = Object.assign({}, state, {
        selectItems: action.payload.selectItems
      });
      break;

    case "CLEAR_MODAL_STATE":
      state = initialState;
      break;

    default:
      state = initialState;
      break;
  }
  return state;
};
