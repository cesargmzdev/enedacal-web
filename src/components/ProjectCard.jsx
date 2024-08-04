import PropTypes from "prop-types";

const ProjectCard = (props) => {
  if (props.isVideo === true) {
    return (
      <article className={`flex flex-col pb-16 ${props.article_classNames}`}>
        <video
          src={props.src}
          alt={`project ${props.alt}`}
          autoPlay
          loop
          muted
          playsInline
          className={`${props.media_classNames}`}
        />
        <footer className="flex flex-col font-MontrealLight pt-1">
          <span className="text-xl md:text-base hover:text-yellow-500 hover:underline duration-300">
            {props.title}
          </span>
        </footer>
      </article>
    );
  } else {
    return (
      <article className={`flex flex-col pb-16 ${props.article_classNames}`}>
        <img
          src={props.src}
          alt={`project ${props.alt}`}
          className={`${props.media_classNames}`}
        />
        <footer className="flex flex-col font-MontrealLight pt-1">
          <span className="text-xl md:text-base hover:text-yellow-500 hover:underline duration-300">
            {props.title}
          </span>
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
  article_classNames: PropTypes.string,
  media_classNames: PropTypes.string,
};

export default ProjectCard;
