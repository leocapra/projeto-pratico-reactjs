import './style.css'
import { Button, Divider, TextField, Typography } from '@mui/material'


function Home() {


  return (
    <>
      <div className="container">
        <form>
          <Typography variant="h4">Cadastrar usuário</Typography>
          <TextField id="outlined-basic" label="Nome" variant="outlined" name='nome' type='text' />
          <TextField id="outlined-basic" label="Idade" variant="outlined" name='idade' />
          <TextField id="outlined-basic" label="Email" variant="outlined" name='email' type='email' />

          <Divider orientation="vertical" variant="middle" flexItem />

          <Button variant="contained">Cadastrar</Button>
        </form>
      </div>
    </>
  )
}

export default Home
