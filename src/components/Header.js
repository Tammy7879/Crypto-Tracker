import { AppBar, Container , MenuItem, Select, Toolbar, Typography, makeStyles,createTheme, ThemeProvider } from '@material-ui/core'
import React  from 'react'
import {useNavigate} from 'react-router-dom' 
import { CryptoState } from '../CryptoContext'


const useStyles = makeStyles(()=>({
    title:{
       flex : 1,
       color :'#87CEEB',
       fontFamily: 'Monteserrat',
       fontWeight:'bold' ,
       cursor:'pointer'
    }
}))

const Header = () => {
  const classes = useStyles() ;
  const history = useNavigate() ;
  
  const {currency ,setCurrency } = CryptoState() 

  console.log(currency) ;

  const darkTheme = createTheme({
    palette :{
      primary:{
        main:"#fff",
      },
      type:"dark",
    },
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color ="transparent" position='static'>
        <Container>
            <Toolbar>
                <Typography onClick={()=>{
                    history('/') 
                }}className={classes.title}>Crypto Tracker </Typography>
                  
                <Select 
                  variant='outlined'
                  style={{
                    width:100 ,
                    height:40,
                    marginLeft:15,
                  }}           
                  value={currency}
                  onChange={(e)=> setCurrency(e.target.value)}
                >
                   <MenuItem value={"USD"}>USD</MenuItem>
                   <MenuItem value={"INR"}>INR</MenuItem>
                </Select>
            </Toolbar>
        </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header