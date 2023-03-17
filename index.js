import express from 'express' 
import cors from 'cors'
import axios from 'axios'
import bodyParser from 'body-parser'



 
 
const app = express()
app.use(cors()).use(bodyParser.json()).use(bodyParser.urlencoded({ extended: false }))


const PORT = process.env.PORT || 5050
const HOST = '0.0.0.0';
  
////itens/////
app.get('/', (req, res) => {
  res.send('Aplicacao Rodando na Porta '+ PORT)
})

app.get('/itens', async (req, res) => {
  var result = await axios.get('http://35.226.231.200:4040/itens') 
  res.send(result.data)
})

app.delete('/itens/:id?', async (req, res) => {
  let data = req.body;
  console.log(data)
  var result = await axios.delete('http://35.226.231.200:4040/itens/'+data.ID) 
  res.send(result.data)
})

app.put('/itens/:id?', async (req, res) => {
  let data = req.body;
  res.send(data);
  console.log(data)

  var config = {
    method: 'put',
    maxBodyLength: Infinity,
    url: 'http://35.226.231.200:4040/itens/' +data.ID,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
})

app.post('/itens', async(req, res) => {
  let data = req.body;
  res.send(data);

  var config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://35.226.231.200:4040/itens',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    }); 
})


////Pedidos///////
app.get('/pedidos', async (req, res) => {
  var result = await axios.get('http://35.226.231.200:4040/pedidos') 
  res.send(result.data)
})

app.post('/pedidos', async(req, res) => {
  let data = req.body;
  res.send(data);
  var config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://35.226.231.200:4040/pedidos',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    }); 
})

app.put('/pedidos/:id?', async (req, res) => {
  let data = req.body;
  res.send(data);
  console.log(data)

  var config = {
    method: 'put',
    maxBodyLength: Infinity,
    url: 'http://35.226.231.200:4040/pedidos/' +data.ID,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
})

app.get('/mercadodemanda', async (req, res) => {
  var result = await axios.get('http://35.226.231.200:4040/mercadodemanda') 
  res.send(result.data)
})

app.delete('/pedidos/:id?', async (req, res) => {
  let data = req.body;
  console.log(data)
  var result = await axios.delete('http://35.226.231.200:4040/pedidos/'+data.ID) 
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
app.post('/imagens', async(req, res) => {
  let data = req.body;
  res.send(data);
  var config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://35.226.231.200:4040/imagens',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    }); 
})

app.put('/imagens/:id?', async (req, res) => {
  let data = req.body;
  res.send(data);
  console.log(data)

  var config = {
    method: 'put',
    maxBodyLength: Infinity,
    url: 'http://35.226.231.200:4040/imagens/',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
})
 
app.post('/dados', function(request, response){
  console.log(request.body);      // your JSON
   response.send(request.body);    // echo the result back
});
  

app.get('/mercadoprodutos', async (req, res)  => {
  var result = await axios.get('http://35.226.231.200:4040/mercadoprodutos') 
  res.send(result.data)
})
app.put('/mercadoprodutos/:id?', async (req, res) => {
  let data = req.body;
  res.send(data);
  console.log(data)

  var config = {
    method: 'put',
    maxBodyLength: Infinity,
    url: 'http://35.226.231.200:4040/mercadoprodutos/'+data.ID,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
})
app.post('/mercadoprodutos', async(req, res) => {
  let data = req.body;
  res.send(data);
  var config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://35.226.231.200:4040/mercadoprodutos',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    }); 
})

app.get('/mercadovendas', async (req, res)  => {
  var result = await axios.get('http://35.226.231.200:4040/mercadovendas') 
  res.send(result.data)
})
app.put('/mercadovendas/:id?', async (req, res) => {
  let data = req.body;
  res.send(data);
  console.log(data)

  var config = {
    method: 'put',
    maxBodyLength: Infinity,
    url: 'http://35.226.231.200:4040/mercadovendas/',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
})
app.post('/mercadovendas', async(req, res) => {
  let data = req.body;
  res.send(data);
  var config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://35.226.231.200:4040/mercadovendas',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    }); 
})

app.listen(PORT, HOST, console.log('Aplicacao Rodando na Porta ' + PORT));