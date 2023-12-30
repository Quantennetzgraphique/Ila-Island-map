/* 伊良クレオル°語ル漢字音  / Ila-Klé'ol-Ŋǝ́'r Hánzǝ́'im 
 * 伊良クレオール語の漢字音 / 伊良克里奧爾語漢字音
 * 
 * https://note.com/hoenggerbergerin/n/n6a48d644e142 
 * 
 * 程式ヲ『切韻音系自動推導器』ヘ貼ス入ストナテ、任意デ文章ラ°イ伊良クレオル°語ル漢字音ヲ成ス来スネ。
 * Deŋşiǝ́ko «Sél'ýn Im'ié Zǝ́dóŋ Şydáuxí» e þévs-naps-to-na te, Ñím'í-de vønçiaŋ-lái Ila-Klé'ol-Ŋǝ́'r hánzǝ́'imó ós-tops-ne. 
 * 貼此程式於『切韻音系自動推導器』中、可得伊良克里奧爾語之漢字音。
 * このプログラムを『切韻音系自動推導器』に貼り付けると、任意の文章に対して伊良クレオール語の漢字音が生成できる。
 * 
 * https://nk2028.shn.hk/qieyun-autoderiver/ 
 * 
 * 伊良クレオール語の發音 (25子音+9母音+2聲調) 
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
 * |  ッ   '   /ʔ/ |  ク  K k  /k/ |  シ° Ç ç /tʃ/ |  ス° C c /ts/ |  ツ  T t  /t/ |  プ  P p  /p/ |
 * |  °◌  H h  /h/ | °ク  X x  /x/ |  シ  Ş ş  /ʃ/ |  ス  S s  /s/ | °ツ  Þ þ  /θ/ |  フ  F f  /f/ |
 * |  ◌“  Q q /ʕʷ/ |  グ  G g  /g/ |  ジ  J j /dʒ/ |  ズ  Z z /dz/ |  ヅ  D d  /d/ |  ブ  B b  /b/ |
 * |  ン  -ɴ-  /N/ |  ク° Ŋ ŋ  /ŋ/ |  ニ  Ñ ñ  /ɲ/ |  ヌ  N n  /n/ |  ル° L l  /l/ |  ム  M m  /m/ |
 * |  ア  A a  /a/ |  エ  E e  /e/ |  イ  I i  /i/ |  オ  Ǝ ǝ  /ɯ/ |  ル  R r  /ɻ/ |  ヴ  V v  /v/ |
 * |  ヲ  O o  /o/ | エウ Ø ø  /ø/ |  ヰ  Y y  /y/ |  ◌.   ◌   /˨/ |  .◌   ◌́    /˦/ |  ウ  U u  /u/ |
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
 *   音節 = 子音, 介音, 母音, 聲調, 收音, 尾音
 *   子音 = '|h|q|ɴ | k|x|g|ŋ | ç|ş|j|ñ | c|s|z|n | t|þ|d|l | p|f|b|m|v 
 *   介音 = w|i|y|r|wr|l|s  (w=u)
 *   母音 = a|e|i|ǝ|r|o|ø|y|u 
 *   聲調 = 低|高
 *   收音 = i|u|v|m|l|n|ñ|ŋ|ɴ|s
 *   尾音 = p|t|s|ş|k|ps|c|ks
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
 * 
 * 参考 nk2028 
 * https://github.com/nk2028/qieyun-examples
 * 
 * @author Eqerin
 */

// 1. 選項 

if (!音韻地位) return [
  ['$legacy', true],
  ['表記', [1, '羅馬字 (s, ş, ñ, ø)', 'ASCII (s, sh, gn, oe)', 'カタカナ (ス, シ, ニ, エウ)', 'IPA (s, ɕ, ɲ, ø)']], // カタカナ暫不可用
  ['聲調記號', [1, '◌́', 'h', '無']], // 僅羅馬字及ASCII模式下有效; IPA模式下自動重置爲 '◌́'
  // ['小書きヰヱヲ', true],
  ['極常用字', [2, '漢音', '慣用音']],
  ['音訓選擇', [3, '音讀', '訓讀', '訓上音下']],
];

if (選項.表記 === 'カタカナ (ス, シ, ニ, エウ)') 選項.表記 = '羅馬字 (s, ş, ñ, ø)';
if (選項.表記 === 'IPA (s, ɕ, ɲ, ø)') 選項.聲調記號 = '◌́';

