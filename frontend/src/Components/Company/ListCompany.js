import React, {useEffect} from 'react';
import {
    Paper,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    List,
    ListItem,
    Divider,
    ListItemIcon,
    ListItemText,
    CircularProgress,
} from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business';
import ReceiptIcon from '@material-ui/icons/Receipt';
import { getCompanies } from "../../reducers/company.reducer";
import './css/Company.css';
import {useDispatch, useSelector} from "react-redux";

const Activities = (activities) => {
    if (activities.length > 0) {
        return activities.map((activity) => (
            <React.Fragment>
                <ListItem>
                    <ListItemIcon>
                        <ReceiptIcon/>
                    </ListItemIcon>
                    <ListItemText primary={`${activity.text} (${activity.code})`}/>
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
    if (data.length > 0) {
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
    } else {
        return (
            <React.Fragment>
                <Typography component={'h4'} variant={'h4'}>
                    Sem empresas no momento.
                </Typography>
            </React.Fragment>
        )
    }
}

const ListCompany = () => {
    const dispatch = useDispatch();
    const companies = useSelector(getCompanies);
    const companiesStatus = useSelector(state => state.company.status);
    const error = useSelector(state => state.company.error)
    const data = useSelector(state => state.company.companies);
    useEffect(() => {
        if (companiesStatus === 'idle') {
            dispatch(getCompanies());
        }
    }, [companiesStatus, dispatch]);
    let content;
    if (companiesStatus === 'loading') {
        content = <CircularProgress />
    } else if (companiesStatus === 'succeeded') {
        content = <Companies data={data} />
    } else if (companiesStatus === 'fail') {
        content = <React.Fragment>
            <Typography component={'h3'} variant={'h3'}>Falha ao carregar...</Typography>
            <Typography component={'p'}>{error}</Typography>
        </React.Fragment>
    }
    return (
        <Paper elevation={0}>
           <h2>
               <BusinessIcon color={'disabled'}/>
               Listar empresas
           </h2>
            <Grid container>
                <Grid item>
                    {content}
                </Grid>
            </Grid>
        </Paper>
    )
}

export default ListCompany;