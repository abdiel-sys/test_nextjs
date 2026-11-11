import { getProductos } from "../actions/productosActions";
import TarjetaProducto from "../componentes/tarjetaProducto";

export default async function ProductoPage() {
  const productos = await getProductos()
  return (
    <section>
      {productos.map((item) => (
        <TarjetaProducto key={item.id + 1} producto={item} />
      ))
      }
    </section>
  );
}
