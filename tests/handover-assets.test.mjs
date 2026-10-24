import test from 'node:test';
import assert from 'node:assert/strict';
import {initialHandoverRows,handoverTotals,vndInWords} from '../src/handover-assets.mjs';

test('handover totals use selected assets and quantities, ignoring empty rows',()=>{
 assert.deepEqual(handoverTotals(initialHandoverRows()),{quantity:5,amount:37000000});
 assert.deepEqual(handoverTotals([{assetId:'office-chair',quantity:3},{assetId:'',quantity:10}]),{quantity:3,amount:3600000});
 assert.deepEqual(handoverTotals([]),{quantity:0,amount:0});
});

test('handover value in words follows the calculated amount',()=>{
 for(const [amount,words] of [
  [0,'Không đồng.'],[15,'Mười lăm đồng chẵn.'],[21,'Hai mươi mốt đồng chẵn.'],
  [105,'Một trăm lẻ năm đồng chẵn.'],[1005,'Một nghìn không trăm lẻ năm đồng chẵn.'],
  [37000000,'Ba mươi bảy triệu đồng chẵn.'],[40600000,'Bốn mươi triệu sáu trăm nghìn đồng chẵn.'],
  [1005000000,'Một tỷ không trăm lẻ năm triệu đồng chẵn.']
 ])assert.equal(vndInWords(amount),words);
});
