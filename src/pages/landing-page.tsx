import React from "react";
import { styled } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ButtonValues = [
  {
    text: <span>MEME <br/> GENERATOR</span>,
    link: "/meme-generator",
    icon: "/src/icons/meme-generator-icon.png",
  },
  {
    text: <span>WOJO <br/> ROADMAP</span>,
    link: "/wojo-roadmap",
    icon: "/src/icons/wojo-roadmap-icon.png",
  },
  {
    text: <span>WOJO <br/> UTILITIES</span>,
    link: "/wojo-utilities",
    icon:  "/src/icons/wojo-utilities-icon.png",
  },
  {
    text: <span>MEME <br/> GALLERY</span>,
    link: "/meme-gallery",
    icon: "/src/icons/meme-gallery-icon.png",
  }
];

const SocialLinkValues = [
  {
    link: "/",
    icon: "/src/icons/twitter.png",
  },
  {
    link: "/",
    icon: "/src/icons/telegram.png",
  },
  {
    link: "/",
    icon: "/src/icons/music.png",
  },
  {
    link: "/",
    icon: "/src/icons/camera.png",
  },
]

const ButtonGroup = styled('div')({
  position: "absolute",
  display: "flex",
  gap: "59px",
  top: "270px",
  left: "640px"
})

const ButtonText = styled(Typography)({
  fontFamily: "Retro Kraft",
  fontWeight: '600',
  fontSize: '20px',
  lineHeight: '20px',
  letterSpacing: '-2%',
  textAlign: 'center',
  color: 'white',
  marginTop: "15px",
  textShadow: "2px 2px  #00000080"
});

const PaperIcon = styled('img')({
  position: 'absolute',
  width: "183px",
  height: "183px",
  top: "30px",
  right: "70px",
  opacity: "0.9"
})

const SocialLinks = styled('div')({
  display: "flex",
  position: "absolute",
  width: '354px',
  height: '92px',
  top: '530px',
  left: '817px',
  borderWidth: '2px',
  padding: "21px 34px",
  gap: "28px",
  borderRadius: '8px',
  borderStyle: "solid",
  borderColor: "#FF00CC",
  backgroundColor: "#D9D9D933"
  // borderImage: "linear-gradient(132.62deg, #FF00CC 2.21%, #8900FB 99.93%)"
});

const LandingPage: React.FC = () => {
  return (
    <div className="bg-landing w-full h-screen bg-[length:100%_100%] bg-center bg-no-repeat">
      <PaperIcon src="/src/icons/paper-icon.png"></PaperIcon>
      <ButtonGroup>
        {
          ButtonValues && ButtonValues.map((item, index) => {
            return (
              <Link to={item.link} key={index}>
                <div className="flex flex-col items-center">
                  <img src={item.icon} style={{width: "134", height: "134"}} ></img>
                  <ButtonText>{item.text}</ButtonText>
                </div>
              </Link>
            )
          })
        }
      </ButtonGroup>
      <SocialLinks>
        {
          SocialLinkValues && SocialLinkValues.map((item, index) => {
            return (
              <Link to={item.link} key={index} className="flex flex-col items-center">
                <img 
                  src={item.icon} 
                  style={{ 
                    width: "51", 
                    height: "51", 
                    // boxShadow: "2px 3px 1px 0px #C21EA1"
                  }}
                ></img>
              </Link>
            )
          })
        }
      </SocialLinks>
    </div>
  );
};

export default LandingPage;

