import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Orion UI kit – data visualization and charts templates for Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/20894654-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma",
  },
  {
    id: 2,
    image: IMG2,
    title: "Orion UI kit – data visualization and charts templates for Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/20894654-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma",
  },
  {
    id: 3,
    image: IMG3,
    title: "Orion UI kit – data visualization and charts templates for Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/20894654-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma",
  },
  {
    id: 4,
    image: IMG4,
    title: "Orion UI kit – data visualization and charts templates for Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/20894654-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma",
  },
  {
    id: 5,
    image: IMG5,
    title: "Orion UI kit – data visualization and charts templates for Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/20894654-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma",
  },
  {
    id: 6,
    image: IMG6,
    title: "Orion UI kit – data visualization and charts templates for Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/20894654-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>MyRecent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>T{title}</h3>
              <div className="portfolio__item-image-cta">
                <a href={github} className="btn" target="__blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="__blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
