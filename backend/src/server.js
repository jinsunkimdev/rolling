import express from "express";
import "dotenv/config";

import recipientsRouter from "./routes/recipients.route.js";
import messagesRoutes from "./routes/messages.route.js";
import bgImagesRoutes from "./routes/bgImages.route.js";
import profileImagesRoutes from "./routes/profileImages.route.js";

const app = express();
const PORT = process.env.PORT;

// 모든 API는 /api 아래로 네임스페이스
app.use("/api/recipients", recipientsRouter);
app.use("/api/messages", messagesRoutes);
app.use("/api/background-images", bgImagesRoutes);
app.use("/api/profile-images", profileImagesRoutes);

// health check
app.get("/", (req, res) => {
  res.send("Hello Home Route");
});

app.listen(PORT, () => console.log(`✅ Server is running on port ${PORT}`));
