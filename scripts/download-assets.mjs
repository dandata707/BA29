import fs from 'node:fs';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
const exec=promisify(execFile);
fs.mkdirSync('public/assets',{recursive:true});
const jobs=JSON.parse(fs.readFileSync('.design/assets-source.json','utf8'));
let at=0,done=0; const failures=[];
await Promise.all(Array.from({length:10},async()=>{
 while(at<jobs.length){const item=jobs[at++];const path='public/assets/'+item.file;
  if(fs.existsSync(path)&&fs.statSync(path).size>0){done++;continue;}
  try{let status='';for(let attempt=0;attempt<4;attempt++) {const r=await exec('curl.exe',['-f','-s','-S','-L','--retry','2','--max-time','60','-w','%{http_code}',item.url,'-o',path]);status=r.stdout;if(fs.statSync(path).size)break;}if(!fs.statSync(path).size)throw Error('Empty asset, HTTP '+status);done++;}
  catch(e){failures.push({file:item.file,error:e.message.slice(0,160)});}
  if(done>0&&done%100===0)console.log('Downloaded '+done+'/'+jobs.length);
  if(failures.length===1&&done===0)console.error(failures[0].error);
 }
}));
fs.writeFileSync('.design/download-report.json',JSON.stringify({total:jobs.length,downloaded:done,failures},null,2));
console.log(JSON.stringify({total:jobs.length,downloaded:done,failures:failures.length,firstFailure:failures[0]}));
if(failures.length)process.exitCode=1;
