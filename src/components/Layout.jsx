import React, { useEffect } from 'react';
import SiderBar from './SiderBar';
import NavBar from './NavBar';
import styled from 'styled-components';


const Layout = ({ children }) => {


    return (
        <Wrapper>

            <SiderBar />
            <div className="content">
                {children}
            </div>
            <NavBar />

        </Wrapper>
    );
};

export default Layout;


const Wrapper = styled.div`

margin: 15px 12px;
margin-bottom: 75px;
min-width: 259px;

`;