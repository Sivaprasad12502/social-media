import { db } from "../connect.js";
import jwt from "jsonwebtoken";
export const getRealtionships = (req, res) => {
  const q = "SELECT followersUserId FROM relationships WHERE followeredUserId=?";

  db.query(q, [req.query.followeredUserId], (err, data) => {
    if (err) {
      console.error("❌ MySQL Error adding comemnt:", err.message || err);
      return res.status(500).json(err);
    }
    return res.status(200).json(data.map((realtionship) => realtionship.followersUserId));
  });
};
export const addRealtionships = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in");
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q = "INSERT INTO relationships (`followersUserId`,`followeredUserId`) VALUES (?)";

    const values = [userInfo.id, req.body.userId];

    db.query(q, [values], (err, data) => {
      if (err) {
        console.error("❌ MySQL Error:", err.message || err);
        return res.status(500).json(err);
      }
      return res.status(200).json("Following");
    });
  });
};
export const deleteRealtionships = (req, res) => {
  console.log("works")
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in");
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q = "DELETE FROM relationships WHERE `followersUserId` = ? AND `followeredUserId` =?";

    db.query(q, [userInfo.id,req.query.userId], (err, data) => {
      if (err) {
        console.error("❌ MySQL Error:", err.message || err);
        return res.status(500).json(err);
      }
      return res.status(200).json("UNFOLLOW");
    });
  });
};
