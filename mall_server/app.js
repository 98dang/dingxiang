const express=require("express");

const pool=require("./pool");
var app=express();
const cors =require("cors");
app.use(cors({
  origin:["http://127.0.0.1:3001","http://localhost:3001"],
  credentials:true  
}));
app.use(express.static(__dirname+"/public"));
app.listen(3000);
app.get("/imagelist",(req,res)=>{
    var obj=[
        {id:1, img_url:"http://127.0.0.1:3000/img/banner1.png"},
        {id:2, img_url:"http://127.0.0.1:3000/img/banner2.png"},
        {id:3, img_url:"http://127.0.0.1:3000/img/banner3.jpg"},
        {id:4, img_url:"http://127.0.0.1:3000/img/banner4.jpg"},
        {id:5, img_url:"http://127.0.0.1:3000/img/banner5.png"},
        {id:6, img_url:"http://127.0.0.1:3000/img/banner6.jpg"},
    ];
    res.send(obj)
});
app.get("/imagehot",(req,res)=>{
    var obj=[
        {id:1, img_url:"http://127.0.0.1:3000/img/hot1.jpg"},
        {id:2, img_url:"http://127.0.0.1:3000/img/hot2.jpg"},
    ];
    res.send(obj)
});
app.get("/imageproducts",(req,res)=>{
    var obj=[
        {id:1, img_url:"http://127.0.0.1:3000/img/menu1.png",title:"丁香周边"},
        {id:2, img_url:"http://127.0.0.1:3000/img/menu7.png",title:"书籍软件"},
        {id:3, img_url:"http://127.0.0.1:3000/img/menu2.png",title:"健康用品"},
        {id:4, img_url:"http://127.0.0.1:3000/img/menu3.png",title:"家电数码"},
        {id:5, img_url:"http://127.0.0.1:3000/img/menu6.png",title:"母婴"},
        {id:6, img_url:"http://127.0.0.1:3000/img/menu5.png",title:"家居个户"},
        {id:7, img_url:"http://127.0.0.1:3000/img/menu4.png",title:"海报"},
        {id:8, img_url:"http://127.0.0.1:3000/img/menu8.png",title:"丁香通精选"},
    ];
    res.send(obj)
})
app.get("/imageshop1",(req,res)=>{
    var obj=[
        {id:1, img_url:"http://127.0.0.1:3000/img/shop1.png",title:"松下(Panasonic)电子血压计 家用上臂式血压器EW3106(新老包装随机发货)",price:"2388丁当"},
        {id:2, img_url:"http://127.0.0.1:3000/img/shop2.png",title:"三诺(SANNUO)血糖仪加用安稳免调码100支瓶装试调套装",price:"1668丁当"},
        {id:3, img_url:"http://127.0.0.1:3000/img/shop3.png",title:"有品(PICOOC)Mini白色智能体脂秤",price:"300丁当+74元"},
    ];
    res.send(obj)
})
app.get("/imageshop2",(req,res)=>{
    var obj=[
        {id:1, img_url:"http://127.0.0.1:3000/img/shop4.png",title:"小猪佩奇Pappa Pig粉红小妹佩佩猪 毛绒玩具",price:"1380丁当"},
        {id:2, img_url:"http://127.0.0.1:3000/img/shop5.png",title:"小米(MI)米兔故事机mini",price:"588丁当+100元"},
        {id:3, img_url:"http://127.0.0.1:3000/img/shop6.png",title:"活石G6000有声挂面22面充电板 儿童看图识数字认知故事书",price:"780丁当"},
    ];
    res.send(obj)
})
app.get("/navList",(req,res)=>{
    var obj=[
        {id:1,title:"丁香周边"},
        {id:2,title:"书籍软件"},
        {id:3,title:"健康用品"},
        {id:4,title:"家底数码"},
        {id:5,title:"母婴"},
        {id:6,title:"家居个户"},
        {id:7,title:"海报"},
        {id:8,title:"丁香通精品"},
        {id:9,title:"软件"},
    ];
    res.send(obj)
});
app.get("/commoditys",(req,res)=>{
    var sql="SELECT id,name FROM mall_commoditys";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send(result)
    })
});
app.get("/products",(req,res)=>{
    var cid=parseInt(req.query.id);
    var pno = req.query.pno;            
    var pageSize = req.query.pageSize;
    var sql = " SELECT count(id) as c FROM mall_products";
    sql +=" WHERE cid = ?";
    var obj = {};      
    var progress = 0;  
    pool.query(sql,[cid],(err,result)=>{
      if(err)throw err;
      var c = Math.ceil(result[0].c/pageSize);
      console.assert(obj);
      obj.pageCount = c;
      progress+=50;
      if(progress==100){
        res.send(obj);
       }
    });
    var sql = " SELECT id,img_url,title,span,price";
     sql += " FROM mall_products";
     sql += " WHERE cid = ?"
     sql += " LIMIT ?,?";
    var offset = parseInt((pno-1)*pageSize);   
    pageSize = parseInt(pageSize)
    pool.query(sql,[cid,offset,pageSize],(err,result)=>{
        if(err)throw err;
            obj.data = result;
            progress+=50;
            if(progress==100){
            res.send(obj);
        }
    });
});

