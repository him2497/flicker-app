import axios from 'axios';


export function getImages(param){
  return async (dispatch) => {
    //console.log("this works " + param)
    const API = process.env.REACT_APP_API_KEY;
    const encodedURI = encodeURI(`https://api.flickr.com/services/rest/?&method=flickr.tags.getClusterPhotos&api_key=${API}&format=json&tag=${param}`)
    axios.get(encodedURI)
    .then((res) => {
      const parse = JSON.parse(res.data.slice(14, res.data.length-1))
      //console.log(parse.photos.photo)
      console.log(parse)
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
