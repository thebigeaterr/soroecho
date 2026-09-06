import{t as e}from"./react.B3l9tXpq.js";import{t}from"./jsx-runtime.DIiiIrYY.js";import{t as n}from"./AmazonSearchLink.DzVE3Q5h.js";var r=e(),i={asOf:`2026-09-05`,sourceUrl:`https://sogyotecho.jp/jfc/`,note:`参考統計（referenceStats）は日本政策金融公庫総合研究所「新規開業実態調査」に基づく開業費用（全業種・設備資金全体の中央値・平均値）を紹介する記事より転記。これは業種を問わない開業費用全体の値であり、本ツールが試算するオフィス備品費用（デスク・PC周辺・通信・消耗品など）とは対象範囲が異なる参考情報である。カテゴリ別の品目・数量の考え方・相場レンジについては、品目単位の公的な費目別統計が見つからなかったため「運営者の目安（要更新）」とし、型番・特定商品名は一切記載しない。すべての金額はユーザーが実態に合わせて判断するための参考レンジであり、確定額ではない。`,referenceStats:{medianTotalStartupCostYen:58e5,meanTotalStartupCostYen:985e4,yearNote:`2024年度開業（記事掲載時点の最新調査）`,sourceNote:`全業種・全設備を含む開業費用の中央値・平均値。オフィス備品のみの金額ではない。`},categories:[{id:`desk-chair`,label:`デスク・チェア`,appliesTo:[`office`,`store`,`home`],baseYen:[2e4,7e4],additionalPerPersonYen:[2e4,7e4],itemsNote:`作業デスク・椅子一式（1人1セットを想定）`,source:`運営者の目安（要更新）`},{id:`pc-peripherals`,label:`PC周辺機器`,appliesTo:[`office`,`store`,`home`],baseYen:[1e4,3e4],additionalPerPersonYen:[1e4,3e4],itemsNote:`モニター・キーボード・マウス・外付けストレージ等（パソコン本体の価格は含まない）`,source:`運営者の目安（要更新）`},{id:`communication`,label:`通信`,appliesTo:[`office`,`store`,`home`],baseYen:[15e3,4e4],additionalPerPersonYen:[0,0],itemsNote:`回線工事費・ルーター等の初期費用（拠点単位のため人数による変動は小さいと想定し、初期費用のみを計上）`,source:`運営者の目安（要更新）`},{id:`stationery-supplies`,label:`文具・消耗品`,appliesTo:[`office`,`store`,`home`],baseYen:[5e3,15e3],additionalPerPersonYen:[3e3,1e4],itemsNote:`筆記具・用紙・ファイル等の初期在庫`,source:`運営者の目安（要更新）`},{id:`storage`,label:`収納`,appliesTo:[`office`,`store`,`home`],baseYen:[8e3,25e3],additionalPerPersonYen:[3e3,1e4],itemsNote:`書類棚・ロッカー等（人数増でも共有できる部分があるため増分は逓減想定）`,source:`運営者の目安（要更新）`},{id:`cleaning-hygiene`,label:`清掃・衛生`,appliesTo:[`office`,`store`,`home`],baseYen:[5e3,15e3],additionalPerPersonYen:[1e3,5e3],itemsNote:`清掃用品・衛生用品の初期在庫`,source:`運営者の目安（要更新）`},{id:`disaster-prep`,label:`防災`,appliesTo:[`office`,`store`,`home`],baseYen:[1e4,3e4],additionalPerPersonYen:[2e3,8e3],itemsNote:`防災セット・備蓄品（人数分の水・食料等を含む）`,source:`運営者の目安（要更新）`},{id:`signage-fixtures`,label:`看板・什器`,appliesTo:[`store`],baseYen:[3e4,15e4],additionalPerPersonYen:[0,0],itemsNote:`店舗の看板・陳列什器等（店舗形態のみ。人数に依存しない設備投資として計上）`,source:`運営者の目安（要更新）`}],categoryAmazonQueries:{"desk-chair":`オフィスデスク チェア セット`,"pc-peripherals":`PC周辺機器 セット`,communication:`Wi-Fiルーター オフィス用`,"stationery-supplies":`事務用品 セット`,storage:`オフィス収納 ロッカー`,"cleaning-hygiene":`業務用 清掃用品セット`,"disaster-prep":`オフィス防災セット`,"signage-fixtures":`店舗什器 陳列棚`}},a=i.categories;function o(e){if(!Number.isInteger(e)||e<1||e>10)throw RangeError(`人数は1〜10の整数で入力してください`)}function s(e,t){o(t);let n=a.filter(t=>t.appliesTo.includes(e)).map(e=>{let n=t-1,r=e.baseYen[0]+e.additionalPerPersonYen[0]*n,i=e.baseYen[1]+e.additionalPerPersonYen[1]*n;return{id:e.id,label:e.label,itemsNote:e.itemsNote,source:e.source,lowYen:r,highYen:i}});return{format:e,people:t,categories:n,totalLowYen:n.reduce((e,t)=>e+t.lowYen,0),totalHighYen:n.reduce((e,t)=>e+t.highYen,0)}}var c=i,l=t(),u=new Intl.NumberFormat(`ja-JP`),d=e=>`${u.format(Math.round(e))}円`,f={office:`事務所`,store:`店舗`,home:`在宅`},p=`chotatsu-media:startup-kit-checked`;function m(){try{if(typeof window>`u`)return{};let e=window.localStorage.getItem(p);if(!e)return{};let t=JSON.parse(e);return typeof t==`object`&&t?t:{}}catch{return{}}}function h(e){try{if(typeof window>`u`)return;window.localStorage.setItem(p,JSON.stringify(e))}catch{}}function g(e){return c.categoryAmazonQueries[e]}function _({amazonTag:e}){let[t,i]=(0,r.useState)(`office`),[a,o]=(0,r.useState)(1),[p,_]=(0,r.useState)({});(0,r.useEffect)(()=>{_(m())},[]);let v=(0,r.useMemo)(()=>s(t,a),[t,a]),y=e=>{_(t=>{let n={...t,[e]:!t[e]};return h(n),n})};return(0,l.jsxs)(`div`,{className:`skc`,children:[(0,l.jsxs)(`form`,{className:`skc__form`,onSubmit:e=>e.preventDefault(),children:[(0,l.jsxs)(`label`,{className:`skc__field`,children:[(0,l.jsx)(`span`,{children:`形態`}),(0,l.jsxs)(`select`,{value:t,onChange:e=>i(e.target.value),children:[(0,l.jsx)(`option`,{value:`office`,children:`事務所`}),(0,l.jsx)(`option`,{value:`store`,children:`店舗`}),(0,l.jsx)(`option`,{value:`home`,children:`在宅`})]})]}),(0,l.jsxs)(`label`,{className:`skc__field`,children:[(0,l.jsx)(`span`,{children:`人数`}),(0,l.jsx)(`input`,{type:`number`,min:1,max:10,value:a,onChange:e=>{let t=Math.round(Number(e.target.value));o(Number.isFinite(t)?Math.min(10,Math.max(1,t)):1)}})]})]}),(0,l.jsxs)(`table`,{className:`skc__table`,children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{scope:`col`,className:`skc__check-col`,children:`確認`}),(0,l.jsx)(`th`,{scope:`col`,children:`カテゴリ`}),(0,l.jsx)(`th`,{scope:`col`,children:`内容`}),(0,l.jsx)(`th`,{scope:`col`,children:`相場レンジ`}),(0,l.jsx)(`th`,{scope:`col`,children:`Amazonで探す`})]})}),(0,l.jsx)(`tbody`,{children:v.categories.map(t=>{let r=g(t.id);return(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{className:`skc__check-col`,children:(0,l.jsx)(`input`,{type:`checkbox`,checked:!!p[t.id],onChange:()=>y(t.id),"aria-label":`${t.label}を確認済みにする`})}),(0,l.jsx)(`th`,{scope:`row`,children:t.label}),(0,l.jsx)(`td`,{children:t.itemsNote}),(0,l.jsxs)(`td`,{children:[d(t.lowYen),`〜`,d(t.highYen)]}),(0,l.jsx)(`td`,{children:r&&(0,l.jsx)(n,{query:r,tag:e})})]},t.id)})}),(0,l.jsx)(`tfoot`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{colSpan:3,children:(0,l.jsxs)(`strong`,{children:[`合計目安（`,f[t],`・`,a,`人）`]})}),(0,l.jsx)(`td`,{children:(0,l.jsxs)(`strong`,{children:[d(v.totalLowYen),`〜`,d(v.totalHighYen)]})}),(0,l.jsx)(`td`,{})]})})]}),(0,l.jsx)(`p`,{className:`skc__note`,children:`金額は一般的な相場に基づく目安であり、特定の商品・型番を推奨するものではありません。チェック状態はこの端末のブラウザにのみ保存され、他の人と共有されません。`}),(0,l.jsxs)(`p`,{className:`skc__disclaimer`,children:[`参考: 開業費用全体（全業種・設備資金全体）の中央値は`,u.format(c.referenceStats.medianTotalStartupCostYen),`円、平均値は`,u.format(c.referenceStats.meanTotalStartupCostYen),`円という調査結果があります（`,c.referenceStats.yearNote,`）。これはオフィス備品に限らない金額のため、本ツールの合計目安とは範囲が異なります。データ取得日: `,c.asOf]}),(0,l.jsx)(`style`,{children:`
        .skc__form {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }
        .skc__field {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          font-size: 0.85rem;
          color: var(--color-text-muted, #555);
        }
        .skc__field select,
        .skc__field input {
          font-size: 1rem;
          padding: 0.5rem 0.6rem;
          border: 1px solid var(--color-border, #ccc);
          border-radius: 6px;
          background: #fff;
          color: #1a1a1a;
        }
        .skc__table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.92rem;
          margin-bottom: 1rem;
        }
        .skc__table th, .skc__table td {
          text-align: left;
          padding: 0.6rem 0.6rem;
          border-bottom: 1px solid var(--color-border, #e3e1d8);
          vertical-align: top;
        }
        .skc__check-col { width: 2.5rem; text-align: center; }
        .skc__table tfoot td { border-bottom: none; padding-top: 0.9rem; }
        .skc__note, .skc__disclaimer {
          font-size: 0.8rem;
          color: var(--color-text-muted, #666);
          margin: 0 0 0.6rem;
        }
        @media (max-width: 560px) {
          .skc__table { font-size: 0.82rem; }
          .skc__table th, .skc__table td { padding: 0.4rem 0.35rem; }
        }
      `})]})}export{_ as default};