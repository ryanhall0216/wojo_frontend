import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import ContentBackground from "../components/content-background";

const ContentContainer = styled('div')({
  width: '100%',
  height: '100vh',
  backgroundImage: `linear-gradient(0deg, rgba(217, 217, 217, 0) -39%, #000000 64.36%), url('/src/assets/meme-generator.png')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  paddingTop: '247px',
});

const Title = styled(Typography)({
  fontFamily: "Retro Kraft",
  fontWeight: '400',
  fontSize: '100px',
  lineWeight: '88.68px',
  letterSpacing: '-2%',
  textAlign: 'center',
  textShadow: '5px 7px 0px rgb(0, 0, 0)',
  color: 'white'
});

const Description = styled(Typography)({
  fontFamily: "Articulat CF",
  fontWeight: '600',
  fontSize: '40px',
  lineWeight: '52.8px',
  letterSpacing: '-2%',
  textAlign: 'center',
  color: 'white'
});

const MemeGenerator = () => {
  return (
    <>
      <ContentContainer>
        <Title>WOJO GENERATOR</Title>
        <Description>Custom AI image generator trained specifically for Wojo.</Description>
      </ContentContainer>
    </>
  );
}

export default MemeGenerator;