<template>
    <div style="height:100%">
        <div class="menu-bar">
            <div class="menu-wrapper">
                <div class="logo">
                    <img src="../assets/img/logo.png">
                </div>
                <div class="menu-item">
                    <ul>
                        <li class="select-item"><router-link to="/home">首页</router-link></li>
                        <li><router-link to="/prod">产品</router-link></li>
                        <li><router-link to="/price">价格</router-link></li>
                        <li><router-link to="/doc">文档</router-link></li>
                        <li><router-link to="/about">关于我们</router-link></li>
                    </ul>
                </div>
                <div class="register-login">
                    <router-link to="/register">注册</router-link>
                    <router-link class="login" to="/login">登录</router-link>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>

</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {

            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less" scoped>
    *{
        box-sizing: border-box;
    }
    .menu-bar{
        height:70px;
        background-image: linear-gradient(-45deg, #06BBFC 100%, #4183EC 0%);
        .menu-wrapper{
            position: relative;
            height:100%;
            width:1200px;
            margin:0 auto;
            display: flex;
            .logo{
                height:100%;
                width:123px;
                padding: 23px 0px;
                img{
                    width:114px;
                    height:25px;
                }
            }
            .menu-item{
                height:100%;
                padding:0px 160px;
                padding-right:120px;
                ul{
                    font-size:0px;
                    height:100%;
                    li{
                        font-family: PingFangSC-Regular;
                        font-size: 18px;
                        color: #FFFFFF;
                        height:100%;
                        float:left;
                        display:list-item;
                        width:120px;
                        text-align: center;
                        cursor:pointer;
                        position: relative;
                        &:hover::after{
                            position:absolute;
                            content:'';
                            width:120px;
                            height:1px;
                            bottom:0px;
                            left:0px;
                            background-color: white;
                        }
                        a{
                            display: block;
                            padding:22px 0px;
                            width:100%;
                            height:70px;
                            color:white;
                        }
                    }
                }
            }
            .register-login{
                height:100%;
                display:flex;
                a{
                    width:80px;
                    height:35px;
                    margin-right:20px;
                    margin-top:19px;
                    border-radius:5px;
                    background-color: white;
                    text-align:center;
                    font-family: PingFangSC-Regular;
                    font-size: 18px;
                    color: #358FEF;
                    line-height: 35px;
                    cursor:pointer;
                    &:last-of-type{
                        margin-right:0px;
                    }
                    &.login{
                        color:white;
                        border:1px solid white;
                        background-color:rgba(0,0,0,0);
                    }
                }
            }
        }
    }
</style>