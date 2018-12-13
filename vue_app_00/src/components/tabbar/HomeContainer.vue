<template>
    <div class="app-homeContainer">
        
        <mt-swipe :auto="4000">
           <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.img_url">
           </mt-swipe-item> 
        </mt-swipe>
        <div class="notice" id="not">
            <div class="notice-title">通知</div>
            <div class="notice-content">
                <p>2019 款健康日历现已上架，数量有限，手慢无！</p>
                <span @click="noticeDisplay()" >x</span>
            </div>            
        </div>
        <ul class="mui-table-view mui-grid-view mui-grid-9" >
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="item in navlist" :key="item.id" @click="jumpproducts(item.id)">
                <a href="#">
		            <img :src="item.img_url">
		            <div class="mui-media-body">{{item.title}}</div>
                </a>
            </li>
		</ul>
        <div class="hot" v-for="hot in hots" :key="hot.id">
            <img :src="hot.img_url">
        </div>
        <div class="shop-title">
            <p>——丁当商城好货推荐——</p>
        </div>
        <div class="shop">
            <img src="../../img/recommend1.jpg">
            <div class="shop1" v-for="shop1 in shops1">
                <img :src="shop1.img_url">
                <p>{{shop1.title}}</p>
                <div>{{shop1.price}}</div>
            </div>
        </div>
        <div class="shop">
            <img src="../../img/recommend2.jpg">
            <div>
            <div class="shop1" v-for="shop2 in shops2">
                <img :src="shop2.img_url">
                <p>{{shop2.title}}</p>
                <div>{{shop2.price}}</div>
            </div></div>
        </div>
        <div class="shop3">
            <img src="../../img/recommend3.png">
        </div>
        <p class="footer">没有更多了</p>
        <navfooter-box></navfooter-box>
    </div>
</template>
<script>
    import navfooter from "../sub/navfooter.vue"
    export default {
        data(){
            return {
                list:[],
                hots:[],
                shops1:[],
                shops2:[],
                commoditys:[],
                navlist:[],
                ids:[]
            }
        },
        methods:{
            getImage(){
                var url="imagelist";
                this.$http.get(url).then(result=>{
                    
                    this.list=result.body;
                })
            },
            getHot(){
                var url="imagehot";
                this.$http.get(url).then(result=>{
                   this.hots=result.body;
                })
            },
            getshops1(){
                var url="imageshop1";
                this.$http.get(url).then(result=>{
                    this.shops1=result.body;
                })
            },
            getshops2(){
                var url="imageshop2";
                this.$http.get(url).then(result=>{
                    this.shops2=result.body;
                })
            },
            getcommoditys(){
                this.$http.get("commoditys").then(result=>{
                    this.commoditys=result.body;
                })
            },
            getNavList(){
                this.$http.get("imageproducts").then(result=>{
                    this.navlist=result.body;
                  
                })
            },
            jumpproducts(id){
                this.$router.push("/home/shop/"+id);
            },
            noticeDisplay(){
                var not=document.getElementById("not");
                not.style.display="none";
            },
            
        },
        created(){
            this.getImage();
            this.getHot();
            this.getshops1();
            this.getshops2();
            this.getcommoditys();
            this.getNavList();
        },
        components:{
           "navfooter-box":navfooter
        }
    }
</script>
<style>
    .app-homeContainer .mui-bar.mui-bar-tab .mui-tab-item.mui-home{
        color:purple;
    }
    .app-container{
        padding-top:8px;
        padding-bottom:0;
        
    }
    .app-homeContainer .mint-swipe{
        height:150px;
    
    }
    .app-homeContainer .mint-swipe .mint-swipe-indicators .mint-swipe-indicator{
        width:20px;
        height:5px;
        border-radius:3px;
    }
    .app-homeContainer .mint-swipe img{
        width:100%;
    }
    .app-homeContainer .notice{
        width:100%;
        height:25px;
        background:#ccc;
        line-height:15px;
        padding:0;
    }
    .app-homeContainer .notice .notice-title{
        border:2px solid red;
        float:left;
        font-size:1px;
        margin-left:5px;
        padding-top:0.5px;
        box-sizing:border-box;
        margin-top:2px;
        border-radius:5px;
        color:red;
    }
    .app-homeContainer .notice-content{
        float:left;
        font-size:5px;
        display:flex;
        margin-left:5px;
        margin-top:4px;
        padding:0;
        margin-bottom:0;
       
    }
    .app-homeContainer .notice-content span{
        margin-left:18px;
        
    }
    .app-homeContainer .notice-content p{
        margin:0;
        padding:0;
    }
    .app-homeContainer .mui-grid-view.mui-grid-9 img{
        width:55px;
        height:55px;
    } 
    .mui-grid-view.mui-grid-9 .mui-col-xs-4{
        width:24.333333%;
    }
    .app-homeContainer .mui-table-view.mui-grid-view.mui-grid-9 .mui-table-view-cell .mui-media-body{
        font-size:12px;
    }
    .app-container .hot{
        margin-top:5px;
        
        
    }
     .app-container .hot img{
        width:48%;
        float:left;
        margin-left:3px;
     }
     .app-container .shop-title{
        width:100%;
        
    }
    .app-container .shop-title p{
        text-align:center;
        line-height:60px;
        margin-bottom:-3px;
    }
    .app-container .shop>img{
        height:100px;
        width:100%;
        border-top-left-radius:7px;
        border-top-right-radius:7px;
    }
   
    .app-container .shop .shop1{
        width:33.3333333%;
        float:left;
        height:15px;
        
    }
    .app-container .shop .shop1>img{
        width:100%;

    }
    .app-container .shop .shop1>p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size:10px;
        color:#000;
    }
    .app-container .shop .shop1>div{
        color:red;
        font-size:13px;
        text-align:center;
        position:relative;
        width:100%;
    }
    .app-container .shop{
        border-radius:7px;
        box-shadow:0  0 10px #000;
        height:290px;
        background:#fff;
        margin-top:10px;
    }
    .app-container .shop:after{
        content:"";
        display:block;
        clear:both;
    }
   .app-container .shop3>img{
        width:100%;
        height:100px;
        border-top-left-radius:7px;
        border-top-right-radius:7px;
   }
   
   .app-container .shop3{
       height:150px;
       margin-top:10px;
       border-radius:7px;
       background:#fff;
       box-shadow:0  0 10px #000;
       margin-bottom:40px;
   }
   .footer{
       width:100%;
       text-align:center;
       margin-bottom:60px;  
   }
</style>