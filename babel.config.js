module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  //按需导入ElementPlus组件样式
  plugins: [
    [
      "import",
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`;
        },
      },
    ],
  ],
}
