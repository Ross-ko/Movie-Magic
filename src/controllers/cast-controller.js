import { Router } from "express";

const castController = Router();

castController.get('/create', async (req, res) => {
    res.render('cast/create')
});

export default castController;