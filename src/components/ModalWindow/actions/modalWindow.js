import { store } from "../../../index";

export function handleModalOpenToggleAction(isModalOpen) {
  return () => {
    store.dispatch({
      type: "TOGGLE_MODAL",
      payload: {
        isModalOpen
      }
    });

    if (!isModalOpen) {
      store.dispatch({
        type: "CLEAR_MODAL_STATE"
      });
    }
  };
}

export function addSelectItemAction() {
  return () => {
    const selectItems = store.getState().selectItems.map(item => item);
    const initialItem = {
      id: Math.random(),
      selectField: "Twin",
      numberField: 0
    };

    selectItems.push(initialItem);

    store.dispatch({
      type: "ADD_SELECT_ITEM",
      payload: {
        selectItems
      }
    });
  };
}

export function editInputAction(field, id, value) {
  return () => {
    const initialSelectItems = store.getState().selectItems.map(item => item);

    const selectItems = initialSelectItems.map(item => {
      if (item.id === id) {
        item[field] = value;
        return item;
      }
      return item;
    });

    store.dispatch({
      type: "EDIT_SELECT_ITEM",
      payload: {
        selectItems
      }
    });
  };
}

export function removeSelectItemAction(id) {
  return () => {
    const initialSelectItems = store.getState().selectItems.map(item => item);

    const selectItems = initialSelectItems.filter(item => {
      return item.id !== id;
    });

    store.dispatch({
      type: "REMOVE_SELECT_ITEM",
      payload: {
        selectItems
      }
    });
  };
}

export function saveNCloseModalAction() {
  return () => {
    //Не был уверен, что именно подразумевается под сохранением данных в обьект
    //т.к. использовал редакс
    //возможно это должен быть запрос на сервер с отправкой этих данных
    //в любом случае данные хранятся локально в сторе,
    //поэтому при закрытии окна я их очищаю
    store.dispatch({
      type: "CLEAR_MODAL_STATE"
    });
  };
}
