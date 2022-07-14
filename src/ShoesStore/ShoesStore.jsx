import React, { Component } from "react";
import data from "./data.json";
import Modal from "./Modal";
import ProductList from "./ProductList";

export default class ShoesStore extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
			product: {},
		};
	}

	handleOpen = (product) => {
		this.setState({ isOpen: true, product });
	};
	handleClose = () => {
		this.setState({ isOpen: false });
	};

	render() {
		const { isOpen, product } = this.state;

		return (
			<div className="container">
				<h1 className="text-center text-warning mb-5">Shoes Store</h1>
				<ProductList products={data} onClick={this.handleOpen} />
				<Modal
					isOpen={isOpen}
					onClose={this.handleClose}
					product={product}
				/>
			</div>
		);
	}
}
