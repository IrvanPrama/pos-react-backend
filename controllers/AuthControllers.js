// controllers/authController.js
import User from "../models/UserModel.js";
import argon2 from "argon2";

export const login = async (req, res) => {
  const user = await User.findOne({
    where: {
      user_name: req.body.username,
    },
  });

  //1. Lengkapi logika if dibawah, kalau user tidak ada maka keluarkan status 404 error dan pesan "User tidak ditemukan"
  if (___) return res.status(___).json({ ___: "_____" });

  const match = await argon2.verify(user.user_password, req.body.password);

  // 2. Tuliskan logika if jika password tidak match, maka keluarkan status 400 error dan pesan "Password Salah"

  //!!! MENYIMPAN SESSION
  // req.session.sid = user.uuid;
  const sesi = req.session.sid;
  const uuid = user.uuid;
  const user_name = user.user_name;
  const role = user.role;
  res
    .status(200)
    .json({ sesi, uuid, user_name, role, message: "Login successful" });
};

export const Me = async (req, res) => {
  if (!req.session.sid) {
    return res.status(401).json({ msg: "Mohon login ke akun Anda!" });
  }
  const user = await User.findOne({
    attributes: ["user_name"],
    where: {
      user_name: req.session.sid,
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  res.status(200).json(user);
};

// Rute untuk logout
export const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ msg: "Tidak dapat logout" });
    res.status(200).json({ msg: "Anda telah logout" });
  });
};
