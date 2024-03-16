import PropTypes from 'prop-types';

const ProjectCard = (props) => {

  if (props.isVideo === true) {
    return (
      <article className={`flex flex-col pb-16`}>
        <video src={props.src} alt={`project ${props.alt}`} className='lg:max-h-[45dvh]' autoPlay loop muted />
        <footer className='flex flex-col font-MontrealLight pt-1'>
          <span className='underline'>{props.title}</span>
        </footer>
      </article>
    );
  } else {
    return (
      <article className={`flex flex-col pb-16`}>
        <img src={props.src} alt={`project ${props.alt}`} className='lg:max-h-[45dvh]' />
        <footer className='flex flex-col font-MontrealLight pt-1'>
          <span className='underline'>{props.title}</span>
        </footer>
      </article>
    );
  }
};

ProjectCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
  isVideo: PropTypes.bool,
};

export default ProjectCard;