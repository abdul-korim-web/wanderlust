"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input } from "@heroui/react";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const [previewImage, setPreviewImage] = useState("");
  const [loading,setLoading] = useState(false)
  const handelRegister = async (e) => {
    e.preventDefault();
    try {
        setLoading(true)
        const fromData = new FormData(e.target);
    const userData = Object.fromEntries(fromData.entries());
    const { name, email, password, confirmPassword, image } = userData;

    if (!name || !email || !password || !confirmPassword) {
      toast.warning("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      toast.warning("Password does not match");
      return;
    }
    const { data, error } = await authClient.signUp.email(userData);
    if (error) {
      toast.error(error.message || "Registration failed");
      return;
    }

    if (data) {
      toast.success("Registration successful");
      redirect("/")
    }
    } finally{
setLoading(false)
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-cyan-100 p-5">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl overflow-hidden">
        <div className="bg-cyan-500 text-white p-6 text-center">
          <h1 className="text-3xl font-bold">Create Your Account</h1>

          <p className="text-sm text-cyan-100 mt-1">
            Join and start exploring amazing travel destinations
          </p>
        </div>

        <form onSubmit={handelRegister}>
          <div className="p-8 space-y-6">
            <div className="flex flex-col items-center gap-4">
              <div className="w-28 h-28 rounded-full border-2 border-cyan-200 bg-gray-100 flex items-center justify-center">
                {previewImage ? (
                  <img
                    alt="profile image"
                    src={previewImage}
                    className="w-[50px] h-[50px] object-cover "
                  />
                ) : (
                  <span className="text-xs text-gray-400">Profile Preview</span>
                )}
              </div>

              <Input
                value={previewImage}
                onChange={(e) => setPreviewImage(e.target.value)}
                name="image"
                className="h-12"
                placeholder="Paste profile image URL"
              />
            </div>

            <div className="flex flex-col gap-4">
              <Input name="name" className="h-12" placeholder="Username" />

              <Input
                name="email"
                className="h-12"
                type="email"
                placeholder="Email Address"
              />

              <Input
                name="password"
                className="h-12"
                type="password"
                placeholder="Password"
              />

              <Input
                name="confirmPassword"
                className="h-12"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <div className="text-xs text-gray-500 flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <p>I agree to the Terms of Service and Privacy Policy</p>
            </div>
             <Button
      type="submit"
      disabled={loading}
      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl font-semibold text-lg transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Creating Account...
        </>
      ) : (
        "Create Account"
      )}
    </Button>

            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <span className="text-cyan-500 font-medium cursor-pointer">
                Sign In
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
