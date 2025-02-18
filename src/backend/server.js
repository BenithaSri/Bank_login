import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const app = express();
const port = 3000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from the frontend
  credentials: true,
}));
app.use(express.json()); // Parse JSON requests

// MongoDB Connection
const uri = 'mongodb+srv://panchagirib:Bank123@cluster1.c3c5y.mongodb.net/bankUsers?retryWrites=true&w=majority&appName=Cluster1';

mongoose.connect(uri, { dbName: 'bankUsers' })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.error("MongoDB Connection Error:", err));

// User Schema
const userSchema = new mongoose.Schema({
  cid: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// const resetToken = jwt.sign({ id: user._id }, "secretKey", { expiresIn: "15m" });
// const resetLink = `http://localhost:3000/resetpassword?token=${resetToken}`;


const User = mongoose.model('User', userSchema);

// Root Route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Signup Route
app.post('/signup', async (req, res) => {
  try {
    const { cid, email, password, confirmPassword } = req.body;

    // Validation
    if (!cid || !email || !password || !confirmPassword) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    // Check if email number already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'EmailID is already registered' });
    }

    //Password Hashing
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create new user
    const newUser = new User({ cid, email, password : hashedPassword });;
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//Login Route
app.post('/login', async (req, res) => {
  console.log("Login API called!");
  try {
    const { cid, password } = req.body;
    console.log("Received Data:", req.body);

    // Validation: Check if both fields are provided
    if (!cid || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Find user by CID
    const user = await User.findOne({ cid });

    if (!user) {
      return res.status(400).json({ error: "User not found!" });
    }

    // Debugging: Check if the user object is retrieved
    console.log("User found:", user);

    // Compare password with stored hashed password
    const match = await bcrypt.compare(password, user.password);

    // Debugging: Check if bcrypt comparison is working
    console.log("Password match result:", match);

    if (!match) {
      return res.status(400).json({ error: "Incorrect password. Please try again." });
    }

    // Success response
    return res.status(200).json({ message: "Login successful!" });

  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});



app.delete('/delete/:cid', async (req, res) => {
  try {
    const { cid } = req.params;

    console.log("Delete Request Received for CID:", cid);

    // Ensure we're deleting the correct type (number or string)
    const deleteUser = await User.findOneAndDelete({ cid: Number(cid) });

    if (!deleteUser) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User Deleted Successfully:", deleteUser);
    res.status(200).json({ message: "User deleted successfully!" });

  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ error: "Deletion Failed" });
  }
});



app.put('/update/:cid', async (req, res) => {
  try {
    const { cid } = req.params;
    const updateData = req.body; // Assuming you pass the data to update in the body

    // Convert to ObjectId if needed
    const updatedUser = await User.findOneAndUpdate({ cid }, updateData, { new: true });


    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: 'Updated successfully', updatedUser });
  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


//Forgot Password
app.post("/forgotpassword", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
    res.status(200).json({ message: "API is working!" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});