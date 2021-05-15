import React from 'react';
import { Navbar } from 'react-bootstrap';
import { VscDiffAdded } from 'react-icons/vsc';

export default function Header() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Produtos API</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav" />
      <Navbar.Brand href="#/adicionar">
        <VscDiffAdded />
      </Navbar.Brand>
    </Navbar>
  );
}
