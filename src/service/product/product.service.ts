import { Fetch } from '@/Utils/Fetch';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const ProductService = {
  findAll: async (context: any = null) => {
    // we can change the base url like this
    // Fetch._baseUrl = 'http://127.0.0.1:4000/api';
    const _config = {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: "Bearer " + userToken,
      },
    };

    return await Fetch.get(`/product`, _config);
  },
};
