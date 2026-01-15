import { defineConfig } from 'vite';

export default defineConfig({
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

  // 部署配置（GitHub Pages）
  base: '/Cursor-Clinical-Analysis/',

  // 优化配置
  optimizeDeps: {
    include: ['sql.js', 'chart.js', 'html2canvas'],
  },
});
