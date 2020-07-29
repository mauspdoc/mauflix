import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault'; 
import FormField from '../../../components/FormField'; 

function CadastroCategoria() {
	const valoresIniciais = {
		nome: '',
		descricao: '',
		cor: '#C0C0C0'
	}

	const [categorias, setCategorias] = useState([]);
	const [values, setValues] = useState(valoresIniciais)

	//Handles
	const handleSubmit = (e)=>{
		e.preventDefault()
		setCategorias([...categorias, values.nome])
		setValues(valoresIniciais)
	}

	const setValue = function(key, value){
		setValues({...values,[key]:value})
	}

	const handleChange = function(e){
		const [key, value] = [e.target.getAttribute('name'),e.target.value]
		setValue(key, value)
	}
	
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={handleSubmit}>
      <FormField 
      	label="Nome da Categoria:"
      	value={values.nome}
      	type="text"
      	onChange={handleChange}
      	name="nome" 
      />
				<div>
        <label>
         Descrição:
          <textarea
            type="text"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}  
          />
        </label>
        </div>

      <FormField 
      	label="Cor:"
      	value={values.cor}
      	type="color"
      	onChange={handleChange}
      	name="cor" 
      />

        <button>
          Cadastrar
        </button>
      </form>
      <ul>
      {categorias.map((categoria, indice) => {
					return (<li key={(categoria+indice).toString()}>{categoria}</li>)
				})}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;
