const dict = {
    '迦': '가',
    '街': '가',
    '歌': '가',
    '架': '가',
    '暇': '가',
    '家': '가',
    '可': '가',
    '加': '가',
    '價': '가',
    '假': '가',
    '佳': '가',
    '駕': '가',
    '閣': '각',
    '角': '각',
    '覺': '각',
    '脚': '각',
    '各': '각',
    '却': '각',
    '刻': '각',
    '間': '간',
    '肝': '간',
    '簡': '간',
    '看': '간',
    '懇': '간',
    '幹': '간',
    '干': '간',
    '姦': '간',
    '刊': '간',
    '渴': '갈',
    '鑑': '감',
    '監': '감',
    '甘': '감',
    '減': '감',
    '敢': '감',
    '感': '감',
    '憾': '감',
    '甲': '갑',
    '降': '강',
    '鋼': '강',
    '講': '강',
    '綱': '강',
    '江': '강',
    '强': '강',
    '康': '강',
    '剛': '강',
    '開': '개',
    '蓋': '개',
    '皆': '개',
    '槪': '개',
    '改': '개',
    '慨': '개',
    '個': '개',
    '介': '개',
    '客': '객',
    '更': '갱',
    '車': '거',
    '距': '거',
    '擧': '거',
    '據': '거',
    '拒': '거',
    '巨': '거',
    '居': '거',
    '去': '거',
    '建': '건',
    '健': '건',
    '件': '건',
    '乾': '건',
    '傑': '걸',
    '乞': '걸',
    '檢': '검',
    '劍': '검',
    '儉': '검',
    '隔': '격',
    '激': '격',
    '格': '격',
    '擊': '격',
    '遣': '견',
    '見': '견',
    '肩': '견',
    '絹': '견',
    '犬': '견',
    '牽': '견',
    '堅': '견',
    '缺': '결',
    '結': '결',
    '潔': '결',
    '決': '결',
    '謙': '겸',
    '兼': '겸',
    '驚': '경',
    '頃': '경',
    '鏡': '경',
    '輕': '경',
    '警': '경',
    '耕': '경',
    '經': '경',
    '競': '경',
    '竟': '경',
    '硬': '경',
    '景': '경',
    '敬': '경',
    '慶': '경',
    '徑': '경',
    '庚': '경',
    '境': '경',
    '卿': '경',
    '傾': '경',
    '京': '경',
    '鷄': '계',
    '階': '계',
    '計': '계',
    '繼': '계',
    '繫': '계',
    '系': '계',
    '癸': '계',
    '界': '계',
    '溪': '계',
    '械': '계',
    '桂': '계',
    '戒': '계',
    '季': '계',
    '契': '계',
    '啓': '계',
    '係': '계',
    '鼓': '고',
    '高': '고',
    '顧': '고',
    '苦': '고',
    '考': '고',
    '稿': '고',
    '枯': '고',
    '故': '고',
    '庫': '고',
    '孤': '고',
    '姑': '고',
    '固': '고',
    '告': '고',
    '古': '고',
    '谷': '곡',
    '穀': '곡',
    '曲': '곡',
    '哭': '곡',
    '坤': '곤',
    '困': '곤',
    '骨': '골',
    '貢': '공',
    '空': '공',
    '攻': '공',
    '恭': '공',
    '恐': '공',
    '工': '공',
    '孔': '공',
    '功': '공',
    '共': '공',
    '公': '공',
    '供': '공',
    '過': '과',
    '課': '과',
    '誇': '과',
    '科': '과',
    '果': '과',
    '寡': '과',
    '郭': '곽',
    '館': '관',
    '關': '관',
    '貫': '관',
    '觀': '관',
    '管': '관',
    '慣': '관',
    '寬': '관',
    '官': '관',
    '冠': '관',
    '鑛': '광',
    '狂': '광',
    '廣': '광',
    '光': '광',
    '掛': '괘',
    '愧': '괴',
    '怪': '괴',
    '壞': '괴',
    '塊': '괴',
    '宏': '굉',
    '郊': '교',
    '較': '교',
    '矯': '교',
    '橋': '교',
    '校': '교',
    '敎': '교',
    '巧': '교',
    '交': '교',
    '龜': '구',
    '驅': '구',
    '苟': '구',
    '舊': '구',
    '究': '구',
    '球': '구',
    '狗': '구',
    '求': '구',
    '構': '구',
    '救': '구',
    '拘': '구',
    '懼': '구',
    '垢': '구',
    '句': '구',
    '口': '구',
    '區': '구',
    '具': '구',
    '俱': '구',
    '九': '구',
    '久': '구',
    '丘': '구',
    '菊': '국',
    '局': '국',
    '國': '국',
    '郡': '군',
    '軍': '군',
    '群': '군',
    '君': '군',
    '屈': '굴',
    '窮': '궁',
    '弓': '궁',
    '宮': '궁',
    '權': '권',
    '拳': '권',
    '卷': '권',
    '勸': '권',
    '券': '권',
    '厥': '궐',
    '軌': '궤',
    '鬼': '귀',
    '貴': '귀',
    '歸': '귀',
    '規': '규',
    '糾': '규',
    '叫': '규',
    '菌': '균',
    '均': '균',
    '極': '극',
    '劇': '극',
    '克': '극',
    '近': '근',
    '謹': '근',
    '根': '근',
    '斤': '근',
    '勤': '근',
    '僅': '근',
    '錦': '금',
    '金': '금',
    '禽': '금',
    '禁': '금',
    '琴': '금',
    '今': '금',
    '給': '급',
    '級': '급',
    '急': '급',
    '及': '급',
    '肯': '긍',
    '騎': '기',
    '飢': '기',
    '起': '기',
    '豈': '기',
    '記': '기',
    '紀': '기',
    '祈': '기',
    '畿': '기',
    '氣': '기',
    '欺': '기',
    '機': '기',
    '棄': '기',
    '期': '기',
    '旣': '기',
    '旗': '기',
    '技': '기',
    '忌': '기',
    '幾': '기',
    '己': '기',
    '寄': '기',
    '奇': '기',
    '基': '기',
    '器': '기',
    '其': '기',
    '企': '기',
    '緊': '긴',
    '吉': '길',
    '那': '나',
    '諾': '낙',
    '難': '난',
    '卵': '난',
    '暖': '난',
    '男': '남',
    '南': '남',
    '納': '납',
    '娘': '낭',
    '耐': '내',
    '奈': '내',
    '內': '내',
    '乃': '내',
    '女': '녀',
    '年': '년',
    '念': '념',
    '寧': '녕',
    '怒': '노',
    '奴': '노',
    '努': '노',
    '老': '노',
    '農': '농',
    '腦': '뇌',
    '惱': '뇌',
    '能': '능',
    '泥': '니',
    '尼': '니',
    '茶': '다',
    '多': '다',
    '端': '단',
    '短': '단',
    '段': '단',
    '檀': '단',
    '旦': '단',
    '斷': '단',
    '壇': '단',
    '團': '단',
    '單': '단',
    '但': '단',
    '丹': '단',
    '達': '달',
    '談': '담',
    '淡': '담',
    '擔': '담',
    '踏': '답',
    '答': '답',
    '畓': '답',
    '黨': '당',
    '糖': '당',
    '當': '당',
    '堂': '당',
    '唐': '당',
    '隊': '대',
    '貸': '대',
    '臺': '대',
    '待': '대',
    '帶': '대',
    '對': '대',
    '大': '대',
    '台': '대',
    '代': '대',
    '德': '덕',
    '陶': '도',
    '都': '도',
    '道': '도',
    '途': '도',
    '逃': '도',
    '跳': '도',
    '稻': '도',
    '盜': '도',
    '渡': '도',
    '桃': '도',
    '挑': '도',
    '徒': '도',
    '度': '도',
    '島': '도',
    '導': '도',
    '塗': '도',
    '圖': '도',
    '到': '도',
    '刀': '도',
    '倒': '도',
    '讀': '독',
    '篤': '독',
    '督': '독',
    '獨': '독',
    '毒': '독',
    '豚': '돈',
    '頓': '돈',
    '敦': '돈',
    '突': '돌',
    '銅': '동',
    '童': '동',
    '洞': '동',
    '東': '동',
    '同': '동',
    '動': '동',
    '凍': '동',
    '冬': '동',
    '頭': '두',
    '豆': '두',
    '斗': '두',
    '鈍': '둔',
    '屯': '둔',
    '得': '득',
    '騰': '등',
    '等': '등',
    '登': '등',
    '燈': '등',
    '羅': '라',
    '落': '락',
    '絡': '락',
    '樂': '락',
    '蘭': '란',
    '欄': '란',
    '卵': '란',
    '亂': '란',
    '覽': '람',
    '濫': '람',
    '郞': '랑',
    '浪': '랑',
    '廊': '랑',
    '來': '래',
    '冷': '랭',
    '略': '략',
    '掠': '략',
    '量': '량',
    '諒': '량',
    '良': '량',
    '糧': '량',
    '涼': '량',
    '梁': '량',
    '兩': '량',
    '麗': '려',
    '旅': '려',
    '慮': '려',
    '勵': '려',
    '歷': '력',
    '曆': '력',
    '力': '력',
    '鍊': '련',
    '連': '련',
    '蓮': '련',
    '聯': '련',
    '練': '련',
    '戀': '련',
    '憐': '련',
    '裂': '렬',
    '烈': '렬',
    '劣': '렬',
    '列': '렬',
    '廉': '렴',
    '獵': '렵',
    '領': '령',
    '靈': '령',
    '零': '령',
    '嶺': '령',
    '令': '령',
    '隷': '례',
    '禮': '례',
    '例': '례',
    '露': '로',
    '路': '로',
    '老': '로',
    '爐': '로',
    '勞': '로',
    '鹿': '록',
    '錄': '록',
    '綠': '록',
    '祿': '록',
    '論': '론',
    '弄': '롱',
    '雷': '뢰',
    '賴': '뢰',
    '料': '료',
    '僚': '료',
    '了': '료',
    '累': '루',
    '漏': '루',
    '淚': '루',
    '樓': '루',
    '屢': '루',
    '類': '류',
    '留': '류',
    '流': '류',
    '柳': '류',
    '陸': '륙',
    '六': '륙',
    '輪': '륜',
    '倫': '륜',
    '率': '률',
    '栗': '률',
    '律': '률',
    '隆': '륭',
    '陵': '릉',
    '離': '리',
    '里': '리',
    '裏': '리',
    '理': '리',
    '梨': '리',
    '李': '리',
    '履': '리',
    '吏': '리',
    '利': '리',
    '鄰': '린',
    '臨': '림',
    '林': '림',
    '立': '립',
    '麻': '마',
    '馬': '마',
    '磨': '마',
    '莫': '막',
    '漠': '막',
    '幕': '막',
    '萬': '만',
    '漫': '만',
    '滿': '만',
    '晚': '만',
    '慢': '만',
    '末': '말',
    '茫': '망',
    '罔': '망',
    '望': '망',
    '忙': '망',
    '忘': '망',
    '妄': '망',
    '亡': '망',
    '賣': '매',
    '買': '매',
    '每': '매',
    '梅': '매',
    '昧': '매',
    '媒': '매',
    '妹': '매',
    '埋': '매',
    '麥': '맥',
    '脈': '맥',
    '盲': '맹',
    '盟': '맹',
    '猛': '맹',
    '孟': '맹',
    '面': '면',
    '綿': '면',
    '眠': '면',
    '勉': '면',
    '免': '면',
    '滅': '멸',
    '鳴': '명',
    '銘': '명',
    '暝': '명',
    '明': '명',
    '命': '명',
    '名': '명',
    '冥': '명',
    '貌': '모',
    '謀': '모',
    '毛': '모',
    '母': '모',
    '模': '모',
    '某': '모',
    '暮': '모',
    '慕': '모',
    '募': '모',
    '冒': '모',
    '侮': '모',
    '睦': '목',
    '目': '목',
    '牧': '목',
    '木': '목',
    '沒': '몰',
    '蒙': '몽',
    '夢': '몽',
    '苗': '묘',
    '廟': '묘',
    '妙': '묘',
    '墓': '묘',
    '卯': '묘',
    '霧': '무',
    '貿': '무',
    '茂': '무',
    '舞': '무',
    '牟': '무',
    '無': '무',
    '武': '무',
    '戊': '무',
    '務': '무',
    '默': '묵',
    '墨': '묵',
    '門': '문',
    '聞': '문',
    '文': '문',
    '問': '문',
    '物': '물',
    '勿': '물',
    '迷': '미',
    '美': '미',
    '米': '미',
    '眉': '미',
    '未': '미',
    '微': '미',
    '尾': '미',
    '味': '미',
    '民': '민',
    '敏': '민',
    '憫': '민',
    '蜜': '밀',
    '密': '밀',
    '迫': '박',
    '薄': '박',
    '泊': '박',
    '朴': '박',
    '拍': '박',
    '博': '박',
    '飯': '반',
    '返': '반',
    '般': '반',
    '盤': '반',
    '班': '반',
    '叛': '반',
    '反': '반',
    '半': '반',
    '伴': '반',
    '髮': '발',
    '發': '발',
    '拔': '발',
    '防': '방',
    '邦': '방',
    '訪': '방',
    '芳': '방',
    '方': '방',
    '放': '방',
    '房': '방',
    '妨': '방',
    '傍': '방',
    '倣': '방',
    '配': '배',
    '輩': '배',
    '背': '배',
    '杯': '배',
    '排': '배',
    '拜': '배',
    '培': '배',
    '倍': '배',
    '百': '백',
    '白': '백',
    '伯': '백',
    '飜': '번',
    '繁': '번',
    '番': '번',
    '煩': '번',
    '罰': '벌',
    '伐': '벌',
    '範': '범',
    '犯': '범',
    '凡': '범',
    '法': '법',
    '碧': '벽',
    '壁': '벽',
    '邊': '변',
    '辯': '변',
    '辨': '변',
    '變': '변',
    '別': '별',
    '竝': '병',
    '病': '병',
    '屛': '병',
    '兵': '병',
    '丙': '병',
    '譜': '보',
    '補': '보',
    '菩': '보',
    '步': '보',
    '普': '보',
    '寶': '보',
    '報': '보',
    '保': '보',
    '覆': '복',
    '複': '복',
    '腹': '복',
    '福': '복',
    '服': '복',
    '復': '복',
    '卜': '복',
    '伏': '복',
    '本': '본',
    '鳳': '봉',
    '逢': '봉',
    '蜂': '봉',
    '峯': '봉',
    '封': '봉',
    '奉': '봉',
    '附': '부',
    '部': '부',
    '赴': '부',
    '賦': '부',
    '負': '부',
    '腐': '부',
    '簿': '부',
    '符': '부',
    '父': '부',
    '浮': '부',
    '扶': '부',
    '府': '부',
    '富': '부',
    '婦': '부',
    '夫': '부',
    '否': '부',
    '副': '부',
    '付': '부',
    '北': '북',
    '紛': '분',
    '粉': '분',
    '憤': '분',
    '奮': '분',
    '奔': '분',
    '墳': '분',
    '分': '분',
    '拂': '불',
    '佛': '불',
    '不': '불',
    '朋': '붕',
    '崩': '붕',
    '鼻': '비',
    '飛': '비',
    '非': '비',
    '費': '비',
    '肥': '비',
    '祕': '비',
    '碑': '비',
    '比': '비',
    '批': '비',
    '悲': '비',
    '婢': '비',
    '妃': '비',
    '卑': '비',
    '備': '비',
    '頻': '빈',
    '賓': '빈',
    '貧': '빈',
    '聘': '빙',
    '氷': '빙',
    '邪': '사',
    '辭': '사',
    '賜': '사',
    '謝': '사',
    '詞': '사',
    '詐': '사',
    '蛇': '사',
    '舍': '사',
    '絲': '사',
    '私': '사',
    '祀': '사',
    '社': '사',
    '沙': '사',
    '死': '사',
    '査': '사',
    '斯': '사',
    '斜': '사',
    '捨': '사',
    '思': '사',
    '師': '사',
    '巳': '사',
    '射': '사',
    '寺': '사',
    '寫': '사',
    '士': '사',
    '四': '사',
    '司': '사',
    '史': '사',
    '使': '사',
    '似': '사',
    '仕': '사',
    '事': '사',
    '朔': '삭',
    '削': '삭',
    '算': '산',
    '産': '산',
    '散': '산',
    '酸': '산',
    '山': '산',
    '薩': '살',
    '殺': '살',
    '三': '삼',
    '森': '삼',
    '霜': '상',
    '賞': '상',
    '象': '상',
    '詳': '상',
    '裳': '상',
    '祥': '상',
    '相': '상',
    '狀': '상',
    '桑': '상',
    '想': '상',
    '床': '상',
    '常': '상',
    '尙': '상',
    '嘗': '상',
    '喪': '상',
    '商': '상',
    '償': '상',
    '像': '상',
    '傷': '상',
    '上': '상',
    '塞': '새',
    '色': '색',
    '索': '색',
    '生': '생',
    '逝': '서',
    '誓': '서',
    '西': '서',
    '署': '서',
    '緖': '서',
    '書': '서',
    '暑': '서',
    '敍': '서',
    '恕': '서',
    '徐': '서',
    '庶': '서',
    '序': '서',
    '釋': '석',
    '石': '석',
    '析': '석',
    '昔': '석',
    '惜': '석',
    '席': '석',
    '夕': '석',
    '鮮': '선',
    '選': '선',
    '船': '선',
    '線': '선',
    '禪': '선',
    '旋': '선',
    '宣': '선',
    '善': '선',
    '先': '선',
    '仙': '선',
    '雪': '설',
    '說': '설',
    '設': '설',
    '舌': '설',
    '涉': '섭',
    '攝': '섭',
    '誠': '성',
    '聲': '성',
    '聖': '성',
    '省': '성',
    '盛': '성',
    '星': '성',
    '成': '성',
    '性': '성',
    '姓': '성',
    '城': '성',
    '細': '세',
    '稅': '세',
    '洗': '세',
    '歲': '세',
    '勢': '세',
    '世': '세',
    '騷': '소',
    '訴': '소',
    '蘇': '소',
    '蔬': '소',
    '紹': '소',
    '素': '소',
    '笑': '소',
    '疏': '소',
    '燒': '소',
    '消': '소',
    '昭': '소',
    '掃': '소',
    '所': '소',
    '少': '소',
    '小': '소',
    '召': '소',
    '速': '속',
    '續': '속',
    '粟': '속',
    '束': '속',
    '屬': '속',
    '俗': '속',
    '損': '손',
    '孫': '손',
    '頌': '송',
    '送': '송',
    '誦': '송',
    '訟': '송',
    '松': '송',
    '鎖': '쇄',
    '刷': '쇄',
    '首': '수',
    '須': '수',
    '需': '수',
    '雖': '수',
    '隨': '수',
    '遂': '수',
    '輸': '수',
    '誰': '수',
    '粹': '수',
    '秀': '수',
    '睡': '수',
    '獸': '수',
    '水': '수',
    '殊': '수',
    '樹': '수',
    '數': '수',
    '收': '수',
    '搜': '수',
    '授': '수',
    '手': '수',
    '愁': '수',
    '帥': '수',
    '守': '수',
    '壽': '수',
    '垂': '수',
    '囚': '수',
    '受': '수',
    '修': '수',
    '肅': '숙',
    '熟': '숙',
    '淑': '숙',
    '宿': '숙',
    '孰': '숙',
    '叔': '숙',
    '順': '순',
    '脣': '순',
    '純': '순',
    '瞬': '순',
    '殉': '순',
    '旬': '순',
    '循': '순',
    '巡': '순',
    '述': '술',
    '術': '술',
    '戌': '술',
    '崇': '숭',
    '襲': '습',
    '習': '습',
    '濕': '습',
    '拾': '습',
    '昇': '승',
    '承': '승',
    '勝': '승',
    '僧': '승',
    '乘': '승',
    '詩': '시',
    '試': '시',
    '視': '시',
    '示': '시',
    '矢': '시',
    '時': '시',
    '是': '시',
    '施': '시',
    '市': '시',
    '始': '시',
    '侍': '시',
    '飾': '식',
    '食': '식',
    '識': '식',
    '植': '식',
    '息': '식',
    '式': '식',
    '辛': '신',
    '身': '신',
    '臣': '신',
    '神': '신',
    '申': '신',
    '晨': '신',
    '新': '신',
    '愼': '신',
    '信': '신',
    '伸': '신',
    '實': '실',
    '室': '실',
    '失': '실',
    '甚': '심',
    '深': '심',
    '心': '심',
    '尋': '심',
    '審': '심',
    '十': '십',
    '雙': '쌍',
    '氏': '씨',
    '餓': '아',
    '雅': '아',
    '芽': '아',
    '牙': '아',
    '我': '아',
    '兒': '아',
    '亞': '아',
    '惡': '악',
    '岳': '악',
    '顔': '안',
    '雁': '안',
    '眼': '안',
    '案': '안',
    '岸': '안',
    '安': '안',
    '謁': '알',
    '暗': '암',
    '巖': '암',
    '押': '압',
    '壓': '압',
    '殃': '앙',
    '央': '앙',
    '仰': '앙',
    '涯': '애',
    '愛': '애',
    '哀': '애',
    '額': '액',
    '厄': '액',
    '野': '야',
    '耶': '야',
    '夜': '야',
    '也': '야',
    '躍': '약',
    '藥': '약',
    '若': '약',
    '約': '약',
    '弱': '약',
    '養': '양',
    '陽': '양',
    '讓': '양',
    '羊': '양',
    '洋': '양',
    '樣': '양',
    '楊': '양',
    '揚': '양',
    '良': '양',
    '壤': '양',
    '魚': '어',
    '語': '어',
    '漁': '어',
    '於': '어',
    '御': '어',
    '抑': '억',
    '憶': '억',
    '億': '억',
    '言': '언',
    '焉': '언',
    '嚴': '엄',
    '業': '업',
    '餘': '여',
    '輿': '여',
    '與': '여',
    '汝': '여',
    '如': '여',
    '余': '여',
    '予': '여',
    '驛': '역',
    '逆': '역',
    '譯': '역',
    '疫': '역',
    '易': '역',
    '役': '역',
    '域': '역',
    '亦': '역',
    '鉛': '연',
    '軟': '연',
    '緣': '연',
    '硏': '연',
    '燕': '연',
    '燃': '연',
    '煙': '연',
    '然': '연',
    '演': '연',
    '沿': '연',
    '延': '연',
    '宴': '연',
    '閱': '열',
    '熱': '열',
    '悅': '열',
    '鹽': '염',
    '炎': '염',
    '染': '염',
    '斂': '염',
    '葉': '엽',
    '迎': '영',
    '詠': '영',
    '英': '영',
    '營': '영',
    '泳': '영',
    '永': '영',
    '榮': '영',
    '映': '영',
    '影': '영',
    '靈': '영',
    '銳': '예',
    '豫': '예',
    '譽': '예',
    '藝': '예',
    '誤': '오',
    '烏': '오',
    '汚': '오',
    '悟': '오',
    '娛': '오',
    '嗚': '오',
    '吾': '오',
    '午': '오',
    '傲': '오',
    '五': '오',
    '玉': '옥',
    '獄': '옥',
    '屋': '옥',
    '溫': '온',
    '翁': '옹',
    '擁': '옹',
    '臥': '와',
    '瓦': '와',
    '緩': '완',
    '完': '완',
    '曰': '왈',
    '王': '왕',
    '往': '왕',
    '畏': '외',
    '外': '외',
    '遙': '요',
    '謠': '요',
    '要': '요',
    '腰': '요',
    '搖': '요',
    '辱': '욕',
    '浴': '욕',
    '欲': '욕',
    '慾': '욕',
    '用': '용',
    '庸': '용',
    '容': '용',
    '勇': '용',
    '龍': '용',
    '雨': '우',
    '郵': '우',
    '遇': '우',
    '羽': '우',
    '牛': '우',
    '憂': '우',
    '愚': '우',
    '尤': '우',
    '宇': '우',
    '右': '우',
    '友': '우',
    '又': '우',
    '優': '우',
    '偶': '우',
    '于': '우',
    '韻': '운',
    '雲': '운',
    '運': '운',
    '云': '운',
    '雄': '웅',
    '願': '원',
    '院': '원',
    '遠': '원',
    '源': '원',
    '援': '원',
    '怨': '원',
    '圓': '원',
    '園': '원',
    '員': '원',
    '原': '원',
    '元': '원',
    '越': '월',
    '月': '월',
    '違': '위',
    '謂': '위',
    '衛': '위',
    '胃': '위',
    '緯': '위',
    '爲': '위',
    '慰': '위',
    '威': '위',
    '委': '위',
    '圍': '위',
    '危': '위',
    '僞': '위',
    '偉': '위',
    '位': '위',
    '酉': '유',
    '遺': '유',
    '遊': '유',
    '誘': '유',
    '裕': '유',
    '維': '유',
    '由': '유',
    '猶': '유',
    '油': '유',
    '柔': '유',
    '有': '유',
    '愉': '유',
    '愈': '유',
    '惟': '유',
    '悠': '유',
    '幽': '유',
    '幼': '유',
    '唯': '유',
    '儒': '유',
    '乳': '유',
    '育': '육',
    '肉': '육',
    '閏': '윤',
    '潤': '윤',
    '隱': '은',
    '銀': '은',
    '恩': '은',
    '乙': '을',
    '飮': '음',
    '音': '음',
    '陰': '음',
    '淫': '음',
    '吟': '음',
    '邑': '읍',
    '泣': '읍',
    '應': '응',
    '凝': '응',
    '醫': '의',
    '議': '의',
    '衣': '의',
    '義': '의',
    '矣': '의',
    '疑': '의',
    '意': '의',
    '宜': '의',
    '儀': '의',
    '依': '의',
    '耳': '이',
    '而': '이',
    '移': '이',
    '異': '이',
    '已': '이',
    '夷': '이',
    '以': '이',
    '二': '이',
    '翼': '익',
    '益': '익',
    '認': '인',
    '忍': '인',
    '引': '인',
    '寅': '인',
    '姻': '인',
    '因': '인',
    '印': '인',
    '仁': '인',
    '人': '인',
    '逸': '일',
    '日': '일',
    '一': '일',
    '賃': '임',
    '壬': '임',
    '任': '임',
    '入': '입',
    '資': '자',
    '茲': '자',
    '自': '자',
    '者': '자',
    '紫': '자',
    '慈': '자',
    '恣': '자',
    '字': '자',
    '子': '자',
    '姿': '자',
    '姊': '자',
    '刺': '자',
    '酌': '작',
    '爵': '작',
    '昨': '작',
    '作': '작',
    '殘': '잔',
    '潛': '잠',
    '暫': '잠',
    '雜': '잡',
    '障': '장',
    '長': '장',
    '裝': '장',
    '藏': '장',
    '葬': '장',
    '莊': '장',
    '臟': '장',
    '腸': '장',
    '粧': '장',
    '章': '장',
    '掌': '장',
    '張': '장',
    '帳': '장',
    '將': '장',
    '奬': '장',
    '壯': '장',
    '墻': '장',
    '場': '장',
    '丈': '장',
    '載': '재',
    '財': '재',
    '裁': '재',
    '災': '재',
    '栽': '재',
    '材': '재',
    '才': '재',
    '宰': '재',
    '在': '재',
    '哉': '재',
    '再': '재',
    '爭': '쟁',
    '貯': '저',
    '著': '저',
    '抵': '저',
    '底': '저',
    '低': '저',
    '適': '적',
    '跡': '적',
    '赤': '적',
    '賊': '적',
    '績': '적',
    '籍': '적',
    '積': '적',
    '的': '적',
    '滴': '적',
    '敵': '적',
    '摘': '적',
    '寂': '적',
    '電': '전',
    '錢': '전',
    '轉': '전',
    '田': '전',
    '殿': '전',
    '戰': '전',
    '展': '전',
    '專': '전',
    '前': '전',
    '典': '전',
    '全': '전',
    '傳': '전',
    '絕': '절',
    '節': '절',
    '竊': '절',
    '折': '절',
    '切': '절',
    '點': '점',
    '漸': '점',
    '店': '점',
    '占': '점',
    '蝶': '접',
    '接': '접',
    '頂': '정',
    '靜': '정',
    '貞': '정',
    '訂': '정',
    '精': '정',
    '程': '정',
    '淨': '정',
    '正': '정',
    '整': '정',
    '政': '정',
    '情': '정',
    '征': '정',
    '廷': '정',
    '庭': '정',
    '定': '정',
    '停': '정',
    '亭': '정',
    '井': '정',
    '丁': '정',
    '齊': '제',
    '題': '제',
    '際': '제',
    '除': '제',
    '諸': '제',
    '諦': '제',
    '製': '제',
    '第': '제',
    '祭': '제',
    '濟': '제',
    '提': '제',
    '弟': '제',
    '帝': '제',
    '堤': '제',
    '制': '제',
    '鳥': '조',
    '造': '조',
    '調': '조',
    '組': '조',
    '租': '조',
    '祖': '조',
    '燥': '조',
    '照': '조',
    '潮': '조',
    '條': '조',
    '朝': '조',
    '早': '조',
    '操': '조',
    '弔': '조',
    '助': '조',
    '兆': '조',
    '足': '족',
    '族': '족',
    '尊': '존',
    '存': '존',
    '拙': '졸',
    '卒': '졸',
    '鐘': '종',
    '縱': '종',
    '終': '종',
    '種': '종',
    '從': '종',
    '宗': '종',
    '座': '좌',
    '左': '좌',
    '坐': '좌',
    '佐': '좌',
    '罪': '죄',
    '鑄': '주',
    '酒': '주',
    '週': '주',
    '走': '주',
    '舟': '주',
    '珠': '주',
    '洲': '주',
    '注': '주',
    '株': '주',
    '柱': '주',
    '朱': '주',
    '晝': '주',
    '州': '주',
    '宙': '주',
    '奏': '주',
    '周': '주',
    '住': '주',
    '主': '주',
    '竹': '죽',
    '遵': '준',
    '準': '준',
    '俊': '준',
    '重': '중',
    '衆': '중',
    '仲': '중',
    '中': '중',
    '卽': '즉',
    '贈': '증',
    '證': '증',
    '蒸': '증',
    '症': '증',
    '曾': '증',
    '憎': '증',
    '增': '증',
    '遲': '지',
    '誌': '지',
    '至': '지',
    '紙': '지',
    '知': '지',
    '池': '지',
    '止': '지',
    '枝': '지',
    '智': '지',
    '支': '지',
    '指': '지',
    '持': '지',
    '志': '지',
    '地': '지',
    '只': '지',
    '之': '지',
    '職': '직',
    '織': '직',
    '直': '직',
    '震': '진',
    '陳': '진',
    '陣': '진',
    '鎭': '진',
    '進': '진',
    '辰': '진',
    '瞋': '진',
    '眞': '진',
    '盡': '진',
    '珍': '진',
    '振': '진',
    '秦': '진',
    '質': '질',
    '秩': '질',
    '疾': '질',
    '姪': '질',
    '集': '집',
    '執': '집',
    '懲': '징',
    '徵': '징',
    '此': '차',
    '次': '차',
    '差': '차',
    '借': '차',
    '且': '차',
    '錯': '착',
    '着': '착',
    '捉': '착',
    '贊': '찬',
    '讚': '찬',
    '察': '찰',
    '慙': '참',
    '慘': '참',
    '參': '참',
    '蒼': '창',
    '窓': '창',
    '暢': '창',
    '昌': '창',
    '唱': '창',
    '創': '창',
    '倉': '창',
    '菜': '채',
    '採': '채',
    '彩': '채',
    '債': '채',
    '責': '책',
    '策': '책',
    '冊': '책',
    '處': '처',
    '妻': '처',
    '斥': '척',
    '拓': '척',
    '戚': '척',
    '尺': '척',
    '遷': '천',
    '踐': '천',
    '賤': '천',
    '薦': '천',
    '淺': '천',
    '泉': '천',
    '川': '천',
    '天': '천',
    '千': '천',
    '鐵': '철',
    '徹': '철',
    '哲': '철',
    '添': '첨',
    '尖': '첨',
    '妾': '첩',
    '靑': '청',
    '請': '청',
    '聽': '청',
    '淸': '청',
    '晴': '청',
    '廳': '청',
    '體': '체',
    '遞': '체',
    '逮': '체',
    '滯': '체',
    '替': '체',
    '體': '체',
    '超': '초',
    '草': '초',
    '肖': '초',
    '秒': '초',
    '礎': '초',
    '招': '초',
    '抄': '초',
    '初': '초',
    '觸': '촉',
    '燭': '촉',
    '促': '촉',
    '村': '촌',
    '寸': '촌',
    '銃': '총',
    '聰': '총',
    '總': '총',
    '最': '최',
    '催': '최',
    '醜': '추',
    '追': '추',
    '秋': '추',
    '推': '추',
    '抽': '추',
    '墜': '추',
    '逐': '축',
    '蓄': '축',
    '縮': '축',
    '築': '축',
    '祝': '축',
    '畜': '축',
    '丑': '축',
    '春': '춘',
    '出': '출',
    '衝': '충',
    '蟲': '충',
    '忠': '충',
    '充': '충',
    '醉': '취',
    '趣': '취',
    '臭': '취',
    '就': '취',
    '吹': '취',
    '取': '취',
    '測': '측',
    '側': '측',
    '層': '층',
    '齒': '치',
    '致': '치',
    '置': '치',
    '痴': '치',
    '癡': '치',
    '治': '치',
    '恥': '치',
    '値': '치',
    '熾': '치',
    '則': '칙',
    '親': '친',
    '漆': '칠',
    '七': '칠',
    '針': '침',
    '浸': '침',
    '沈': '침',
    '枕': '침',
    '寢': '침',
    '侵': '침',
    '稱': '칭',
    '快': '쾌',
    '陀': '타',
    '打': '타',
    '妥': '타',
    '墮': '타',
    '他': '타',
    '託': '탁',
    '濯': '탁',
    '濁': '탁',
    '托': '탁',
    '卓': '탁',
    '誕': '탄',
    '炭': '탄',
    '歎': '탄',
    '彈': '탄',
    '脫': '탈',
    '奪': '탈',
    '貪': '탐',
    '探': '탐',
    '塔': '탑',
    '湯': '탕',
    '胎': '태',
    '泰': '태',
    '殆': '태',
    '態': '태',
    '怠': '태',
    '太': '태',
    '澤': '택',
    '擇': '택',
    '宅': '택',
    '討': '토',
    '土': '토',
    '吐': '토',
    '通': '통',
    '統': '통',
    '痛': '통',
    '退': '퇴',
    '鬪': '투',
    '透': '투',
    '投': '투',
    '特': '특',
    '頗': '파',
    '罷': '파',
    '破': '파',
    '派': '파',
    '波': '파',
    '播': '파',
    '把': '파',
    '販': '판',
    '版': '판',
    '板': '판',
    '判': '판',
    '八': '팔',
    '貝': '패',
    '敗': '패',
    '遍': '편',
    '編': '편',
    '篇': '편',
    '片': '편',
    '偏': '편',
    '便': '편',
    '評': '평',
    '平': '평',
    '閉': '폐',
    '蔽': '폐',
    '肺': '폐',
    '弊': '폐',
    '廢': '폐',
    '幣': '폐',
    '飽': '포',
    '胞': '포',
    '浦': '포',
    '捕': '포',
    '抱': '포',
    '布': '포',
    '包': '포',
    '爆': '폭',
    '暴': '폭',
    '幅': '폭',
    '表': '표',
    '票': '표',
    '漂': '표',
    '標': '표',
    '品': '품',
    '風': '풍',
    '豐': '풍',
    '避': '피',
    '被': '피',
    '皮': '피',
    '疲': '피',
    '彼': '피',
    '筆': '필',
    '畢': '필',
    '必': '필',
    '匹': '필',
    '賀': '하',
    '荷': '하',
    '河': '하',
    '夏': '하',
    '何': '하',
    '下': '하',
    '鶴': '학',
    '學': '학',
    '韓': '한',
    '限': '한',
    '閑': '한',
    '漢': '한',
    '汗': '한',
    '旱': '한',
    '恨': '한',
    '寒': '한',
    '割': '할',
    '陷': '함',
    '咸': '함',
    '含': '함',
    '合': '합',
    '項': '항',
    '航': '항',
    '港': '항',
    '抗': '항',
    '恒': '항',
    '巷': '항',
    '該': '해',
    '解': '해',
    '海': '해',
    '害': '해',
    '奚': '해',
    '亥': '해',
    '核': '핵',
    '行': '행',
    '幸': '행',
    '香': '향',
    '響': '향',
    '鄕': '향',
    '向': '향',
    '享': '향',
    '許': '허',
    '虛': '허',
    '軒': '헌',
    '獻': '헌',
    '憲': '헌',
    '驗': '험',
    '險': '험',
    '革': '혁',
    '顯': '현',
    '賢': '현',
    '縣': '현',
    '絃': '현',
    '現': '현',
    '玄': '현',
    '懸': '현',
    '血': '혈',
    '穴': '혈',
    '嫌': '혐',
    '脅': '협',
    '協': '협',
    '衡': '형',
    '螢': '형',
    '形': '형',
    '型': '형',
    '刑': '형',
    '兄': '형',
    '亨': '형',
    '慧': '혜',
    '惠': '혜',
    '兮': '혜',
    '豪': '호',
    '護': '호',
    '號': '호',
    '虎': '호',
    '胡': '호',
    '湖': '호',
    '浩': '호',
    '毫': '호',
    '戶': '호',
    '好': '호',
    '呼': '호',
    '互': '호',
    '乎': '호',
    '或': '혹',
    '惑': '혹',
    '魂': '혼',
    '混': '혼',
    '昏': '혼',
    '婚': '혼',
    '忽': '홀',
    '鴻': '홍',
    '紅': '홍',
    '洪': '홍',
    '弘': '홍',
    '貨': '화',
    '話': '화',
    '華': '화',
    '花': '화',
    '禾': '화',
    '禍': '화',
    '畫': '화',
    '火': '화',
    '和': '화',
    '化': '화',
    '穫': '확',
    '確': '확',
    '擴': '확',
    '還': '환',
    '環': '환',
    '歡': '환',
    '換': '환',
    '患': '환',
    '丸': '환',
    '活': '활',
    '黃': '황',
    '荒': '황',
    '皇': '황',
    '況': '황',
    '會': '회',
    '懷': '회',
    '悔': '회',
    '回': '회',
    '獲': '획',
    '劃': '획',
    '橫': '횡',
    '曉': '효',
    '效': '효',
    '孝': '효',
    '後': '후',
    '厚': '후',
    '候': '후',
    '侯': '후',
    '訓': '훈',
    '毁': '훼',
    '輝': '휘',
    '揮': '휘',
    '携': '휴',
    '休': '휴',
    '胸': '흉',
    '凶': '흉',
    '黑': '흑',
    '欣': '흔',
    '吸': '흡',
    '興': '흥',
    '稀': '희',
    '戲': '희',
    '希': '희',
    '喜': '희'
}

/* ********************
ruby word-top exceptions

    '理論': '이론',
    '理想': '이상',
    '兩重': '양중',
    etc
hanja
    \u3400-\u9FFF\uF900-\uFA6D 㐀-龯豈-舘
******************** */

window.addEventListener("load", function () {
    putRuby();
});


var putRuby = function () {
   var findStr = "(?<!ruby>)(?<!<b title=\".\">)[\u3400-\u9FFF\uF900-\uFAFF](?!<rt)(?!</b>)";
   var replaceStr = '<b>$&</b>';
    var reg = new RegExp(findStr, 'g');
    var text = document.getElementsByTagName("main")[0].innerHTML;
    document.getElementsByTagName("main")[0].innerHTML = text.replace(reg, replaceStr);

    var elementsHanja = document.getElementsByTagName("b");
    var i;
    for (i = 0; i < elementsHanja.length; i++) {
        var textHanja = elementsHanja[i].innerHTML;
        if (dict[textHanja] && !elementsHanja[i].hasAttribute("title")) {
            elementsHanja[i].setAttribute("title", dict[textHanja]);
        }
    }

}