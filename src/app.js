import express from 'express';
import path from 'path';
import { promises as fsPromises } from 'fs';
import bodyParser from 'body-parser';
import fs from 'fs/promises';
import mediaRouter from './routes/media-router.mjs';
const hostname = '127.0.0.1';
const app = express();
const port = 3000;

//for users
const jsonFilePathUser = path.join('user', 'users.json');
const userData = await fsPromises.readFile(jsonFilePathUser, 'utf-8');
const userJsonData = JSON.parse(userData);

app.set('views', 'src/views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'You',
        message: 'made it to front page'
    });
});

app.use(express.json());
// Get all media item & Post media items
app.use('/media', mediaRouter)

//Get one media item by ID
app.use('/media/:id', mediaRouter)

// inja fix nashoda!
app.delete('/media/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const existingData = await fs.readFile(jsonFilePath, 'utf-8');
    const jsonData = JSON.parse(existingData);

    const indexToUpdate = jsonData.findIndex(item => item.media_id === id);

    if (indexToUpdate !== -1) {
        
        jsonData.splice(indexToUpdate,1)

        // Write the updated data back to the file
        await fs.writeFile(jsonFilePath, JSON.stringify(jsonData, null, 2), 'utf-8');
    }
    console.log(jsonData);
});
//users
app.get('/user', async (req, res) => {
    try {
        res.json(userJsonData);
    } catch (error) {
        console.error('Error reading JSON file:', error);
        res.status(500).send('Internal Server Error');
    }
});
//Get one user item by ID
app.get('/user/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    userJsonData.forEach(item => {
        if (item.user_id === id){
            res.json(item)
        }
    });
});
app.post('/user', (req, res) => {
    const reqData = req.body;
    // Do something with the data (e.g., save to a database)
    console.log('Received POST data:', reqData);
    userJsonData.push(reqData);
    console.log(userJsonData);

    // Write the updated data back to the file
    fs.writeFile(jsonFilePathUser, JSON.stringify(userJsonData, null, 2), 'utf-8');

});
app.put('/user/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const reqData = req.body;
    const existingData = await fs.readFile(jsonFilePathUser, 'utf-8');
    const userJsonData = JSON.parse(existingData);

    const indexToUpdate = userJsonData.findIndex(item => item.user_id === id);

    if (indexToUpdate !== -1) {
        
        const itemToUpdate = userJsonData[indexToUpdate];
        itemToUpdate.user_id = reqData.user_id || itemToUpdate.user_id;
        itemToUpdate.username = reqData.username || itemToUpdate.username;
        itemToUpdate.password = reqData.password|| itemToUpdate.password;
        itemToUpdate.email = reqData.email || itemToUpdate.email;
        itemToUpdate.user_level_id = reqData.user_level_id || itemToUpdate.user_level_id;
        itemToUpdate.created_at = reqData.created_at || itemToUpdate.created_at;
        // Write the updated data back to the file
        await fs.writeFile(jsonFilePathUser, JSON.stringify(userJsonData, null, 2), 'utf-8');
    };
});
app.delete('/user/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const existingData = await fs.readFile(jsonFilePathUser, 'utf-8');
    const userJsonData = JSON.parse(existingData);

    const indexToUpdate = userJsonData.findIndex(item => item.user_id === id);

    if (indexToUpdate !== -1) {
        
        userJsonData.splice(indexToUpdate,1)

        // Write the updated data back to the file
        await fs.writeFile(jsonFilePathUser, JSON.stringify(userJsonData, null, 2), 'utf-8');
    }
});


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
