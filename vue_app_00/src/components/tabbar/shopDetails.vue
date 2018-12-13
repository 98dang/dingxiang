<template>
    <div class="app-details">
        <mt-swipe :auto="4000">
           <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.img_url">
           </mt-swipe-item> 
        </mt-swipe>
        <div class="mui-card">
			<div class="mui-card-content bot_dasheed">
				<div class="mui-card-content-inner tilte-deta" v-for="item in listsales" :key="item.id">
					<p id="title_p">{{item.title}}</p>
					<div class="mui-card-footer">
				        <span class="mui-card-link price">{{item.price}}丁当</span>
				        <span class="mui-card-link">销量：{{item.sales}}件</span>
			        </div>
				</div>
			</div>
			<div class="mui-card-footer">
                <div class="express">
                    <img src="../../img/circle_success.png">
				    <span class="mui-card-link">京东发货</span>
                </div>
				 <div class="express">
                    <img src="../../img/circle_success.png">
				    <span class="mui-card-link">包邮</span>
                </div>
                 <div class="express">
                    <img src="../../img/circle_success.png">
				    <span class="mui-card-link">15天售后期</span>
                </div>
			</div>
		</div>
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-footer arrow" @click="showCart()">
				    <p class="mui-card-link" >数量规格</p>
			    </div>
			</div>
		</div> 
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<ul class="photo-list">
                        <li v-for="item in detailsimg" :key="item.id">
                            <img v-lazy="item.img_url1">
                        </li>
                    </ul>
				</div>
			</div>
		</div> 
        <div id="footer" class="box-between main-nav bg-white">
            <div class="footer-icon">
                <router-link to="/home" id="icon-home"><span class="mui-icon mui-icon-home"></span></router-link>
            </div>
            <div >
                <button class="btn btn-lg btn-no-radius btn-primary" @click="showCart()">立即购买</button>
            </div>
        </div>  
        <div class="modal-container modal-buy" id="vis">
            <div class="mask" id="opc"></div>
            <div class="modal" id="vis_bot"> 
                <div class="modal-header">
                    <div class="order-product">
                        <div class="product-img">
                            <img :src="shimg">
                        </div>
                        <div class="product-info">
                            <p>{{pc_price}}元</p>
                            <p>已选择:{{selected}}</p>
                        </div>
                    </div>
                    <a id="icon-close"><span class="mui-icon mui-icon-close" @click="hideCart()"></span></a>
                </div>
                <div class="modal-body">
                    <div class="selectPanel">
                        <p v-for="item in spec" :key="item.id" class="sp_co"  >{{item.spec}}</p>
                        <div class="btn-wrap-group" id="smDiv">
                            <button class="btn btn-sm btn-disable" type="button"  v-for="item in css" :key="item.id" @click="jumpcss(item.id)">{{item.span}}</button>
                        </div>
                        <div class="product_will_num">
                            <div class="sp_co">数量</div>
                            <div>
                                <span class="sp_co">库存{{pc_count}}件</span>
                                <div class="mui-numbox">
					                <button class="mui-btn mui-btn-numbox-minus" type="button" @click="goodSub()">-</button>
					                <input class="mui-input-numbox" type="number" v-model="n"/>
					                <button class="mui-btn mui-btn-numbox-plus" type="button" @click="goodAdd()">+</button>
				                </div>
                            </div>
                        </div>
                        <button class="btn btn-lg btn-disable" id="lgBtn">立即购买</button>
                    </div>
                </div>
                <div class="modal-footer"></div>
            </div>
        </div>  
    </div>
