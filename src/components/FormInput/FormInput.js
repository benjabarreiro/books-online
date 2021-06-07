import React from 'react';
import './FormInput.css';

export default function CartFormComponents({ name, setState }) {
	return (
		<div className="form-section-display">
			<label htmlFor="">{name}</label>
			<input className="input" type="text" onChange={(e) => setState(e.target.value)}/>
		</div>
	)
}
