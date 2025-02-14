import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import { CardProps } from './roadmap-cards-container';

const CardContainer = styled('div')({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#C21EA1",
  padding: "15px 18px",
  borderRadius: "8px",
  borderWidth:"1px",
  borderColor: "black",
  boxShadow: "5px 7px  #000000"
})

const CardContent = styled('div')({
  display: "flex",
  flexDirection: "column",
  flexGrow: "1",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  boxShadow: "5px 7px #000000",
  color: '#3F2481',
  padding: '20px 12px',
  width: "210px"
})

const Title = styled(Typography)({
  fontFamily: "Retro Kraft",
  fontWeight: '400',
  fontSize: '30px',
  lineWeight: '26.6px',
  letterSpacing: '0%',
  textAlign: 'center',
  color: 'white',
});

const SubTitle = styled(Typography)({
  fontFamily: "Shrimp",
  fontWeight: '500',
  fontSize: '18px',
  lineWeight: '23.1px',
  letterSpacing: '-5%',
  textAlign: 'center',
});

const Description = styled(Typography)({
  fontFamily: "Articulat CF",
  fontWeight: '500',
  fontSize: '15px',
  lineWeight: '17.55px',
  letterSpacing: '-5%',
  textAlign: 'center',
});

const RoadMapCard = ({card, key}: {card: CardProps, key: number}) => {
  return (
    <CardContainer key={key}>
      <Title>{card.title}</Title>
      <CardContent>
        <SubTitle>{card.subtitle}</SubTitle>
        <Description>{card.description}</Description>
        <button>
          <img src="/icons/lock.png"/>
        </button>
      </CardContent>
    </CardContainer>
  )
}

export default RoadMapCard;