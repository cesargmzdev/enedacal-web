import PropTypes from 'prop-types';

const ProjectCard = (props) => {
  return (
    <article className={`flex flex-col h-[80dvh]`}>
      <img src={props.img} alt={`project ${props.alt}`} className='h-5/6' />
      <footer className='flex flex-col font-MontrealLight h-1/6 lg:h-auto'>
        <span className='underline'>{props.title}</span>
      </footer>
    </article>
  );
};

ProjectCard.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProjectCard;