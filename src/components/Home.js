import styled from "styled-components";
import ShortenLink from "./ShortenLink";
const Home = () => {
  return (
    <HomeBody>
      <BodyOuter>
        <FirstContainer>
          <FirstContainerBody>
            <h1>More than just shorter links</h1>
            <p>
              Build your brand's recognition and get detailed insights on how
              your links are performing
            </p>
            <button> Get Started</button>
          </FirstContainerBody>

          <img
            src={require("../assets/illustration-working.svg").default}
            alt="illustration"
          />
        </FirstContainer>
      </BodyOuter>
      <ShortenLink />
    </HomeBody>
  );
};

export default Home;
const HomeBody = styled.div``;
const BodyOuter = styled.div`
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
`;

const FirstContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  > img {
    /* flex: 0.4; */
    width: 60%;
    height: 350px;
    margin-right: -50px;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
const FirstContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 45px 0;
  /* flex: 0.6; */
  padding: 10px 20px 10px 0;
  @media (max-width: 768px) {
    padding-right: 0;
    align-items: center;
  }
  > h1 {
    color: #34303d;
    font-size: 50px;
    line-height: 50px;
    @media (max-width: 768px) {
      text-align: center;
    }
  }
  > p {
    color: #9c9ba2;
    margin: 10px 5px 25px 0;
    width: 80%;
    font-weight: 550;
    @media (max-width: 768px) {
      text-align: center;
      width: 100%;
    }
  }
  > button {
    background: none;
    border: none;
    background: #2ad0d2;
    color: white;
    padding: 10px 30px;
    border-radius: 20px;
    font-weight: 550;
    font-size: 18px;
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }
  }
`;
