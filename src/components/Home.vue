<template>
    <div>
        <span>{{message}}</span>
        <el-button>默认按钮</el-button>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {
                message:'hello Vue',
                value:10
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less" scoped>
    div{
        span{
            font-family: "Microsoft YaHei UI";
            font-size: 19px;
            background-color: aliceblue;
        }
    }
</style>