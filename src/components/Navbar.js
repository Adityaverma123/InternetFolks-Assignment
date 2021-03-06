import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const [nav, openNav] = useState(false);
  return (
    <NavBody>
      <Nav>
        <NavLeft>
          <Link to="/">
            <img src={require("../assets/logo.svg").default} alt="Logo" />
          </Link>
          <Hamburger onClick={() => openNav(!nav)}>
            <span />
            <span />
            <span />
          </Hamburger>
        </NavLeft>
        <NavRight nav={nav}>
          <Links>
            <Link
              to="/"
              onClick={() => {
                openNav(!nav);
              }}
            >
              Features
            </Link>
            <Link
              to="/"
              onClick={() => {
                openNav(!nav);
              }}
            >
              Pricing
            </Link>
            <Link
              to="/"
              onClick={() => {
                openNav(!nav);
              }}
            >
              Resources
            </Link>
          </Links>
          <hr></hr>
          <ButtonContainer>
            <Login>Login</Login>
            <Signup>Sign Up</Signup>
          </ButtonContainer>
        </NavRight>
      </Nav>
    </NavBody>
  );
};

export default Navbar;
const NavBody = styled.div`
  display: flex;
  justify-content: center;
`;
const Nav = styled.nav`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  padding: 10px 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const NavLeft = styled.div`
  flex: 0.1;
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
  > a > img {
    margin-top: 5px;
  }
`;
const NavRight = styled.div`
  flex: 0.9;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    background: #3a3053;
    margin: 10px;
    padding: ${({ nav }) => (nav ? "10px" : "0")};
    overflow: hidden;
    max-height: ${({ nav }) => (nav ? "400px" : "0")};
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
  }
  > hr {
    display: none;
    @media (max-width: 768px) {
      display: block;
      width: 80%;
      opacity: 0.2;
      background-color: #9d9ba7;
      margin: 10px 0;
    }
  }
`;
const Hamburger = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }

  > span {
    height: 2px;
    width: 25px;
    margin-bottom: 4px;
    border-radius: 4px;
    background: #9d9ba7;
  }
`;
const Links = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin-left: 0;
  }
  > a {
    margin: 0 10px;
    text-decoration: none;
    cursor: pointer;
    color: #a4a3aa;
    text-align: center;

    font-weight: 700;
    :hover {
      color: #34313d;
    }
    @media (max-width: 768px) {
      margin: 0 20px;
      color: white;
      width: 90%;
      padding: 15px;
      :hover {
        color: white;
      }
    }
  }
`;
const Login = styled.button`
  /* margin-right: 30px; */
  background: none;
  border: none;
  cursor: pointer;
  color: #a4a3aa;
  font-weight: 750;
  padding: 15px;

  @media (max-width: 768px) {
    margin: 0;
    color: white;
  }
`;
const Signup = styled.button`
  border: none;
  cursor: pointer;
  background: #2ad0d2;
  color: white;
  padding: 7px 20px;
  border-radius: 20px;

  font-weight: 550;
  :hover {
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 15px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin: 0;
  }
`;
