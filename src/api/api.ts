import axios from 'axios';

// 🔧 Base API configuration - connects to json-server on port 3001
// Make sure to run `npm run api` to start the mock server!
export const api = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 10000,
});

// 🐌 Artificial delay interceptor to simulate real-world API latency
// This helps you build proper loading states and UX
api.interceptors.response.use(
  (response) => {
    return new Promise((resolve) => {
      // Random delay between 300-1000ms to simulate network conditions
      setTimeout(() => resolve(response), 300 + Math.random() * 700);
    });
  },
  (error) => {
    return Promise.reject(error);
  }
);