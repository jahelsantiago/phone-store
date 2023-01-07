import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import shoppingCartTypes from "./shoppingCartTypes";
import { addUnit, removeUnit } from "./cartSlice";

export const itemShoppingCart = (props) => {
  const { item, add, remove } = props;
  return (
    <div className="bg-gray-200 shadow-md rounded-lg p-2 flex justify-between">
      <div>
        <h2 className="font-semibold">{item.title}</h2>
        <p>{"$"+item.price}</p>
      </div>
      <div className="flex justify-between w-20 h-min bg-gray-300 p-2 rounded-xl">
        <Button
          className="rounded-full w-6 h-6 p-0 bg-gray-700"
          onClick={() => remove(item.id)}
        >
          -
        </Button>
        <span className="mx-2">{item.units}</span>
        <Button
          className="rounded-full  w-6 h-6 p-0 "
          onClick={() => add(item.id)}
        >
          +
        </Button>
      </div>
    </div>
  );
};

itemShoppingCart.propTypes = {
  item: PropTypes.shape(shoppingCartTypes).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  add: (id) => {
    dispatch(addUnit({ id }));
  },
  remove: (id) => dispatch(removeUnit({ id })),
});

export default connect(null, mapDispatchToProps)(itemShoppingCart);
