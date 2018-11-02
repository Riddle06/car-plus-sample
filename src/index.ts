import * as express from "express";

const app = express();

const port = 8080;

app.get('/', (req, res, next) => {
    res.json({
        queryString: req.query
    })
})

app.listen(port, () => {
    console.log(`server start on port: ${port}`);
})