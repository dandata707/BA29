import fs from 'node:fs';
const jobs=JSON.parse(fs.readFileSync('.design/assets-source.json','utf8'));
const byFile=new Map(jobs.map(x=>[x.file,x]));
for(const file of fs.readdirSync('.design/refreshed')){
 const original=fs.readFileSync('.design/exports/'+file,'utf8');const refreshed=fs.readFileSync('.design/refreshed/'+file,'utf8');
 const constants=s=>new Map([...s.matchAll(/const (\w+) = "(https:[^"]+)";/g)].map(m=>[m[1],m[2]]));
 const fresh=constants(refreshed);
 for(const [name,url] of constants(original)){const target=byFile.get(url.split('/').pop());if(target&&fresh.has(name))target.url=fresh.get(name);}
}
fs.writeFileSync('.design/assets-source.json',JSON.stringify(jobs,null,2));
console.log('Refreshed asset download sources.');
