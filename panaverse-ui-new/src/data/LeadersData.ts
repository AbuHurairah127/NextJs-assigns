import { StaticImageData } from "next/image";
import ziaKhan from "./../assets/ziaKhan.png";
import daniyal from "./../assets/Daniyal-Naghori.png";
export type LeaderType = {
  name: string;
  desc: string;
  image: StaticImageData;
};

export const data: LeaderType[] = [
  {
    name: "Zia Khan",
    desc: `Ceo Panacloud, COO Presidential Initiative for Artificial Intelligence and Cloud Computing
Web 3, DeFi, Cloud and Metaverse Architect | Tokenomist and Metanomist`,
    image: ziaKhan,
  },
  {
    name: "Daniyal Naghori",
    desc: `CEO at PIAIC, CTO at TravelclubIQ and Founder, Director, CEO at ProStack Ltd`,
    image: daniyal,
  },
];
