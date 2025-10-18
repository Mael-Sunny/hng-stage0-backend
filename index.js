import express from "express"
import axios from "axios";
import cors from "cors"

const app = express();
const port = 3000;


app.use(cors());

app.get("/me", async (req, res) => {
  try {
    const response = await axios.get("https://catfact.ninja/fact", {timeout: 5000 });
    const catFact = response.data.fact;
   
    const data = {
        status: "success",
        user: {
            email: "agentsmui@gmail.com",
            name: "Igboke Sunday",
            stack: "Node.js/Express"
        },
        timestamp: new Date().toISOString(),
        fact: catFact
    };

res.setHeader('Content-Type', 'application/json');
res.status(200).send(JSON.stringify(data, null, 2));


  } catch (error) {
    console.error("Failed to get Cat Fact:", error.message);
    res.status(200).json({
        status: "success",
        user: {
            email: "agentsmui@gmail.com",
            name: "Igboke Sunday M",
            stack: "Node.js/Express"
        },
        timestamp: new Date().toISOString(),
        fact: "Cats don't really have nine lives. Don't tell anyone. (External API failed tho)"
    });
  }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});