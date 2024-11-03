import React from 'react';
import styled from 'styled-components';

import { Link, useLocation } from 'react-router-dom';

const Font = styled.span`
    font-size: 40px;
    margin-left: 30px;
    color: #FFFFFF;

    font-weight: ${(props) => props.theme.font.weight.bold};
    
    transition: all 0.3s ease;
    
    opacity: ${props => props.$isActive ? "1" : "0.3"};

    &:hover {
        color: ${(props) => props.theme.colors.grey.hover};
    }
`

const NavContainer = styled.nav`
    padding: 0.5vw 0;
    margin: 0 auto;
    width: 100vw;

    background-color: ${(props) => props.theme.colors.blue.primary};
`

function Header() {
    const location = useLocation();

    return (
        <NavContainer>
            <Link to="/">
                <Font $isActive={location.pathname === "/"}>
                    HOME
                </Font>
            </Link>
            <Link to="/myasset">
                <Font $isActive={location.pathname === "/myasset" || location.pathname === "/salesrecords"}>
                    내 자산
                </Font>
            </Link>
            <Link to="/rank">
                <Font $isActive={location.pathname === "/rank"}>
                    랭크
                </Font>
            </Link>
        </NavContainer>
    );
}

export default Header;
