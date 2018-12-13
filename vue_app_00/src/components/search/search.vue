<template>
    <div id="search">
        <!--搜索栏-->
        <div id="searchNav">
            <div>
                <i class="mui-icon mui-icon-search"></i>
                <input type="text" placeholder="搜索书籍、番剧、UP主或AV号" v-model="fuzzySearch">
            </div>
            <div @click="goindex">取消</div>
        </div>
        <!--推荐-->
        <div id="hotInfo">
            <div>大家都在搜</div>
            <div>
                <div>金马奖</div>
                <div>毒液</div>
                <div>EXO</div>
                <div>我是大哥大</div>
                <div>明日之后</div>
                <div>哈利波特</div>
                <div>你和我的倾城时光</div>
            </div>
        </div>
        <!--历史记录-->
        <div id="history">a</div>
    </div>
</template>
<script>
    

    export default {
        data() {
            return {
                id: "",
                video_title: "",
                video_author: "",
                fuzzySearch: ""
            }
        },
        watch: {
            fuzzySearch() {
                
                //var id = this.$route.params.id;
                //var video_title = this.$route.params.video_title;
                //var video_author = this.$route.params.video_author;
                 this.$http.post("bili_search",{video_title:this.fuzzySearch}).then(result=>{
                    console.log(result)
                })
            }
        },
        methods: {
            goindex() {
                this.$router.push("/");
            }
        }
    }
</script>
<style scoped>
    #searchNav {
        display: flex;
        margin: 1.5% 3%;
        height: 33px;
    }

    #searchNav>div:first-child {
        width: 87%;
        background: #F4F4F4;
        border-radius: 5px;
        padding: 1% 3%;
        display: flex;
    }

    #searchNav>div:nth-child(2) {
        width: 13%;
        font-size: 0.8rem;
        text-align: center;
        color: #fb7299;
        line-height: 2rem;
    }

    #searchNav>div:first-child i {
        color: #BBBBBB;
        margin-top: 0.5%;
    }

    #searchNav>div:first-child input {
        border: 0;
        background: 0;
        margin: 0;
        padding: 0;
        height: 100%;
        padding-left: 1%;
        font-size: 0.8rem;
        color: #808080;
    }

    #searchNav>div:first-child input::placeholder {
        color: #999999;
    }

    #hotInfo {
        margin: 5% 0;
        padding: 0 4%;
    }

    #hotInfo>div:first-child {
        font-size: 0.8rem;
        color: #808080;
    }

    #hotInfo>div:nth-child(2) {
        height: auto;
        overflow: hidden;
    }

    #hotInfo>div:nth-child(2)>div {
        border: 1px solid #CCCCCC;
        font-size: 0.9rem;
        color: #505050;
        border-radius: 20px;
        padding: 1.5% 3%;
        margin: 2% 1%;
        float: left;
    }
</style>
