import { ReactNode } from "react"
import { useParams } from "react-router-dom"
import Article01 from "./Article01"

const Articles = (): ReactNode=>{
  const {id} = useParams()

  const getArticle = (id: string): ReactNode|null=>{
    if(id === '0') return <Article01></Article01>
    else return null
  }

  return (
    <div className="max-w-4xl mx-auto p-8 text-gray-800">
      {(id && getArticle(id)) || <h1>Article Not Found.</h1>}
    </div>
  )
}

export default Articles