import mongoose from "mongoose";

const reactionSchema = new mongoose.Schema(
  {
    emoji: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 30,
    },
    count: {
      type: Number,
      required: true,
      default: 0,
      min: -2147483648,
      max: 2147483647,
    },
    recipientId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Recipient",
    },
  },
  { timestamps: true }
);

// ReactionRetrieve 에 맞게 virtual로 id 추가 (readOnly)
reactionSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

reactionSchema.set("toJSON", { virtuals: true });
reactionSchema.set("toObject", { virtuals: true });

const Reaction = mongoose.model("Reaction", reactionSchema);

export default Reaction;
