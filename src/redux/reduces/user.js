

import produce from "immer";
import execHandler from "./reducerUtils";

const initialState = {
  AllUsers:[],
};

const user = {

   setAllUsers(state, action){
       state.AllUsers= action.payLoad;
   }

};

export default produce((state, action) => {
  execHandler(state, action, user);
}, initialState);
