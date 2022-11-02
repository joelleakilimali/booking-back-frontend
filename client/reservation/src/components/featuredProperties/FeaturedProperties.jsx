import { Fragment } from "react";
import { Button } from "semantic-ui-react";
import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  return (
    <div className="fp w-[100%] flex justify-between bg-black">
      {loading ? (
        "please wait ..."
      ) : (
        <Fragment>
          {data.map((item, key = item._id) => (
            <div className="fpItem">
              <img src={item.photos[0]} alt="" className="fpItemImg " />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="fpRating">
                  <Button>{item.rating}</Button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </Fragment>
      )}
    </div>
  );
};

export default FeaturedProperties;
