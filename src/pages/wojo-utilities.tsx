import WindowButtonGroup from "../components/window-button-group";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import WojoUtility from "../components/wojo-utility/wojo-utility";

const UtilitiesContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  width: '100%',
  height: '100vh',
  position: 'relative',
  backgroundImage: `linear-gradient(270deg, rgba(217, 217, 217, 0) 0%, rgba(0, 0, 0, 0.65) 67.9%), url('/src/assets/utility.jpg')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  padding: '30px 170px',
});

const Title = styled(Typography)({
  fontFamily: "Retro Kraft",
  fontWeight: '400',
  fontSize: '100px',
  lineWeight: '88.68px',
  letterSpacing: '-2%',
  textShadow: '5px 7px 0px rgb(0, 0, 0)',
  color: 'white',
  paddingTop: "40px",
  textAlign: "left"
});

const WojoUtilities = () => {
  return (
    <UtilitiesContainer>
      <WindowButtonGroup />
      <Title>UTILITIES</Title>
      <WojoUtility />
    </UtilitiesContainer>
  );
}

export default WojoUtilities;