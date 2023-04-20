const Sequelize = require("sequelize");
const user = require("./user");
const cloth = require("./cloth");
const image = require("./image");
const muffler = require("./muffler");
const outer = require("./outer");
const pant = require("./pant");
const shirt = require("./shirt");
const shoe = require("./shoe");
const top = require("./top");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.User = user;
db.Cloth = cloth;
db.Image = image;
db.Outer = outer;
db.Shirt = shirt;
db.Pant = pant;
db.Top = top;
db.Shoe = shoe;
db.Muffler = muffler;

Object.keys(db).forEach((modelName) => {
  db[modelName].init(sequelize);
});

// associtate 부분을 실행시켜주는 부분
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
