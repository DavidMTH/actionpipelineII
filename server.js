// importiert Express module -> const name = nameframework
const express = require("express");
const PORT =process.env.PORT || 5500;

let app = express();

// alle Dateien, die im Ordner "frontend" enthalten sind werden an den User
// 'ohne Weiterverarbeitung' weitergeleitet
app.use(express.static('frontend'));

// bei Serverstart wird eine Meldung auf der Konsole ausgegeben
app.listen(PORT, () => {
    console.log('Server startet auf Port', PORT);
    });
