import express from "express";
import { listProfileImages } from "../controllers/profileImages.controller.js";

const router = express.Router();

// 기존 프로젝트 사용 api
// GET  /profile-images         → 프로필 이미지 조회
router.get("/", listProfileImages);

export default router;
