export default defineConfig({
  plugins: [react()],
  root: "client",
  build: {
    outDir: "dist",
    emptyOutDir: true
  }
});

