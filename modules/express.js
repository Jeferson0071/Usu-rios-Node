const express = require('express')
const UserModel = require('../src/models/user.models');

const app = express()

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);

  next();
});

app.get("/views/users", async (req, res) => {
    const users = await UserModel.find({});

    res.render('index', {users})
});

app.get("/home", (req, res) => {
    res.status(200).send("<h1>Hello, World!</h1>")
});

app.get("/users", async (req, res) => {
    
    try {
        const users = await UserModel.find({});
        res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao buscar todos usuarios' });
    }

});

app.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const user = await UserModel.findById(id);
        
        return res.status(200).json(user);
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar usuários por ID' });
    }

});

app.patch('/users/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

        res.status(200).json(user);
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
});

app.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findByIdAndDelete(id);

        res.status(200).json(user);
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao remover usuario' });
    }
});


app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
    // Aqui você pode adicionar lógica para salvar o usuário no banco de dados
    res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
});

const port = 8080;

app.listen(port, () => console.log (`rodando na porta ${port}`));