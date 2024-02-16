import { Sequelize } from "sequelize";
import db from "../config/Database.js";
const { DataTypes } = Sequelize;

const User = db.define(
  "users",
  {
    //1. menambahkan uuid
    //2. menambahkan role
    user_name: DataTypes.STRING,
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    user_profile: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default User;

// kalau tidak ada data, maka buatkan data yang sudah ditentukan
// (async () => {
//   try {
//     await User.sync({ alter: true });
//     console.log("Alter table berhasil!");
//   } catch (error) {
//     console.error("Terjadi kesalahan saat melakukan alter table:", error);
//   }
// })();
