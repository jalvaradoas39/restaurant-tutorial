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

	const handleSubmit = async event => {
		// We don't want to let default form submission happen here,
		// which would refresh the page.
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js hasn't yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return;
		}

		const result = await stripe.confirmPayment({
			//`Elements` instance that was used to create the Payment Element
			elements,
			redirect: 'if_required',
		});

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
			<button className='btn btn-primary mt-3' disabled={!stripe}>
				Submit
			</button>
		</form>
	);
};

export default CheckoutForm;
