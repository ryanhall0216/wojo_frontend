import { styled } from "@mui/system";

const GenerateFieldContainer = styled('div')({
  display: "flex",
});

const InputField = styled('input')({
  width: "665px",
  height: "65px",
  backgroundColor: "white",
  borderTopLeftRadius: "30px",
  borderBottomLeftRadius: "30px",
  border: "none",
  outline: "none",
  fontFamily: "Articulat CF",
  fontSize: "19px",
  padding: "20px 50px",
  "&::placeholder" : {
    color: "black",
    fontWeight: "600",
    fontFamily: "Articulat CF",
    letterSpacing: "3px"
  }
});

const GenerateButton = styled('button')({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "228px",
  height: "65px",
  backgroundColor: "#C21FA0",
  borderTopRightRadius: "30px",
  borderBottomRightRadius: "30px",
  border: "none",
  fontFamily: "Retro Kraft",
  fontSize: "22px",
  color: "white"
})

const GenerateField = () => {
  return (
      <GenerateFieldContainer>
        <InputField placeholder="TYPE A PROMPT..."/>
        <GenerateButton>
          GENERATE
          <img src="/icons/magic.png"/>
        </GenerateButton>
      </GenerateFieldContainer>
  );
}

export default GenerateField;