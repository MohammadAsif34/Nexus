import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({
    code: 200,
    status: "success",
    message: "Welcome to Nexus Server, Made with 💞 by Mohammad Asif.",
  });
});

app.listen(8800, (err) => {
  if (err) console.log(`Error:: ${err.message || "Server starting failed!"}`);
  else console.log(`Server running at http://localhost:8800/`);
});
