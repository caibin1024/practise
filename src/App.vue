<template>
  <div>
    <el-container>
      <!-- 头部 -->
      <el-header>
        <h1></h1>
      </el-header>
      <el-container>
        <!-- 侧边导航栏 -->
        <el-aside>
          <el-menu router unique-opened>
            <!-- 一级菜单 -->
            <el-submenu>
              <template #title>
                <span>一级菜单</span>
              </template>
              <!-- 选项 -->
              <el-menu-item index='/flex' >选项</el-menu-item>
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

