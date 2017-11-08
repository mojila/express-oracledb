const app = require('../app');

//app.listen(3000, () => {
//  console.log('Dijalankan pada port: 3000');
//});

app.listen(3000, '192.168.43.139', () => {
  console.log('Dijalankan pada 192.168.43.139:3000');
});