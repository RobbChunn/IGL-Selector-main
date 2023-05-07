import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 30px;
`;


const DuosButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; /* Center the button horizontally */
  width: 200px;
  margin: 30px auto; /* Center the button vertically and horizontally */
  gap: 1rem;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  border-radius: 16px; /* Add rounded edges */
  background-color: #fafafa; /* Add desired background color */
  color: #6585cf; /* Add desired text color */

  &:hover {
    background-color: #d50100; /* Add desired hover background color */
    cursor: pointer;
    color: #fafafa
  }
`;


const TriosButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; /* Center the button horizontally */
  width: 200px;
  margin: 30px auto; /* Center the button vertically and horizontally */
  gap: 1rem;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  border-radius: 16px; /* Add rounded edges */
  background-color: #fafafa; /* Add desired background color */
  color: #6585cf; /* Add desired text color */

  &:hover {
    background-color: #d50100; /* Add desired hover background color */
    cursor: pointer;
    color: #fafafa
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fafafa;
  width: 36em;
  margin: 0 auto;
  margin-top: 1em;
  border-radius: 24px;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #d50100;
  padding: 16px 32px;
  border-radius: 16px;
  `;


// flex items-center justify-center text-sm px-8 py-4 font-bold transition bg-green-100 border-4 
// border-black rounded-xl focus:outline-none 
// focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-green-50 w-64 h-20 m-auto"

const Home = () => {
  return (
    <div>
      <TitleContainer>
      <Title>Choose your Game Mode!</Title>
      </TitleContainer>
      <ButtonContainer>
        <Link to="/Duos">
          <DuosButton className="button">Duos!</DuosButton>
        </Link>
        <Link to="/Trios">
          <TriosButton className="button">Trios!</TriosButton>
        </Link>
      </ButtonContainer>
    </div>
  );
};

export default Home;
