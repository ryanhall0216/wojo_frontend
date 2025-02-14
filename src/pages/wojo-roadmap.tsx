import WindowButtonGroup from "../components/window-button-group";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import RoadMapCardsContainer from "../components/roadmap-cards/roadmap-cards-container";

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

const WojoRoadMap = () => {
  return (
    <div className="bg-road-map h-screen bg-cover bg-center px-[170px] py-[30px]">
      <WindowButtonGroup />
      <Title>WOJO ROADMAP</Title>
      <RoadMapCardsContainer />
    </div>
  );
}

export default WojoRoadMap;