// import User from "../models/UserModel.js";

//1. verfyUser

export const adminOnly = async (req, res, next) => {
  const user = await ______({
    // cari 1 user gunakan salah satu fungsi axios lengkapi garis panjang diatas....
    //fungsi where
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  if (user.role !== "admin")
    return res.status(403).json({ msg: "Akses terlarang" });
  next();
};
