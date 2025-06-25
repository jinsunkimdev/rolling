import express from "express";
import { listBackgroundImages } from "../controllers/bgImages.controller.js";

const router = express.Router();

// 기존 프로젝트 사용 api
// GET  /background-images         → 배경 이미지 조회
router.get("/", listBackgroundImages);

export default router;
