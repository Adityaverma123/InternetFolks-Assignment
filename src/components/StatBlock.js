import styled from "styled-components";

const StatBlock = ({ src, heading, text }) => {
  return (
    <BlockContainer>
      <ImageContainer>
        <img src={require("../assets/" + src).default} />
      </ImageContainer>
      <h1>{heading}</h1>
      <p>{text}</p>
    </BlockContainer>
  );
};

export default StatBlock;
const BlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  max-width: 400px;
  height: 250px;
  padding: 10px;
  border-radius: 7px;

  @media (max-width: 900px) {
    align-items: center;
    max-width: 500px;
  }

  > h1 {
    font-size: 30px;
    color: #35323e;
    margin: 30px 0 20px;
    @media (max-width: 425px) {
      font-size: 25px;
    }
  }
  > p {
    color: #bfbfbf;
    font-style: bold;
    width: 90%;
    @media (max-width: 900px) {
      text-align: center;
    }
  }
`;
const ImageContainer = styled.div`
  height: 90px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -60px;
  border-radius: 999px;
  background-color: #3b3054;
  > img {
    object-fit: contain;
  }
`;
