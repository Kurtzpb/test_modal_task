import React from "react";
import Dialog, { DialogContent, DialogTitle } from "material-ui/Dialog";
import Button from "material-ui/Button";
import { connect } from "react-redux";

import {
  handleModalOpenToggleAction,
  addSelectItemAction,
  saveNCloseModalAction
} from "./actions/modalWindow";

import SelectItem from "../SelectItem";

class ModalWindow extends React.Component {
  handleModalClose(isModalOpen) {
    this.props.dispatch(handleModalOpenToggleAction(isModalOpen));
  }

  saveNcloseModal() {
    this.props.dispatch(saveNCloseModalAction());
  }

  addSelectItem() {
    this.props.dispatch(addSelectItemAction());
  }
  render() {
    return (
      <Dialog open={this.props.isModalOpen}>
        <div className="modal-dialog-header">
          <DialogTitle>Структура номеров</DialogTitle>
          <span
            onClick={this.handleModalClose.bind(this, false)}
            className="close-btn"
          >
            ×
          </span>
        </div>
        <DialogContent>
          {this.props.selectItems.map(item => (
            <SelectItem key={item.id} item={item} />
          ))}
          <Button color="primary" onClick={this.addSelectItem.bind(this)}>
            Добавить
          </Button>
          <div className="control-btns">
            <Button
              variant="raised"
              color="primary"
              onClick={this.saveNcloseModal.bind(this)}
            >
              Сохранить
            </Button>
            <Button
              onClick={this.handleModalClose.bind(this, false)}
              variant="raised"
              color="default"
            >
              Выйти
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectItems: state.selectItems,
    isModalOpen: state.isModalOpen
  };
}

export default connect(mapStateToProps)(ModalWindow);