// 2. 推導規則

const is = (...x) => 音韻地位.屬於(...x);
const when = (...x) => 音韻地位.判斷(...x);

function 調整音韻地位() {
  function 調整(表達式, 調整屬性, 字頭串 = null) {
    if (typeof (字頭串) === 'string' && !字頭串.includes(字頭)) return;
    if (is(表達式)) 音韻地位 = 音韻地位.調整(調整屬性);
  }

  // 輕唇化例外
  調整('明母 尤韻', { 等: '一', 韻: '侯' });
  調整('明母 東韻', { 等: '一' });

  調整('云母 通曾攝 舒聲 非 開口', { 母: '匣' }); // 雄熊
  調整('云母 文韻', { 韻: '眞' }, '韻韵'); // 《廣韻》錯誤
  調整('莊母 支韻 開口', { 韻: '佳', 等: '二' });  // 《廣韻》未收的莊支化佳字

  // [慧琳反切體現的, 唐代用韻體現的, 據今音推測的]
  const 蟹攝二等入假攝字 = ['崖咼(呙)扠涯搋派差絓畫(画)罣罷(罢)', '佳鼃娃解釵(钗)卦柴', '哇洼蛙灑蝸話(话)掛挂查叉杈衩'].join('');
  const 流攝脣音入遇攝字 = ['浮戊母罦罘蜉矛茂覆懋拇某負(负)阜', '謀(谋)部畝(亩)畮婦(妇)不否桴富牟缶', '復複(复)副牡'].join('');
  調整('蟹攝 二等', { 韻: '麻' }, 蟹攝二等入假攝字);
  調整('幫組 尤侯韻', { 韻: is`尤韻` ? '虞' : '模' }, 流攝脣音入遇攝字);

  // 調整('全濁 上聲', { 聲: '去' });
}

調整音韻地位();

const 輕唇化條件 = '幫組 東鍾微虞廢文元歌陽尤凡韻 三等 非 重紐A類';

function 聲母規則() {
  return when([
	[輕唇化條件, {
      幫: 'f', 滂: 'f', 並: 'v', 明: 'v',
    }[音韻地位.母]],
    ['', {
      幫: 'p', 滂: 'f', 並: 'b', 明: 'm',
      端: 't', 透: 'þ', 定: 'd', 泥: 'n', 
      知: 't', 徹: 'þ', 澄: 'd', 孃: 'n',
      精: 'c', 清: 's', 從: 'z', 心: 's', 邪: 'z',
      莊: 'ç', 初: 'ş', 崇: 'j', 生: 'ş', 俟: 'j',
      章: 'ç', 昌: 'ş', 常: 'j', 書: 'ş', 船: 'j', 
      見: 'k', 溪: 'x', 羣: 'ɡ', 疑: 'ŋ',
      影: '\'',曉: 'h', 匣: is('一等 (開口 或 東冬模尤韻)') ? 'q' : '\'', 云: '\'', 
	  來: 'l', 日: 'ñ', 以: '\'',  
    }[音韻地位.母]],
  ]);
}

