const express = require('express')    
const cors = require('cors')    
const app = express()
app.use(cors())
app.get('/api/list', (req, res) => {
    res.json({ message: [
        {id:1,name:"张三"},
        {id:2,name:"李四"},
        {id:3,name:"王五"}
    ] });
  });

  app.listen(3000, () => {
    console.log(`🚀 Express 服务运行在 http://localhost:${3000}`);
  });