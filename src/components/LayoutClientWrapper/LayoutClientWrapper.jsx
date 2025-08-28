"use client";
import { useState } from "react";
import Spy from "../Spy/Spy";
import Navbar from "../Navbar/Navbar";
import { useMediaQuery } from "react-responsive";

export default function LayoutClientWrapper() {
  const [active, setActive] = useState(null);
  const isLg = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <>
      <Navbar active={active} isLg={isLg} />
      <Spy isLg={isLg} onActiveChange={setActive} />
    </>
  );
}
