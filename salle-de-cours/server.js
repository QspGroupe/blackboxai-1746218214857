const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Sample data mapping matricule to classroom
const salleData = {
  "12345": "Salle A101",
  "67890": "Salle B202",
  "11223": "Salle C303",
  "44556": "Salle D404"
};

app.post('/api/salle', (req, res) => {
  const { matricule } = req.body;
  if (!matricule) {
    return res.status(400).json({ error: 'Matricule is required' });
  }
  const salle = salleData[matricule];
  if (salle) {
    return res.json({ salle });
  } else {
    return res.status(404).json({ error: 'Salle not found for this matricule' });
  }
});

app.listen(port, () => {
  console.log(`Salle de cours backend listening at http://localhost:${port}`);
});
