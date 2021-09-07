import Model from '../../models/Company.model.js';


const get = async (filter) => {
    return Model.find({ ...filter });
}

const put = async (req) => {
    const { cnpj, company } = req;
    return Model.findOneAndUpdate({cnpj}, {...company});
}

const post = async (company) => {
 return Model.create({...company});
}

const del = async ({cnpj}) => {
    console.log({cnpj});
    return Model.findOneAndDelete({cnpj});
}

export default { get, put, post, del };

