"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch(() => {
        setMessage("Backend offline");
      });
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">

      <h1 className="text-5xl font-bold">
        Nemainim
      </h1>

      <p className="mt-4 text-xl">
        Your AI-powered second brain
      </p>


      <div className="mt-8">
        Backend status:
      </div>

      <p className="text-green-600 font-bold">
        {message}
      </p>

    </main>
  );
}