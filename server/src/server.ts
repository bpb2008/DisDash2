import express from "express";
import dotenv from "dotenv"; 
import cors from "cors"; 
// import router from "./routes/index";
// import { checkJwt } from "./middleware/auth";

dotenv.config(); 

const app = express(); 
app.use(express.json()); 
const port = process.env.PORT;



app.use(
  cors({
    origin: process.env.URL || "http://localhost:5173", 
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
  })
); 

//Auth0 JWT Middleware

// app.use("/api/users", checkJwt);

//API Routes

app.get('/', (req, res) => {
  res.send('Travel Planner API');
});

// app.use("/api", router);


//Start the server 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`); 
});