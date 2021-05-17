import styled from "styled-components";
import ShortenLink from "./ShortenLink";
import StatBlock from "./StatBlock";
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
      <StatsContainer>
        <ShortenLink />
        <AdvancedStats>
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with with our
            advanced statistics dashboard
          </p>
          <StatBlocksContainer>
            <Target>
              <StatBlock
                src="icon-brand-recognition.svg"
                heading="Brand Recognition"
                text="Boost your brand recognition with each click. Generic links don't mean a
        thing. Branded links help instil confidence in your content"
              />
            </Target>
            <hr />
            <Target>
              <StatBlock
                src="icon-detailed-records.svg"
                heading="Detailed Records"
                text="Gain insights into who is clicking your links. Knowing when and where 
              people engage with your content helps inform better decisions"
              />
            </Target>
            <hr />
            <Target>
              <StatBlock
                src="icon-fully-customizable.svg"
                heading="Fully Customizable"
                text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
              />
            </Target>
          </StatBlocksContainer>
        </AdvancedStats>
        <BoostContainer>
          <h1>Boost your links today</h1>
          <button>Get Started</button>
        </BoostContainer>
      </StatsContainer>
    </HomeBody>
  );
};

export default Home;

const HomeBody = styled.div`
  width: 100%;
  margin-top: 100px;
`;
const BodyOuter = styled.div`
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
`;
const Target = styled.div`
  &:nth-child(1) {
    margin-top: -60px;
    margin-left: 10px;
    @media (max-width: 900px) {
      margin: 0 15px;
    }
  }
  &:nth-child(3) {
    @media (max-width: 900px) {
      margin: 0 15px;
    }
  }

  &:nth-child(5) {
    margin-top: 60px;
    margin-right: 10px;
    @media (max-width: 900px) {
      margin: 0 15px;
    }
  }
`;

const StatBlocksContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  align-items: center;

  > hr {
    width: 20px;
    border: none;
    height: 8px;
    background-color: #2acfcf;
    @media (max-width: 900px) {
      /* width: 30px; */
      height: 80px;
    }
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;
const AdvancedStats = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  @media (max-width: 768px) {
    margin-top: 50px;
  }
  > h1 {
    color: #232127;
    font-weight: 700;
    font-size: 40px;
    text-align: center;
    @media (max-width: 538px) {
      font-size: 25px;
    }
  }
  > p {
    color: #bfbfbf;
    width: 30%;
    margin-top: 10px;
    font-weight: 500;
    text-align: center;
    @media (max-width: 768px) {
      width: 50%;
    }
    @media (max-width: 538px) {
      width: 70%;
    }
  }
`;
const BoostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  height: 250px;
  margin-top: 80px;
  background-image: url(${require("../assets/bg-boost-desktop.svg").default});
  background-color: #3b3054;
  @media (max-width: 768px) {
    background: url(${require("../assets/bg-shorten-desktop.svg").default});
    background-color: #3b3054;
    background-size: cover;
  }
  @media (max-width: 425px) {
    background: url(${require("../assets/bg-shorten-mobile.svg").default});
    background-color: #3b3054;
    background-size: cover;
  }
  > h1 {
    font-size: 40px;
    color: white;
    font-weight: 700;
    @media (max-width: 768px) {
      font-size: 30px;
    }
    @media (max-width: 425px) {
      font-size: 25px;
    }
  }
  > button {
    border: none;
    background-color: #2acfcf;
    padding: 15px 50px;
    font-size: 20px;
    font-weight: 700;
    margin-top: 20px;
    border-radius: 25px;
    color: white;
  }
`;
const StatsContainer = styled.div`
  background: #f0f1f6;
  margin-top: 80px;
`;

const FirstContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  > img {
    /* flex: 0.4; */
    width: 60%;
    height: 50%px;
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
    font-size: 70px;
    line-height: 75px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 60px;
      line-height: 60px;
    }
    @media (max-width: 425px) {
      text-align: center;
      font-size: 40px;
      line-height: 40px;
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
