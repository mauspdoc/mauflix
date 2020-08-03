import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categorias from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  useEffect(() => {
    categorias.getAllWithVideos().then((data) => setDadosIniciais([...data]));
  }, []);
  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length !== 0 && (
      <>
        <BannerMain
          videoTitle={dadosIniciais[0].videos[0].titulo}
          url={dadosIniciais[0].videos[0].url}
          videoDescription="O que é Front-end?"
        />

        {dadosIniciais.map((categoria, index) => {
          if (index === 0) { return <Carousel key={categoria.id} ignoreFirstVideo category={categoria} />; }
          return <Carousel key={categoria.id} category={categoria} />;
        })}
      </>
      )}
    </PageDefault>
  );
}

export default Home;
