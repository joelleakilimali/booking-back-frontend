import useFetch from "../../hooks/useFetch";
import "./propertyList.css";
const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");
  return (
    <div className="pList">
      {loading ? (
        "loading..."
      ) : (
        <>
          <div className="pListItem">
            <img
              src="https://pix8.agoda.net/hotelImages/2464815/-1/53b57e4b7e92a4de5f04f387856c2e5b.jpg?ca=15&ce=1&s=1024x768"
              alt=""
              className="pListImg"
            />
            <div className="pListTitle">
              <h1>hotels</h1>
              <h2>{data[0]?.count}</h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              src="https://pix8.agoda.net/hotelImages/129/1295206/1295206_16081718150045577616.jpg?ca=6&ce=1&s=1024x768"
              alt=""
              className="pListImg"
            />
            <div className="pListTitle">
              <h1>Villas</h1>
              <h2>{data[1]?.count}</h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              src="https://pix8.agoda.net/hotelImages/4862583/0/7cc536485d3184ca6cb482bfceab8e9c.jpg?ca=9&ce=1&s=1024x768"
              alt=""
              className="pListImg"
            />
            <div className="pListTitle">
              <h1>Cabins</h1>
              <h2>{data[2]?.count}</h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              src="https://pix8.agoda.net/hotelImages/135/1358450/1358450_16112121310048951525.jpg?ca=6&ce=1&s=1024x768"
              alt=""
              className="pListImg"
            />
            <div className="pListTitle">
              <h1>Appart</h1>
              <h2>{data[3]?.count}</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PropertyList;
