import { ReactNode } from "react";
import { Link } from "react-router-dom";

const ActivityResultsPage = (): ReactNode=>{
  return (
    <div className="max-w-4xl mx-auto p-8 text-gray-800 flex flex-col gap-12">
      <section>
        <h1 className="border-b mb-4">活動実績</h1>
        <Link to={"/activityResults/articles/0"}>
          2025/08/17 : 近畿大学病院の小児科病棟で、アプリのテストを実施。
        </Link>
      </section>
    </div>
  )
}

export default ActivityResultsPage