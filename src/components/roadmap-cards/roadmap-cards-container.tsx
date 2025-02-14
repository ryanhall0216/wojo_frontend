import RoadMapCard from "./roadmap-card";

export type CardProps = {
  title: string,
  subtitle: string,
  description: string
}

const roadmapCards = [
  {
    title: "$1 Milliion",
    subtitle: "WOJO TAKES TIME SQUARE",
    description: "Wojo dominates New York’s iconic Times Square with eye-catching ads"
  },
  {
    title: "$5 Milliion",
    subtitle: "$20K MARKETING BLITZ FOR WOJO",
    description: "$20k Marketing Blitz for Wojo (A $20K marketing campaign across major social channels and crypto influencers"
  },
  {
    title: "$10 Milliion",
    subtitle: "LISTING ON CEX",
    description: "Wojo securing listings on exchanges like MEXC and BitMart, expanding its trading community"
  },
  {
    title: "$20 Milliion",
    subtitle: " WOJO MEME WAR",
    description: "Host a week-long meme contest on X with 200 SOL in rewards"
  },
  {
    title: "$50 Milliion",
    subtitle: "WojoClub NFT LAUNCH",
    description: "NFT collection on Solana featuring a uniquely styled Wojo dog, granting holders VIP access and community influence"
  },
  {
    title: "$100 Milliion",
    subtitle: "$1M MEGA MARKETING SURGE",
    description: "partnering with top social media influencers and sponsoring major sports events"
  },
  {
    title: "$500 Milliion",
    subtitle: "TOP-TIER EXCHANGE LISTINGS",
    description: "Wojo lists on Binance and Coinbase, unlocking global visibility and attracting millions of new investors"
  },
  {
    title: "$1 Billion",
    subtitle: "LAUNCH A WOJO DAO",
    description: "Establish WojoDAO, seeded with a treasury to invest in memecoins, gaming tokens, or philanthropic crypto initiatives."
  }
]

const RoadMapCardsContainer = () => {
  return (
    <div className="flex flex-wrap gap-x-[15px] gap-y-[22px] w-[1120px]">
      {
        roadmapCards && roadmapCards.map((item, index) => {
          return <RoadMapCard card={item} key={index}/>
        })
      }
    </div>
  )
}

export default RoadMapCardsContainer;