function 韻母規則() {
  // 通攝
  if (is('東韻 一等'))            return  'oŋ';
  if (is('東韻 三等 幫滂並母'))   return is('舒聲') ? 'oŋ' : 'uk';
  if (is('東韻 三等 明母'))       return  'oŋ';
  if (is('東韻 三等 知組'))       return 'ruŋ';
  if (is('東韻 三等 精組'))       return  'uŋ';
  if (is('東韻 三等'))            return 'iuŋ';
  if (is('冬韻'))                 return  'oŋ';
  if (is('鍾韻 知組'))            return 'roŋ';
  if (is('鍾韻 幫精組'))          return  'oŋ';
  if (is('鍾韻'))                 return 'ioŋ';

  // 江攝
  if (is('江韻'))                 return 'rǝŋ';

  // 止攝
  if (is('支脂之微韻 開口 知組')) return 'r';
  if (is('支脂之微韻 開口 精組')) return 'ǝ';
  if (is('支脂之微韻 開口'))      return 'i';
  if (is('支脂之微韻 幫組'))      return 'i';
  if (is('支脂之微韻 合口 知組')) return 'ru';
  if (is('支脂之微韻 合口 精組')) return 'u';
  if (is('支脂之微韻 合口'))      return 'y';

  // 遇攝
  if (is('魚韻 知組'))                     return 'rǝ';
  if (is('魚韻 (莊章組 或 影匣云以日母)')) return 'iǝ';
  if (is('魚韻'))                          return  'ǝ';
  
  if (is('虞韻 知組'))             return 'ru';
  if (is('虞韻 (莊章組 或 日母)')) return 'iu';
  if (is('虞韻 影匣云以母'))       return 'wu';
  if (is('虞韻'))                  return  'u';
  
  if (is('模韻'))                  return  'o';

  // 蟹攝
  if (is('祭齊韻 開口'))    return is('匣云以母') ? 'ie' : 'e';
  if (is('祭齊韻 幫組'))    return    'e';
  if (is('祭齊韻 合口'))    return is('精組') ? 'we' : 'ye';
  
  if (is('佳皆夬韻 開口'))  return  'rai';
  if (is('佳皆夬韻 幫組'))  return  'rai';
  if (is('佳皆夬韻 合口'))  return 'wrai';
  if (is('灰韻'))           return  'wai';
  if (is('泰韻 合口'))      return  'wai';
  if (is('咍韻'))           return   'ai';
  if (is('泰韻 開口'))      return   'ai';
  if (is('泰廢韻 幫組'))    return   'ai';
  
  if (is('廢韻 開口'))      return is('匣云以母') ? 'ie' : 'e';
  if (is('廢韻 合口'))      return is('精組') ? 'we' : 'ye';

  // 臻攝
  if (is('眞韻 開口 知組')) return   'rn';
  if (is('眞韻 開口 精組')) return   'ǝn';
  if (is('眞韻 開口'))      return   'iñ';
  if (is('眞韻 幫組'))      return   'iñ';
  if (is('眞韻 合口 知組')) return  'run';
  if (is('眞韻 合口 精組')) return   'un';
  if (is('眞韻 合口'))      return   'yñ';
  if (is('臻韻'))           return   'rn';
  
  if (is('文韻'))           return is('匣云以母') ? 'yøn' : 'øn';
  if (is('欣韻'))           return   'iñ';
  
  if (is('元韻 幫組'))      return   'an';
  if (is('元韻 開口'))      return is('匣云以母') ? 'ien' : 'en';
  if (is('元韻 合口'))      return is('精組') ? 'wen' : 'yen';
  
  if (is('魂韻'))           return is('匣母') ? 'won' : 'on';
  if (is('痕韻'))           return   'on';

  // 山攝
  if (is('寒韻 開口'))      return   'an';
  if (is('寒韻 幫組'))      return   'an';
  if (is('寒韻 合口'))      return  'wan';
  if (is('刪山韻 開口'))    return  'ran';
  if (is('刪山韻 幫組'))    return  'ran';
  if (is('刪山韻 合口'))    return 'wran';
  
  if (is('仙先韻 開口'))    return is('匣云以母') ? 'ien' : 'en';
  if (is('仙先韻 幫組'))    return   'en';
  if (is('仙先韻 合口'))    return is('精組') ? 'wen' : 'yen';

  // 效攝
  if (is('蕭宵韻'))         return is('匣云以母') ? 'yø' : 'ø';

  if (is('肴韻'))           return  'rau';
  if (is('豪韻'))           return   'au';

  // 果攝
  if (is('歌韻 幫組'))             return   'a';
  if (is('歌韻 一等 開口'))        return   'a';
  if (is('歌韻 一等 合口'))        return  'wa';
  if (is('歌韻 三等 開口'))        return  'ia';
  if (is('歌韻 三等 合口 精組'))   return  'wa';
  if (is('歌韻 三等 合口'))        return  'ya';

  // 假攝
  if (is('麻韻 二等 幫組'))        return  'ra';
  if (is('麻韻 二等 開口'))        return  'ra';
  if (is('麻韻 二等 合口'))        return 'wra';
  if (is('麻韻 三等 幫組'))        return  'ia';
  if (is('麻韻 三等 開口 精組'))   return   'a';
  if (is('麻韻 三等 開口 知莊組')) return  'ra';
  if (is('麻韻 三等 開口'))        return  'ia';

  // 宕攝
  if (is('陽韻 幫組'))        return   'aŋ';
  if (is('陽韻 開口 精組'))   return   'aŋ';
  if (is('陽韻 開口 知莊組')) return  'raŋ';
  if (is('陽韻 開口'))        return  'iaŋ';
  if (is('陽韻 合口 精組'))   return  'waŋ';
  if (is('陽韻 合口 知莊組')) return 'wraŋ';
  if (is('陽韻 合口'))        return  'yaŋ';
  if (is('唐韻 幫組'))        return   'aŋ';
  if (is('唐韻 開口'))        return   'aŋ';
  if (is('唐韻 合口'))        return  'waŋ';

  // 梗攝
  if (is('庚韻 二等 幫組'))   return  'raŋ';
  if (is('庚韻 二等 開口'))   return  'raŋ';
  if (is('庚韻 二等 合口'))   return 'wraŋ';
  
  if (is('庚韻 三等 開口'))   return is('匣云以母') ? 'ieŋ' : 'eŋ';
  if (is('庚韻 三等 幫組'))   return   'eŋ';
  if (is('庚韻 三等 合口'))   return is('精組') ? 'weŋ' : 'yeŋ';
  
  if (is('耕韻 開口'))        return  'rǝŋ';
  if (is('耕韻 幫組'))        return  'rǝŋ';
  if (is('耕韻 合口'))        return 'wrǝŋ';
  
  if (is('清青韻 開口'))      return is('匣云以母') ? 'ieŋ' : 'eŋ';
  if (is('清青韻 幫組'))      return   'eŋ';
  if (is('清青韻 合口'))      return is('精組') ? 'weŋ' : 'yeŋ';

  // 曾攝
  if (is('蒸韻 開口 知莊組')) return  'rǝŋ';
  if (is('蒸韻 開口 精組'))   return   'ǝŋ';
  if (is('蒸韻 開口'))        return  'iǝŋ';
  if (is('蒸韻 幫組'))        return  'iǝŋ';
  if (is('蒸韻 合口 知莊組')) return 'wrǝŋ';
  if (is('蒸韻 合口 精組'))   return  'wǝŋ';
  if (is('蒸韻 合口'))        return  'yǝŋ';
  if (is('登韻 開口'))        return   'ǝŋ';
  if (is('登韻 幫組'))        return   'ǝŋ';
  if (is('登韻 合口'))        return  'wǝŋ';

  // 流攝
  if (is('尤韻 精組'))   return   'u';
  if (is('尤韻 知莊組')) return  'ru';
  if (is('尤韻'))        return  'iu';
  if (is('侯韻'))        return   'o';
  if (is('幽韻'))        return  'iu';

  // 深攝
  if (is('侵韻 知組'))   return  'rm';
  if (is('侵韻 精組'))   return  'ǝm';
  if (is('侵韻'))        return  'im';

  // 咸攝 
  if (is('覃談凡韻'))    return  'am';
  if (is('鹽添嚴韻'))    return is('匣云以母') ? 'iem' : 'em';
  if (is('咸銜韻'))      return 'ram';

  throw new Error('無韻母規則');
}

