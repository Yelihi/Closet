const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Pant extends Model {
  static init(sequelize) {
    return super.init(
      {
        totalLength: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        rise: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        hem: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        waist: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        thigh: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
      },
      {
        // 유저 모델에 대한 셋팅
        modelName: "Pant",
        tableName: "pants",
        charset: "utf8",
        collate: "utf8_general_ci",
        sequelize,
      }
    );
  }

  static postPantbyReq = async (req) => {
    const result = await this.create({
      totalLength: req.body.items.categoriItem.totalLength,
      rise: req.body.items.categoriItem.rise,
      hem: req.body.items.categoriItem.hem,
      waist: req.body.items.categoriItem.waist,
      thigh: req.body.items.categoriItem.thigh,
    });
    return result;
  };

  static postPantWithClothId = async (req, id) => {
    await this.create({
      totalLength: req.body.items.categoriItem.totalLength,
      rise: req.body.items.categoriItem.rise,
      hem: req.body.items.categoriItem.hem,
      waist: req.body.items.categoriItem.waist,
      thigh: req.body.items.categoriItem.thigh,
      ClothId: id,
    });
  };

  static updatePantbyReq = async (req, id) => {
    await this.update(
      {
        totalLength: req.body.items.categoriItem.totalLength,
        rise: req.body.items.categoriItem.rise,
        hem: req.body.items.categoriItem.hem,
        waist: req.body.items.categoriItem.waist,
        thigh: req.body.items.categoriItem.thigh,
      },
      {
        where: { ClothId: id },
      }
    );
  };

  static associate(db) {
    db.Pant.belongsTo(db.Cloth);
  }
};
