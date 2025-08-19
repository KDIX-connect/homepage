export default function RecruitmentPage() {
  return (
    <div>
      <header className="bg-gradient-to-br from-indigo-50 to-white text-slate-900 py-10 text-center">
        <div className="max-w-4xl mx-auto p-5">
          <h1 className="text-[1.6rem] mb-2">採用情報 — まだ設立前のスタートアップ</h1>
          <p className="text-slate-600">医療機関向けの入院患者 QOL 向上アプリを開発中です。サービスの立ち上げから携わりたい方を広く募集します。</p>
        </div>
      </header>

      <main className="max-w-5xl my-7 mx-auto px-4 grid md:grid-cols-[1fr_360px] gap-5">
        <section className="grid gap-4">
          <article className="bg-white rounded-xl p-5 shadow-md">
            <h2>募集ポジション</h2>
            <ul>
              <li>フロントエンドエンジニア（モバイル / Web）</li>
              <li>バックエンドエンジニア（Python / FastAPI）</li>
              <li>インフラ・DevOps（AWS）</li>
            </ul>
          </article>

          <article className="bg-white rounded-xl p-5 shadow-md">
            <h2>仕事内容（現体制）</h2>
            <p>モバイルアプリの機能実装、バックエンド API の設計・実装、インフラの構築・運用などをチームで担当します。少人数で幅広く手を動かすフェーズです。</p>
            <ul>
              <li>Swift / SwiftUI を使ったモバイル開発（iOS）</li>
              <li>TypeScript / React 系、React Native を用いたフロント実装</li>
              <li>Python (FastAPI) によるサーバ実装・運用</li>
              <li>AWS を中心としたクラウド運用・CI/CD 構築</li>
            </ul>
          </article>

          <article className="bg-white rounded-xl p-5 shadow-md">
            <h2>求める人物像</h2>
            <ul>
              <li>学習意欲が高く、柔軟に技術選定できる方</li>
              <li>小さなチームで自走できる方（設計〜実装〜運用まで）</li>
              <li>医療・福祉領域への興味がある方は歓迎（未経験可）</li>
            </ul>
          </article>
        </section>

        <section className="bg-gradient-to-r from-slate-50 to-white p-5 rounded-lg">
          <h2>ここで働く魅力</h2>
          <p>導入先は病院。ユーザーに近い価値を少人数で素早く届けられる段階です。裁量が大きく、プロダクトの仕様決定にも関われます。</p>
        </section>

        <aside className="bg-white rounded-xl p-5 shadow-md self-start">
          <h2>会社の現状と働き方</h2>
          <p className="text-slate-500">現状: まだ法人化前で、学生や前職メンバーによるチームで開発を進めています。法人化は 2025 年秋を予定しています。</p>

          <h3>働き方</h3>
          <ul>
            <li>リモート中心（必要時に集合）</li>
            <li>裁量の大きいアサインとフレキシブルな勤務</li>
          </ul>

          <h3>応募方法（静的）</h3>
          <p className="text-slate-500">問い合わせフォームは用意していません。以下の手順で静的にご応募ください。</p>
          <ol className="pl-5">
            <li>履歴書（職務経歴書）を PDF で用意してください。</li>
            <li>件名に「採用応募 — 希望職種」を入れて、PDF を添付のうえメールでお送りください。</li>
            <li>メール送付先: <strong>recruit@example.com</strong></li>
          </ol>

          <p className="text-sm text-slate-600">※ ・報酬は面談にて相談。掲載情報は変更される場合があります。</p>
        </aside>
      </main>
    </div>
  );
}
