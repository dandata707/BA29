const key='ba29-ui-v1';
let memory={forms:{},records:[],events:[]};
export function readStore(){try{return JSON.parse(localStorage.getItem(key))||memory;}catch{return memory;}}
export function writeStore(state){memory=state;try{localStorage.setItem(key,JSON.stringify(state));}catch{/* Browser storage may be disabled. Keep the current session usable. */}return state;}
export function storeField(id,value){const state=readStore();state.forms??={};state.forms[id]=value;writeStore(state);}
export function saveRecord(record){const state=readStore();state.records??=[];const item={id:globalThis.crypto?.randomUUID?.()||String(Date.now()),createdAt:new Date().toISOString(),...record};state.records.unshift(item);writeStore(state);return item;}
export function recordEvent(event){const state=readStore();state.events??=[];state.events.unshift({at:new Date().toISOString(),...event});state.events=state.events.slice(0,100);writeStore(state);}
