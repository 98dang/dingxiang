<template>
    <div class="app-center">
        <ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src="../../img/yuantiao.jpg">
					<div class="mui-media-body">
						幸福
						<p class='mui-ellipsis'>可换丁当余额 0 </p>
					</div>
				</a>
			</li>
        </ul>
        <div class="cell">
            <div class="cell-item arrow">我的订单</div>
            <div class="cell-item arrow">
                资料详细
            </div>
        </div>
        <div class="divider"></div>
        <div class="cell">
            <div class="cell-item arrow">地址管理</div>
            <div class="cell-item arrow">联系客服</div>
            <div class="cell-item arrow">常见问题</div>
        </div>
        <div class="divider"></div>
        <div class="cell">
            <div class="cell-item arrow">退出登录</div>
        </div>
        <navfooter-box></navfooter-box>
    </div>
</template>
<script>
    import navfooter from "../sub/navfooter.vue"
    export default{
        data(){
            return{
              id:""
            }
        },
      
        methods:{
           
        },
        created(){
            
        },
        components:{
           "navfooter-box":navfooter
        }
    }    
</script>
<style>
    .app-center .mui-bar.mui-bar-tab .mui-tab-item.mui-center{
        color:purple;
    }
   .arrow{
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .arrow::after{
        content:"";
        width:10px;
        height:10px;
        border-top:1px solid #ccc;
        border-right:1px solid #ccc;
        transform:rotate(45deg);
    } 
    .divider{
  height:12px;
  background-color:#f1f1f1;   
}
.cell{
  background-color: #fff;
  font-size:16px;
}
.cell-item{
  border-bottom:1px solid #ddd;
  padding:13px 30px;
}
.app-center .mui-table-view{
    background:#7440d8;
}
</style>
