import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

export default function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = { titulo: 'Video Padrão', url: 'youtube.com/#video', categoria: 'Front End' };
  const { values, handleChange } = useForm(valoresIniciais);
  const [categoriasTitles, setCategoriasTitles] = useState([]);
  useEffect(() => {
    categoriasRepository.getAll().then((data) => {
      setCategorias([...data]);
      setCategoriasTitles(data.map((categoria) => categoria.titulo));
    });
  }, []);
  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (!categoriasTitles.includes(values.categoria)) {
          return;
        }
        const categoriaId = categorias.find((categoria) => categoria.titulo === values.categoria).id || false;
        if (categoriaId === false) {
          return;
        }
        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId,
        }).then(() => history.push('/'));
      }}
      >
        <FormField
          label="Titulo do vídeo"
          value={values.titulo}
          type="text"
          onChange={handleChange}
          name="titulo"
        />
        <FormField
          label="Endereço do vídeo"
          value={values.url}
          type="text"
          onChange={handleChange}
          name="url"
        />
        {
          categorias.length !== 0 && (
            <FormField
              label="Categoria"
              value={values.categoria}
              type="text"
              onChange={handleChange}
              name="categoria"
              suggestions={categoriasTitles}
            />
          )
        }
        <Button>Cadastrar</Button>
      </form>
      <Link to="/cadastro/categoria">Cadastrar categoria</Link>
    </PageDefault>
  );
}
