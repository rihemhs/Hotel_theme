import React from "react";
import Link from "next/link";

const NavLinksInner = () => {
  return (
    <ul className="one-page-scroll-menu navigation-box">
      <li>
        <Link href="/#banner">
          <a>
            Home
          </a>
        </Link>
            </li>
      <li>
        <Link href="/#service">
          <a>Offres</a>
        </Link>
      </li>
      <li>
        <Link href="/#testimonials">
          <a>Testimonials</a>
        </Link>
      </li>
      <li>  
      </li>
    </ul>
  );
};

export default NavLinksInner;
