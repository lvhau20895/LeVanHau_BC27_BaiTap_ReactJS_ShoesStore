import React from "react";

const ProductItem = ({ product, onClick }) => {
	return (
		<div className="card border border-3">
			<img
				className="card-img-top"
				src={product.image}
				alt={product.alias}
				width="100%"
				height={350}
			/>
			<div className="card-body bg-secondary text-light">
				<h4 className="card-title">{product.name}</h4>
				<p className="card-text">$ {product.price}</p>
				<button
					className="btn btn-dark"
					onClick={() => onClick(product)}
				>
					Details
				</button>
			</div>
		</div>
	);
};

export default ProductItem;
