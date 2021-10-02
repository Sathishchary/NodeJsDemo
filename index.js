import express from 'express';

import userRoutes from './routes/user.js';

const app = express();
const PORT = 5000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, ()=>console.log('Server on 5000 '));

app.use('/user', userRoutes);

app.get('/', (req, res)=> res.send('hello from sathish'));