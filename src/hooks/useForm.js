import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);
  const setValue = function setValue(key, value) {
    setValues({ ...values, [key]: value });
  };

  const handleChange = (e) => {
    const [key, value] = [e.target.getAttribute('name'), e.target.value];
    setValue(key, value);
  };
  const clearForm = () => setValues(valoresIniciais);

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
