export default function RecruitmentPage() {
  return (
    <div className="recruitment-page">
      <header className="hero">
        <div className="hero-inner">
          <h1>採用情報 — まだ設立前のスタートアップ</h1>
          <p className="lead">医療機関向けの入院患者 QOL 向上アプリを開発中です。サービスの立ち上げから携わりたい方を広く募集します。</p>
        </div>
      </header>

      <main className="container">
        <section className="cards">
          <article className="card">
            <h2>募集ポジション</h2>
            <ul>
              <li>フロントエンドエンジニア（モバイル / Web）</li>
              <li>バックエンドエンジニア（Python / FastAPI）</li>
              <li>インフラ・DevOps（AWS）</li>
            </ul>
          </article>

          <article className="card">
            <h2>仕事内容（現体制）</h2>
            <p>モバイルアプリの機能実装、バックエンド API の設計・実装、インフラの構築・運用などをチームで担当します。少人数で幅広く手を動かすフェーズです。</p>
            <ul>
              <li>Swift / SwiftUI を使ったモバイル開発（iOS）</li>
              <li>TypeScript / React 系、React Native を用いたフロント実装</li>
              <li>Python (FastAPI) によるサーバ実装・運用</li>
              <li>AWS を中心としたクラウド運用・CI/CD 構築</li>
            </ul>
          </article>

          <article className="card">
            <h2>求める人物像</h2>
            <ul>
              <li>学習意欲が高く、柔軟に技術選定できる方</li>
              <li>小さなチームで自走できる方（設計〜実装〜運用まで）</li>
              <li>医療・福祉領域への興味がある方は歓迎（未経験可）</li>
            </ul>
          </article>
        </section>

        <section className="why">
          <h2>ここで働く魅力</h2>
          <p>導入先は病院。ユーザーに近い価値を少人数で素早く届けられる段階です。裁量が大きく、プロダクトの仕様決定にも関われます。</p>
        </section>

        <aside className="card aside">
          <h2>会社の現状と働き方</h2>
          <p className="muted">現状: まだ法人化前で、学生や前職メンバーによるチームで開発を進めています。法人化は 2025 年秋を予定しています。</p>

          <h3>働き方</h3>
          <ul>
            <li>リモート中心（必要時に集合）</li>
            <li>裁量の大きいアサインとフレキシブルな勤務</li>
          </ul>

          <h3>応募方法（静的）</h3>
          <p className="muted">問い合わせフォームは用意していません。以下の手順で静的にご応募ください。</p>
          <ol>
            <li>履歴書（職務経歴書）を PDF で用意してください。</li>
            <li>件名に「採用応募 — 希望職種」を入れて、PDF を添付のうえメールでお送りください。</li>
            <li>メール送付先: <strong>recruit@example.com</strong></li>
          </ol>

          <p className="note">※ ・報酬は面談にて相談。掲載情報は変更される場合があります。</p>
        </aside>
      </main>

      <footer className="site-footer">
        <div className="container">© 2025 スタートアップ（設立予定）</div>
      </footer>

      <style>{`
        .recruitment-page { font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Helvetica Neue', Arial; color: #0f172a; }
        .hero { background: linear-gradient(135deg,#eef2ff 0%,#ffffff 100%); color: #0f172a; padding: 40px 0; text-align: center; }
        .hero-inner { max-width: 900px; margin: 0 auto; padding: 20px; }
        .hero h1 { margin: 0 0 8px; font-size: 1.6rem; }
        .hero .lead { margin: 0; color: #475569; }

        .container { max-width: 1000px; margin: 28px auto; padding: 0 16px; display: grid; grid-template-columns: 1fr; gap: 18px; }
        @media(min-width: 880px){ .container { grid-template-columns: 1fr 360px; } }

        .cards { display: grid; gap: 16px; }
        .card { background: white; border-radius: 10px; padding: 18px; box-shadow: 0 6px 18px rgba(12,15,25,0.06); }

        .why { margin: 0; background: linear-gradient(90deg,#f8fafc,#fff); padding: 18px; border-radius: 8px; }

        .aside { align-self: start; }
        .muted { color:#64748b; }
        ol { padding-left: 18px; }
        .note { font-size: 0.9rem; color:#475569; }

        .site-footer { background: #f8fafc; padding: 18px 0; font-size: 0.95rem; text-align: center; }

        @media (max-width: 640px) {
          .hero h1 { font-size: 1.25rem; }
          .hero { padding: 28px 0; }
        }
      `}</style>
    </div>
  );
}
