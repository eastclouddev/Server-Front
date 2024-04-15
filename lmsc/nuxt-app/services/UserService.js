const BASE_URL = 'http://localhost:8080/users';

export const UserService = {
    async getUsers(skip, limit) {
      const response = await fetch(`${BASE_URL}?skip=${skip}&limit=${limit}`);
      return response.json();
    },
    async createUser(userData) {
      const response = await fetch('http://localhost:8080/companies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      return response.json();

    },
    async getUserById(userId) {
      const response = await fetch(`${BASE_URL}${userId}`);
      return response.json();
    },
    async updateUser(userId, userData) {
      const response = await fetch(`${'http://localhost:8080/users/'}${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      return response.json();
    },
    async deleteUser(userId) {
      const response = await fetch(`${BASE_URL}${userId}`, {
        method: 'DELETE',
      });
      return response.json();
    },
  };