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
          <button type="submit" onClick={fetchLinks}>
            Shorten it!
          </button>
        </Form>
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
  }
`;
