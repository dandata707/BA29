const key='ba29-ui-v1';
let memory={forms:{},records:[],events:[]};
export function readStore(){
 let state;try{state=JSON.parse(localStorage.getItem(key))||memory;}catch{state=memory;}
 const cleanup='remove-allocation-033-034';
 if(!state.migrations?.[cleanup]){
  state.records=(state.records||[]).filter(record=>record.group!=='allocation'||!['CP-2026-034','CP-2026-033'].includes(record.code));
  state.migrations={...state.migrations,[cleanup]:true};
  writeStore(state);
 }
 return state;
}
export function writeStore(state){memory=state;try{localStorage.setItem(key,JSON.stringify(state));}catch{/* Browser storage may be disabled. Keep the current session usable. */}return state;}
export function storeField(id,value){const state=readStore();state.forms??={};state.forms[id]=value;writeStore(state);}
export function saveRecord(record){const state=readStore();state.records??=[];const item={id:globalThis.crypto?.randomUUID?.()||String(Date.now()),createdAt:new Date().toISOString(),...record};state.records.unshift(item);writeStore(state);return item;}
export function recordEvent(event){const state=readStore();state.events??=[];state.events.unshift({at:new Date().toISOString(),...event});state.events=state.events.slice(0,100);writeStore(state);}
