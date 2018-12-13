<template>
    <div class="app-register">
        <div class="mui-card">
			<div class="mui-card-content">
				<img src="../../img/login-header.png" class="register__forget-pass__img">
                <span class="register__forget-pass__span">|</span>
                <a target="_blank" class="register__forget-pass__register register">注册</a>
			</div>
		</div>
         <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <div class="form-wp">
                        <form method="post" action="#">
                            <div class="form__box">
                                <div class="form__item">
                                    <div class="form__input">
                                        <input v-model="unameval" type="text" name="username" class="j-fv-cell"            maxlength="13" minlength="6" placeholder="用户账号" @blur="uname2" @focus="uname1">
                                    </div>
                                    <div class="vali_alert">
                                        <div class="vali_info">6~13个字符以内的字母、数字或下划线的组合</div>	
                                    </div>
                                </div>
                            </div>
                            <div class="form__box">
                                <div class="form__item form__item__last j-passwordWp">
                                    <div class="form__input">
                                        <input v-model="upwdval" type="password" maxlength="16" minlength="6" class="j-passwordEl" name="userPwd" placeholder="密码" @focus="upwd1()" @blur="upwd2()">
                                    </div>
                                    <div class="vali_alert">
                                        <div class="vali_info">6~16个字符以内的字母、数字或下划线的组合</div>	
                                    </div>
                                </div>
                            </div>
                            <div class="form__agreement">
                                <label>
                                    <input type="checkbox" name="chb" @click="accept()" checked>我已阅读并接受
                                </label>
                                《<a href="http://www.dxy.cn/pages/serviceterms.html">丁香园使用协议</a>》
                            </div>
                            <div class="form__submit">
                                <button class="form__button_submit" type="button" @click="reg($event)">注册</button>
                            </div>
                            <div class="form__link pc_hide">
                                <router-link to="/home/login">登录</router-link>
                            </div>
                        </form>
                    </div>
                    <div class="pc_hide mobile__footer">
                        <p class="p_notice_weixin">遇到问题，请<a href="https://assets.dxycdn.com/app/super_sso/sso/demo/html/wechat.html">关注微信公众号</a>留言</p>
                        <p>© 2000-2018 DXY 版权所有</p>
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
                isRegister:false,
            }
        },
         methods:{
            uname1(){
                var form=document.forms[0];
                var txtName=form.username;
                txtName.parentNode.nextElementSibling.firstElementChild.style.display="block"
            },
             uname2(){
                var u= this.unameval;
                this.$http.post("selectUname",{uname:u}).then(result=>{
                    if(result.body.code ==1){
                        Toast(result.body.msg);
                        this.isRegister=false;
                    }else{
                        Toast(result.body.msg)                        
                    }
                }) ;
                var form=document.forms[0];
                var txtName=form.username;
                var reg=/^\w{6,13}$/;             
                if(reg.test(txtName.value)){
                    txtName.parentNode.nextElementSibling.firstElementChild.style.display="none";                    
                    return true;
                }
                else{
                    txtName.parentNode.nextElementSibling.firstElementChild.style.display="block";
                     txtName.parentNode.nextElementSibling.firstElementChild.style.border="1px solid red";
                      txtName.parentNode.nextElementSibling.firstElementChild.style.background="#ddd";
                      txtName.parentNode.nextElementSibling.firstElementChild.style.color="red";
                       txtName.parentNode.nextElementSibling.firstElementChild.style.paddingLeft="15px"
                    return false;
                }
            },
            upwd1(){
                var form=document.forms[0];
                var txtPwd=form.userPwd;
                txtPwd.parentNode.nextElementSibling.firstElementChild.style.display="block"
            },
            upwd2(){
                var form=document.forms[0];
                var txtPwd=form.userPwd;
                var reg=/^\w{6,16}$/;
              
                if(reg.test(txtPwd.value)){
                    txtPwd.parentNode.nextElementSibling.firstElementChild.style.display="none";
                    return true;
                }
                else{
                    txtPwd.parentNode.nextElementSibling.firstElementChild.style.display="block";
                    txtPwd.parentNode.nextElementSibling.firstElementChild.style.border="1px solid red";
                    txtPwd.parentNode.nextElementSibling.firstElementChild.style.background="#ddd";
                    txtPwd.parentNode.nextElementSibling.firstElementChild.style.color="red";
                    txtPwd.parentNode.nextElementSibling.firstElementChild.style.paddingLeft="15px"
                    return false;
                }
            },
            accept(){
                var form=document.forms[0];
                var chb=form.chb;
                if(chb.checked==false){
                    var btn=chb.parentNode.parentNode.nextElementSibling.firstElementChild;
                    btn.style.background="#ddd";
                    btn.style.pointerEvents="none";
                }
            },
            reg(e){
                var u= this.unameval;
                var p = this.upwdval; 
                if(u.trim().length==0){
                    Toast("用户名不能为空！")
                }
                if(p.trim().length==0&&u.trim().length!=0){
                    Toast("用户密码不能为空！")
                }
                this.$http.post("selectUname",{uname:u}).then(result=>{
                    if(result.body.code ==1 && u.trim().length!=0 && p.trim().length!=0){
                        Toast(result.body.msg);                    
                    }else{this.isRegister=true;}
                }) 
                var form=document.forms[0];
                var txtName=form.username;
                var reg1=/^\w{6,13}$/;
                var txtPwd=form.userPwd;
                var reg2=/^\w{6,16}$/;
                var rName=reg1.test(txtName.value);
                var rPwd=reg2.test(txtPwd.value);
                if(!(rName&&rPwd)){
                    e.preventDefault();
                    console.log(123)
                }else if(this.isRegister){
                    var u= this.unameval;
                    var p = this.upwdval;                  
                    this.$http.post("register",{uname:u,upwd:p}).then(result=>{
                        if(result.body.code ==200){
                            Toast(result.body.msg);
                            this.$router.push("/"); 
                        }else{
                            Toast(result.body.msg)
                        }
                    })
                }
            }
        }
    }
