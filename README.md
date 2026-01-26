# Ila-Island-map

## 目次 Contents

[ファイルの説明](#ファイルの説明) / 
[Files](#Files) 

[ローマ字の読み方 / Pronunciation](#ローマ字の読み方-Pronunciation) 

[伊良島の概要](#伊良島の概要) / 
[Introduction to Ila Island](#Introduction-to-Ila-Island) 

[共有・許可など](#共有・許可など) / 
[Distributions and permissions](#Distributions-and-permissions) 

## ファイルの説明

- 伊良島の全図（作成中）
  - **Karte_M50_Ylada：1:50万、A3判の地図帳風の伊良島全図。** PDFとPNG形式があります。
  - **Karte_Exportで始まるファイル：PDF形式の各縮尺の伊良島全図。現在は1:5万、1:10万と1:25万があります。** GISからの直接エクスポートなので凡例はなく、Karte_Mで始まる地図帳ページの凡例にご参照ください。
  - **Karte.qgz：[QGIS](https://qgis.org/)のプロジェクトファイル。** QGISはオープンソースのソフトウェアで公式サイトにて無料でダウンロードできます。
  - shapesフォルダ：地物の位置・形状・属性などを格納したシェープファイル。**Karte.qgzファイルをQGISで開くと自動的にshapesフォルダに含まれるファイルが読み取られてスクロール地図として閲覧・編集できます。** 
  - Karte.svgとKarte.pdf：GIS化前の1:10万伊良島全図。旧バージョンです。
- 伊良島の地図帳（作成中）
  - **Karte_Mで始まるファイル：電子書籍風に整備されている凡例付きの地図帳ページ。Mの後の数字は縮尺（万を省略）。** PDFとPNG形式があります。現在はA3判のみですが、A1判でも整備予定。
- 配線図とダイヤグラム（作成中）
  - Gleisplanで始まるファイル：鉄道と軌道の配線図とダイヤグラム。
- 伊良クレオール語の漢字の音読みを自動導出するプログラム
  - Ila_Creole_Hanzeo'im.js：「[切韻音系自動推導器](https://nk2028.shn.hk/tshet-uinh-autoderiver/)」に貼り付ければ、任意の文章に対して伊良クレオール語の漢字の音読みを自動導出できます。
- 地名と時刻表の国家標準
  - Verordnung_geografischen_Namen_20080521.pdf：スイスの地名条例。伊良島でも有効です。
  - Verordnung_Fahrplan_20091104.pdf：スイスの時刻表条例。伊良島でも有効です。

## Files

- Map of Ila Island (under construction)
  - ***Karte_M50_Ylada*：map of the whole Ila island of magnification 1:500k in A3 size.** It has PDF and PNG versions. 
  - **files starting with *Karte_Export*: map of whole Ila Island in various magnifications in pdf. Currently 1:50k, 1:100k and 1:250k maps are available.** 
  - ***Karte.qgz*: project file of [QGIS](https://qgis.org/).** QGIS is an open source software available for free download at the official website. 
  - *shapes* folder: shape files containing position, shape and properties of objects. **QGIS automatically reads files in this folder as Karte.qgz is opened, and scroll maps will be displayed and editable.** 
  - *Karte.svg* and *Karte.pdf*: old version of the map of whole Ila Island before GIS was adopted. 
- Map book of Ila Island (under construction) 
  - **files starting with *Karte_M*: Pages of the map book of Ila Island with legends. The number after M is magnification (in unit of 10⁴).** They have PDF and PNG versions. There are currently only A3 page maps, but I also plan to provide A1 page maps. 
- Track map and train diagram (under construction) 
  - files starting with *Gleisplan*: track map and train diagram of railways and trams. 
- Program to convert Han characters to their Latin transcription in Ila Creole
  - *Ila_Creole_Hanzeo'im.js*: By pasting this program into [Tshet Uinh Autoderiver](https://nk2028.shn.hk/tshet-uinh-autoderiver/), the Latin transcription of any strings of Han characters in Ila Creole will be automatically derived. 
- National standards of geographic names and timetables
  - *Verordnung_geografischen_Namen_20080521.pdf*: Order of Geographic Names of Switzerland. It is also in effect in Ila Island. 
  - *Verordnung_Fahrplan_20091104.pdf*: Order of Timetable of Switzerland. It is also in effect in Ila Island. 

## ローマ字の読み方 Pronunciation 

[【沙】アルファベット](https://lamplight0.sakura.ne.jp/a/articles/?set=%E6%B2%99%E8%AA%9E%E6%95%99%E7%A7%91%E6%9B%B8&id=690)にご参照ください。

浦州・灘州・嶺州平野部で話される「伊良クレオール語」と塩州・源州南部・峰州沿海部で話される「宇流麻語」では、
  ローマ字の読み方が基本的に沙語と同じですが、以下の点にご注意ください。（上のリンクの沙語教科書の一部抜枠を含む）

【母音】
- i /ʲi/: 沙語の y と日本語の「イ」と同じ発音です。
- y:
  - 沙語では /ʲi/ で、「イ」と同じ発音ですが、
  - 伊良クレオール語では /ʲy/ で、唇を丸めて「イ」と発音します。中国語とドイツ語の ü、フランス語の u と同じ発音です。
- ə /ɨ/: 沙語の ui と同じ発音で、口を横に開いて「ゥイー」と発音します。
  - 伊良クレオール語では、/ɯ/ として日本語の「ウ」と韓国語の「으」に近い発音をしてもいいです。ui とも書きます。
- u /u/: 沙語と同じく、唇を丸めて「ウ」と発音します。中国語や英語の u と同じ発音です。
- e /ʲe/: 沙語と同じく、「エ」ではなく「ィエー」と発音します。
  - ただし、語頭と声門破裂音 ' /ʔ/ の直後では、沙語の ea /e/ と同じく「エ」と発音します。
- ø /ø/: 唇を丸めて「エ」と発音します。ドイツ語の ö やフランス語の eu と œu に近いです。oe とも書きます。

【子音】
- ŋ /ŋ/: 鼻濁音で「ガ行」と発音します。英語の ng と同じ発音で、ng とも書きます。
- ç /tʂ/: 沙語とドイツ語の tsch と同じで、舌を反らして「チャ行」で発音します。tsch とも書きます。
- c: 沙語と同じ。
  - 母音 e, i, y の前では、「チャ行」/tʂʲ/ で発音し、
  - それ以外では、「カ行」/k/ で発音します。
- ş /ʂ/: 沙語とドイツ語の sch と同じで、舌を反らして「シャ行」で発音します。sch とも書きます。
- sc: 沙語と同じ。
  - 母音 e, i, y の前では、「シャ行」/ʂʲ/ で発音し、
  - それ以外では、/sk/ で発音します。
- j /ʐ/: 沙語とフランス語と同じで、舌を反らして「ジャ行」で発音します。
  - 母音 e, i, y の前では、「ジャ行」/ʐʲ/ で発音します。
- ñ /ɲ/: 「ニャ行」で発音します。nh とも書きます。
- z /ts/: 「ツァ行」で発音します。沙語と同じ。
- x /z/: 「ザ行」で発音します。沙語と同じ。
- ch /x/: 沙語と同じく、軟口蓋で気流を止まらずに摩擦で「カ行」と発音します。中国語の h やドイツ語の ch と同じ発音です。
- th /θ/: 英語の無声音の th のように発音し、þ とも書きます。
- ph /f/: 英語の f のように前歯を下唇につけて「フ」と発音し、f とも書きます。沙語と同じ発音です。

【発音が難しいもの】
- ' /ʔ/: 声門破裂音。前の子音との間に区切りが入るように発音してもいいです。
- q /ʕʷ/: 唇音化有声咽頭摩擦音として発音します。ただし、浦州方言では /w/ に退化することが一般的です。
- r /ɻ̍/: 中国語の r と同じ発音です。子音にも母音にもなり得ます。

## 伊良島の概要

伊良島（いらのくに）という架空島嶼の地図です。

(English version is below)

位置は鯨海（日本海）の中央の大和堆の場所（暫定）。大きさは関西と東海地方の和に近い。

首都は禾州（いなす）市、最大都市は浦州（うらす）市、最高峰は淺間山（あさまじらん/アイシ°キラム）、最大の湖は葦原湖（あしわらこ）、最長の河川は濼水（らくがわ）、最大の温泉リゾート地は上林高原（じやう゚りむかうき゚ゑん）。

日本レベルの鉄道、国土測量と国土整備、スイスレベルのバス、自然保護と登山施設、英国レベルの道路、ドイツレベルの水運、オランダレベルの自転車施設、香港レベルの町づくりが島の誇りである。

島は禾州（いなす）、浦州（うらす）、灘州（なだす）、嶺州（をねす）、津州（つがす）、鋁州（アルミす）、岬州（みさきす）、峪州（たにす）、硅州（きゑす）、峰州（みねす）、源州（みどす）、鹽州（しをす）の12州からなる。州は市・郡、そして区・邑・郷（日本の区町村に相当）、そして坊・通・町・村（日本の町丁・大字に相当）、そして番・巷・字（日本の番地・小字に相当）に区分されている。番・巷・字の下に番号で住所を特定する。例えば伊良島理研の浦州キャンパスC館の住所は「浦州端原市函城区妙見一坊6番25号」（うらすはたわらしはこしろくみょうけんいちぼうろくばんにじゅうごごう）。

島を大まかに16の都市圏と8つの国立公園にも区分できる。16の都市圏は州庁所在地に加えて汀洲（なぎさす）、豊浦（とようら）、上林（じやう゚りむ）、鵜泊（うどまり）。8つの国立公園は淺間（あさま/アイシ°キラム）、葦原（あしわら）、上林（じやう゚りむ）、沙敷（シャサフ）、間宮岬（まみやみさき）、藍峴（らんけん）、螢山（ほたるやま）、東濱（ひがしはま）。

国が管理する地名は、経緯度、自然地形と人工地形、自治体（州・市郡・区邑郷）、空港、港、片（公共交通用の区邑郷の下位区分・後述）、住所（坊通町村・番巷字・号）、鉄道と軌道（会社・路線・駅・站・側線・操車場・信号場・車両基地など）、道路（路線・IC・JCT・料金所・交差点・道の駅・自動車駅・電停・バス停など）、公共建物の名前と番号である。本レポジトリの「List_objects.yaml」にはこれらの地名の一覧（制作中）が公開されている。スイス連邦の地名条例（Verordnung über die geografischen Namen）と時刻表条例（Fahrplanverordnung）は伊良島でも有効（いずれも本レポジトリで公開）。鉄道も道路も左側通行。

空港は青湾（あおみ）空港、黄原（きばら）空港、長山（ながやま）空港の3港ある。国際線のみ運航され、浦州ー禾州ー新硅州間の新幹線全通後は国内航空線が全て撤退した。

国際フェリーは津州からウラジオストク・小樽、硅州から函館・苫小牧・秋田・新潟、鵜泊から富山、鹽州から新潟・輪島、浦州から敦賀・境港・博多・上海・釜山、そして豐浦から東海（トンへ）まで運航される。東京駅からの連絡ルートは東京ー新潟ー硅州、東京ー新高岡（金沢）ー輪島ー鹽州、または東京ー敦賀ー浦州が一般的である。後の2つは名阪からも便利。

新幹線で第一都市・浦州から首都兼第二都市・禾州まで最速22分、禾州から第三都市・硅州まで最速53分、浦州から硅州まで最速1時間18分。在来線特急より所要時間が半分以上短縮された。

鉄道幹線と都市路線はほとんど複線電化され、それ以外は単線や非電化も多い。ごく一部の過密路線は方向別複々線。禾州都心部では新幹線と在来線（浦州本線・源州本線）がそれぞれ複々線で並行しており、東京ー上野間の東北本線と等しく新幹線と在来線をまとめれば実質四複線となっている（東京ー品川間の五複線には敵わず）。最高時速は新幹線が320km/h、津州本線が高速在来線として210km/h、在来線の幹線が160-130km/h、それ以外が120km/h以下である。普通鉄道のほかに、ラック式鉄道（アプト式とリッゲンバッハ式）、「軌道」と分類される単軌（跨座式モノレール）、懸軌（懸垂式モノレール）、新交通システム（AGT）、中低速磁浮（リニモ）、軽鉄（路面電車）、そして「準軌道」とされる導軌バス（ガイドウェイバス）、BRT、纜車（ケーブルカー）、索道（ロープウェイ）もある。廃線跡を転用したBRTや自転車専用道路もある。

鉄道と軌道会社は国鉄（新幹線、臨海本線、浦州本線、灘州本線、嶺州本線、津州本線、岬州本線、硅州本線、源州本線、鹽州本線とそれぞれの支線）、大手地鉄（濼水電鉄、青空急行、西原電鉄）、準大手地鉄（浦陰交通、上林鉄道、津鄴電鉄、葦原鉄道、嶺南交通）、市営地下鉄（浦州地鉄、禾州地鉄、硅州地鉄、長洲地鉄）、中小地鉄（京艮鉄道、月心電鉄、汐灘電鉄、藍山鉄路、峪州電鉄、嶺東交通）、中量軌道（端原単軌、漣川新交通、禾州新交通、嶺州懸軌、淀川単軌、硅州磁浮、東莱単軌、晴海懸軌）、登山鉄道（永安登山鉄道、竹峴登山鉄道、淺間森林鉄道）、路面電車（浦州市電、汀洲電鉄、禾州市電、津州市電、源州市電）、そしてガイドウェイバス（浦州導軌 BRT、上莱高速 BRT）の 36 社。地鉄とは地方鉄道で日本の私鉄、三セクと公営地下鉄に相当。国鉄と一部の地鉄が標準軌間（1435mm）で、ほかの地鉄は狭軌（1067mm）、そして淺間森林鉄道は 762mm 軌間である。標準軌の各社間の直通、とくに郊外鉄道から地下鉄や路面電車への直通と国鉄・葦原鉄道・青空急行・上林鉄道間の特急と急行の直通が盛んである。

列車種別は高速（IKS・新幹線を走行または新在直通）、特急（IC）、急行（IR）、快速（RE）、普通（RB・各駅に停車）と各都市内を走る各停があり、国鉄・地鉄を問わず特急以上は特急券が必要で、急行以下は乗車券のみで乗れる。鉄道全線が1時間毎（一部の特急は2時間毎）のパターンダイヤになっており、乗り換えの待ち時間が短縮されるようにダイヤが工夫されている。高速バスも都市間、または都市・空港と駅のない町を結んでいる。鉄道、軌道、バスと渡船といった公共交通機関が全国すべての集落と主な登山口をカバーしている。

系統番号が全ての路線につけられており、各州内ごと無重複である。例えば浦州ー長山空港間の高速列車は「IKS 1」、臨海本線を一周する特急は「IC 20」、硅州と長洲（ながす/マタタクセ）をつながる環状快速は「RE 10」、浦州のバスタ旭山から津州バスターミナルまでの高速バスは「X2」、禾州地鉄五号線と濼水電鉄平野（へいや）線を直通する各停は「5A」、浦州市電の紫竹西山（しちくにしやま）ー四方街（よんぽうがい）ー碧連（へきれん）をつながる系統は「6」、西原バスの多良駅前（たらえきまえ）ー町階阿仁（まちばしあに）系統は「N43」。乗車券はスイスのように全国各鉄道、軌道、バス、渡船会社間共通であり、全国で連絡運輸の制限なし。貸し自転車、貸し自動車とP+Rも便利である。

長距離夜行急行列車「IN 1」と「IN 2」（日本のかつての急行「銀河」などに相当）が金曜、土曜と日曜日の夜に運行され、また各都市圏内では「N」で終わる番号の終夜運転の電車またはバスが30分か1時間毎に運行される。

貨物列車は急行貨物と支線貨物に分けられ、禾州の中央操車場（全国唯一のハンプ式操車場）から木構造のグラフで全国各地の貨物駅、港と専用側線へ運行されている。その他に臨海本線を廻る急行貨物、甲種輸送などのための専用貨物列車もある。郵便列車も禾州郵便駅から木構造のグラフで全国各地の郵便駅へ運行されている。郵便物の区分はスイスのMülligen郵便駅のように高度に自動化されている。急行貨物と郵便列車は急行の旅客列車と同格で、快速、普通と各停を待避させる。支線貨物は貨物駅で急行貨物から解結された車両を各工場や倉庫の貨物側線に運ぶ列車（またはその逆）で、専用貨物とともに各停より格下で旅客列車の合間を縫うように運行される。

駅（de: Bahnhof, 分岐器のある鉄道停車場）、站（de: Haltestelle, 分岐器のない鉄道停留場とすべての軌道停留場）、自動車駅（バスターミナル）、バス停その他公共交通機関の乗降場所（以下は駅と総称）はスイスやドイツのように所在する市または片の名前2字を冠する。これで駅名から場所を特定しやすいだけでなく、駅名の重複も解消される。「片」（de: Ortschaft）は区・邑・郷・空港1つそのものからなっているものもあり、区・邑・郷をいくつかの片に分けた所もある。区邑郷の名前が3文字以上ならば片の名前はその頭文字2字だけ取る。例えば「陀城」（だじろ）は鹽州陀城市の代表駅、「端原理研」（はたわらりけん）は浦州端原市函城区のモノレール站、「螢溪温泉」（ほたるざわおんせん）は浦州漕陽郡螢溪邑の駅、「紫竹杁坂」（しちくいりざか）は浦州市紫竹林区の駅、「中操西口」（ちゅうそうにしぐち）は禾州市芙蓉区中操片の中央操車場通勤用の站。運賃も片から片まで計算され、日本の特定都区市内制度が全島に広がったというように理解できる。スイスと同様に片を跨ぐまたは片の境界に近い駅、若しくは山間部で集落より離れた駅は例外。例えば「中嶺」（なかみね）は峪州派水郡派水邑と源州汮陽郡汮陽邑の境界付近の駅、「丹城山」（にしろやま）は山頂にある観光用の駅。

道路は高速道路、一般国道、州道、市邑郷道（地下街含む）、林道、農道、港湾道、自転車道、自然歩道に分けられている。高速道路は有料で、路線数が極めて少なく最大の都市圏を結ぶ路線にとどまっている。一般国道、州道、市邑郷道のうち快速道路（日本のバイパスに相当）と分類されるものは、整備基準や速度制限がやや格下だが無料で国の所々を張り巡らされている。信号機や踏切が無く、交差点が立体交差または環形交差点（ラウンドアバウト）に限る。国道10号（濼道）や州道955号（寶華繞道、浦州の管轄）など、全線にわたって快速道路の一般国道や州道もある。国道は日本と違って路線数がやや少ないわりに全線が国直轄であり、全国の州庁所在地、市、または空港を結ぶ路線のみ指定され得る。州道は州庁所在地、市、区、邑、郷、国道、空港、または港の間を結ぶ路線である。道の駅は主に高速道路と一般国道に約20km間隔で設置されている（日本のようなSA・PA・道の駅の区別はなし）。

禾州市道路元標は旧皇居の正門である承天門にあり、東京の日本橋に相当する。承天門より南に伸ばす8.4kmの朱雀大街（すざくおおじ）は国道1号・8号・10号・80号・90号・自転車道V1号の重複区間があり、幅員72mで国内で最も広い道路である。ただし承天門より出発して2.9kmまでの区間は歩行者空間の中を通っており路面電車を除いて自動車通行禁止である。ほかにも都心部でヨーロッパ風の歩行者空間を設けられる都市が多い。一方で狭隘区間は酷道、醜道、止道、憂道、凶道、淋道と呼ばれる。歴史的な経緯（江戸時代の旧街道がそのまま国道指定されたこと）により登山道国道も73号（東道）に1区間だけ存在する。

高速道路、一般国道、州道の起終点は、市区邑郷の道路元標、空港、港、駅、道の駅、IC、JCTに限る。道路番号は全国一体として採番され無重複で、高速道路は1号-9号、一般国道は10号-99号、州道は100号-975号となっている（欠番多し）。採番方式は英国のゾーン制に準じている。国道の名前は伝統名称もしくは千字文より取られた1字。州道の名前は伝統名称もしくは起終点や経由地の町、峠や橋の名前より取られた2-3字。日本とは大きく違って1つの路線は必ず一本道であり、枝分けや並走区間はありえない。

全国の公用語は LΛMPLIGHT さんにより創作されたグラヴァルタにあたる「沙語」である。沙語が母語として話される地域は禾州・鋁州・津州・岬州潤水郡・峪州中西部・硅州中央部・峰州（沿海部を除く）・源州中西部である。沙語のほかに、「伊良クレオール語」（筆者）は浦州・灘州・嶺州平野部で、「宇流麻語」（筆者）は塩州・源州南部・峰州沿海部で話される。沙語と同語族の言語は、「玢語」（LΛMPLIGHT）は嶺州と津州をまたぐ上林高原で、「束山語」は潤水郡を除いた岬州と硅州帰綏郡で、「山中語」は峪州沙陰郡・硅州川峡郡・源州景行郡をまたぐ山間部で話され、また「莉語」（LΛMPLIGHT）は全国各地で祭祀における儀礼言語として話される。ほかの少数言語は、伊良クレオール語の方言の「藍山語」（筆者）は嶺州藍山島で、宇流麻語の方言の「大宮語」（筆者）は塩州大宮群島と奥隠岐島で、また宇流麻語の「鉄道方言」は国鉄や嶺南交通など一部の私鉄会社の社内で話される。以上の言語はすべてそれぞれの地域の公用語として使用されている。（言語名の後ろに言語の創作者が記されている）

伊良クレオール語は漢語・渤海語・和語の単語とオリジナル文法を融合させたクレオール言語、宇流麻語は日本語から作られた模訛言語である。鉄道方言はかなり日本語寄りで、戦前と戦時中で日本占領下の影響が見られる。各地の地名（のローマ字表記）はその地域の公用語で表記され、またひらがなで和名（宇流麻語と鉄道方言での読み方）が記されている。駅など鉄道停車場の電報略号も鉄道方言による。伊良島では現代仮名遣いが使われているが、四つ仮名と「くゎ」の読み方が古風なので厳密に使い分けられており注意が必要。またハ行の子音は全て F で発音される。

## Introduction to Ila Island 

Imaginary map for Ila Island. 

The island is at the position of Yamato Bank in the middle of Japan Sea, with land area close to Switzerland. It is divided to 12 provinces, which compose of cities and counties, which then compose of wards, towns and villages, which are then divided to avenues, blocks and settlements. 

The capital city is Wasu, and the largest city is Fósu. The highest peak is Áişxrám, the largest lake is Éşwra Qo, the longest river is Lák Şý, and the largest resort is Jiáŋlim Kauŋyen. 

The official language is Ila Creole, written in Chinese characters and Kana. Its standard form is Middle-West Dialect, and there are also Northeast and Southeast Dialects. The Middle-West Dialect uses mainly Chinese and Bohai (Balhae) vocabulary, and little aboriginal words remain. The Northeast Dialect uses mainly aboriginal vocabulary. The Southeast Dialect uses largely Japanese vocabulary, in addition to Chinese ones. In all dialects the grammar inherits the aboriginal language. The specialities in each dialect is apparent in the placenames in each part of the island. 

Ila Island is proud of its railways, land survey and land development of Japanese level, its roads of British level, its buses, nature conservation and hiking facilities of Swiss level, its waterway transport of German level, its biking facilities of Dutch level, and its city development of Hong Kong level. 

## 共有・許可など

このレポジトリの内容はクリエイティブ・コモンズ表示-非営利4.0 (CC BY-NC 4.0) 国際ライセンスの元で原作者を表示（本リポジトリや私のウェブサイトにリンク）するだけでご自由に使用・改変・再配布できます。ただし Verordnung_geografischen_Namen_20080521.pdf （地名条例）と Verordnung_Fahrplan_20091104.pdf （時刻表条例）はスイス連邦の法令検索サイト https://www.fedlex.admin.ch/ よりダウンロードして再配布しているもので、クリエイティブ・コモンズ表示-非営利-改変禁止4.0 (CC BY-NC-ND 4.0) 国際ライセンスが適用されています。またここで再配布している2つのVerordnungは公式の公表ではありませんのでご注意ください。 https://www.fedlex.admin.ch/en/legal-information に参照。

## Distributions and permissions

The content of this repository is licensed under a Creative Commons Attribution-NonCommercial 4.0 (CC BY-NC 4.0) International License. However, the two files Verordnung_geografischen_Namen_20080521.pdf and Verordnung_Fahrplan_20091104.pdf were downloaded directly from the official law website of Swiss Confederation https://www.fedlex.admin.ch/ and are licensed under a Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 (CC BY-NC-ND 4.0) International License. This is not an official publication of these two directives, and only the publication by the Federal Chancellery is authoritative. Please refer to https://www.fedlex.admin.ch/en/legal-information for more information. 
