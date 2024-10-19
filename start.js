const { spawn } = require('child_process');
const portfinder = require('portfinder');

// Busca un puerto disponible
portfinder.getPort((err, port) => {
  if (err) {
    console.error('No se pudo encontrar un puerto disponible:', err);
    process.exit(1);
  }

  // Ejecuta el comando para iniciar el servidor de React en el puerto encontrado
  const reactProcess = spawn('react-scripts', ['start', '--port', port], {
    stdio: 'inherit',
    shell: true,
  });

  reactProcess.on('exit', (code) => {
    if (code === 0) {
      console.log(`Servidor de React corriendo correctamente en el puerto ${port}`);
    } else {
      console.log(`Error al ejecutar el servidor de React, código de salida: ${code}`);
    }
  });

  // Controlar que solo se busque puerto la primera vez
  let serverStarted = false;

  reactProcess.stdout.on('data', (data) => {
    if (!serverStarted && data.toString().includes('compiled successfully')) {
      serverStarted = true;
      console.log(`El servidor de React se ejecuta correctamente en http://localhost:${port}`);
    }
  });
});


