var express=require('express');
var bodyparser=require("body-parser");
var mongoose=require("mongoose");

var app=express();

app.use(bodyparser.json());
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost:27017/mydb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

var db=mongoose.connection;

db.on('error',()=>{
    console.log('Error in connecting to database.')
})
db.once('open',()=>{
    console.log('Connected to database.')
})

app.post('/add',(req,res)=>{
    var name=req.body.name;
    var email=req.body.email;
    var phone=req.body.phone;
    var services=req.body.services;
    var address=req.body.address;
    var date=req.body.date;
    var time=req.body.time;

    var data={
        "name":name,
        "email":email,
        "phone":phone,
        "services":services,
        "address":address,
        "date":date,
        "time":time
    }
    console.log(data);
    db.collection('Booking').insertOne(data,(err,collection)=>{
        if(err)
        {
            throw err;
        }
        console.log('Record inserted successfully.');
    });
    return res.redirect('success');
})

app.post('/delete',(req,res)=>{
    var name=req.body.name;
    var email=req.body.email;
    var services=req.body.services;
    var date=req.body.date;
    var time=req.body.time;

    var data={
        "name":name,
        "email":email,
        "services":services,
        "date":date,
        "time":time
    }
    console.log(data);
    db.collection('Booking').deleteOne(data,(err,collection)=>{
        if(err)
        {
            throw err;
        }
        console.log('Record deleted successfully.');
    });
    return res.redirect('success2');
})

/*app.get('/',(req,res)=>{
    db.collection('Booking').find().toArray(function(err,result){
        console.log(result);
    })
})*/

app.listen(4000);

console.log('Listening on port 4000.');
