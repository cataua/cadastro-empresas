import Mongoose from '../db/dbConnection.js';

const companySchema = new Mongoose.Schema({
    cnpj: { type: String, unique: true, required: true},
    nome: String,
    atividadePrincipal: Array,
    telefone: String,
    situacao: String,
    bairro: String,
    logradouro: String,
    numero: String,
    complemento: String,
    cep: String,
    nomeFantasia: String,
}, { collection: 'companies'});

export default Mongoose.model('Company', companySchema, 'companies');
