import  styled  from "styled-components";
import { GiKnifeFork } from 'react-icons/gi';
import { Link } from "react-router-dom";
import React from 'react';

function Navbar() {
    return (
        <div className="container">
            <Nav>
                <GiKnifeFork />
                <Logo to={''}>delicious</Logo>
            </Nav>
        </div>
    )
}

const Logo = styled(Link)`
font-size: 1.5rem;
font-weight: 400;
font-family: 'Lobster Two', cursive;
text-decoration: none;
color: black;
`
const Nav = styled.nav`
padding: 4rem 0 0;
display: flex;
justify-content: flex-start;
align-items: center;
svg {
    font-size: 2rem;
}
`

export default Navbar
