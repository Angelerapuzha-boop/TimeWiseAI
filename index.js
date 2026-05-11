const express = require('express');
const cors = require('cors');
const scheduleRoute = require('./routes/schedule');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'TimeWise AI Backend' });
});

app.use('/api/schedule', scheduleRoute);

app.listen(port, () => {
  console.log(`TimeWise AI backend listening on http://localhost:${port}`);
});
