const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000; // Port numarasını isteğe bağlı olarak değiştirebilirsiniz.

// MongoDB'ye bağlanma işlemi
mongoose.connect('mongodb://localhost/emlak-projesi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB bağlantısı başarılı.');
  })
  .catch((error) => {
    console.error('MongoDB bağlantısı başarısız: ' + error);
  });

// Express ortamını ayarlama
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API endpoint'lerini burada tanımlayabilirsiniz.

// Sunucuyu başlatma
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
