import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import ItemShoppingCart from "./itemShoppingCart";
import { selectCartItems, selectCartOpen } from "./cartSlice";
import shoppingCartTypes from "./shoppingCartTypes";
import TotalShoppingCart from "./totalShoppingCart";

export const shoppingCart = (props) => {
  const { open, items } = props;
  if (!open) {
    return null;
  }
  console.log(items);
  return (
    <aside className="fixed top-0 z-20 h-full w-10/12 sm:w-80 bg-gray-300  border-r-2 border-blue-800">
      <div className="relative h-screen">
        <h2 className="text-center font-bold text-2xl text-blue-800 p-2">Shopping Cart</h2>
        <div className="flex flex-col gap-2 p-2">
          {items.map((item) => (
            <ItemShoppingCart key={item.id} item={item} />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <TotalShoppingCart />
        </div>
      </div>
    </aside>
  );
};

shoppingCart.propTypes = {
  open: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape(shoppingCartTypes)).isRequired,
};

const mapStateToProps = (state) => ({
  open: selectCartOpen(state),
  items: selectCartItems(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(shoppingCart);
