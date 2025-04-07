import Heading from "@/components/ui/Heading";
import Link from "next/link";


export default function NotFound() {
  return (
    <div className=" text-center">

        <Heading>Producto no encontrado</Heading>
        <p>Tal vez Quieras Volver a <Link href={'/admin/products?products=1'} className=" text-green-400">Productos</Link></p>
    </div>
  )
}
