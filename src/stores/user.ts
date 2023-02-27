import { createStore } from "solid-js/store";

export const [user, setUser] = createStore({
  loggedIn: false
});