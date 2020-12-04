"use strict";
const { Model } = require("sequelize");
const crypto = require("crypto");
require("dotenv").config();
const secret = process.env.PJ_SECRET;

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      birth: DataTypes.DATEONLY,
      sex: DataTypes.STRING,
      type: DataTypes.STRING,
      promise: DataTypes.STRING,
      profile: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
      // 비밀번호를 저장하기 /전 해쉬함수로 복호화 불가한 문자열로 변경 후 저장
      hooks: {
        beforeCreate: (data, option) => {
          const shasum = crypto.createHmac("sha512", secret);
          shasum.update(data.password);
          data.password = shasum.digest("hex");
        },
        beforeUpdate: (data, option) => {
          const shasum = crypto.createHmac("sha512", secret);
          shasum.update(data.password);
          data.password = shasum.digest("hex");
        },
      },
    }
  );
  return user;
};
