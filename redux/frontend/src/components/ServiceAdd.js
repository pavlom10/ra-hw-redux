import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { changeServiceField, addService, cancelService } from '../actions/actionCreators';

function ServiceAdd() {

	const item = useSelector(state => state.serviceAdd);
	const dispatch = useDispatch();

	const handleChange = evt => {
		const {name, value} = evt.target;
		dispatch(changeServiceField(name, value));
	}

	const handleSubmit = evt => {
		evt.preventDefault();

		console.log(item.id, item.name, item.price);
		dispatch(addService(item.id, item.name, item.price));
	}

	const handleCancel = () => {
		// const {name, value} = evt.target;
		dispatch(cancelService());
	}


	return (
		<form onSubmit={handleSubmit}>
			<input name='name' onChange={handleChange} value={item.name} />
			<input name='price' onChange={handleChange} value={item.price} />
			<button type='submit'>Save</button>
			{item.cancel && <button onClick={handleCancel}>Cancel</button>}
		</form>
	);
}

export default ServiceAdd;
