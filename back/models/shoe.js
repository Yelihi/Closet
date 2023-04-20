const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Shoe extends Model {
  static init(sequelize) {
    return super.init(
      {
        size: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
      },
      {
        // 유저 모델에 대한 셋팅
        modelName: "Shoe",
        tableName: "shoes",
        charset: "utf8",
        collate: "utf8_general_ci",
        sequelize,
      }
    );
  }

  static postShoesbyReq = async (req) => {
    const result = await this.create({
      size: req.body.items.categoriItem.size,
    });
    return result;
  };

  static postShoesWithClothId = async (req, id) => {
    await this.create({
      size: req.body.items.categoriItem.size,
      ClothId: id,
    });
  };

  static updateShoesbyReq = async (req, id) => {
    await this.update(
      {
        size: req.body.items.categoriItem.size,
      },
      {
        where: { ClothId: id },
      }
    );
  };

  static associate(db) {
    db.Shoe.belongsTo(db.Cloth);
  }
};
