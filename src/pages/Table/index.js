import { makeStyles }  from '@material-ui/core/styles';
import Table           from '@material-ui/core/Table';
import TableBody       from '@material-ui/core/TableBody';
import TableCell       from '@material-ui/core/TableCell';
import TableContainer  from '@material-ui/core/TableContainer';
import TableHead       from '@material-ui/core/TableHead';
import TableRow        from '@material-ui/core/TableRow';
import Paper           from '@material-ui/core/Paper';
import Button          from '@material-ui/core/Button';
import { useHistory }  from 'react-router-dom';

const useStyles = makeStyles({
    table: {
      maxWidth: 650,
    },
});

export function TableProd(){
    const classes = useStyles();
    const history = useHistory('');

    return (
    <div>

        <h1>Bem-vindo(a)!</h1>
        <br/>
        <Button variant = "contained" 
                color   = "primary"
                onClick = { () => { history.push('/new') } } 
                style   = { { marginRight:"43%" } }
        >
            New
        </Button>

        <TableContainer component = { Paper } 
                        className = { classes.table }
        >
             <Table size       = "small" 
                    aria-label = ""
            >
                <TableHead>
                    <TableRow>
                        <TableCell align = "left"  > Código      </TableCell>
                        <TableCell align = "left"  > Nome        </TableCell>
                        <TableCell align = "center"> Preço       </TableCell>
                        <TableCell align = "rigth" > Qtd. Estoque</TableCell>
                        <TableCell align = "rigth" ></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        <TableRow>
                            <TableCell component = "th" 
                                       scope     = "row"
                            >
                                1
                            </TableCell>
                            <TableCell align = "left"  > Arroz   </TableCell>
                            <TableCell align = "center"> R$ 6,00 </TableCell>
                            <TableCell align = "left"  > 10      </TableCell>
                            <TableCell align = "center">

                                <Button color = "primary">
                                    Editar
                                </Button>
                                
                                <Button color = "secondary">
                                    Remover
                                </Button>
                            </TableCell>
                        </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </div>  
    )  
}

