<template>
  <el-container>
    <!-- 头部 -->
    <el-header height="80px"></el-header>
    <el-container>
      <!-- 侧边导航栏 -->
      <el-aside width="250px" color="rbg()">
        <el-menu router unique-opened c>
          <!-- 一级菜单 -->
          <el-submenu index="1">
            <template #title>
              <span>布局</span>
            </template>
            <!-- 选项 -->
            <el-menu-item index="/flex">flex骰子</el-menu-item>
            <el-menu-item index="/layout">layout骰子</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template #title>
              <span>一级菜单</span>
            </template>
            <!-- 选项 -->
            <el-menu-item index="/welcome">welcome</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 主要内容 -->
      <el-main>
        <el-card shadow="hover">
          <router-view />
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>

<style scoped>
.el-header {
  border-bottom: 1px solid #eee;
}
.el-container {
  height: 100%;
}
.el-aside {
  background-color: #eee;
}
.el-card{
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  margin-bottom: 0;
}
</style>
