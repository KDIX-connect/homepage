import { ReactNode } from "react"

const OverviewPage = (): ReactNode=>{
  return (
    <div className="max-w-4xl mx-auto p-8 text-gray-800">
      {/* 会社名 */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold border-b pb-2 mb-4">会社概要</h1>
        <p className="text-lg">（会社名）です。</p>
      </section>

      {/* 来歴 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">来歴</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>近畿大学病院の小児科にモバイルアプリを導入するプロジェクトが前身</li>
          <li>2024年の春に、近畿大学情報学部でチームとして発足</li>
          <li>2025年の秋に、会社設立</li>
        </ul>
      </section>

      {/* 事業内容 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">事業内容</h2>
        <p>
          病院に導入する、入院患者のQOL向上のアプリケーションを作成し、保守管理を行っています。
        </p>
      </section>

      {/* メンバー */}
      <section>
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">メンバー</h2>
        <ul className="space-y-3">
          <li>
            <span className="font-bold">藤田：</span> リーダー。多方面との交渉などを主に担当。
          </li>
          <li>
            <span className="font-bold">滝口：</span> バックエンドエンジニア。AWSやインフラ周りを管理。
          </li>
          <li>
            <span className="font-bold">西堀：</span> フロントエンドエンジニア。モバイルアプリの作成を担当。
          </li>
          <li>
            <span className="font-bold">梅田：</span> 経理・経営などの戦略や、外部との交渉を担当。
          </li>
        </ul>
      </section>
    </div>
  )
}

export default OverviewPage