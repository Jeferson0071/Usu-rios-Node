const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cadastrousers.ygue3kp.mongodb.net/database?retryWrites=true&w=majority&appName=CadastroUsers`);
    console.log("Conexão com o MongoDB estabelecida com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  } 
};

module.exports = connectToDatabase;