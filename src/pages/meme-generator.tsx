import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import WindowButtonGroup from "../components/window-button-group";
import GenerateField from "../components/generate-field";

const ContentContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
  position: 'relative',
  backgroundImage: `linear-gradient(0deg, rgba(217, 217, 217, 0) -39%, #000000 64.36%), url('/meme-generator.jpg')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  paddingTop: '130px',
});

const Title = styled(Typography)({
  fontFamily: "Retro Kraft",
  fontWeight: '400',
  fontSize: '100px',
  lineHeight: '100px',
  lineWeight: '88.68px',
  letterSpacing: '-2%',
  textAlign: 'center',
  textShadow: '5px 7px 0px rgb(0, 0, 0)',
  color: 'white',
});

const Description = styled(Typography)({
  fontFamily: "Articulat CF",
  fontWeight: '600',
  fontSize: '40px',
  lineWeight: '52.8px',
  letterSpacing: '-2%',
  textAlign: 'center',
  color: 'white',
  marginBottom: "55px"
});

const MemeGenerator = () => {
  return (
      <ContentContainer>
        <WindowButtonGroup />
        <Title>WOJO GENERATOR</Title>
        <Description>Custom AI image generator trained specifically for Wojo.</Description>
        <GenerateField />
      </ContentContainer>
  );
}

export default MemeGenerator;