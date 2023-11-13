const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Pug görünüm motorunu ayarla
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Statik dosyaları servis et
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRoute = require('./routes/index');
app.use('/', indexRoute);

app.listen(port, () => {
  console.log(`Uygulama http://localhost:${port} adresinde çalışıyor`);
});
