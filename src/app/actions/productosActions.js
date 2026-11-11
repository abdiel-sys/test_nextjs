'use server'

import { createClient } from "../lib/supServer"
import { revalidatePath } from "next/cache"

export async function getProductos() {
  const supabase = await createClient();

  const { data: productos, error } = await supabase
    .from('producto')
    .select('id, nombre, descripcion, precio, imagen')

  if (error) {
    console.error('Error al obtener productos: ', error.message);
    return [];
  }

  return productos;
}

export async function eliminarProducto(id) {
  const supabase = await createClient();

  const { error } = await supabase
    .from('producto')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error al obtener productos: ', error.message);
    throw new Error('No se pudo eliminar producto')
  }

  revalidatePath('/producto')
}
