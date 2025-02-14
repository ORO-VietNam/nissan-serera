import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'

export default defineConfig({
  plugins: [
    vue()
  ],
  base: './',
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  build: {
    // Output directory for production build
    outDir: 'dist',
    
    // Configure asset handling
    assetsDir: 'assets',
    
    // Configure rollup options
    // rollupOptions: {
    //   input: {
    //     main: path.resolve(__dirname, 'index.html'),
    //   },
    //   output: {
    //     assetFileNames: (assetInfo) => {
    //       // Maintain directory structure for assets
    //       const info = assetInfo.name.split('.')
    //       const ext = info[info.length - 1]
    //       if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
    //         // Keep original path structure for images
    //         return `assets/images/[name]-[hash][extname]`
    //       }
    //       return `assets/[name]-[hash][extname]`
    //     },
    //   },
    // },
  },
  server: {
    // Configure static file serving
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@images': path.resolve(__dirname, './src/assets/images/'),
    },
  },
});
