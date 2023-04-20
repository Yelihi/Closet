const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        email: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unigue: true,
        },
        nickname: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        src: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        snsId: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        provider: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        // 유저 모델에 대한 셋팅
        modelName: "User",
        tableName: "users",
        charset: "utf8",
        collate: "utf8_general_ci",
        sequelize,
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Cloth);
  }
};