app.get("/login",(req,res)=>{
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    var sql=" select count(id) as c from mall_users";
    sql+=" where uname=? and upwd=md5(?)" ;
    pool.query(sql,[uname,upwd],(err,result)=>{
      if(err)throw err;
      if(result[0].c==0){
        res.send({code:-1,msg:"用户或密码错误"});
      }else{
        res.send({code:1,msg:"登录成功"});
      }
  
    })
});
const qs=require("querystring");
app.post("/register",(req,res)=>{     
    req.on("data",(buf)=>{
        var str=buf.toString();
        var obj=JSON.parse(str);
        var uname=obj.uname; 
        var upwd=obj.upwd;
        var sql='INSERT INTO mall_users (uname,upwd) VALUES(?,?)';
        pool.query(sql,[uname,upwd],(err,result)=>{
            if(err) throw err;
	        if(result.affectedRows>0){
	            res.send({code:200,msg:'注册成功'});
	        }else{
	            res.send({code:301,msg:'注册失败'})
	        }
        });
    })   
});
app.post("/selectUname",(req,res)=>{
    req.on("data",(buf)=>{
        var str=buf.toString();
        var obj=JSON.parse(str);
        var uname=obj.uname;
        var sql="select * from mall_users where uname=?";
        pool.query(sql,[uname],(err,result)=>{
            if(err) throw err;
            if(result.length>0){
                res.send({code:1,msg:'用户名已存在！'});
            }else{
                res.send({code:0,msg:'用户名可用！'})
            }
        });
    });
});
app.get("/getDetails",(req,res)=>{
    var sid=parseInt(req.query.id);
    var sql = " SELECT id,title,price,sales FROM mall_detail_shop";
    sql +="  WHERE sid = ?"; 
    pool.query(sql,[sid],(err,result)=>{
        if(err)throw err;
        res.send(result);
    }); 
});
app.get("/deta_img_swei",(req,res)=>{
    var ewid=parseInt(req.query.id);
    var sql = " SELECT id,img_url FROM mall_detail_sweiper_img";
    sql +=" WHERE ewid = ?"; 
    pool.query(sql,[ewid],(err,result)=>{
        if(err)throw err;
        res.send(result);
    }); 
});
app.get("/exp_img",(req,res)=>{
    var esid=parseInt(req.query.id); 
    var sql = " SELECT id,img_url1 FROM mall_detail_explain_img";
    sql +="  WHERE esid = ?"; 
    pool.query(sql,[esid],(err,result)=>{
        if(err)throw err;
        res.send(result);
    });    
});
app.get("/show_img",(req,res)=>{
    var shid=parseInt(req.query.id); 
    var sql = " SELECT id,img_url FROM 	mall_detail_show_img";
    sql +="  WHERE shid = ?"; 
    pool.query(sql,[shid],(err,result)=>{
        if(err)throw err;
        console.log(result);
        res.send(result);
    });    
});
app.get("/css",(req,res)=>{
    var csid=parseInt(req.query.id); 
    var sql = " SELECT id,span FROM mall_detail_css";
    sql +="  WHERE csid = ?"; 
    pool.query(sql,[csid],(err,result)=>{
        if(err)throw err;
        res.send(result);
    });    
});
app.get("/p_c",(req,res)=>{
    var pcid=parseInt(req.query.id); 
    var sql = " SELECT id,price,count FROM 	mall_detail_p_c";
    sql +="  WHERE pcid = ?"; 
    pool.query(sql,[pcid],(err,result)=>{
        if(err)throw err;
        res.send(result);
    });    
});
app.get("/spec",(req,res)=>{
    var spid=parseInt(req.query.id); 
    var sql = " SELECT id,spec FROM 	mall_detail_spec";
    sql +="  WHERE spid = ?"; 
    pool.query(sql,[spid],(err,result)=>{
        if(err)throw err;
        res.send(result);
    });    
});
app.get("/bili_search",(req,res)=>{
    req.on("data",(req,res)=>{
        var str=buf.toString();
        var obj=JSON.parse(str);
        var id=obj.id;
        var video_title=obj.video_title;
        var video_author=obj.video_author;
        var sql="SELECT id,video_title,video_author FROM bili_video_introduction WHERE id=? OR video_title LIKE '%?%' OR video_author LIKE '%?%'"
        pool.query(sql,[id,video_title,video_author],(err,result)=>{
        if(err) throw err;
        res.send(result);
        })
    })
})
  
