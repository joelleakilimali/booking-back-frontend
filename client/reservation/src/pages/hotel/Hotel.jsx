import "./hotel.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navBar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailComponent from "../../components/mailComponent/MailComponent";

import Footer from "../../components/footer/Footer";
import { useLocation, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Hotel = () => {
  const location = useLocation(); //to recuparate the path of the  url , we could also just do it with useparams to take just the id  but it will be an object

  const id = location.pathname.split("/")[2];
  const { data, loading, reFetch, error } = useFetch(`/hotels/find/${id}`);
  console.log(location);

  const photo = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/386052655.jpg?k=c3196572d99c7ed0001566398b50afee24c962c94ddf8555d7209b986568f91c&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/386052871.jpg?k=ded5e6238dd9357523c87cc3ca0c881b3fe58d94f734f27fa97166064ab85574&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/386052923.jpg?k=3d24b324fc2c87e2d64041dc19e56102ff4bd5b274530ab6d8d1a336a03d6de5&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/386053021.jpg?k=1512e63c024b258354c86dc7d1f7d892f938bdfa5d628116e3b12539b9e3570e&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/386052892.jpg?k=cd2225b8ec2ad60768974876781a0fe189fc48cd291e37b21a849fbc7c75e961&o=&hp=1",
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/386052973.jpg?k=7e0c3c061872046411f411b15a61dd53f3434cbfbea0160d526623ec926457ff&o=&hp=1",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "please wait ..."
      ) : (
        <div className="hotelContainer">
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or book now!</button>
            <h1 className="hotelTitle">{data?.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data?.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location - {data?.distance}from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${data?.cheapestPrice}at this property and get a
              free airpot
            </span>
            <div className="hotelImages">
              {photo.map((photo) => (
                <div className="hotelImgWrapper">
                  <img src={photo.src} alt="hotelImage" className="hotelImg" />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsText">
                <h1 className="hotelTitle">{data?.title}</h1>
                <p className="hotelDesc">{data?.description}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a 9 night stay</h1>
                <span>
                  Locate in the real heart of cyprus (city center)this property
                  has an excellent location
                </span>
                <h2>
                  <b>$955</b> (9nights)
                </h2>
                <button>Reserve or book now!</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <MailComponent />
      <Footer />
    </div>
  );
};

export default Hotel;
