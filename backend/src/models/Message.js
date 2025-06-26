import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    // 메시지 고유 ID
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    // 대상 수신자 ID
    recipientId: {
      type: Number,
      required: true,
      index: true,
    },
    // 발신자 이름
    sender: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 40,
    },
    // 발신자 프로필 이미지 URL
    profileImageURL: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 300,
    },
    // 관계 (친구, 지인, 동료, 가족)
    relationship: {
      type: String,
      required: true,
      enum: ["친구", "지인", "동료", "가족"],
    },
    // 메시지 내용
    content: {
      type: String,
      required: true,
      minlength: 1,
    },
    // 글꼴
    font: {
      type: String,
      required: true,
      enum: ["Noto Sans", "Pretendard", "나눔명조", "나눔손글씨 손편지체"],
    },
  },
  { timestamps: true }
);

// 읽기 전용(createdAt)은 timestamps로 자동 관리
// 추가적인 computed virtual 필드 필요 시 아래처럼 정의 가능
// example: messageSchema.virtual('shortContent').get(function() {
//   return this.content.length > 50
//     ? this.content.slice(0, 47) + '...'
//     : this.content;
// });

const Message = mongoose.model("Message", messageSchema);

export default Message;
