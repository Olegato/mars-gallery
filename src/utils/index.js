export const validateImages = (img) => {
  return img.map(item => {
    const { largeImageURL, previewURL } = item
    return {
      ...item,
      original: largeImageURL,
      thumbnail: largeImageURL,
    }
  })
}
