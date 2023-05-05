import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	useStripe,
	useElements,
	PaymentElement,
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
	const navigate = useNavigate();

	const stripe = useStripe();
	const elements = useElements();

	const [loading, setLoading] = useState(false);

	const handleSubmit = async event => {
		// We don't want to let default form submission happen here,
		// which would refresh the page.
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js hasn't yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return;
		}

		setLoading(true);
		const result = await stripe.confirmPayment({
			//`Elements` instance that was used to create the Payment Element
			elements,
			redirect: 'if_required',
		});
		setLoading(false);

		if (result.error) {
			// Show error to your customer (for example, payment details incomplete)
			console.log(result.error.message);
		} else {
			navigate('/', {
				state: {
					result,
				},
			});
		}
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
