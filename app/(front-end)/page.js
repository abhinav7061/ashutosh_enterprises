'use client';
import Image from "next/image";
import React from "react";

export default function Home() {

  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      <Image src='/logoWithoutBg.png' width={340} height={56} alt='Logo' className="mb-4" />
      <h2 className="text-4xl">Welcome to Ashutosh Enterprises</h2>
    </div>
  );
}