</template>
<script>
    export default{
        data(){
            return{
                list:[],
                detailsimg:[],
                n:1,
                listsales:[],
                id:this.$route.query.id,
                showimg:[],
                css:[],
                pc:[],
                spec:[],
                shimg:"",
                pc_count:"",
                pc_price:"",
                selected:""
            }
        },
        methods:{
            getImage(){
                 var id=this.id;
                var url="deta_img_swei?id="+id;
                this.$http.get(url).then(result=>{
                    this.list=result.body;
                })
            },
            getDetails(){
                var id=this.id;
                this.$http.get("getDetails?id="+id).then(result=>{
                    this.listsales=result.body;
                })
            },
             getDetailsImage(){
                 var id=this.id;
                this.$http.get("exp_img?id="+id).then(result=>{
                    this.detailsimg = result.body;
                })
            },
            getShowImage(){
                 var id=this.id;
                this.$http.get("show_img?id="+id).then(result=>{
                    this.showimg = result.body;
                    this.shimg=this.showimg[0].img_url;
                   
                    //this.shimg=this.showimg[0].id;
                    //console.log(this.shimg)
                })
            },
            getCss(){
                 var id=this.id;
                this.$http.get("css?id="+id).then(result=>{
                    this.css = result.body;    
                })
            },
            getPC(){
                 var id=this.id;
                this.$http.get("p_c?id="+id).then(result=>{
                    this.pc = result.body;
                    this.pc_price=this.pc[0].price;
                    this.pc_count=this.pc[0].count;
                })
            },
            getSpec(){
                 var id=this.id;
                this.$http.get("spec?id="+id).then(result=>{
                    this.spec = result.body;
                    
                })
            },
            jumpcss(i){
               var id=this.id;
                this.$http.get("show_img?id="+id).then(result=>{
                    this.showimg = result.body;
                    this.shimg=this.showimg[i-1].img_url; 
                    console.log(this.shimg)
                });
                this.$http.get("p_c?id="+id).then(result=>{
                    this.pc = result.body;
                    this.pc_price=this.pc[i-1].price;
                    this.pc_count=this.pc[i-1].count;
                }); 
                this.$http.get("css?id="+id).then(result=>{
                    this.css = result.body;
                    this.selected=this.css[i-1].span    
                });
                var smDiv=document.getElementById("smDiv")
               for(var j=0;j<smDiv.children.length;j++){
                        smDiv.children[j].style.background="";
                        smDiv.children[j].style.color="#312d2d";
                     }
                var smBtn=smDiv.children[i-1]
                smDiv.children[i-1].style.color="#fff"
                smBtn.style.background="#6b76db";
                var lgBtn=document.getElementById("lgBtn")
                lgBtn.style.background="#6b76db";
                lgBtn.style.color="#fff";
                lgBtn.style.pointerEvents="auto";
            },
            showCart(){
                var vis=document.getElementById("vis");
                var bot=document.getElementById("vis_bot");
                var opc=document.getElementById("opc");
                vis.style.visibility="visible";
                vis.style.pointerEvents="auto";
                bot.style.bottom=0;
                opc.style.opacity=0.8;
            },
            hideCart(){
                var vis=document.getElementById("vis");
                var bot=document.getElementById("vis_bot");
                var opc=document.getElementById("opc");
                vis.style.visibility="hidden";
                vis.style.pointerEvents="none";
                bot.style.bottom="-"+100+"%";
                opc.style.opacity=0;
            },
            goodAdd(){
                if(this.n<this.pc_count){
                    this.n++;
                }
            },
            goodSub(){
                if(this.n>1){
                    this.n--;
                }
            },

        },
        created() {
            this.getImage();
            this.getDetailsImage();
            this.getDetails();
            this.getCss();
            this.getSpec();
            this.getShowImage();
            this.getPC();
        },
    }
</script>
<style>
    #title_p{
        margin-bottom:0;
        margin-top:10px;
        font-size:18px;
        color:#000;
    }
    .sp_co{
        color:#303034;
        font-size: 14px;
    }
    #footer>div>.btn.btn-lg{
        margin-bottom:0;
    }
    .modal-body>.selectPanel>.btn-disable {
        pointer-events: none;
        color: #e2e2e2;
        border-color: #e2e2e2;
    }
    .price{
        color:red;
    }
    .express>img{
        width:25px;
    }
    .express{
        display:flex;
    }
   .app-details .mint-swipe{
        height:375px;
    
    }
    .app-details .mint-swipe .mint-swipe-indicators .mint-swipe-indicator{
        background:orange;
    }
    .app-details .mint-swipe img{
        width:100%;
        height:100%;
    } 
    .mui-card>.mui-card-footer:before {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 0px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
}
.bot_dasheed{
    border-bottom:1px dashed #ddd;
}
.bot_dasheed>.tilte-deta{
    padding:0 16px;
}
 .mui-card>.mui-card-content>.mui-card-content-inner>.mui-card-footer:before {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 0px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
}

