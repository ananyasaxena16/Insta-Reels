import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
const useStyles = makeStyles((theme) => ({
    btn:{
        margin:'0 auto',
        width:'30%',
        marginLeft:'35%',
        marginBottom:'2%',
        marginTop:'1%',
       
        '&:hover': {
          backgroundColor: 'black',
          color: 'white',
      }
    }
  }));
function Buttons() {
    const classes = useStyles();
    return (
        <div>
            <div>
            <Button
        variant="contained"
        color="Black"
        backgroundColor= '#12824C'
        className={classes.btn}
        startIcon={<CloudUploadIcon />}
      >
        Upload Your Reels
      </Button>
            </div>
           
            
        </div>
    )
}

export default Buttons
