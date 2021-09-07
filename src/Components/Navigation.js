import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import Logo from '../Assets/Images/qtemu.png'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">
                    <img src={Logo} alt="Logo" style={{width:"32px"}} className="mr-2"/>
                    QTemu
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#create">Create Meetup</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#explore">Explore</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>Login</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;