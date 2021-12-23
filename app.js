import "./common/dorenv.js";
import Express from 'express';
import "./common/db-connection.js";
import newApi from "./news/router.js";

const app = Express();

app.get("/status", (req, res) => {
    res.status(200).send("OK");
})

// Routes for the APIs
app.use("/api/news", newApi);

app.use(Express.json());

export default app;