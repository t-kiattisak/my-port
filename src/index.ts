import app from './infrastructure/server.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
  console.log(`📖 Access ports endpoint at http://localhost:${PORT}/api/ports`);
});
