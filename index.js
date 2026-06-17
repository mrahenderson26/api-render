import express from "express";
import cors from "cors"
const app = express();

app.use(express.json());
app.use(cors({
    origin: "https://api-render-vvdo.onrender.com/"
}));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json("Probando con React");
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`);
});

