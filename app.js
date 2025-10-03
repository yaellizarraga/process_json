function transformar(jsonEntrada) {
  const customerName = `${jsonEntrada.cliente.nombre ?? ''} ${jsonEntrada.cliente.apellido ?? ''}`;
  const orderId = jsonEntrada.orden.id;
  const total = jsonEntrada.orden.monto;
  let response = {};
    
  if (customerName.trim() === '') {
    console.error('El nombre del cliente es obligatorio');
    return response;
  }

  if (orderId == null || total == null) {
    console.error('El ID de la orden y el monto son obligatorios');
    return response;
  }

  response = {
    customerName: customerName.trim(),
    orderId: orderId,
    total: total
  };

  return response;
}

const entrada = {
  cliente: { nombre: "", apellido: "" },
  orden: { id: 123, monto: 500 }
};

console.log(transformar(entrada));