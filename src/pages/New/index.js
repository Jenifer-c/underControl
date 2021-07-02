import { makeStyles } from '@material-ui/core/styles';
import TextField      from '@material-ui/core/TextField';
import { Button     } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useState   } from 'react';


const useStyles = makeStyles((theme) => ({
    root : {
      '& > *'  : {
        margin : theme.spacing(1),
        width  : '25ch',
      },
    },
  }));

export function NewProd() {
    const [newProduct, setNewProduct] = useState();

    const classes = useStyles();
    const history = useHistory('');

    return( 
        <>  
            <div>
                <h1> Novo Produto </h1>

                <form className    = { classes.root } 
                      autoComplete = "off"
                      noValidate
                > 
                    <TextField id      = "outlined-basic" 
                               label   = "Código"
                               variant = "outlined" 
                    /> <br/>
                    <TextField id      = "outlined-basic" 
                               label   = "Nome" 
                               variant = "outlined"   
                    /><br/>
                    <TextField id      = "outlined-basic" 
                               label   = "Preço" 
                               variant = "outlined"   
                    /><br />
                    <TextField id      = "outlined-basic" 
                               label   = "Qtd. Estoque" 
                               variant = "outlined" 
                    /><br/>
                </form>
                    <Button  color = "primary" >
                        + Novo 
                    </Button>
                        <br/>
                    <Button  color   = "secondary" 
                             onClick = {() => {history.push('/')}}>
                        Voltar
                    </Button>
            </div>
        </>        
    )
}