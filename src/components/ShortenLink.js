import { useState } from "react";
import styled from "styled-components";

const ShortenLink = () => {
  const [isempty, setEmpty] = useState(false);
  const [value, setValue] = useState("");
  const fetchLinks = (e) => {
    e.preventDefault();
    if (value === "") {
      setEmpty(true);
      console.log(isempty);
    } else {
      setEmpty(false);
      console.log(isempty);
    }
  };
  return (
    <OuterContainer>
      <FormContainer isempty={isempty}>
        <Form isempty={isempty}>
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            type="text"
            placeholder="Shorten a link here..."
          ></input>
          <button type="submit" onClick={fetchLinks}>
            Shorten it!
          </button>
        </Form>
        <p>Please add a link</p>
      </FormContainer>
    </OuterContainer>
  );
};

export default ShortenLink;
const OuterContainer = styled.div`
  background: #f0f1f6;
  margin-top: 80px;
  display: flex;
  justify-content: center;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  > input {
    flex: 1;
    padding: 10px 25px;
    border: none;
    border-radius: 8px;
    margin-right: 20px;
    border: ${({ isempty }) => (isempty ? "2px solid #d9627d;" : "none")};
    @media (max-width: 768px) {
      width: 100%;
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
  > button {
    background: #2bd1d1;
    border: none;
    border-radius: 10px;
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
  /* display: flex;
  justify-content: center; */
  margin-top: -40px;
  > p {
    color: #d9627d;
    font-style: italic;
    display: ${({ isempty }) => (isempty ? "inline" : "none")};
  }
`;
