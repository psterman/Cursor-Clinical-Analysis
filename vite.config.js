import { defineConfig } from 'vite';

export default defineConfig(({ command, mode }) => {
  // 根据环境设置 base 路径
  // 开发环境使用根路径，生产环境使用 GitHub Pages 路径
  const base = command === 'serve' ? '/' : '/Cursor-Clinical-Analysis/';
  
  console.log(`[Vite] 环境: ${command}, 模式: ${mode}, base: ${base}`);
  
  return {
    // 开发服务器配置
    server: {
      port: 3000,
      open: true,
    },

    // 构建配置
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      minify: 'terser',
      rollupOptions: {
        output: {
          manualChunks: {
            'sql.js': ['sql.js'],
            'chart.js': ['chart.js'],
            'html2canvas': ['html2canvas'],
          },
        },
      },
    },

    // 部署配置（根据环境动态设置）
    base: base,

    // 优化配置
    optimizeDeps: {
      include: ['sql.js', 'chart.js', 'html2canvas'],
    },
  };
});
