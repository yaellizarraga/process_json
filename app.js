function transformar(jsonEntrada) {
  const customerName = `${jsonEntrada.cliente.nombre} ${jsonEntrada.cliente.apellido}`;
  const orderId = jsonEntrada.orden.id;
  const total = jsonEntrada.orden.monto;

  return {
    orderId,
    customerName,
    total
  };
}

// Ejemplo de uso:
const entrada = {
  cliente: { nombre: "Juan", apellido: "Pérez" },
  orden: { id: 123, monto: 500 }
};

console.log(transformar(entrada));