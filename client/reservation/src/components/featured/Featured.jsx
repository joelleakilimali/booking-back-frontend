import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/CountByCity?cities=berlin,cyprus,texas"
  );
  console.log("---->", data);
  return (
    <div className="featured">
      {loading ? (
        "loading , please wait ..."
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://content.r9cdn.net/rimg/dimg/9b/f7/7ab79f27-city-6080-158d0e1464c.jpg?crop=true&width=1366&height=768&xhint=1904&yhint=1457"
              alt="images"
              className="featureImg"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[0]}</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://content.r9cdn.net/rimg/dimg/9b/f7/7ab79f27-city-6080-158d0e1464c.jpg?crop=true&width=1366&height=768&xhint=1904&yhint=1457"
              alt="images"
              className="featureImg"
            />
            <div className="featuredTitles">
              <h1>Cyprus</h1>
              <h2>{data[1]}</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://content.r9cdn.net/rimg/dimg/9b/f7/7ab79f27-city-6080-158d0e1464c.jpg?crop=true&width=1366&height=768&xhint=1904&yhint=1457"
              alt="images"
              className="featureImg"
            />
            <div className="featuredTitles">
              <h1>Texas</h1>
              <h2>{data[2]}</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
