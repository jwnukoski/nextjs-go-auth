"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8081/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Registration successful!");
      router.push("/login");
    } else {
      alert("Registration failed: " + data.message);
    }
  };

  return (
    <div className="container">
        <form className="max-w-md mx-auto mt-5 p-4 border rounded shadow bg-transparent" onSubmit={submitHandler}>
            <h1 className="h3 m-4">Register</h1>

            <input type="text" id="name" className="form-control mb-3" placeholder="Name" required onChange={(e) => setName(e.target.value)}/>
            <input type="email" id="email" className="form-control mb-3" placeholder="Email address" required onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" id="password" className="form-control mb-3" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
            
            <button className="btn btn-primary" type="submit">Submit</button>
            
            <p className="mt-3">
              <Link href="/login">Login</Link>
            </p>
        </form>
    </div>
  );
}

      