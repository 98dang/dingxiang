<template>
    <div class="app-shopcontainer">
        <div class="app-shopheader">
            <div class="mui-input-row mui-search">
			    <input type="search" class="mui-input-clear " placeholder="健康日历 2019">
                <span class="mui-icon mui-icon-clear mui-hidden"></span>
                <span class="mui-placeholder">
                    <span class="mui-icon mui-icon-search"> 
                  
                    </span>
                </span>
		    </div>
            <div class="nav">
                <ul id="dots">
                    <li @click="jumpproducts(1)">丁香周边</li>
                    <li @click="jumpproducts(2)">书籍软件</li>
                    <li @click="jumpproducts(3)">健康用品</li>
                    <li @click="jumpproducts(4)">家底数码</li>
                    <li @click="jumpproducts(5)">母婴</li>
                    <li @click="jumpproducts(6)">家居个户</li>
                    <li @click="jumpproducts(7)">海报</li>
                    <li @click="jumpproducts(8)">软件</li>
                </ul>
            </div>
        </div>
        
        <ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in products" :key="item.id">
				<router-link :to="'/home/deta?id='+item.id">
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
							{{item.title}}{{item.id}}
						<p class='mui-ellipsis'>{{item.span}}</p>
                        <p class='mui-ellipsis'>{{item.price}}丁当</p>
					</div>
				</router-link>
			</li>
        </ul>
        <mt-button type="primary" size="large" @click="getMore" class="more-button">加载更多</mt-button>
        <navfooter-box></navfooter-box>
    </div>
</template>
<script>
    import navfooter from "../sub/navfooter.vue" 
    export default{
       data(){
           return{
               navlist:[],
               products:[],
               pageIndex:0,
               pageSize:5,
               hasMore:true,
               pageCount:2, 
               id:"",
                  
           }
       },
       methods:{
            getNavList(){
                this.$http.get("navList").then(result=>{
                    this.navlist=result.body;
                })
            },
            getMore(){
                this.pageIndex++;
                var p = this.pageIndex;  
                var s = this.pageSize;
                var id = this.$route.params.id;
               this.id=id;
                this.hasMore = this.pageIndex <= this.pageCount;
                if(!this.hasMore){
                    return
                    }
                var url = "products?id="+id+"&pno="+p+"&pageSize="+s; 
                this.$http.get(url).then(result=>{ 
                var row = this.products.concat(result.body.data);
                this.products = row;
                this.pageCount = result.body.pageCount;
                
                });
             },
             getStyle(){
                var id = this.$route.params.id;
                if(this.id=id){
                    var dots=document.getElementById("dots") 
                    dots.children[id-1].style.borderBottom="2px solid red"
                }
             },
            jumpproducts(id){
                
                this.pageIndex++;
                this.$router.push("/home/shop/"+id)
                var p = this.pageIndex;  
                var s = this.pageSize;
                var id = this.$route.params.id;
              
               
                var url = "products?id="+id+"&pno="+p+"&pageSize="+s; 
                this.$http.get(url).then(result=>{
                    this.pageIndex = 0;
                    this.products= [];
                    this.getMore();
                })
                if(this.id=id){
                    var dots=document.getElementById("dots") ;
                    for(var i=0;i<dots.children.length;i++){
                        dots.children[i].style.borderBottom="";
                     }
                    dots.children[id-1].style.borderBottom="2px solid red"
                }
            }
       },
       created(){
           this.getNavList();
           this.getMore();
          
       },
       mounted(){ this.getStyle();},
       components:{
           "navfooter-box":navfooter
       }
    }

</script>
<style>
    .app-shopcontainer .mui-bar.mui-bar-tab .mui-tab-item.mui-shop{
        color:purple;
    }
    .mui-input-row.mui-search .mui-placeholder{
      text-align:left;
    }   
    .mui-table-view .mui-media-object.mui-pull-left {
    line-height: 42px;
    max-width: 63px;
    height: 63px;
    }
    .mui-table-view-cell .mui-media-body{
        font-size:15px;
        color:#000;
    }
    .mui-table-view-cell .mui-media-body p{
        font-size:12px;
    }
    .mui-table-view-cell .mui-media-body p+p{
        color:red;
    }
  .mui-input-row.mui-search .mui-placeholder{
      text-align:left;
  } 
  .mui-input-row.mui-search{
      width:90%;
      margin:0 auto;
      margin-top:6px;
  } 
  body{
      line-height:7px;
      background-color:#fff;
  }
 .app-shopheader .nav>ul{
     list-style:none;
     margin:0 auto;
     display:flex;
    justify-content:space-between;
     width:100%;
     height:100%;
     white-space:nowrap;
     overflow-x:auto;
    padding:0px;
 }
 .app-shopheader .nav>ul>li{
    margin:0 15px;
    font-size:15px;
    display:inline-block;
    height:100%;
 }
.app-shopheader .nav{
    height:45px;
   
    background:#fff;
   
}
.app-container{
    background:#fff;
    padding-top:0;
}
.app-shopheader .nav>ul::-webkit-scrollbar{
   overflow:hidden;  
} 
.more-button{
    margin-bottom:60px;
}
</style>