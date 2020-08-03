import config from '../config/index';

const URL_CATEGORIES = `${config.API_URL}/categorias`;

async function getAllWithVideos() {
  try {
    const resp = await fetch(`${URL_CATEGORIES}?_embed=videos`);
    const data = await resp.json();
    return data; // Retorna a promisse contendo array apos resolver
  } catch (e) {
    return e;
  }
}
async function getAll() {
  try {
    const resp = await fetch(URL_CATEGORIES);
    const data = await resp.json();
    return data; // Retorna a promisse contendo array apos resolver
  } catch (e) {
    return e;
  }
}

async function create(objectCategoria) {
  try {
    const resp = await fetch(URL_CATEGORIES, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(objectCategoria),

    });
    const data = await resp.json();
    return data; // Retorna a promisse contendo array apos resolver
  } catch (_error) {
    return _error;
  }
}
export default {
  getAllWithVideos,
  getAll,
  create,
};
