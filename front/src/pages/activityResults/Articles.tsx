import { ReactNode } from "react"
import { useParams } from "react-router-dom"

const Articles = (): ReactNode=>{
  const {id} = useParams()

  return (
    <div className="max-w-4xl mx-auto p-8 text-gray-800">
      a
    </div>
  )
}

export default Articles