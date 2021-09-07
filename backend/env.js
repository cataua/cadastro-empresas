import dotEnv from "dotenv";

dotEnv.config({ path: './.env'});

const env = {
    api_url: process.env.RECEITAWS,
    db: {
        user: process.env.DB_USERNAME,
        pass: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        server: process.env.DB_SERVER
    }
};

export default env;