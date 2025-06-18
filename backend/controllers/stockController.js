const axios = require("axios");

const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;

exports.getStockQuote = async (req, res) => {
  const symbol = req.params.symbol;

  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote`, {
      params: {
        symbol,
        token: FINNHUB_API_KEY
      },
    });

    const data = response.data;

    res.json({
      symbol,
      current: data.c,
      high: data.h,
      low: data.l,
      open: data.o,
      prevClose: data.pc
    });
  } catch (err) {
    console.error("Error fetching stock data:", err.message);
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
};
