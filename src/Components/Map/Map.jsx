/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import "./Marker.css"
import useStyle from './styles'
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import { GoogleMap, Marker } from '@react-google-maps/api';
import GoogleMapReact from 'google-map-react';
import IAM from '../../assets/i-am-here-icon.png'
import { LoadScript } from '@react-google-maps/api';
import {withGoogleMap} from 'react-google-maps';
import AttractionsIcon from '@mui/icons-material/Attractions';
import { Circle, LocationOnOutlined, Restaurant } from '@mui/icons-material';
import restaurant from '../../assets/restaurant-icon.png'
import { Rating } from '@mui/material';
function Map({places,center, setCoordinates ,setBounds}) {
    
    const classes = useStyle();
    const isMobile = useMediaQuery('(min-width:600px)')
    const [refMap, setRefMap] = useState(null)
    const containerStyle = {
      width: '100%',
      height: '100vh',
      margin:'0%',
    };
    console.log(center)
    function renderMarker(map,maps) {
      console.log(maps)
      let marker = new maps.Marker({
        position: center,
        map,
        icon: {
          url: IAM,
          // set marker width and height
          scaledSize: new window.google.maps.Size(36, 36)
        }
      })
      // let circle = new maps.Circle({
      //   strokeColor: '#FF0000',
      //   strokeOpacity: 0.8,
      //   strokeWeight: 2,
      //   fillColor: '#FF0000',
      //   fillOpacity: 0.3,
      //   map,
      //   center: {lat: places[4].latitude, lng:places[4].longitude },
      //   radius: 275,
      // })
    }
  return (
    <div className={classes.mapContainer}>
        <GoogleMapReact 
        bootstrapURLKeys={{key:'AIzaSyDtvUQvFHkEMKmPOHIe15SK_1_yJceI9VI'}}
        defaultCenter={center}
        center={center}
        defaultZoom={16}
        margin={[50,50,50,50]}
        options={{}}
        onChange={(e)=>{
          console.log(e)
          setCoordinates({lat:e.center.lat,lng:e.center.lng})
          setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw})
        }}
        onGoogleApiLoaded={({map, maps}) => 
          renderMarker(map,maps)
        }
        
        >
          {
            places?.map((place,i) => (
              <div 
              className={classes.markerContainer}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
              >
                {
                  !place.name ? (<div className="p-[170px] rounded-full opacity-20 bg-[#93c3e6] place-content-center">
                    <div className="rounded-full p-[150px] bg-[#48a0de] "><LocationOnOutlined color='primary' fontSize='large'/></div>
                    </div>) : 
                  (<div className='markers'>
                    <div className="paper">
                    <Paper elevation={3} className={classes.paper}>
                    <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                    <img
                    className={classes.pointer}
                    src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                    />
                    <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                    </Paper>
                    </div>
                    <div className='w-8 h-8 img'>
                      <img key={i} className=' w-8 h-8' src={restaurant} alt={place.name} sizes="10px" srcset="" />
                    </div>
                  </div>)
                }
                

              </div>
            ))
          }
          
        </GoogleMapReact>
        

    </div>
  )
}

export default Map

