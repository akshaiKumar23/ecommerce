const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");
app.use(cors());
const users = [
  { username: "akshai", password: "12345" },
  { username: "adi", password: "67890" },
];
const PORT = 5000;

app.use(express.json());
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  const token = jwt.sign({ username: user.username }, "mySecretKey");
  res.status(200).json({ success: true, username, token });
});

app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
