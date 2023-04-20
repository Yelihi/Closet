const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Muffler extends Model {
  static init(sequelize) {
    return super.init(
      {
        totalLength: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
      },
      {
        // 유저 모델에 대한 셋팅
        modelName: "Muffler",
        tableName: "mufflers",
        charset: "utf8",
        collate: "utf8_general_ci",
        sequelize,
      }
    );
  }

  static postMufflerbyReq = async (req) => {
    const result = await this.create({
      totalLength: req.body.items.categoriItem.totalLength,
    });
    return result;
  };

  static postMufflerWithClothId = async (req, id) => {
    await this.create({
      totalLength: req.body.items.categoriItem.totalLength,
      ClothId: id,
    });
  };

  static updateMufflerbyReq = async (req, id) => {
    await this.update(
      {
        totalLength: req.body.items.categoriItem.totalLength,
      },
      {
        where: { ClothId: id },
      }
    );
  };

  static associate(db) {
    db.Muffler.belongsTo(db.Cloth);
  }
};