let 聲母 = 聲母規則();
let 韻母 = 韻母規則();

if (is('入聲')) {
  if (韻母.endsWith('m')) 韻母 = 韻母.slice(0, -1) + 'v';
  else if (韻母.endsWith('n')) 韻母 = 韻母.slice(0, -1) + 'l';
  else if (韻母.endsWith('ñ')) 韻母 = 韻母.slice(0, -1) + 'l';
  else if (韻母.endsWith('ŋ')) 韻母 = 韻母.slice(0, -1) + 'k';
}

function 聲調規則() {
  return is('平聲 或 全濁 入聲') ? 'L' : 'H';
}

let 聲調 = 聲調規則();
let 音讀 = {聲: 聲母, 韻: 韻母, 調: 聲調};

// 3. 特殊音讀及常用訓讀

const 慣用音訓 = {
  一: ['\'',  'rl', 'H'], 
  四: ['\'', 'iøn', 'L'], 
  不: ['',    'aŋ', 'H'], 
  無: ['',    'aŋ', 'H'], 
  之: ['',    'r',  'L'], 
  有: ['\'',  'øk', 'H'], 
  在: ['\'',  'øk', 'H'], 
  良: ['l',   'a',  'L'], 
  乎: ['',    'o',  'L'], 
  也: ['',   'ia',  'L'], 
};

