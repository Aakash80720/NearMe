import axios from 'axios'
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
export const getPlaceData = async(sw,ne) => {
    try{
        const{ data : {data}} = await axios.get(URL,
            {
                params: {
                  bl_latitude:sw.lat ,
                  tr_latitude: ne.lat,
                  bl_longitude: sw.lng,
                  tr_longitude: ne.lng,
                },
                headers: {
                  'X-RapidAPI-Key': '752c9af99cmsh8a105f8cb671738p1044bdjsn0e57b2ee9cd1',
                  'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                }
              }
            );
        return data;
    }
    catch(error){
        console.log(error);
    }
}