
import produce from "immer";
import execHandler from "./reducerUtils";

const initialState = {
  AllOrders:[],
  orderNumber:"1"
};

const order = {

    getOrders(state, action) {

        state.AllOrders.push(action.payLoad);

    },

    setOrderNumber(state, action){
        state.orderNumber++;
    }

};

export default produce((state, action) => {
  execHandler(state, action, order);
}, initialState);
