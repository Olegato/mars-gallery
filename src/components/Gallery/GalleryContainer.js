import React from 'react'
import { useSelector } from 'react-redux'
import './GalleryStyle.scss'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import ImageGallery from 'react-image-gallery';
import Spinner from '../Spinner'

import { getPicturesGallery } from 'selectors'
import { validateImages } from 'utils'

const GalleryContainer = () => {


  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
    }
  }));

  const classes = useStyles();

  const { data, loading, isCarouselActive } = useSelector(getPicturesGallery)
  data.hits && console.log(validateImages(data.hits))
  const images = data.hits && validateImages(data.hits)
  return (
    <>
    {loading ? <Spinner /> :
    <>
  <GridList cellHeight={180} className={classes.gridList} cols={4}>
    {data.hits.map((tile) => (
    <GridListTile key={tile.id} cols={tile.cols || 1}>
      <img src={tile.largeImageURL} alt={tile.tags} className={'grid-gallery-image'}/>
    </GridListTile>
  ))}
</GridList>
      {<ImageGallery items={images}/>}
      </>}
    </>
  )
}

export default GalleryContainer
