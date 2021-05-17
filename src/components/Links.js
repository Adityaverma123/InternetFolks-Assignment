import { buildQueries } from "@testing-library/dom";
import { useState } from "react";
import styled from "styled-components";

const Links = ({ link, shortLink }) => {
  const [text, setText] = useState("Copy!");
  const copyToClipboard = () => {
    if (text === "Copied!") {
      setText("Copy!");
    }
    setText("Copied!");
    navigator.clipboard.writeText(shortLink);
  };
  return (
    <LinksContainer>
      <a href={link}>{link}</a>
      <hr></hr>
      <RelinkContainer>
        <a href={shortLink}>{shortLink}</a>

        <button onClick={copyToClipboard}>{text}</button>
      </RelinkContainer>
    </LinksContainer>
  );
};

export default Links;
const LinksContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  margin: 10px 0;
  border-radius: 7px;
  > hr {
    display: none;
    @media (max-width: 768px) {
      display: block;
      width: 100%;
      border: none;
      height: 1px;
      opacity: 0.5;
      background-color: #9d9ba7;
      margin: 10px;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
  > a {
    text-decoration: none;
    color: #2e2d32;
    font-weight: 550;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
const RelinkContainer = styled.div`
  align-items: center;
  display: flex;
  margin-left: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin-left: 0;
  }

  > a {
    color: #5ab8b8;
    text-decoration: none;
    font-weight: 550;
    margin-right: 20px;
    @media (max-width: 768px) {
      width: 100%;
      margin-right: 0;
    }
  }
  > button {
    border: none;
    background-color: #2bd1d1;
    color: white;
    padding: 7px 35px;
    font-weight: 550;
    cursor: pointer;
    border-radius: 7px;
    @media (max-width: 768px) {
      width: 100%;
      margin: 20px 20px 0 20px;
    }
  }
`;
