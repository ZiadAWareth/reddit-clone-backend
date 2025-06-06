const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");
const { create } = require("./user");

const Schema = mongoose.Schema;
const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  createdAt: {
    type: Date,
    required: false,
    default: Date.now,
  },
  subReddit: {
    type: Schema.Types.ObjectId,
    ref: "subReddit",
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: false,
  },
  images: [
    {
      type: Schema.Types.ObjectId,
      ref: "userUploads",
      required: false,
    },
  ],
  approved: {
    type: Boolean,
    required: false,
    default: false,
  },
  approvedBy: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: false,
  },
  approvedAt: {
    type: Date,
    required: false,
  },
  disapproved: {
    type: Boolean,
    required: false,
    default: false,
  },
  disapprovedBy: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: false,
  },
  disapprovedAt: {
    type: Date,
    required: false,
  },
  videos: [
    {
      type: Schema.Types.ObjectId,
      ref: "userUploads",
      required: false,
    },
  ],
  url: {
    type: String,
    required: false,
  },
  poll: {
    options: [
      {
        option: {
          type: String,
          required: true,
        },
        voters: [
          {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "user",
          },
        ],
      },
    ],
    votingLength: {
      type: Number,
      required: false,
      default: 0,
    },
    startTime: {
      type: Date,
      required: false,
    },
    endTime: {
      type: Date,
      required: false,
    },
  },
  type: {
    type: String,
    required: true,
  },
  isNSFW: {
    type: Boolean,
    required: true,
    default: false,
  },
  isSpoiler: {
    type: Boolean,
    required: true,
    default: false,
  },
  isLocked: {
    type: Boolean,
    required: true,
    default: false,
  },
  upvotes: {
    type: Number,
    required: true,
    default: 0,
  },
  downvotes: {
    type: Number,
    required: true,
    default: 0,
  },
  upvotedUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  ],
  downvotedUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  ],
  views: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
  },
  commentCount: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
  },
  spamCount: {
    type: Number,
    required: true,
    default: 0,
  },
  spammedBy: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "user",
    },
  ],
  comments: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "comment",
    },
  ],
  isScheduled: {
    type: Boolean,
    required: false,
    default: false,
  },
  scheduledMinutes: {
    type: Number,
    required: false,
  },
  // scheduledDate: {
  //   type: Date,
  //   required: false,
  // },
  // scheduledTime: {
  //   type: Date,
  //   required: false,
  // },
  isEdited: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("post", postSchema);
