// pages/api/products.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch("https://dummyjson.com/products"); 
    const data = await response.json();
    res.status(200).json(data);
  } 
  catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
