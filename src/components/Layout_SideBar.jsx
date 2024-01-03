// 404 error to display which side Bar always

import React from 'react';
import SiderBar from './SiderBar';
import styled from 'styled-components';


const Layout_SideBar = ({ children }) => {


    return (
        <Wrapper>

            <SiderBar />
            <div className="main-content">  
                {children} {/* Used for calling all components which as layout compontent*/}
            </div>

        </Wrapper>
    );
};

export default Layout_SideBar;


const Wrapper = styled.div`

margin: 15px 12px;
margin-bottom: 75px;
min-width: 259px;

@media (min-width: 580px) {
    margin-top: 60px;
    margin-bottom: 100px;
}
@media (min-width: 1024px) {
    margin-bottom: 60px;

    .main-content {
    position: relative;
    width: max-content;
    margin: auto;
  }
}

@media (min-width: 1250px) {
    
    max-width: 1200px;
    margin-inline: auto;
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 25px;
  

  .main-content {
    min-width: 75%;
    width: 75%;
    margin: 0;
  }
}
`;