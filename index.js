const express = require('express');
const mongoose= require('mongoose');
const bodyParser = require('body-parser');
const teacherRoutes = require('./teacherRoutes');
const studentRoutes = require('./studentRoutes');

const app = express();
const PORT = 3030;

app.use(bodyParser.json());
// MongoDB Atlas connection string

const MONGODB_URI = 'mongodb+srv://Gnane:Abm13abm13@cluster0.t4jkwqc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(MONGODB_URI).then(()=>console.log("connected successfully"))

app.get('/',(req,res)=>{
  res.send("Hai")
})

app.use('/teacher', teacherRoutes);
app.use('/student', studentRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
