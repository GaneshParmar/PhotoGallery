export const fetchPhotos =async function (query) {
    const accessKey = 'VZ_3cv4f_YesvmaSj-2_Sn1KzT98kcFSh8vqjpJ1eok';
    const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching photos:', error);
      return [];
    }
  }
// test
// fetchPhotos('food')
// .then(result=>{
//     console.log(result)
// })
// .catch(err=>console.log(err))

