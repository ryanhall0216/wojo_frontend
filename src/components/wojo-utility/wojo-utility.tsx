import { styled } from "@mui/system";
import { Typography } from "@mui/material";

const UtilityContainer = styled('div')({
  width: "472px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "white",
  padding: "28px 26px",
  borderRadius: "10px",
  borderWidth:"1.3px",
  borderColor: "black",
  boxShadow: "5px 7px  #000000"
});

const ContentContainer = styled('div')({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#C21EA1",
  padding: "15px 18px",
  borderRadius: "10px",
  borderWidth:"1.3px",
  borderColor: "black",
  boxShadow: "2.1px 2.81px #000000",
  marginBottom: "26px"
});

const Title = styled(Typography)({
  fontFamily: "Retro Kraft",
  fontWeight: '400',
  fontSize: '44px',
  lineWeight: '44px',
  letterSpacing: '-3%',
  textAlign: 'left',
  color: 'white',
  textShadow: "1.34px 2.68px #000000"
});

const Description = styled(Typography)({
  fontFamily: "Articulat CF",
  fontWeight: '500',
  fontSize: '29px',
  lineWeight: '38px',
  letterSpacing: '-3%',
  textAlign: 'left',
  textShadow: "1.34px 1.34px #000000",
  color: 'white'
});

const WojoUtility = () => {
  return (
    <UtilityContainer>
      <ContentContainer>
        <Title>CUSTOM AI IMAGE GENERATIVE MODEL</Title>
        <Description>A unique AI image model specifically trained for Wojo which will also work as a meme generator, and pump more content into Wojo’s ecosystem</Description>
      </ContentContainer>
      <button>
        <img src="/icons/next.png"/>
      </button>
    </UtilityContainer>
  )
}

export default WojoUtility;