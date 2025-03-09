import { defineConfig } from 'vite';
import { resolve } from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';
import { register } from 'module';

export default defineConfig({
   appType: 'mpa', // Indica que es un proyecto multipágina
   base: './',
   root: resolve(__dirname, 'fuente'), // Especifica que "fuente" es la raíz
   build: {
      outDir: 'produccion',
      emptyOutDir: true,    //Vacía el directorio de producción antes de compilar
      rollupOptions: {
         input: {
         main: resolve(__dirname, 'fuente/index.html'),
         aboutus: resolve(__dirname, 'fuente/html/aboutus.html'),
         home: resolve(__dirname, 'fuente/html/home.html'),
         tutorials: resolve(__dirname, 'fuente/html/tutorials.html'),
         login: resolve(__dirname, 'fuente/html/login.html'),
         register: resolve(__dirname, 'fuente/html/register.html'),
         },
      },
      minify: 'terser', // Asegura que JS y CSS también se minimicen
   },
   plugins: [
      createHtmlPlugin({
         minify: true, // Minimiza el HTML
      }),
   ],
   server: {
      open: true,
   },
   preview: {
      open: true, // Abre automáticamente la previsualización
      port: 4173, // Puerto para el servidor de previsualización
   },
});