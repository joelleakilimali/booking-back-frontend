import { Link } from "react-router-dom";
import "./searchitem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searcItem">
      <img className="siImg" src={item?.photos[0]} alt="" />
      <div className="siDesc">
        <h1 className="siTitle">{item?.name}</h1>
        <span className="siDistance">{item?.distance}</span>
        <span className="siTaxi">free airport taxi</span>
        <span className="siSubTitle">{item?.description}</span>
        <span className="siFeatiure">
          Entire studio . 1 bathroom .21 m 1 full bed
        </span>
        <span className="sicancelOp">free cancellation</span>
        <span className="sicancelOpSubt">
          you can cancel later , so lock in this great price today
        </span>
      </div>
      <div clssName="siDetail">
        {item?.rating && (
          <div className="siRating">
            <span className="siRatingText">Excellent</span>
            <button>{item?.rating}</button>
          </div>
        )}
        <div className="siDetailText">
          <span className="siPrice">$ {item?.cheapestPrice}</span>
          <span className="siTaxOp">include taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siSearchBtn">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
