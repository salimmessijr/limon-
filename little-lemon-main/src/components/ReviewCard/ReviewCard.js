import Rating from "../Rating/Rating";
import "./review-card.scss";

const ReviewCard = ({ avatar, name, username, testimonial }) => {
  return (
    <div className="card-review-wrapper">
      <div className="rating">
        <Rating />
      </div>
      <div className="header">
        <div className="avatar">
          <img src={avatar} alt={`${name}-avatar`} />
        </div>
        <div className="user-info">
          <div className="name">{name}</div>
          <div className="username">{username}</div>
        </div>
      </div>
      <div className="testimonial">{testimonial}</div>
    </div>
  );
};

export default ReviewCard;
