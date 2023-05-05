import { PaymentElement } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
	return (
		<form>
			<PaymentElement />
			<button className='btn btn-primary mt-3'>Submit</button>
		</form>
	);
};

export default CheckoutForm;
