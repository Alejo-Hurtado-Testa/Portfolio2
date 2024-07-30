document.addEventListener('DOMContentLoaded', function () {
  // Función para generar valores de sombras aleatorias
  function generateShadows(n) {
    // Inicializa el valor con una sombra aleatoria
    let value = `${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`;
    // Bucle para añadir más sombras aleatorias
    for (let i = 2; i <= n; i++) {
      value += `, ${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`;
    }
    // Devuelve la cadena de sombras generadas
    return value;
  }

  // Genera sombras pequeñas y asigna a la variable CSS
  document.documentElement.style.setProperty(
    '--shadows-small',
    generateShadows(140)
  );
  // Genera sombras medianas y asigna a la variable CSS
  document.documentElement.style.setProperty(
    '--shadows-medium',
    generateShadows(100)
  );
  // Genera sombras grandes y asigna a la variable CSS
  document.documentElement.style.setProperty(
    '--shadows-big',
    generateShadows(100)
  );
});
