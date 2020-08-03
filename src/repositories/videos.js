import config from '../config/index';

const URL_VIDEOS = `${config.API_URL}/videos`;

async function create(objectVideo) {
  try {
    const resp = await fetch(URL_VIDEOS, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(objectVideo),

    });
    const data = await resp.json();
    return data; // Retorna a promisse contendo array apos resolver
  } catch (_error) {
    return _error;
  }
}

export default {
  create,
};
