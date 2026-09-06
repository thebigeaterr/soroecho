import{t as e}from"./react.B3l9tXpq.js";import{t}from"./jsx-runtime.DIiiIrYY.js";var n=e(),r={asOf:`2026-09-05`,sourceUrl:`https://business.amazon.co.jp/ja/find-solutions/business-prime/business-prime-for-small-businesses`,note:`公式ページ本文の記載をそのまま転記（2026-09-05取得）。ページ内に料金改定日の記載は無かったため、asOfは取得日のみを記録する。プラン内容・年会費・ユーザー数上限は予告なく変更される可能性があるため、必ず公式ページで最新情報を確認すること。非加入時（Businessプライム未加入）の配送料・送料無料の条件は同ページに具体的な記載が無かったため転記していない。本ツールでは代わりに「現在の1注文あたり送料」をユーザー自身に入力してもらう設計にしている。`,freeShippingNote:`Businessプライム加入時は「対象注文」で金額条件なしに無料のお急ぎ便・当日お急ぎ便を利用できると公式ページに記載。ただし対象外の商品・出品者があるため、実際に無料になるかは公式サイトで要確認。`,plans:[{id:`duo`,name:`Businessプライム Duo`,annualFeeYen:0,maxUsers:1,eligibility:`個人のAmazonプライム会員が対象（Businessプライムの中で唯一、既存のAmazonプライム会員資格を条件に無料で使えるプラン）。`,note:`無料のお急ぎ便など基本特典。`},{id:`essentials`,name:`Businessプライム Essentials`,annualFeeYen:5900,maxUsers:5,eligibility:null,note:`Duoの特典に加え、購買分析ダッシュボード・購買コントロール機能。`},{id:`small`,name:`Businessプライム Small`,annualFeeYen:13500,maxUsers:20,eligibility:null,note:`Essentialsの特典に加え、Guided Buying等の機能。`},{id:`medium`,name:`Businessプライム Medium`,annualFeeYen:37800,maxUsers:200,eligibility:null,note:`Smallの特典に加え、承認期間延長（最大14日間）、支払い期間延長申請（45日・60日）。`},{id:`unlimited`,name:`Businessプライム Unlimited`,annualFeeYen:27e4,maxUsers:null,eligibility:null,note:`ユーザー数無制限。購買コントロールの追加機能、不正購買検知など。`}]};function i(e,t){if(!Number.isFinite(e)||e<0)throw RangeError(`${t}は0以上の数値で入力してください`)}var a=r.plans;function o(e){if(i(e.annualOrderCount,`年間の注文回数`),i(e.averageOrderValueYen,`平均注文額`),i(e.currentShippingFeeYen,`現在の1注文あたり送料`),!Number.isFinite(e.userCount)||e.userCount<1)throw RangeError(`利用ユーザー数は1以上の数値で入力してください`);let t=a.map(t=>{let n=t.maxUsers===null||e.userCount<=t.maxUsers,r=e.annualOrderCount*e.currentShippingFeeYen,i=t.annualFeeYen-r,a=e.currentShippingFeeYen>0?t.annualFeeYen/e.currentShippingFeeYen:null;return{plan:t,supportsUserCount:n,annualShippingSavingsYen:r,netCostYen:i,breakEvenOrderCount:a,isOverBreakEven:a!==null&&e.annualOrderCount>=a}}),n=t.filter(e=>e.supportsUserCount&&e.isOverBreakEven),r=null;if(n.length>0)r=n.reduce((e,t)=>t.plan.annualFeeYen>e.plan.annualFeeYen?t:e).plan.id;else{let e=t.find(e=>e.plan.id===`duo`&&e.supportsUserCount);r=e?e.plan.id:null}return{plans:t,recommendedPlanId:r}}var s=r,c=t(),l=new Intl.NumberFormat(`ja-JP`),u=e=>`${l.format(Math.round(e))}円`;function d(e,t=0){let n=Number(e);return Number.isFinite(n)?n:t}function f(){let[e,t]=(0,n.useState)(`120`),[r,i]=(0,n.useState)(`8000`),[a,l]=(0,n.useState)(`500`),[f,p]=(0,n.useState)(`3`),m=(0,n.useMemo)(()=>{try{return{error:null,data:o({annualOrderCount:d(e),averageOrderValueYen:d(r),currentShippingFeeYen:d(a),userCount:d(f,1)})}}catch(e){return{error:e instanceof Error?e.message:`入力値を確認してください`,data:null}}},[e,r,a,f]);return(0,c.jsxs)(`div`,{className:`bpc`,children:[(0,c.jsx)(`form`,{className:`bpc__form`,onSubmit:e=>e.preventDefault(),children:(0,c.jsxs)(`div`,{className:`bpc__grid`,children:[(0,c.jsxs)(`label`,{className:`bpc__field`,children:[(0,c.jsx)(`span`,{children:`年間の注文回数（回）`}),(0,c.jsx)(`input`,{type:`number`,min:0,value:e,onChange:e=>t(e.target.value)})]}),(0,c.jsxs)(`label`,{className:`bpc__field`,children:[(0,c.jsx)(`span`,{children:`平均注文額（円）`}),(0,c.jsx)(`input`,{type:`number`,min:0,value:r,onChange:e=>i(e.target.value)})]}),(0,c.jsxs)(`label`,{className:`bpc__field`,children:[(0,c.jsx)(`span`,{children:`現在の1注文あたり送料（円）`}),(0,c.jsx)(`input`,{type:`number`,min:0,value:a,onChange:e=>l(e.target.value)})]}),(0,c.jsxs)(`label`,{className:`bpc__field`,children:[(0,c.jsx)(`span`,{children:`利用ユーザー数`}),(0,c.jsx)(`input`,{type:`number`,min:1,value:f,onChange:e=>p(e.target.value)})]})]})}),m.error&&(0,c.jsx)(`p`,{className:`bpc__error`,children:m.error}),m.data&&(0,c.jsxs)(`div`,{className:`bpc__result`,children:[(0,c.jsxs)(`table`,{className:`bpc__table`,children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{scope:`col`,children:`プラン`}),(0,c.jsx)(`th`,{scope:`col`,children:`年会費`}),(0,c.jsx)(`th`,{scope:`col`,children:`ユーザー数上限`}),(0,c.jsx)(`th`,{scope:`col`,children:`損益分岐（年間注文回数）`}),(0,c.jsx)(`th`,{scope:`col`,children:`現状での年間差額`})]})}),(0,c.jsx)(`tbody`,{children:m.data.plans.map(e=>(0,c.jsxs)(`tr`,{className:e.plan.id===m.data.recommendedPlanId?`bpc__row--recommended`:void 0,children:[(0,c.jsxs)(`th`,{scope:`row`,children:[e.plan.name,e.plan.id===m.data.recommendedPlanId&&(0,c.jsx)(`span`,{className:`bpc__badge`,children:`条件付きでおすすめ`})]}),(0,c.jsx)(`td`,{children:u(e.plan.annualFeeYen)}),(0,c.jsx)(`td`,{children:e.plan.maxUsers===null?`無制限`:`${e.plan.maxUsers}人`}),(0,c.jsx)(`td`,{children:e.breakEvenOrderCount===null?`算出不可（送料0円）`:`約${Math.ceil(e.breakEvenOrderCount)}回`}),(0,c.jsx)(`td`,{className:e.netCostYen<=0?`bpc__gain`:`bpc__loss`,children:e.netCostYen<=0?`${u(Math.abs(e.netCostYen))} お得`:`${u(e.netCostYen)} 割高`})]},e.plan.id))})]}),(0,c.jsx)(`p`,{className:`bpc__reasoning`,children:`「おすすめ」は、入力されたユーザー数に対応し、かつ現状の注文回数が損益分岐点を超えているプランの中で、最も年会費が高い（特典が手厚い）ものを条件付きで示したものです。実際の要否は特典内容や将来の注文数の見込みも踏まえて判断してください。`}),(0,c.jsxs)(`details`,{className:`bpc__logic`,children:[(0,c.jsx)(`summary`,{children:`計算の考え方`}),(0,c.jsxs)(`ol`,{children:[(0,c.jsx)(`li`,{children:`年間の送料削減額 = 現在の1注文あたり送料 × 年間の注文回数（Businessプライム加入で対象注文の送料が不要になると仮定）`}),(0,c.jsx)(`li`,{children:`損益分岐点（年間注文回数） = プランの年会費 ÷ 現在の1注文あたり送料`}),(0,c.jsx)(`li`,{children:`年間差額 = プランの年会費 − 年間の送料削減額（マイナスなら「お得」、プラスなら「割高」）`})]})]}),(0,c.jsxs)(`p`,{className:`bpc__disclaimer`,children:[s.freeShippingNote,` プラン内容・年会費は変更される可能性があるため、必ず`,(0,c.jsx)(`a`,{href:`https://business.amazon.co.jp/ja/find-solutions/business-prime/business-prime-for-small-businesses`,rel:`nofollow noopener`,target:`_blank`,children:`公式ページ`}),`で最新情報を確認してください。データ取得日: `,s.asOf]})]}),(0,c.jsx)(`style`,{children:`
        .bpc__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .bpc__field {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          font-size: 0.85rem;
          color: var(--color-text-muted, #555);
        }
        .bpc__field input {
          font-size: 1.05rem;
          padding: 0.7rem 0.85rem;
          border: 1px solid var(--color-border-strong, #ccc);
          border-radius: var(--radius-sm, 8px);
          background: #fff;
          color: var(--color-text, #1a1a1a);
        }
        .bpc__error {
          padding: 0.75rem 1rem;
          background: #fdecea;
          border: 1px solid #f2b8b5;
          border-radius: 6px;
          color: #611a15;
        }
        .bpc__table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        .bpc__table th, .bpc__table td {
          text-align: left;
          padding: 0.55rem 0.6rem;
          border-bottom: 1px solid var(--color-border, #e3e1d8);
          vertical-align: top;
        }
        .bpc__row--recommended { background: var(--color-primary-soft, #f4faf5); }
        .bpc__badge {
          display: inline-block;
          margin-left: 0.5rem;
          padding: 0.1rem 0.5rem;
          font-size: 0.72rem;
          border-radius: 999px;
          background: var(--color-primary, #1f3a2f);
          color: #fff;
          font-weight: 700;
        }
        .bpc__gain { color: var(--color-primary, #14532d); font-weight: 800; font-size: 1.05em; }
        .bpc__loss { color: #8a2e2e; }
        .bpc__reasoning { font-size: 0.85rem; color: var(--color-text-muted, #555); }
        .bpc__logic { margin: 1rem 0; font-size: 0.92rem; }
        .bpc__logic summary { cursor: pointer; font-weight: 700; }
        .bpc__disclaimer { font-size: 0.8rem; color: var(--color-text-muted, #666); }
        @media (max-width: 640px) {
          .bpc__table { font-size: 0.78rem; }
          .bpc__table th, .bpc__table td { padding: 0.4rem 0.35rem; }
        }
      `})]})}export{f as default};