</script>
<style>
    .register__forget-pass__img{
        float:left;
    } 
    .mui-card-content>.register__forget-pass__register.register{
        width:12%;
        margin-top:7px;
    }
    .mui-card-content>.register__forget-pass__span{
       margin-top:5px;
       font-size:27px;  
    }
    .form-wp {
        margin: 20px 0 0;
        padding: 0;
        width: 100%;
    }
    .form__box:first-child {
        margin-top: 0;
        position: relative;
    }
    .form__item {
        height: auto;
    }
    .form__input input {
        width: 100%;
        box-sizing: border-box;
        font-size: 1rem;
        padding: 12px 15px;
        border-bottom-color: #d1d1d1;
        height: auto;
        display: block;
    }
    .form__box {
        margin-top: 0;
        position: relative;
    }
    .form__item {
        height: auto;
        position: relative;
    }
    .form__input {
        background-color: #fff;
        width: 100%;
        box-sizing: border-box;
        position: relative;
        font-size: 16px;
    }
    .form__agreement {
        font-size: 0.5rem;
        text-align: center;
        margin-top: 20px;
        color: #999;
    }
    .form__submit {
        display: block;
        width: auto;
        height: 43px;
        line-height: 43px;
        margin: 15px;
        box-sizing: border-box;
        min-width: 140px;
    }
    .form__button_submit {
    width: 100%;
    font-size: 18px;
    letter-spacing: 3px;
    padding-left: 3px;
    border-radius: 5px;
    color: #fff;
    background-color: #7440d8;
    height: 100%;
    display: block;
    cursor: pointer;
    text-align: center;
}
.form__link.pc_hide{
    font-size:1rem;
}
 .app-container input[type='text'], .app-container input[type='password']{
    margin-bottom:0 !important;
}
.app-register .vali_alert .vali_info{
    display:none;
}
.app-register .vali_alert{
    margin:6px 0px;
    height:18px;
    line-height:18px;           
}
</style>