import React from "react";

const Modal = ({ isOpen = false, onClose, product }) => {
	const styleModal = {
		display: isOpen ? "block" : "none",
	};

	return (
		<>
			<div
				style={styleModal}
				className="modal fade show"
				id="modelId"
				tabIndex={-1}
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">{product.name}</h5>
							<button
								type="button"
								className="btn-close"
								onClick={onClose}
							/>
						</div>
						<div className="modal-body">
							<img
								src={product.image}
								alt={product.alias}
								width="100%"
								height="350px"
							/>
							<div className="row mb-3">
								<div className="col-md-4 fw-bold">Price:</div>
								<div className="col-md-8">
									$ {product.price}
								</div>
							</div>
							<div className="row mb-3">
								<div className="col-md-4 fw-bold">
									Description:
								</div>
								<div className="col-md-8">
									{product.description}
								</div>
							</div>
							<div className="row">
								<div className="col-md-4 fw-bold">
									Short Description:
								</div>
								<div className="col-md-8">
									{product.shortDescription}
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								onClick={onClose}
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
			{isOpen && <div className="modal-backdrop fade show"></div>}
		</>
	);
};

export default Modal;
