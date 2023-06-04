const mongoose = require("mongoose"); // Import mongoose
const Model = mongoose.model("trips"); // Import the Trip model

const tripsList = async (req, res) => {
  Model.find({}) // empty object means find all
    .exec((err, trips) => {
      if (!trips) {
        return res.status(404).json({ message: "trips not found" });
      } else if (err) {
        return res.status(404).json(err);
      } else {
        return res.status(200).json(trips);
      }
    });
};

// GET trips
const tripsFindCode = async (req, res) => {
  Model.find({ 'code': req.params.tripCode }) // find by code
    .exec((err, trip) => {
      if (!trip) {
        return res.status(404).json({ message: "trip not found" });
      } else if (err) {
        return res.status(404).json(err);
      } else {
        return res.status(200).json(trip);
      }
    });
};

module.exports = {
  tripsList,
  tripsFindCode,
};


