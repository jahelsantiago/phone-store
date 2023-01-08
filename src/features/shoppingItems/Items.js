import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchItems, selectItems } from "./itemsSlice";
import ProductTypes from "./ProductTypes";
import Product from "./Product";

export const Items = (props) => {
  const { products, fetchProducts } = props;
  
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="w-full  bg-blue-gray-100 gap-4 p-3 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

Items.propTypes = {
  items: PropTypes.objectOf(PropTypes.shape(ProductTypes)),
};

const mapStateToProps = (state) => ({
  products: selectItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchItems()),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Items);
