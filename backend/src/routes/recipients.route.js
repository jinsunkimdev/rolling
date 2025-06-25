import express from "express";
import {
  createRecipient,
  createRecipientMessage,
  createRecipientReaction,
  deleteRecipientById,
  getRecipientById,
  listRecipientMessages,
  listRecipientReactions,
  listRecipients,
} from "../controllers/recipients.controller.js";

const router = express.Router();

// GET /api/recipients         → 전체 수신자 조회
router.get("/", listRecipients);

// POST /api/recipients        → 새 수신자 생성
router.post("/", createRecipient);

// GET /api/recipients/:id     → ID로 수신자 조회
router.get("/:id", getRecipientById);

// DELETE /api/recipients/:id  → ID로 수신자 삭제
router.delete("/:id", deleteRecipientById);

// GET /api/:recipientId/messages → 수신자 ID로 messages 조회
router.get("/:recipientId/messages", listRecipientMessages);

// POST /api/:recipientId/messages → 수신자 ID로 새 messages 생성
router.post("/:recipientId/messages", createRecipientMessage);

// GET /api/:recipientId/reactions → 수신자 ID로 반응들 조회
router.get("/:recipientId/reactions", listRecipientReactions);

// POST /api/:recipientId/reactions → 수신자 ID로 반응들 생성
router.post("/:recipientId/reactions", createRecipientReaction);

export default router;
