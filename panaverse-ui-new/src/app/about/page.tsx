import Image from "next/image";
import React from "react";
import president from "./../../assets/president.jpg";
import ziaKhan from "./../../assets/ziaKhan.png";
import saylaniLogo from "./../../assets/saylaniLogo.png";
import panacloudLogo from "./../../assets/panacloudLogo.png";
const About = () => {
  return (
    <div className="py-8 overflow-hidden">
      <div className="flex justify-center flex-col items-center">
        <Image src={ziaKhan} alt={""} className="w-64 rounded-full" />
        <h1 className="text-4xl font-bold underline-transition w-fit mt-5">
          Zia Khan
        </h1>
        <p className="mt-5 px-5 text-center py-4">
          Ceo Panacloud, COO Presidential Initiative for Artificial Intelligence
          and Cloud Computing <br />
          Web 3, DeFi, Cloud and Metaverse Architect | Tokenomist and Metanomist
        </p>
        <div className="w-screen flex justify-center">
          <iframe
            className="w-[75vw] aspect-video"
            src="https://www.youtube.com/embed/UXSEKBgOhyY"
            title="Sir Zia Khan - Mentor of Every Student"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="w-[40vw] border-b border-b-black mt-8 mx-auto"></div>
      <div className="flex justify-center flex-col items-center mt-8">
        <Image src={president} alt={""} className="w-64 rounded-full" />
        <h1 className="text-4xl font-bold underline-transition w-fit mt-5">
          Dr.Arif Alvi
        </h1>
        <p className="mt-5 px-5 text-center py-4">
          President of Islamic Republic of Pakistan
        </p>
        <div className="w-screen flex justify-center">
          <p className="w-[75vw] text-center">
            Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic
            of Pakistan on 9th September 2018. Dr. Arif Alvi was born in 1949
            and completed his early education in Karachi. He did his Bachelor of
            Dental Surgery (BDS) from De’ Montmorency College of Dentistry,
            Lahore where he was declared the “Best Graduate” . He completed his
            Masters of Science in the field of Prosthodontics from University of
            Michigan (1975) and in Orthodontics from University of Pacific, San
            Francisco (1982). He was awarded fellowship ‘Diplomatic American
            Board of Orthodontists (1995)’. President Dr. Arif Alvi has been a
            renowned professional and has held many important positions in the
            field of Dentistry. He remained Dean of Orthodontics, College of
            Physicians and Surgeons of Pakistan, President, Pakistan Dental
            Association (1997-2001), Pakistan Association of Orthodontists
            (2005), Asia Pacific Dental Federation (2006-07) and Councilor of
            the World Dental Federation (2007-2013). Through his sheer hard work
            in the World Dental Federation, he was able to get the declaration
            of 20th March as World Oral Health Day. He is also an author of a
            book, theses, and many articles. Dr. Arif Alvi’s political career
            commenced with his pro-democracy struggle against the dictatorship
            of General Ayub Khan. He is a founding member of Pakistan
            Tehreek-e-Insaf (PTI) that came into being in 1996. He remained a
            member of the PTI’s Central Executive Committee since its inception
            and has held the offices of PTI President of Sindh (1997-2001),
            Central Vice President (2001-2006) and Secretary General
            (2006-2013). In line with Constitution of Pakistan, he resigned from
            all the positions of PTI before assuming the prestigious office of
            the President. During his tenure as the Secretary General of the
            party, Dr. Arif Alvi introduced social media platform in the
            politics of Pakistan. He was instrumental in holding intra-party
            election (2012-2013) and enabled millions of party members to
            digitally participate in the election process. He was elected as
            member of National Assembly from Karachi in 2013 and 2018 and was
            instrumental in drafting and the passage of many bills including one
            on Alternate Dispute Resolution. He also chaired the sub-committee
            of EVM’s, Digital Identification of voters and voting of overseas
            Pakistanis. The latter has finally come to fruition. Dr. Arif Alvi
            has keen interest in education and health sectors. Provision of
            basic facilities to the common man and uplifting the country’s image
            are very close to his heart. He considers people of Pakistan as the
            most precious asset and, therefore, accords special focus to human
            resource development in the country. He is happily married and has
            four children.
          </p>
        </div>
      </div>
      <div className="w-[40vw] border-b border-b-black mt-8 mx-auto"></div>
      <div className="flex justify-center flex-col items-center mt-8">
        <h1 className="text-4xl font-bold w-fit text-center underline-transition ">
          Introduction to PIAIC
        </h1>
        <p className="mt-8 text-center w-[75vw] py-5">
          The mission of PIAIC is to reshape Pakistan by revolutionizing
          education, research, and business by adopting latest, cutting-edge
          technologies. Experts are calling this the 4th industrial revolution.
          We want Pakistan to become a global hub for AI, data science, cloud
          native computing, edge computing, blockchain, augmented reality, and
          internet of things.
        </p>
        <iframe
          className="w-[75vw] aspect-video"
          src="https://www.youtube.com/embed/sqtc7s1KZEg"
          title="PIAIC Intro - Full Version"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>{" "}
      </div>
      <div className="w-[40vw] border-b border-b-black mt-8 mx-auto"></div>
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-4xl font-bold w-fit text-center underline-transition">
          Strategic Collaborators
        </h1>{" "}
        <div className="flex justify-center items-center mt-8 flex-col lg:flex-row">
          <Image src={panacloudLogo} alt={""} className="w-32 h-20 lg:mr-12" />
          <Image src={saylaniLogo} alt={""} />
        </div>
      </div>
    </div>
  );
};

export default About;
