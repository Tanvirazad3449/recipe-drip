export const API_ENDPOINTS = {
    GET_USERS: '/users',
    CREATE_USER: '/users',
    UPDATE_USER: (id: string) => `/users/${id}`,
    DELETE_USER: (id: string) => `/users/${id}`,
  };
  