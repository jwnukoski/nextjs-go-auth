"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import router from "next/router";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8081/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log("Login response:", data);

    if (res.ok) {
      alert("Login successful!");
      // Redirect or perform further actions here
      router.push("/user");
    } else {
      alert("Login failed: " + data.message);
    }
  };

  return (
    <div className="container">
        <form className="max-w-md mx-auto mt-5 p-4 border rounded shadow bg-transparent">
            <h1 className="h3 m-4">Sign in</h1>
            <input type="email" className="form-control mb-3" placeholder="Email address" required onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" className="form-control mb-3" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
            <button className="btn btn-primary" type="submit">Sign in</button>
            <p className="mt-3">
            No account? <Link href="/register">Sign up</Link>
            </p>
        </form>
    </div>
  );
}

      