import fs from 'node:fs';
import crypto from 'node:crypto';
import {compileStyle} from './design-css.mjs';
fs.mkdirSync('src/screens',{recursive:true});
const rules=new Map(),unknown=new Set(),manifest=[];
const frames=JSON.parse(fs.readFileSync('.design/frames.json','utf8'));
const extras=[{id:'87:539',name:'Menu thao tác phiếu',page:'79:2',width:192,height:191.5},{id:'87:4029',name:'Xác nhận xử lý phiếu',page:'79:2',width:560,height:404},{id:'122:95',name:'Thông báo',page:'79:2',width:420,height:525},{id:'123:1367',name:'Menu biên bản bàn giao',page:'79:2',width:176,height:119}];
for(const frame of [...frames,...extras]){
 const file=frame.id.replace(':','-');
 let src=fs.readFileSync('.design/exports/'+file+'.jsx','utf8');
 src=src.replace(/<div\b[^>]*data-name="(?:Input[^\"]*|Options[^\"]*|Textarea[^\"]*|Text Area[^\"]*)"[^>]*>/g,tag=>{
  const c=tag.match(/className="([^"]+)"/)?.[1]||'';
  const check=/(?:size|w)-\[(?:1[2468]|20)px\]/.test(c)&&/(?:size|h)-\[(?:1[2468]|20)px\]/.test(c);
  const readonly=/bg-\[#f8fafc\]/.test(c);
  return tag.replace(/\s*\/?\>$/,end=>' data-field-hints="'+(check?'check ':readonly?'readonly ':'')+'"'+end);
 });
 src=src.replace(/https:\/\/www\.figma\.com\/api\/mcp\/asset\/([a-z0-9.-]+)/g,'/assets/$1');
 src=src.replace(/className="([^"]+)"/g,(_,classes)=>{
   const key='ba-'+crypto.createHash('sha1').update(classes).digest('hex').slice(0,10);
   if(!rules.has(key)){const result=compileStyle(classes);rules.set(key,result.css);result.unknown.forEach(t=>unknown.add(t));}
   return 'className="'+key+'"';
 });
 src='/** Screen '+frame.id+' — '+frame.name.replaceAll('*/','')+'. Presentation adapted from Figma. */\nimport { h } from "../design-runtime.jsx";\n'+src;
 fs.writeFileSync('src/screens/'+file+'.jsx',src);
 manifest.push({...frame,file});
}
fs.writeFileSync('src/design.css',[...rules].map(([name,css])=>'.'+name+'{'+css+'}').join('\n')+'\n');
fs.writeFileSync('src/screen-manifest.json',JSON.stringify(manifest,null,2));
fs.writeFileSync('.design/css-report.json',JSON.stringify({styles:rules.size,unsupported:[...unknown]},null,2));
console.log(JSON.stringify({screens:manifest.length,styles:rules.size,unsupported:[...unknown]}));
if(unknown.size)process.exitCode=1;
