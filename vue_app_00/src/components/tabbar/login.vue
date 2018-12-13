<template>
    <div class="app-login">
        <div class="mui-card">
			<div class="mui-card-content">
				<img src="../../img/login-header.png" class="register__forget-pass__img">
                <span class="register__forget-pass__span">|</span>
                <a target="_blank" class="register__forget-pass__register register">登录</a>
			</div>
		</div>
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div class="login-wp">
                        <form action="#">
                            <div class="login__content">
                                <div class="login__input_wp">
                                    <div class="J-account-login">
                                        <div class="login__input">
                                            <input v-model="unameval" name="username" value maxlebgth="64" size="18" placeholder="用户名/手机号/邮箱" id="uname">
                                        </div>
                                        <div class="login__input">
                                            <input v-model="upwdval" type="password" name="username" value maxlebgth="64" size="18" placeholder="密码" id="username" style="border:0;">
                                            </div>
                                    </div>
                                </div>
                                <div class="login__agreement">
                                    <label class="form__checkbox">
                                        <input type="checkbox" check>记住我
                                    </label>
                                    <span>
                                        <a class="J-3g-login-method">手机验证码登录</a>
                                    </span>
                                </div>
                                <div class="form__button">
                                    <button type="button" class="button" @click="btnSubmit">登录</button>
                                </div>
                            </div>
                            <div class="form__third">
                                <h3 class="third__head">
                                    <span>社交账号登录</span>
                                </h3>
                                <div class="third__content">

                                </div>
                            </div>
                            <div class="form__link pc__hide register__forget-pass">
                                <router-link to="/home/register" class="register__forget-pass__register">注册</router-link>
                                <span class="register__forget-pass__span">|</span>
                                <a class="register__forget-pass__pass">忘记密码</a>
                            </div>
                        </form>
                    </div>
                    <div class="pc_hide mobile__footer">
                        <p>注册遇到问题，请
                            <a href="https://auth.dxy.cn/app/super_sso/sso/demo/html/wechat.html">关注微信公众号</a>留言
                        </p>
                        <p>© 2000-2018 DXY 版权所有</p>
                    </div>
				</div>
			</div>
		</div>
        
    </div>
    </div>
</template>
<script>
    import {Toast} from "mint-ui"
    export default{
        data(){
            return{
                unameval:"",
                upwdval:"",
            }
        },
        methods:{
            btnSubmit(){
                var u= this.unameval;
                var p = this.upwdval;
                this.$http.get("login?uname="+u+"&upwd="+p).then(result=>{
                    if(result.body.code ==1){
                        Toast(result.body.msg);
                        this.$router.push("/"); 
                    }else{
                        Toast(result.body.msg)
                    }
                })
            }
        }
    }
</script>
<style>
.mui-card-content>img{
    margin-left:5px;
    width:32%;
} 
.login-wp {
    margin-top: 12px;
    height: auto;
    width: 100%;
    padding: 0;
    border: none;
    position: relative;
    float: right;
}
form {
    position: relative;
    display: block;
}
.login__content {
    margin-top: 12px;
    display: block;
    overflow: hidden;
}
.login__input_wp {
    border: 1px solid #d1d1d1;
}
.login__input {
    background-color: #fff;
    padding-left: 15px;
    padding-top: 10px;
    position: relative;
}
.login__input input {
    border-bottom: 1px solid #e7e7e7 !important;
    display: block;
    width: 100%;
    line-height: 40px;
    height: 40px;
    padding-left: 15px;
    box-sizing: border-box;
    outline: 0;
    background-color: #fff;
    border: none;
    border-radius: 0;
    font-size: 100%;
    margin: 0;
    padding: 0;
}
.input__btb1 {
    border-bottom: 1px solid #e7e7e7!important;
}
.login__agreement {
     line-height: 46px;
    overflow: hidden;
}
.form__checkbox {
    float: none;
    cursor: pointer;
}
input[type=checkbox] {
    vertical-align: middle;
    width: 16px;
    height: 16px;
    cursor: pointer;
}
.mobile__change-method {
    display: initial;
}
.login__agreement a {
    color: #333;
    float: right;
}
.c7440d8 {
    color: #7440d8!important;
}
.form__button, .login__agreement {
    padding: 0 15px;
}
.button {
    width: 100%;
    display: block;
    height: 45px;
    line-height: 33px;
    border-radius: 3px;
    color: #fff;
    font-size: 16px;
    background-color: #7440d8;
    cursor: pointer;
    outline: 0;
    border: none;
}
.form__third {
    margin-top: 28px;
}
.third__head {
    position: relative;
    height: 1px;
    background-color: #dbdbdb;
}
.third__head span {
    background-color: #f3f3f3;
    position: absolute;
    left: 50%;
    margin-left: -52px;
    padding: 0 10px;
    top: -10px;
}
.third__content {
    text-align: center;
    margin-top: 15px;
    height:46px;
}
.pc_hide {
    display: block;
}
.register__forget-pass {
    padding-left: 0;
    font-size: 0;
    letter-spacing: 1px;
    overflow: hidden;
}
.form__link {
    margin-top: 10px;
    font-size: 1.5rem;
    margin-bottom: 10px;
    letter-spacing: 3px;
    padding-left: 3px;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
}
.register__forget-pass__register {
    display: inline-block;
    width: 46%;
    float: left;
    text-align: right;
    font-size: 1rem;
}
.app-login a {
    color: #50469f !important;
}
.register__forget-pass__span {
    display: inline-block;
    width: 8%;
    text-align: center;
    font-size: 1rem;
    float: left;
    color: #ccc;
}
.register__forget-pass__pass {
    display: inline-block;
    width: 46%;
    text-align: left;
    font-size: 1rem;
    float: left;
    color: #333 !important;
}
h3>span{
    font-size:15px;
    color:#ccc;
}
.mobile__footer {
    width: 100%;
    color: #999;
    text-align: center;
    line-height: 24px;
    font-size: 1.2rem;
    margin-top: 20px;
}

</style>


