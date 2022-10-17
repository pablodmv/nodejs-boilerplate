const { Router } = require("express");
const { apiAlive, apiPing, apiSample } = require("../controller/apiController");

const router = Router();

router.get("/api/alive", apiAlive);

router.get("/api/sample", apiSample);

router.post("/api/ping", apiPing);

module.exports = router;
