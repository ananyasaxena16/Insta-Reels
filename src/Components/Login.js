import React,{useState,useContext, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import {AuthContext} from '../Context/AuthProvider';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import './Login.css';

import Divider from '@material-ui/core/Divider';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import './login.png';
const useStyles = makeStyles({
  main:{
    display:'flex',
    flexDirection:'column',

  },
  picture:{
    height:'427px',
    left:200,
    
    position: 'absolute',
    left:'22%',
    top:'6%',
    maxWidth: 420,
    height: 600,
   
    

  },
  play1:{
    position:'absolute',
    left:'50%',
    top:'70%',
    width:180,
    height:70,
    marginTop:15,



  },
  play2:{
    position:'absolute',
    left:'63.5%',
    top:'70%',
    width:180,
    height:70,
    marginTop:15,


  },
  root: {
    
    position:'absolute',
    left:'50%',
    top:'10%',
    maxWidth: 370,
    height: 400,
    alignItems:'center',
  },
  media: {
    height: 70,
    width:190,
    marginLeft:70,
   
    marginTop:8,
    marginBottom:40,
  },
  mailbox: {
    marginLeft:30,
    marginRight:20,
    width: 300,
    marginBottom:10,
  },
  pass : {
    marginLeft:30,
    marginRight:20,
    width: 300,
    marginBottom:10,
  },
  btn:{
    marginLeft:30,
    marginRight:20,
    width: 300,
    
  },
  e:{
    marginLeft:140,
    marginRight:20,

  },
  sign:{
    marginTop:20,
    marginLeft:30,
  }
  
});

function Login() {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);
    const {login,currentUser} =useContext(AuthContext);
    const history = useHistory();
     const handleSubmit = async(e)=>{
          console.log('hi');
        e.preventDefault()
        try {
          console.log('Logging in user')
          setLoading(true)
          await login(email, password)
          setLoading(false)
          history.push('/')
        } catch {
          setError("Failed to log in")
          setTimeout(()=>setError(''),2000)
          setLoading(false)

          
        }
      }
      useEffect(()=>{
        if(currentUser)
        {
          history.push('/')
        }
      },[])
      return (
        <>
        <div className={classes.main}>
          <div > 
            <img className={classes.picture} src="https://raw.githubusercontent.com/nikolaPokrajac/Instagram-login-clone/master/images/mobile-app.png"></img>
          </div>
        <Card variant="outlined" className={classes.root}>
          <CardActionArea>
            <CardMedia
             component="img"
              className={classes.media}
           image="data:image/png;base64,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"
  
              
            />
            <CardContent >
            <form onSubmit={handleSubmit} >
            <TextField className={classes.mailbox}
          id="filled-password-input"
          label="Phone number, username, or email"
          type="email"
          autoComplete="current-password"
          variant="filled"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
                          
                        
                           
                           <TextField className={classes.pass}
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
                           
                              
                          
                           <Button className={classes.btn}type='submit' variant="contained" color="primary"  disabled={loading}>Login</Button>
                           
                            
                             
                           {error?<h4 className={classes.e}color="red">{error}</h4>
                           :<></>}
                          </form>
                          <Divider />
              
            </CardContent>
          </CardActionArea>
          <CardActions>
            <h3 className={classes.sign}>Don't have an account?</h3>
            <Button type='submit' variant='contained'color="primary" disabled={!error} onClick={(e)=>history.push('/signup')}>Sign up</Button>
          </CardActions>
        </Card>
        <div>
          <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=3D334563-AB1E-4F00-B33D-18CBBB002814&utm_content=lo&utm_medium=badge"><img className={classes.play1} src="https://raw.githubusercontent.com/nikolaPokrajac/Instagram-login-clone/master/images/google-play.png"></img>
</a>
<a href="https://l.instagram.com/?u=https%3A%2F%2Fitunes.apple.com%2Fapp%2Finstagram%2Fid389801252%3Fpt%3D428156%26ct%3Digweb.loginPage.badge%26mt%3D8%26vt%3Dlo&e=ATOAlA-q8qN8hr0bDFrPRysdHB_ruqGAOHoPBZJSJ_48uglrpp4w7-fn1sCPfw4wnYRkP8ppbAZ1vvf5&s=1"><img className={classes.play2} src="https://raw.githubusercontent.com/nikolaPokrajac/Instagram-login-clone/master/images/app-store.png"></img>
        </a></div>
        </div>
        </>
      )
}
      
          
              
             

//           <Paper elevation={3} >
//           <form onSubmit={handleSubmit} >
          
//                  <div>   
//                 <label htmlFor=''>Email</label>
//                     <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
//                 </div>
//                 <div>
//                 <label htmlFor=''>Password</label>
//                     <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
//                 </div>
//                 <button type='submit' disabled={loading}>Login</button>
//                 <button type='submit' disabled={!error} onClick={(e)=>history.push('/signup')}>
                  
//                   Signup</button>
//                 {error?<h1>{error}</h1>
//                 :<></>}
//                 </form>
//                 </Paper>
               
//         </div>
//     )
// }

export default Login