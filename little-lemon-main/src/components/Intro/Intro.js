import { Link } from "react-router-dom";
import dish from "../../images/restauranfood.jpg";
import "./intro.scss";

const Intro = () => {
  return (
    <div className="intro-wrapper">
      <div className="intro-container">
        <div className="content">
          <h1 className="title">Little Lemon</h1>
          <div className="city">Chicago</div>
          <div className="description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </div>
          <div className="button">
            <Link to="/reservations" className="reserve-button">
              Reserve a table
            </Link>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={dish} alt="metiderranean dish" />
      </div>
    </div>
  );
};

export default Intro;
