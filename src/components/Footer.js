import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBody>
        <FooterLeft>
          <Link to="/">
            <img src={require("../assets/logo-white.svg").default} alt="Logo" />
          </Link>
        </FooterLeft>
        <FooterRight>
          <FeatureContainer>
            <h3>Features</h3>
            <Link to="/">Link Shortening</Link>
            <Link to="/">Branded Links</Link>
            <Link to="/">Analytics</Link>
          </FeatureContainer>
          <ResourcesContainer>
            <h3>Resources</h3>
            <Link to="/">Blog</Link>
            <Link to="/">Developers</Link>
            <Link to="/">Support</Link>
          </ResourcesContainer>
          <CompanyContainer>
            <h3>About</h3>
            <Link to="/">About</Link>
            <Link to="/">Our Team</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Contact</Link>
          </CompanyContainer>
          <SocialLinks>
            <img src={require("../assets/icon-facebook.svg").default} />
            <img src={require("../assets/icon-twitter.svg").default} />
            <img src={require("../assets/icon-pinterest.svg").default} />
            <img src={require("../assets/icon-instagram.svg").default} />
          </SocialLinks>
        </FooterRight>
      </FooterBody>
    </FooterContainer>
  );
};

export default Footer;
const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #232127;
  padding: 40px 0 20px 20px;
`;
const FooterBody = styled.div`
  display: flex;
  margin-top: 50px;
  width: 90%;
  @media (max-width: 850px) {
    margin-top: 0;
  }
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterLeft = styled.div`
  flex: 0.4;
`;
const ResourcesContainer = styled.div`
  display: flex;
  flex-direction: column;
  > h3 {
    color: white;
    font-weight: 700;
    margin-bottom: 10px;
    @media (max-width: 850px) {
      text-align: center;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
  > a {
    text-decoration: none;
    color: #bfbfbf;
    @media (max-width: 850px) {
      text-align: center;
    }
  }
`;
const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  > h3 {
    color: white;
    font-weight: 700;
    margin-bottom: 10px;
    @media (max-width: 850px) {
      text-align: center;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
  > a {
    text-decoration: none;
    color: #bfbfbf;
    @media (max-width: 850px) {
      text-align: center;
    }
  }
`;
const FooterRight = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 0.6;
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    flex: 0.5;
  }
`;
const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  > h3 {
    color: white;
    font-weight: 700;
    margin-bottom: 10px;
    @media (max-width: 850px) {
      text-align: center;
      margin-top: 40px;
      margin-bottom: 20px;
    }
  }
  > a {
    text-decoration: none;
    color: #bfbfbf;
    @media (max-width: 850px) {
      text-align: center;
    }
  }
`;
const SocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex: 0.4;
  @media (max-width: 850px) {
    margin-top: 40px;
    align-items: center;
  }
  > img {
    margin: 0 5px;
  }
`;
