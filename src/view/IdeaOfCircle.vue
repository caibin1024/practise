<template>
    <div>
        <el-row v-for="count in times" :key="count">
            <el-col v-for="count1 in times" :key="count+'/'+count1" span="1" >
                <div id="cricle"></div>
            </el-col>
        </el-row>
    </div>
</template>


<script>
export default {
    data(){
        return{
            times:5
        }
    },
}
</script>

<style scoped>
.cricle{
    width: 10px;
    height: 10px;
    background-color:green;
    border-radius: 5px;
}
</style>