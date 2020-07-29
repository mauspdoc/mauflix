import React from 'react'

 export default function FormField(props){
	const {
		value,
		onChange,
		type,
		name,
		label
		} = props
	return(
				<div>			   
        <label>
          {label}
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange} 
          />
        </label>
   			</div>
	)
}
