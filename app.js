// const http = require('http');
// const EventEmitter = require('events');
// const myEmitter = new EventEmitter();

// myEmitter.on('update', () => console.log('កំពុងបច្ចុប្បន្នភាពទី ១...'));
// myEmitter.on('update', () => console.log('កំពុងបច្ចុប្បន្នភាពទី ២...'));

// // បញ្ជាឱ្យដំណើរការ (វានឹងបង្ហាញសារទាំង ២)
// myEmitter.emit('update');

// // លុប Listener ទាំងអស់ដែលពាក់ព័ន្ធនឹង 'update'
// myEmitter.removeAllListeners('update');
// myEmitter.on('login', () => console.log('User logged in'));
// myEmitter.on('logout', () => console.log('User logged out'));
// myEmitter.on('error', () => console.log('An error occurred'));

// // ឥឡូវ login និង logout ត្រូវបានលុប ប៉ុន្តែ Event ផ្សេងទៀត (បើមាន) នៅរក្សាដដែល
// myEmitter.removeAllListeners(['login', 'logout']);

// // លុបគ្រប់ Listener ទាំងអស់ចេញពីគ្រប់ Event (update, login, logout, error នឹងត្រូវលុបទាំងអស់)
// myEmitter.removeAllListeners();

// // បញ្ជាឱ្យដំណើរការម្ដងទៀត (នឹងស្ងាត់ជ្រងំ)
// myEmitter.emit('update');

// console.log(myEmitter.listenerCount('update')); // បង្ហាញ 0 ព្រោះ Listener ទាំងអស់ត្រូវបានលុប
// console.log(myEmitter.eventNames()); // បង្ហាញ [] ព្រោះគ្មាន Event ណាមួយនៅឡើយទេ

// const server = http.createServer((req, res) => {
//     if (req.method === 'GET' && req.url === '/') {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Hello, This is the Home Page');
//     function calculateAverage(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum = add(sum, numbers[i]);
//     }
//     // កំហុស៖ គួរតែចែកនឹង numbers.length
//     return sum / 2; // បង្កប់កំហុសនៅទីនេះ
// }

// const scores = [80, 90, 100];
// const average = calculateAverage(scores);
// console.log(`The average score is: ${average}`);

//     } else if (req.method === 'GET' && req.url === '/about') {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('This is the About Page');
//     } else if (req.method === 'GET' && req.url === '/form') {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/html');
//         res.end(`<form action="/submit" method="post">
//     <input type="text" name="txtValue1" id="txtValue1"> <br><br>
//     <input type="text" name="txtValue2" id="txtValue2"> <br><br>
//     <input type="submit" value="Submit" name="btnSubmit">
// </form>`);
//     }else if (req.method === 'POST' && req.url === '/submit') {
//         let body = '';
//         req.on('data', (chunk) => {
//             body += chunk; 
//         });
//         req.on('end', () => {
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'text/plain');
//             res.end(body);
//         });
//     } else {
//         res.statusCode = 404;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('404: ទំព័រមិនត្រូវបានរកឃើញ');
//     }
//     function add(a, b) {
//     return a + b;
// }


// });



// server.listen(3000, () => {
//     console.log('Server កំពុងដំណើរការនៅ port 3000');
// });

const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//     res.send('សួស្តីពី ExpressJS!');
// });

// app.get('/about', (req, res) => {
//     res.send('This is the About page');
// });

// app.get('/register', (req, res) => {
//     res.send(`
//         <form action="/submit" method="post">
//             <input type="submit" name="buttonSubmit" value="submit"> 
//         </form>
//     `);
// });

// app.post('/submit', (req, res) => {
//     res.send('Your data has been inserted successfully.');
// });

// app.listen(port, () => {
//     console.log(`កម្មវិធីកំពុងដំណើរការនៅ http://localhost:${port}`);
// });



// Dynamic route ជាមួយ parameter
// app.get('/user/:id/:name', (req, res) => {
//     const userId = req.params.id;
//     const userName = req.params.name;
//     res.send(`អ្នកប្រើប្រាស់លេខសម្គាល់: ${userId}។​ ឈ្មោះ៖ ${userName}`);
// });

app.get('/search', (req, res) => {
    const query = req.query.q || 'គ្មានសំណួរ';
    const name = req.query.name || 'no name';
    res.send(`លទ្ធផលស្វែងរក: ${query}. Your name: ${ name }`);
});

app.listen(port, () => {
    console.log(`Server កំពុងដំណើរការនៅ http://localhost:${port}`);
});