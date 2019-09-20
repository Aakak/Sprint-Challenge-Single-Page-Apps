import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  text-align: center;
`;

const Button = styled.button`
  border: 2px solid magenta;
  background: pink;
  font-size: 1.5rem;
  padding: 15px;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Header>
        <Button className="button">
          <Link to="/characters">Character List</Link>
        </Button>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </Header>
    </section>
  );
}
