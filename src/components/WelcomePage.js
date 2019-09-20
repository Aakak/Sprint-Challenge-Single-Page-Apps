import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  text-align: center;
`;

const Button = styled.button`
  border: 3px solid black;
  background: #b0e0e6;
  font-size: 1.5rem;
  padding: 10px 30px 10px 30px;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Header>
        <Button className="main-button">
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
