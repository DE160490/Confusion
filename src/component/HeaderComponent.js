import React, { Component } from "react";
import "../App.css";
// import DOM from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Button,
  Container,
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: true };
  }

  toggle() {
    if (window.innerWidth >= 992) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    return (
      <Container className="header">
        <Navbar className="row">
          <NavbarBrand
            className="col-12 col-md-2 text-warning"
            href="https://www.youtube.com/"
          >
            {/* <img
            src="assets/img/UI/admin-low-resolution-color-logo.png"
            height="65"
            width="90"
            alt="Resort Sapphire Sands"
          /> */}
            Sapphire Sands
          </NavbarBrand>
          <Collapse className="col-12 col-md-6" isOpen={this.state.isOpen}>
            <div className="row">
              <div className="col-md wrapper">
                <i class="bi bi-envelope-fill text-warning"></i>
                <p>thanhncde160490@fpt</p>
              </div>
              <div className="col-md wrapper">
                <i class="bi bi-telephone-fill text-warning"></i>
                <p>+0363012495</p>
              </div>
            </div>
            <Nav>
              <NavItem active>
                <NavLink href="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/room">Room</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/service">Service</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/food">Food</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <Button className="btn btn-warning text-light py-4 px-4">
            Login
            <i class="bi bi-arrow-right"></i>
          </Button>
        </Navbar>
      </Container>
    );
  }
}

export default Header;
