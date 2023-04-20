const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Cloth extends Model {
  static init(sequelize) {
    return super.init(
      {
        productName: {
          type: DataTypes.STRING(100),
          allowNull: false,
          unigue: true,
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        price: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        color: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        categori: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        purchaseDay: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        preference: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
      },
      {
        // 유저 모델에 대한 셋팅
        modelName: "Cloth",
        tableName: "cloths",
        charset: "utf8",
        collate: "utf8_general_ci",
        sequelize,
      }
    );
  }

  static postClothbyReq = async (req) => {
    const result = await this.create({
      productName: req.body.items.productName,
      description: req.body.items.description,
      price: req.body.items.price,
      color: req.body.items.color,
      categori: req.body.items.categori,
      purchaseDay: req.body.items.purchaseDay,
      preference: req.body.items.preference,
      UserId: req.user.id,
    });
    return result;
  };

  static associate(db) {
    db.Cloth.belongsTo(db.User);
    db.Cloth.hasMany(db.Image, {
      onDelete: "cascade",
      hooks: true,
    });
    db.Cloth.hasOne(db.Outer, {
      onDelete: "cascade",
      hooks: true,
    });
    db.Cloth.hasOne(db.Shirt, {
      onDelete: "cascade",
      hooks: true,
    });
    db.Cloth.hasOne(db.Top, {
      onDelete: "cascade",
      hooks: true,
    });
    db.Cloth.hasOne(db.Pant, {
      onDelete: "cascade",
      hooks: true,
    });
    db.Cloth.hasOne(db.Shoe, {
      onDelete: "cascade",
      hooks: true,
    });
    db.Cloth.hasOne(db.Muffler, {
      onDelete: "cascade",
      hooks: true,
    });
  }
};
