<template>
    <div class="app-footerNav">
        <nav class="mui-bar mui-bar-tab" id="nav">
		    <router-link class="mui-tab-item  mui-home" to="/home">
			    <span class="mui-icon mui-icon-home"></span>
			    <span class="mui-tab-label">推荐</span>
		    </router-link>
		    <a class="mui-tab-item mui-shop" href="#tabbar-with-chat" @click="jumpproducts(1)">
			    <span class="mui-icon mui-icon-extra-order mui-icon-extra"></span>
			    <span class="mui-tab-label">类别</span>
		    </a>
		    <a class="mui-tab-item mui-center" href="#tabbar-with-contact" @click="jumpPersonal()">
			    <span class="mui-icon mui-icon-contact"></span>
			    <span class="mui-tab-label">我的</span>
		    </a>	
	    </nav>   
    </div>
</template>
<script>
    export default{
        data(){
            return{
              
            }
        },      
        methods:{
           jumpproducts(id){
                this.$router.push("/home/shop/"+id);
            },
            jumpPersonal(){
                this.$router.push("/home/center/");          
            } ,
        },
        created(){
            
        }
    }
</script>
<style>
    .app-footerNav .mui-tab-item{
        color:#929292;
    }
    .app-footerNav .mui-bar-tab .mui-tab-item.mui-active {
        color: #007aff;
    }
</style>