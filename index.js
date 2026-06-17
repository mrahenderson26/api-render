import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors({
    origin: "https://grand-custard-ed2051.netlify.app"
}));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    mensaje: "Probando con React Frontend en un servidor y Express en otro"
  });
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`);
});

