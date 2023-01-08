import React from "react";
import ProductTypes from "./ProductTypes";
import { Button, Tooltip } from "@material-tailwind/react";
import { FaShoppingCart } from "react-icons/fa";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addToCart } from "../shoppingCart/cartSlice";
import { motion } from "framer-motion";

function getPriceWithOutDiscount(price, discountPercentage) {
  let newPrice = price - (price * discountPercentage) / 100;
  return newPrice.toFixed(2);
}

function Product(props) {
  const { product, add } = props;
  return (
    <div className="rounded-md h-min bg-white drop-shadow-lg">
      {/* Card Header */}
      <div className="flex justify-between m-2">
        <h4 className="bg-blue-200 rounded-md w-min px-1 font-semibold">
          {product.discountPercentage + "%"}
        </h4>
        <h4 className="shadow-md shadow-blue-200 rounded-md w-min px-1 font-medium">
          {product.category}
        </h4>
      </div>
      {/* Category */}
      <img src={product.thumbnail} alt={product.title} className="sm:h-50" />
      {/*Card Body*/}
      <div className="p-2">
        <h3 className="font-bold text-lg">{product.title}</h3>
        <p className="text-sm">{product.description}</p>
        {/* Footer */}
        <div className="flex justify-between">
          <div>
            <p className="text-red-600 line-through text-sm">
              {"$" +
                getPriceWithOutDiscount(
                  product.price,
                  product.discountPercentage
                )}
            </p>
            <p className="text-blue-700 font-semibold">{"$" + product.price}</p>
          </div>
          <Tooltip content="Añadir al Carrito">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                className="p-2 rounded-full"
                variant="outlined"
                onClick={() =>
                  add(
                    product.id,
                    product.title,
                    product.price,
                    product.discountPercentage
                  )
                }
              >
                <FaShoppingCart className="text-2xl" />
              </Button>
            </motion.button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape(ProductTypes).isRequired,
  add: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dipatch) => ({
  add: (id, title, price, discountPercentage) => {
    dipatch(addToCart({ id, title, price, discountPercentage, units: 1 }));
  },
});

export default connect(null, mapDispatchToProps)(Product);
