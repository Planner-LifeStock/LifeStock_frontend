import React from 'react';
import styled from 'styled-components';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

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
`;

const LogoutButton = styled.button`
    font-size: 16px;
    color: #FFFFFF;
    margin-left: 30px;
    background: none;
    border: none;
    cursor: pointer;
    font-weight: ${(props) => props.theme.font.weight.bold};
    transition: all 0.3s ease;
    
    &:hover {
        color: ${(props) => props.theme.colors.grey.hover};
    }

    &:focus {
        border: none;
        outline: none;
    }
`;

const NavContainer = styled.nav`
    padding: 0.5vw 0;
    margin: 0 auto;
    width: 100vw;
    display: flex;
    align-items: center;

    background-color: ${(props) => props.theme.colors.blue.primary};
`;

function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/login'); // 로그아웃 후 로그인 페이지로 이동
    };

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
            <LogoutButton style={{marginLeft: "auto"}} onClick={handleLogout}>
                로그아웃
            </LogoutButton>
        </NavContainer>
    );
}

export default Header;