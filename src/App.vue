<template>
  <div>
    <el-container>
      <!-- 头部 -->
      <el-header height="80px"></el-header>
      <el-container >
        <!-- 侧边导航栏 -->
        <el-aside width="250px">
          <el-menu router unique-opened >
            <!-- 一级菜单 -->
            <el-submenu index="1">
              <template #title>
                <span>一级菜单</span>
              </template>
              <!-- 选项 -->
              <el-menu-item index="/flex">flex骰子</el-menu-item>
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
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.el-header {
  border-bottom: 1px solid #eee;
}
</style>
