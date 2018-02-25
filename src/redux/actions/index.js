import axios from 'axios';


export function getImages(param){
  return async (dispatch) => {
    //console.log("this works " + param)
    ///`https://api.flickr.com/services/rest/?&method=flickr.tags.getClusterPhotos&api_key=b61707227bc0975c0577d78a7cc2a2de&format=json&tag=${param}`
    //const encodedURI = encodeURI(`https://api.flickr.com/services/rest/?method=flickr.tags.getClusterPhotos&api_key=b61707227bc0975c0577d78a7cc2a2de&tag=${param}&format=rest&api_sig=298d677ea223ff2fc010ab60cb96a24b`)
    const encodedURI = encodeURI(`https://api.flickr.com/services/rest/?&method=flickr.tags.getClusterPhotos&api_key=b61707227bc0975c0577d78a7cc2a2de&format=json&tag=${param}`)
    axios.get(encodedURI)
    .then((res) => {
      const parse = JSON.parse(res.data.slice(14, res.data.length-1))
      //console.log(parse.photos.photo)
      const photos = parse.photos.photo
      let arr = []
      for(let i=0; i< photos.length; i++){
        var photo = photos[i]
        var encodedURI = encodeURI(`https://c1.staticflickr.com/${photo.farm}/${photo.server}/${photo.id}_${photo.secret}_m.jpg`)
        arr.push(encodedURI)
      }
      dispatch(fetchImages(arr))
    })
    .catch(function (error) {
    console.log(error);
  });

  }
}


export const fetchImages = (payload) => ({
  type: 'FETCH_IMAGES',
  images: payload
});
