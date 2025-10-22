import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { github } from '../../assets';
import { SectionWrapper } from '../../hoc';
import { projects } from '../../constants';
import { fadeIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';
import { TProject } from '../../types';

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  ViewProjectLink,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)} className="w-full">
      <Tilt glareEnable tiltEnable tiltMaxAngleX={30} tiltMaxAngleY={30} glareColor="#aaa6c3">
        <div className="bg-tertiary w-full rounded-2xl p-4 h-full">
          <div className="relative h-[230px] w-full">
            <img src={image} alt={name} className="h-full w-full rounded-2xl object-cover" />
            <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
              <div
                onClick={() => window.open(sourceCodeLink, '_blank')}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              >
                <img src={github} alt="github" className="h-1/2 w-1/2 object-contain" />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-[24px] font-bold text-white">{name}</h3>
            <p className="text-secondary mt-2 text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map(tag => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
          <button
            onClick={() => window.open(ViewProjectLink, '_blank')}
            className="mt-4 inline-flex h-[40px] w-[150px] items-center justify-center rounded-[8px] bg-[#804dee] text-white font-semibold transition-transform hover:scale-[1.02]"
            aria-label={`View project ${name}`}
          >
            View Project
          </button>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
