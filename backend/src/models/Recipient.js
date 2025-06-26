import mongoose from "mongoose";

const recipientSchema = new mongoose.Schema(
  {
    // 수신자 이름
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 40,
    },
    // 배경색
    backgroundColor: {
      type: String,
      required: true,
      enum: ["beige", "purple", "blue", "green"],
    },
    // 배경 이미지 URL (선택적)
    backgroundImageURL: {
      type: String,
      minlength: 1,
      maxlength: 300,
      default: null,
    },
  },
  { timestamps: true }
);

// virtual로 id 추가 (응답 JSON에 id로 쉽게 접근)
recipientSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

// 읽기 전용(computed) 필드는 virtual로 정의
recipientSchema.virtual("messageCount").get(function () {
  return this._messageCount;
});
recipientSchema.virtual("recentMessages").get(function () {
  return this._recentMessages;
});
recipientSchema.virtual("reactionCount").get(function () {
  return this._reactionCount;
});
recipientSchema.virtual("topReactions").get(function () {
  return this._topReactions;
});

const Recipient = mongoose.model("Recipient", recipientSchema);

export default Recipient;
