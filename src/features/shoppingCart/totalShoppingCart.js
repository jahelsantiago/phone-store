import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { selectCartTotalPrice } from "./cartSlice";
import { motion } from "framer-motion";

export const totalShoppingCart = (props) => {
  const { total } = props;
  return (
    <div className="w-full bg-gray-400 p-2 rounded-t-xl">
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl">Subtotal</h2>
          <p className="text-3xl text-blue-700">{"$" + total}</p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button>Ckeckout</Button>
        </motion.button>
      </div>
    </div>
  );
};

totalShoppingCart.propTypes = {
  total: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  total: selectCartTotalPrice(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(totalShoppingCart);
