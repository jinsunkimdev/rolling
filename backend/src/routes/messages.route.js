import express from "express";
import {
  deleteMessageById,
  getMessageById,
  replaceMessageById,
  updateMessageById,
} from "../controllers/messages.controller.js";

const router = express.Router();

// 기존 프로젝트 사용 api
// GET  /api/messages/{id}        → ID로 메세지 조회
router.get("/:id", getMessageById);

// 기존 프로젝트 사용 api
// PUT  /api/messages/{id}        → ID로 메시지 전체 교체 (replace)
router.put("/:id", replaceMessageById);

// 기존 프로젝트 사용 api
// PATCH  /api/messages/{id}      → ID로 메시지 일부 수정 (update)
router.patch("/:id", updateMessageById);

// 기존 프로젝트 사용 api
// DELETE  /api/messages/{id}     →  ID로 메시지 삭제
router.delete("/:id", deleteMessageById);

export default router;
