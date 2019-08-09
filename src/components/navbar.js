import React from 'react';
import { Link } from 'gatsby';

const NavbarItem = props => (
  <Link className="navbar-item" to={props.page}>
    {props.pagename}
  </Link>
)

const NavbarBurger = props => (
  <div
    onClick={props.toggleMenu}
    className={`navbar-burger burger ${props.active ? 'is-active' : ''}`}
  >
    <span />
    <span />
    <span />
  </div>
);

export default class Navbar extends React.Component {
  state = {
    activeMenu: false,
  }
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu,
    })
 }
  render() {
    return (
      <nav id="navbarMenuHeroA" className="navbar is-fixed-top">
        <div className="container">
        <div className="navbar-brand is-white">
          <Link className="navbar-item is-white" to="/">
            anjali devakumar
          </Link>
          <NavbarBurger
            active={this.state.activeMenu}
            toggleMenu={this.toggleMenu}
          />
        </div>
        <div
          className={`navbar-menu ${this.state.activeMenu ? 'is-active' : ''}`}
        >
          <div className="navbar-end is-black">
            <NavbarItem page="/#skills" pagename="skills" />
            <NavbarItem page="/#projects" pagename="projects" />
            <NavbarItem page="/about/" pagename=" about" />
            <NavbarItem page="/design/" pagename=" design" />
          </div>
        </div>
        </div>
      </nav>
    )
  }
}
