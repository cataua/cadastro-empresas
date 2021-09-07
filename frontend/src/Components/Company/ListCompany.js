import React from 'react';
import {Paper, Card, CardContent, CardMedia, Typography, Grid, List, ListItem, Divider, ListItemIcon, ListItemText} from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business';
import ReceiptIcon from '@material-ui/icons/Receipt';
import { getCompanies } from "../../reducers/company.reducer";
import './css/Company.css';

const Activities = (activities) => {
    if (activities.length > 0) {
        return activities.map((activity) => (
            <React.Fragment>
                <ListItem>
                    <ListItemIcon>
                        <ReceiptIcon/>
                    </ListItemIcon>
                    <ListItemText primary={`${activity.text} (${activity.code}`}/>
                </ListItem>
            </React.Fragment>
        ));
    } else {
        return (
            <React.Fragment>
                <ListItem>
                    <ListItemText primary={'Sem atividades cadastradas'} />
                </ListItem>
            </React.Fragment>
        )
    }
}

const Companies = ({data}) => {
    return data.map((company, index) => (
        <Card key={company.cnpj}>
            <CardContent>
                <Typography component='h4' variant={'h4'}>
                    {company.nomeFantasia}
                </Typography>
                <Typography component={'h5'} variant={'h5'} color={'textSecondary'}>
                    ({company.nome})
                </Typography>
                <Divider light className={'mx-2'}/>
                <Grid container>
                    <Grid item sm={12}>
                        <Typography component={'h5'} variant={'h5'}>
                            Atividade primária
                        </Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <List>
                            {Activities(company.atividadePrincipal)}
                        </List>
                    </Grid>
                </Grid>
            </CardContent>
            <CardMedia>

            </CardMedia>
        </Card>
    ));
}

const ListCompany = () => {
    const companies = [  {
        _id: '61368a29f2862bca43a7549b',
        cnpj: '21835732000171',
        nome: 'Stark Industries Inc.',
        atividadePrincipal: [
            {
                text: 'Atividades de televisão aberta',
                code: "60.21-7-00"
            }
        ],
        telefone: '(11) 9090-0900',
        situacao: 'ATIVA',
        bairro: 'Centro',
        logradouro: 'Rua Barão de Nepomucento',
        numero: '1231',
        complemento: '',
        cep: '35090-090',
        nomeFantasia: 'Vingadores',
        __v: 0
    },
        {
            _id: '61369178f8141af88af22dc0',
            cnpj: '22988696000149',
            nome: 'Daily Planet',
            atividadePrincipal: [],
            telefone: '(11) 8290-0911',
            situacao: 'ATIVA',
            bairro: 'Centro',
            logradouro: 'Rua Augusta',
            numero: '125',
            complemento: '',
            cep: '35090-191',
            nomeFantasia: 'Daily Planet',
            __v: 0
        }];
    return (
        <Paper elevation={0}>
           <h2>
               <BusinessIcon color={'disabled'}/>
               Listar empresas
           </h2>
            <Grid container>
                <Grid item>
                    <Companies data={companies} />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default ListCompany;