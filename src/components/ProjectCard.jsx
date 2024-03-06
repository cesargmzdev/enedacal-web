import PropTypes from 'prop-types';

const ProjectCard = (props) => {
  if (props.isVideo === true) {
    return (
      <article className={`flex flex-col h-[80dvh]`}>
        <video src={props.src} alt={`project ${props.alt}`} className='h-5/6' autoPlay loop muted />
        <footer className='flex flex-col font-MontrealLight h-1/6 lg:h-auto mt-1'>
          <span className='underline'>{props.title}</span>
        </footer>
      </article>
    );
  } else {
    return (
      <article className={`flex flex-col h-[80dvh]`}>
        <img src={props.src} alt={`project ${props.alt}`} className='h-5/6' />
        <footer className='flex flex-col font-MontrealLight h-1/6 lg:h-auto mt-1'>
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