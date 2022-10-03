/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import useStyle from './styles'
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import { GoogleMap, Marker } from '@react-google-maps/api';
import GoogleMapReact from 'google-map-react';
import IAM from '../../assets/i-am-here-icon.png'
import { Circle, LocationOnOutlined, Restaurant } from '@mui/icons-material';
import { Rating } from '@mui/material';
import mapStyles from './mapStyles';
function Map({places,center, setCoordinates ,setBounds,setChildClicked}) {
    
    const classes = useStyle();
    const matches = useMediaQuery('(min-width:600px)')
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
    }
  return (
    <div className={classes.mapContainer}>
        <GoogleMapReact 
        bootstrapURLKeys={{key:process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
        defaultCenter={center}
        center={center}
        defaultZoom={15}
        margin={[50,50,50,50]}
        options={{ disableDefaultUI : true, zoomControl :true,styles : mapStyles }}
        onChange={(e)=>{
          console.log(e)
          setCoordinates({lat:e.center.lat,lng:e.center.lng})
          setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw})
        }}
        onChildClick={(child) => setChildClicked(child)}
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
                  !place.name ? (<LocationOnOutlined color='primary' fontSize='large'/>
                    ) : 
                  !matches
                    ? <Restaurant color="primary" fontSize="large" />
                    : (
                        <Paper elevation={3} className={classes.paper}>
                        <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                        <img
                          className={classes.pointer}
                          src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                        />
                        <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                      </Paper> 
                    )
                }
              </div>
            ))
          }
          
        </GoogleMapReact>
        

    </div>
  )
}

export default Map

