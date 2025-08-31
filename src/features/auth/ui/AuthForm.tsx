import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import type { AppDispatch } from "@/app/store";
import { login } from "../model/authSlice";

import { AuthFormInputs } from "../model/types";



const schema = yup
  .object({
    email: yup.string().email("Invalid email").required("Required field"),
    password: yup
      .string()
      .required("Required field")
      .min(6, "Minimum 6 characters")
      .matches(/[a-z]/, "Must contain a lowercase letter")
      .matches(/[A-Z]/, "Must contain an uppercase letter")
      .matches(/[^a-zA-Z0-9]/, "Must contain a special character"),
  })
  .required();

export const AuthForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: AuthFormInputs) => {
  dispatch(login(data.email));
  toast.success(`Hello, ${data.email}! You have logged in.`);
  navigate("/courses");
};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto bg-white p-6 rounded shadow flex flex-col gap-4"
    >
      <h2 className="text-xl font-bold">Login / Register</h2>

      <div className="flex flex-col">
        <label>Email</label>
        <input
          type="email"
          {...register("email")}
          className="border p-2 rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label>Password</label>
        <input
          type="password"
          {...register("password")}
          className="border p-2 rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Login / Register
      </button>
    </form>
  );
};
