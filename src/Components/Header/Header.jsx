import React from 'react'
import {Autocomplete, AutoComplete} from '@react-google-maps/api'
import {AppBar,Toolbar,Typography,InputBase,Box} from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'
import useStyles from './styles.js';
function Header() {
    const classes = useStyles();
  return (
    <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>
            <Typography variant="h5" className={classes.title}>
                NearMe
            </Typography>
            <Box display="flex">
                <Typography variant="h6" className={classes.title}>
                    Explore More & More
                </Typography>
                {/* <Autocomplete> */}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchOutlined/>
                        </div>
                        <InputBase placeholder='Find Around Mee..' classes={{root:classes.inputRoot,input:classes.inputInput}}/>
                    </div>  
                {/* </Autocomplete> */}
            </Box>
            
        </Toolbar>
    </AppBar>
  )
}

export default Header