if (選項.極常用字 === '慣用音' && 慣用音訓.hasOwnProperty(字頭)) 
  [音讀.聲, 音讀.韻, 音讀.調] = 慣用音訓[字頭];

const 訓讀辭書 = {
  日: ['m',  'it', 'H'],  月: ['t',  'yk', 'H'],  // 天體: 訓讀, 時間: 音讀
  山: ['h',  'am', 'H'],  海: ['m',  'ǝ',  'L'],  // 通稱: 訓讀, 固有名詞: 音訓各有
  田: ['d',  'a',  'L'],  野: ['gl', 'uk', 'H'],  // 通稱: 訓讀, 固有名詞: 音訓各有
  市: ['t',  'i',  'L'],  町: ['m',  'et', 'H'],  // 市場: 訓讀, 都市: 音讀
  人: ['l',  'aks','L'],  等: ['\'','ra',  'L'],  
  時: ['þ',  'ǝt', 'L'],  祈: ['n',  'ol', 'L'],
  成: ['\'', 'os', 'H'],  爲: is('平聲') ? ['\'', 'os', 'L'] : ['', '', ''],  
  上: ['\'', 'eş', 'H'],  下: ['v',  'ol', 'L'],  
  左: ['t',  'ǝi', 'L'],  右: ['ñ',  'as', 'L'],  
  前: ['s',  'ek', 'H'],  後: ['n',  'øt', 'L'],  // 時間: 訓讀, 空間: 音讀 
  内: ['n',  'ap', 'L'],  外: ['ŋ','wrai', 'H'], 
  往: ['s',  'el', 'L'],  來: ['t',  'op', 'L'],  
  立: ['t',  'at', 'L'],  起: ['t',  'at', 'L'],  
  築: ['t',  'at', 'L'],  建: ['t',  'at', 'L'],  
  爻: ['b',  'it', 'L'],  網: ['n',  'et', 'H'],  // bit = ビット & net = ネット 
};

let 訓讀 = {聲: '', 韻: '', 調: ''};
if ((選項.音訓選擇 === '訓讀' || 選項.音訓選擇 === '訓上音下') && 訓讀辭書.hasOwnProperty(字頭)) 
  [訓讀.聲, 訓讀.韻, 訓讀.調] = 訓讀辭書[字頭];

// 4. 出力形式變換

function Roman2ASCII(音節) {
  音節.聲 = [...音節.聲].map((c) => {
    switch (c) {
      case 'ç': return 'ch';
      case 'ş': return 'sh';
      case 'þ': return 'th';
      case 'ñ': return 'nh';
      case 'ŋ': return 'ng';
      default: return c;
    }
  }).join('');
  音節.韻 = [...音節.韻].map((c) => {
    switch (c) {
      case 'ǝ': return 'eo';
      case 'ø': return 'oe';
      case 'ş': return 'sh';
      case 'ñ': return 'nh';
      case 'ŋ': return 'ng';
      default: return c;
    }
  }).join('');
  return 音節;
}

