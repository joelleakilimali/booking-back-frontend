import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navBar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

import "./list.css";
const List = () => {
  const location = useLocation(); //taking information in the userlocation and stok it in the variable location
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options);
  const [date, setDate] = useState(location.state.date);
  const [opendate, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const { data, loading, reFetch, error } = useFetch(
    `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
  ); // our useEffect function that we created , its fetching information accpording to the api that api/end point that we give

  const handleClick = () => {
    reFetch();
  };
  return (
    <div>
      <Navbar />
      <Header type={"list"} />
      <div className="listContainer">
        <div className="fListWrapper">
          <div className="fListSearch">
            <h1 className="listTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label>Check in date</label>
              <span
                onClick={() => {
                  setOpenDate(!opendate);
                }}
              >
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}   `}
              </span>
              {opendate && (
                <DateRange
                  minDate={new Date()}
                  ranges={date}
                  onChange={(item) => setDate([item.selection])}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOption">
                <div className="lsOptionsItem">
                  <span className="lsOptionsText">
                    Min price<small>per night</small>
                  </span>
                  <span>
                    <input
                      type="number"
                      onChange={(e) => setMin(e.target.value)}
                      min={1}
                      className="lsOptionsInput"
                    />
                  </span>
                </div>
                <div className="lsOptionsItem">
                  <span className="lsOptionsText">
                    Max price<small>per night</small>
                  </span>
                  <span>
                    <input
                      type="number"
                      min={1}
                      onChange={(e) => setMax(e.target.value)}
                      className="lsOptionsInput"
                    />
                  </span>
                </div>
                <div className="lsOptionsItem">
                  <span className="lsOptionsText">Adult</span>
                  <span>
                    <input
                      type="number"
                      placeholder={options.adult}
                      className="lsOptionsInput"
                      min={1}
                    />
                  </span>
                </div>
                <div className="lsOptionsItem">
                  <span className="lsOptionsText">Children</span>
                  <span>
                    <input
                      type="number"
                      min={0}
                      placeholder={options.children}
                      className="lsOptionsInput"
                    />
                  </span>
                </div>
                <div className="lsOptionsItem">
                  <span className="lsOptionsText">Room</span>
                  <span>
                    <input
                      min={1}
                      type="number"
                      placeholder={options.room}
                      className="lsOptionsInput"
                    />
                  </span>
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="fListResult">
            {loading ? (
              "loading..."
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
