import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors({
    origin: "https://astonishing-mochi-ca35ba.netlify.app"
}));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    mensaje: "Probando con React en Netlify y Express en Render"
  });
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`);
});

