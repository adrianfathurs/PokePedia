import React from "react";
import {
  Dropdown,
  NavItem,
} from "shards-react";

export default class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <div className=" pt-2 d-flex align-items-center">
          <img
            className="user-avatar rounded-circle mr-2"
            src={require("./../../../../images/avatars/0.jpg")}
            alt="User Avatar"
            />{" "}
          <span className="d-none d-md-inline-block">Adrian Fathur Setyawan</span>
        </div>
      </NavItem>
    );
  }
}
