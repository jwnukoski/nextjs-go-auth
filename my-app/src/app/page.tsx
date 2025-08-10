
"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  
  return (
    <div className="container">
      <Link href="/login" className="btn btn-primary mt-5">
        Go to Login
      </Link>
    </div>
  );
}
