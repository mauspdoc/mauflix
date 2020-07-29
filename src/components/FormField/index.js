import React from 'react'

 export default function FormField(props){
	const {
		value,
		onChange,
		type,
		name,
		label
		} = props
	if (type !== "textarea"){
			return(
				<div>			   
        <label>
          {label}
        </label>
        <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange} 
                  />
   			</div>
	)
	}
	if (type === "textarea"){
			return(
				<div>			   
        <label>
          {label}
          <textarea
            type="text"
            name={name}
            value={value}
            onChange={onChange} 
          />
        </label>
   			</div>
	)
	}
}
