 import React,{useEffect} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
    import Pusher from 'pusher-js';

const Toast = () => {

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
      const pusher = new Pusher('c8113c5acb5abcd052fa', {
          cluster: 'ap3',
          encrypted: true
     });
        const channel = pusher.subscribe('my_channel');
                    channel.bind('my-event', (data) =>{

                      setOpen(true)
                    });
  },[])


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
     
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          New Games Added.Please Refresh the Page
        </Alert>
      </Snackbar>
    
    </div>
  );
}



export default Toast;