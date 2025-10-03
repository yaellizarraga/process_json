Descripcion del algoritmo

Se recibe entrada json en funcion transformar
Se inicializan variables con los datos que se solicitan para la respuesta, en este caso:

- orderId
- customerName
- total

Se realiza el armado del objeto de respusta, con el formato solitado con el nombre concatenado y la extraccion de los datos
de la orden para mostrarse junto con los datos del cliente

Analisis de complejidad

Si reciberamos un json de gran tamaño el tiempo de respuesta aumentaria, seria una cuestion a evitar, el algoritmo se optimizaria
para implementar extracciones especificas de campos, recibir opciones de configuracion para limitar los datos del objeto a leer
y regresar.
Una opcion puede ser validar la entrada si no se tiene algun dato que nos imposibilite la respuesta deseada regresar error y 
terminar el procesamiento.

Casos de prueba

Se realiza prueba enviando datos vacios lo cual detona error de validaciones cuando se manda datos incompletos

1 - Sin nombre, recibimos error de que nombre es obligatorio
2 - Se omiten datos de orden, se realizan validaciones y no regresan datos
