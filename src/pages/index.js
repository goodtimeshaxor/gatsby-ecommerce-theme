import * as React from 'react';

import Layout from '../components/Layout/Layout';

import { getProductList } from '../helpers/mock';

import * as styles from './index.module.css';
import { navigate } from 'gatsby';
import { Card, CardContent, CardHeader, CardMedia, Grid } from '@mui/material';

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
                        <p className={styles.alignLeft}>Text box here. I’ll add content at a later time. Text to expand downwards and push content down. Wrap text when nearing edge.</p>
                        <br />
                        <p className={styles.alignLeft}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Grid>

                <Grid container spacing={2} className={styles.padTop}>
                    <Grid item xs={3} sm={3} md={4} lg={5} xl={5} />
                    <Grid item xs={6} sm={6} md={4} lg={2} xl={2}>
                        <img width="178" height="40" src="titles/all_items.png"></img>
                    </Grid>
                    <Grid item xs={3} sm={3} md={4} lg={5} xl={5} />
                </Grid>

                {products.map(product =>
                    <Grid key={product.name} item xs={9} sm={9} md={5} lg={5} xl={4}>
                        <Card>
                            <CardHeader title={product.name} subheader={`$${product.price}`} />
                            <CardMedia component="img" image={product.image} alt={product.alt} />
                            <CardContent className={styles.alignLeft}>
                                {product.description.split("<br>").map((x, i) =>
                                    <div key={i}>
                                        {x}
                                        <br />
                                    </div>
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
