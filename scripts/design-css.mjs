/** Converts Figma's presentation hints to ordinary, dependency-free CSS. */
const literal=s=>s.replaceAll('_',' ').trim();
const edges={p:'padding',m:'margin'};
const dimension={w:'width',h:'height','min-w':'min-width','max-w':'max-width','min-h':'min-height','max-h':'max-height',gap:'gap','gap-x':'column-gap','gap-y':'row-gap',top:'top',bottom:'bottom',left:'left',right:'right',inset:'inset',leading:'line-height',tracking:'letter-spacing',z:'z-index',col:'grid-column',row:'grid-row','grid-cols':'grid-template-columns','grid-rows':'grid-template-rows'};
const map={
 'absolute':'position:absolute','relative':'position:relative','flex':'display:flex','grid':'display:grid','block':'display:block',
 'flex-col':'flex-direction:column','flex-wrap':'flex-wrap:wrap','flex-none':'flex:none','shrink-0':'flex-shrink:0',
 'content-stretch':'align-content:stretch','content-center':'align-content:center','items-start':'align-items:flex-start','items-end':'align-items:flex-end','items-center':'align-items:center','items-baseline':'align-items:baseline',
 'justify-center':'justify-content:center','justify-end':'justify-content:flex-end','justify-between':'justify-content:space-between','justify-self-stretch':'justify-self:stretch',
 'self-stretch':'align-self:stretch','self-center':'align-self:center','self-start':'align-self:flex-start','self-end':'align-self:flex-end',
 'bg-white':'background-color:#fff','text-white':'color:#fff','border-white':'border-color:#fff','bg-clip-padding':'background-clip:padding-box',
 'font-bold':'font-weight:700','font-semibold':'font-weight:600','font-medium':'font-weight:500','font-normal':'font-weight:400','italic':'font-style:italic','not-italic':'font-style:normal',
 'whitespace-nowrap':'white-space:nowrap','whitespace-pre':'white-space:pre','whitespace-pre-wrap':'white-space:pre-wrap','uppercase':'text-transform:uppercase',
 'text-center':'text-align:center','text-right':'text-align:right','text-ellipsis':'text-overflow:ellipsis','underline':'text-decoration-line:underline','line-through':'text-decoration-line:line-through',
 'decoration-solid':'text-decoration-style:solid','decoration-from-font':'text-decoration-thickness:from-font','isolate':'isolation:isolate',
 'pointer-events-none':'pointer-events:none','border':'border-width:1px','border-0':'border-width:0','border-2':'border-width:2px','border-solid':'border-style:solid','border-dashed':'border-style:dashed',
 'max-w-none':'max-width:none','bg-gradient-to-b':'background-image:linear-gradient(to bottom,var(--gradient-from,#fff),var(--gradient-via,#fff) 50%,var(--gradient-to,#fff))',
 'from-white':'--gradient-from:#fff','via-white':'--gradient-via:#fff','via-1/2':'--gradient-position:50%'
};
export function declaration(token){
 if(map[token])return map[token];
 if(token.startsWith('[')&&token.endsWith(']'))return literal(token.slice(1,-1));
 if(/^opacity-\d+$/.test(token))return 'opacity:'+Number(token.slice(8))/100;
 if(/^overflow(-[xy])?-/.test(token)){const m=token.match(/^overflow(-[xy])?-(.+)$/);return 'overflow'+(m[1]||'')+':'+m[2];}
 if(/^border-[tblr](-\d+)?$/.test(token)){const m=token.match(/^border-([tblr])(?:-(\d+))?$/);return 'border-'+({t:'top',b:'bottom',l:'left',r:'right'}[m[1]])+'-width:'+(m[2]||1)+'px';}
 if(/^(col|row)-\d+$/.test(token)){const [p,v]=token.split('-');return 'grid-'+p+'-start:'+v;}
 if(/^-?rotate-/.test(token))return '--rotation:'+token.replace('rotate-','')+'deg;transform:translate(var(--translate-x,0),var(--translate-y,0)) rotate(var(--rotation,0deg))';
 if(/^-?translate-[xy]-/.test(token)){const m=token.match(/^(-?)translate-([xy])-(.+)$/);const v=m[3]==='1/2'?'50%':m[3];return '--translate-'+m[2]+':'+m[1]+v+';transform:translate(var(--translate-x,0),var(--translate-y,0)) rotate(var(--rotation,0deg))';}
 const m=token.match(/^(.+?)-\[(.*)\]$/);let key,value;
 if(m){key=m[1];value=literal(m[2]);}
 else {const n=token.match(/^(.+?)-(full|px|0|1\/2|1\/4)$/);if(n){key=n[1];value=({full:'100%',px:'1px',0:'0','1/2':'50%','1/4':'25%'})[n[2]];}else return null;}
 if(dimension[key])return dimension[key]+':'+value.replace(/calc\((.*)\)/g,(_,v)=>'calc('+v.replace(/(?<=[%\d])([+-])(?=\d)/g,' $1 ')+')');
 if(key==='size')return 'width:'+value+';height:'+value;
 const spacing=key.match(/^([pm])([trblxy])?$/);
 if(spacing){const base=edges[spacing[1]],side=spacing[2];if(!side)return base+':'+value;return ({t:['top'],b:['bottom'],l:['left'],r:['right'],x:['left','right'],y:['top','bottom']})[side].map(x=>base+'-'+x+':'+value).join(';');}
 if(key==='bg')return 'background-color:'+value;
 if(key==='border')return 'border-color:'+value;
 if(key==='text')return (/^-?[\d.]+(px|rem|em|%)$/.test(value)?'font-size:':'color:')+value;
 if(key==='font'){
  const family=value.replaceAll("'",'').split(':')[0];
  const f=({'Inter':'Inter Variable','Plus Jakarta Sans':'Plus Jakarta Sans Variable','FreeSans':'Arial','Liberation Sans':'Arial','Nimbus Sans':'Arial','Liberation Mono':'Courier New','Font Awesome 6 Free':'Font Awesome 6 Free'})[family]||family;
  return 'font-family:"'+f+'",'+(f==='Courier New'?'monospace':'sans-serif');
 }
 if(key==='rounded')return 'border-radius:'+value;
 if(/^rounded-[tblr]{1,2}$/.test(key)){const side=key.slice(8);const corners={t:['top-left','top-right'],b:['bottom-left','bottom-right'],l:['top-left','bottom-left'],r:['top-right','bottom-right'],tl:['top-left'],tr:['top-right'],bl:['bottom-left'],br:['bottom-right']};return corners[side].map(c=>'border-'+c+'-radius:'+value).join(';');}
 if(key==='shadow')return 'box-shadow:'+value;
 if(key==='blur')return 'filter:blur('+value+')';
 if(key==='backdrop-blur')return 'backdrop-filter:blur('+value+')';
 if(key==='drop-shadow')return 'filter:'+value.split(/,(?![^()]*\))/).map(v=>'drop-shadow('+v+')').join(' ');
 if(key==='flex')return 'flex:'+value;
 if(key==='decoration')return 'text-decoration-thickness:'+value;
 if(key==='to')return '--gradient-to:'+value;
 return null;
}
export function compileStyle(tokens){
 const declarations=[];const unknown=[];
 for(const token of tokens.split(/\s+/)){const d=declaration(token);if(d)declarations.push(d);else unknown.push(token);}
 return {css:declarations.join(';'),unknown};
}
