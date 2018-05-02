import React from "react";
import { connect } from "react-redux";
import ModalWindow from "./components/ModalWindow";
import Button from "material-ui/Button";
import { handleModalOpenToggleAction } from "./components/ModalWindow/actions/modalWindow";

class App extends React.Component {
  handleModalOpen(isModalOpen) {
    this.props.dispatch(handleModalOpenToggleAction(isModalOpen));
  }
  render() {
    return (
      <div className="open-modal-btn">
        <Button
          onClick={this.handleModalOpen.bind(this, true)}
          variant="raised"
          size="large"
          color="primary"
        >
          Открыть окно
        </Button>
        <ModalWindow />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectItems: state.selectItems,
    isModalOpen: state.isModalOpen
  };
}

export default connect(mapStateToProps)(App);
