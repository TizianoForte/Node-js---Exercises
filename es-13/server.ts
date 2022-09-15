import express from "express";
import "express-async-errors";


const app = express();

app.get("/", (request, response) => {
    response.send("Il server è stato avviato!")
});

const port = 3030;

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})

//prisma mi da errore non riesce ad effettuare la migrazione non capisco come risolverlo.