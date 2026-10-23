import {defineConfig} from 'vite';
export default defineConfig({
 esbuild:{jsxFactory:'h',jsxFragment:'Fragment'},
 build:{target:'es2022',chunkSizeWarningLimit:650},
 server:{host:'localhost',port:5173,strictPort:true}
});
