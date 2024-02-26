import express from "express";
import "dotenv/config";
import { DefaultService } from "../spec/lib/generated/services/DefaultService";

const app = express();
const port = process.env.PORT;

app.get("/", async (_, res) => {
  const clientId = process.env.PLAID_CLIENT_ID;
  const sandboxKey = process.env.SANDBOX_KEY;
  if (!clientId || !sandboxKey) return res.send("Missing Plaid credentials, be sure to create the .env file");

  try {
    const plaidRes = await DefaultService.postInstitutionsSearch({
      client_id: clientId,
      secret: sandboxKey,
      query: "chase",
      country_codes: ["US"],
    });

    if (plaidRes.institutions?.length) console.log(plaidRes.institutions[0].products);
    res.send(plaidRes);
  } catch (e) {
    res.send(e);
  }
});

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
});
