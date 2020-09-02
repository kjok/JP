    $(document).ready(function() {
        $('main').each(function() {
            var txt = $(this).html();
            $(this).html(txt
                .replace(/ 天上天下唯我獨存/g, ' <ruby>天上天下唯我獨存<rt>천상천하유아독존</rt></ruby>')
                .replace(/ 不成正覺不起此座/g, ' <ruby>不成正覺不起此座<rt>불성정각불기차좌</rt></ruby>')
                .replace(/ 非相非非相處定/g, ' <ruby>非相非非相處定<rt>비상비비상처정</rt></ruby>')
                .replace(/ 九歲十歲互相卽/g, ' <ruby>九歲十歲互相卽<rt>구세십세호상즉</rt></ruby>')
                .replace(/ 眼耳鼻舌身意/g, ' <ruby>眼耳鼻舌身意<rt>안이비설신의</rt></ruby>')
                .replace(/ 三世兩重因果/g, ' <ruby>三世兩重因果<rt>삼세양중인과</rt></ruby>')
                .replace(/ 純粹理性批判/g, ' <ruby>純粹理性批判<rt>순수이성비판</rt></ruby>')
                .replace(/ 度時未他生/g, ' <ruby>度時未他生<rt>도시미타생</rt></ruby>')
                .replace(/ 無所有處定/g, ' <ruby>無所有處定<rt>무소유처정</rt></ruby>')
                .replace(/ 那禪比丘經/g, ' <ruby>那禪比丘經<rt>나선비구경</rt></ruby>')
                .replace(/ 一切唯心造/g, ' <ruby>一切唯心造<rt>일체유심조</rt></ruby>')
                .replace(/ 修行四位/g, ' <ruby>修行四位<rt>수행사위</rt></ruby>')
                .replace(/ 行動主義/g, ' <ruby>行動主義<rt>행동주의</rt></ruby>')
                .replace(/ 頓忘六位/g, ' <ruby>頓忘六位<rt>돈망육위</rt></ruby>')
                .replace(/ 心理主義/g, ' <ruby>心理主義<rt>심리주의</rt></ruby>')
                .replace(/ 十二緣起/g, ' <ruby>十二緣起<rt>십이연기</rt></ruby>')
                .replace(/ 四無量心/g, ' <ruby>四無量心<rt>사무량심</rt></ruby>')
                .replace(/ 天台智子/g, ' <ruby>天台智子<rt>천태지자</rt></ruby>')
                .replace(/ 禪學入門/g, ' <ruby>禪學入門<rt>선학입문</rt></ruby>')
                .replace(/ 我空法空/g, ' <ruby>我空法空<rt>아공법공</rt></ruby>')
                .replace(/ 託胎一念/g, ' <ruby>託胎一念<rt>탁태일념</rt></ruby>')
                .replace(/ 諸行無常/g, ' <ruby>諸行無常<rt>제행무상</rt></ruby>')
                .replace(/ 過去二因/g, ' <ruby>過去二因<rt>과거이인</rt></ruby>')
                .replace(/ 現在五果/g, ' <ruby>現在五果<rt>현재오과</rt></ruby>')
                .replace(/ 明鏡之水/g, ' <ruby>明鏡之水<rt>명경지수</rt></ruby>')
                .replace(/ 現在三因/g, ' <ruby>現在三因<rt>현재삼인</rt></ruby>')
                .replace(/ 慈悲喜捨/g, ' <ruby>慈悲喜捨<rt>자비희사</rt></ruby>')
                .replace(/ 觸受構造/g, ' <ruby>觸受構造<rt>촉수구조</rt></ruby>')
                .replace(/ 斷行淨化/g, ' <ruby>斷行淨化<rt>단행정화</rt></ruby>')
                .replace(/ 未來二果/g, ' <ruby>未來二果<rt>미래이과</rt></ruby>')
                .replace(/ 呵呵大笑/g, ' <ruby>呵呵大笑<rt>가가대소</rt></ruby>')
                .replace(/ 同行親和/g, ' <ruby>同行親和<rt>동행친화</rt></ruby>')
                .replace(/ 怨憎會苦/g, ' <ruby>怨憎會苦<rt>원증회고</rt></ruby>')
                .replace(/ 愛別離苦/g, ' <ruby>愛別離苦<rt>애별리고</rt></ruby>')
                .replace(/ 苦集滅道/g, ' <ruby>苦集滅道<rt>고집멸도</rt></ruby>')
                .replace(/ 破格鮮導/g, ' <ruby>破格鮮導<rt>파격선도</rt></ruby>')
                .replace(/ 智證菩薩/g, ' <ruby>智證菩薩<rt>지증보살</rt></ruby>')
                .replace(/ 淸淨無垢/g, ' <ruby>淸淨無垢<rt>청청무구</rt></ruby>')
                .replace(/ 左右之間/g, ' <ruby>左右之間<rt>좌우지간</rt></ruby>')
                .replace(/ 價値思考/g, ' <ruby>價値思考<rt>가치사고</rt></ruby>')
                .replace(/ 見性成佛/g, ' <ruby>見性成佛<rt>견성성불</rt></ruby>')
                .replace(/ 非我暝想/g, ' <ruby>非我暝想<rt>비아명상</rt></ruby>')
                .replace(/ 不滿思考/g, ' <ruby>不滿思考<rt>불만사고</rt></ruby>')
                .replace(/ 實體思考/g, ' <ruby>實體思考<rt>실체사고</rt></ruby>')
                .replace(/ 億分一空/g, ' <ruby>億分一空<rt>억분일공</rt></ruby>')
                .replace(/ 念体故空/g, ' <ruby>念体故空<rt>염체고공</rt></ruby>')
                .replace(/ 遠視故空/g, ' <ruby>遠視故空<rt>원시고공</rt></ruby>')
                .replace(/ 永時故空/g, ' <ruby>永時故空<rt>영시고공</rt></ruby>')
                .replace(/ 煩惱構造/g, ' <ruby>煩惱構造<rt>번뇌구조</rt></ruby>')
                .replace(/ 修定主義/g, ' <ruby>修定主義<rt>수정주의</rt></ruby>')
                .replace(/ 大禪定家/g, ' <ruby>大禪定家<rt>대선정가</rt></ruby>')
                .replace(/ 唯我獨存/g, ' <ruby>唯我獨存<rt>유아독존</rt></ruby>')
                .replace(/ 分析故空/g, ' <ruby>分析故空<rt>분석고공</rt></ruby>')
                .replace(/ 助波羅蜜/g, ' <ruby>助波羅蜜<rt>조바라밀</rt></ruby>')
                .replace(/ 主波羅蜜/g, ' <ruby>主波羅蜜<rt>주바라밀</rt></ruby>')
                .replace(/ 受想行識/g, ' <ruby>受想行識<rt>수상행식</rt></ruby>')
                .replace(/ 不起此座/g, ' <ruby>不起此座<rt>불기차좌</rt></ruby>')
                .replace(/ 不成正覺/g, ' <ruby>不成正覺<rt>불성정각</rt></ruby>')
                .replace(/ 旣存旣成/g, ' <ruby>旣存旣成<rt>기존기성</rt></ruby>')
                .replace(/ 知足暝想/g, ' <ruby>知足暝想<rt>지족명상</rt></ruby>')
                .replace(/ 所衣經典/g, ' <ruby>所衣經典<rt>소의경전</rt></ruby>')
                .replace(/ 泥蓮禪河/g, ' <ruby>泥蓮禪河<rt>니련선하</rt></ruby>')
                .replace(/ 一麻一米/g, ' <ruby>一麻一米<rt>일마일미</rt></ruby>')
                .replace(/ 地水火風/g, ' <ruby>地水火風<rt>지수화풍</rt></ruby>')
                .replace(/ 拔本塞源/g, ' <ruby>拔本塞源<rt>발본색원</rt></ruby>')
                .replace(/ 自性把持/g, ' <ruby>自性把持<rt>자성파지</rt></ruby>')
                .replace(/ 板齒生毛/g, ' <ruby>板齒生毛<rt>판치생모</rt></ruby>')
                .replace(/ 解空十條/g, ' <ruby>解空十條<rt>해공십조</rt></ruby>')
                .replace(/ 緣起故空/g, ' <ruby>緣起故空<rt>연기고공</rt></ruby>')
                .replace(/ 修心體系/g, ' <ruby>修心體系<rt>수심체계</rt></ruby>')
                .replace(/ 八不中道/g, ' <ruby>八不中道<rt>팔불중도</rt></ruby>')
                .replace(/ 理路整然/g, ' <ruby>理路整然<rt>이로정연</rt></ruby>')
                .replace(/ 頓忘三觀/g, ' <ruby>頓忘三觀<rt>돈망삼관</rt></ruby>')
                .replace(/ 格物致知/g, ' <ruby>格物致知<rt>격물치지</rt></ruby>')
                .replace(/ 離苦得樂/g, ' <ruby>離苦得樂<rt>이고득락</rt></ruby>')
                .replace(/ 安全地帶/g, ' <ruby>安全地帶<rt>안전지대</rt></ruby>')
                .replace(/ 細波羅蜜/g, ' <ruby>細波羅蜜<rt>세바라밀</rt></ruby>')
                .replace(/ 三綱五倫/g, ' <ruby>三綱五倫<rt>삼강오륜</rt></ruby>')
                .replace(/ 皆有佛性/g, ' <ruby>皆有佛性<rt>개유불성</rt></ruby>')
                .replace(/ 自己紹介/g, ' <ruby>自己紹介<rt>자기소개</rt></ruby>')
                .replace(/ 十二緣起/g, ' <ruby>十二緣起<rt>십이연기</rt></ruby>')
                .replace(/ 修心體系/g, ' <ruby>修心體系<rt>수심체계</rt></ruby>')
                .replace(/ 一般課程/g, ' <ruby>一般課程<rt>일반과정</rt></ruby>')
                .replace(/ 三重奏/g, ' <ruby>三重奏<rt>삼중주</rt></ruby>')
                .replace(/ 體解脫/g, ' <ruby>體解脫<rt>체해탈</rt></ruby>')
                .replace(/ 愛取有/g, ' <ruby>愛取有<rt>애취유</rt></ruby>')
                .replace(/ 同事攝/g, ' <ruby>同事攝<rt>동사섭</rt></ruby>')
                .replace(/ 無意識/g, ' <ruby>無意識<rt>무의식</rt></ruby>')
                .replace(/ 用解脫/g, ' <ruby>用解脫<rt>용해탈</rt></ruby>')
                .replace(/ 具體的/g, ' <ruby>具體的<rt>구체적</rt></ruby>')
                .replace(/ 識主體/g, ' <ruby>識主體<rt>식주체</rt></ruby>')
                .replace(/ 深呼吸/g, ' <ruby>深呼吸<rt>심호흡</rt></ruby>')
                .replace(/ 共同體/g, ' <ruby>共同體<rt>공동체</rt></ruby>')
                .replace(/ 良場力/g, ' <ruby>良場力<rt>양장력</rt></ruby>')
                .replace(/ 存在層/g, ' <ruby>存在層<rt>존재층</rt></ruby>')
                .replace(/ 物自體/g, ' <ruby>物自體<rt>물자체</rt></ruby>')
                .replace(/ 貪瞋痴/g, ' <ruby>貪瞋痴<rt>탐진치</rt></ruby>')
                .replace(/ 三拍子/g, ' <ruby>三拍子<rt>삼박자</rt></ruby>')
                .replace(/ 八正道/g, ' <ruby>八正道<rt>팔정도</rt></ruby>')
                .replace(/ 無爲法/g, ' <ruby>無爲法<rt>무위법</rt></ruby>')
                .replace(/ 有爲法/g, ' <ruby>有爲法<rt>유위법</rt></ruby>')
                .replace(/ 四聖諦/g, ' <ruby>四聖諦<rt>사성제</rt></ruby>')
                .replace(/ 滅盡定/g, ' <ruby>滅盡定<rt>멸진정</rt></ruby>')
                .replace(/ 修練場/g, ' <ruby>修練場<rt>수련장</rt></ruby>')
                .replace(/ 單子論/g, ' <ruby>單子論<rt>단자론</rt></ruby>')
                .replace(/ 無量心/g, ' <ruby>無量心<rt>무량심</rt></ruby>')
                .replace(/ 妙覺佛/g, ' <ruby>妙覺佛<rt>묘각불</rt></ruby>')
                .replace(/ 慈悲行/g, ' <ruby>慈悲行<rt>자비행</rt></ruby>')
                .replace(/ 思言行/g, ' <ruby>思言行<rt>사언행</rt></ruby>')
                .replace(/ 知情意/g, ' <ruby>知情意<rt>지정의</rt></ruby>')
                .replace(/ 惡場力/g, ' <ruby>惡場力<rt>악장력</rt></ruby>')
                .replace(/ 正思惟/g, ' <ruby>正思惟<rt>정사유</rt></ruby>')
                .replace(/ 正精進/g, ' <ruby>正精進<rt>정정진</rt></ruby>')
                .replace(/ 主人公/g, ' <ruby>主人公<rt>주인공</rt></ruby>')
                .replace(/ 印象的/g, ' <ruby>印象的<rt>인상적</rt></ruby>')
                .replace(/ 佛法僧/g, ' <ruby>佛法僧<rt>불법승</rt></ruby>')
                .replace(/ 化合衆/g, ' <ruby>化合衆<rt>화합중</rt></ruby>')
                .replace(/ 非我感/g, ' <ruby>非我感<rt>비아감</rt></ruby>')
                .replace(/ 眞情性/g, ' <ruby>眞情性<rt>진정성</rt></ruby>')
                .replace(/ 自恣請/g, ' <ruby>自恣請<rt>자자청</rt></ruby>')
                .replace(/ 空思想/g, ' <ruby>空思想<rt>공사상</rt></ruby>')
                .replace(/ 大道人/g, ' <ruby>大道人<rt>대도인</rt></ruby>')
                .replace(/ 幸福論/g, ' <ruby>幸福論<rt>행복론</rt></ruby>')
                .replace(/ 金剛經/g, ' <ruby>金剛經<rt>금강경</rt></ruby>')
                .replace(/ 痴貪瞋/g, ' <ruby>痴貪瞋<rt>치탐진</rt></ruby>')
                .replace(/ 基礎受/g, ' <ruby>基礎受<rt>기초수</rt></ruby>')
                .replace(/ 修練會/g, ' <ruby>修練會<rt>수련회</rt></ruby>')
                .replace(/ 未成熟/g, ' <ruby>未成熟<rt>미성숙</rt></ruby>')
                .replace(/ 自燈明/g, ' <ruby>自燈明<rt>자등명</rt></ruby>')
                .replace(/ 事實上/g, ' <ruby>事實上<rt>사실상</rt></ruby>')
                .replace(/ 無一物/g, ' <ruby>無一物<rt>무일물</rt></ruby>')
                .replace(/ 內宇宙/g, ' <ruby>內宇宙<rt>내우주</rt></ruby>')
                .replace(/ 外宇宙/g, ' <ruby>外宇宙<rt>외우주</rt></ruby>')
                .replace(/ 動映像/g, ' <ruby>動映像<rt>동영상</rt></ruby>')
                .replace(/ 主管者/g, ' <ruby>主管者<rt>주관자</rt></ruby>')
                .replace(/ 隨分覺/g, ' <ruby>隨分覺<rt>수분각</rt></ruby>')
                .replace(/ 自我觀/g, ' <ruby>自我觀<rt>자아관</rt></ruby>')
                .replace(/ 無我觀/g, ' <ruby>無我觀<rt>무아관</rt></ruby>')
                .replace(/ 情緖的/g, ' <ruby>情緖的<rt>정서적</rt></ruby>')
                .replace(/ 價値觀/g, ' <ruby>價値觀<rt>가치관</rt></ruby>')
                .replace(/ 起傳向/g, ' <ruby>起傳向<rt>기전향</rt></ruby>')
                .replace(/ 價値層/g, ' <ruby>價値層<rt>가치층</rt></ruby>')
                .replace(/ 煩惱構造/g, ' <ruby>煩惱<rt>번뇌</rt></ruby>')
                .replace(/ 行動/g, ' <ruby>行動<rt>행동</rt></ruby>')
                .replace(/ 管理/g, ' <ruby>管理<rt>관리</rt></ruby>')
                .replace(/ 時間/g, ' <ruby>時間<rt>시간</rt></ruby>')
                .replace(/ 祝賀/g, ' <ruby>祝賀<rt>축하</rt></ruby>')
                .replace(/ 暝想/g, ' <ruby>暝想<rt>명상</rt></ruby>')
                .replace(/ 意味/g, ' <ruby>意味<rt>의미</rt></ruby>')
                .replace(/ 工夫/g, ' <ruby>工夫<rt>공부</rt></ruby>')
                .replace(/ 幸福/g, ' <ruby>幸福<rt>행복</rt></ruby>')
                .replace(/ 自然/g, ' <ruby>自然<rt>자연</rt></ruby>')
                .replace(/ 空間/g, ' <ruby>空間<rt>공간</rt></ruby>')
                .replace(/ 必要/g, ' <ruby>必要<rt>필요</rt></ruby>')
                .replace(/ 主題/g, ' <ruby>主題<rt>주제</rt></ruby>')
                .replace(/ 原理/g, ' <ruby>原理<rt>원리</rt></ruby>')
                .replace(/ 次元/g, ' <ruby>次元<rt>차원</rt></ruby>')
                .replace(/ 解決/g, ' <ruby>解決<rt>해결</rt></ruby>')
                .replace(/ 世上/g, ' <ruby>世上<rt>세상</rt></ruby>')
                .replace(/ 問題/g, ' <ruby>問題<rt>문제</rt></ruby>')
                .replace(/ 精神/g, ' <ruby>精神<rt>정신</rt></ruby>')
                .replace(/ 講義/g, ' <ruby>講義<rt>강의</rt></ruby>')
                .replace(/ 緊張/g, ' <ruby>緊張<rt>긴장</rt></ruby>')
                .replace(/ 龍陀/g, ' <ruby>龍陀<rt>용타</rt></ruby>')
                .replace(/ 宇宙/g, ' <ruby>宇宙<rt>우주</rt></ruby>')
                .replace(/ 始作/g, ' <ruby>始作<rt>시작</rt></ruby>')
                .replace(/ 大家/g, ' <ruby>大家<rt>대가</rt></ruby>')
                .replace(/ 韓國/g, ' <ruby>韓國<rt>한국</rt></ruby>')
                .replace(/ 修心/g, ' <ruby>修心<rt>수심</rt></ruby>')
                .replace(/ 和合/g, ' <ruby>和合<rt>화합</rt></ruby>')
                .replace(/ 恒常/g, ' <ruby>恒常<rt>항상</rt></ruby>')
                .replace(/ 第一/g, ' <ruby>第一<rt>제일</rt></ruby>')
                .replace(/ 冊床/g, ' <ruby>冊床<rt>책상</rt></ruby>')
                .replace(/ 修練/g, ' <ruby>修練<rt>수련</rt></ruby>')
                .replace(/ 異狀/g, ' <ruby>異狀<rt>이상</rt></ruby>')
                .replace(/ 程度/g, ' <ruby>程度<rt>정도</rt></ruby>')
                .replace(/ 驚異/g, ' <ruby>驚異<rt>경이</rt></ruby>')
                .replace(/ 理解/g, ' <ruby>理解<rt>이해</rt></ruby>')
                .replace(/ 境遇/g, ' <ruby>境遇<rt>경우</rt></ruby>')
                .replace(/ 觸受/g, ' <ruby>觸受<rt>촉수</rt></ruby>')
                .replace(/ 無明/g, ' <ruby>無明<rt>무명</rt></ruby>')
                .replace(/ 名色/g, ' <ruby>名色<rt>명색</rt></ruby>')
                .replace(/ 老死/g, ' <ruby>老死<rt>노사</rt></ruby>')
                .replace(/ 大覺/g, ' <ruby>大覺<rt>대각</rt></ruby>')
                .replace(/ 思惟/g, ' <ruby>思惟<rt>사유</rt></ruby>')
                .replace(/ 業識/g, ' <ruby>業識<rt>업식</rt></ruby>')
                .replace(/ 過程/g, ' <ruby>過程<rt>과정</rt></ruby>')
                .replace(/ 狀態/g, ' <ruby>狀態<rt>상태</rt></ruby>')
                .replace(/ 因果/g, ' <ruby>因果<rt>인과</rt></ruby>')
                .replace(/ 整理/g, ' <ruby>整理<rt>정리</rt></ruby>')
                .replace(/ 對象/g, ' <ruby>對象<rt>대상</rt></ruby>')
                .replace(/ 構造/g, ' <ruby>構造<rt>구조</rt></ruby>')
                .replace(/ 相應/g, ' <ruby>相應<rt>상응</rt></ruby>')
                .replace(/ 人生/g, ' <ruby>人生<rt>인생</rt></ruby>')
                .replace(/ 法理/g, ' <ruby>法理<rt>법리</rt></ruby>')
                .replace(/ 意根/g, ' <ruby>意根<rt>의근</rt></ruby>')
                .replace(/ 志向/g, ' <ruby>志向<rt>지향</rt></ruby>')
                .replace(/ 哲學/g, ' <ruby>哲學<rt>철학</rt></ruby>')
                .replace(/ 止揚/g, ' <ruby>止揚<rt>지양</rt></ruby>')
                .replace(/ 解脫/g, ' <ruby>解脫<rt>해탈</rt></ruby>')
                .replace(/ 質問/g, ' <ruby>質問<rt>질문</rt></ruby>')
                .replace(/ 指導/g, ' <ruby>指導<rt>지도</rt></ruby>')
                .replace(/ 藝術/g, ' <ruby>藝術<rt>예술</rt></ruby>')
                .replace(/ 一般/g, ' <ruby>一般<rt>일반</rt></ruby>')
                .replace(/ 有爲/g, ' <ruby>有爲<rt>유위</rt></ruby>')
                .replace(/ 無爲/g, ' <ruby>無爲<rt>무위</rt></ruby>')
                .replace(/ 道通/g, ' <ruby>道通<rt>도통</rt></ruby>')
                .replace(/ 理致/g, ' <ruby>理致<rt>이치</rt></ruby>')
                .replace(/ 空理/g, ' <ruby>空理<rt>공리</rt></ruby>')
                .replace(/ 主客/g, ' <ruby>主客<rt>주객</rt></ruby>')
                .replace(/ 頓忘/g, ' <ruby>頓忘<rt>돈망</rt></ruby>')
                .replace(/ 感動/g, ' <ruby>感動<rt>감동</rt></ruby>')
                .replace(/ 單子/g, ' <ruby>單子<rt>단자</rt></ruby>')
                .replace(/ 念体/g, ' <ruby>念体<rt>염체</rt></ruby>')
                .replace(/ 無記/g, ' <ruby>無記<rt>무기</rt></ruby>')
                .replace(/ 關係/g, ' <ruby>關係<rt>관계</rt></ruby>')
                .replace(/ 事實/g, ' <ruby>事實<rt>사실</rt></ruby>')
                .replace(/ 知足/g, ' <ruby>知足<rt>지족</rt></ruby>')
                .replace(/ 體系/g, ' <ruby>體系<rt>체계</rt></ruby>')
                .replace(/ 大願/g, ' <ruby>大願<rt>대원</rt></ruby>')
                .replace(/ 作善/g, ' <ruby>作善<rt>작선</rt></ruby>')
                .replace(/ 正體/g, ' <ruby>正體<rt>정체</rt></ruby>')
                .replace(/ 凡事/g, ' <ruby>凡事<rt>범사</rt></ruby>')
                .replace(/ 感謝/g, ' <ruby>感謝<rt>감사</rt></ruby>')
                .replace(/ 苦樂/g, ' <ruby>苦樂<rt>고락</rt></ruby>')
                .replace(/ 捨境/g, ' <ruby>捨境<rt>사경</rt></ruby>')
                .replace(/ 樂境/g, ' <ruby>樂境<rt>낙경</rt></ruby>')
                .replace(/ 苦境/g, ' <ruby>苦境<rt>고경</rt></ruby>')
                .replace(/ 包含/g, ' <ruby>包含<rt>포함</rt></ruby>')
                .replace(/ 作爲/g, ' <ruby>作爲<rt>작위</rt></ruby>')
                .replace(/ 非我/g, ' <ruby>非我<rt>비아</rt></ruby>')
                .replace(/ 以外/g, ' <ruby>以外<rt>이외</rt></ruby>')
                .replace(/ 中道/g, ' <ruby>中道<rt>중도</rt></ruby>')
                .replace(/ 觀行/g, ' <ruby>觀行<rt>관행</rt></ruby>')
                .replace(/ 順理/g, ' <ruby>順理<rt>순리</rt></ruby>')
                .replace(/ 緣起/g, ' <ruby>緣起<rt>연기</rt></ruby>')
                .replace(/ 正見/g, ' <ruby>正見<rt>정견</rt></ruby>')
                .replace(/ 正定/g, ' <ruby>正定<rt>정정</rt></ruby>')
                .replace(/ 苦諦/g, ' <ruby>苦諦<rt>고제</rt></ruby>')
                .replace(/ 八苦/g, ' <ruby>八苦<rt>팔고</rt></ruby>')
                .replace(/ 集諦/g, ' <ruby>集諦<rt>집제</rt></ruby>')
                .replace(/ 三毒/g, ' <ruby>三毒<rt>삼독</rt></ruby>')
                .replace(/ 滅諦/g, ' <ruby>滅諦<rt>멸제</rt></ruby>')
                .replace(/ 先行/g, ' <ruby>先行<rt>선행</rt></ruby>')
                .replace(/ 實踐/g, ' <ruby>實踐<rt>실천</rt></ruby>')
                .replace(/ 道位/g, ' <ruby>道位<rt>도위</rt></ruby>')
                .replace(/ 六位/g, ' <ruby>六位<rt>육위</rt></ruby>')
                .replace(/ 삼位/g, ' <ruby>삼位<rt>삼위</rt></ruby>')
                .replace(/ 我空/g, ' <ruby>我空<rt>아공</rt></ruby>')
                .replace(/ 自我/g, ' <ruby>自我<rt>자아</rt></ruby>')
                .replace(/ 法空/g, ' <ruby>法空<rt>법공</rt></ruby>')
                .replace(/ 不便/g, ' <ruby>不便<rt>불편</rt></ruby>')
                .replace(/ 實體/g, ' <ruby>實體<rt>실체</rt></ruby>')
                .replace(/ 道人/g, ' <ruby>道人<rt>도인</rt></ruby>')
                .replace(/ 世紀/g, ' <ruby>世紀<rt>세기</rt></ruby>')
                .replace(/ 道具/g, ' <ruby>道具<rt>도구</rt></ruby>')
                .replace(/ 傳達/g, ' <ruby>傳達<rt>전달</rt></ruby>')
                .replace(/ 許諾/g, ' <ruby>許諾<rt>허락</rt></ruby>')
                .replace(/ 欣快/g, ' <ruby>欣快<rt>흔쾌</rt></ruby>')
                .replace(/ 思片/g, ' <ruby>思片<rt>사편</rt></ruby>')
                .replace(/ 簡單/g, ' <ruby>簡單<rt>간단</rt></ruby>')
                .replace(/ 場力/g, ' <ruby>場力<rt>장력</rt></ruby>')
                .replace(/ 創造/g, ' <ruby>創造<rt>창조</rt></ruby>')
                .replace(/ 大門/g, ' <ruby>大門<rt>대문</rt></ruby>')
                .replace(/ 多幸/g, ' <ruby>多幸<rt>다행</rt></ruby>')
                .replace(/ 課程/g, ' <ruby>課程<rt>과정</rt></ruby>')
                .replace(/ 交流/g, ' <ruby>交流<rt>교류</rt></ruby>')
                .replace(/ 四德/g, ' <ruby>四德<rt>사덕</rt></ruby>')
                .replace(/ 完成/g, ' <ruby>完成<rt>완성</rt></ruby>')
                .replace(/ 空門/g, ' <ruby>空門<rt>공문</rt></ruby>')
                .replace(/ 無我/g, ' <ruby>無我<rt>무아</rt></ruby>')
                .replace(/ 拒否/g, ' <ruby>拒否<rt>거부</rt></ruby>')
                .replace(/ 放下/g, ' <ruby>放下<rt>방하</rt></ruby>')
                .replace(/ 重大/g, ' <ruby>重大<rt>중대</rt></ruby>')
                .replace(/ 留念/g, ' <ruby>留念<rt>유념</rt></ruby>')
                .replace(/ 左右/g, ' <ruby>左右<rt>좌우</rt></ruby>')
                .replace(/ 三昧/g, ' <ruby>三昧<rt>삼매</rt></ruby>')
                .replace(/ 認知/g, ' <ruby>認知<rt>인지</rt></ruby>')
                .replace(/ 苦行/g, ' <ruby>苦行<rt>고행</rt></ruby>')
                .replace(/ 中覺/g, ' <ruby>中覺<rt>중각</rt></ruby>')
                .replace(/ 小覺/g, ' <ruby>小覺<rt>소각</rt></ruby>')
                .replace(/ 實習/g, ' <ruby>實習<rt>실습</rt></ruby>')
                .replace(/ 寸鐵/g, ' <ruby>寸鐵<rt>촌철</rt></ruby>')
                .replace(/ 無常/g, ' <ruby>無常<rt>무상</rt></ruby>')
                .replace(/ 同價/g, ' <ruby>同價<rt>동가</rt></ruby>')
                .replace(/ 正語/g, ' <ruby>正語<rt>정어</rt></ruby>')
                .replace(/ 正業/g, ' <ruby>正業<rt>정업</rt></ruby>')
                .replace(/ 正命/g, ' <ruby>正命<rt>정명</rt></ruby>')
                .replace(/ 正念/g, ' <ruby>正念<rt>정념</rt></ruby>')
                .replace(/ 自性/g, ' <ruby>自性<rt>자성</rt></ruby>')
                .replace(/ 遠視/g, ' <ruby>遠視<rt>원시</rt></ruby>')
                .replace(/ 定型/g, ' <ruby>定型<rt>정형</rt></ruby>')
                .replace(/ 同時/g, ' <ruby>同時<rt>동시</rt></ruby>')
                .replace(/ 活路/g, ' <ruby>活路<rt>활로</rt></ruby>')
                .replace(/ 復習/g, ' <ruby>復習<rt>복습</rt></ruby>')
                .replace(/ 三寶/g, ' <ruby>三寶<rt>삼보</rt></ruby>')
                .replace(/ 僧團/g, ' <ruby>僧團<rt>승단</rt></ruby>')
                .replace(/ 總計/g, ' <ruby>總計<rt>총계</rt></ruby>')
                .replace(/ 總和/g, ' <ruby>總和<rt>총화</rt></ruby>')
                .replace(/ 立場/g, ' <ruby>立場<rt>입장</rt></ruby>')
                .replace(/ 責任/g, ' <ruby>責任<rt>책임</rt></ruby>')
                .replace(/ 禪師/g, ' <ruby>禪師<rt>선사</rt></ruby>')
                .replace(/ 鼠族/g, ' <ruby>鼠族<rt>서족</rt></ruby>')
                .replace(/ 自身/g, ' <ruby>自身<rt>자신</rt></ruby>')
                .replace(/ 臨在/g, ' <ruby>臨在<rt>임재</rt></ruby>')
                .replace(/ 佛經/g, ' <ruby>佛經<rt>불경</rt></ruby>')
                .replace(/ 正道/g, ' <ruby>正道<rt>정도</rt></ruby>')
                .replace(/ 話者/g, ' <ruby>話者<rt>화자</rt></ruby>')
                .replace(/ 問道/g, ' <ruby>問道<rt>문도</rt></ruby>')
                .replace(/ 形成/g, ' <ruby>形成<rt>형성</rt></ruby>')
                .replace(/ 法問/g, ' <ruby>法問<rt>법문</rt></ruby>')
                .replace(/ 話頭/g, ' <ruby>話頭<rt>화두</rt></ruby>')
                .replace(/ 理想/g, ' <ruby>理想<rt>이상</rt></ruby>')
                .replace(/ 被恩/g, ' <ruby>被恩<rt>피은</rt></ruby>')
                .replace(/ 自恣/g, ' <ruby>自恣<rt>자자</rt></ruby>')
                .replace(/ 活佛/g, ' <ruby>活佛<rt>활불</rt></ruby>')
                .replace(/ 靈性/g, ' <ruby>靈性<rt>영성</rt></ruby>')
                .replace(/ 彼岸/g, ' <ruby>彼岸<rt>피안</rt></ruby>')
                .replace(/ 天然/g, ' <ruby>天然<rt>천연</rt></ruby>')
                .replace(/ 人工/g, ' <ruby>人工<rt>인공</rt></ruby>')
                .replace(/ 明堂/g, ' <ruby>明堂<rt>명당</rt></ruby>')
                .replace(/ 凶黨/g, ' <ruby>凶黨<rt>흉당</rt></ruby>')
                .replace(/ 禪房/g, ' <ruby>禪房<rt>선방</rt></ruby>')
                .replace(/ 作福/g, ' <ruby>作福<rt>작복</rt></ruby>')
                .replace(/ 思索/g, ' <ruby>思索<rt>사색</rt></ruby>')
                .replace(/ 毒杯/g, ' <ruby>毒杯<rt>독배</rt></ruby>')
                .replace(/ 馬車/g, ' <ruby>馬車<rt>마차</rt></ruby>')
                .replace(/ 唯識/g, ' <ruby>唯識<rt>유식</rt></ruby>')
                .replace(/ 龍樹/g, ' <ruby>龍樹<rt>용수</rt></ruby>')
                .replace(/ 區劃/g, ' <ruby>區劃<rt>구획</rt></ruby>')
                .replace(/ 活句/g, ' <ruby>活句<rt>활구</rt></ruby>')
                .replace(/ 念體/g, ' <ruby>念體<rt>염체</rt></ruby>')
                .replace(/ 巨富/g, ' <ruby>巨富<rt>거부</rt></ruby>')
                .replace(/ 旣存/g, ' <ruby>旣存<rt>기존</rt></ruby>')
                .replace(/ 旣成/g, ' <ruby>旣成<rt>기성</rt></ruby>')
                .replace(/ 超越/g, ' <ruby>超越<rt>초월</rt></ruby>')
                .replace(/ 提供/g, ' <ruby>提供<rt>제공</rt></ruby>')
                .replace(/ 參禪/g, ' <ruby>參禪<rt>참선</rt></ruby>')
                .replace(/ 假定/g, ' <ruby>假定<rt>가정</rt></ruby>')
                .replace(/ 點頭/g, ' <ruby>點頭<rt>점두</rt></ruby>')
                .replace(/ 谷口/g, ' <ruby>谷口<rt>다니구치</rt></ruby>')
                .replace(/ 禪宗/g, ' <ruby>禪宗<rt>선종</rt></ruby>')
                .replace(/ 敎宗/g, ' <ruby>敎宗<rt>교종</rt></ruby>')
                .replace(/ 卽非/g, ' <ruby>卽非<rt>즉비</rt></ruby>')
                .replace(/ 因位/g, ' <ruby>因位<rt>인위</rt></ruby>')
                .replace(/ 果位/g, ' <ruby>果位<rt>과위</rt></ruby>')
                .replace(/ 六祖/g, ' <ruby>六祖<rt>육조</rt></ruby>')
                .replace(/ 沙門/g, ' <ruby>沙門<rt>사문</rt></ruby>')
                .replace(/ 禪定/g, ' <ruby>禪定<rt>선정</rt></ruby>')
                .replace(/ 格物/g, ' <ruby>格物<rt>격물</rt></ruby>')
                .replace(/ 致知/g, ' <ruby>致知<rt>치지</rt></ruby>')
                .replace(/ 順序/g, ' <ruby>順序<rt>순서</rt></ruby>')
                .replace(/ 收斂/g, ' <ruby>收斂<rt>수렴</rt></ruby>')
                .replace(/ 學習/g, ' <ruby>學習<rt>학습</rt></ruby>')
                .replace(/ 講座/g, ' <ruby>講座<rt>강좌</rt></ruby>')
                .replace(/ 客觀/g, ' <ruby>客觀<rt>객관</rt></ruby>')
                .replace(/ 提示/g, ' <ruby>提示<rt>제시</rt></ruby>')
                .replace(/ 扶助/g, ' <ruby>扶助<rt>부조</rt></ruby>')
                .replace(/ 受苦/g, ' <ruby>受苦<rt>수고</rt></ruby>')
                .replace(/ 解消/g, ' <ruby>解消<rt>해소</rt></ruby>')
                .replace(/ 今方/g, ' <ruby>今方<rt>금방</rt></ruby>')
                .replace(/ 武裝/g, ' <ruby>武裝<rt>무장</rt></ruby>')
                .replace(/ 解除/g, ' <ruby>解除<rt>해제</rt></ruby>')
                .replace(/ 素材/g, ' <ruby>素材<rt>소재</rt></ruby>')
                .replace(/ 聖經/g, ' <ruby>聖經<rt>성경</rt></ruby>')
                .replace(/ 句節/g, ' <ruby>句節<rt>귀절</rt></ruby>')
                .replace(/ 自己/g, ' <ruby>自己<rt>자기</rt></ruby>')
                .replace(/ 紹介/g, ' <ruby>紹介<rt>소개</rt></ruby>')
                .replace(/ 于先/g, ' <ruby>于先<rt>우선</rt></ruby>')
                .replace(/ 複雜/g, ' <ruby>複雜<rt>복잡</rt></ruby>')
                .replace(/ 臨場/g, ' <ruby>臨場<rt>임장</rt></ruby>')
                .replace(/ 加行/g, ' <ruby>加行<rt>가행</rt></ruby>')
                .replace(/ 槪觀/g, ' <ruby>槪觀<rt>개관</rt></ruby>')
                .replace(/ 毒物/g, ' <ruby>毒物<rt>독물</rt></ruby>')
                .replace(/ 眞空/g, ' <ruby>眞空<rt>진공</rt></ruby>')
                .replace(/ 妙有/g, ' <ruby>妙有<rt>묘유</rt></ruby>')
                .replace(/ 逆順/g, ' <ruby>逆順<rt>역순</rt></ruby>')
                .replace(/ 萬法/g, ' <ruby>萬法<rt>만법</rt></ruby>')
                .replace(/ 無名/g, ' <ruby>無名<rt>무명</rt></ruby>')
                .replace(/ 重要/g, ' <ruby>重要<rt>중요</rt></ruby>')
                .replace(/ 情緖/g, ' <ruby>情緖<rt>정서</rt></ruby>')
                .replace(/ 次元/g, ' <ruby>次元<rt>차원</rt></ruby>')
                .replace(/ 宇宙/g, ' <ruby>宇宙<rt>우주</rt></ruby>')
                .replace(/ 創造/g, ' <ruby>創造<rt>창조</rt></ruby>')
                .replace(/ 完成/g, ' <ruby>完成<rt>완성</rt></ruby>')
                .replace(/ 藝術/g, ' <ruby>藝術<rt>예술</rt></ruby>')
                .replace(/ 簡單/g, ' <ruby>簡單<rt>쉽게</rt></ruby>')
                .replace(/ 韓國/g, ' <ruby>韓國<rt>한국</rt></ruby>')
                .replace(/ 傳達/g, ' <ruby>傳達<rt>전달</rt></ruby>')
                .replace(/ 反映/g, ' <ruby>反映<rt>반영</rt></ruby>')
                .replace(/ 自我/g, ' <ruby>自我<rt>자아</rt></ruby>')
                .replace(/ 講義/g, ' <ruby>講義<rt>강의</rt></ruby>')
                .replace(/ 記憶/g, ' <ruby>記憶<rt>기억</rt></ruby>')
                .replace(/ 只今/g, ' <ruby>只今<rt>지금</rt></ruby>')
                .replace(/ 觸覺/g, ' <ruby>觸覺<rt>촉각</rt></ruby>')
                .replace(/ 觸受/g, ' <ruby>觸受<rt>촉수</rt></ruby>')
                .replace(/ 首肯/g, ' <ruby>首肯<rt>수긍</rt></ruby>')
                .replace(/ 龍陀/g, ' <ruby>龍陀<rt>용타</rt></ruby>')
                .replace(/ 講/g, ' <ruby>講<rt>강</rt></ruby>')
                .replace(/ 第/g, ' <ruby>第<rt>제</rt></ruby>')
                .replace(/ 香/g, ' <ruby>香<rt>향</rt></ruby>')
                .replace(/ 聲/g, ' <ruby>聲<rt>성</rt></ruby>')
                .replace(/ 耳/g, ' <ruby>耳<rt>이</rt></ruby>')
                .replace(/ 因/g, ' <ruby>因<rt>인</rt></ruby>')
                .replace(/ 有/g, ' <ruby>有<rt>유</rt></ruby>')
                .replace(/ 眼/g, ' <ruby>眼<rt>안</rt></ruby>')
                .replace(/ 色/g, ' <ruby>色<rt>색</rt></ruby>')
                .replace(/ 的/g, ' <ruby>的<rt>적</rt></ruby>')
                .replace(/ 特/g, ' <ruby>特<rt>특</rt></ruby>')
                .replace(/ 知/g, ' <ruby>知<rt>지</rt></ruby>')
                .replace(/ 法/g, ' <ruby>法<rt>법</rt></ruby>')
                .replace(/ 觸/g, ' <ruby>觸<rt>촉</rt></ruby>')
                .replace(/ 識/g, ' <ruby>識<rt>식</rt></ruby>')
                .replace(/ 生/g, ' <ruby>生<rt>생</rt></ruby>')
                .replace(/ 前/g, ' <ruby>前<rt>전</rt></ruby>')
                .replace(/ 道/g, ' <ruby>道<rt>도</rt></ruby>')
                .replace(/ 式/g, ' <ruby>式<rt>식</rt></ruby>')
                .replace(/ 取/g, ' <ruby>取<rt>취</rt></ruby>')
                .replace(/ 愛/g, ' <ruby>愛<rt>애</rt></ruby>')
                .replace(/ 受/g, ' <ruby>受<rt>수</rt></ruby>')
                .replace(/ 行/g, ' <ruby>行<rt>행</rt></ruby>')
                .replace(/ 斷/g, ' <ruby>斷<rt>단</rt></ruby>')
                .replace(/ 間/g, ' <ruby>間<rt>간</rt></ruby>')
                .replace(/ 秒/g, ' <ruby>秒<rt>초</rt></ruby>')
                .replace(/ 意/g, ' <ruby>意<rt>의</rt></ruby>')
                .replace(/ 冊/g, ' <ruby>冊<rt>책</rt></ruby>')
                .replace(/ 對/g, ' <ruby>對<rt>대</rt></ruby>')
                .replace(/ 身/g, ' <ruby>身<rt>신</rt></ruby>')
                .replace(/ 苦/g, ' <ruby>苦<rt>고</rt></ruby>')
                .replace(/ 空/g, ' <ruby>空<rt>공</rt></ruby>')
                .replace(/ 爲/g, ' <ruby>爲<rt>위</rt></ruby>')
                .replace(/ 舌/g, ' <ruby>舌<rt>설</rt></ruby>')
                .replace(/ 集/g, ' <ruby>集<rt>집</rt></ruby>')
                .replace(/ 者/g, ' <ruby>者<rt>자</rt></ruby>')
                .replace(/ 滅/g, ' <ruby>滅<rt>멸</rt></ruby>')
                .replace(/ 鼻/g, ' <ruby>鼻<rt>비</rt></ruby>')
                .replace(/ 痴/g, ' <ruby>痴<rt>치</rt></ruby>')
                .replace(/ 貪/g, ' <ruby>貪<rt>탐</rt></ruby>')
                .replace(/ 瞋/g, ' <ruby>瞋<rt>진</rt></ruby>')
                .replace(/ 答/g, ' <ruby>答<rt>답</rt></ruby>')
                .replace(/ 感/g, ' <ruby>感<rt>감</rt></ruby>')
                .replace(/ 愚/g, ' <ruby>愚<rt>우</rt></ruby>')
                .replace(/ 良/g, ' <ruby>良<rt>양</rt></ruby>')
                .replace(/ 惡/g, ' <ruby>惡<rt>악</rt></ruby>')
                .replace(/ 場/g, ' <ruby>場<rt>장</rt></ruby>')
                .replace(/ 僧/g, ' <ruby>僧<rt>승</rt></ruby>')
                .replace(/ 分/g, ' <ruby>分<rt>분</rt></ruby>')
                .replace(/ 體/g, ' <ruby>體<rt>체</rt></ruby>')
                .replace(/ 用/g, ' <ruby>用<rt>용</rt></ruby>')
                .replace(/ 味/g, ' <ruby>味<rt>미</rt></ruby>')
                .replace(/ 善/g, ' <ruby>善<rt>선</rt></ruby>')
                .replace(/ 主/g, ' <ruby>主<rt>주</rt></ruby>')
                .replace(/ 細/g, ' <ruby>細<rt>세</rt></ruby>')
                .replace(/ 我/g, ' <ruby>我<rt>아</rt></ruby>')
                .replace(/ 果/g, ' <ruby>果<rt>과</rt></ruby>')
                .replace(/ 業/g, ' <ruby>業<rt>업</rt></ruby>')
                .replace(/ 助/g, ' <ruby>助<rt>조</rt></ruby>')
                .replace(/ 地/g, ' <ruby>地<rt>지</rt></ruby>')
                .replace(/ 水/g, ' <ruby>水<rt>수</rt></ruby>')
                .replace(/ 火/g, ' <ruby>火<rt>화</rt></ruby>')
                .replace(/ 風/g, ' <ruby>風<rt>풍</rt></ruby>')
                .replace(/ 想/g, ' <ruby>想<rt>상</rt></ruby>')
                .replace(/ 毒/g, ' <ruby>毒<rt>독</rt></ruby>')
                .replace(/ 部/g, ' <ruby>部<rt>부</rt></ruby>')
                .replace(/ 樂/g, ' <ruby>樂<rt>낙</rt></ruby>')
                .replace(/ 質/g, ' <ruby>質<rt>질</rt></ruby>')
                .replace(/ 量/g, ' <ruby>量<rt>양</rt></ruby>')
                .replace(/ 番/g, ' <ruby>番<rt>번</rt></ruby>')
                .replace(/ 臨/g, ' <ruby>臨<rt>임</rt></ruby>')
                .replace(/ 起/g, ' <ruby>起<rt>기</rt></ruby>')
                .replace(/ 傳/g, ' <ruby>傳<rt>전</rt></ruby>')
                .replace(/ 氣/g, ' <ruby>氣<rt>기</rt></ruby>')
                .replace(/ 向/g, ' <ruby>向<rt>향</rt></ruby>')
                .replace(/ 華/g, ' <ruby>華<rt>화</rt></ruby>')
                .replace(/ 淸/g, ' <ruby>淸<rt>청</rt></ruby>')
                .replace(/ 定/g, ' <ruby>定<rt>정</rt></ruby>')
            );
        });
    });