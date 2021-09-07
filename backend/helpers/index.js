import mongoose from "mongoose";
const mountCompanyBody = (args) => {
    const Company = {
            id: new mongoose.Types.ObjectId(),
            cnpj: args.cnpj,
            nome: args.nome,
            atividadePrincipal: args.atividadePrincipal,
            telefone: args.telefone,
            situacao: args.situacao,
            bairro: args.bairro,
            logradouro: args.logradouro,
            numero: args.numero,
            complemento: args.complemento,
            cep: args.cep,
            nomeFantasia: args.nomeFantasia,
        };
    return Company;
}

export default { mountCompanyBody };

export { mountCompanyBody };