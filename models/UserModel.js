// import kebutuhan
import { Sequelize } from "sequelize";
import db from "../config/Database.js";

//definisikan tipe data
const { DataTypes } = Sequelize;

// definisikan tabel dan data apa yang mau diambil
const User = db.define(
  "users",
  {
    user_name: DataTypes.STRING,
    user_nohp: DataTypes.STRING,
    user_password: DataTypes.STRING,
    user_profile: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

// tampilkan datanya
export default User;

// kalau tidak ada data, maka buatkan data yang sudah ditentukan
(async () => {
  try {
    await User.sync({ alter: true });
    console.log("Alter table berhasil!");
  } catch (error) {
    console.error("Terjadi kesalahan saat melakukan alter table:", error);
  }
})();
