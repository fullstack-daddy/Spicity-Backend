import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const AddShopperVideoCourseSchema = new mongoose.Schema({
  shopperCourseId: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  courseTitle: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  courseOrder: {
    type: Number,
    required: true,
  },
  coursePrice: {
    type: String,
    required: true,
    trim: true,
  },
  videoLink: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  assignmentQuestion1: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  assignmentQuestion2: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  assignmentQuestion3: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  tablature: {
    type: Buffer,
    required: false,
  },
  videoThumbnail: {
    type: Buffer,
    required: false,
  },
  audio: {
    type: Buffer,
    required: false,
  },
  loop: {
    type: Buffer,
    required: false,
  },
  adminId: {
    type: String,
    required: true,
  },
  enrolledStudents: {
    type: Array,
    default: [],
    required: false,
    },
});

export default mongoose.model("Spicy_Shopper_Course", AddShopperVideoCourseSchema);
