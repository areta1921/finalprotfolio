import "./portfolio.css";
import IMG1 from "../../assets/crypto1.webp";
import IMG2 from "../../assets/bookstore.png";
import IMG3 from "../../assets/yelp.webp";
import IMG4 from "../../assets/inventorylast.png";
import IMG5 from "../../assets/login.webp";
import IMG6 from "../../assets/wikiverse.jpeg";

const data = [
  {
    id: 1,
    image: IMG1,
    title:
      "This application allowed users to pull data from the Crypto API based on what they were interested in, such as price, marketCap and others...",
    github: "https://github.com/areta1921/hackatonCrypto",
    demo: "https://dribbble.com/shots/20894654-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma",
  },
  {
    id: 2,
    image: IMG2,
    title: "Online Book Store ecommerce website has all the features of a modern online store.",
    github: "https://github.com/areta1921/bookStore",
    demo: "https://dribbble.com/shots/20894654-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma",
  },
  {
    id: 3,
    image: IMG3,
    title: "Yelp App is a web application that allows users to search for restaurants and bars in their area.",
    github: "https://github.com/7-Stories-Above-Ponce/yelpApp",
    demo: "https://dribbble.com/shots/20894654-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma",
  },
  {
    id: 4,
    image: IMG4,
    title: "Inventory App which allows users to add, edit, and delete items from their inventory.",
    github: "https://github.com/areta1921/inventory-app-last",
    demo: "https://dribbble.com/shots/20894654-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma",
  },
  {
    id: 5,
    image: IMG5,
    title: "College Result Login is a web application that allows users to login and view their results.",
    github: "https://github.com/areta1921/college-result-login",
    demo: "https://dribbble.com/shots/20894654-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma",
  },
  {
    id: 6,
    image: IMG6,
    title: "Wikiverse is a web application that allows users to search for information about any topic.",
    github: "https://github.com/areta1921/wikiverse",
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
              <h3>{title}</h3>
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
