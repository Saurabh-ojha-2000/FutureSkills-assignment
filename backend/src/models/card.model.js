import { Schema, model } from "mongoose";

const cardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Card = model("Card", cardSchema);
export default Card;
