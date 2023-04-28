"use client";
import { useState } from "react";
import "../style/navbar.scss";
import NavBtn from "./NavBtn";
import Link from "next/link";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div>Logo</div>
      {open && (
        <ul>
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/deals" onClick={() => setOpen(false)}>
            Deals
          </Link>
          <Link href="/brand" onClick={() => setOpen(false)}>
            Brands
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
        </ul>
      )}
      <NavBtn open={open} getOpen={(result) => setOpen(result)} />
    </div>
  );
};

export default Navbar;
