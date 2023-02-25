import express from 'express' 
import cors from 'cors'
import axios from 'axios'


const PORT = process.env.PORT || 5050
const HOST = '0.0.0.0';
  


const app = express();
app.use(cors())

app.get('/', (req, res) => {
  res.send('Aplicacao Rodando na Porta '+ PORT)
})

app.get('/itens', async (req, res) => {
  var result = await axios.get('http://35.226.231.200:4040/itens') 
  res.send(result.data)
})

app.get('/itenstipo', async (req, res) => {
  var result = await axios.get('http://35.226.231.200:4040/itenstipo') 
  res.send(result.data)
})

app.get('/imagens', async (req, res)  => {
  var result = await axios.get('http://35.226.231.200:4040/imagens') 
  res.send(result.data)
})

 
app.post('/dados', function(request, response){
  console.log(request.body);      // your JSON
   response.send(request.body);    // echo the result back
});
 

app.listen(PORT, HOST, console.log('Aplicacao Rodando na Porta ' + PORT));