import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '80%',
    height: 'auto',
    overflowY: 'auto',
  },
};

const tilesData = [
    {
      img: 'http://www.ecotec.edu.ec/content/uploads/ngg_featured/software-600x396.jpg',
      title: 'Nuevo curso de software',
      author: 'jill111',
    },
    {
      img: 'http://www.ecotec.edu.ec/content/uploads/ngg_featured/software-600x396.jpg',
      title: 'Descubre tu talento',
      author: 'pashminu',
    },
    {
      img: 'http://www.ecotec.edu.ec/content/uploads/ngg_featured/software-600x396.jpg',
      title: 'Nuevo sistema de autenticacion',
      author: 'Danson67',
    },
    {
      img: 'http://www.ecotec.edu.ec/content/uploads/ngg_featured/software-600x396.jpg',
      title: 'Ingresa al curso rapido de Rails',
      author: 'fancycrave1',
    },
    {
      img: 'http://www.ecotec.edu.ec/content/uploads/ngg_featured/software-600x396.jpg',
      title: 'II encuentro nacional de Ing. de sistemas',
      author: 'Hans',
    },
    {
      img: 'http://www.ecotec.edu.ec/content/uploads/ngg_featured/software-600x396.jpg',
      title: 'Seguridad en Linea',
      author: 'fancycravel',
    },
    {
      img: 'http://www.ecotec.edu.ec/content/uploads/ngg_featured/software-600x396.jpg',
      title: 'Nuevo curso de JS',
      author: 'jill111',
    },
    {
      img: 'http://www.ecotec.edu.ec/content/uploads/ngg_featured/software-600x396.jpg',
      title: 'Aprende React con nosotros',
      author: 'BkrmadtyaKarki',
    },
  ];
  

const GridListNovedades = () => (
    <div style={styles.root}>
      <GridList
        cellHeight={180}
        style={styles.gridList}
      >
        <Subheader>Novedades</Subheader>
        {tilesData.map((tile) => (
          <GridTile
            key={tile.img}
            title={tile.title}
            subtitle={<span>by <b>{tile.author}</b></span>}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          >
            <img src={tile.img} />
          </GridTile>
        ))}
      </GridList>
    </div>
  );
  
  export default GridListNovedades;