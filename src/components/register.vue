<template>
    <div class="login-wrapper">
        <div class="login-form">
            <div class="head">
                <span>注册</span>
            </div>
            <div class="body">
                <form>
                    <div>
                        <span :class="{warning:vailForm.loginname.warning}">{{vailForm.loginname.message}}</span>
                        <input type="text" autocomplete="off" v-model="form.loginname" :placeholder="form.loginnamePlaceholder" @blur="vail('loginname')" @focus="focus('loginname')">
                    </div>
                    <div style="position:relative">
                        <span>{{vailForm.password.message}}</span>
                        <input type="password" autocomplete="off" v-model="form.password" :placeholder="form.passwordPlaceholder" @blur="vail('password')" @focus="focus('password')">
                        <label></label>
                    </div>
                    <div style="position:relative">
                        <span>{{vailForm.vailCode.message}}</span>
                        <input type="text" v-model="form.vailCode" name="vailCode" :placeholder="form.vailCodePlaceholder" @blur="vail('vailCode')" @focus="focus('vailCode')">
                        <button :class="{disabled:disabled}">发送验证码</button>
                    </div>
                </form>
            </div>
            <div class="foot">
                <button :class="{disabled:disabled}" :disabled="disabled==true" @click="submit">登录</button>
                <div style="margin-bottom: 10px;">
                    <span class="checkBox" :class="{agree:agree}" @click="toggle" ></span>&nbsp;<span>我已阅读并同意</span><span style="color:#0EB4FA">《睿云用户使用协议》</span>
                </div>
                <div>
                    <router-link to="/login"><span style="color:#0EB4FA">已有帐号点击登录</span></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import regExp from '../util/regExp'
    var messageMap = {
        loginname:{
            placeholder:'登录邮箱',
            errorMessage:'请输入正确的邮箱'
        },
        password:{
            placeholder:'请输入至少8位包含字母与数字的密码',
        },
        vailCode:{
            placeholder:'请输入您收到的验证码',
        },
    }
    export default{
        data(){
            return {
                form:{
                    loginname:'',
                    password:'',
                    vailCode:'',
                    loginnamePlaceholder:'登录邮箱',
                    passwordPlaceholder:'请输入至少8位包含字母与数字的密码',
                    vailCodePlaceholder:'请输入您收到的验证码',
                },
                vailForm:{
                    loginname:{
                        message:'',
                        warning:false
                    },
                    password:{
                        message:'',
                        warning:false
                    },
                    vailCode:{
                        message:'',
                        warning:false
                    },
                },
                agree:true
            }
        },
        created(){

        },
        methods:{
            vail(field){
                var text = this.form[field];
                if(text==''){
                    console.log(messageMap[field].placeholder);
                    this.vailForm[field].message = ''
                    this.form[field+'Placeholder'] = messageMap[field].placeholder
                    return
                }

                var isLegal = field=='loginname'?regExp.emailVail(text):field=='password'?regExp.passwordVail(text):true;

                if(!isLegal){
                    this.vailForm[field].message = messageMap[field].errorMessage;
                    this.vailForm[field].warning = true
                }else{
                    this.vailForm[field].message = messageMap[field].placeholder;
                    this.vailForm[field].warning = false
                }
            },
            focus(field){
                var text = this.form[field];
                this.form[field+'Placeholder']=''
                if(text==''){
                    this.vailForm[field].message = messageMap[field].placeholder
                    return
                }
                var isLegal = field=='loginname'?regExp.emailVail(text):field=='password'?regExp.passwordVail(text):true;

                if(!isLegal){
                    this.vailForm[field].message = messageMap[field].errorMessage;
                    this.vailForm[field].warning = true
                }else{
                    this.vailForm[field].message = messageMap[field].placeholder;
                    this.vailForm[field].warning = false
                }
            },
            toggle(){
                this.agree = !this.agree;
            },
            submit(){
                alert('submit')
            }
        },
        computed:{
            disabled(){
                return !(this.form.loginname&&this.form.password&&this.form.vailCode&&this.agree)
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    .login-wrapper{
        position: absolute;
        top: 70px;
        bottom: 0px;
        width: 100%;
        background-image: linear-gradient(-180deg, #4481EB 27%, #04BEFE 100%);
        .login-form{
            width:421px;
            height:85%;
            position:absolute;
            top:10%;
            left:50%;
            max-height:541px;
            background: #FFFFFF;
            border: 1px solid rgba(161,161,161,0.00);
            box-shadow: 0 2px 24px 0 #4990E2;
            -webkit-transform: translate(-50%,0%);
            -moz-transform: translate(-50%,0%);
            -ms-transform: translate(-50%,0%);
            -o-transform: translate(-50%,0%);
            transform: translate(-50%,0%);
            .disabled{
                cursor:not-allowed;
            }
            .head{
                height:13%;
                text-align: center;
                line-height: 70px;
                font-family: PingFangSC-Regular;
                font-size: 26px;
                color: #5F5F5F;
                letter-spacing: 0.9px;
            }
            .body{
                height:55%;
                form{
                    margin-top:15px;
                }
                input{
                    border:none;
                    border-bottom: 1px solid #ccc;
                    outline: none;
                    background: rgba(0,0,0,0);
                    height:50px;
                    font-size:14px;
                    width: 80%;
                    margin: 0px auto;
                    display: block;
                    margin-bottom: 20px;
                    &:-webkit-autofill {
                        -webkit-box-shadow: 0 0 0px 1000px white inset;
                    }
                    &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                        font-family: PingFangSC-Regular;
                        font-size: 14px;
                        color: #B6B6B6;
                    }
                    &::-moz-placeholder { /* Firefox 19+ */
                        font-family: PingFangSC-Regular;
                        font-size: 14px;
                        color: #B6B6B6;
                    }
                    &:-ms-input-placeholder { /* IE 10+ */
                        font-family: PingFangSC-Regular;
                        font-size: 14px;
                        color: #B6B6B6;
                    }
                    &:-moz-placeholder { /* Firefox 18- */
                        font-family: PingFangSC-Regular;
                        font-size: 14px;
                        color: #B6B6B6;
                    }
                }
                span{
                    display:block;
                    width:80%;
                    margin:0px auto;
                    font-family: PingFangSC-Regular;
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #B6B6B6;
                    font-size: 14px;
                    line-height: 14px;
                    height:14px;
                    transition:all .5s;
                    &.warning{
                        color: #F24747;
                    }
                }
                label{
                    width:24px;
                    height:15px;
                    position:absolute;
                    display: block;
                    bottom: 18px;
                    right: 43px;
                    cursor:pointer;
                    background-image:url("../../assets/img/eye.png");
                }
                button{
                    width:80px;
                    height:30px;
                    position:absolute;
                    display: block;
                    bottom: 12px;
                    right: 43px;
                    cursor:pointer;
                    background: #4990E2;
                    border: 1px solid rgba(15,179,250,0.00);
                    font-family: PingFangSC-Regular;
                    font-size: 11px;
                    color: #FFFFFF;
                    letter-spacing: 0.71px;
                    outline: none;
                }
            }
            .foot{
                height:32%;
                button{
                    width:80%;
                    margin:0px auto;
                    display: block;
                    height: 45px;
                    background-color: #4990E2;
                    border:none;
                    font-family: PingFangSC-Medium;
                    font-size: 14px;
                    color: #FFFFFF;
                    letter-spacing: 0.83px;
                    cursor:pointer;
                    margin-bottom:15px;
                }
                .checkBox{
                    width:12px;
                    height: 12px;
                    border-radius:2px;
                    display:inline-block;
                    border:1px solid #ccc;
                    cursor: pointer;
                }
                .agree{
                    background-color: #2d8cf0;
                    border-color:#2d8cf0;
                    position:relative;
                    &::after{
                        content: "";
                        display: table;
                        width: 4px;
                        height: 8px;
                        position: absolute;
                        top: 0px;
                        left: 3px;
                        border: 2px solid #fff;
                        border-top: 0;
                        border-left: 0;
                        transform: rotate(45deg) scale(1);
                    }
                }
                div{
                    width:80%;
                    height:20px;
                    margin:0px auto;
                }
                span{
                    vertical-align:middle;
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    letter-spacing: 0.83px;
                }
            }
        }
    }
</style>