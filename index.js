import express from "express";
import cors from "cors"
const app = express();

app.use(express.json());
app.use(cors({
    origin: "https://mi-app.netlify.app"
}));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json("Probando con React otra vez");
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`);
});



