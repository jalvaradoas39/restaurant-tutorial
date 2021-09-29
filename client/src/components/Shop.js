import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';
import { getCategories } from '../redux/actions/categoryActions';
import { getProductsByFilter } from '../redux/actions/filterActions';
import Card from './Card';

const Shop = () => {
	const [text, setText] = useState('');

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);

	const { products } = useSelector(state => state.products);
	const { categories } = useSelector(state => state.categories);

	const handleSearch = e => {
		setText(e.target.value);

		dispatch(getProductsByFilter({ type: 'text', query: e.target.value }));
	};

	return (
		<section className='shop-page m-4'>
			<div className='jumbotron'>
				<h1 className='display-4'>Shop</h1>
			</div>
			<div className='row'>
				<div className='col-md-3 border-right'>
					<div className='text-muted mb-2'>
						Filters <span className='fas fa-sliders-h'></span>
					</div>

					<nav className='navbar navbar-expand-lg navbar-light bg-light border-top p-3'>
						<form className='form-inline my-2 my-lg-0'>
							<input
								className='form-control mr-sm-2'
								type='search'
								placeholder='Search'
								aria-label='Search'
								name='search'
								value={text}
								onChange={handleSearch}
							/>
							<button
								className='btn btn-outline-success my-2 my-sm-0'
								type='submit'
								disabled={true}
							>
								Search
							</button>
						</form>
					</nav>

					<div className='border-top border-bottom bg-light p-3'>
						{categories &&
							categories.map(c => (
								<div key={c._id} className='form-check'>
									<input
										className='form-check-input'
										type='checkbox'
										value=''
										id='flexCheckChecked'
									/>
									<label
										className='form-check-label'
										htmlFor='flexCheckChecked'
									>
										{c.category}
									</label>
								</div>
							))}
					</div>
				</div>
				<div className='col-md-9'>
					<div className='row'>
						{products.map(p => (
							<Card key={p._id} product={p} homePage={true} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Shop;
