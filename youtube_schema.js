const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: String,
  username: String,
  birthdate: Date,
  gener: { type: String, enum: ["Hombre", "Mujer"] },
  county: String,
  postal_code: String,
  channel: [{ type: Schema.Types.ObjectId, ref: "Channel" }],
  suscriptions: [{ type: Schema.Types.ObjectId, ref: "Channel" }],
  likes: [{ type: Schema.Types.ObjectId, ref: "Video" }],
  dislikes: [{ type: Schema.Types.ObjectId, ref: "Video" }],
  playlists: [{ type: Schema.Types.ObjectId, ref: "Playlist" }],
});

const videoSchema = new Schema({
  title: String,
  description: String,
  size: Number,
  videoFileName: String,
  duration: Number,
  thumbnail: String,
  viewsCount: Number,
  numLikes: { type: Number, default: 0 },
  numDislikes: { type: Number, default: 0 },
  status: { type: String, enum: ["publico", "oculto", "privado"] },
  tags: [String],
  user: { type: Schema.Types.ObjectId, ref: "User" },
  datePublication: Date,
  likes: [
    {
      user: { type: Schema.Types.ObjectId, ref: "User" },
      date: Date,
    },
  ],
  dislikes: [
    {
      user: { type: Schema.Types.ObjectId, ref: "User" },
      date: Date,
    },
  ],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

const channelSchema = new Schema({
  name: String,
  description: String,
  creationDate: Date,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const playlistSchema = new Schema({
  name: String,
  creationDate: Date,
  status: { type: String, enum: ["publica", "privada"] },
  videos: [{ type: Schema.Types.ObjectId, ref: "Video" }],
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const commentSchema = new Schema({
  comment: String,
  datePulication: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  video: { type: Schema.Types.ObjectId, ref: "Video" },
});

const User = mongoose.model("User", userSchema);
const Video = mongoose.model("Video", videoSchema);
const Channel = mongoose.model("Channel", channelSchema);
const Playlist = mongoose.model("Playlist", playlistSchema);
const Comment = mongoose.model("Comment", commentSchema);
