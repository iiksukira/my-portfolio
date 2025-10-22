import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { services } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { fadeIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';
import { linkedin, github, email } from '../../assets';

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

interface ProfileCard {
  title?: string;
  icon: string;
}

const ProfileCard: React.FC<ProfileCard> = ({ icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#aaa6c3"
    className="w-full flex justify-center"
  >
    <div className="w-[300px] h-[300px] xs:w-[500px] xs:h-[600px]">
      <motion.div className="green-pink-gradient shadow-card w-full h-full rounded-[20px] p-[1px]">
        <div className="bg-tertiary w-full h-full rounded-[20px] flex items-center justify-center p-4">
          <img src={icon} alt="profile" className="w-full h-full object-cover rounded-[16px]" />
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    className="flex justify-center"
    glareColor="#aaa6c3"
  >
    <div className="max-w-[250px] w-full xs:w-[250px] flex justify-center">
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
          <img src={icon} alt="web-development" className="h-16 w-16 object-contain" />

          <h3 className="text-center text-[20px] font-bold text-white">{title}</h3>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About = () => {
  const githubUrl = 'https://github.com/iiksukira';
  const linkedinUrl = 'https://www.linkedin.com/in/iik-sukira';
  const emailUrl = 'mailto:iiksukira86@gmail.com';

  return (
    <>
      <div className="mt-20 mb-20 flex flex-wrap gap-10 max-sm:justify-center items-center">
        <ProfileCard icon={services[0].icon} />
      </div>
      <Header useMotion={true} {...config.sections.about} />

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        {config.sections.about.content}
      </motion.p>

      <div className="mt-6 flex items-center gap-4">
        <div
          onClick={() => window.open(githubUrl, '_blank')}
          className="black-gradient flex h-12 w-12 cursor-pointer items-center justify-center rounded-full"
          aria-label="Open GitHub profile"
        >
          <img src={github} alt="github" className="h-6 w-6 object-contain" />
        </div>

        <div
          onClick={() => window.open(linkedinUrl, '_blank')}
          className="black-gradient flex h-12 w-12 cursor-pointer items-center justify-center rounded-full"
          aria-label="Open LinkedIn profile"
        >
          <img src={linkedin} alt="linkedin" className="h-6 w-6 object-contain" />
        </div>
        <div
          onClick={() => window.open(emailUrl, '_blank')}
          className="black-gradient flex h-12 w-12 cursor-pointer items-center justify-center rounded-full"
          aria-label="Send Email"
        >
          <img src={email} alt="email" className="h-6 w-6 object-contain" />
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.slice(1).map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
