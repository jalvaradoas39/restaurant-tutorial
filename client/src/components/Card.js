import React from 'react';

const Card = ({ product }) => (
	<div className='col-md-4 my-3'>
		<div className='card h-100'>
			<a href='#!'>
				<img
					className='img-fluid w-100'
					src={`/uploads/${product.fileName}`}
					alt='product'
				/>
			</a>

			<div className='card-body text-center'>
				<h5>{product.productName}</h5>
				<hr />
				<h6 className='mb-3'>
					<span className='text-secondary mr-2'>
						{product.productPrice.toLocaleString('en-US', {
							style: 'currency',
							currency: 'USD',
						})}
					</span>
				</h6>
				<p>
					{product.productDesc.length > 60
						? product.productDesc.substring(0, 60) + '...'
						: product.productDesc.substring(0, 60)}
				</p>
				<button
					type='button'
					className='btn btn-secondary btn-sm mr-1 my-1'
				>
					<i className='far fa-edit pr-1'></i>
					Edit
				</button>
				<button type='button' className='btn btn-danger btn-sm'>
					<i className='far fa-trash-alt pr-1'></i>
					Delete
				</button>
			</div>
		</div>
	</div>
);

export default Card;
