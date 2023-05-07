import { useState } from 'react';
// FOR PRODUCTION
// import { useNavigate } from 'react-router-dom';
import {
	useStripe,
	useElements,
	PaymentElement,
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
	// FOR PRODUCTION
	// const navigate = useNavigate();

	const stripe = useStripe();
	const elements = useElements();

	const [loading, setLoading] = useState(false);

	const handleSubmit = async event => {
		event.preventDefault();

		// FOR DEVELOPMENT
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 4000);

		/* FOR PRODUCTION
		if (!stripe || !elements) {
			return;
		}

		setLoading(true);
		const result = await stripe.confirmPayment({
			elements,
			redirect: 'if_required',
		});
		setLoading(false);

		if (result.error) {
			console.log(result.error.message);
		} else {
			navigate('/', {
				state: {
					result,
				},
			});
		}
		*/
	};

	return (
		<form onSubmit={handleSubmit}>
			<PaymentElement />
			<button
				className='btn btn-primary mt-3'
				disabled={!stripe && !elements && loading}
			>
				{loading ? (
					<span className='fa fa-spinner fa-spin'></span>
				) : (
					'Pay now'
				)}
			</button>
		</form>
	);
};

export default CheckoutForm;
