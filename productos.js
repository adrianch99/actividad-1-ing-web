const productos = [
    {
        name: "reloj digital",
        image: "relojdigitalx2.jpg",
        price: 30000,
        quantity: 2,
        total: function() {
            return this.price * this.quantity;
        }
    },
    {
        name: "reloj despertador",
        image: "despertador.jpg",
        price: 42000,
        quantity: 3,
        total: function() {
            return this.price * this.quantity;
        }
    },
    {
        name: "reloj antiguo",
        image: "relojant.jpg",
        price: 100000,
        quantity: 3,
        total: function() {
            return this.price * this.quantity;
        }
    },
    {
        name: "reloj de arena",
        image: "relojarena.jpg",
        price: 70000,
        quantity: 2,
        total: function() {
            return this.price * this.quantity;
        }
    }

];

const cuerpoTabla = document.getElementById('productos-body');


productos.forEach(producto => {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${producto.name}</td>
    <td><img src="${producto.image}" alt="${producto.name}" width="150" height="100" class="producto-image"></td>
    <td>$${producto.price.toFixed(2)}</td>
    <td>${producto.quantity}</td>
    <td>$${producto.total().toFixed(2)}</td>
  `;
  cuerpoTabla.appendChild(fila);
});