function Roman2IPA(音節) {
  if (音節.韻.startsWith('e') && ! /[cnsz\']/g.test(音節.聲))       音節.韻 = 'j' + 音節.韻;
  else if (音節.韻.startsWith('ø')  && ! /[cnsz\']/g.test(音節.聲)) 音節.韻 = 'ɥ' + 音節.韻;
  else if (音節.韻.startsWith('i')  &&  /[aeǝoøu]/g.test(音節.韻))  音節.韻 = 'j'  + 音節.韻.slice(1);
  else if (音節.韻.startsWith('y')  &&  /[aeǝoøu]/g.test(音節.韻))  音節.韻 = 'ɥ'  + 音節.韻.slice(1);
  else if (音節.韻.startsWith('r')  &&  /[aeǝoøu]/g.test(音節.韻))  音節.韻 = 'ɻ'  + 音節.韻.slice(1);
  else if (音節.韻.startsWith('r')  && !/[aeǝoøu]/g.test(音節.韻))  音節.韻 = 'ɻ̍'  + 音節.韻.slice(1);
  else if (音節.韻.startsWith('wr') &&  /[aeǝoøu]/g.test(音節.韻))  音節.韻 = 'ɻʷ' + 音節.韻.slice(2);
  
  if (音節.韻.includes('ǝ'))  音節.韻 = 音節.韻.replace('ǝ', 'ɯ'); 
  if (音節.韻.includes('ɯi')) 音節.韻 = 音節.韻.replace('ɯi', 'ɯj');
  if (音節.韻.includes('ai')) 音節.韻 = 音節.韻.replace('ai', 'aj');
  if (音節.韻.includes('au')) 音節.韻 = 音節.韻.replace('au', 'aw');
  if (音節.韻.includes('ñ'))  音節.韻 = 音節.韻.replace('ñ', 'ɲ');
  if (音節.韻.includes('ş'))  音節.韻 = 音節.韻.replace('ş', 'jɕ');
  if (音節.韻.includes('c'))  音節.韻 = 音節.韻.replace('c', 'ts');
  
  if (音節.聲.startsWith('þ')) 音節.聲 = 'θ' + 音節.聲.slice(1);
  else if (音節.聲.startsWith('c')) 音節.聲 = 'ts' + 音節.聲.slice(1);
  else if (音節.聲.startsWith('z')) 音節.聲 = 'dz' + 音節.聲.slice(1);
  else if (音節.聲.startsWith('ç') && 音節.韻.startsWith('ɻ')) 音節.聲 = 'tʂ' + 音節.聲.slice(1);
  else if (音節.聲.startsWith('ç')) 音節.聲 = 'tɕ' + 音節.聲.slice(1);
  else if (音節.聲.startsWith('ş') && 音節.韻.startsWith('ɻ')) 音節.聲 = 'ʂ'  + 音節.聲.slice(1);
  else if (音節.聲.startsWith('ş')) 音節.聲 = 'ɕ'  + 音節.聲.slice(1);
  else if (音節.聲.startsWith('j') && 音節.韻.startsWith('ɻ')) 音節.聲 = 'dʐ' + 音節.聲.slice(1);
  else if (音節.聲.startsWith('j')) 音節.聲 = 'dʑ' + 音節.聲.slice(1);
  else if (音節.聲.startsWith('ñ')) 音節.聲 = 'ɲ'  + 音節.聲.slice(1);
  else if (音節.聲.startsWith('q')) 音節.聲 = 'ʕʷ' + 音節.聲.slice(1);
  else if (音節.聲.startsWith('\'')) 音節.聲 = 音節.聲.slice(1);
  
  return 音節;
}

if (選項.表記 === 'ASCII (s, sh, gn, oe)') {
  音讀 = Roman2ASCII(音讀);
  訓讀 = Roman2ASCII(訓讀);
}
else if (選項.表記 === 'IPA (s, ɕ, ɲ, ø)') {
  音讀 = Roman2IPA(音讀);
  訓讀 = Roman2IPA(訓讀);
}

// 5. 聲調插入

function 插入聲調記號(音節) {
  if (音節.調 !== 'H') return 音節.聲 + 音節.韻;
  else if (選項.聲調記號 === '◌́') {
    const regex1 = /[aeǝɯoøu]/g;
    const regex2 = /[irɻy]/g;
    let 聲調記號插入位置 = 音節.韻.search(regex1);
    if (聲調記號插入位置 === -1) 聲調記號插入位置 = 音節.韻.search(regex2);
	if (聲調記號插入位置 === -1) throw new Error('韻母無母音');
	let 帶調韻基 = {
	  a: 'á', e: 'é', ǝ: 'ǝ́', ɯ: 'ɯ́', i: 'í', o: 'ó', ø: 'ǿ', r: 'ŕ', ɻ: 'ɻ́', u: 'ú', y: 'ý', 
	}[音節.韻.charAt(聲調記號插入位置)];
    return 音節.聲 + 音節.韻.slice(0, 聲調記號插入位置) + 帶調韻基 + 音節.韻.slice(聲調記號插入位置 + 1);
  }
  else if (選項.聲調記號 === 'h') {
	const 母音表 = /[aeǝioøruy]+/g;
	return 音節.聲 + 音節.韻.replace(母音表, '$&' + 'h');
  }
  else return 音節.聲 + 音節.韻;
}

if (選項.音訓選擇 === '訓上音下'  && 訓讀.韻 !== '') return 插入聲調記號(訓讀) + '\n' + 插入聲調記號(音讀);
else if (選項.音訓選擇 === '訓讀' && 訓讀.韻 !== '') return 插入聲調記號(訓讀);
else return 插入聲調記號(音讀); 
