const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/lang/:lang.json', (req, res) => {
  const lang = req.params.lang;
  res.sendFile(path.join(__dirname, `../lang/${lang}.json`));
});

app.post('/api/login', (req, res) => {
  const { phone, password } = req.body;
  if (phone === "998901234567" && password === "1234") {
    res.json({ success: true, token: "abc123" });
  } else {
    res.status(401).json({ success: false, message: "Noto‘g‘ri ma’lumot" });
  }
});

app.listen(port, () => {
  console.log(`✅ Server ishga tushdi: http://localhost:${port}`);
});