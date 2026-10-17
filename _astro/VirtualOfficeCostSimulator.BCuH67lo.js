import{t as e}from"./react.B3l9tXpq.js";import{t}from"./url.Ldfe2x3B.js";import{t as n}from"./jsx-runtime.DIiiIrYY.js";var r=e(),i={"address-only":[300,1100],"mail-heavy":[300,1100],incorporation:[1e3,3300]},a={none:[0,0],monthly:[0,500],weekly:[500,1500]},o=[1e3,3e3],s=[`郵便物の転送頻度と実費（1回あたりの実費・追加送料の有無）`,`来客対応・打ち合わせスペースの要否と追加料金`,`解約条件（違約金の有無・解約通知の期限）`,`入会金・保証金・更新料など、月額以外の追加料金`],c=`現在自宅の住所を使っている場合、特定商取引法に基づく表示や法人の登記簿では住所が公開されることがあります。住所の切り替えを検討する際の注意点は、サイト内の関連記事もあわせてご確認ください。`;function l(e,t,n){if(!Object.prototype.hasOwnProperty.call(t,e))throw RangeError(`${n}の指定が不正です`)}function u(e){let t=[...s];return e.usage===`incorporation`&&t.unshift(`契約する住所が法人登記に使えるか（登記不可の物件・プランでないか）`),e.usage===`mail-heavy`&&t.unshift(`郵便物の受け取り量が多い場合の保管期限・追加料金の有無`),e.needsPhoneNumber&&t.push(`電話番号サービスの提供方式（転送電話か専用番号か）と通話料金`),e.forwardingFrequency===`weekly`&&t.push(`本人限定受取郵便・書留などすぐに確認したい郵便物への対応方法`),t}function d(e){if(l(e.usage,i,`使い方`),l(e.forwardingFrequency,a,`郵便物の転送頻度`),e.contractTerm!==`monthly`&&e.contractTerm!==`annual`)throw RangeError(`契約期間の指定が不正です`);let t=i[e.usage],n=a[e.forwardingFrequency],r=e.needsPhoneNumber?o:[0,0],s=t[0]+n[0]+r[0],d=t[1]+n[1]+r[1],f=e.contractTerm===`annual`,p=f?Math.round(s*12*.85):s*12,m=f?Math.round(d*12*.95):d*12;return{monthly:{lowYen:s,highYen:d},annual:{lowYen:p,highYen:m},breakdown:{base:{lowYen:t[0],highYen:t[1]},forwarding:{lowYen:n[0],highYen:n[1]},phone:{lowYen:r[0],highYen:r[1]}},annualDiscountApplied:f,checklist:u(e),homeAddressNotice:e.currentSituation===`home-address`?c:null}}var f=n(),p=new Intl.NumberFormat(`ja-JP`),m=e=>`${p.format(Math.round(e))}円`,h=(e,t)=>e===t?m(e):`${m(e)}〜${m(t)}`;function g(){let[e,n]=(0,r.useState)(`address-only`),[i,a]=(0,r.useState)(`monthly`),[o,s]=(0,r.useState)(!1),[c,l]=(0,r.useState)(`monthly`),[u,p]=(0,r.useState)(``),m=(0,r.useMemo)(()=>d({usage:e,forwardingFrequency:i,needsPhoneNumber:o,contractTerm:c,currentSituation:u===``?void 0:u}),[e,i,o,c,u]);return(0,f.jsxs)(`div`,{className:`voc`,children:[(0,f.jsx)(`form`,{className:`voc__form`,onSubmit:e=>e.preventDefault(),children:(0,f.jsxs)(`div`,{className:`voc__grid`,children:[(0,f.jsxs)(`label`,{className:`voc__field`,children:[(0,f.jsx)(`span`,{children:`使い方`}),(0,f.jsxs)(`select`,{value:e,onChange:e=>n(e.target.value),children:[(0,f.jsx)(`option`,{value:`address-only`,children:`住所を使うだけ`}),(0,f.jsx)(`option`,{value:`incorporation`,children:`法人登記もする`}),(0,f.jsx)(`option`,{value:`mail-heavy`,children:`郵便物の受け取りが多い`})]})]}),(0,f.jsxs)(`label`,{className:`voc__field`,children:[(0,f.jsx)(`span`,{children:`郵便物の転送頻度`}),(0,f.jsxs)(`select`,{value:i,onChange:e=>a(e.target.value),children:[(0,f.jsx)(`option`,{value:`none`,children:`転送なし（自分で受け取りに行く）`}),(0,f.jsx)(`option`,{value:`monthly`,children:`月1回`}),(0,f.jsx)(`option`,{value:`weekly`,children:`週1回`})]})]}),(0,f.jsxs)(`label`,{className:`voc__field`,children:[(0,f.jsx)(`span`,{children:`電話番号が必要か`}),(0,f.jsxs)(`select`,{value:o?`yes`:`no`,onChange:e=>s(e.target.value===`yes`),children:[(0,f.jsx)(`option`,{value:`no`,children:`いいえ`}),(0,f.jsx)(`option`,{value:`yes`,children:`はい`})]})]}),(0,f.jsxs)(`label`,{className:`voc__field`,children:[(0,f.jsx)(`span`,{children:`契約期間`}),(0,f.jsxs)(`select`,{value:c,onChange:e=>l(e.target.value),children:[(0,f.jsx)(`option`,{value:`monthly`,children:`月払い`}),(0,f.jsx)(`option`,{value:`annual`,children:`年払い`})]})]}),(0,f.jsxs)(`label`,{className:`voc__field`,children:[(0,f.jsx)(`span`,{children:`今の状況（任意）`}),(0,f.jsxs)(`select`,{value:u,onChange:e=>p(e.target.value),children:[(0,f.jsx)(`option`,{value:``,children:`指定しない`}),(0,f.jsx)(`option`,{value:`home-address`,children:`自宅の住所を使っている`}),(0,f.jsx)(`option`,{value:`undecided`,children:`これから決める`})]})]})]})}),(0,f.jsxs)(`div`,{className:`voc__result`,children:[(0,f.jsx)(`table`,{className:`voc__table`,children:(0,f.jsxs)(`tbody`,{children:[(0,f.jsxs)(`tr`,{className:`voc__table-total`,children:[(0,f.jsx)(`th`,{scope:`row`,children:`月額の目安`}),(0,f.jsx)(`td`,{children:h(m.monthly.lowYen,m.monthly.highYen)})]}),(0,f.jsxs)(`tr`,{className:`voc__table-total`,children:[(0,f.jsx)(`th`,{scope:`row`,children:`年額の目安`}),(0,f.jsx)(`td`,{children:h(m.annual.lowYen,m.annual.highYen)})]})]})}),(0,f.jsxs)(`details`,{className:`voc__logic`,children:[(0,f.jsx)(`summary`,{children:`計算の考え方`}),(0,f.jsxs)(`ol`,{children:[(0,f.jsxs)(`li`,{children:[`住所利用の基本料金（目安） = 「住所を使うだけ・郵便物の受け取りが多い」なら`,h(300,1100),`/月、「法人登記もする」なら`,h(1e3,3300),`/月`]}),(0,f.jsxs)(`li`,{children:[`郵便物の転送頻度による加算（目安） = 月1回なら`,h(0,500),`、週1回なら`,h(500,1500),`（転送なしは加算なし）`]}),(0,f.jsxs)(`li`,{children:[`電話番号サービスが必要な場合の加算（目安） = `,h(1e3,3e3)]}),(0,f.jsx)(`li`,{children:`月額の目安 = 基本料金 + 転送頻度の加算 + 電話番号の加算（それぞれのレンジを合算）`}),(0,f.jsx)(`li`,{children:`年額の目安 = 月払いなら月額の目安 × 12。年払いなら、月払い換算の合計に対して5〜15%引きを適用（下限は15%引き・上限は5%引きで算出し、実際に起こり得る幅を示す）`})]})]}),(0,f.jsxs)(`div`,{className:`voc__breakdown`,children:[(0,f.jsx)(`p`,{className:`voc__breakdown-title`,children:`内訳（月額ベースの目安）`}),(0,f.jsxs)(`ul`,{children:[(0,f.jsxs)(`li`,{children:[`住所利用の基本料金: `,h(m.breakdown.base.lowYen,m.breakdown.base.highYen)]}),(0,f.jsxs)(`li`,{children:[`郵便物の転送: `,h(m.breakdown.forwarding.lowYen,m.breakdown.forwarding.highYen)]}),(0,f.jsxs)(`li`,{children:[`電話番号サービス: `,h(m.breakdown.phone.lowYen,m.breakdown.phone.highYen)]})]})]}),(0,f.jsxs)(`div`,{className:`voc__checklist`,children:[(0,f.jsx)(`p`,{className:`voc__checklist-title`,children:`契約前に確認したいこと`}),(0,f.jsx)(`ul`,{children:m.checklist.map(e=>(0,f.jsx)(`li`,{children:e},e))})]}),m.homeAddressNotice&&(0,f.jsxs)(`p`,{className:`voc__notice`,children:[m.homeAddressNotice,(0,f.jsx)(`br`,{}),`関連記事:`,` `,(0,f.jsx)(`a`,{href:t(`/articles/jitaku-juusho-hikoukai-kaigyou-houhou/`),children:`自宅住所を公開せず開業する方法｜特定商取引法・登記簿で住所が出る場面と対策`})]}),(0,f.jsx)(`p`,{className:`voc__disclaimer`,children:`表示している金額はすべて一般的な相場を参考にした「目安のレンジ」であり、特定の事業者の料金ではありません。実際の金額・条件は変更されることがあるため、契約前に必ず各社の公式サイトで確認してください。`})]}),(0,f.jsx)(`style`,{children:`
        .voc__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .voc__field {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          font-size: 0.85rem;
          color: var(--color-text-muted, #555);
        }
        .voc__field select {
          font-size: 1.05rem;
          padding: 0.7rem 0.85rem;
          border: 1px solid var(--color-border-strong, #ccc);
          border-radius: var(--radius-sm, 8px);
          background: #fff;
          color: var(--color-text, #1a1a1a);
        }
        .voc__table {
          width: 100%;
          border-collapse: collapse;
          margin: 0 0 1rem;
          font-size: 1rem;
        }
        .voc__table th, .voc__table td {
          text-align: left;
          padding: 0.6rem 0.7rem;
          border-bottom: 1px solid var(--color-border, #e3e1d8);
        }
        .voc__table-total th, .voc__table-total td {
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--color-primary, #1f3a2f);
        }
        .voc__logic { margin: 1rem 0; font-size: 0.92rem; }
        .voc__logic summary { cursor: pointer; font-weight: 700; }
        .voc__logic ol { margin-top: 0.6rem; }
        .voc__breakdown, .voc__checklist {
          margin: 1rem 0;
          font-size: 0.9rem;
        }
        .voc__breakdown-title, .voc__checklist-title {
          font-weight: 700;
          margin: 0 0 0.4rem;
        }
        .voc__breakdown ul, .voc__checklist ul {
          margin: 0;
          padding-left: 1.2rem;
          line-height: 1.8;
        }
        .voc__notice {
          padding: 0.75rem 1rem;
          background: #fff8e1;
          border: 1px solid #f0dca0;
          border-radius: 6px;
          font-size: 0.85rem;
          line-height: 1.7;
          color: #6b5300;
          margin: 1rem 0;
        }
        .voc__notice a { color: inherit; }
        .voc__disclaimer { font-size: 0.8rem; color: var(--color-text-muted, #666); }
      `})]})}export{g as default};