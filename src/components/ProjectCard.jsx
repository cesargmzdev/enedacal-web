import PropTypes from 'prop-types';

const ProjectCard = (props) => {
  return (
    <article className='flex flex-col h-screen'>
      <img src={props.img} alt={`project ${props.alt}`} className='h-5/6' />
      <footer className='flex flex-col font-MontrealLight h-1/6'>
        <span className='underline'>{props.title}</span>
        <span>{props.description}</span>
      </footer>
    </article>
  );
};

ProjectCard.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired, // Added prop validation for 'title'
  description: PropTypes.string.isRequired, // Added prop validation for 'description'
};

export default ProjectCard;