import { createStore } from "redux";
import { manageUsersList } from "./users.reducer";

const store = createStore(manageUsersList);

export default store;
