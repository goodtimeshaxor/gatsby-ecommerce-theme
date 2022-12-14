import * as React from 'react';

import Layout from '../components/Layout/Layout';

import { getProductList } from '../helpers/mock';

import * as styles from './index.module.css';
import { navigate } from 'gatsby';
import { Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';

const IndexPage = () => {
    const products = getProductList();

    const goToShop = () => {
        navigate('/shop');
    };

    return (
        <Layout>
            <Grid justifyContent="center" container spacing={2} className={styles.root}>
                    <Grid item xs={12}>
                        <img width="292" height="40" src="titles/how_to_order.png"></img>
                    </Grid>

                    <Grid item xs={12}>
                        <p className={styles.alignLeft}>First, make a list of all the products you\' like order. Confirm your selection and order total with a MewGEN admin by contacting one via our social links above.</p>
                        <br />
                        <p className={styles.alignLeft}>We currently accept the following payment methods:</p>
                        <p className={styles.alignLeft}>Paypal F&F: pay@mewgen.io</p>
                        <p className={styles.alignLeft}>Paypal G&S ($10 minimum): pay@mewgen.io</p>
                        <p className={styles.alignLeft}>Cash App: $mewgenio</p>
                        <p className={styles.alignLeft}>Apple Pay: Contact MewGEN admin for details </p>
                    </Grid>

                <Grid container spacing={2} className={styles.padTop}>
                    <Grid item xs={3} sm={3} md={4} lg={5} xl={5} />
                    <Grid item xs={6} sm={6} md={4} lg={2} xl={2}>
                        <img width="178" height="40" src="titles/all_items.png"></img>
                    </Grid>
                    <Grid item xs={3} sm={3} md={4} lg={5} xl={5} />
                </Grid>

                {products.map(product =>
                    <Grid key={product.name} item xs={9} sm={9} md={5} lg={4} xl={3}>
                        <Card>
                            <CardMedia component="img" image={product.image} alt={product.alt} />
                            <CardContent className={styles.alignLeft}>
                                <Typography component="div" variant="h5" gutterBottom className={styles.productTitle}>{product.name}</Typography>

                                <Typography>${product.price}</Typography>

                                <br/>

                                {product.description?.split("<br>").map((x, i) =>
                                    <Typography variant="body2" color="text.secondary" key={i}>
                                        {x}
                                        <br />
                                    </Typography>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </Layout>
    );
};

export default IndexPage;
