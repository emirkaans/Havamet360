import React from "react";
// import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 bg-white z-50">
      <div className="flex p-2 m-4">
        <img src="/assets/navbar_logo.png" className="h-14 lg:h-16" alt="" />
        <a>Aviation Meteorology 360°</a>
        <div className="flex">
          <a href="/">Workshop & Symposium</a>
          <a href="/">Committees</a>
          <a href="/">Invited Speakers</a>
          <a href="/">Program</a>
          <a href="/">Supporters</a>
          <a href="/">Register</a>
          <a href="/">Abstract Submission</a>
          <a href="/">Photos</a>
          <a href="/">Contact</a>
        </div>
      </div>
    </header>
  );
};
