"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function User() {
  
    useEffect(() => {
        const fetchUserData = async () => {
            const res = await fetch("http://localhost:8081/api/user", {
                method: "GET",
                credentials: "include",
            });
            if (res.ok) {
                const data = await res.json();
                console.log("User data:", data);
            } else {
                console.error("Failed to fetch user data");
            }
        };
        fetchUserData();
    }, []);




  return (
    <div className="container">
        <h1 className="mt-5">User Dashboard</h1>
        <p>Welcome to your user dashboard. Here you can manage your account.</p>
        <ul>
            <li>
                <strong>Name: </strong> 
            </li>
        </ul>
        <Link href="/logout" className="btn btn-danger mt-3">Logout</Link>
    </div>
  );
}

      