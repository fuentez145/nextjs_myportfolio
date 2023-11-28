import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link as UILink, Button} from "@nextui-org/react";
import Link from 'next/link'
const NavBar = () => {
  return (
    <Navbar isBordered className="bg-slate-800/30" >
    <NavbarBrand>
      {/* <AcmeLogo /> */}
      <p className="font-bold text-inherit">ACME</p>
    </NavbarBrand>
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem isActive>
        <UILink as={Link}  color="foreground" className="text-white" aria-current="page" href="/">
          Home
        </UILink >
      </NavbarItem>
      <NavbarItem >
        <UILink as={Link} href="/projects" color="foreground" className="text-white" >
          Projects
        </UILink >
      </NavbarItem>
      <NavbarItem>
        <UILink className="text-white" color="foreground" href="#">
          Contact
        </UILink >
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
      {/* <NavbarItem className="hidden lg:flex">
        <UILink as={Link} href="#">Login</UILink>
      </NavbarItem>
      <NavbarItem>
        <Button className="text-white" as={Link} color="primary" href="#" variant="flat">
          Sign Up
        </Button>
      </NavbarItem> */}
    </NavbarContent>
  </Navbar>
  )
}

export default NavBar
