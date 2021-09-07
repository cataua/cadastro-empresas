import { Router } from 'express';
import { mountCompanyBody } from '../../helpers/index.js';
import service from './company.service.js';

const Company = Router();

Company.get('/',async (req, res) => {
    try {
        const { query } = req;
        const data = await service.get({ ...query });
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(error.status ? error.status : 500).json(error);
    }
});

Company.get('/cnpj/:cnpj', async (req, res) => {
    try {
        const { cnpj } = req.params;

        const data = await service.get({cnpj})
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(422).json(error);
    }
})

Company.post('/', async  (req, res) => {
    try {
        const { body } = req;
        const companyMounted = mountCompanyBody(body);
        const data = await service.post(companyMounted);
        return res.status(201).json({data});
    } catch (error) {
        return res.status(422).json({message: 'Fail to create register!', error});
    }
});

Company.put('/cnpj/:cnpj', async  (req, res) => {
    try {
        const { body } = req;
        const { cnpj } = req.params;
        const companyMounted = mountCompanyBody(body);
        const data = await service.put({ cnpj, company: companyMounted });
        return res.status(200).json({data});
    } catch (error) {
        return res.status(422).json({message: 'Fail to update register', error});
    }
});

Company.delete('/cnpj/:cnpj', async (req, res) => {
    try {
        const { cnpj } = req.params;
        console.info('===============================');
        console.log({cnpj});
        console.info('===============================');
        const data = await service.del({cnpj});
        return res.status(200).json(data)
    } catch (error) {
        return res.status(422).json({message: 'Fail to delete register', error});
    }
})

export default Company;

export { Company }