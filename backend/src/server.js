import express from "express";
import "dotenv/config";

import recipientsRouter from "./routes/recipients.route.js";
import messagesRoutes from "./routes/messages.route.js";
import bgImagesRoutes from "./routes/bgImages.route.js";
import profileImagesRoutes from "./routes/profileImages.route.js";
import { connectDB } from "./lib/db.js";

// express 객체 생성
const app = express();

// 포트 넘버
const PORT = process.env.PORT;

// JSON 미들웨어 추가
app.use(express.json());

// 라우터 - 모든 API는 /api 아래로 네임스페이스
app.use("/api/recipients", recipientsRouter);
app.use("/api/messages", messagesRoutes);
app.use("/api/background-images", bgImagesRoutes);
app.use("/api/profile-images", profileImagesRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
  connectDB();
});
