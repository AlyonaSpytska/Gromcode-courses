import React from "react";
import User from "./User.jsx";
import Filter from "./Filter.jsx";

class UsersList extends React.Component {

  render() {
    return (
      <div>
        <Filter />
        <ul class="users">
          <li class="user">
            <span class="user__name">Tad</span>
            <span class="user__age">18</span>
          </li>

          <li class="user">
            <span class="user__name">Anna</span>
            <span class="user__age">45</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default UsersList;
