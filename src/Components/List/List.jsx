import { CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import React, { createRef, useEffect, useState } from 'react'
import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './style'
function List({Places, childClicked, isLoading,rating,type,setType,setRating}) {
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(Places?.length).fill().map((_,i) => elRefs[i] || createRef())
    setElRefs(refs);

  }, [Places])
  
  
  return (
    <div className={classes.container}>
      <Typography variant = "h4">
        Restaurant , Hotels , & Attraction around you
      </Typography>
        
        <FormControl className={classes.formControl}>
          <InputLabel>Type</InputLabel>
          <Select value={type} onChange={(e)=> setType(e.target.value)}>
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attractions">Attractions</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Type</InputLabel>
          <Select value={rating} onChange={(e)=> setRating(e.target.value)}>
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
            <MenuItem value={4.5}>Above 4.5</MenuItem>
          </Select>
        </FormControl>
          {
          !isLoading ? (
            <div className={classes.loading}>
              <CircularProgress size="5rem"/>

            </div>
          ) : (
            <>
              <Grid container spacing={2} className={classes.list}>
                {Places?.map((place,i)=>(
                  <Grid ref={elRefs[i]} item key={i} xs={12}>
                    <PlaceDetails
                    selected = {Number(childClicked)  ===  i}
                    refProp = { elRefs[i]}
                    place = {place}/>
                  </Grid>

                ))}
              </Grid>
            </>
      
      )
    }
    </div>
  )
}

export default List