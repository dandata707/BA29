import fs from 'node:fs';
const files=fs.readdirSync('.design/exports');
const tokens=new Set(); const assets=new Map(); const names=new Set();
for(const file of files){
 const src=fs.readFileSync('.design/exports/'+file,'utf8');
 for(const m of src.matchAll(/className="([^"]+)"/g)) m[1].split(/\s+/).forEach(t=>tokens.add(t));
 for(const m of src.matchAll(/https:\/\/www\.figma\.com\/api\/mcp\/asset\/[a-z0-9.-]+/g))assets.set(m[0],m[0].split('/').pop());
 for(const m of src.matchAll(/data-name="([^"]+)"/g))names.add(m[1]);
}
fs.writeFileSync('.design/classes.json',JSON.stringify([...tokens].sort(),null,2));
fs.writeFileSync('.design/assets-source.json',JSON.stringify([...assets].map(([url,file])=>({url,file})),null,2));
fs.writeFileSync('.design/node-names.json',JSON.stringify([...names].sort(),null,2));
console.log(JSON.stringify({screens:files.length,classes:tokens.size,assets:assets.size}));
