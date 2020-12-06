import dotenv from "dotenv";
dotenv.config();

export default {
  secret: process.env.SECRET || "",
};
