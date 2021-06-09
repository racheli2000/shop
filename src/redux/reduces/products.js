
import produce from "immer";
import execHandler from "./reducerUtils";

const initialState = {
  AllProducts: [
    {
      name: "בקבוק שתיה ענק",
      price: 39.9,
      picture: "m03516051099.jpg",
    },
    {
      name: "מי גוף מנצנצים מיני",
      price: 34.9,
      picture: "m03510051099.jpg",
    },
    {
      name: "מי גוף מנצנצים",
      price: 79.9,
      picture: "m03107051099.jpg",
    },
    {
      name: "קרם גוף מנצנץ",
      price: 69.9,
      picture: "fw7a5605.jpg",
    },
    {
      name: "דאודורנט רול און",
      price: 39.9,
      picture: "m03109051099_2_.jpg",
    },
    {
      name: "דאודורנט ספריי",
      price: 39.9,
      picture: "m03108051099.jpg",
    },
    {
      name: "קרם גוף",
      price: 69.9,
      picture: "m03110051099.jpg",
    },
    {
      name: "קרם ידיים",
      price: 39.9,
      picture: "m03503051099.jpg",
    },
    {
      name: "ג'ל רחצה",
      price: 49.9,
      picture: "m03155051099.jpg",
    },
    {
      name: "קרם קצפת",
      price: 69.9,
      picture: "m03112051099.jpg",
    },
    {
      name: "סבון קצפת",
      price: 59.9,
      picture: "m10432999999.jpg",
    },
    {
      name: "מברשת שיער ומראה ילדות",
      price: 39.9,
      picture: "m03555999999-1.jpg",
    },
    {
      name: "מברשת שיער עם מראה",
      price: 39.9,
      picture: "m03506051099_2_.jpg",
    },
    {
      name: "מברשת שיער שפתיים",
      price: 19.9,
      picture: "m08832999999_1.jpg",
    },
    {
      name: "תיק רחצה קריצה",
      price: 39.9,
      picture: "m03505051099.jpg",
    },
    {
      name: "סט שלישיית תיקי רחצה",
      price: 119.9,
      picture: "m03508051099_2.jpg",
    },
    {
      name: "ספוג פרח לבבות",
      price: 12.9,
      picture: "m03650999999.jpg",
    },
    {
      name: "קיט מיני ילדות",
      price: 99.9,
      picture: "m03509051099.jpg",
    },
    {
      name: "תיק מזוודה פונפון",
      price: 79.9,
      picture: "m03703051099.jpg",
    },
    {
      name: "קרם קצפת",
      price: 69.9,
      picture: "m53014050399.jpg",
    },
    {
      name: "בושם",
      price: 159.9,
      picture: "m03106051099.jpg",
    },
    {
      name: "בקבוק שתיה",
      price: 39.9,
      picture: "m03504051099.jpg",
    },
    {
      name: "סט שלשיית ליפ גלוס",
      price: 49.9,
      picture: "m03402999999.jpg",
    },
    {
      name: "סרט ראש פפיון",
      price: 24.9,
      picture: "m03565999999_2_.jpg",
    },
  ],
  selectedProducts:[]
};

const products = {

    addProduct(state, action) {

        let name=action.payLoad.product.name;
        let price= action.payLoad.product.price;
        let amount=1;
        const sp={name, price, amount};

        state.selectedProducts.push(sp);  

    },

    deleteProduct(state, action) {
        state.selectedProducts= state.selectedProducts.filter((n) => n.name!=action.payLoad.name)
    },

    addToAmount (state, action) {
        state.selectedProducts[action.payLoad.index].amount++;
    },

    deleteFromAmount (state, action) {
        if(state.selectedProducts[action.payLoad.index].amount-1==0)
        {
            debugger;
            state.selectedProducts= state.selectedProducts.filter((sp, index) => index!=action.payLoad.index);

        }
        else
            state.selectedProducts[action.payLoad.index].amount--;
    }

};

export default produce((state, action) => {
  execHandler(state, action, products);
}, initialState);
