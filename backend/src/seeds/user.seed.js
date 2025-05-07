import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    "email": "mahesh.babu@example.com",
    "fullName": "Mahesh Babu",
    "password": "123456",
    "profilePic": "https://i.pinimg.com/originals/88/e8/38/88e838a5b09ff4cd8a9c8dfc0ba5f690.jpg"
  },
  {
    "email": "prabhas@example.com",
    "fullName": "Prabhas",
    "password": "123456",
    "profilePic": "https://image.tmdb.org/t/p/original/6naZ3oybdCtfggc5pTrcBDxOXrP.jpg"
  },
  {
    "email": "alluarjun@example.com",
    "fullName": "Allu Arjun",
    "password": "123456",
    "profilePic": "https://i.pinimg.com/736x/3c/08/43/3c0843a5f9a2e4d1bfb30a76444253e9.jpg"
  },
  {
    "email": "jr.ntr@example.com",
    "fullName": "Jr. NTR",
    "password": "123456",
    "profilePic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWXdFQA1gnlMv7UusbEYuth4ySozE5AatIXw&s"
  },
  {
    "email": "ram.charan@example.com",
    "fullName": "Ram Charan",
    "password": "123456",
    "profilePic": "https://upload.wikimedia.org/wikipedia/commons/0/00/Ram_Charan_2024_%28cropped%29.jpg"
  },
  {
    "email": "vijay.devarakonda@example.com",
    "fullName": "Vijay Deverakonda",
    "password": "123456",
    "profilePic": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Vijay_Deverakonda_at_NOTA_pressmeet_%28cropped%29.jpg"
  },
  {
    "email": "naga.chaitanya@example.com",
    "fullName": "Naga Chaitanya",
    "password": "123456",
    "profilePic": "https://i.pinimg.com/736x/f2/19/cd/f219cda2be2909ebc12bb8b06d288c52.jpg"
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();