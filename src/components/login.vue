<template>
    <div class="login-wrapper">
        <div class="login-form">
            <div class="head">
                <span>登录</span>
            </div>
            <div class="body">
                <form>
                    <div>
                        <span></span>
                        <input type="text" v-model="form.loginname" name="loginname" placeholder="登录邮箱" @burl>
                    </div>
                    <div>
                        <span></span>
                        <input type="password" v-model="form.password" name="password" placeholder="密码">
                    </div>
                    <div>
                        <span></span>
                        <input type="text" v-model="form.vailCode" name="vailCode" placeholder="请输入验证码">
                    </div>

                </form>
            </div>
            <div class="foot"></div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {
                form:{
                    loginname:'',
                    password:'',
                    vailCode:''
                }
            }
        },
        created(){

        },
        methods:{

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
            height:541px;
            position:absolute;
            top:15%;
            left:50%;
            background: #FFFFFF;
            border: 1px solid rgba(161,161,161,0.00);
            box-shadow: 0 2px 24px 0 #4990E2;
            -webkit-transform: translate(-50%,0%);
            -moz-transform: translate(-50%,0%);
            -ms-transform: translate(-50%,0%);
            -o-transform: translate(-50%,0%);
            transform: translate(-50%,0%);
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
                height:60%;
                form{
                    margin-top:15px;
                }
                input{
                    border:none;
                    border-bottom: 2px solid #ccc;
                    outline: none;
                    background: rgba(0,0,0,0);
                    height:50px;
                    font-size:20px;
                    width: 80%;
                    margin: 0px auto;
                    display: block;
                    margin-bottom: 37px;
                    &:-webkit-autofill {
                        -webkit-box-shadow: 0 0 0px 1000px white inset;
                    }
                }
            }
            .foot{
                height:27%;
                background-color: black;
            }
        }
    }
</style>