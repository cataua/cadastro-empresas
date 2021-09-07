import mongoose from "mongoose";
import env from '../env.js';

const options = {
    auth: { username: env.db.user, password: env.db.pass },
    authSource: 'admin',
    autoIndex: true,
    autoCreate: true,
};

mongoose.connect(`mongodb://${env.db.server}:${env.db.port}/cnpj`, options, (error, result) => {
   if (error) return error;
    console.log('Conectado ao BD!');
});

export default mongoose;

