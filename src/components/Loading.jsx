import React from "react";
import styled from "styled-components";

function Loading() {
  return (
    <Container>
      <div className="loader"></div>
    </Container>
  );
}

export default Loading;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border-top: 5px solid rgba(255, 255, 255, 1);
    border-left: 5px solid rgba(255, 255, 255, 1);
    border-right: 5px solid rgba(255, 255, 255, 0);
    animation: load 0.875s infinite linear;
  }
  @keyframes load {
    100% {
      transform: rotate(360deg);
    }
  }
`;
