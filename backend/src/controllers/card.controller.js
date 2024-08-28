import Card from "../models/card.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getCardsHandler = asyncHandler(async (req, res) => {
  const cards = await Card.find();

  if (cards.length == 0) {
    throw new ApiError(404, "cards not found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, { cards }, "Cards fetched successfully"));
});

export const getCardByIdHandler = asyncHandler(async (req, res) => {
  const { query } = req.query;
  if (!query) {
    throw new ApiError(404, "Search query is required");
  }
  const cards = await Card.find();
  const filteredCards = cards?.filter((card) =>
    card.title.toLowerCase().includes(query.toLowerCase())
  );

  if (!filteredCards) {
    throw new ApiError(404, "No cards found :");
  }

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { cards: filteredCards },
        "Card fetched successfully"
      )
    );
});

export const createCardHandler = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    throw new ApiError(400, "title and description are required");
  }
  const newCard = await Card.create({ title, description });

  res
    .status(201)
    .json(new ApiResponse(201, { card: newCard }, "Card created successfully"));
});
