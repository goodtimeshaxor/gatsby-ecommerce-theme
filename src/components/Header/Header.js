import React from 'react';
import * as styles from './Header.module.css';

import { Grid } from '@mui/material';

const Header = (prop) => {
 
  return (
    <Grid justifyContent="center" alignContent="center" container spacing={0} className={styles.root}>
        <Grid item xs={0} sm={0} md={0} lg={3} xl={3}>

        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <img src="titles/web_title.png"></img>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
            <a href="https://discord.gg/rH5f9Q2TjA"><img src="socials/discord_icon.png" height="60" width="75""></img></a>
            <a href="https://twitter.com/mewgenio"><img src="socials/twitter.png" height="60" width="70""></img></a>
            <a href="https://www.facebook.com/groups/mewgen"><img src="socials/facebook.png" height="60" width="60""></img></a>
        </Grid>
    </Grid>
  );
};

export default Header;
