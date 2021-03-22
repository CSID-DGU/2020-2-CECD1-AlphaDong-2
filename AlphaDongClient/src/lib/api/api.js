import client from './client';

export const getResultList = () => client.get('/data');
export const postVinImage = (formData) =>
  client.post('/detect', formData, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
