import path from 'node:path';
import {pathToFileURL} from 'node:url';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {JSDOM} from 'jsdom';
import manifest from '../src/screen-manifest.json' with {type:'json'};
import {classifyAction,groupFor,primaryRoutes,routes} from '../src/workflows.mjs';

// npm test prepares this bundle using the same screen manifest.
const out=path.resolve('tests/.generated/screens.mjs');
const screens=(await import(pathToFileURL(out))).default;
const audit=[];
for(let index=0;index<screens.length;index++){
 const frame=manifest[index],route=primaryRoutes[frame.id]||`/man-hinh/${frame.id.replace(':','-')}`,group=groupFor(frame.page);
 if(!primaryRoutes[frame.id])continue;
 const dom=new JSDOM(renderToStaticMarkup(React.createElement(screens[index])));
 for(const element of dom.window.document.querySelectorAll('.design-action')){
  if(element.closest('[data-name*="Aside"],[data-name*="Sidebar"]'))continue;
  const label=element.textContent.replace(/\s+/g,' ').trim(),name=element.dataset.name||'';
  const action=classifyAction({label,name,group,screen:route,inNavigation:!!element.closest('[data-name*="Aside"],[data-name*="Sidebar"],[data-name="Nav"]')});
  if(action.type==='menu'||(action.type==='navigate'&&!routes[action.path]&&!['/cap-phat/chi-tiet','/cap-phat/yeu-cau','/cap-phat/ban-giao/chi-tiet'].includes(action.path)))audit.push({screen:frame.id,route,name,label:label.slice(0,65),action});
 }
 dom.window.close();
}
const byRoute=Object.entries(Object.groupBy(audit,item=>item.route)).map(([route,items])=>({route,count:items.length,samples:[...new Set(items.map(item=>item.label||item.name))].slice(0,8)})).sort((a,b)=>b.count-a.count);
console.log(JSON.stringify({screens:screens.length,flagged:audit.length,byRoute:byRoute.slice(0,25),...(process.argv.includes('--detail')?{items:audit}:null)},null,2));
