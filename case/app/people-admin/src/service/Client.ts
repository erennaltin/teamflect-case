import axios from 'axios'

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept-Language': 'en-US',
  },
  timeout: 30000,
});

type RequestType = {
  url: string;
  type: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  config?: any;
}

const makeRequest = async ({url, type, body, config} : RequestType)  => {
  try {
    if (type === 'GET') {
      return config ? await axiosClient.get(url, config) : await axiosClient.get(url);
    } 
    else if (type === 'DELETE') {
      return config ? await axiosClient.delete(url, config) : await axiosClient.delete(url);
    } 
    else if (type === 'POST') {
      return config ? await axiosClient.post(url, body, config) : await axiosClient.post(url, body);
    }
  } catch (error: any) {
    const statusCode = error?.response?.status;
    return error.response;
  }
};



const GET = async (url: string, config?: any) => {
  return await makeRequest({url, type: 'GET', body: null, config});
};

const POST = async (url: string, body: any, config?: any) => {
  return await makeRequest({url, type: 'POST', body, config});
};

const DELETE = async (url: string, config?: any) => {
  return await makeRequest({url, type: 'DELETE', body: null, config});
};

export {GET, POST, DELETE};