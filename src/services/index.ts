import config from '../config';

const { baseUrl } = config;

type Params = {
  [paramName: string]: string
}

export const callService = async (url: string, params?: Params) => {
  const queryString = params ?
    Object.keys(params).reduce((res, key, id) => res + `${!id ? '?' : '&'}${key}=${params[key]}`, '') :
    '';
  
  try {
    const response = await fetch(
      `${baseUrl}${url}${queryString}`
    );
    return await response.json();
  } catch (e) {
    console.error(e);
  }
  
}
