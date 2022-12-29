import React from "react";
import Link from "next/link";
import SubNavToggler from "./sub-nav-toggler";
import { Link as ScrollLink } from "react-scroll";

const NavLinks = () => {
  return (
    <ul className="one-page-scroll-menu navigation-box">
      <li>
        <ScrollLink
          activeClass="current"
          to="banner"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}>
          Home
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="service"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}>
          Offres
        </ScrollLink>
      </li>
   
      <li>
        <ScrollLink
          activeClass="current"
          to="testimonials"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Testimonials
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="blog"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
         Suites & Rooms
        </ScrollLink>

      
      </li>
    </ul>
  );
};

export default NavLinks;
