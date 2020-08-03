import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#C0C0C0',
  };

  const [categorias, setCategorias] = useState([]);
  const { values, handleChange, clearForm } = useForm(valoresIniciais);

  // Handles
  const handleSubmit = (e) => {
    e.preventDefault();
    setCategorias([...categorias, values]);
    categoriasRepository.create(values);
    clearForm();
  };

  useEffect(
    () => {
      categoriasRepository.getAll().then((data) => setCategorias([...data]));
    },
    [],
  ); // [] permite executar apenas uma vez

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          value={values.titulo}
          type="text"
          onChange={handleChange}
          name="titulo"
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
        {categorias.map((categoria, indice) => <li key={(categoria.titulo + indice).toString()}>{categoria.titulo}</li>)}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
