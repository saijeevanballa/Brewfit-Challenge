import { Router } from "express";
import { getNews } from "./module.js";
const router = Router();

router.get("/", async (req, res, next) => {
    try {
        res.status(200).send(await getNews(req.query.q));
    } catch (error) {
        next(error);
    }
});

export default router;