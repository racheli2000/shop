

import produce from "immer";
import actions from "../action";
import execHandler from "./reducerUtils";

const initialState = {
  AllUsers:[],
};

const user = {

   setAllUsers(){
       state.AllUsers= actions.payLoad.users;
   }

};

export default produce((state, action) => {
  execHandler(state, action, user);
}, initialState);
