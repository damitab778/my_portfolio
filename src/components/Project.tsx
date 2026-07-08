import "../style/Project.css";
import "aos/dist/aos.css";

interface ProjectProps {
  img?: string;
  description: string;
  title: string;
  link: string;
  linkLabel?: string;
  from: string;
}

function Project({
  img,
  description,
  title,
  link,
  linkLabel = "Visit Website",
  from,
}: ProjectProps) {
  return (
    <div
      className={img ? "card" : "card card--no-image"}
      style={img ? { backgroundImage: "url(" + img + ")" } : undefined}
      data-aos={from}
      data-aos-anchor-placement="top-center"
      data-aos-offset="0"
      data-aos-delay="400"
      data-aos-once="true"
    >
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-body">{description}</p>
        <a href={link} target="_blank" rel="noreferrer" className="button">
          {linkLabel}
        </a>
      </div>
    </div>
  );
}

export default Project;
