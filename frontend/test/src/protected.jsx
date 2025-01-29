import { useEffect } from "react"
import { api } from "./interceptos/Interceptors"

function Protected(){
    const getProtectedPage=async()=>{
        const data=await api.get('http://localhost:3000/protected').data
    }
    useEffect(()=>{
        getProtectedPage()
    })
    
    
    return(<>
    <div>
        Protected
    </div>
    </>)
}
export default Protected