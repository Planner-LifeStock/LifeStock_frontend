import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Font = styled.span`
    font-size: 40px;
    font-weight: bold;
    margin-left: 30px;
    transition: all 0.3s ease;
    color: #FFFFFF;
    opacity: ${props => props.$isActive ? "1" : "0.3"};

    &:hover {
        color: #444444;
    }
`

function TopBar() {
    const location = useLocation();

    return (
        <nav style={{
            backgroundColor: "#3182F6",
            padding: "1vw",
            textAlign: "start",
            width: "100vw",
            maxWidth: "1800px",
            margin: "0 auto",
        }}>
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
        </nav>
    );
}

export default TopBar;
