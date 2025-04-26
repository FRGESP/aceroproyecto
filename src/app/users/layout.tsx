import { logout } from "@/actions";

async function layoutVendedor({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <div className="flex justify-end">
          <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded-md m-5">Cerrar Sesión</button>
        </div>
        {children}
      </div>
    )
  }
  
  export default layoutVendedor
  