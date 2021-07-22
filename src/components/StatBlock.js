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
  height: 270px;
  padding: 10px;
  border-radius: 7px;

  @media (max-width: 900px) {
    align-items: center;
    max-width: 500px;
  }
  @media (max-width: 388px) {
    height: 300px;
  }

  > h1 {
    font-size: 25px;
    color: #35323e;
    margin: 30px 0 20px;
    @media (max-width: 425px) {
      font-size: 25px;
    }
    @media (max-width: 380px) {
      font-size: 20px;
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
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -40px;
  border-radius: 50%;
  background-color: #3b3054;
  > img {
    object-fit: contain;
    height: 50%;
    widht: 50%;
  }
`;
