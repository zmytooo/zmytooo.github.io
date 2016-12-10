var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://127.0.0.1/jyb");

var userSchema = new mongoose.Schema({
    user: String,
    pass: String,
    user_name: String
});
var courseSchema = new mongoose.Schema({
    type: String
});

var userModel = db.model("user",userSchema,"user");
var classmodel = db.model("course",courseSchema,"course");


/* GET home page. */
router.get('/', function(req, res, next) {
  var onoff = false;
  console.log(req.session.user)
  if (req.session.user) {
      onoff = true;
  }else{
      onoff = false;
  }
  res.render('index', { title: 'Express' ,logined:onoff});
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: '登录' });
});
router.get('/reg', function(req, res, next) {
  res.render('reg', { title: '注册' });
});
router.get('/radio', function(req, res, next) {
  res.render('radio', { title: '直播' });
});
router.get('/ask', function(req, res, next) {
  res.render('ask', { title: '点播' });
});
router.get('/sms', function(req, res, next) {
  res.render('sms', { title: '短信登录' });
});
router.get('/all', function(req, res, next) {
  res.render('all', { title: 'Express' });
});
router.get('/ios', function(req, res, next) {
  res.render('ios', { title: 'Express' });
});
router.get('/html', function(req, res, next) {
  res.render('html', { title: 'Express' });
});
router.get('/unity', function(req, res, next) {
  res.render('unity', { title: 'Express' });
});
router.get('/port1', function(req, res, next) {
  var type= req.query.type;
  var name= req.query.name;
  var obj={};
  console.log(type,name);
  if(name=="all"&&type!="all"){
    obj={};
  }else if(name=="all"&&type=="all"){
    obj={};
  }else if(name!="all"&&type=="all"){
    obj={"classtype":name};
  }else{
    obj={"type":type,"classtype":name};
  }
  console.log(obj);
  classmodel.find(obj,function(err,result){
    console.log(result)
    res.send({
      success:1,
      data:result
    });
  });
});


router.post('/login', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  userModel.findOne({user: username,pass: password},function (err,result) {
    if (result) {
      req.session.user = username;
      res.send('1');
      
    }else{
      res.send('0')
    }
  })
});
router.post('/login_out', function(req, res, next) {
    req.session.user = null;
    res.send('1');
})

router.post('/reg',function(req, res, next){
    var username = req.body.username;
    var password = req.body.password;
    userModel.findOne({"user":username},function(err,user){
      if(err){
        return res.send({
          success: 0,
          info: "注册失败"
        })
      }
      console.log(err)
      if(user){
        return res.send({
          success: 0,
          info: "有重名"
        })
      }else{
        userModel.create({
          user: username,
          pass: password  
        },function(err,data){
          if(err){
            return res.send({
              success: 0,
              info: "注册失败"
            })
          }
          return res.send({
            success: 1,
            info: "注册成功"
          })
        })  
      }
    })
})


module.exports = router;



































