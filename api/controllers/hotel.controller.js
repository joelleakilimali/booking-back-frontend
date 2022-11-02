import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
  const newhotel = new Hotel(req.body);
  try {
    const savedHotel = await newhotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

export const getHotels = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    // const hotels = await Hotel.find(); to find all hotels without any query
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit); // you can or not put the limit we will get all hotel that have the specified information in the query
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};

export const updateHotel = async (req, res, next) => {
  const hoteUpdated = await Hotel.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.status(200).json(hoteUpdated);
};
export const deleteHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findByIdAndDelete(req.params.id);
  } catch (err) {
    next(err);
  }
};
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(","); // we separate each city using the split method after each coma
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
export const countByType = async (req, res, next) => {
  //since we  have a limit type of hotel we can count it one by one
  try {
    const countHotel = await Hotel.countDocuments({ type: "hotel" });
    const countVilla = await Hotel.countDocuments({ type: "villa" });
    const countCabin = await Hotel.countDocuments({ type: "cabin" });
    const countAppart = await Hotel.countDocuments({ type: "appart" });

    res.status(200).json([
      { type: "hotel", count: countHotel },
      { type: "villa", count: countVilla },
      { type: "cabin", count: countCabin },
      { type: "appart", count: countAppart },
    ]);
  } catch (err) {
    next(err);
  }
};
