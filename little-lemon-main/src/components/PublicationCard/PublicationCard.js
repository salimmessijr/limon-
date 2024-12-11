import "./publication-card.scss";

const PublicationCard = ({ image, title, price, description, buttonText }) => {
  return (
    <>
      <div className="card-wrapper">
        <img src={image} alt={`${title}-dish`} />
        <div className="content">
          <div className="header">
            <div className="title">{title}</div>
            <div className="price">{price}</div>
          </div>
          <div className="description">{description}</div>
          <div className="button">
            <button>{buttonText}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicationCard;
