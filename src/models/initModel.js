const Celebration = require("./celebrations.model");
const City = require("./cities.model");
const Departament = require("./departament.model");
const TuristsPlaces = require("./turistsPlaces.model");
const TypicalMeals = require("./typicalMeals.model");

const initModel = () => {
  Departament.hasMany(City, {foreignKey: 'idDepartament'});
  City.belongsTo(Departament, {foreignKey: 'idDepartament'});

  Departament.hasMany(TuristsPlaces, {foreignKey: 'idDepartament'});
  TuristsPlaces.belongsTo(Departament, {foreignKey: 'idDepartament'});

  Departament.hasMany(Celebration, {foreignKey: 'idDepartament'});
  Celebration.belongsTo(Departament, {foreignKey: 'idDepartament'});

  Departament.hasMany(TypicalMeals, {foreignKey: 'idDepartament'});
  TypicalMeals.belongsTo(Departament, {foreignKey: 'idDepartament'});
};

module.exports = initModel; 