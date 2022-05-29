import React from 'react';
import ProgressBar from './ProgressBar';

const Shipping = () => {
	return (
		<section>
			<div className='jumbotron p-1'>
				<h5>
					<ProgressBar step1 />
				</h5>
			</div>
		</section>
	);
};

export default Shipping;
