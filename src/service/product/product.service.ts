import { Fetch } from '@/Utils/Fetch';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const ProductService = {
  findAll: async (context: any = null) => {
    const _config = {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: "Bearer " + userToken,
      },
    };

    return await Fetch.get(`/product`, _config);
  },
};
