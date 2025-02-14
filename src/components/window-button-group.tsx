import { styled } from "@mui/system";
import { WojoCloseWindowIconSVG } from "../icons/wojo-close-window-icon";
import { WojoFullScreenIconSVG } from "../icons/wojo-full-screen-icon-svg";
import { WojoOpenWindowIconSVG } from "../icons/wojo-open-window-icon-svg";

const WindowButtonsContainer = styled('div')({
  display: "flex",
  gap: "10px",
  position: "absolute",
  top: "20px",
  right: "30px",
});

const WindowButtonGroup = () => {
  return (
      <WindowButtonsContainer>
        <WojoFullScreenIconSVG />
        <WojoOpenWindowIconSVG />
        <WojoCloseWindowIconSVG />
      </WindowButtonsContainer>
  );
}

export default WindowButtonGroup;