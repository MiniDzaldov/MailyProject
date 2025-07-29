import React, { useState } from "react";
// import { login } from '../../services/authApi';
import { login } from "../../services/authApi.ts";
import { LoginData } from "../../types/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar.tsx";

interface AuthProps {
  setUser: (user: { name: string }) => void;
}

const Login: React.FC<AuthProps> = ({ setUser }) => {
  const [form, setForm] = useState<LoginData>({ email: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login(form);
      console.log("Logged in:", res.data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Password</label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-400 text-white py-2 rounded-lg hover:bg-indigo-500 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
