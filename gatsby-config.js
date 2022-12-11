module.exports = {
  siteMetadata: {
    title: `MewGEN Pokémon Genning Shop`,
    siteUrl: `https://mewgen.io`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MewGEN.io`,
        short_name: `MewGEN`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-netlify',
  ],
};
