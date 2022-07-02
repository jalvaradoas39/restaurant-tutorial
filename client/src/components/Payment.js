import React from 'react';
import ProgressBar from './ProgressBar';

const Payment = () => {
	return (
		<section>
			<div className='jumbotron p-1'>
				<h5>
					<ProgressBar step1 step2 />
				</h5>
			</div>
			Inside payment component
		</section>
	);
};

export default Payment;
