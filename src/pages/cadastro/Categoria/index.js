import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#C0C0C0',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  // Handles
  const handleSubmit = (e) => {
    e.preventDefault();
    setCategorias([...categorias, values.nome]);
    setValues(valoresIniciais);
  };

  const setValue = function setValue(key, value) {
    setValues({ ...values, [key]: value });
  };

  const handleChange = (e) => {
    const [key, value] = [e.target.getAttribute('name'), e.target.value];
    setValue(key, value);
  };

  useEffect(
    () => {
      async function fetchCategorias() {
        const urlCategorias = 'http://localhost:8080/categorias';
        const resp = await fetch(urlCategorias);
        const data = await resp.json();
        return data; // Array with categorias
      }
      fetchCategorias().then((data) => setCategorias([...data]));
    },
    [],
  ); // [] permite executar apenas uma vez

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          value={values.nome}
          type="text"
          onChange={handleChange}
          name="nome"
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
          as="textarea"
        />

        <FormField
          label="Cor:"
          value={values.cor}
          type="color"
          onChange={handleChange}
          name="cor"
        />

        <Button>Cadastrar</Button>
      </form>
      {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => <li key={(categoria.nome + indice).toString()}>{categoria.nome}</li>)}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
