import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const buttonValues = [
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

const socialLinks = [
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
  left: "500px"
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
  width: "150px",
  height: "150px",
  top: "60px",
  right: "290px",
  opacity: "0.9"
})

const SocialLinks = styled('div')({
  display: "flex",
  position: "absolute",
  width: '354px',
  height: '92px',
  top: '520px',
  left: '675px',
  borderWidth: '2px',
  padding: "21px 34px",
  gap: "28px",
  borderRadius: '8px',
  borderStyle: "solid",
  borderColor: "#FF00CC",
  backgroundColor: "#D9D9D933"
  // borderImage: "linear-gradient(132.62deg, #FF00CC 2.21%, #8900FB 99.93%)"
});

const VideoBackground = styled('div')({
  position: "relative",
  width: "100%",
  height: "100vh",
  background: "url('/src/assets/banner.mp4') no-repeat center center",
  backgroundSize: "cover",
  overflow: "hidden",
  zIndex: -1,
  "& video": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  }
});

const LandingPage = () => {
  return (
    // <div className="bg-landing w-full h-screen bg-[length:100%_100%] bg-center bg-no-repeat">
    <div>
      <VideoBackground>
        <video autoPlay muted loop preload="auto">
          <source src="/src/assets/banner.mp4" type="video/mp4" />
        </video>
      </VideoBackground>
      <PaperIcon src="/src/icons/paper-icon.png"></PaperIcon>
      <ButtonGroup>
        {
          buttonValues && buttonValues.map((item, index) => {
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
          socialLinks && socialLinks.map((item, index) => {
            return (
              <Link to={item.link} key={index} className="flex flex-col items-center">
                <img 
                  src={item.icon} 
                  style={{ 
                    width:"51", 
                    height:"51", 
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

