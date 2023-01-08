import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { toggleCart } from "../shoppingCart/cartSlice";
import { motion } from "framer-motion";

export const NavBar = (props) => {
  const { toggleCart } = props;
  return (
    <nav className="sticky top-0 py-1 px-3 bg-blue-700 flex justify-between align-middle drop-shadow-md z-10">
      <div className="bg-white rounded-lg px-1 h-min">
        <h1 className="text-xl text-gray-80 font-bold">LOGO HERE</h1>
      </div>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button className="p-3 rounded-xl" onClick={toggleCart}>
          <FaShoppingCart className="text-2xl" />
        </Button>
      </motion.button>
    </nav>
  );
};

NavBar.propTypes = {
  toggleCart: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(null, mapDispatchToProps)(NavBar);
