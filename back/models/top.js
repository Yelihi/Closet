const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Top extends Model {
  static init(sequelize) {
    return super.init(
      {
        shoulder: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        arm: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        totalLength: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        chest: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
      },
      {
        // 유저 모델에 대한 셋팅
        modelName: "Top",
        tableName: "tops",
        charset: "utf8",
        collate: "utf8_general_ci",
        sequelize,
      }
    );
  }

  static postTopbyReq = async (req) => {
    const result = await this.create({
      shoulder: req.body.items.categoriItem.shoulder,
      arm: req.body.items.categoriItem.arm,
      totalLength: req.body.items.categoriItem.totalLength,
      chest: req.body.items.categoriItem.chest,
    });
    return result;
  };

  static postTopWithClothId = async (req, id) => {
    await this.create({
      shoulder: req.body.items.categoriItem.shoulder,
      arm: req.body.items.categoriItem.arm,
      totalLength: req.body.items.categoriItem.totalLength,
      chest: req.body.items.categoriItem.chest,
      ClothId: id,
    });
  };

  static updateTopbyReq = async (req, id) => {
    await this.update(
      {
        shoulder: req.body.items.categoriItem.shoulder,
        arm: req.body.items.categoriItem.arm,
        totalLength: req.body.items.categoriItem.totalLength,
        chest: req.body.items.categoriItem.chest,
      },
      {
        where: { ClothId: id },
      }
    );
  };

  static associate(db) {
    db.Top.belongsTo(db.Cloth);
  }
};
