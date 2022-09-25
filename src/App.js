import { CssBaseline, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import List from './Components/List/List';
import { getPlaceData } from './api/Index';
import Map from './Components/Map/Map';
const App = () =>{
    const [Places, setPlaces] = useState([])
    const [loading, setLoading] = useState(true)
    const [coordinates, setCoordinates] = useState({})
    const [bounds, setBounds] = useState(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}}) => {
            setCoordinates({lat:latitude,lng:longitude})
            setLoading(false)
        })    
    }, [])
    

    useEffect(() => { 
        console.log(coordinates,bounds)
        if(bounds){
            console.log("test")
            getPlaceData(bounds.sw,bounds.ne).then((data)=>{
            console.log(data);
            setPlaces(data);
        })
        }
         
      return () => {
      }
    }, [coordinates,bounds])
    
    return(
        <div>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={1} style={{width : '100%',marginTop:'5%'}}>
                <Grid item xs={12} md={4}>
                    <List Places = {Places}/>
                </Grid>
                <Grid item xs={12} md={8}>
                <div style={{ margin: '0px'}}>       
            {
                !loading ? 
                <Map
                    places = {Places}
                    center={coordinates}
                    setCoordinates = {setCoordinates}     
                    setBounds = {setBounds}  
                />: 
                <div className="flex justify-center items-center bg-[#b7cbd8] h-screen">
                    <div
                    className="bg-white flex space-x-2 p-5 rounded-full justify-center items-center"
                    >
                        <div
                        className="bg-blue-600 p-2  w-4 h-4 rounded-full animate-bounce"
                        style={{
                            animationDelay:'0.1s',
                        }}
                        ></div>
                        <div
                        className="bg-green-600 p-2 w-4 h-4 rounded-full animate-bounce green-circle"
                        style={{
                            animationDelay:'0.2s',
                        }}
                        ></div>
                        <div
                        className="bg-red-600 p-2  w-4 h-4 rounded-full animate-bounce red-circle"
                        style={{
                            animationDelay:'0.3s',
                        }}
                        ></div>
                    </div>
                </div>
                }
        </div>
                </Grid>
            </Grid>
            <Footer/>
        </div>
    )
}
export default App;