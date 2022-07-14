import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, onClick }) => {
	return (
		<div className="row">
			{products.map((product, index) => {
				return (
					<div key={index} className="col-md-4 mb-4">
						<ProductItem product={product} onClick={onClick} />
					</div>
				);
			})}
		</div>
	);
};

export default ProductList;
