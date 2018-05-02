import React from "react";
import { MenuItem } from "material-ui/Menu";
import { FormControl } from "material-ui/Form";
import Select from "material-ui/Select";
import TextField from "material-ui/TextField";
import {
  editInputAction,
  removeSelectItemAction
} from "../ModalWindow/actions/modalWindow";
import { connect } from "react-redux";

class SelectItem extends React.Component {
  handleChange(field, event) {
    const { id } = this.props.item;
    const { value } = event.target;

    this.props.dispatch(editInputAction(field, id, value));
  }

  removeItem() {
    const { id } = this.props.item;

    this.props.dispatch(removeSelectItemAction(id));
  }
  render() {
    console.log(this.props.item);
    return (
      <div>
        <FormControl style={{ minWidth: "140px" }}>
          <Select
            value={this.props.item.selectField}
            onChange={this.handleChange.bind(this, "selectField")}
          >
            <MenuItem value="Twin">Twin</MenuItem>
            <MenuItem value="Tripple">Tripple</MenuItem>
            <MenuItem value="Quadro">Quadro</MenuItem>
          </Select>
        </FormControl>
        <TextField
          style={{ maxWidth: "80px" }}
          id="number"
          value={this.props.item.numberField}
          onChange={this.handleChange.bind(this, "numberField")}
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
        />
        <span
          className="remove-line-btn"
          onClick={this.removeItem.bind(this)}
        />
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

export default connect(mapStateToProps)(SelectItem);
