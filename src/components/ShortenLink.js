import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Links from "./Links";

const ShortenLink = () => {
  const [isempty, setEmpty] = useState(false);
  const [value, setValue] = useState("");
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchLinks = (e) => {
    e.preventDefault();
    if (value === "") {
      setEmpty(true);
    } else {
      setLoading(true);
      setEmpty(false);
      axios
        .get("https://api.shrtco.de/v2/shorten?url=" + value)
        .then((response) => {
          setLoading(false);
          const item = response.data.result.full_short_link;
          const originalLink = response.data.result.original_link;
          const newList = links.concat({
            shortLink: item,
            originalLink: originalLink,
          });
          setLinks(newList);
          console.log();
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  };

  return (
    <OuterContainer>
      <FormContainer isempty={isempty}>
        <Form>
          <InputContainer isempty={isempty}>
            <input
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              type="text"
              placeholder="Shorten a link here..."
            ></input>
            <p>Please add a link</p>
          </InputContainer>
          {loading ? (
            <button disabled={true}>Shortening..</button>
          ) : (
            <button type="submit" onClick={fetchLinks} disabled={loading}>
              Shorten it!
            </button>
          )}
        </Form>
      </FormContainer>
      <LinksList>
        {links.map((item, id) => (
          <Links key={id} link={item.originalLink} shortLink={item.shortLink} />
        ))}
      </LinksList>
    </OuterContainer>
  );
};

export default ShortenLink;
const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LinksList = styled.div`
  margin-top: 20px;
  width: 80%;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.8;
  margin-right: 20px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
  > input {
    width: 100%;
    padding: 10px 25px;
    border: none;
    border-radius: 8px;
    border: ${({ isempty }) => (isempty ? "2px solid #d9627d;" : "none")};
    @media (max-width: 768px) {
      margin: 0;
    }

    :focus {
      outline: none;
    }
    ::placeholder {
      font-weight: 550;
      opacity: 0.6;
      color: ${({ isempty }) => (isempty ? "#d9627d;" : "")};
    }
  }
  > p {
    color: #d9627d;
    font-style: italic;
    display: ${({ isempty }) => (isempty ? "inline" : "none")};
  }
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  > button {
    background: #2bd1d1;
    border: none;
    border-radius: 10px;
    flex: 0.2;
    color: white;
    font-weight: 550;
    cursor: pointer;
    padding: 10px 30px;
    :hover {
      opacity: 0.9;
    }
    @media (max-width: 768px) {
      padding: 10px 25px;
      width: 100%;
      margin-top: 20px;
    }
  }
`;
const FormContainer = styled.div`
  background-size: cover;
  background-image: url(${require("../assets/bg-shorten-desktop.svg").default});
  padding: 30px;
  width: 80%;
  background-color: #3a3053;
  font-weight: 550;
  border-radius: 10px;
  margin-top: -40px;
  @media (max-width: 768px) {
    background: url(${require("../assets/bg-shorten-desktop.svg").default});
    background-color: #3a3053;
    margin-top: -70px;
  }
`;
