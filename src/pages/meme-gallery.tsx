// import WindowButtonGroup from "../components/window-button-group";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import WojoGalleryContainer from "../components/wojo-gallery/wojo-gallery-container";
import WindowButtonGroup from "../components/window-button-group";

const Title = styled(Typography)({
  fontFamily: "Retro Kraft",
  fontWeight: '400',
  fontSize: '100px',
  lineWeight: '88.68px',
  letterSpacing: '-2%',
  textShadow: '5px 7px 0px rgb(0, 0, 0)',
  color: '#C21FA0',
  paddingTop: "40px",
  textAlign: "left"
});

const MemeGallery = () => {
  return (
    <div className="bg-road-map h-screen bg-cover bg-center px-[170px] py-[30px]">
      <WindowButtonGroup />
      <Title>WOJO GALLERY</Title>
      <WojoGalleryContainer />
    </div>
  );
}

export default MemeGallery;