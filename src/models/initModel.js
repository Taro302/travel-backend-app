const Celebration = require("./celebrations.model");
const City = require("./cities.model");
const Departament = require("./departament.model");
const TuristsPlaces = require("./turistsPlaces.model");
const TypicalMeals = require("./typicalMeals.model");

const initModel = () => {
  Departament.hasMany(City, {foreignKey: 'idDepartament'});
  City.belongsTo(Departament, {foreignKey: 'idDepartament'});

  City.hasMany(TuristsPlaces, {foreignKey: 'idCity'});
  TuristsPlaces.belongsTo(TuristsPlaces, {foreignKey: 'idCity'});

  City.hasMany(Celebration, {foreignKey: 'idCity'});
  Celebration.belongsTo(City, {foreignKey: 'idCity'});

  City.hasMany(TypicalMeals, {foreignKey: 'idCity'});
  TypicalMeals.belongsTo(City, {foreignKey: 'idCity'});
};

module.exports = initModel; 