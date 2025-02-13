import { styled } from "@mui/system";
import { Typography } from "@mui/material";

const ContentContainer = styled('div')({
  width: '100%',
  height: '100vh',
  color: '#402583',
  zIndex: "-1"

});

const ContentBackground = () => {
  return (
    <>
      <ContentContainer>
        <img src="/src/icons/mark.png"/>
      </ContentContainer>
    </>
  );
}

export default ContentBackground;