.mui-card .mui-card-content .mui-card-content-inner .mui-card-footer{
    padding-left:0;
    padding-right:0;
}
.photo-list{
   list-style:none;
   background:#333;
   padding-left:0;
 }
 .photo-list li img{  
   width:100%;
   
 }
 .photo-list li img[lazy=loading]{
   width:100%;
   height:100px;
   margin:auto;
 }
 body .mui-card .mui-card-content .mui-card-content-inner .photo-list{
   line-height: 10px !important; 
 }
 .bg-white {
    background-color: #fff;
}
.box-between {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.box-between {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.main-nav {
    position: fixed;
    bottom: 0;
    z-index: 25;
    width: 100%;
    max-width: 768px;
    color: #959595;
    font-size: 0.1rem;
    border-top: 1px solid #e1e1e1;
}
.btn.btn-primary {
    background: #6b76db;
    border-color: #6b76db;
    color: #ffffff;
}
.btn.btn-lg {
    width: 100%;
    padding: 0.9rem;
    font-size: 0.3rem;
}
.btn.btn-no-radius {
    border-radius: 0;
}
.btn {
    display: inline-block;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid #b8b8b8;
    padding: 0.1rem 0.13rem;
    font-size: 0.15rem;
    border-radius: 4px;
    background: #ffffff;
    color: #565656;
    line-height: 1;
    text-align: center;
    box-sizing: border-box;
}
.footer-icon{
    padding-left:20px;
}
.modal-container {
    visibility:hidden;
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    bottom:0;
}
.mask {
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.6);
    position: absolute;
    top: 0;
    left:0;
    z-index: 9;
    opacity: 0;
    transition: all .15s;
}
.modal {
    position: fixed;
    right: 0;
    bottom:-100%;
    left: 0;
    width: 100%;
    z-index: 100;
    background-color: #fff;
    -webkit-transition: all 0.15s;
    transition: all 0.15s;
}
.modal-buy .modal-header {
    display: flex;
    padding: 19px;
    text-align: left;
}
.modal .modal-header {
    border-bottom: 1px solid #f8f7fa;
}
.modal .modal-header .order-product {
    width: 100%;
    padding: 0;
    display: flex;
    background-color: #fff;
    -webkit-box-align: center;
    align-items: center;
}
.modal-buy .product-img {
    width: 3.5rem;
    height: 3.5rem;
    text-align: center;
    border: 1px solid rgba(213, 213, 213, 0.3);
    border-radius: 4px;
    background-color: #f5f5f5;
    overflow: hidden;
}
img {
    width: 100%;
}
.order-product .product-info {
    -webkit-box-flex: 1;
    flex: 1;
    margin-left: 1rem;
}
.modal .modal-header .price {
    color: #dd4848;
    font-size: 0.15rem;
}
.order-product .price {
    display: block;
    color: #dd4848;
}
.order-product .prop, .order-product .count {
    color: #959595;
}
.modal .modal-header .modal-close {
    position: absolute;
    top: 12px;
    right: 14px;
    padding: 4px;
}
.icon-sm {
    width: 0.18rem;
    height: 0.18rem;
}
.icon-close {
    background-position: -146px -8px;
}
.modal .modal-body {
    padding:5px 18px;
    overflow-y: auto;
}
.selectPanel {
    background-color: #fff;
}
.btn-wrap-group {
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: start;
    justify-content: flex-start;
}
.btn.btn-wrap-group .btn {
    margin-right: 10px;
    margin-bottom: 13px;
}
.app-details .btn.btn-sm {
    min-width: 3.5rem;
    padding: 0.2rem;
    font-size: 0.1rem;
    text-align: center;
}
.btn.btn-sm.btn-disable{
    color:#312d2d;
}
.btn {
    display: inline-block;
    -webkit-appearance: none;
    outline: 0;
    user-select: none;
    border: 1px solid #b8b8b8;
    border-radius: 4px;
    background: #ffffff;
    line-height: 1;
    box-sizing: border-box;
    margin-bottom:5px;
    margin-right:5px;
}
.product_will_num {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-bottom: 1rem;
    vertical-align:middle;
}
.number-wp {
    font-size: 0px;
    vertical-align: middle;
    display: inline-block;
    height: 25px;
    text-align: center;
}
.number-wp .number-btn-left {
    border-right: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}
.number-wp .number-btn-left, .number-wp .number-btn-right {
    width: 30px;
    height: 100%;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #ddd;
    vertical-align: middle;
}
.number-wp input[type="number"] {
    width: 40px;
    height: 100%;
    padding: 3px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 0;
    vertical-align: middle;
    -webkit-appearance: textfield;
}
input{
    font-size: 0.13rem;
}
.number-wp .number-btn-right {
    border-left: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}
.modal .modal-footer {
    padding: 0 18px 18px;
}
#icon-close{
    color:#ccc;
}
.app-details .mui-numbox {
    height:30px !important;
}
.product-info>p{
    margin-bottom:0;
}
.product-info>p:first-child{
    color:red;
}
</style>