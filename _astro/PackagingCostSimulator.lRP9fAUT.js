import{t as e}from"./react.B3l9tXpq.js";import{t}from"./jsx-runtime.DIiiIrYY.js";import{t as n}from"./AmazonSearchLink.DzVE3Q5h.js";var r=e(),i={asOf:`2026-09-05`,sourceUrl:`https://www.yamato-shizaishop.jp/category/100SIZE_CB/`,note:`段ボール100サイズの単価は、ヤマト運輸の資材通販サイト「ネコハコ」の販売価格帯（1枚176〜220円・2026-09-05時点）を参考に中央値付近を採用した。80・60サイズの段ボール単価、緩衝材・テープの1件あたりコストは、100サイズを起点にサイズ比・一般的な使用量から見積もった運営者の目安（要更新）であり、統一された公的な単価統計は確認できなかった。まとめ買い割引率は業界の一般的な目安（10〜20%）で、公的な出典はない。これらの初期値はすべて「例」であり、フォーム上でユーザーが自由に変更できる。送料差の計算にはヤマト運輸の関東内（関東発関東着）料金（本ツール parcel-size と同一データ、src/data/parcel-carriers.json）を代表値として使用する。`,materialDefaultsYenPerUnit:{box60:90,box80:130,box100:180,cushionPerShipment:15,tapePerShipment:5},bulkDiscountRateDefault:.15,bulkDiscountRateMin:.1,bulkDiscountRateMax:.2,downsizeRatioDefault:.2,shippingReference:{sourceUrl:`https://www.kuronekoyamato.co.jp/ytc/search/estimate/ichiran.html`,asOf:`2026-09-05`,note:`ヤマト運輸 宅急便・関東発関東着（同一地域内）の料金を代表値として使用。`,yenBySize:{60:940,80:1230,100:1530}}};function a(e,t){if(!Number.isFinite(e)||e<0||e>1)throw RangeError(`${t}は0〜1の範囲で指定してください`)}function o(e,t){if(!Number.isFinite(e)||e<0)throw RangeError(`${t}は0以上の数値で入力してください`)}var s=i.shippingReference.yenBySize;function c(e){o(e.monthlyShipments,`月間出荷件数`),a(e.sizeMix.ratio60,`60サイズの割合`),a(e.sizeMix.ratio80,`80サイズの割合`),a(e.sizeMix.ratio100,`100サイズの割合`),a(e.bulkDiscountRate,`まとめ買い割引率`),a(e.downsizeRatio,`サイズダウン可能な割合`),o(e.materialCost.box60,`段ボール単価(60)`),o(e.materialCost.box80,`段ボール単価(80)`),o(e.materialCost.box100,`段ボール単価(100)`),o(e.materialCost.cushionPerShipment,`緩衝材単価`),o(e.materialCost.tapePerShipment,`テープ単価`);let t=e.sizeMix.ratio60+e.sizeMix.ratio80+e.sizeMix.ratio100;if(t<=0)throw RangeError(`サイズ構成比の合計が0です。少なくとも1つは0より大きい値にしてください`);let n=e.sizeMix.ratio60/t,r=e.sizeMix.ratio80/t,i=e.sizeMix.ratio100/t,c=e.monthlyShipments*n,l=e.monthlyShipments*r,u=e.monthlyShipments*i,d=t=>(t===60?e.materialCost.box60:t===80?e.materialCost.box80:e.materialCost.box100)+e.materialCost.cushionPerShipment+e.materialCost.tapePerShipment,f=c*d(60)+l*d(80)+u*d(100),p=c*s[60]+l*s[80]+u*s[100],m=f+p,h=f*(1-e.bulkDiscountRate)+p,g=u*e.downsizeRatio,_=l*e.downsizeRatio,v=g*(s[100]-s[80])+_*(s[80]-s[60]),y=h-v;return{currentMaterialMonthlyYen:f,currentTotalMonthlyYen:m,afterBulkMonthlyYen:h,afterOptimizationMonthlyYen:y,annualSavingsYen:(m-y)*12,shippingSavingsMonthlyYen:v}}var l=i,u=t(),d=new Intl.NumberFormat(`ja-JP`),f=e=>`${d.format(Math.round(e))}円`,p=l.materialDefaultsYenPerUnit;function m(e,t=0){let n=Number(e);return Number.isFinite(n)?n:t}function h({amazonTag:e}){let[t,i]=(0,r.useState)(`300`),[a,o]=(0,r.useState)(`40`),[s,d]=(0,r.useState)(`35`),[h,g]=(0,r.useState)(`25`),[_,v]=(0,r.useState)(String(p.box60)),[y,b]=(0,r.useState)(String(p.box80)),[x,S]=(0,r.useState)(String(p.box100)),[C,w]=(0,r.useState)(String(p.cushionPerShipment)),[T,E]=(0,r.useState)(String(p.tapePerShipment)),[D,O]=(0,r.useState)(String(Math.round(l.bulkDiscountRateDefault*100))),[k,A]=(0,r.useState)(String(Math.round(l.downsizeRatioDefault*100))),j=(0,r.useMemo)(()=>{try{return{error:null,data:c({monthlyShipments:m(t),sizeMix:{ratio60:m(a)/100,ratio80:m(s)/100,ratio100:m(h)/100},materialCost:{box60:m(_),box80:m(y),box100:m(x),cushionPerShipment:m(C),tapePerShipment:m(T)},bulkDiscountRate:m(D)/100,downsizeRatio:m(k)/100})}}catch(e){return{error:e instanceof Error?e.message:`入力値を確認してください`,data:null}}},[t,a,s,h,_,y,x,C,T,D,k]);return(0,u.jsxs)(`div`,{className:`pcs`,children:[(0,u.jsxs)(`form`,{className:`pcs__form`,onSubmit:e=>e.preventDefault(),children:[(0,u.jsxs)(`fieldset`,{className:`pcs__fieldset`,children:[(0,u.jsx)(`legend`,{children:`出荷件数・サイズ構成`}),(0,u.jsxs)(`label`,{className:`pcs__field`,children:[(0,u.jsx)(`span`,{children:`月間出荷件数（件）`}),(0,u.jsx)(`input`,{type:`number`,inputMode:`numeric`,min:0,value:t,onChange:e=>i(e.target.value)})]}),(0,u.jsxs)(`div`,{className:`pcs__grid3`,children:[(0,u.jsxs)(`label`,{className:`pcs__field`,children:[(0,u.jsx)(`span`,{children:`60サイズの割合（%）`}),(0,u.jsx)(`input`,{type:`number`,min:0,value:a,onChange:e=>o(e.target.value)})]}),(0,u.jsxs)(`label`,{className:`pcs__field`,children:[(0,u.jsx)(`span`,{children:`80サイズの割合（%）`}),(0,u.jsx)(`input`,{type:`number`,min:0,value:s,onChange:e=>d(e.target.value)})]}),(0,u.jsxs)(`label`,{className:`pcs__field`,children:[(0,u.jsx)(`span`,{children:`100サイズの割合（%）`}),(0,u.jsx)(`input`,{type:`number`,min:0,value:h,onChange:e=>g(e.target.value)})]})]}),(0,u.jsx)(`p`,{className:`pcs__hint`,children:`合計が100%でなくても比率として自動的に按分して計算します。`})]}),(0,u.jsxs)(`fieldset`,{className:`pcs__fieldset`,children:[(0,u.jsx)(`legend`,{children:`資材単価（例・変更可）`}),(0,u.jsxs)(`div`,{className:`pcs__grid3`,children:[(0,u.jsxs)(`label`,{className:`pcs__field`,children:[(0,u.jsx)(`span`,{children:`段ボール60（円/枚）`}),(0,u.jsx)(`input`,{type:`number`,min:0,value:_,onChange:e=>v(e.target.value)})]}),(0,u.jsxs)(`label`,{className:`pcs__field`,children:[(0,u.jsx)(`span`,{children:`段ボール80（円/枚）`}),(0,u.jsx)(`input`,{type:`number`,min:0,value:y,onChange:e=>b(e.target.value)})]}),(0,u.jsxs)(`label`,{className:`pcs__field`,children:[(0,u.jsx)(`span`,{children:`段ボール100（円/枚）`}),(0,u.jsx)(`input`,{type:`number`,min:0,value:x,onChange:e=>S(e.target.value)})]}),(0,u.jsxs)(`label`,{className:`pcs__field`,children:[(0,u.jsx)(`span`,{children:`緩衝材（円/件）`}),(0,u.jsx)(`input`,{type:`number`,min:0,value:C,onChange:e=>w(e.target.value)})]}),(0,u.jsxs)(`label`,{className:`pcs__field`,children:[(0,u.jsx)(`span`,{children:`テープ（円/件）`}),(0,u.jsx)(`input`,{type:`number`,min:0,value:T,onChange:e=>E(e.target.value)})]})]})]}),(0,u.jsxs)(`fieldset`,{className:`pcs__fieldset`,children:[(0,u.jsx)(`legend`,{children:`削減シナリオ`}),(0,u.jsxs)(`div`,{className:`pcs__grid3`,children:[(0,u.jsxs)(`label`,{className:`pcs__field`,children:[(0,u.jsx)(`span`,{children:`まとめ買い割引率（%）`}),(0,u.jsx)(`input`,{type:`number`,min:0,max:100,value:D,onChange:e=>O(e.target.value)})]}),(0,u.jsxs)(`label`,{className:`pcs__field`,children:[(0,u.jsx)(`span`,{children:`サイズダウン可能な割合（%）`}),(0,u.jsx)(`input`,{type:`number`,min:0,max:100,value:k,onChange:e=>A(e.target.value)})]})]}),(0,u.jsxs)(`p`,{className:`pcs__hint`,children:[`まとめ買い割引率は既定`,Math.round(l.bulkDiscountRateMin*100),`〜`,Math.round(l.bulkDiscountRateMax*100),`%を想定した目安です。自由に変更できます。`]})]})]}),j.error&&(0,u.jsx)(`p`,{className:`pcs__error`,children:j.error}),j.data&&(0,u.jsxs)(`div`,{className:`pcs__result`,children:[(0,u.jsx)(`table`,{className:`pcs__table`,children:(0,u.jsxs)(`tbody`,{children:[(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`th`,{scope:`row`,children:`現状月額（資材費+送料目安）`}),(0,u.jsx)(`td`,{children:f(j.data.currentTotalMonthlyYen)})]}),(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`th`,{scope:`row`,children:`まとめ買い後の月額`}),(0,u.jsx)(`td`,{children:f(j.data.afterBulkMonthlyYen)})]}),(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`th`,{scope:`row`,children:`サイズ最適化後の月額`}),(0,u.jsx)(`td`,{children:f(j.data.afterOptimizationMonthlyYen)})]}),(0,u.jsxs)(`tr`,{className:`pcs__table-total`,children:[(0,u.jsx)(`th`,{scope:`row`,children:`年間削減額`}),(0,u.jsx)(`td`,{children:f(j.data.annualSavingsYen)})]})]})}),(0,u.jsxs)(`details`,{className:`pcs__logic`,children:[(0,u.jsx)(`summary`,{children:`計算の考え方`}),(0,u.jsxs)(`ol`,{children:[(0,u.jsx)(`li`,{children:`現状月額 = 資材費（件数×資材単価の合計） + 送料目安（サイズ構成×ヤマト運輸 関東内料金）`}),(0,u.jsx)(`li`,{children:`まとめ買い後 = 資材費のみ割引率分を減額（送料は変わらない）`}),(0,u.jsx)(`li`,{children:`サイズ最適化後 = まとめ買い後の資材費 + （一部の荷物を1段階小さいサイズへ変更した後の送料）`}),(0,u.jsx)(`li`,{children:`年間削減額 = （現状月額 − サイズ最適化後の月額）× 12`})]})]}),(0,u.jsx)(`p`,{className:`pcs__disclaimer`,children:`資材単価は公開相場を参考にした「例」の初期値です。送料はヤマト運輸 関東発関東着の料金を代表値として使用しています。実際の単価・送料は取引先や地域によって異なるため、目安としてご利用ください。`}),(0,u.jsxs)(`div`,{className:`pcs__amazon-links`,children:[(0,u.jsx)(n,{query:`段ボール まとめ買い`,tag:e}),(0,u.jsx)(n,{query:`緩衝材 業務用`,tag:e}),(0,u.jsx)(n,{query:`OPPテープ 業務用`,tag:e})]})]}),(0,u.jsx)(`style`,{children:`
        .pcs__fieldset {
          border: 1px solid var(--color-border, #e3e1d8);
          border-radius: 8px;
          padding: 0.9rem 1rem 1rem;
          margin: 0 0 1rem;
        }
        .pcs__fieldset legend {
          padding: 0 0.4rem;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-text-muted, #555);
        }
        .pcs__field {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          font-size: 0.85rem;
          color: var(--color-text-muted, #555);
          margin-bottom: 0.6rem;
        }
        .pcs__field input {
          font-size: 1rem;
          padding: 0.5rem 0.6rem;
          border: 1px solid var(--color-border, #ccc);
          border-radius: 6px;
          background: #fff;
          color: #1a1a1a;
        }
        .pcs__grid3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 0.6rem 0.9rem;
        }
        .pcs__hint { font-size: 0.78rem; color: #777; margin: 0.2rem 0 0; }
        .pcs__error {
          padding: 0.75rem 1rem;
          background: #fdecea;
          border: 1px solid #f2b8b5;
          border-radius: 6px;
          color: #611a15;
        }
        .pcs__table {
          width: 100%;
          border-collapse: collapse;
          margin: 1rem 0;
          font-size: 1rem;
        }
        .pcs__table th, .pcs__table td {
          text-align: left;
          padding: 0.6rem 0.7rem;
          border-bottom: 1px solid var(--color-border, #e3e1d8);
        }
        .pcs__table-total th, .pcs__table-total td {
          font-weight: 700;
          font-size: 1.1rem;
          color: #14532d;
        }
        .pcs__logic { margin: 1rem 0; font-size: 0.92rem; }
        .pcs__logic summary { cursor: pointer; font-weight: 700; }
        .pcs__logic ol { margin-top: 0.6rem; }
        .pcs__disclaimer { font-size: 0.8rem; color: var(--color-text-muted, #666); }
        .pcs__amazon-links { margin-top: 0.9rem; }
      `})]})}export{h as default};