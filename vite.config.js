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
      input: {
        main: './index.html',
        analysis: './main.js', // 将 main.js 作为独立入口点
      },
      output: {
        entryFileNames: (chunkInfo) => {
          // main.js 保持原文件名，其他文件使用默认命名
          return chunkInfo.name === 'analysis' ? 'main.js' : 'assets/[name]-[hash].js';
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        manualChunks: (id) => {
          // 将第三方库分离到单独的 chunk
          if (id.includes('node_modules')) {
            if (id.includes('sql.js')) return 'sql.js';
            if (id.includes('chart.js')) return 'chart.js';
            if (id.includes('html2canvas')) return 'html2canvas';
            return 'vendor';
          }
        },
      },
    },
  },

  // 部署配置（GitHub Pages）
  // 如果部署在仓库根目录，使用仓库名称作为 base
  base: '/Cursor-Clinical-Analysis/',

  // 优化配置
  optimizeDeps: {
    include: ['sql.js', 'chart.js', 'html2canvas'],
  },
});
