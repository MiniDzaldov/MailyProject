import axios from 'axios';
import { LoginData, RegisterData } from '../types/auth';

// const API = 'http://localhost:5000/api/users';
const API = 'http://localhost:5000/api/auth';


export const login = (data: LoginData) => axios.post(`${API}/login`, data);
export const register = (data: RegisterData) => axios.post(`${API}/register`, data);


