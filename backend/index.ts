import express from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import cors from "cors";

const app = express();
const port = 8080;
const StripeKey = process.env.STRIPEKEY;
const stripe = require("stripe")(StripeKey);

const tokenSecret = process.env.TOKEN_SECRET as string;
const firebaseConfig = process.env.FIREBASECONFIG as string;
let refreshToken: string | null = null;

app.use(cors());
app.use(express.json());

app.post("/api/checkout", async (req, res) => {
  const items: { priceId: string; quantity: number }[] = req.body.items;

  let lineItems: { price: string; quantity: number }[] = [];

  items.forEach((item) => {
    lineItems.push({
      price: item.priceId,
      quantity: item.quantity,
    });
  });

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000/Success",
      cancel_url: "http://localhost:3000/Cancel",
      shipping_address_collection: {
        allowed_countries: ["PL"],
      },
      phone_number_collection: {
        enabled: true,
      },
    });

    res.json({
      url: session.url,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create session" });
  }
});

app.get("/", (req, res) => {
  res.send(`Hello World - simple api with JWT!`);
});
app.post("/apikey", function (req, res) {
  if (req.body.pass === "passapikey")
    res.status(200).send(JSON.parse(firebaseConfig));
  else res.status(400).send("wrong api password");
});
app.post("/token", function (req, res) {
  const expTime = req.body.exp || 60;
  const token = generateToken(+expTime);
  refreshToken = generateToken(60 * 60);
  res.status(200).send({ token, refreshToken });
});
app.post("/refreshToken", function (req, res) {
  const refreshTokenFromPost = req.body.refreshToken;

  if (refreshToken !== refreshTokenFromPost) {
    res.status(400).send("Bad refresh token!");
    return;
  }

  const expTime = req.headers.exp || 60;
  const token = generateToken(+expTime);
  refreshToken = generateToken(60 * 60);
  res.status(200).send({ token, refreshToken });
});
app.get("/protected/:id/:delay?", verifyToken, (req, res) => {
  const id = req.params.id;
  const delay = req.params.delay ? +req.params.delay : 1000;
  setTimeout(() => {
    res.status(200).send(`{"message": "protected endpoint ${id}"}`);
  }, delay);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function generateToken(expirationInSeconds: number) {
  const exp = Math.floor(Date.now() / 1000) + expirationInSeconds;
  const token = jwt.sign({ exp, foo: "bar" }, tokenSecret, {
    algorithm: "HS256",
  });
  return token;
}

function verifyToken(req: any, res: any, next: any) {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  if (!token) return res.sendStatus(403);

  jwt.verify(token, tokenSecret, (err: any, user: any) => {
    if (err) {
      console.log(err);
      return res.status(401).send(err.message);
    }
    req.user = user;
    next();
  });
}
