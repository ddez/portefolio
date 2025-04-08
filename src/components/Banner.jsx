import mainBanner from "/img/sunset_1920.webp";

import Carousel from "react-bootstrap/Carousel";
import "../styles/Banner.css";

const Banner = ({ title, subTitle, caption }) => {
  return (
    <>
      <Carousel className="dd-dark-banner">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={mainBanner}
            alt="Main Banner"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <p>{caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
