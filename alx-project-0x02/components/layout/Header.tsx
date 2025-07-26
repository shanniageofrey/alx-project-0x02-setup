import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
    </div>
  );
}
