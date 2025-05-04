const vocabData = {
    1: [
      { word: "爱", pinyin: "ài", meaning: "ស្រឡាញ់", example: "我爱你。", example_kh: "ខ្ញុំស្រលាញ់អ្នក។", example_pinyin: "wǒ ài nǐ." },
      { word: "八", pinyin: "bā", meaning: "ប្រាំបី", example: "我有八本书。", example_kh: "ខ្ញុំមានសៀវភៅប្រាំបីក្បាល។", example_pinyin: "wǒ yǒu bā běn shū." },
      { word: "爸爸", pinyin: "bà ba", meaning: "ឪពុក", example: "我爸爸是医生。", example_kh: "ឪពុកខ្ញុំជាគ្រូពេទ្យ។", example_pinyin: "wǒ bà ba shì yī shēng." },
      { word: "杯子", pinyin: "bēi zi", meaning: "ពែង", example: "这个杯子是我的。", example_kh: "ពែងនេះជារបស់ខ្ញុំ។", example_pinyin: "zhè ge bēi zi shì wǒ de." },
      { word: "北京", pinyin: "běi jīng", meaning: "ទីក្រុងប៉េកាំង", example: "我想去北京。", example_kh: "ខ្ញុំចង់ទៅទីក្រុងប៉េកាំង។", example_pinyin: "wǒ xiǎng qù běi jīng." },
      { word: "本", pinyin: "běn", meaning: "នេះ (ក្បាល - ប្រើសម្រាប់សៀវភៅ)", example: "这本书很好。", example_kh: "សៀវភៅនេះល្អណាស់។", example_pinyin: "zhè běn shū hěn hǎo." },
      { word: "不客气", pinyin: "bú kè qi", meaning: "កុំគួរសមអី / សូមអញ្ជើញ", example: "谢谢你！—不客气。", example_kh: "សូមអរគុណ! — អ្វីកុំខ្លាចទេ។", example_pinyin: "xiè xie nǐ! — bú kè qi." },
      { word: "不", pinyin: "bù", meaning: "កុំ / មិន", example: "我不是老师。", example_kh: "ខ្ញុំមិនមែនជាគ្រូទេ។", example_pinyin: "wǒ bù shì lǎo shī." },
      { word: "菜", pinyin: "cài", meaning: "ម្ហូប", example: "我喜欢中国菜。", example_kh: "ខ្ញុំចូលចិត្តម្ហូបចិន។", example_pinyin: "wǒ xǐ huan zhōng guó cài." },
      { word: "茶", pinyin: "chá", meaning: "តែ", example: "我想喝茶。", example_kh: "ខ្ញុំចង់ផឹកតែ។", example_pinyin: "wǒ xiǎng hē chá." },
      { word: "吃", pinyin: "chī", meaning: "បរិភោគ / ញ៉ាំ", example: "我在吃饭。", example_kh: "ខ្ញុំកំពុងញ៉ាំបាយ។", example_pinyin: "wǒ zài chī fàn." },
      { word: "出租车", pinyin: "chū zū chē", meaning: "តាក់ស៊ី", example: "我们坐出租车去学校。", example_kh: "យើងជិះតាក់ស៊ីទៅសាលា។", example_pinyin: "wǒ men zuò chū zū chē qù xué xiào." },
      { word: "打电话", pinyin: "dǎ diàn huà", meaning: "ហៅទូរស័ព្ទ", example: "我给妈妈打电话。", example_kh: "ខ្ញុំហៅទូរស័ព្ទទៅឪម៉ាក់។", example_pinyin: "wǒ gěi mā ma dǎ diàn huà." },
      { word: "大", pinyin: "dà", meaning: "ធំ", example: "这只狗很大。", example_kh: "ឆ្កែនេះធំណាស់។", example_pinyin: "zhè zhī gǒu hěn dà." },
      { word: "的", pinyin: "de", meaning: "នៃ", example: "这是我的书。", example_kh: "នេះជាសៀវភៅរបស់ខ្ញុំ។", example_pinyin: "zhè shì wǒ de shū." },
      { word: "点", pinyin: "diǎn", meaning: "ចំណុច", example: "现在是三点。", example_kh: "ឥឡូវនេះម៉ោងបី។", example_pinyin: "xiàn zài shì sān diǎn." },
      { word: "电脑", pinyin: "diàn nǎo", meaning: "កុំព្យូទ័រ", example: "我用电脑工作。", example_kh: "ខ្ញុំប្រើកុំព្យូទ័រដើម្បីធ្វើការ។", example_pinyin: "wǒ yòng diàn nǎo gōng zuò." },
      { word: "电视", pinyin: "diàn shì", meaning: "ទូរទស្សន៍", example: "我在看电视。", example_kh: "ខ្ញុំកំពុងមើលទូរទស្សន៍។", example_pinyin: "wǒ zài kàn diàn shì." },
      { word: "电影", pinyin: "diàn yǐng", meaning: "រឿង", example: "我喜欢中国电影。", example_kh: "ខ្ញុំចូលចិត្តរឿងចិន។", example_pinyin: "wǒ xǐ huan zhōng guó diàn yǐng." },
      { word: "东西", pinyin: "dōng xi", meaning: "រឿង", example: "我买了一些东西。", example_kh: "ខ្ញុំបានទិញរបស់ខ្លះ។", example_pinyin: "wǒ mǎi le yī xiē dōng xi." },
      { word: "都", pinyin: "dōu", meaning: "ទាំងអស់", example: "我们都来了。", example_kh: "ពួកយើងទាំងអស់បានមក។", example_pinyin: "wǒ men dōu lái le." },
      { word: "读", pinyin: "dú", meaning: "អាន", example: "我每天读书。", example_kh: "ខ្ញុំអានសៀវភៅរៀងរាល់ថ្ងៃ។", example_pinyin: "wǒ měi tiān dú shū." },
      { word: "对不起", pinyin: "duì bu qǐ", meaning: "សុំទោស", example: "对不起，我迟到了。", example_kh: "សុំទោស ខ្ញុំមកយឺត។", example_pinyin: "duì bu qǐ, wǒ chí dào le." },
      { word: "多", pinyin: "duō", meaning: "ជាច្រើន", example: "人很多。", example_kh: "មនុស្សច្រើនណាស់។", example_pinyin: "rén hěn duō." },
      { word: "多少", pinyin: "duō shǎo", meaning: "ប៉ុន្មាន", example: "这个多少钱？", example_kh: "នេះតម្លៃប៉ុន្មាន?", example_pinyin: "zhè ge duō shǎo qián?" },
      {
        word: "儿子",
        pinyin: "ér zi",
        meaning: "កូនប្រុស",
        example: "我有一个儿子。",
        example_kh: "ខ្ញុំមានកូនប្រុសម្នាក់。",
        example_pinyin: "wǒ yǒu yī gè ér zi."
    },
    {
        word: "二",
        pinyin: "èr",
        meaning: "ពីរ",
        example: "我有二本书。",
        example_kh: "ខ្ញុំមានសៀវភៅពីរក្បាល。",
        example_pinyin: "wǒ yǒu èr běn shū."
    },
    {
        word: "饭店",
        pinyin: "fàn diàn",
        meaning: "ភោជនីយដ្ឋាន",
        example: "我们在饭店吃饭。",
        example_kh: "យើងញ៉ាំអាហារនៅភោជនីយដ្ឋាន。",
        example_pinyin: "wǒ men zài fàn diàn chī fàn."
    },
    {
        word: "飞机",
        pinyin: "fēi jī",
        meaning: "យន្តហោះ",
        example: "我坐飞机去中国。",
        example_kh: "ខ្ញុំជិះយន្តហោះទៅប្រទេសចិន。",
        example_pinyin: "wǒ zuò fēi jī qù zhōng guó."
    },
    {
        word: "分钟",
        pinyin: "fēn zhōng",
        meaning: "នាទី",
        example: "我等了十分分钟。",
        example_kh: "ខ្ញុំរង់ចាំបានដប់នាទី。",
        example_pinyin: "wǒ děng le shí fēn zhōng."
    },
    {
        word: "高兴",
        pinyin: "gāo xìng",
        meaning: "រីករាយ",
        example: "我很高兴见到你。",
        example_kh: "ខ្ញុំរីករាយណាស់ដែលបានជួបអ្នក。",
        example_pinyin: "wǒ hěn gāo xìng jiàn dào nǐ."
    },
    {
        word: "个",
        pinyin: "gè",
        meaning: "ក",
        example: "我买了一个苹果。",
        example_kh: "ខ្ញុំបានទិញផ្លែប៉ោមមួយ。",
        example_pinyin: "wǒ mǎi le yī gè píng guǒ."
    },
    {
        word: "工作",
        pinyin: "gōng zuò",
        meaning: "ការងារ",
        example: "我在公司工作。",
        example_kh: "ខ្ញុំធ្វើការនៅក្រុមហ៊ុន។",
        example_pinyin: "wǒ zài gōng sī gōng zuò."
    },
    {
        word: "狗",
        pinyin: "gǒu",
        meaning: "ឆ្កែ",
        example: "我家有一只狗。",
        example_kh: "នៅផ្ទះខ្ញុំមានឆ្កែមួយក្បាល。",
        example_pinyin: "wǒ jiā yǒu yī zhī gǒu."
    },
    {
        word: "汉语",
        pinyin: "hàn yǔ",
        meaning: "ជនជាតិចិន",
        example: "我在学习汉语。",
        example_kh: "ខ្ញុំកំពុងសិក្សាភាសាចិន。",
        example_pinyin: "wǒ zài xué xí hàn yǔ."
    },
    {
      word: "好",
      pinyin: "hǎo",
      meaning: "វាល្អ",
      example: "这个菜很好吃。",
      example_kh: "ម្ហូបនេះរសជាតិល្អណាស់។",
      example_pinyin: "zhè ge cài hěn hǎo chī."
  },
  {
      word: "号",
      pinyin: "hào",
      meaning: "ចំនួន",
      example: "今天是我的生日号。",
      example_kh: "ថ្ងៃនេះគឺជាថ្ងៃកំណើតរបស់ខ្ញុំ។",
      example_pinyin: "jīn tiān shì wǒ de shēng rì hào."
  },
  {
      word: "喝",
      pinyin: "hē",
      meaning: "ផឹក",
      example: "我喝了很多水。",
      example_kh: "ខ្ញុំផឹកទឹកច្រើនណាស់។",
      example_pinyin: "wǒ hē le hěn duō shuǐ."
  },
  {
      word: "和",
      pinyin: "hé",
      meaning: "ជាមួយ",
      example: "我和朋友一起去看电影。",
      example_kh: "ខ្ញុំទៅមើលភាពយន្តជាមួយមិត្តភក្តិ។",
      example_pinyin: "wǒ hé péng yǒu yī qǐ qù kàn diàn yǐng."
  },
  {
      word: "很",
      pinyin: "hěn",
      meaning: "ខ្លាំងណាស់",
      example: "她很聪明。",
      example_kh: "នាងមានឆ្លាតខ្លាំងណាស់។",
      example_pinyin: "tā hěn cōng míng."
  },
  {
      word: "后面",
      pinyin: "hòu miàn",
      meaning: "នៅខាងក្រោយ",
      example: "我在后面等你。",
      example_kh: "ខ្ញុំកំពុងរង់ចាំអ្នកនៅខាងក្រោយ។",
      example_pinyin: "wǒ zài hòu miàn děng nǐ."
  },
  {
      word: "回",
      pinyin: "huí",
      meaning: "ត្រលប់ទៅ",
      example: "我明天回家。",
      example_kh: "ខ្ញុំនឹងត្រលប់ទៅផ្ទះពេលថ្ងៃស្អែក។",
      example_pinyin: "wǒ míng tiān huí jiā."
  },
  {
      word: "会",
      pinyin: "huì",
      meaning: "ប្រជុំ",
      example: "我们会在晚上开会。",
      example_kh: "យើងនឹងប្រជុំគ្នាពេលល្ងាច។",
      example_pinyin: "wǒ men huì zài wǎn shàng kāi huì."
  },
  {
      word: "几",
      pinyin: "jǐ",
      meaning: "ពីរ​ឬ​បី",
      example: "你有几个朋友？",
      example_kh: "អ្នកមានមិត្តភក្តិប៉ុន្មាននាក់?",
      example_pinyin: "nǐ yǒu jǐ gè péng yǒu?"
  },
  {
      word: "家",
      pinyin: "jiā",
      meaning: "គ្រួសារ",
      example: "我家在北京。",
      example_kh: "គ្រួសាររបស់ខ្ញុំស្ថិតនៅប៉េកាំង។",
      example_pinyin: "wǒ jiā zài běi jīng."
  },
  {
      word: "叫",
      pinyin: "jiào",
      meaning: "ហៅ",
      example: "她叫李华。",
      example_kh: "នាងហៅថាលីហ្វាត។",
      example_pinyin: "tā jiào lǐ huá."
  },
  {
      word: "今天",
      pinyin: "jīn tiān",
      meaning: "សព្វថ្ងៃ​នេះ",
      example: "今天是星期五。",
      example_kh: "ថ្ងៃនេះគឺជាច័ន្ទ។",
      example_pinyin: "jīn tiān shì xīng qī wǔ."
  },
  {
      word: "九",
      pinyin: "jiǔ",
      meaning: "ប្រាំបួន",
      example: "我有九个苹果。",
      example_kh: "ខ្ញុំមានផ្លែប៉ោមប្រាំបួនសន្លឹក។",
      example_pinyin: "wǒ yǒu jiǔ gè píng guǒ."
  },
  {
      word: "开",
      pinyin: "kāi",
      meaning: "បើក",
      example: "他开车去上班。",
      example_kh: "គាត់បើកឡានទៅការិយាល័យ។",
      example_pinyin: "tā kāi chē qù shàng bān."
  },
  {
      word: "看",
      pinyin: "kàn",
      meaning: "រកមើល",
      example: "我们去看电影。",
      example_kh: "យើងទៅមើលភាពយន្ត។",
      example_pinyin: "wǒ men qù kàn diàn yǐng."
  },
  {
      word: "看见",
      pinyin: "kàn jiàn",
      meaning: "សូមមើល",
      example: "我看见你了。",
      example_kh: "ខ្ញុំបានមើលឃើញអ្នកហើយ។",
      example_pinyin: "wǒ kàn jiàn nǐ le."
  },
  {
      word: "块",
      pinyin: "kuài",
      meaning: "ដុំ",
      example: "这块蛋糕很好吃。",
      example_kh: "ផ្នែកនៃនំនេះរសជាតិល្អណាស់។",
      example_pinyin: "zhè kuài dàn gāo hěn hǎo chī."
  },
  {
      word: "来",
      pinyin: "lái",
      meaning: "មក",
      example: "他要来我的家。",
      example_kh: "គាត់ចង់មកផ្ទះរបស់ខ្ញុំ។",
      example_pinyin: "tā yào lái wǒ de jiā."
  },
  {
      word: "老师",
      pinyin: "lǎo shī",
      meaning: "គ្រូ",
      example: "我的老师很亲切。",
      example_kh: "គ្រូរបស់ខ្ញុំមានភាពអន្ដរជាតិ។",
      example_pinyin: "wǒ de lǎo shī hěn qīn qiè."
  },
  {
      word: "了",
      pinyin: "le",
      meaning: "ឡើងលើ",
      example: "我学会了中文。",
      example_kh: "ខ្ញុំបានរៀនភាសាចិន។",
      example_pinyin: "wǒ xué huì le zhōng wén."
  },
  {
      word: "冷",
      pinyin: "lěng",
      meaning: "ត្រជាក់",
      example: "今天很冷。",
      example_kh: "ថ្ងៃនេះត្រជាក់ណាស់។",
      example_pinyin: "jīn tiān hěn lěng."
  },
  {
      word: "里",
      pinyin: "lǐ",
      meaning: "ក្នុង",
      example: "书包里有一本书。",
      example_kh: "ក្នុងកាបូបមានសៀវភៅមួយ។",
      example_pinyin: "shū bāo lǐ yǒu yī běn shū."
  },
  {
      word: "六",
      pinyin: "liù",
      meaning: "ប្រាំមួយ",
      example: "我有六只猫。",
      example_kh: "ខ្ញុំមានឆ្មាមួយចំនួនប្រាំមួយគ្រឿង។",
      example_pinyin: "wǒ yǒu liù zhī māo."
  },
  {
      word: "吗",
      pinyin: "ma",
      meaning: "គឺវា",
      example: "你好吗？",
      example_kh: "អ្នកសុខសប្បាយទេ?",
      example_pinyin: "nǐ hǎo ma?"
  },
  {
      word: "妈妈",
      pinyin: "mā ma",
      meaning: "ម៉ាក់",
      example: "妈妈很爱我。",
      example_kh: "ម៉ាក់ស្រឡាញ់ខ្ញុំណាស់។",
      example_pinyin: "mā ma hěn ài wǒ."
  },
  {
    "word": "买",
    "pinyin": "mǎi",
    "meaning": "ទិញ",
    "example": "我买了一个新手机。",
    "example_kh": "ខ្ញុំទិញទូរស័ព្ទថ្មីមួយ។",
    "example_pinyin": "wǒ mǎi le yī gè xīn shǒu jī."
},
{
    "word": "猫",
    "pinyin": "māo",
    "meaning": "ឆ្មា",
    "example": "我家有一只猫。",
    "example_kh": "គ្រួសារខ្ញុំមានឆ្មា១ចំណី។",
    "example_pinyin": "wǒ jiā yǒu yī zhī māo."
},
{
    "word": "没关系",
    "pinyin": "méi guān xi",
    "meaning": "មិន​អី​ទេ",
    "example": "没关系，我会帮你。",
    "example_kh": "មិនអីទេ ខ្ញុំអាចជួយអ្នកបាន។",
    "example_pinyin": "méi guān xi, wǒ huì bāng nǐ."
},
{
    "word": "没有",
    "pinyin": "méi yǒu",
    "meaning": "ទេ",
    "example": "我没有钱。",
    "example_kh": "ខ្ញុំគ្មានលុយ។",
    "example_pinyin": "wǒ méi yǒu qián."
},
{
    "word": "米饭",
    "pinyin": "mǐ fàn",
    "meaning": "អង្ករ",
    "example": "我喜欢吃米饭。",
    "example_kh": "ខ្ញុំចូលចិត្តបរិច្ឆេទអង្ករ។",
    "example_pinyin": "wǒ xǐ huān chī mǐ fàn."
},
{
    "word": "名字",
    "pinyin": "míng zi",
    "meaning": "ឈ្មោះដំបូង",
    "example": "我叫什么名字？",
    "example_kh": "ខ្ញុំហៅថា ឈ្មោះយ៉ាងដូចម្តេច?",
    "example_pinyin": "wǒ jiào shén me míng zi?"
},
{
    "word": "明天",
    "pinyin": "míng tiān",
    "meaning": "ថ្ងៃស្អែក",
    "example": "明天我去旅行。",
    "example_kh": "ថ្ងៃស្អែកខ្ញុំនឹងទៅធ្វើដំណើរ។",
    "example_pinyin": "míng tiān wǒ qù lǚ xíng."
},
{
    "word": "哪",
    "pinyin": "nǎ",
    "meaning": "កន្លែងណា",
    "example": "你去哪里？",
    "example_kh": "អ្នកទៅកន្លែងណា?",
    "example_pinyin": "nǐ qù nǎ lǐ?"
},
{
    "word": "哪儿",
    "pinyin": "nǎ er",
    "meaning": "កន្លែងណា",
    "example": "我不知道哪儿有餐厅。",
    "example_kh": "ខ្ញុំមិនដឹងថាកន្លែងណាមានភោជនីយដ្ឋានទេ។",
    "example_pinyin": "wǒ bù zhī dào nǎ er yǒu cān tīng."
},
{
    "word": "那",
    "pinyin": "nà",
    "meaning": "នោះ",
    "example": "那是我的书。",
    "example_kh": "នោះគឺសៀវភៅរបស់ខ្ញុំ។",
    "example_pinyin": "nà shì wǒ de shū."
},
{
  word: "呢",
  pinyin: "ne",
  meaning: "អ្វី",
  example: "这是什么呢？",
  example_kh: "នេះគឺជាអ្វី?",
  example_pinyin: "zhè shì shén me ne?"
},
{
  word: "能",
  pinyin: "néng",
  meaning: "អាច",
  example: "我能帮助你。",
  example_kh: "ខ្ញុំអាចជួយអ្នកបាន។",
  example_pinyin: "wǒ néng bāng zhù nǐ."
},
{
  word: "你",
  pinyin: "nǐ",
  meaning: "អ្នក",
  example: "你好吗？",
  example_kh: "អ្នកសុខសប្បាយរបស់ទេ?",
  example_pinyin: "nǐ hǎo ma?"
},
{
  word: "年",
  pinyin: "nián",
  meaning: "ឆ្នាំ",
  example: "今年是2025年。",
  example_kh: "ឆ្នាំនេះគឺជា ឆ្នាំ2025。",
  example_pinyin: "jīn nián shì èr líng èr wǔ nián."
},
{
  word: "女儿",
  pinyin: "nǚ ér",
  meaning: "កូនស្រី",
  example: "她有一个女儿。",
  example_kh: "នាងមានកូនស្រីម្នាក់。",
  example_pinyin: "tā yǒu yī gè nǚ ér."
},
{
  word: "朋友",
  pinyin: "péng you",
  meaning: "មិត្តភក្តិ",
  example: "我是你的朋友。",
  example_kh: "ខ្ញុំគឺជាមិត្តភក្តិរបស់អ្នក。",
  example_pinyin: "wǒ shì nǐ de péng yǒu."
},
{
  word: "漂亮",
  pinyin: "piào liang",
  meaning: "ស្អាត",
  example: "她今天穿得很漂亮。",
  example_kh: "នាងសំរាប់ថ្ងៃនេះស្អាតណាស់。",
  example_pinyin: "tā jīn tiān chuān de hěn piào liang."
},
{
  word: "苹果",
  pinyin: "píng guǒ",
  meaning: "ផ្លែប៉ោម",
  example: "我喜欢吃苹果。",
  example_kh: "ខ្ញុំចូលចិត្តបរិច្ឆេទផ្លែប៉ោម。",
  example_pinyin: "wǒ xǐ huān chī píng guǒ."
},
{
  word: "七",
  pinyin: "qī",
  meaning: "ប្រាំពីរ",
  example: "我有七个苹果。",
  example_kh: "ខ្ញុំមានផ្លែប៉ោមប្រាំពីរ。",
  example_pinyin: "wǒ yǒu qī gè píng guǒ."
},
{
  word: "前面",
  pinyin: "qián miàn",
  meaning: "មុខ",
  example: "前面有一只狗。",
  example_kh: "នៅមុខមានឆ្កែមួយ。",
  example_pinyin: "qián miàn yǒu yī zhī gǒu."
},
{
  word: "钱",
  pinyin: "qián",
  meaning: "លុយ",
  example: "我没有钱。",
  example_kh: "ខ្ញុំគ្មានលុយ。",
  example_pinyin: "wǒ méi yǒu qián."
},
{
  word: "请",
  pinyin: "qǐng",
  meaning: "សូម",
  example: "请给我水。",
  example_kh: "សូមអោយទឹកខ្ញុំ。",
  example_pinyin: "qǐng gěi wǒ shuǐ."
},
{
  word: "去",
  pinyin: "qù",
  meaning: "ទៅជាមួយ",
  example: "我们去公园吧。",
  example_kh: "យើងទៅសួនច្បារអំពីគ្នា。",
  example_pinyin: "wǒ men qù gōng yuán ba."
},
{
  word: "热",
  pinyin: "rè",
  meaning: "កំដៅ",
  example: "今天很热。",
  example_kh: "ថ្ងៃនេះកំពុងរញ៉េរញ៉ៅ。",
  example_pinyin: "jīn tiān hěn rè."
},
{
  word: "人",
  pinyin: "rén",
  meaning: "ប្រជាជន",
  example: "这个城市有很多人。",
  example_kh: "ក្រុងនេះមានប្រជាជនច្រើន。",
  example_pinyin: "zhè gè chéng shì yǒu hěn duō rén."
},
{
  word: "认识",
  pinyin: "rèn shi",
  meaning: "ការយល់ដឹង",
  example: "我很高兴认识你。",
  example_kh: "ខ្ញុំមានសេចក្តីរីករាយដែលបានស្គាល់អ្នក。",
  example_pinyin: "wǒ hěn gāo xìng rèn shi nǐ."
},
{
  word: "三",
  pinyin: "sān",
  meaning: "បី",
  example: "我有三本书。",
  example_kh: "ខ្ញុំមានសៀវភៅបីសៀវភៅ។",
  example_pinyin: "wǒ yǒu sān běn shū."
},
{
  word: "商店",
  pinyin: "shāng diàn",
  meaning: "ហាង",
  example: "我去商店买东西。",
  example_kh: "ខ្ញុំទៅហាងដើម្បីទិញរបស់។",
  example_pinyin: "wǒ qù shāng diàn mǎi dōng xī."
},
{
  word: "上",
  pinyin: "shàng",
  meaning: "បើក",
  example: "她上了车。",
  example_kh: "នាងបានចូលរួមក្នុងឡាន。",
  example_pinyin: "tā shàng le chē."
},
{
  word: "上午",
  pinyin: "shàng wǔ",
  meaning: "ពេលព្រឹក",
  example: "我上午有课。",
  example_kh: "ខ្ញុំមានថ្នាក់នៅពេលព្រឹក។",
  example_pinyin: "wǒ shàng wǔ yǒu kè."
},
{
  word: "少",
  pinyin: "shǎo",
  meaning: "តិច",
  example: "他吃得很少。",
  example_kh: "គាត់បរិភោគតិចណាស់។",
  example_pinyin: "tā chī de hěn shǎo."
},
{
  word: "谁",
  pinyin: "shéi",
  meaning: "នរណា",
  example: "他是谁？",
  example_kh: "គាត់ជានរណា?",
  example_pinyin: "tā shì shéi?"
},
{
  word: "什么",
  pinyin: "shén me",
  meaning: "អ្វី",
  example: "你想吃什么？",
  example_kh: "អ្នកចង់ញុំាអ្វី?",
  example_pinyin: "nǐ xiǎng chī shén me?"
},
{
  word: "十",
  pinyin: "shí",
  meaning: "ដប់",
  example: "我有十本书。",
  example_kh: "ខ្ញុំមានសៀវភៅដប់ក្បាល។",
  example_pinyin: "wǒ yǒu shí běn shū."
},
{
  word: "时候",
  pinyin: "shí hou",
  meaning: "ពេលវេលា",
  example: "你什么时候来？",
  example_kh: "អ្នកមកពេលណា?",
  example_pinyin: "nǐ shén me shí hou lái?"
},
{
  word: "是",
  pinyin: "shì",
  meaning: "ត្រូវ/គឺជា",
  example: "他是老师。",
  example_kh: "គាត់ជាគ្រូបង្រៀន។",
  example_pinyin: "tā shì lǎo shī."
},
{
  word: "书",
  pinyin: "shū",
  meaning: "សៀវភៅ",
  example: "我喜欢这本书。",
  example_kh: "ខ្ញុំចូលចិត្តសៀវភៅនេះ។",
  example_pinyin: "wǒ xǐ huan zhè běn shū."
},
{
  word: "水",
  pinyin: "shuǐ",
  meaning: "ទឹក",
  example: "请喝点水。",
  example_kh: "សូមផឹកទឹកបន្តិច។",
  example_pinyin: "qǐng hē diǎn shuǐ."
},
{
  word: "水果",
  pinyin: "shuǐ guǒ",
  meaning: "ផ្លែឈើ",
  example: "你喜欢吃什么水果？",
  example_kh: "អ្នកចូលចិត្តញុំាផ្លែឈើអ្វី?",
  example_pinyin: "nǐ xǐ huan chī shén me shuǐ guǒ?"
},
{
  word: "睡觉",
  pinyin: "shuì jiào",
  meaning: "ចូលគេង",
  example: "我每天十点睡觉。",
  example_kh: "ខ្ញុំចូលគេងម៉ោងដប់រៀងរាល់ថ្ងៃ។",
  example_pinyin: "wǒ měi tiān shí diǎn shuì jiào."
},
{
  word: "说",
  pinyin: "shuō",
  meaning: "និយាយ",
  example: "他在说中文。",
  example_pinyin: "tā zài shuō zhōng wén.",
  example_kh: "គាត់កំពុងនិយាយភាសាចិន។"
},
{
  word: "四",
  pinyin: "sì",
  meaning: "បួន",
  example: "我们有四个苹果。",
  example_pinyin: "wǒ men yǒu sì gè píng guǒ.",
  example_kh: "យើងមានផ្លែប៉ោមបួនក្បាល។"
},
{
  word: "岁",
  pinyin: "suì",
  meaning: "អាយុ",
  example: "他今年五岁。",
  example_pinyin: "tā jīn nián wǔ suì.",
  example_kh: "គាត់អាយុប្រាំឆ្នាំក្នុងឆ្នាំនេះ។"
},
{
  word: "他",
  pinyin: "tā",
  meaning: "គាត់",
  example: "他很高。",
  example_pinyin: "tā hěn gāo.",
  example_kh: "គាត់ខ្ពស់ណាស់។"
},
{
  word: "她",
  pinyin: "tā",
  meaning: "នាង",
  example: "她在看书。",
  example_pinyin: "tā zài kàn shū.",
  example_kh: "នាងកំពុងអានសៀវភៅ។"
},
{
  word: "太",
  pinyin: "tài",
  meaning: "ផងដែរ",
  example: "这个太贵了。",
  example_pinyin: "zhè ge tài guì le.",
  example_kh: "នេះថ្លៃពេក។"
},
{
  word: "天气",
  pinyin: "tiān qì",
  meaning: "អាកាសធាតុ",
  example: "今天的天气很冷。",
  example_pinyin: "jīn tiān de tiān qì hěn lěng.",
  example_kh: "អាកាសធាតុថ្ងៃនេះត្រជាក់ណាស់។"
},
{
  word: "听",
  pinyin: "tīng",
  meaning: "ស្តាប់",
  example: "我喜欢听音乐。",
  example_pinyin: "wǒ xǐ huan tīng yīn yuè.",
  example_kh: "ខ្ញុំចូលចិត្តស្តាប់តន្ត្រី។"
},
{
  word: "同学",
  pinyin: "tóng xué",
  meaning: "មិត្តរួមថ្នាក់",
  example: "他是我的同学。",
  example_pinyin: "tā shì wǒ de tóng xué.",
  example_kh: "គាត់ជាមិត្តរួមថ្នាក់របស់ខ្ញុំ។"
},
{
  word: "喂",
  pinyin: "wèi",
  meaning: "សួស្តី (ការអាក់ខាន)",
  example: "喂，你好！",
  example_pinyin: "wèi, nǐ hǎo!",
  example_kh: "សួស្តី, សុខសប្បាយជារបៀប!"
},
{
  word: "我",
  pinyin: "wǒ",
  meaning: "ខ្ញុំ",
  example: "我是学生。",
  example_pinyin: "wǒ shì xué shēng.",
  example_kh: "ខ្ញុំជានិស្សិត។"
},
{
  word: "我们",
  pinyin: "wǒ men",
  meaning: "យើង",
  example: "我们很高兴。",
  example_pinyin: "wǒ men hěn gāo xìng.",
  example_kh: "យើងមានសុភមង្គល។"
},
{
  word: "五",
  pinyin: "wǔ",
  meaning: "ចុកពោះ",
  example: "五个苹果。",
  example_pinyin: "wǔ gè píng guǒ.",
  example_kh: "ផ្លែប៉ោមប្រាំក្បាល។"
},
{
  word: "喜欢",
  pinyin: "xǐ huan",
  meaning: "ចូលចិត្ត",
  example: "我喜欢吃水果。",
  example_pinyin: "wǒ xǐ huan chī shuǐ guǒ.",
  example_kh: "ខ្ញុំចូលចិត្តបរិច្ឆេទផ្លែឈើ។"
},
{
  word: "下",
  pinyin: "xià",
  meaning: "នៅក្រោម",
  example: "书在桌子下。",
  example_pinyin: "shū zài zhuō zi xià.",
  example_kh: "សៀវភៅនៅក្រោមតុ។"
},
{
  word: "下午",
  pinyin: "xià wǔ",
  meaning: "នៅពេលរសៀល",
  example: "我下午去商店。",
  example_pinyin: "wǒ xià wǔ qù shāng diàn.",
  example_kh: "ខ្ញុំទៅហាងនៅពេលរសៀល។"
},
{
  word: "下雨",
  pinyin: "xià yǔ",
  meaning: "ភ្លៀង",
  example: "今天下午会下雨。",
  example_pinyin: "jīn tiān xià wǔ huì xià yǔ.",
  example_kh: "ថ្ងៃនេះភ្លៀងនៅពេលរសៀល។"
},
{
  word: "先生",
  pinyin: "xiān sheng",
  meaning: "លោក",
  example: "先生，您好。",
  example_pinyin: "xiān sheng, nín hǎo.",
  example_kh: "លោក, សួស្តី!."
},
{
  word: "现在",
  pinyin: "xiàn zài",
  meaning: "ឥឡូវនេះ",
  example: "现在是上午。",
  example_pinyin: "xiàn zài shì shàng wǔ.",
  example_kh: "ឥឡូវនេះគឺពេលព្រឹក។"
},
{
  word: "想",
  pinyin: "xiǎng",
  meaning: "នឹកអ្នក",
  example: "我想家。",
  example_pinyin: "wǒ xiǎng jiā.",
  example_kh: "ខ្ញុំគិតដល់ផ្ទះ។"
},
{
  word: "小",
  pinyin: "xiǎo",
  meaning: "តូច",
  example: "这只猫很小。",
  example_pinyin: "zhè zhī māo hěn xiǎo.",
  example_kh: "ឆ្មាតនេះតូចណាស់។"
},
{
  word: "小姐",
  pinyin: "xiǎo jie",
  meaning: "នឹក",
  example: "小姐，帮我一下。",
  example_pinyin: "xiǎo jie, bāng wǒ yī xià.",
  example_kh: "នាងជួយខ្ញុំបន្តិច។"
},
{
  word: "些",
  pinyin: "xiē",
  meaning: "ខ្លះ",
  example: "这些书很有意思。",
  example_pinyin: "zhè xiē shū hěn yǒu yì si.",
  example_kh: "សៀវភៅខ្លះមានភាពទាក់ទាញ។"
},
{
  word: "写",
  pinyin: "xiě",
  meaning: "សរសេរ",
  example: "我喜欢写信。",
  example_pinyin: "wǒ xǐ huan xiě xìn.",
  example_kh: "ខ្ញុំចូលចិត្តសរសេរសំបុត្រ។"
},
{
  word: "谢谢",
  pinyin: "xiè xie",
  meaning: "សូមអរគុណ",
  example: "谢谢你的帮助。",
  example_pinyin: "xiè xie nǐ de bāng zhù.",
  example_kh: "សូមអរគុណសម្រាប់ជំនួយរបស់អ្នក។"
},
{
  word: "星期",
  pinyin: "xīng qī",
  meaning: "សប្តាហ៍",
  example: "我每个星期都去游泳。",
  example_pinyin: "wǒ měi gè xīng qī dōu qù yóu yǒng.",
  example_kh: "ខ្ញុំទៅជុះទឹករាល់សប្តាហ៍។"
},
{
  word: "学生",
  pinyin: "xué sheng",
  meaning: "និស្សិត",
  example: "他是一个聪明的学生。",
  example_pinyin: "tā shì yī gè cōng míng de xué shēng.",
  example_kh: "គាត់ជានិស្សិតដែលឆ្លាតឆ្លាត។"
},
{
  word: "学习",
  pinyin: "xué xí",
  meaning: "រៀន",
  example: "我每天都学习中文。",
  example_pinyin: "wǒ měi tiān dōu xué xí zhōng wén.",
  example_kh: "ខ្ញុំរៀនភាសាចិនរាល់ថ្ងៃ។"
},
{
  word: "学校",
  pinyin: "xué xiào",
  meaning: "សាលា",
  example: "学校里有很多学生。",
  example_pinyin: "xué xiào lǐ yǒu hěn duō xué shēng.",
  example_kh: "នៅក្នុងសាលាមាននិស្សិតច្រើន។"
},
{
  word: "一",
  pinyin: "yī",
  meaning: "មួយ",
  example: "我有一个苹果。",
  example_pinyin: "wǒ yǒu yī gè píng guǒ.",
  example_kh: "ខ្ញុំមានផ្លែប៉ោមមួយ។"
},
{
  word: "一点儿",
  pinyin: "yī diǎn er",
  meaning: "តិចតួច",
  example: "请给我一点儿水。",
  example_pinyin: "qǐng gěi wǒ yī diǎn er shuǐ.",
  example_kh: "សូមអោយខ្ញុំទឹកតិចតួច។"
},
{
  word: "医生",
  pinyin: "yī shēng",
  meaning: "គ្រូពេទ្យ",
  example: "我的医生很有经验。",
  example_pinyin: "wǒ de yī shēng hěn yǒu jīng yàn.",
  example_kh: "គ្រូពេទ្យរបស់ខ្ញុំមានបទពិសោធន៍ច្រើន។"
},
{
  word: "医院",
  pinyin: "yī yuàn",
  meaning: "មន្ទីរពេទ្យ",
  example: "她在医院工作。",
  example_pinyin: "tā zài yī yuàn gōng zuò.",
  example_kh: "នាងធ្វើការនៅមន្ទីរពេទ្យ។"
},
{
  word: "衣服",
  pinyin: "yī fu",
  meaning: "សម្លៀកបំពាក់",
  example: "我买了很多衣服。",
  example_pinyin: "wǒ mǎi le hěn duō yī fu.",
  example_kh: "ខ្ញុំទិញសម្លៀកបំពាក់ច្រើន។"
},
{
  word: "椅子",
  pinyin: "yǐ zi",
  meaning: "កៅអី",
  example: "这里有很多椅子。",
  example_pinyin: "zhè lǐ yǒu hěn duō yǐ zi.",
  example_kh: "នៅទីនេះមានកៅអីច្រើន។"
},
{
  word: "有",
  pinyin: "yǒu",
  meaning: "មាន",
  example: "我有一个朋友。",
  example_pinyin: "wǒ yǒu yī gè péng yǒu.",
  example_kh: "ខ្ញុំមានមិត្តភក្តិមួយ។"
},
{
  "word": "月",
  "pinyin": "yuè",
  "meaning": "ខែ",
  "example": "这个月我很忙。",
  "example_pinyin": "zhè ge yuè wǒ hěn máng.",
  "example_kh": "ខែមុននេះខ្ញុំមានការងារលំបាក។"
},
{
  "word": "再见",
  "pinyin": "zài jiàn",
  "meaning": "លាហើយ",
  "example": "再见！",
  "example_pinyin": "zài jiàn!",
  "example_kh": "លាហើយ!"
},
{
  "word": "在",
  "pinyin": "zài",
  "meaning": "ក្នុង",
  "example": "书在桌子上。",
  "example_pinyin": "shū zài zhuō zi shàng.",
  "example_kh": "សៀវភៅនៅលើតុ។"
},
{
  "word": "怎么",
  "pinyin": "zěn me",
  "meaning": "របៀប",
  "example": "你怎么去学校？",
  "example_pinyin": "nǐ zěn me qù xué xiào?",
  "example_kh": "តើអ្នកធ្វើដូចម្តេចដើម្បីទៅសាលា?"
},
{
  "word": "怎么样",
  "pinyin": "zěn me yàng",
  "meaning": "តើធ្វើដូចម្តេចអំពីវា",
  "example": "这个怎么样？",
  "example_pinyin": "zhè ge zěn me yàng?",
  "example_kh": "វាទៅដូចម្តេច?"
},
{
  "word": "这",
  "pinyin": "zhè",
  "meaning": "នេះ",
  "example": "这是我的书。",
  "example_pinyin": "zhè shì wǒ de shū.",
  "example_kh": "នេះគឺជាសៀវភៅរបស់ខ្ញុំ។"
},
{
  "word": "中国",
  "pinyin": "zhōng guó",
  "meaning": "ចិន",
  "example": "我去过中国。",
  "example_pinyin": "wǒ qù guò zhōng guó.",
  "example_kh": "ខ្ញុំបានទៅចិន។"
},
{
  "word": "中午",
  "pinyin": "zhōng wǔ",
  "meaning": "ថ្ងៃត្រង់",
  "example": "我们中午吃饭。",
  "example_pinyin": "wǒ men zhōng wǔ chī fàn.",
  "example_kh": "យើងបរិច្ឆេទអាហារពេលថ្ងៃត្រង់។"
},
{
  "word": "住",
  "pinyin": "zhù",
  "meaning": "រស់នៅ",
  "example": "我住在北京。",
  "example_pinyin": "wǒ zhù zài běi jīng.",
  "example_kh": "ខ្ញុំរស់នៅទីក្រុងប៉េកាំង។"
},
{
  "word": "桌子",
  "pinyin": "zhuō zi",
  "meaning": "តុ",
  "example": "桌子上有一本书。",
  "example_pinyin": "zhuō zi shàng yǒu yī běn shū.",
  "example_kh": "នៅលើតុមានសៀវភៅមួយគិល។"
},
{
  "word": "字",
  "pinyin": "zì",
  "meaning": "ពាក្យ",
  "example": "我写了一个字。",
  "example_pinyin": "wǒ xiě le yī gè zì.",
  "example_kh": "ខ្ញុំបានសរសេរពាក្យមួយ។"
},
{
  "word": "昨天",
  "pinyin": "zuó tiān",
  "meaning": "ម្សិលមិញ",
  "example": "昨天我去了商店。",
  "example_pinyin": "zuó tiān wǒ qù le shāng diàn.",
  "example_kh": "ម្សិលមិញខ្ញុំបានទៅហាង។"
},
{
  "word": "做",
  "pinyin": "zuò",
  "meaning": "ធ្វើ",
  "example": "我做了一个蛋糕。",
  "example_pinyin": "wǒ zuò le yī gè dàn gāo.",
  "example_kh": "ខ្ញុំបានធ្វើនំប៉័ងមួយ។"
},
{
  "word": "坐",
  "pinyin": "zuò",
  "meaning": "អង្គុយ",
  "example": "我坐在椅子上。",
  "example_pinyin": "wǒ zuò zài yǐ zi shàng.",
  "example_kh": "ខ្ញុំអង្គុយលើកៅអី។"
}  
  ],
2:[
  {
    "word": "吧",
    "pinyin": "ba",
    "meaning": "បារ",
    "example": "我们去吧。",
    "example_pinyin": "wǒ men qù ba.",
    "example_kh": "យើងទៅហើយ។"
  },
  {
    "word": "白",
    "pinyin": "bái",
    "meaning": "ស",
    "example": "白色的猫很可爱。",
    "example_pinyin": "bái sè de māo hěn kě ài.",
    "example_kh": "ឆ្មាពណ៌សគួរអោយស្រលាញ់។"
  },
  {
    "word": "百",
    "pinyin": "bǎi",
    "meaning": "រយ",
    "example": "一百个人在这里。",
    "example_pinyin": "yī bǎi gè rén zài zhè lǐ.",
    "example_kh": "មនុស្សរយនាក់នៅទីនេះ។"
  },
  {
    "word": "帮助",
    "pinyin": "bāng zhù",
    "meaning": "ជួយ",
    "example": "他帮助我做作业。",
    "example_pinyin": "tā bāng zhù wǒ zuò zuò yè.",
    "example_kh": "គាត់ជួយខ្ញុំធ្វើការងារ។"
  },
  {
    "word": "报纸",
    "pinyin": "bào zhǐ",
    "meaning": "កាសែត",
    "example": "我每天都看报纸。",
    "example_pinyin": "wǒ měi tiān dōu kàn bào zhǐ.",
    "example_kh": "ខ្ញុំមើលកាសែតរៀងរាល់ថ្ងៃ។"
  },
  {
    "word": "比",
    "pinyin": "bǐ",
    "meaning": "សមាមាត្រ",
    "example": "他比我高。",
    "example_pinyin": "tā bǐ wǒ gāo.",
    "example_kh": "គាត់ខ្ពស់ជាងខ្ញុំ។"
  },
  {
    "word": "别",
    "pinyin": "bié",
    "meaning": "កុំ",
    "example": "别忘了带书。",
    "example_pinyin": "bié wàng le dài shū.",
    "example_kh": "កុំភ្លេចយកសៀវភៅ។"
  },
  {
    "word": "宾馆",
    "pinyin": "bīn guǎn",
    "meaning": "សណ្ឋាគារ",
    "example": "我们住在宾馆里。",
    "example_pinyin": "wǒ men zhù zài bīn guǎn lǐ.",
    "example_kh": "យើងនៅសណ្ឋាគារ។"
  },
  {
    "word": "长",
    "pinyin": "cháng",
    "meaning": "វែង (គុណនាម)",
    "example": "这条路很长。",
    "example_pinyin": "zhè tiáo lù hěn cháng.",
    "example_kh": "ផ្លូវនេះវែងណាស់។"
  },
  {
    "word": "唱歌",
    "pinyin": "chàng gē",
    "meaning": "ច្រៀង",
    "example": "他喜欢唱歌。",
    "example_pinyin": "tā xǐ huān chàng gē.",
    "example_kh": "គាត់ចូលចិត្តច្រៀង។"
  },
  {
    "word": "出",
    "pinyin": "chū",
    "meaning": "ចេញ",
    "example": "他出去了。",
    "example_pinyin": "tā chū qù le.",
    "example_kh": "គាត់ចេញទៅហើយ។"
  },
  {
    "word": "穿",
    "pinyin": "chuān",
    "meaning": "ពាក់",
    "example": "我穿了一件新衣服。",
    "example_pinyin": "wǒ chuān le yī jiàn xīn yī fú.",
    "example_kh": "ខ្ញុំពាក់អាវថ្មីមួយ។"
  },
  {
    "word": "次",
    "pinyin": "cì",
    "meaning": "ដង",
    "example": "我去过三次中国。",
    "example_pinyin": "wǒ qù guò sān cì zhōng guó.",
    "example_kh": "ខ្ញុំបានទៅចិនបីដង។"
  },
  {
    "word": "从",
    "pinyin": "cóng",
    "meaning": "ពី",
    "example": "我从学校回家。",
    "example_pinyin": "wǒ cóng xué xiào huí jiā.",
    "example_kh": "ខ្ញុំត្រឡប់ពីសាលាមកផ្ទះ។"
  },
  {
    "word": "错",
    "pinyin": "cuò",
    "meaning": "ខុស",
    "example": "他的答案错了。",
    "example_pinyin": "tā de dá àn cuò le.",
    "example_kh": "ចម្លើយរបស់គាត់ខុស។"
  },
  {
    "word": "打篮球",
    "pinyin": "dǎ lán qiú",
    "meaning": "លេងបាល់បោះ",
    "example": "我喜欢打篮球。",
    "example_pinyin": "wǒ xǐ huān dǎ lán qiú.",
    "example_kh": "ខ្ញុំចូលចិត្តលេងបាល់បោះ។"
  },
  {
    "word": "大家",
    "pinyin": "dà jiā",
    "meaning": "អ្នករាល់គ្នា",
    "example": "大家都来了。",
    "example_pinyin": "dà jiā dōu lái le.",
    "example_kh": "អ្នករាល់គ្នាមកដល់ហើយ។"
  },
  {
    "word": "到",
    "pinyin": "dào",
    "meaning": "ទៅ",
    "example": "我到学校了。",
    "example_pinyin": "wǒ dào xué xiào le.",
    "example_kh": "ខ្ញុំមកដល់សាលាបានហើយ។"
  },
  {
    "word": "得",
    "pinyin": "de",
    "meaning": "ទទួលបាន (ភាគល្អិត)",
    "example": "他得了第一名。",
    "example_pinyin": "tā dé le dì yī míng.",
    "example_kh": "គាត់ទទួលបានទី១។"
  },
  {
    "word": "等",
    "pinyin": "děng",
    "meaning": "រង់ចាំ (កិរិយាស័ព្ទ)",
    "example": "我们在车站等他。",
    "example_pinyin": "wǒ men zài chē zhàn děng tā.",
    "example_kh": "យើងរង់ចាំគាត់នៅស្ថានីយ៍រថភ្លើង។"
  },
  {
    "word": "弟弟",
    "pinyin": "dì di",
    "meaning": "ប្អូនប្រុសតូច",
    "example": "我的弟弟很聪明。",
    "example_pinyin": "wǒ de dì di hěn cōng míng.",
    "example_kh": "ប្អូនប្រុសរបស់ខ្ញុំឆ្លាតណាស់។"
  },
  {
    "word": "第一",
    "pinyin": "dì yī",
    "meaning": "ដំបូង",
    "example": "这是第一本书。",
    "example_pinyin": "zhè shì dì yī běn shū.",
    "example_kh": "នេះគឺជាសៀវភៅដំបូង។"
  },
  {
    "word": "懂",
    "pinyin": "dǒng",
    "meaning": "យល់",
    "example": "我懂你说的话。",
    "example_pinyin": "wǒ dǒng nǐ shuō de huà.",
    "example_kh": "ខ្ញុំយល់ពីអ្វីដែលអ្នកនិយាយ។"
  },
  {
    "word": "对",
    "pinyin": "duì",
    "meaning": "ស្តាំ (ធ្នាក់)",
    "example": "这本书对我有帮助。",
    "example_pinyin": "zhè běn shū duì wǒ yǒu bāng zhù.",
    "example_kh": "សៀវភៅនេះមានអត្ថប្រយោជន៍សម្រាប់ខ្ញុំ។"
  },
  {
    "word": "对",
    "pinyin": "duì",
    "meaning": "បាទ (គុណនាម)",
    "example": "对，你说得对。",
    "example_pinyin": "duì, nǐ shuō de duì.",
    "example_kh": "បាទ, អ្នកនិយាយត្រឹមត្រូវ។"
  },
  {
    "word": "房间",
    "pinyin": "fáng jiān",
    "meaning": "បន្ទប់",
    "example": "我的房间很大。",
    "example_pinyin": "wǒ de fáng jiān hěn dà.",
    "example_kh": "បន្ទប់របស់ខ្ញុំធំមែនទែន។"
  },
  {
    "word": "非常",
    "pinyin": "fēi cháng",
    "meaning": "ច្រើនណាស់",
    "example": "今天非常冷。",
    "example_pinyin": "jīn tiān fēi cháng lěng.",
    "example_kh": "ថ្ងៃនេះត្រជាក់ណាស់។"
  },
  {
    "word": "服务员",
    "pinyin": "fú wù yuán",
    "meaning": "អ្នករត់តុ",
    "example": "服务员，请给我菜单。",
    "example_pinyin": "fú wù yuán, qǐng gěi wǒ cài dān.",
    "example_kh": "អ្នករត់តុ សូមផ្តល់ម៉ឺនុយឲ្យខ្ញុំ។"
  },
  {
    "word": "高",
    "pinyin": "gāo",
    "meaning": "ខ្ពស់",
    "example": "这座山很高。",
    "example_pinyin": "zhè zuò shān hěn gāo.",
    "example_kh": "ភ្នំនេះខ្ពស់ណាស់។"
  },
  {
    "word": "告诉",
    "pinyin": "gào su",
    "meaning": "ប្រាប់",
    "example": "请告诉我时间。",
    "example_pinyin": "qǐng gào su wǒ shí jiān.",
    "example_kh": "សូមប្រាប់ខ្ញុំអំពីពេលវេលា។"
  },
  {
    "word": "哥哥",
    "pinyin": "gē ge",
    "meaning": "បងប្រុស",
    "example": "我有一个哥哥。",
    "example_pinyin": "wǒ yǒu yī gè gē ge.",
    "example_kh": "ខ្ញុំមានបងប្រុសម្នាក់។"
  },
  {
    "word": "给",
    "pinyin": "gěi",
    "meaning": "ផ្តល់ឱ្យ",
    "example": "请给我一杯水。",
    "example_pinyin": "qǐng gěi wǒ yī bēi shuǐ.",
    "example_kh": "សូមផ្តល់ទឹកមួយកែវឲ្យខ្ញុំ។"
  },
  {
    "word": "公共汽车",
    "pinyin": "gōng gòng qì chē",
    "meaning": "ឡានក្រុង",
    "example": "我坐公共汽车去学校。",
    "example_pinyin": "wǒ zuò gōng gòng qì chē qù xué xiào.",
    "example_kh": "ខ្ញុំពឹងឡានក្រុងទៅសាលា។"
  },
  {
    "word": "公司",
    "pinyin": "gōng sī",
    "meaning": "ក្រុមហ៊ុន",
    "example": "他在公司工作。",
    "example_pinyin": "tā zài gōng sī gōng zuò.",
    "example_kh": "គាត់ធ្វើការនៅក្រុមហ៊ុន។"
  },
  {
    "word": "贵",
    "pinyin": "guì",
    "meaning": "ថ្លៃណាស់",
    "example": "这个很贵。",
    "example_pinyin": "zhè ge hěn guì.",
    "example_kh": "នេះថ្លៃណាស់។"
  },
  {
    "word": "过",
    "pinyin": "guò",
    "meaning": "ហុច (ភាគល្អិត)",
    "example": "我去过上海。",
    "example_pinyin": "wǒ qù guò Shàng hǎi.",
    "example_kh": "ខ្ញុំធ្លាប់ទៅស៊ាងហៃហើយ។"
  },
  {
    "word": "孩子",
    "pinyin": "hái zi",
    "meaning": "កូន",
    "example": "他们有两个孩子。",
    "example_pinyin": "tā men yǒu liǎng gè hái zi.",
    "example_kh": "ពួកគេមានកូនពីរនាក់។"
  },
  {
    "word": "还",
    "pinyin": "hái",
    "meaning": "ក៏ (adverb)",
    "example": "他还在工作。",
    "example_pinyin": "tā hái zài gōng zuò.",
    "example_kh": "គាត់ក៏កំពុងធ្វើការ។"
  },
  {
    "word": "好吃",
    "pinyin": "hǎo chī",
    "meaning": "ល្អក្នុងការបរិភោគ",
    "example": "这道菜很好吃。",
    "example_pinyin": "zhè dào cài hěn hǎo chī.",
    "example_kh": "ម្ហូបនេះរសជាតិឆ្ងាញ់។"
  },
  {
    "word": "黑",
    "pinyin": "hēi",
    "meaning": "ខ្មៅ",
    "example": "她穿了一件黑衣服。",
    "example_pinyin": "tā chuān le yī jiàn hēi yī fu.",
    "example_kh": "នាងពាក់អាវពណ៌ខ្មៅមួយ។"
  },
  {
    "word": "红",
    "pinyin": "hóng",
    "meaning": "ក្រហម",
    "example": "他的自行车是红色的。",
    "example_pinyin": "tā de zì xíng chē shì hóng sè de.",
    "example_kh": "កង់របស់គាត់ពណ៌ក្រហម។"
  },
  {
    "word": "火车站",
    "pinyin": "huǒ chē zhàn",
    "meaning": "ស្ថានីយ៍រថភ្លើង",
    "example": "火车站离这里很近。",
    "example_pinyin": "huǒ chē zhàn lí zhè lǐ hěn jìn.",
    "example_kh": "ស្ថានីយ៍រថភ្លើងនៅជិតទីនេះ។"
  },
  {
    "word": "机场",
    "pinyin": "jī chǎng",
    "meaning": "ព្រលានយន្តហោះ",
    "example": "我们明天去机场接他。",
    "example_pinyin": "wǒ men míng tiān qù jī chǎng jiē tā.",
    "example_kh": "សรุ่งนี้យើងទៅព្រលានយន្តហោះទទួលគាត់។"
  },
  {
    "word": "鸡蛋",
    "pinyin": "jī dàn",
    "meaning": "ស៊ុត",
    "example": "早餐我吃两个鸡蛋。",
    "example_pinyin": "zǎo cān wǒ chī liǎng gè jī dàn.",
    "example_kh": "ពេលអាហារពេលព្រឹកខ្ញុំញ៉ាំស៊ុតពីរគ្រាប់។"
  },
  {
    "word": "件",
    "pinyin": "jiàn",
    "meaning": "ចំណិត (មុខសម្លៀកបំពាក់)",
    "example": "我买了一件衬衫。",
    "example_pinyin": "wǒ mǎi le yī jiàn chèn shān.",
    "example_kh": "ខ្ញុំបានទិញអាវខោមួយ។"
  },
  {
    "word": "教室",
    "pinyin": "jiào shì",
    "meaning": "ថ្នាក់រៀន",
    "example": "学生们在教室里学习。",
    "example_pinyin": "xué shēng men zài jiào shì lǐ xué xí.",
    "example_kh": "និស្សិតកំពុងសិក្សានៅក្នុងថ្នាក់រៀន។"
  },
  {
    "word": "姐姐",
    "pinyin": "jiě jie",
    "meaning": "បងស្រី",
    "example": "我姐姐比我大两岁。",
    "example_pinyin": "wǒ jiě jie bǐ wǒ dà liǎng suì.",
    "example_kh": "បងស្រីរបស់ខ្ញុំចាស់ជាងខ្ញុំពីរឆ្នាំ។"
  },
  {
    "word": "介绍",
    "pinyin": "jiè shào",
    "meaning": "សេចក្តីផ្តើម/ណែនាំ",
    "example": "请你介绍一下自己。",
    "example_pinyin": "qǐng nǐ jiè shào yī xià zì jǐ.",
    "example_kh": "សូម​អ្នកណែនាំ​ខ្លួនឯង​សេចក្តី។"
  },
  {
    "word": "近",
    "pinyin": "jìn",
    "meaning": "ជិត",
    "example": "我家离学校很近。",
    "example_pinyin": "wǒ jiā lí xué xiào hěn jìn.",
    "example_kh": "ផ្ទះខ្ញុំជិតសាលាណាស់។"
  },
  {
    "word": "进",
    "pinyin": "jìn",
    "meaning": "ចូល/មុន",
    "example": "请进！",
    "example_pinyin": "qǐng jìn!",
    "example_kh": "សូមចូលមក!"
  },
  {
    "word": "就",
    "pinyin": "jiù",
    "meaning": "តែ/ហើយ",
    "example": "你来了就好。",
    "example_pinyin": "nǐ lái le jiù hǎo.",
    "example_kh": "អ្នកមកហើយវាល្អស្រាប់។"
  },
  {
    "word": "觉得",
    "pinyin": "jué de",
    "meaning": "មានអារម្មណ៍/គិតថា",
    "example": "我觉得他很聪明。",
    "example_pinyin": "wǒ jué de tā hěn cōng míng.",
    "example_kh": "ខ្ញុំគិតថាគាត់ឆ្លាតណាស់។"
  },
  {
    "word": "咖啡",
    "pinyin": "kā fēi",
    "meaning": "កាហ្វេ",
    "example": "我想喝咖啡。",
    "example_pinyin": "wǒ xiǎng hē kā fēi.",
    "example_kh": "ខ្ញុំចង់ផឹកកាហ្វេ។"
  },
  {
    "word": "开始",
    "pinyin": "kāi shǐ",
    "meaning": "ចាប់ផ្តើម",
    "example": "我们九点开始上课。",
    "example_pinyin": "wǒ men jiǔ diǎn kāi shǐ shàng kè.",
    "example_kh": "យើងចាប់ផ្តើមថ្នាក់ម៉ោងប្រាំពីរទេក។"
  },
  {
    "word": "考试",
    "pinyin": "kǎo shì",
    "meaning": "ការពិនិត្យ",
    "example": "明天有考试。",
    "example_pinyin": "míng tiān yǒu kǎo shì.",
    "example_kh": "ស្អែកមានការប្រឡង។"
  },
  {
    "word": "可能",
    "pinyin": "kě néng",
    "meaning": "អាច/ប្រហែល",
    "example": "他可能明天来。",
    "example_pinyin": "tā kě néng míng tiān lái.",
    "example_kh": "គាត់ប្រហែលជានឹងមកស្អែក។"
  },
  {
    "word": "可以",
    "pinyin": "kě yǐ",
    "meaning": "អាច",
    "example": "我可以进去吗？",
    "example_pinyin": "wǒ kě yǐ jìn qù ma?",
    "example_kh": "ខ្ញុំអាចចូលមកបានទេ?"
  },
  {
    "word": "课",
    "pinyin": "kè",
    "meaning": "ថ្នាក់",
    "example": "今天有两节课。",
    "example_pinyin": "jīn tiān yǒu liǎng jié kè.",
    "example_kh": "ថ្ងៃនេះមានថ្នាក់ពីរម៉ោង។"
  },
  {
    "word": "快",
    "pinyin": "kuài",
    "meaning": "លឿន",
    "example": "他跑得很快。",
    "example_pinyin": "tā pǎo de hěn kuài.",
    "example_kh": "គាត់រត់បានលឿនណាស់។"
  },
  {
    "word": "快乐",
    "pinyin": "kuài lè",
    "meaning": "រីករាយ",
    "example": "祝你生日快乐！",
    "example_pinyin": "zhù nǐ shēng rì kuài lè!",
    "example_kh": "សូមជូនពរ​ឲ្យអ្នកមានថ្ងៃកំណើតរំជួលរាយ!"  
  },
  {
    "word": "累",
    "pinyin": "lèi",
    "meaning": "ហត់នឿយ",
    "example": "我今天很累。",
    "example_pinyin": "wǒ jīn tiān hěn lèi.",
    "example_kh": "ថ្ងៃនេះខ្ញុំហត់ណាស់។"
  },
  {
    "word": "离",
    "pinyin": "lí",
    "meaning": "ពី",
    "example": "学校离我家不远。",
    "example_pinyin": "xué xiào lí wǒ jiā bù yuǎn.",
    "example_kh": "សាលាត់ពីផ្ទះខ្ញុំមិនឆ្ងាយទេ។"
  },
  {
    "word": "两",
    "pinyin": "liǎng",
    "meaning": "ពីរ",
    "example": "我买了两本书。",
    "example_pinyin": "wǒ mǎi le liǎng běn shū.",
    "example_kh": "ខ្ញុំបានទិញសៀវភៅពីរម្តង។"
  },
  {
    "word": "零",
    "pinyin": "líng",
    "meaning": "សូន្យ",
    "example": "现在是零度。",
    "example_pinyin": "xiàn zài shì líng dù.",
    "example_kh": "ឥឡូវនេះកម្តៅសូន្យដីក្រេ។"
  },
  {
    "word": "路",
    "pinyin": "lù",
    "meaning": "ផ្លូវ",
    "example": "这条路很长。",
    "example_pinyin": "zhè tiáo lù hěn cháng.",
    "example_kh": "ផ្លូវនេះវែងណាស់។"
  },
  {
    "word": "旅游",
    "pinyin": "lǚ yóu",
    "meaning": "ទេសចរណ៍",
    "example": "暑假我想去旅游。",
    "example_pinyin": "shǔ jià wǒ xiǎng qù lǚ yóu.",
    "example_kh": "ថ្ងៃសម្រាករដូវក្ដៅខ្ញុំចង់ទៅទេសចរណ៍។"
  },
  {
    "word": "卖",
    "pinyin": "mài",
    "meaning": "លក់",
    "example": "他在市场卖水果。",
    "example_pinyin": "tā zài shì chǎng mài shuǐ guǒ.",
    "example_kh": "គាត់កំពុងលក់ផ្លែឈើនៅផ្សារ។"
  },
  {
    "word": "慢",
    "pinyin": "màn",
    "meaning": "យឺត",
    "example": "别走得太慢。",
    "example_pinyin": "bié zǒu de tài màn.",
    "example_kh": "កុំដើរយឺតពេក។"
  },
  {
    "word": "忙",
    "pinyin": "máng",
    "meaning": "រវល់",
    "example": "我这几天很忙。",
    "example_pinyin": "wǒ zhè jǐ tiān hěn máng.",
    "example_kh": "ថ្ងៃចុងក្រោយនេះខ្ញុំរវល់ណាស់។"
  },
  {
    "word": "每",
    "pinyin": "měi",
    "meaning": "គ្នា",
    "example": "我每天都跑步。",
    "example_pinyin": "wǒ měi tiān dōu pǎo bù.",
    "example_kh": "ខ្ញុំរត់រាល់ថ្ងៃ។"
  },
  {
    "word": "妹妹",
    "pinyin": "mèi mei",
    "meaning": "ប្អូនស្រី",
    "example": "他有一个妹妹。",
    "example_pinyin": "tā yǒu yī gè mèi mei.",
    "example_kh": "គាត់មានប្អូនស្រីម្នាក់។"
  },
  {
    "word": "门",
    "pinyin": "mén",
    "meaning": "ទ្វារ",
    "example": "请关门。",
    "example_pinyin": "qǐng guān mén.",
    "example_kh": "សូមបិទទ្វារ។"
  },
  {
    "word": "面条",
    "pinyin": "miàn tiáo",
    "meaning": "មី",
    "example": "我喜欢吃面条。",
    "example_pinyin": "wǒ xǐ huan chī miàn tiáo.",
    "example_kh": "ខ្ញុំចូលចិត្តញ៉ាំមី។"
  },
  {
    "word": "男",
    "pinyin": "nán",
    "meaning": "បុរស",
    "example": "这里有很多男人。",
    "example_pinyin": "zhè lǐ yǒu hěn duō nán rén.",
    "example_kh": "នៅទីនេះមានបុរសជាច្រើន។"
  },
  {
    "word": "您",
    "pinyin": "nín",
    "meaning": "អ្នក (រាបសារ)",
    "example": "您贵姓？",
    "example_pinyin": "nín guì xìng?",
    "example_kh": "រាប់សារ អ្នកមានឈ្មោះត្រកូលអ្វី?"
  },
  {
    "word": "牛奶",
    "pinyin": "niú nǎi",
    "meaning": "ទឹកដោះគោ",
    "example": "我每天喝牛奶。",
    "example_pinyin": "wǒ měi tiān hē niú nǎi.",
    "example_kh": "ខ្ញុំផឹកទឹកដោះគោរៀងរាល់ថ្ងៃ។"
  },
  {
    "word": "女",
    "pinyin": "nǚ",
    "meaning": "ស្រី",
    "example": "这是女厕所。",
    "example_pinyin": "zhè shì nǚ cè suǒ.",
    "example_kh": "នេះគឺបន្ទប់ទឹកស្រី។"
  },
  {
    "word": "旁边",
    "pinyin": "páng biān",
    "meaning": "នៅក្បែរ",
    "example": "他坐在我旁边。",
    "example_pinyin": "tā zuò zài wǒ páng biān.",
    "example_kh": "គាត់អង្គុយនៅក្បែរខ្ញុំ។"
  },
  {
    "word": "跑步",
    "pinyin": "pǎo bù",
    "meaning": "រត់",
    "example": "我每天早上跑步。",
    "example_pinyin": "wǒ měi tiān zǎo shang pǎo bù.",
    "example_kh": "ខ្ញុំរត់រាល់ព្រឹក។"
  },
  {
    "word": "便宜",
    "pinyin": "pián yi",
    "meaning": "ថោក",
    "example": "这件衣服很便宜。",
    "example_pinyin": "zhè jiàn yī fu hěn pián yi.",
    "example_kh": "អាវមួយនេះថោកណាស់។"
  },
  {
    "word": "票",
    "pinyin": "piào",
    "meaning": "សំបុត្រ",
    "example": "我要买两张票。",
    "example_pinyin": "wǒ yào mǎi liǎng zhāng piào.",
    "example_kh": "ខ្ញុំចង់ទិញសំបុត្រពីរច្បាប់។"
  },
  {
    "word": "妻子",
    "pinyin": "qī zi",
    "meaning": "ប្រពន្ធ",
    "example": "他和妻子一起旅行。",
    "example_pinyin": "tā hé qī zi yī qǐ lǚ xíng.",
    "example_kh": "គាត់ទៅធ្វើដំណើរជាមួយប្រពន្ធ។"
  },
  {
    "word": "起床",
    "pinyin": "qǐ chuáng",
    "meaning": "ក្រោកឡើង",
    "example": "我每天六点起床。",
    "example_pinyin": "wǒ měi tiān liù diǎn qǐ chuáng.",
    "example_kh": "ខ្ញុំលើកខ្លួនឡើងម៉ោងប្រាំមួយរៀងរាល់ថ្ងៃ។"
  },
  {
    "word": "千",
    "pinyin": "qiān",
    "meaning": "ពាន់",
    "example": "这座桥有一千米长。",
    "example_pinyin": "zhè zuò qiáo yǒu yī qiān mǐ cháng.",
    "example_kh": "ស្ពាននេះមានបណ្ដោយមួយពាន់ម៉ែត្រ។"
  },
  {
    "word": "铅笔",
    "pinyin": "qiān bǐ",
    "meaning": "ខ្មៅដៃ",
    "example": "请借我一支铅笔。",
    "example_pinyin": "qǐng jiè wǒ yī zhī qiān bǐ.",
    "example_kh": "សូមខ្ចីខ្មៅដៃមួយដុក។"
  },
  {
    "word": "晴",
    "pinyin": "qíng",
    "meaning": "ច្បាស់",
    "example": "今天是晴天。",
    "example_pinyin": "jīn tiān shì qíng tiān.",
    "example_kh": "ថ្ងៃនេះមានអាកាសច្បាស់។"
  },
  {
    "word": "去年",
    "pinyin": "qù nián",
    "meaning": "ឆ្នាំមុន",
    "example": "去年我去了法国。",
    "example_pinyin": "qù nián wǒ qù le fǎ guó.",
    "example_kh": "ឆ្នាំមុនខ្ញុំបានទៅប្រទេសបារាំង។"
  },
  {
    "word": "让",
    "pinyin": "ràng",
    "meaning": "សូមឱ្យ",
    "example": "请让一下。",
    "example_pinyin": "qǐng ràng yī xià.",
    "example_kh": "សូមអនុញ្ញាតចេញជិត។"
  },
  {
    "word": "日",
    "pinyin": "rì",
    "meaning": "ថ្ងៃ",
    "example": "今天是五月三日。",
    "example_pinyin": "jīn tiān shì wǔ yuè sān rì.",
    "example_kh": "ថ្ងៃនេះគឺថ្ងៃទី៣ ឧសភា។"
  },
  {
    "word": "上班",
    "pinyin": "shàng bān",
    "meaning": "ទៅធ្វើការ",
    "example": "他每天八点上班。",
    "example_pinyin": "tā měi tiān bā diǎn shàng bān.",
    "example_kh": "គាត់ទៅធ្វើការម៉ោងប្រាំបីរៀងរាល់ថ្ងៃ។"
  },
  {
    "word": "身体",
    "pinyin": "shēn tǐ",
    "meaning": "រាងកាយ",
    "example": "请注意身体。",
    "example_pinyin": "qǐng zhù yì shēn tǐ.",
    "example_kh": "សូមយកចិត្តទុកដាក់ដល់សុខភាព។"
  },
  {
    "word": "生病",
    "pinyin": "shēng bìng",
    "meaning": "ឈឺ",
    "example": "他昨天生病了。",
    "example_pinyin": "tā zuó tiān shēng bìng le.",
    "example_kh": "គាត់ឈឺម្សិលមិញ។"
  },
  {
    "word": "生日",
    "pinyin": "shēng rì",
    "meaning": "ថ្ងៃកំណើត",
    "example": "今天是我的生日。",
    "example_pinyin": "jīn tiān shì wǒ de shēng rì.",
    "example_kh": "ថ្ងៃនេះគឺជាថ្ងៃកំណើតរបស់ខ្ញុំ។"
  },
  {
    "word": "时间",
    "pinyin": "shí jiān",
    "meaning": "ពេលវេលា",
    "example": "现在没有时间了。",
    "example_pinyin": "xiàn zài méi yǒu shí jiān le.",
    "example_kh": "ឥឡូវនេះមិនមានពេលទេ។"
  },
  {
    "word": "事情",
    "pinyin": "shì qing",
    "meaning": "រឿង",
    "example": "这是一件好事情。",
    "example_pinyin": "zhè shì yī jiàn hǎo shì qing.",
    "example_kh": "នេះជារឿងល្អមួយ។"
  },
  {
    "word": "手表",
    "pinyin": "shǒu biǎo",
    "meaning": "នាឡិកដៃ",
    "example": "他的手表很贵。",
    "example_pinyin": "tā de shǒu biǎo hěn guì.",
    "example_kh": "នាឡិកដៃរបស់គាត់ថ្លៃណាស់។"
  },
  {
    "word": "手机",
    "pinyin": "shǒu jī",
    "meaning": "ទូរស័ព្ទចល័ត",
    "example": "请把手机关机。",
    "example_pinyin": "qǐng bǎ shǒu jī guān jī.",
    "example_kh": "សូមបិទទូរស័ព្ទចល័ត។"
  },
  {
    "word": "说话",
    "pinyin": "shuō huà",
    "meaning": "និយាយ",
    "example": "请不要在教室里说话。",
    "example_pinyin": "qǐng bú yào zài jiào shì lǐ shuō huà.",
    "example_kh": "សូមកុំ​និយាយ​នៅ​ក្នុង​ថ្នាក់រៀន។"
  },
  {
    "word": "送",
    "pinyin": "sòng",
    "meaning": "ឱ្យឆ្ងាយ",
    "example": "我送他去机场。",
    "example_pinyin": "wǒ sòng tā qù jī chǎng.",
    "example_kh": "ខ្ញុំ​ទៅ​បញ្ជូន​គាត់​ទៅ​ព្រលាន​យន្តហោះ។"
  },
  {
    "word": "虽然…但是…",
    "pinyin": "suī rán…dàn shì…",
    "meaning": "ទោះយ៉ាងណា…តែ…",
    "example": "虽然下雨，但是我还是去了。",
    "example_pinyin": "suī rán xià yǔ, dàn shì wǒ hái shì qù le.",
    "example_kh": "ទោះជាភ្លៀងក៏ដោយ តែខ្ញុំនៅតែទៅ។"
  },
  {
    "word": "它",
    "pinyin": "tā",
    "meaning": "វា",
    "example": "那只狗很可爱，它叫小白。",
    "example_pinyin": "nà zhī gǒu hěn kě ài, tā jiào xiǎo bái.",
    "example_kh": "ឆ្កែ​ខ្នងនោះគួរអោយស្រលាញ់ វាហៅថា​ សៀវប៉ៃ។"
  },
  {
    "word": "踢足球",
    "pinyin": "tī zú qiú",
    "meaning": "លេងបាល់ទាត់",
    "example": "他们喜欢踢足球。",
    "example_pinyin": "tā men xǐ huān tī zú qiú.",
    "example_kh": "ពួកគេចូលចិត្តលេងបាល់ទាត់។"
  },
  {
    "word": "题",
    "pinyin": "tí",
    "meaning": "សំណួរ",
    "example": "这道题很难。",
    "example_pinyin": "zhè dào tí hěn nán.",
    "example_kh": "សំណួរនេះលំបាកណាស់។"
  },
  {
    "word": "跳舞",
    "pinyin": "tiào wǔ",
    "meaning": "រាំ",
    "example": "她喜欢跳舞。",
    "example_pinyin": "tā xǐ huān tiào wǔ.",
    "example_kh": "នាងចូលចិត្តរាំ។"
  },
  {
    "word": "外",
    "pinyin": "wài",
    "meaning": "ខាងក្រៅ",
    "example": "我们去外面玩。",
    "example_pinyin": "wǒ men qù wài miàn wán.",
    "example_kh": "យើងទៅលេងខាងក្រៅ។"
  },
  {
    "word": "完",
    "pinyin": "wán",
    "meaning": "បញ្ចប់",
    "example": "我写完作业了。",
    "example_pinyin": "wǒ xiě wán zuò yè le.",
    "example_kh": "ខ្ញុំបានសរសេរងារផ្ទះរួចហើយ។"
  },
  {
    "word": "玩",
    "pinyin": "wán",
    "meaning": "លេង",
    "example": "孩子们在公园玩。",
    "example_pinyin": "hái zi men zài gōng yuán wán.",
    "example_kh": "បងប្អូនកំពុងលេងនៅសួនច្បារ។"
  },
  {
    "word": "晚上",
    "pinyin": "wǎn shang",
    "meaning": "នៅពេលយប់",
    "example": "我们晚上去吃饭。",
    "example_pinyin": "wǒ men wǎn shang qù chī fàn.",
    "example_kh": "យើងទៅបរិច្ឆេទអាហារពេលយប់។"
  },
  {
    "word": "往",
    "pinyin": "wǎng",
    "meaning": "ទៅ",
    "example": "他往学校走去。",
    "example_pinyin": "tā wǎng xué xiào zǒu qù.",
    "example_kh": "គាត់ដើរទៅសាលា។"
  },
  {
    "word": "为什么",
    "pinyin": "wèi shén me",
    "meaning": "ហេតុអ្វី",
    "example": "你为什么迟到？",
    "example_pinyin": "nǐ wèi shén me chí dào?",
    "example_kh": "ហេតុអ្វីបានជាអ្នកមកយឺត?"
  },
  {
    "word": "问",
    "pinyin": "wèn",
    "meaning": "សួរ",
    "example": "我想问一个问题。",
    "example_pinyin": "wǒ xiǎng wèn yī gè wèn tí.",
    "example_kh": "ខ្ញុំចង់សួរសំណួរមួយ។"
  },
  {
    "word": "问题",
    "pinyin": "wèn tí",
    "meaning": "បញ្ហា/សំណួរ",
    "example": "这个问题很重要。",
    "example_pinyin": "zhè gè wèn tí hěn zhòng yào.",
    "example_kh": "សំណួរនេះសំខាន់ណាស់។"
  },
  {
    "word": "希望",
    "pinyin": "xī wàng",
    "meaning": "សង្ឃឹម",
    "example": "我希望你成功。",
    "example_pinyin": "wǒ xī wàng nǐ chéng gōng.",
    "example_kh": "ខ្ញុំសង្ឃឹមឲ្យអ្នកជោគជ័យ។"
  },
  {
    "word": "西瓜",
    "pinyin": "xī guā",
    "meaning": "ឪឡឹក",
    "example": "夏天我喜欢吃西瓜。",
    "example_pinyin": "xià tiān wǒ xǐ huān chī xī guā.",
    "example_kh": "រដូវក្តៅខ្ញុំចូលចិត្តញ៉ាំឪឡឹក។"
  },
  {
    "word": "洗",
    "pinyin": "xǐ",
    "meaning": "លាង",
    "example": "请先洗手。",
    "example_pinyin": "qǐng xiān xǐ shǒu.",
    "example_kh": "សូមលាងដៃមុន។"
  },
  {
    "word": "小时",
    "pinyin": "xiǎo shí",
    "meaning": "ម៉ោង",
    "example": "我学中文已经两小时了。",
    "example_pinyin": "wǒ xué zhōng wén yǐ jīng liǎng xiǎo shí le.",
    "example_kh": "ខ្ញុំរៀនភាសាចិនបានប្រាំពីរម៉ោងហើយ។"
  },
  {
    "word": "笑",
    "pinyin": "xiào",
    "meaning": "សើច",
    "example": "听到笑话大家都笑了。",
    "example_pinyin": "tīng dào xiào huà dà jiā dōu xiào le.",
    "example_kh": "ពេលបានលឺរឿងកំប្លែងគ្រប់គ្នាសើច។"
  },
  {
    "word": "新",
    "pinyin": "xīn",
    "meaning": "ថ្មី",
    "example": "我买了一本新书。",
    "example_pinyin": "wǒ mǎi le yī běn xīn shū.",
    "example_kh": "ខ្ញុំបានទិញសៀវភៅថ្មីមួយ។"
  },
  {
    "word": "姓",
    "pinyin": "xìng",
    "meaning": "ឈ្មោះត្រកូល",
    "example": "您贵姓？",
    "example_pinyin": "nín guì xìng?",
    "example_kh": "អ្នកមានឈ្មោះត្រកូលអ្វី?"
  },
  {
    "word": "休息",
    "pinyin": "xiū xi",
    "meaning": "សូវ",
    "example": "我们去公园休息吧。",
    "example_pinyin": "wǒ men qù gōng yuán xiū xi ba.",
    "example_kh": "យើងទៅសួនច្បារ​សូមសូលហើយ។"
  },
  {
    "word": "雪",
    "pinyin": "xuě",
    "meaning": "ព្រិល",
    "example": "冬天下雪了。",
    "example_pinyin": "dōng tiān xià xuě le.",
    "example_kh": "រដូវរងាឯកព្រិលហើយ។"
  },
  {
    "word": "颜色",
    "pinyin": "yán sè",
    "meaning": "ពណ៌",
    "example": "你最喜欢什么颜色？",
    "example_pinyin": "nǐ zuì xǐ huan shén me yán sè?",
    "example_kh": "អ្នកចូលចិត្តពណ៌អ្វីបំផុត?"
  },
  {
    "word": "眼睛",
    "pinyin": "yǎn jing",
    "meaning": "ភ្នែក",
    "example": "他的眼睛很大。",
    "example_pinyin": "tā de yǎn jing hěn dà.",
    "example_kh": "ភ្នែករបស់គាត់ធំណាស់។"
  },
  {
    "word": "羊肉",
    "pinyin": "yáng ròu",
    "meaning": "សាច់ម្សៅចៀម",
    "example": "我喜欢吃羊肉。",
    "example_pinyin": "wǒ xǐ huan chī yáng ròu.",
    "example_kh": "ខ្ញុំចូលចិត្តញាំសាច់ម្សៅចៀម។"
  },
  {
    "word": "药",
    "pinyin": "yào",
    "meaning": "ថ្នាំ",
    "example": "他吃了药才好些。",
    "example_pinyin": "tā chī le yào cái hǎo xiē.",
    "example_kh": "គាត់បានចិញ្ចឹមថ្នាំហើយអាចឈានទៅល្អឡើង។"
  },
  {
    "word": "要",
    "pinyin": "yào",
    "meaning": "ចង់បាន",
    "example": "我要一杯茶。",
    "example_pinyin": "wǒ yào yī bēi chá.",
    "example_kh": "ខ្ញុំចង់បានពែងតែមួយ។"
  },
  {
    "word": "也",
    "pinyin": "yě",
    "meaning": "និង/ក៏",
    "example": "我也喜欢跑步。",
    "example_pinyin": "wǒ yě xǐ huan pǎo bù.",
    "example_kh": "ខ្ញុំក៏ចូលចិត្តរត់ដែរ។"
  },
  {
    "word": "一下",
    "pinyin": "yī xià",
    "meaning": "បន្តិច",
    "example": "你等我一下。",
    "example_pinyin": "nǐ děng wǒ yī xià.",
    "example_kh": "សូមរង់ចាំខ្ញុំបន្តិច។"
  },
  {
    "word": "已经",
    "pinyin": "yǐ jīng",
    "meaning": "រួចទៅហើយ",
    "example": "我已经吃过饭了。",
    "example_pinyin": "wǒ yǐ jīng chī guò fàn le.",
    "example_kh": "ខ្ញុំបានញ៉ាំអាហាររួចហើយ។"
  },
  {
    "word": "一起",
    "pinyin": "yī qǐ",
    "meaning": "ជាមួយគ្នា",
    "example": "我们一起去看电影。",
    "example_pinyin": "wǒ men yī qǐ qù kàn diàn yǐng.",
    "example_kh": "យើងទៅមើលភាពយន្តជាមួយគ្នា។"
  },
  {
    "word": "意思",
    "pinyin": "yì si",
    "meaning": "អត្ថន័យ",
    "example": "这个词是什么意思？",
    "example_pinyin": "zhè ge cí shì shén me yì si?",
    "example_kh": "ពាក្យនេះមានអត្ថន័យអ្វី?"
  },
  {
    "word": "因为…所以…",
    "pinyin": "yīn wèi…suǒ yǐ…",
    "meaning": "ដោយសារតែ…ដូច្នេះ…",
    "example": "因为下雨，所以我们没出去。",
    "example_pinyin": "yīn wèi xià yǔ, suǒ yǐ wǒ men méi chū qù.",
    "example_kh": "ដោយសារបានភ្លៀង ដូច្នេះយើងមិនបានចេញទៅក្រៅ។"
  },
  {
    "word": "阴",
    "pinyin": "yīn",
    "meaning": "ព្រលាក្រៀម/មានពណ៌ព្រលា",
    "example": "今天是阴天。",
    "example_pinyin": "jīn tiān shì yīn tiān.",
    "example_kh": "ថ្ងៃនេះមានអាកាសភ្លឺព្រលា។"
  },
  {
    "word": "游泳",
    "pinyin": "yóu yǒng",
    "meaning": "ហែលទឹក",
    "example": "他会游泳。",
    "example_pinyin": "tā huì yóu yǒng.",
    "example_kh": "គាត់អាចហែលទឹកបាន។"
  },
  {
    "word": "右边",
    "pinyin": "yòu biān",
    "meaning": "ត្រង់ស្តាំ",
    "example": "商店在右边。",
    "example_pinyin": "shāng diàn zài yòu biān.",
    "example_kh": "ហាងស្ថិតនៅត្រង់ស្តាំ។"
  },
  {
    "word": "鱼",
    "pinyin": "yú",
    "meaning": "ត្រី",
    "example": "我喜欢吃鱼。",
    "example_pinyin": "wǒ xǐ huan chī yú.",
    "example_kh": "ខ្ញុំចូលចិត្តញ៉ាំត្រី។"
  },
  {
    "word": "远",
    "pinyin": "yuǎn",
    "meaning": "ឆ្ងាយ",
    "example": "学校很远。",
    "example_pinyin": "xué xiào hěn yuǎn.",
    "example_kh": "សាលាគឺឆ្ងាយណាស់។"
  },
  {
    "word": "运动",
    "pinyin": "yùn dòng",
    "meaning": "ចលនា/ហាត់ប្រាណ",
    "example": "他每天做运动。",
    "example_pinyin": "tā měi tiān zuò yùn dòng.",
    "example_kh": "គាត់ហាត់ប្រាណរាល់ថ្ងៃ។"
  },
  {
    "word": "再",
    "pinyin": "zài",
    "meaning": "ម្តងទៀត",
    "example": "请再说一遍。",
    "example_pinyin": "qǐng zài shuō yī biàn.",
    "example_kh": "សូមនិយាយម្តងទៀត។"
  },
  {
    "word": "早上",
    "pinyin": "zǎo shang",
    "meaning": "ពេលព្រឹក",
    "example": "我早上七点起床。",
    "example_pinyin": "wǒ zǎo shang qī diǎn qǐ chuáng.",
    "example_kh": "ខ្ញុំលើកខ្លួនឡើងម៉ោងប្រាំពីរព្រឹក។"
  },
  {
    "word": "丈夫",
    "pinyin": "zhàng fu",
    "meaning": "ប្តី",
    "example": "她和丈夫一起旅行。",
    "example_pinyin": "tā hé zhàng fu yī qǐ lǚ xíng.",
    "example_kh": "នាងធ្វើដំណើរជាមួយប្តី។"
  },
  {
    "word": "找",
    "pinyin": "zhǎo",
    "meaning": "ស្វែងរក",
    "example": "我在找我的手机。",
    "example_pinyin": "wǒ zài zhǎo wǒ de shǒu jī.",
    "example_kh": "ខ្ញុំកំពុងស្វែងរកទូរស័ព្ទ។"
  },
  {
    "word": "着",
    "pinyin": "zhe",
    "meaning": "កំពុងដំណើរការ (សូចនាករ)",
    "example": "他看着电视。",
    "example_pinyin": "tā kàn zhe diàn shì.",
    "example_kh": "គាត់កំពុងមើលទូរទស្សន៍។"
  },
  {
    "word": "真",
    "pinyin": "zhēn",
    "meaning": "ពិត/មែន",
    "example": "这件衣服真漂亮。",
    "example_pinyin": "zhè jiàn yī fu zhēn piào liang.",
    "example_kh": "អាវនេះពិតជាស្អាតណាស់។"
  },
  {
    "word": "正在",
    "pinyin": "zhèng zài",
    "meaning": "កំពុងបច្ចុប្បន្ន",
    "example": "我正在学习汉语。",
    "example_pinyin": "wǒ zhèng zài xué xí hàn yǔ.",
    "example_kh": "ខ្ញុំកំពុងរៀនភាសាចិន។"
  },
  {
    "word": "知道",
    "pinyin": "zhī dào",
    "meaning": "ដឹង",
    "example": "你知道这个问题吗？",
    "example_pinyin": "nǐ zhī dào zhè gè wèn tí ma?",
    "example_kh": "តើអ្នកដឹងសំនួរនេះទេ?"
  },
  {
    "word": "准备",
    "pinyin": "zhǔn bèi",
    "meaning": "ត្រៀមខ្លួន",
    "example": "我们准备出发了。",
    "example_pinyin": "wǒ men zhǔn bèi chū fā le.",
    "example_kh": "យើងបានត្រៀមចេញដំណើរ។"
  },
  {
    "word": "走",
    "pinyin": "zǒu",
    "meaning": "ទៅ/ដើរ",
    "example": "我们一起走吧。",
    "example_pinyin": "wǒ men yī qǐ zǒu ba.",
    "example_kh": "យើងទៅជាមួយគ្នាហើយ។"
  },
  {
    "word": "最",
    "pinyin": "zuì",
    "meaning": "ភាគច្រើន/ជាងគេ",
    "example": "他跑得最快。",
    "example_pinyin": "tā pǎo de zuì kuài.",
    "example_kh": "គាត់រត់លឿនជាងគេ។"
  },
  {
    "word": "左边",
    "pinyin": "zuǒ biān",
    "meaning": "ឆ្វេង",
    "example": "银行在左边。",
    "example_pinyin": "yín háng zài zuǒ biān.",
    "example_kh": "ធនាគារនៅឆ្វេង។"
  }
],
3:[
  {
    "word": "啊",
    "pinyin": "a",
    "meaning": "អ្វី",
    "example": "你来了啊？",
    "example_pinyin": "nǐ lái le a?",
    "example_kh": "អ្នកមកហើយ​ឫ?"
  },
  {
    "word": "阿姨",
    "pinyin": "ā yí",
    "meaning": "មីង (sister’s wife; aunt)",
    "example": "阿姨，您好！",
    "example_pinyin": "ā yí, nín hǎo!",
    "example_kh": "មីង សួស្តី!"
  },
  {
    "word": "矮",
    "pinyin": "ǎi",
    "meaning": "ខ្លី (short)",
    "example": "他比我矮。",
    "example_pinyin": "tā bǐ wǒ ǎi.",
    "example_kh": "គាត់ខ្លីជាងខ្ញុំ។"
  },
  {
    "word": "爱好",
    "pinyin": "ài hào",
    "meaning": "ចំណង់ចំណូលចិត្ត (hobby)",
    "example": "我的爱好是看书。",
    "example_pinyin": "wǒ de ài hào shì kàn shū.",
    "example_kh": "ចំណង់ចំណូលចិត្តរបស់ខ្ញុំគឺឲ្យអានសៀវភៅ។"
  },
  {
    "word": "安静",
    "pinyin": "ān jìng",
    "meaning": "នៅស្ងៀម (quiet)",
    "example": "请保持安静。",
    "example_pinyin": "qǐng bǎo chí ān jìng.",
    "example_kh": "សូមរក្សាឲ្យស្ងៀម។"
  },
  {
    "word": "把",
    "pinyin": "bǎ",
    "meaning": "ដាក់ (to hold／to take)",
    "example": "把书给我。",
    "example_pinyin": "bǎ shū gěi wǒ.",
    "example_kh": "យកសៀវភៅឲ្យខ្ញុំ។"
  },
  {
    "word": "搬",
    "pinyin": "bān",
    "meaning": "ផ្លាស់ទី (to move)",
    "example": "我们明天搬家。",
    "example_pinyin": "wǒ men míng tiān bān jiā.",
    "example_kh": "យើងនឹងផ្លាស់​ទៅផ្ទះថ្មីស្អែក។"
  },
  {
    "word": "班",
    "pinyin": "bān",
    "meaning": "ថ្នាក់ (class／shift)",
    "example": "他在这个班学习。",
    "example_pinyin": "tā zài zhè gè bān xué xí.",
    "example_kh": "គាត់រៀននៅថ្នាក់នេះ។"
  },
  {
    "word": "办法",
    "pinyin": "bàn fǎ",
    "meaning": "វិធីសាស្រ្ត (method)",
    "example": "有什么办法？",
    "example_pinyin": "yǒu shén me bàn fǎ?",
    "example_kh": "មានវិធីអ្វីខ្លះ?"
  },
  {
    "word": "办公室",
    "pinyin": "bàn gōng shì",
    "meaning": "ការិយាល័យ (office)",
    "example": "他在办公室工作。",
    "example_pinyin": "tā zài bàn gōng shì gōng zuò.",
    "example_kh": "គាត់ធ្វើការនៅការិយាល័យ។"
  },
  {
    "word": "半",
    "pinyin": "bàn",
    "meaning": "ពាក់កណ្តាល (half)",
    "example": "现在是两点半。",
    "example_pinyin": "xiàn zài shì liǎng diǎn bàn.",
    "example_kh": "ឥឡូវនេះម៉ោងពីរពាក់កណ្តាល។"
  },
  {
    "word": "帮忙",
    "pinyin": "bāng máng",
    "meaning": "ជួយ (to help)",
    "example": "你能帮忙吗？",
    "example_pinyin": "nǐ néng bāng máng ma?",
    "example_kh": "អ្នកអាចជួយបានទេ?"
  },
  {
    "word": "包",
    "pinyin": "bāo",
    "meaning": "កញ្ចប់/ថង់ (bag)",
    "example": "我的包在哪里？",
    "example_pinyin": "wǒ de bāo zài nǎ lǐ?",
    "example_kh": "ថង់របស់ខ្ញុំនៅឯណា?"
  },
  {
    "word": "饱",
    "pinyin": "bǎo",
    "meaning": "ពេញ (full)",
    "example": "我吃饱了。",
    "example_pinyin": "wǒ chī bǎo le.",
    "example_kh": "ខ្ញុំញ៉ាំពេញហើយ។"
  },
  {
    "word": "北方",
    "pinyin": "běi fāng",
    "meaning": "ខាងជើង (north)",
    "example": "我想去北方旅游。",
    "example_pinyin": "wǒ xiǎng qù běi fāng lǚ yóu.",
    "example_kh": "ខ្ញុំចង់ទៅទស្សនាប្រទេសខាងជើង។"
  },
  {
    "word": "被",
    "pinyin": "bèi",
    "meaning": "ត្រូវ (by [passive])",
    "example": "他被老师表扬了。",
    "example_pinyin": "tā bèi lǎo shī biǎo yáng le.",
    "example_kh": "គាត់ត្រូវបានគ្រូសរសើរ។"
  },
  {
    "word": "鼻子",
    "pinyin": "bí zi",
    "meaning": "ច្រមុះ (nose)",
    "example": "他鼻子不舒服。",
    "example_pinyin": "tā bí zi bù shū fu.",
    "example_kh": "ច្រមុះរបស់គាត់មិនស្រួលទេ។"
  },
  {
    "word": "比较",
    "pinyin": "bǐ jiào",
    "meaning": "ប្រៀបធៀប/ជាងគេ (relatively)",
    "example": "这里比较安静。",
    "example_pinyin": "zhè lǐ bǐ jiào ān jìng.",
    "example_kh": "ទីនេះស្ងៀមជាង។"
  },
  {
    "word": "比赛",
    "pinyin": "bǐ sài",
    "meaning": "ល្បែង/ប្រកួត (competition)",
    "example": "我们去看比赛。",
    "example_pinyin": "wǒ men qù kàn bǐ sài.",
    "example_kh": "យើងទៅមើលការប្រកួត។"
  },
  {
    "word": "笔记本",
    "pinyin": "bǐ jì běn",
    "meaning": "សៀវភៅកត់ត្រា (notebook)",
    "example": "请打开你的笔记本。",
    "example_pinyin": "qǐng dǎ kāi nǐ de bǐ jì běn.",
    "example_kh": "សូមបើកសៀវភៅកត់ត្រារបស់អ្នក។"
  },
  {
    "word": "必须",
    "pinyin": "bì xū",
    "meaning": "ត្រូវតែ (must)",
    "example": "你必须完成作业。",
    "example_pinyin": "nǐ bì xū wán chéng zuò yè.",
    "example_kh": "អ្នកត្រូវតែបញ្ចូលការងារផ្ទះ។"
  },
  {
    "word": "变化",
    "pinyin": "biàn huà",
    "meaning": "ភាពខុសគ្នា (change)",
    "example": "天气变化很大。",
    "example_pinyin": "tiān qì biàn huà hěn dà.",
    "example_kh": "អាកាសធាតុមានការផ្លាស់ប្តូរជាច្រើន។"
  },
  {
    "word": "别人",
    "pinyin": "bié rén",
    "meaning": "អ្នកផ្សេង (others)",
    "example": "不要在意别人的看法。",
    "example_pinyin": "bú yào zài yì bié rén de kàn fǎ.",
    "example_kh": "កុំយកចិត្តទុកដាក់នូវទស្សនៈអ្នកផ្សេង។"
  },
  {
    "word": "冰箱",
    "pinyin": "bīng xiāng",
    "meaning": "ទូទឹកកក (refrigerator)",
    "example": "牛奶放在冰箱里。",
    "example_pinyin": "niú nǎi fàng zài bīng xiāng lǐ.",
    "example_kh": "ទឹកដោះគោដាក់ក្នុងទូទឹកកក។"
  },
  {
    "word": "不但…而且…",
    "pinyin": "bù dàn…ér qiě…",
    "meaning": "មិនត្រឹមតែ…ទេថែមទាំង… (not only…but also…)",
    "example": "他不但会中文，而且会英语。",
    "example_pinyin": "tā bú dàn huì zhōng wén, ér qiě huì yīng yǔ.",
    "example_kh": "គាត់មិនត្រឹមតែប្រែសមុខភាសាចិនទេ ប៉ុន្តែចេះភាសាអង់គ្លេសផង។"
  },
  {
    "word": "菜单",
    "pinyin": "cài dān",
    "meaning": "ម៉ឺនុយ (menu)",
    "example": "请给我菜单。",
    "example_pinyin": "qǐng gěi wǒ cài dān.",
    "example_kh": "សូមផ្តល់ម៉ឺនុយឲ្យខ្ញុំ។"
  },
  {
    "word": "参加",
    "pinyin": "cān jiā",
    "meaning": "ចូលរួម (to participate)",
    "example": "我想参加这个活动。",
    "example_pinyin": "wǒ xiǎng cān jiā zhè gè huó dòng.",
    "example_kh": "ខ្ញុំចង់ចូលរួមសកម្មភាពនេះ។"
  },
  {
    "word": "草",
    "pinyin": "cǎo",
    "meaning": "ស្មៅ (grass)",
    "example": "公园里有很多草。",
    "example_pinyin": "gōng yuán lǐ yǒu hěn duō cǎo.",
    "example_kh": "មានស្មៅជាច្រើននៅក្នុងឧទ្យាន។"
  },
  {
    "word": "层",
    "pinyin": "céng",
    "meaning": "ជាន់ (floor/layer)",
    "example": "他住在五层。",
    "example_pinyin": "tā zhù zài wǔ céng.",
    "example_kh": "គាត់ស្នាក់នៅជាន់ប្រាំ។"
  },
  {
    "word": "差",
    "pinyin": "chà",
    "meaning": "ភាពខុសគ្នា/ល្អតិច (poor/differ)",
    "example": "这个和那个差不多。",
    "example_pinyin": "zhè ge hé nà ge chà bú duō.",
    "example_kh": "អ្វីនេះនិងនោះស្ទើរតែដូចគ្នា។"
  },
  {
    "word": "超市",
    "pinyin": "chāo shì",
    "meaning": "ផ្សារទំនើប (supermarket)",
    "example": "我去超市买菜。",
    "example_pinyin": "wǒ qù chāo shì mǎi cài.",
    "example_kh": "ខ្ញុំទៅផ្សារទំនើបទិញម្ហូប។"
  },
  {
    "word": "衬衫",
    "pinyin": "chèn shān",
    "meaning": "អាវ (shirt)",
    "example": "他买了一件白色的衬衫。",
    "example_pinyin": "tā mǎi le yī jiàn bái sè de chèn shān.",
    "example_kh": "គាត់បានទិញអាវពណ៌សមួយ។"
  },
  {
    "word": "城市",
    "pinyin": "chéng shì",
    "meaning": "ទីក្រុង (city)",
    "example": "北京是一个大城市。",
    "example_pinyin": "Běi jīng shì yī gè dà chéng shì.",
    "example_kh": "ប៉េកាំងជាទីក្រុងធំមួយ។"
  },
  {
    "word": "成绩",
    "pinyin": "chéng jì",
    "meaning": "លទ្ធផល (grades)",
    "example": "他的成绩很好。",
    "example_pinyin": "tā de chéng jì hěn hǎo.",
    "example_kh": "លទ្ធផលរបស់គាត់ល្អណាស់។"
  },
  {
    "word": "迟到",
    "pinyin": "chí dào",
    "meaning": "យឺត (to be late)",
    "example": "今天我迟到了。",
    "example_pinyin": "jīn tiān wǒ chí dào le.",
    "example_kh": "ថ្ងៃនេះខ្ញុំមកយឺត។"
  },
  {
    "word": "除了",
    "pinyin": "chú le",
    "meaning": "ក្រៅពី (except)",
    "example": "除了他，我都去了。",
    "example_pinyin": "chú le tā, wǒ dōu qù le.",
    "example_kh": "ក្រៅពីគាត់ ពួកខ្ញុំទាំងអស់បានទៅ។"
  },
  {
    "word": "船",
    "pinyin": "chuán",
    "meaning": "ទូក (boat)",
    "example": "我们坐船去湖中。",
    "example_pinyin": "wǒ men zuò chuán qù hú zhōng.",
    "example_kh": "យើងជិះទូកទៅកណ្តាលទន្លេ។"
  },
  {
    "word": "春",
    "pinyin": "chūn",
    "meaning": "រដូវហឹម (spring)",
    "example": "春天花开了。",
    "example_pinyin": "chūn tiān huā kāi le.",
    "example_kh": "រដូវផ្កា​រាំ​ហើរ។"
  },
  {
    "word": "词典",
    "pinyin": "cí diǎn",
    "meaning": "វចនានុក្រម (dictionary)",
    "example": "我在查词典。",
    "example_pinyin": "wǒ zài chá cí diǎn.",
    "example_kh": "ខ្ញុំកំពុងមើលវចនានុក្រម។"
  },
  {
    "word": "聪明",
    "pinyin": "cōng ming",
    "meaning": "ឆ្លាត (smart)",
    "example": "她很聪明。",
    "example_pinyin": "tā hěn cōng ming.",
    "example_kh": "នាងឆ្លាតណាស់។"
  },
  {
    "word": "打扫",
    "pinyin": "dǎ sǎo",
    "meaning": "សម្អាត (to clean)",
    "example": "我打扫了房间。",
    "example_pinyin": "wǒ dǎ sǎo le fáng jiān.",
    "example_kh": "ខ្ញុំបានសម្អាតបន្ទប់។"
  },
  {
    "word": "打算",
    "pinyin": "dǎ suàn",
    "meaning": "មានបំណង (to plan)",
    "example": "我打算明天去旅游。",
    "example_pinyin": "wǒ dǎ suàn míng tiān qù lǚ yóu.",
    "example_kh": "ខ្ញុំមានបំណងទៅទេសចរណ៍ស្អែក។"
  },
  {
    "word": "带",
    "pinyin": "dài",
    "meaning": "យក/នាំ (to bring)",
    "example": "请带你的护照。",
    "example_pinyin": "qǐng dài nǐ de hù zhào.",
    "example_kh": "សូមយកលិខិតឆ្លងដែនរបស់អ្នក។"
  },
  {
    "word": "担心",
    "pinyin": "dān xīn",
    "meaning": "បារម្ភ (to worry)",
    "example": "不要担心，我会帮你。",
    "example_pinyin": "bú yào dān xīn, wǒ huì bāng nǐ.",
    "example_kh": "កុំបារម្ភ ខ្ញុំនឹងជួយអ្នក។"
  },
  {
    "word": "蛋糕",
    "pinyin": "dàn gāo",
    "meaning": "នំប៉័ង (cake)",
    "example": "我做了一个蛋糕。",
    "example_pinyin": "wǒ zuò le yī gè dàn gāo.",
    "example_kh": "ខ្ញុំបានធ្វើនំប៉័ងមួយ។"
  },
  {
    "word": "当然",
    "pinyin": "dāng rán",
    "meaning": "ពិតប្រាកដណាស់ (of course)",
    "example": "当然可以。",
    "example_pinyin": "dāng rán kě yǐ.",
    "example_kh": "ពិតប្រាកដណាស់ អាចបាន។"
  },
  {
    "word": "地",
    "pinyin": "de",
    "meaning": "ដី/ដោយ (adverbial marker)",
    "example": "他认真地学习。",
    "example_pinyin": "tā rèn zhēn de xué xí.",
    "example_kh": "គាត់រៀនយ៉ាងយកចិត្តទុកដាក់។"
  },
  {
    "word": "灯",
    "pinyin": "dēng",
    "meaning": "ភ្លើង (lamp)",
    "example": "请关灯。",
    "example_pinyin": "qǐng guān dēng.",
    "example_kh": "សូមគប់ភ្លើង។"
  },
  {
    "word": "地方",
    "pinyin": "dì fang",
    "meaning": "កន្លែង (place)",
    "example": "这个地方很好。",
    "example_pinyin": "zhè gè dì fang hěn hǎo.",
    "example_kh": "កន្លែងនេះល្អណាស់។"
  },
  {
    "word": "地铁",
    "pinyin": "dì tiě",
    "meaning": "រថភ្លើងក្រោមដី (subway)",
    "example": "我坐地铁去上班。",
    "example_pinyin": "wǒ zuò dì tiě qù shàng bān.",
    "example_kh": "ខ្ញុំពឹងរថភ្លើងក្រោមដីទៅធ្វើការ។"
  },
  {
    "word": "地图",
    "pinyin": "dì tú",
    "meaning": "ផែនទី (map)",
    "example": "请给我一张地图。",
    "example_pinyin": "qǐng gěi wǒ yī zhāng dì tú.",
    "example_kh": "សូមផ្តល់ផែនទីមួយជូនខ្ញុំ។"
  },
  {
    "word": "电梯",
    "pinyin": "diàn tī",
    "meaning": "លើកជាន់ (elevator)",
    "example": "他坐电梯上楼。",
    "example_pinyin": "tā zuò diàn tī shàng lóu.",
    "example_kh": "គាត់ជិះលើកជាន់ឡើងជាន់ខ្ពស់។"
  },
  {
    "word": "电子邮件",
    "pinyin": "diàn zǐ yóu jiàn",
    "meaning": "អ៊ីមែល (email)",
    "example": "我给你发了一封电子邮件。",
    "example_pinyin": "wǒ gěi nǐ fā le yī fēng diàn zǐ yóu jiàn.",
    "example_kh": "ខ្ញុំបានផ្ញើអ៊ីមែលមួយទៅអ្នក។"
  },
  {
    "word": "东",
    "pinyin": "dōng",
    "meaning": "កើត (east)",
    "example": "太阳从东方升起。",
    "example_pinyin": "tài yáng cóng dōng fāng shēng qǐ.",
    "example_kh": "ព្រះអាទិត្យរះពីទិសកើត។"
  },
  {
    "word": "冬",
    "pinyin": "dōng",
    "meaning": "រដូវរងារ (winter)",
    "example": "冬天下雪。",
    "example_pinyin": "dōng tiān xià xuě.",
    "example_kh": "រដូវរងារមានភ្លៀងព្រិល។"
  },
  {
    "word": "动物",
    "pinyin": "dòng wù",
    "meaning": "សត្វ (animal)",
    "example": "公园里有很多动物。",
    "example_pinyin": "gōng yuán lǐ yǒu hěn duō dòng wù.",
    "example_kh": "ក្នុងឧទ្យានមានសត្វជាច្រើន។"
  },
  {
    "word": "短",
    "pinyin": "duǎn",
    "meaning": "ខ្លី (short)",
    "example": "这条裤子太短了。",
    "example_pinyin": "zhè tiáo kù zi tài duǎn le.",
    "example_kh": "ខោនេះខ្លីពេក។"
  },
  {
    "word": "段",
    "pinyin": "duàn",
    "meaning": "ផ្នែក (section)",
    "example": "这一段路很美。",
    "example_pinyin": "zhè yī duàn lù hěn měi.",
    "example_kh": "ផ្លូវផ្នែកនេះស្អាតណាស់។"
  },
  {
    "word": "锻炼",
    "pinyin": "duàn liàn",
    "meaning": "ហាត់ប្រាណ (to exercise)",
    "example": "他每天锻炼身体。",
    "example_pinyin": "tā měi tiān duàn liàn shēn tǐ.",
    "example_kh": "គាត់ហាត់ប្រាណរាល់ថ្ងៃ។"
  },
  {
    "word": "多么",
    "pinyin": "duō me",
    "meaning": "យ៉ាងម៉េច (how)",
    "example": "你多么想去那里？",
    "example_pinyin": "nǐ duō me xiǎng qù nà lǐ?",
    "example_kh": "អ្នកចង់ទៅទីនោះយ៉ាងណា?"
  },
  {
    "word": "饿",
    "pinyin": "è",
    "meaning": "ឃ្លាន (hungry)",
    "example": "我很饿。",
    "example_pinyin": "wǒ hěn è.",
    "example_kh": "ខ្ញុំឃ្លានណាស់។"
  },
  {
    "word": "耳朵",
    "pinyin": "ěr duo",
    "meaning": "ត្រចៀក (ear)",
    "example": "他的耳朵不舒服。",
    "example_pinyin": "tā de ěr duo bù shū fu.",
    "example_kh": "ត្រចៀករបស់គាត់មិនស្រួលទេ។"
  },
  {
    "word": "发",
    "pinyin": "fā",
    "meaning": "សក់/ផ្ញើ (to send; hair)",
    "example": "我发了一个短信给他。",
    "example_pinyin": "wǒ fā le yī gè duǎn xìn gěi tā.",
    "example_kh": "ខ្ញុំផ្ញើសារស្លាបមួយទៅគាត់។"
  },
  {
    "word": "发烧",
    "pinyin": "fā shāo",
    "meaning": "គ្រុនក្តៅ (to have a fever)",
    "example": "她昨天发烧了。",
    "example_pinyin": "tā zuó tiān fā shāo le.",
    "example_kh": "នាងមានកំដៅខ្ពស់ម្សិលមិញ។"
  },
  {
    "word": "发现",
    "pinyin": "fā xiàn",
    "meaning": "រកឃើញ (to discover)",
    "example": "我发现一个问题。",
    "example_pinyin": "wǒ fā xiàn yī gè wèn tí.",
    "example_kh": "ខ្ញុំរកឃើញសំណួរមួយ។"
  },
  {
    "word": "方便",
    "pinyin": "fāng biàn",
    "meaning": "ងាយស្រួល (convenient)",
    "example": "这里很方便。",
    "example_pinyin": "zhè lǐ hěn fāng biàn.",
    "example_kh": "ទីនេះងាយស្រួលណាស់។"
  },
  {
    "word": "放",
    "pinyin": "fàng",
    "meaning": "ដាក់ (to put)",
    "example": "请把书放在桌子上。",
    "example_pinyin": "qǐng bǎ shū fàng zài zhuō zi shàng.",
    "example_kh": "សូមដាក់សៀវភៅនៅលើតុ។"
  },
  {
    "word": "放心",
    "pinyin": "fàng xīn",
    "meaning": "សង្ឃឹម / មិនបារម្ភ (to rest assured)",
    "example": "你可以放心。",
    "example_pinyin": "nǐ kě yǐ fàng xīn.",
    "example_kh": "អ្នកអាចមិនបារម្ភបាន។"
  },
  {
    "word": "分",
    "pinyin": "fēn",
    "meaning": "នាទី / ភាគល្អិត (minute; cent)",
    "example": "现在是十点十分。",
    "example_pinyin": "xiàn zài shì shí diǎn shí fēn.",
    "example_kh": "ឥឡូវនេះម៉ោងដប់ដប់នាទី។"
  },
  {
    "word": "复习",
    "pinyin": "fù xí",
    "meaning": "ពិនិត្យឡើងវិញ (to review)",
    "example": "我每天复习中文。",
    "example_pinyin": "wǒ měi tiān fù xí zhōng wén.",
    "example_kh": "ខ្ញុំរៀងរាល់ថ្ងៃបានពិនិត្យភាសាចិនឡើងវិញ។"
  },
  {
    "word": "干净",
    "pinyin": "gān jìng",
    "meaning": "ស្អាត (clean)",
    "example": "房间很干净。",
    "example_pinyin": "fáng jiān hěn gān jìng.",
    "example_kh": "បន្ទប់ស្អាតណាស់។"
  },
  {
    "word": "感冒",
    "pinyin": "gǎn mào",
    "meaning": "ផ្តាសាយ (to catch a cold)",
    "example": "我感冒了。",
    "example_pinyin": "wǒ gǎn mào le.",
    "example_kh": "ខ្ញុំផ្តាសាយ។"
  },
  {
    "word": "感兴趣",
    "pinyin": "gǎn xìng qù",
    "meaning": "ចាប់អារម្មណ៍ (to be interested in)",
    "example": "我对音乐感兴趣。",
    "example_pinyin": "wǒ duì yīn yuè gǎn xìng qù.",
    "example_kh": "ខ្ញុំចាប់អារម្មណ៍លើតន្ត្រី។"
  },
  {
    "word": "刚才",
    "pinyin": "gāng cái",
    "meaning": "មុននេះបន្តិច (just now)",
    "example": "我刚才在吃饭。",
    "example_pinyin": "wǒ gāng cái zài chī fàn.",
    "example_kh": "ខ្ញុំទើបតែបរិច្ឆេទអាហារ។"
  },
  {
    "word": "个子",
    "pinyin": "gè zi",
    "meaning": "កម្ពស់ (height)",
    "example": "他个子很高。",
    "example_pinyin": "tā gè zi hěn gāo.",
    "example_kh": "គាត់មានកម្ពស់ខ្ពស់ណាស់។"
  },
  {
    "word": "公斤",
    "pinyin": "gōng jīn",
    "meaning": "គីឡូក្រាម (kilogram)",
    "example": "这个箱子有二十公斤。",
    "example_pinyin": "zhè gè xiāng zi yǒu èr shí gōng jīn.",
    "example_kh": "ប្រអប់នេះមានពហុកីឡូក្រាម។"
  },
  {
    "word": "公园",
    "pinyin": "gōng yuán",
    "meaning": "សួនច្បារ (park)",
    "example": "我们去公园玩吧！",
    "example_pinyin": "wǒ men qù gōng yuán wán ba!",
    "example_kh": "យើងទៅលេងសួនច្បារជាមួយគ្នា!​"
  },
  {
    "word": "故事",
    "pinyin": "gù shi",
    "meaning": "រឿងនិទាន (story)",
    "example": "奶奶讲了一个故事。",
    "example_pinyin": "nǎi nai jiǎng le yī gè gù shi.",
    "example_kh": "យាយបាននិយាយរឿងនិទានមួយ។"
  },
  {
    "word": "刮风",
    "pinyin": "guā fēng",
    "meaning": "មានខ្យល់ (windy)",
    "example": "今天刮风了。",
    "example_pinyin": "jīn tiān guā fēng le.",
    "example_kh": "ថ្ងៃនេះមានខ្យល់។"
  },
  {
    "word": "关",
    "pinyin": "guān",
    "meaning": "បិទ (to close)",
    "example": "请把门关上。",
    "example_pinyin": "qǐng bǎ mén guān shàng.",
    "example_kh": "សូមបិទទ្វារ។"
  },
  {
    "word": "关系",
    "pinyin": "guān xì",
    "meaning": "ទំនាក់ទំនង (relationship, connection)",
    "example": "我和他关系很好。",
    "example_pinyin": "wǒ hé tā guān xì hěn hǎo.",
    "example_kh": "ខ្ញុំជាមួយគាត់មានទំនាក់ទំនងល្អ។"
  },
  {
    "word": "关心",
    "pinyin": "guān xīn",
    "meaning": "ថែទាំ / អនុចិត្ដ (to care for)",
    "example": "妈妈很关心我。",
    "example_pinyin": "mā mā hěn guān xīn wǒ.",
    "example_kh": "ម៉ាក់ខ្ញុំអនុចិត្ដខ្ញុំខ្លាំងណាស់។"
  },
  {
    "word": "关于",
    "pinyin": "guān yú",
    "meaning": "អំពី (about, regarding)",
    "example": "这是关于学习的书。",
    "example_pinyin": "zhè shì guān yú xué xí de shū.",
    "example_kh": "នេះគឺជាសៀវភៅអំពីការសិក្សា។"
  },
  {
    "word": "国家",
    "pinyin": "guó jiā",
    "meaning": "ប្រទេស (country, nation)",
    "example": "我爱我的国家。",
    "example_pinyin": "wǒ ài wǒ de guó jiā.",
    "example_kh": "ខ្ញុំស្រឡាញ់ប្រទេសរបស់ខ្ញុំ។"
  },
  {
    "word": "过",
    "pinyin": "guò",
    "meaning": "បាន (to pass, to experience)",
    "example": "我去过北京。",
    "example_pinyin": "wǒ qù guò běi jīng.",
    "example_kh": "ខ្ញុំធ្លាប់ទៅប៉េកាំង។"
  },
  {
    "word": "过去",
    "pinyin": "guò qù",
    "meaning": "អតីតកាល (past)",
    "example": "他过去住在上海。",
    "example_pinyin": "tā guò qù zhù zài shàng hǎi.",
    "example_kh": "ក្នុងអតីតកាលគាត់ស្នាក់នៅទីក្រុងសាងហៃ។"
  },
  {
    "word": "还是",
    "pinyin": "hái shi",
    "meaning": "ឬ (or - used in questions)",
    "example": "你要茶还是咖啡？",
    "example_pinyin": "nǐ yào chá hái shì kā fēi?",
    "example_kh": "អ្នកចង់ផឹកតែឬកាហ្វេ?"
  },
  {
    "word": "孩子",
    "pinyin": "hái zi",
    "meaning": "កូន (child)",
    "example": "这个孩子很聪明。",
    "example_pinyin": "zhè gè hái zi hěn cōng míng.",
    "example_kh": "កូននេះឆ្លាតណាស់។"
  },
  {
    "word": "害怕",
    "pinyin": "hài pà",
    "meaning": "ខ្លាច (to be afraid)",
    "example": "我害怕黑。",
    "example_pinyin": "wǒ hài pà hēi.",
    "example_kh": "ខ្ញុំខ្លាចភាពងងឹត។"
  },
  {
    "word": "汉语",
    "pinyin": "hàn yǔ",
    "meaning": "ភាសាចិន (Chinese language)",
    "example": "我正在学汉语。",
    "example_pinyin": "wǒ zhèng zài xué hàn yǔ.",
    "example_kh": "ខ្ញុំកំពុងសិក្សាភាសាចិន។"
  },
  {
    "word": "好吃",
    "pinyin": "hǎo chī",
    "meaning": "ឆ្ងាញ់ (delicious)",
    "example": "这个菜很好吃。",
    "example_pinyin": "zhè gè cài hěn hǎo chī.",
    "example_kh": "ម្ហូបនេះឆ្ងាញ់ណាស់។"
  },
  {
    "word": "好喝",
    "pinyin": "hǎo hē",
    "meaning": "ឆ្ងាញ់ (tasty to drink)",
    "example": "这个果汁很好喝。",
    "example_pinyin": "zhè gè guǒ zhī hěn hǎo hē.",
    "example_kh": "ទឹកផ្លែឈើនេះឆ្ងាញ់ណាស់។"
  },
  {
    "word": "好看",
    "pinyin": "hǎo kàn",
    "meaning": "ស្រស់ស្អាត / គួរឱ្យមើល (good-looking / nice to watch)",
    "example": "这部电影很好看。",
    "example_pinyin": "zhè bù diàn yǐng hěn hǎo kàn.",
    "example_kh": "ភាពយន្តនេះគួរឱ្យមើលណាស់។"
  },
  {
    "word": "好听",
    "pinyin": "hǎo tīng",
    "meaning": "ចម្រៀងឬសំឡេងល្អ (pleasant to hear)",
    "example": "这首歌很好听。",
    "example_pinyin": "zhè shǒu gē hěn hǎo tīng.",
    "example_kh": "បទចម្រៀងនេះពិរោះណាស់។"
  },
  {
    "word": "号",
    "pinyin": "hào",
    "meaning": "លេខ / ថ្ងៃទី (number, date)",
    "example": "今天是几号？",
    "example_pinyin": "jīn tiān shì jǐ hào?",
    "example_kh": "ថ្ងៃនេះថ្ងៃទីប៉ុន្មាន?"
  },
  {
    "word": "喝",
    "pinyin": "hē",
    "meaning": "ផឹក (to drink)",
    "example": "我想喝水。",
    "example_pinyin": "wǒ xiǎng hē shuǐ.",
    "example_kh": "ខ្ញុំចង់ផឹកទឹក។"
  },
  {
    "word": "和",
    "pinyin": "hé",
    "meaning": "និង / ជាមួយ (and, with)",
    "example": "我和你一起去。",
    "example_pinyin": "wǒ hé nǐ yī qǐ qù.",
    "example_kh": "ខ្ញុំនឹងអ្នកទៅជាមួយគ្នា។"
  },
  {
    "word": "黑板",
    "pinyin": "hēi bǎn",
    "meaning": "ក្តារខៀន (blackboard)",
    "example": "老师在黑板上写字。",
    "example_pinyin": "lǎo shī zài hēi bǎn shàng xiě zì.",
    "example_kh": "គ្រូកំពុងសរសេរលើក្តារខៀន។"
  },
  {
    "word": "黑色",
    "pinyin": "hēi sè",
    "meaning": "ពណ៌ខ្មៅ (black color)",
    "example": "他穿着黑色的衣服。",
    "example_pinyin": "tā chuān zhe hēi sè de yī fú.",
    "example_kh": "គាត់ស្លៀកឈុតពណ៌ខ្មៅ។"
  },
  {
    "word": "很",
    "pinyin": "hěn",
    "meaning": "ខ្លាំងណាស់ / ណាស់ (very)",
    "example": "她很漂亮。",
    "example_pinyin": "tā hěn piào liang.",
    "example_kh": "នាងស្អាតណាស់។"
  },
  {
    "word": "红",
    "pinyin": "hóng",
    "meaning": "ពណ៌ក្រហម (red)",
    "example": "我喜欢红色的衣服。",
    "example_pinyin": "wǒ xǐ huān hóng sè de yī fú.",
    "example_kh": "ខ្ញុំចូលចិត្តខោអាវពណ៌ក្រហម។"
  },
  {
    "word": "花",
    "pinyin": "huā",
    "meaning": "ផ្កា (flower)",
    "example": "花很漂亮。",
    "example_pinyin": "huā hěn piào liàng.",
    "example_kh": "ផ្កាស្អាតណាស់។"
  },
  {
    "word": "欢迎",
    "pinyin": "huān yíng",
    "meaning": "ស្វាគមន៍ (welcome)",
    "example": "欢迎你来中国！",
    "example_pinyin": "huān yíng nǐ lái zhōng guó!",
    "example_kh": "ស្វាគមន៍អ្នកមកប្រទេសចិន។"
  },
  {
    "word": "还",
    "pinyin": "hái",
    "meaning": "នៅតែ / ក៏ (still / also)",
    "example": "他还在学校。",
    "example_pinyin": "tā hái zài xué xiào.",
    "example_kh": "គាត់នៅតែស្ថិតនៅសាលា។"
  },
  {
    "word": "孩子",
    "pinyin": "hái zi",
    "meaning": "កុមារ (child)",
    "example": "这个孩子很可爱。",
    "example_pinyin": "zhè ge hái zi hěn kě ài.",
    "example_kh": "កុមារនេះគួរឱ្យស្រលាញ់ណាស់។"
  },
  {
    "word": "海",
    "pinyin": "hǎi",
    "meaning": "សមុទ្រ (sea)",
    "example": "我想去海边。",
    "example_pinyin": "wǒ xiǎng qù hǎi biān.",
    "example_kh": "ខ្ញុំចង់ទៅឆ្នេរសមុទ្រ។"
  },
  {
    "word": "汉语",
    "pinyin": "hàn yǔ",
    "meaning": "ភាសាចិន (Chinese language)",
    "example": "我在学汉语。",
    "example_pinyin": "wǒ zài xué hàn yǔ.",
    "example_kh": "ខ្ញុំកំពុងសិក្សาทាសាចិន។"
  },
  {
    "word": "好",
    "pinyin": "hǎo",
    "meaning": "ល្អ (good)",
    "example": "你好吗？",
    "example_pinyin": "nǐ hǎo ma?",
    "example_kh": "សុខសប្បាយរបស់អ្នកទេ?"
  },
  {
    "word": "好像",
    "pinyin": "hǎo xiàng",
    "meaning": "មើលទៅដូចជា / ហាក់ដូចជា (seems like)",
    "example": "他好像生病了。",
    "example_pinyin": "tā hǎo xiàng shēng bìng le.",
    "example_kh": "គាត់ហាក់ដូចជាឈឺ។"
  },
  {
    "word": "后面",
    "pinyin": "hòu miàn",
    "meaning": "ខាងក្រោយ (behind)",
    "example": "学校在我家的后面。",
    "example_pinyin": "xué xiào zài wǒ jiā de hòu miàn.",
    "example_kh": "សាលានៅខាងក្រោយផ្ទះខ្ញុំ។"
  },
  {
    "word": "火车站",
    "pinyin": "huǒ chē zhàn",
    "meaning": "ស្ថានីយរថភ្លើង (train station)",
    "example": "我在火车站等你。",
    "example_pinyin": "wǒ zài huǒ chē zhàn děng nǐ.",
    "example_kh": "ខ្ញុំកំពុងរង់ចាំអ្នកនៅស្ថានីយរថភ្លើង។"
  },
  {
    "word": "几",
    "pinyin": "jǐ",
    "meaning": "ប៉ុន្មាន (how many)",
    "example": "你有几个苹果？",
    "example_pinyin": "nǐ yǒu jǐ gè píng guǒ?",
    "example_kh": "អ្នកមានប៉ុន្មានផ្លែប៉ោម?"
  },
  {
    "word": "家",
    "pinyin": "jiā",
    "meaning": "ផ្ទះ / គ្រួសារ (home / family)",
    "example": "我想回家。",
    "example_pinyin": "wǒ xiǎng huí jiā.",
    "example_kh": "ខ្ញុំចង់ត្រឡប់ទៅផ្ទះ។"
  },
  {
    "word": "介绍",
    "pinyin": "jiè shào",
    "meaning": "ណែនាំ (introduce)",
    "example": "请你介绍一下你自己。",
    "example_pinyin": "qǐng nǐ jiè shào yī xià nǐ zì jǐ.",
    "example_kh": "សូមអ្នកណែនាំខ្លួនអ្នកផង។"
  },
  {
    "word": "今天",
    "pinyin": "jīn tiān",
    "meaning": "ថ្ងៃនេះ (today)",
    "example": "今天我很高兴。",
    "example_pinyin": "jīn tiān wǒ hěn gāo xìng.",
    "example_kh": "ថ្ងៃនេះខ្ញុំរីករាយណាស់។"
  },
  {
    "word": "进",
    "pinyin": "jìn",
    "meaning": "ចូល (enter)",
    "example": "请进！",
    "example_pinyin": "qǐng jìn!",
    "example_kh": "សូមចូល!"
  },
  {
    "word": "近",
    "pinyin": "jìn",
    "meaning": "ជិត (near)",
    "example": "我家离学校很近。",
    "example_pinyin": "wǒ jiā lí xué xiào hěn jìn.",
    "example_kh": "ផ្ទះខ្ញុំជិតសាលា។"
  },
  {
    "word": "九",
    "pinyin": "jiǔ",
    "meaning": "ប្រាំបួន (nine)",
    "example": "他有九本书。",
    "example_pinyin": "tā yǒu jiǔ běn shū.",
    "example_kh": "គាត់មានសៀវភៅប្រាំបួនក្បាល។"
  },
  {
    "word": "就",
    "pinyin": "jiù",
    "meaning": "ភ្លាមៗ / គ្រាន់តែ (right away / just)",
    "example": "我一回家就吃饭。",
    "example_pinyin": "wǒ yī huí jiā jiù chī fàn.",
    "example_kh": "ពេលខ្ញុំត្រឡប់ផ្ទះ ខ្ញុំបរិច្ឆេទភ្លាម។"
  },
  {
    "word": "觉得",
    "pinyin": "jué de",
    "meaning": "មានអារម្មណ៍ថា (feel / think)",
    "example": "我觉得这本书很好。",
    "example_pinyin": "wǒ jué de zhè běn shū hěn hǎo.",
    "example_kh": "ខ្ញុំមានអារម្មណ៍ថាសៀវភៅនេះល្អណាស់។"
  },
  {
    "word": "咖啡",
    "pinyin": "kā fēi",
    "meaning": "កាហ្វេ (coffee)",
    "example": "我每天早上喝咖啡。",
    "example_pinyin": "wǒ měi tiān zǎo shàng hē kā fēi.",
    "example_kh": "ខ្ញុំផឹកកាហ្វេរៀងរាល់ព្រឹក។"
  },
  {
    "word": "开始",
    "pinyin": "kāi shǐ",
    "meaning": "ចាប់ផ្តើម (to start)",
    "example": "我们几点开始上课？",
    "example_pinyin": "wǒ men jǐ diǎn kāi shǐ shàng kè?",
    "example_kh": "ពួកយើងចាប់ផ្តើមរៀនម៉ោងប៉ុន្មាន?"
  },
  {
    "word": "考",
    "pinyin": "kǎo",
    "meaning": "សាកល្បង (to test)",
    "example": "明天我们有汉语考试。",
    "example_pinyin": "míng tiān wǒ men yǒu hàn yǔ kǎo shì.",
    "example_kh": "ថ្ងៃស្អែកពួកយើងមានការប្រឡងភាសាចិន។"
  },
  {
    "word": "可能",
    "pinyin": "kě néng",
    "meaning": "ប្រហែលជា / អាច (maybe / possible)",
    "example": "他可能不会来。",
    "example_pinyin": "tā kě néng bú huì lái.",
    "example_kh": "គាត់ប្រហែលជាមិនមកទេ។"
  },
  {
    "word": "可以",
    "pinyin": "kě yǐ",
    "meaning": "អាច (can / may)",
    "example": "我可以进去吗？",
    "example_pinyin": "wǒ kě yǐ jìn qù ma?",
    "example_kh": "ខ្ញុំអាចចូលបានទេ?"
  },
  {
    "word": "课",
    "pinyin": "kè",
    "meaning": "មេរៀន (class / lesson)",
    "example": "今天有三节课。",
    "example_pinyin": "jīn tiān yǒu sān jié kè.",
    "example_kh": "ថ្ងៃនេះមានបីមេរៀន។"
  },
  {
    "word": "快",
    "pinyin": "kuài",
    "meaning": "លឿន (fast / soon)",
    "example": "我们快到家了。",
    "example_pinyin": "wǒ men kuài dào jiā le.",
    "example_kh": "ពួកយើងជិតដល់ផ្ទះហើយ។"
  },
  {
    "word": "快乐",
    "pinyin": "kuài lè",
    "meaning": "សប្បាយរីករាយ (happy)",
    "example": "祝你生日快乐！",
    "example_pinyin": "zhù nǐ shēng rì kuài lè!",
    "example_kh": "សូមអ祝អ្នកថ្ងៃកំណើតសប្បាយរីករាយ!"
  },
  {
    "word": "累",
    "pinyin": "lèi",
    "meaning": "ហត់ (tired)",
    "example": "你今天累不累？",
    "example_pinyin": "nǐ jīn tiān lèi bu lèi?",
    "example_kh": "ថ្ងៃនេះអ្នកហត់អត់?"
  },
  {
    "word": "离",
    "pinyin": "lí",
    "meaning": "ចម្ងាយពី (away from)",
    "example": "学校离我家不远。",
    "example_pinyin": "xué xiào lí wǒ jiā bù yuǎn.",
    "example_kh": "សាលាចម្ងាយពីផ្ទះខ្ញុំមិនឆ្ងាយទេ។"
  },
  {
    "word": "两",
    "pinyin": "liǎng",
    "meaning": "ពីរ (two - used with measure words)",
    "example": "我有两个妹妹。",
    "example_pinyin": "wǒ yǒu liǎng gè mèi mei.",
    "example_kh": "ខ្ញុំមានប្អូនស្រីពីរនាក់។"
  },
  {
    "word": "路",
    "pinyin": "lù",
    "meaning": "ផ្លូវ (road / route)",
    "example": "这条路怎么走？",
    "example_pinyin": "zhè tiáo lù zěn me zǒu?",
    "example_kh": "ផ្លូវនេះទៅដូចម្តេច?"
  },
  {
    "word": "旅游",
    "pinyin": "lǚ yóu",
    "meaning": "ការធ្វើដំណើរ (travel)",
    "example": "我喜欢旅游。",
    "example_pinyin": "wǒ xǐ huān lǚ yóu.",
    "example_kh": "ខ្ញុំចូលចិត្តធ្វើដំណើរ។"
  },
  {
    "word": "卖",
    "pinyin": "mài",
    "meaning": "លក់ (sell)",
    "example": "他们在市场卖水果。",
    "example_pinyin": "tā men zài shì chǎng mài shuǐ guǒ.",
    "example_kh": "ពួកគេលក់ផ្លែឈើនៅផ្សារ។"
  },
  {
    "word": "慢",
    "pinyin": "màn",
    "meaning": "យឺត (slow)",
    "example": "你走得太慢了。",
    "example_pinyin": "nǐ zǒu de tài màn le.",
    "example_kh": "អ្នកដើរយឺតពេក។"
  },
  {
    "word": "忙",
    "pinyin": "máng",
    "meaning": "រវល់ (busy)",
    "example": "我今天很忙。",
    "example_pinyin": "wǒ jīn tiān hěn máng.",
    "example_kh": "ថ្ងៃនេះខ្ញុំរវល់ណាស់។"
  },
  {
    "word": "每",
    "pinyin": "měi",
    "meaning": "រាល់ / តែម្ដង (every / each)",
    "example": "我每天都运动。",
    "example_pinyin": "wǒ měi tiān dōu yùn dòng.",
    "example_kh": "ខ្ញុំហាត់ប្រាណរាល់ថ្ងៃ។"
  },
  {
    "word": "妹妹",
    "pinyin": "mèi mei",
    "meaning": "ប្អូនស្រី (younger sister)",
    "example": "我妹妹很可爱。",
    "example_pinyin": "wǒ mèi mei hěn kě ài.",
    "example_kh": "ប្អូនស្រីខ្ញុំគួរឱ្យស្រលាញ់ណាស់។"
  },
  {
    "word": "门",
    "pinyin": "mén",
    "meaning": "ទ្វារ (door)",
    "example": "请关门。",
    "example_pinyin": "qǐng guān mén.",
    "example_kh": "សូមបិទទ្វារ។"
  },
  {
    "word": "面条",
    "pinyin": "miàn tiáo",
    "meaning": "មី (noodles)",
    "example": "我喜欢吃面条。",
    "example_pinyin": "wǒ xǐ huān chī miàn tiáo.",
    "example_kh": "ខ្ញុំចូលចិត្តបរិច្ឆេទមី។"
  },
  {
    "word": "年",
    "pinyin": "nián",
    "meaning": "ឆ្នាំ (year)",
    "example": "我今年二十岁。",
    "example_pinyin": "wǒ jīn nián èr shí suì.",
    "example_kh": "ខ្ញុំអាយុ២០ឆ្នាំ។"
  },
  {
    "word": "女",
    "pinyin": "nǚ",
    "meaning": "ស្រី (female)",
    "example": "她是我的女朋友。",
    "example_pinyin": "tā shì wǒ de nǚ péng yǒu.",
    "example_kh": "នាងគឺជាមិត្តស្រីរបស់ខ្ញុំ។"
  },
  {
    "word": "旁边",
    "pinyin": "páng biān",
    "meaning": "ក្បែរតែ / ជាប់ (beside / next to)",
    "example": "我的书包在旁边。",
    "example_pinyin": "wǒ de shū bāo zài páng biān.",
    "example_kh": "កាបូបសៀវភៅរបស់ខ្ញុំស្ថិតនៅក្បែរតែ។"
  },
  {
    "word": "苹果",
    "pinyin": "píng guǒ",
    "meaning": "ផ្លែប៉ោម (apple)",
    "example": "我喜欢吃苹果。",
    "example_pinyin": "wǒ xǐ huān chī píng guǒ.",
    "example_kh": "ខ្ញុំចូលចិត្តបរិច្ឆេទប៉ោម។"
  },
  {
    "word": "票",
    "pinyin": "piào",
    "meaning": "កុំពីលក់ (ticket)",
    "example": "你买票了吗？",
    "example_pinyin": "nǐ mǎi piào le ma?",
    "example_kh": "អ្នកបានទិញកុំពីលក់រួចហើយទេ?"
  },
  {
    "word": "前面",
    "pinyin": "qián miàn",
    "meaning": "មុខ (front)",
    "example": "前面有一家餐厅。",
    "example_pinyin": "qián miàn yǒu yī jiā cān tīng.",
    "example_kh": "មានភោជនីយដ្ឋានមួយនៅមុខ។"
  },
  {
    "word": "去",
    "pinyin": "qù",
    "meaning": "ទៅ (to go)",
    "example": "我要去商店买东西。",
    "example_pinyin": "wǒ yào qù shāng diàn mǎi dōng xī.",
    "example_kh": "ខ្ញុំត្រូវការទៅផ្សារដើម្បីទិញទំនិញ។"
  },
  {
    "word": "热",
    "pinyin": "rè",
    "meaning": "ក្តៅ (hot)",
    "example": "今天很热。",
    "example_pinyin": "jīn tiān hěn rè.",
    "example_kh": "ថ្ងៃនេះក្តៅណាស់។"
  },
  {
    "word": "人",
    "pinyin": "rén",
    "meaning": "មនុស្ស (person)",
    "example": "我认识很多人。",
    "example_pinyin": "wǒ rèn shi hěn duō rén.",
    "example_kh": "ខ្ញុំស្គាល់មនុស្សជាច្រើន។"
  },
  {
    "word": "日",
    "pinyin": "rì",
    "meaning": "ថ្ងៃ (day)",
    "example": "今天是星期五。",
    "example_pinyin": "jīn tiān shì xīng qī wǔ.",
    "example_kh": "ថ្ងៃនេះគឺថ្ងៃសុក្រ។"
  },
  {
    "word": "只有…才…",
    "pinyin": "zhǐ yǒu …cái …",
    "khmer": "មានតែ ...才 ...",
    "example": {
      "chinese": "只有努力，才会成功。",
      "pinyin": "zhǐ yǒu nǔ lì, cái huì chéng gōng.",
      "khmer": "មានតែការខិតខំប្រឹងប្រែង才ទទួលបានជោគជ័យ។"
    }
  },
  {
    "word": "中间",
    "pinyin": "zhōng jiān",
    "khmer": "កម្រិតមធ្យម",
    "example": {
      "chinese": "这两个人站在中间。",
      "pinyin": "zhè liǎng gè rén zhàn zài zhōng jiān.",
      "khmer": "មនុស្សពីរនាក់នេះឈរនៅកម្រិតមធ្យម។"
    }
  },
  {
    "word": "中文",
    "pinyin": "zhōng wén",
    "khmer": "ជនជាតិចិន",
    "example": {
      "chinese": "我会说中文。",
      "pinyin": "wǒ huì shuō zhōng wén.",
      "khmer": "ខ្ញុំអាចនិយាយភាសាចិនបាន។"
    }
  },
  {
    "word": "终于",
    "pinyin": "zhōng yú",
    "khmer": "នៅចុងក្រោយ",
    "example": {
      "chinese": "他终于到了。",
      "pinyin": "tā zhōng yú dào le.",
      "khmer": "គាត់បានមកដល់នៅចុងក្រោយ។"
    }
  },
  {
    "word": "种",
    "pinyin": "zhǒng",
    "khmer": "ប្រភេទសត្វ (បរិមាណ)",
    "example": {
      "chinese": "这里有很多种花。",
      "pinyin": "zhè lǐ yǒu hěn duō zhǒng huā.",
      "khmer": "ទីនេះមានផ្កាជាច្រើនប្រភេទ។"
    }
  },
  {
    "word": "重要",
    "pinyin": "zhòng yào",
    "khmer": "សំខាន់",
    "example": {
      "chinese": "安全是最重要的。",
      "pinyin": "ān quán shì zuì zhòng yào de.",
      "khmer": "សុវត្ថិភាពគឺជាអ្វីដែលសំខាន់បំផុត។"
    }
  },
  {
    "word": "周末",
    "pinyin": "zhōu mò",
    "khmer": "ចុងសប្តាហ៍",
    "example": {
      "chinese": "周末你有什么计划吗？",
      "pinyin": "zhōu mò nǐ yǒu shén me jì huà ma?",
      "khmer": "អ្នកមានផែនការអ្វីសម្រាប់ចុងសប្តាហ៍ទេ?"
    }
  },
  {
    "word": "主要",
    "pinyin": "zhǔ yào",
    "khmer": "មេ",
    "example": {
      "chinese": "这是我主要的工作。",
      "pinyin": "zhè shì wǒ zhǔ yào de gōng zuò.",
      "khmer": "នេះគឺជាការងារមេរបស់ខ្ញុំ។"
    }
  },
  {
    "word": "注意",
    "pinyin": "zhù yì",
    "khmer": "ចំណាំ",
    "example": {
      "chinese": "请注意安全。",
      "pinyin": "qǐng zhù yì ān quán.",
      "khmer": "សូមចំណាំសុវត្ថិភាព។"
    }
  },
  {
    "word": "自己",
    "pinyin": "zì jǐ",
    "khmer": "ខ្លួនឯង",
    "example": {
      "chinese": "我照顾自己。",
      "pinyin": "wǒ zhào gù zì jǐ.",
      "khmer": "ខ្ញុំថែរក្សាខ្លួនឯង។"
    }
  },
  {
    "word": "自行车",
    "pinyin": "zì xíng chē",
    "khmer": "កង់",
    "example": {
      "chinese": "我骑自行车去工作。",
      "pinyin": "wǒ qí zì xíng chē qù gōng zuò.",
      "khmer": "ខ្ញុំជិះកង់ទៅការិយាល័យ។"
    }
  },
  {
    "word": "总是",
    "pinyin": "zǒng shì",
    "khmer": "ជានិច្ច",
    "example": {
      "chinese": "她总是很忙。",
      "pinyin": "tā zǒng shì hěn máng.",
      "khmer": "នាងជានិច្ចមានការងារលំបាក។"
    }
  },
  {
    "word": "嘴",
    "pinyin": "zuǐ",
    "khmer": "មាត់",
    "example": {
      "chinese": "他张开了嘴。",
      "pinyin": "tā zhāng kāi le zuǐ.",
      "khmer": "គាត់ពន្លត់មាត់របស់គាត់។"
    }
  },
  {
    "word": "最后",
    "pinyin": "zuì hòu",
    "khmer": "ចុងក្រោយ",
    "example": {
      "chinese": "最后我们完成了任务。",
      "pinyin": "zuì hòu wǒ men wán chéng le rèn wu.",
      "khmer": "ចុងក្រោយយើងបានបញ្ចប់ភារកិច្ច។"
    }
  },
  {
    "word": "最近",
    "pinyin": "zuì jìn",
    "khmer": "ថ្មីៗនេះ",
    "example": {
      "chinese": "最近我很忙。",
      "pinyin": "zuì jìn wǒ hěn máng.",
      "khmer": "ថ្មីៗនេះខ្ញុំមានការងារលំបាក។"
    }
  },
  {
    "word": "作业",
    "pinyin": "zuò yè",
    "khmer": "ការងារ",
    "example": {
      "chinese": "我有很多作业。",
      "pinyin": "wǒ yǒu hěn duō zuò yè.",
      "khmer": "ខ្ញុំមានការងារជាច្រើន។"
    }
  }
],
4:[
  {
    "word": "爱情",
    "pinyin": "ài qíng",
    "meaning": "ស្រឡាញ់",
    "example": "他们的爱情非常美好。",
    "example_pinyin": "tā men de ài qíng fēi cháng měi hǎo.",
    "example_kh": "សេចក្តីស្រឡាញ់របស់ពួកគេគឺស្រស់ស្អាតណាស់។"
  },
  {
    "word": "安排",
    "pinyin": "ān pái",
    "meaning": "ការរៀបចំ",
    "example": "他已经安排好了所有的事情。",
    "example_pinyin": "tā yǐ jīng ān pái hǎo le suǒ yǒu de shì qing.",
    "example_kh": "គាត់បានរៀបចំអ្វីៗទាំងអស់រួចហើយ។"
  },
  {
    "word": "安全",
    "pinyin": "ān quán",
    "meaning": "សុវត្ថិភាព",
    "example": "请确保安全。",
    "example_pinyin": "qǐng què bǎo ān quán.",
    "example_kh": "សូមប្រាកដថាអ្នកមានសុវត្ថិភាព។"
  },
  {
    "word": "按时",
    "pinyin": "àn shí",
    "meaning": "ទាន់​ពេលវេលា",
    "example": "我们必须按时到达。",
    "example_pinyin": "wǒ men bì xū àn shí dào dá.",
    "example_kh": "យើងត្រូវតែទៅដល់ទាន់ពេលវេលា។"
  },
  {
    "word": "按照",
    "pinyin": "àn zhào",
    "meaning": "យោង​ទៅ​តាម",
    "example": "按照他的建议，我们改进了计划。",
    "example_pinyin": "àn zhào tā de jiàn yì, wǒ men gǎi jìn le jì huà.",
    "example_kh": "យោងតាមការណែនាំរបស់គាត់ យើងបានប្រសើរឡើងផែនការជួសជុល។"
  },
  {
    "word": "百分之",
    "pinyin": "bǎi fēn zhī",
    "meaning": "ភាគរយ",
    "example": "这次比赛的胜率是百分之七十。",
    "example_pinyin": "zhè cì bǐ sài de shèng lǜ shì bǎi fēn zhī qī shí.",
    "example_kh": "អត្រាជ័យឈ្នះក្នុងការប្រកួតដ lầnនេះគឺ ៧០ ភាគរយ។"
  },
  {
    "word": "棒",
    "pinyin": "bàng",
    "meaning": "បាតុន",
    "example": "你做得真棒！",
    "example_pinyin": "nǐ zuò de zhēn bàng!",
    "example_kh": "អ្នកបានធ្វើឱ្យពិតជាស្អាតណាស់!"
  },
  {
    "word": "包子",
    "pinyin": "bāo zi",
    "meaning": "ប៊ុន",
    "example": "我想吃一个包子。",
    "example_pinyin": "wǒ xiǎng chī yī gè bāo zi.",
    "example_kh": "ខ្ញុំចង់ញ៉ាំប៊ុនមួយ។"
  },
  {
    "word": "保护",
    "pinyin": "bǎo hù",
    "meaning": "ការការពារ",
    "example": "我们应该保护环境。",
    "example_pinyin": "wǒ men yīng gāi bǎo hù huán jìng.",
    "example_kh": "យើងគួរតែការពារបរិស្ថាន។"
  },
  {
    "word": "保证",
    "pinyin": "bǎo zhèng",
    "meaning": "ធានា",
    "example": "我可以保证他会按时到达。",
    "example_pinyin": "wǒ kě yǐ bǎo zhèng tā huì àn shí dào dá.",
    "example_kh": "ខ្ញុំអាចធានាថាគាត់នឹងទៅដល់ទាន់ពេលវេលា។"
  },
  {
    "word": "报名",
    "pinyin": "bào míng",
    "meaning": "ចុះ​ឈ្មោះ",
    "example": "你已经报名参加了比赛吗？",
    "example_pinyin": "nǐ yǐ jīng bào míng cān jiā le bǐ sài ma?",
    "example_kh": "អ្នកបានចុះឈ្មោះចូលរួមប្រកួតហើយទេ?"
  },
  {
    "word": "抱",
    "pinyin": "bào",
    "meaning": "សង្កត់",
    "example": "她抱起了孩子。",
    "example_pinyin": "tā bào qǐ le hái zi.",
    "example_kh": "គាត់បានសង្កត់កូនក្មេងឡើង។"
  },
  {
    "word": "抱歉",
    "pinyin": "bào qiàn",
    "meaning": "សុំទោស",
    "example": "抱歉，我迟到了。",
    "example_pinyin": "bào qiàn, wǒ chí dào le.",
    "example_kh": "សុំទោស ខ្ញុំបានមកយឺត។"
  },
  {
    "word": "倍",
    "pinyin": "bèi",
    "meaning": "ដង",
    "example": "这个产品的价格是原来的两倍。",
    "example_pinyin": "zhè ge chǎn pǐn de jià gé shì yuán lái de liǎng bèi.",
    "example_kh": "តម្លៃផលិតផលនេះគឺដងពីររបស់តម្លៃដើម។"
  },
  {
    "word": "本来",
    "pinyin": "běn lái",
    "meaning": "ដើមឡើយ",
    "example": "我本来打算去旅游。",
    "example_pinyin": "wǒ běn lái dǎ suàn qù lǚ yóu.",
    "example_kh": "ខ្ញុំបានគ្រប់គ្រាន់រៀបចំទៅធ្វើដំណើរ។"
  },
  {
    "word": "笨",
    "pinyin": "bèn",
    "meaning": "ឆោតល្ងង់",
    "example": "他真笨，怎么会忘记带钥匙。",
    "example_pinyin": "tā zhēn bèn, zěn me huì wàng jì dài yào shi.",
    "example_kh": "គាត់ពិតជា​ឆោតល្ងង់ សោះ ហេតុអ្វីបានហើយខកខានយកចុងកូនកូនខ្លួន។"
  },
  {
    "word": "比如",
    "pinyin": "bǐ rú",
    "meaning": "ដូចជា",
    "example": "例如，我们去游泳。",
    "example_pinyin": "lì rú, wǒ men qù yóu yǒng.",
    "example_kh": "ដូចជា, យើងទៅវាលហែលទឹក។"
  },
  {
    "word": "毕业",
    "pinyin": "bì yè",
    "meaning": "បញ្ចប់ការសិក្សា",
    "example": "他去年毕业了。",
    "example_pinyin": "tā qù nián bì yè le.",
    "example_kh": "គាត់បានបញ្ចប់ការសិក្សាឆ្នាំមុន។"
  },
  {
    "word": "遍",
    "pinyin": "biàn",
    "meaning": "ពាសពេញ",
    "example": "这本书我已经看遍了。",
    "example_pinyin": "zhè běn shū wǒ yǐ jīng kàn biàn le.",
    "example_kh": "សៀវភៅនេះខ្ញុំបានអានពេញហើយ។"
  },
  {
    "word": "标准",
    "pinyin": "biāo zhǔn",
    "meaning": "ស្តង់ដារ",
    "example": "这家公司有严格的标准。",
    "example_pinyin": "zhè jiā gōng sī yǒu yán gé de biāo zhǔn.",
    "example_kh": "ក្រុមហ៊ុននេះមានស្តង់ដារដ៏តឹងរ៉ឹង។"
  },
  {
    "word": "表格",
    "pinyin": "biǎo gé",
    "meaning": "សំណុំបែបបទ",
    "example": "请填写这张表格。",
    "example_pinyin": "qǐng tián xiě zhè zhāng biǎo gé.",
    "example_kh": "សូមបញ្ចូលព័ត៌មានក្នុងសំណុំបែបបទនេះ។"
  },
  {
    "word": "表示",
    "pinyin": "biǎo shì",
    "meaning": "មធ្យោបាយ",
    "example": "她用微笑表示感谢。",
    "example_pinyin": "tā yòng wēi xiào biǎo shì gǎn xiè.",
    "example_kh": "គាត់បានប្រើព្រិលស្មានដើម្បីបង្ហាញពីការអរគុណ។"
  },
  {
    "word": "表演",
    "pinyin": "biǎo yǎn",
    "meaning": "ការសម្តែង",
    "example": "他的表演非常精彩。",
    "example_pinyin": "tā de biǎo yǎn fēi cháng jīng cǎi.",
    "example_kh": "ការសម្តែងរបស់គាត់ពិតជានៅក្នុងភាពល្អឥតខ្ចោះ។"
  },
  {
    "word": "表扬",
    "pinyin": "biǎo yáng",
    "meaning": "សរសើរ",
    "example": "老师表扬了她的努力。",
    "example_pinyin": "lǎo shī biǎo yáng le tā de nǔ lì.",
    "example_kh": "គ្រូបង្ហាញសរសើរនៅលើការខិតខំរបស់គាត់។"
  },
  {
    "word": "饼干",
    "pinyin": "bǐng gān",
    "meaning": "នំប័រ",
    "example": "我喜欢吃巧克力饼干。",
    "example_pinyin": "wǒ xǐ huān chī qiǎo kè lì bǐng gān.",
    "example_kh": "ខ្ញុំចូលចិត្តញ៉ាំនំប័រឈុកកូឡា។"
  },
  {
    "word": "并且",
    "pinyin": "bìng qiě",
    "meaning": "និង",
    "example": "他不但聪明，并且很勤奋。",
    "example_pinyin": "tā bù dàn cōng míng, bìng qiě hěn qín fèn.",
    "example_kh": "គាត់មិនត្រឹមតែប្រាកដទេហើយពេញចិត្តនិងអุตសហគមន៍។"
  },
  {
    "word": "博士",
    "pinyin": "bó shì",
    "meaning": "បណ្ឌិត",
    "example": "他是医学博士。",
    "example_pinyin": "tā shì yī xué bó shì.",
    "example_kh": "គាត់ជាបណ្ឌិតវេជ្ជសាស្ត្រ។"
  },
  {
    "word": "不过",
    "pinyin": "bú guò",
    "meaning": "ប៉ុន្តែ",
    "example": "我很喜欢他，不过他很忙。",
    "example_pinyin": "wǒ hěn xǐ huān tā, bú guò tā hěn máng.",
    "example_kh": "ខ្ញុំចូលចិត្តគាត់ ប៉ុន្តែគាត់ពុំមានពេលទេ។"
  },
  {
    "word": "不得不",
    "pinyin": "bù dé bù",
    "meaning": "ត្រូវតែ",
    "example": "我不得不承认他的能力。",
    "example_pinyin": "wǒ bù dé bù chéng rèn tā de néng lì.",
    "example_kh": "ខ្ញុំត្រូវតែទទួលស្គាល់សមត្ថភាពរបស់គាត់។"
  },
  {
    "word": "不管",
    "pinyin": "bù guǎn",
    "meaning": "ដោយ​មិន​គិត​ពី",
    "example": "不管天气如何，我们都会去。",
    "example_pinyin": "bù guǎn tiān qì rú hé, wǒ men dū huì qù.",
    "example_kh": "ដោយ​មិន​គិត​ពី​អាកាសធាតុ​យើង​នឹង​ទៅដល់។"
  },
  {
    "word": "不仅",
    "pinyin": "bù jǐn",
    "meaning": "មិន​ត្រឹម​តែ",
    "example": "她不仅聪明，而且非常努力。",
    "example_pinyin": "tā bù jǐn cōng míng, ér qiě fēi cháng nǔ lì.",
    "example_kh": "គាត់មិនត្រឹមតែប្រាកដទេហើយក៏មានភាពអุตសហគមន៍ផងដែរ។"
  },
  {
    "word": "部分",
    "pinyin": "bù fen",
    "meaning": "ផ្នែក",
    "example": "这只是问题的一部分。",
    "example_pinyin": "zhè zhī shì wèn tí de yī bù fen.",
    "example_kh": "នេះគ្រាន់តែជាផ្នែកមួយនៃសំណួរ។"
  },
  {
    "word": "擦",
    "pinyin": "cā",
    "meaning": "ជូត",
    "example": "我需要擦桌子。",
    "example_pinyin": "wǒ xū yào cā zhuō zi.",
    "example_kh": "ខ្ញុំត្រូវការជូតតុ។"
  },
  {
    "word": "猜",
    "pinyin": "cāi",
    "meaning": "ទាយ",
    "example": "你猜我买了什么？",
    "example_pinyin": "nǐ cāi wǒ mǎi le shén me?",
    "example_kh": "តើអ្នកទាយថាខ្ញុំបានទិញអ្វី?"
  },
  {
    "word": "材料",
    "pinyin": "cái liào",
    "meaning": "សម្ភារៈ",
    "example": "这些材料非常重要。",
    "example_pinyin": "zhè xiē cái liào fēi cháng zhòng yào.",
    "example_kh": "សម្ភារៈទាំងនេះសំខាន់ខ្លាំង។"
  },
  {
    "word": "参观",
    "pinyin": "cān guān",
    "meaning": "ទស្សនា",
    "example": "我们参观了博物馆。",
    "example_pinyin": "wǒ men cān guān le bó wù guǎn.",
    "example_kh": "យើងបានទស្សនាគ្លីនិកវិទ្យាសាស្ត្រ។"
  },
  {
    "word": "餐厅",
    "pinyin": "cān tīng",
    "meaning": "ភោជនីយដ្ឋាន",
    "example": "这家餐厅的饭很好吃。",
    "example_pinyin": "zhè jiā cān tīng de fàn hěn hǎo chī.",
    "example_kh": "ភោជនីយដ្ឋាននេះមានម្ហូបអាលម៍ល្អ។"
  },
  {
    "word": "厕所",
    "pinyin": "cè suǒ",
    "meaning": "បន្ទប់ទឹក",
    "example": "厕所在左边。",
    "example_pinyin": "cè suǒ zài zuǒ biān.",
    "example_kh": "បន្ទប់ទឹកស្ថិតនៅខាងឆ្វេង។"
  },
  {
    "word": "差不多",
    "pinyin": "chà bu duō",
    "meaning": "ស្ទើរតែ",
    "example": "我们的意见差不多。",
    "example_pinyin": "wǒ men de yì jiàn chà bù duō.",
    "example_kh": "មតិយោបល់របស់យើងស្ទើរតែដូចគ្នា។"
  },
  {
    "word": "尝",
    "pinyin": "cháng",
    "meaning": "ភ្លក្សរសជាតិ",
    "example": "我想尝尝这道菜。",
    "example_pinyin": "wǒ xiǎng cháng cháng zhè dào cài.",
    "example_kh": "ខ្ញុំចង់ភ្លក្សរសជាតិនេះ។"
  },
  {
    "word": "长城",
    "pinyin": "cháng chéng",
    "meaning": "មហា​កំផែង",
    "example": "我们去了长城。",
    "example_pinyin": "wǒ men qù le cháng chéng.",
    "example_kh": "យើងបានទៅកំពង់មហាឃុំ។"
  },
  {
    "word": "长江",
    "pinyin": "cháng jiāng",
    "meaning": "យ៉ាង",
    "example": "长江是中国的最大河流。",
    "example_pinyin": "cháng jiāng shì zhōng guó de zuì dà hé liú.",
    "example_kh": "ទន្លេប្រហែលជាទន្លេធំបំផុតនៅប្រទេសចិន។"
  },
  {
    "word": "场",
    "pinyin": "chǎng",
    "meaning": "វាល",
    "example": "这场比赛很激烈。",
    "example_pinyin": "zhè chǎng bǐ sài hěn jī liè.",
    "example_kh": "ការប្រកួតនេះមានភាពកំទេចហើយ។"
  },
  {
    "word": "超过",
    "pinyin": "chāo guò",
    "meaning": "លើស",
    "example": "他的成绩超过了所有人。",
    "example_pinyin": "tā de chéng jì chāo guò le suǒ yǒu rén.",
    "example_kh": "គាត់មានចំណាត់ថ្នាក់លើសគ្រប់គ្នា។"
  },
  {
    "word": "乘坐",
    "pinyin": "chéng zuò",
    "meaning": "ជិះ",
    "example": "我们乘坐了地铁。",
    "example_pinyin": "wǒ men chéng zuò le dì tiě.",
    "example_kh": "យើងបានជិះរថភ្លើង។"
  },
  {
    "word": "成功",
    "pinyin": "chéng gōng",
    "meaning": "ជោគជ័យ",
    "example": "他的努力终于得到了成功。",
    "example_pinyin": "tā de nǔ lì zhōng yú dé dào le chéng gōng.",
    "example_kh": "ការខិតខំរបស់គាត់បានចូលរួមជោគជ័យ។"
  },
  {
    "word": "成为",
    "pinyin": "chéng wéi",
    "meaning": "ក្លាយជា",
    "example": "他想成为一名医生。",
    "example_pinyin": "tā xiǎng chéng wéi yī míng yī shēng.",
    "example_kh": "គាត់ចង់ក្លាយជា ហ៊ុនបេកនគាត់ក៏ធ្វើការជា បន្ទាប់។"
  },
  {
    "word": "诚实",
    "pinyin": "chéng shí",
    "meaning": "ស្មោះត្រង់",
    "example": "诚实是很重要的品质。",
    "example_pinyin": "chéng shí shì hěn zhòng yào de pǐn zhì.",
    "example_kh": "ការស្មោះត្រង់គឺជាគុណភាពសំខាន់។"
  },
  {
    "word": "吃惊",
    "pinyin": "chī jīng",
    "meaning": "ភ្ញាក់ផ្អើល",
    "example": "他的消息让我很吃惊。",
    "example_pinyin": "tā de xiāo xī ràng wǒ hěn chī jīng.",
    "example_kh": "ព័ត៌មានរបស់គាត់បានធ្វើអោយខ្ញុំភ្ញាក់ផ្អើល។"
  },
  {
    "word": "重新",
    "pinyin": "chóng xīn",
    "meaning": "ឡើងវិញ",
    "example": "我们重新开始工作。",
    "example_pinyin": "wǒ men chóngxīn kāi shǐ gōng zuò.",
    "example_kh": "យើងចាប់ផ្តើមបុគ្គលិករហូតទៅ។"
  },
  {
    "word": "抽烟",
    "pinyin": "chōu yān",
    "meaning": "ជក់បារី",
    "example": "他每天抽烟。",
    "example_pinyin": "tā měi tiān chōu yān.",
    "example_kh": "គាត់ជក់បារីរៀងរាល់ថ្ងៃ។"
  },
  {
    "word": "出差",
    "pinyin": "chū chāi",
    "meaning": "ដំណើរអាជីវកម្ម",
    "example": "他下周去出差。",
    "example_pinyin": "tā xià zhōu qù chū chāi.",
    "example_kh": "គាត់ទៅដំណើរអាជីវកម្មសប្តាហ៍ក្រោយ។"
  },
  {
    "word": "出发",
    "pinyin": "chū fā",
    "meaning": "ចាប់ផ្ដើម",
    "example": "我们早上八点出发。",
    "example_pinyin": "wǒ men zǎo shàng bā diǎn chū fā.",
    "example_kh": "យើងចាប់ផ្ដើមនៅម៉ោង៨ ព្រឹក។"
  },
  {
    "word": "出生",
    "pinyin": "chū shēng",
    "meaning": "កើត",
    "example": "她出生在北京。",
    "example_pinyin": "tā chū shēng zài běi jīng.",
    "example_kh": "គាត់កើតនៅទីក្រុងប៉េគីង។"
  },
  {
    "word": "出现",
    "pinyin": "chū xiàn",
    "meaning": "លេចឡើង",
    "example": "问题出现了。",
    "example_pinyin": "wèn tí chū xiàn le.",
    "example_kh": "មានបញ្ហាឡើងវិញ។"
  },
  {
    "word": "厨房",
    "pinyin": "chú fáng",
    "meaning": "ផ្ទះបាយ",
    "example": "我在厨房做饭。",
    "example_pinyin": "wǒ zài chú fáng zuò fàn.",
    "example_kh": "ខ្ញុំធ្វើម្ហូបនៅផ្ទះបាយ។"
  },
  {
    "word": "传真",
    "pinyin": "chuán zhēn",
    "meaning": "ទូរសារ",
    "example": "请发传真。",
    "example_pinyin": "qǐng fā chuán zhēn.",
    "example_kh": "សូមផ្ញើទូរសារ។"
  },
  {
    "word": "窗户",
    "pinyin": "chuāng hu",
    "meaning": "បង្អួច",
    "example": "窗户打开了。",
    "example_pinyin": "chuāng hu dǎ kāi le.",
    "example_kh": "បង្អួចបានបើក។"
  },
  {
    "word": "词语",
    "pinyin": "cí yǔ",
    "meaning": "ពាក្យ",
    "example": "这个词语很难理解。",
    "example_pinyin": "zhè ge cí yǔ hěn nán lǐ jiě.",
    "example_kh": "ពាក្យនេះពិបាកយល់។"
  },
  {
    "word": "从来",
    "pinyin": "cóng lái",
    "meaning": "ធ្លាប់",
    "example": "我从来不吃辣。",
    "example_pinyin": "wǒ cóng lái bù chī là.",
    "example_kh": "ខ្ញុំធ្លាប់មិនបរិភោគអាហារខ្លី។"
  },
  {
    "word": "粗心",
    "pinyin": "cū xīn",
    "meaning": "ធ្វេសប្រហែស",
    "example": "他做事很粗心。",
    "example_pinyin": "tā zuò shì hěn cū xīn.",
    "example_kh": "គាត់ធ្វើការតាមការត្រឹមត្រូវមិនច្បាស់។"
  },
  {
    "word": "存",
    "pinyin": "cún",
    "meaning": "រក្សាទុក",
    "example": "请把这些文件存到电脑里。",
    "example_pinyin": "qǐng bǎ zhè xiē wén jiàn cún dào diàn nǎo lǐ.",
    "example_kh": "សូមរក្សាទុកឯកសារទាំងនេះទៅកុំព្យូទ័រ។"
  },
  {
    "word": "错误",
    "pinyin": "cuò wù",
    "meaning": "កំហុស",
    "example": "你犯了一个错误。",
    "example_pinyin": "nǐ fàn le yí ge cuò wù.",
    "example_kh": "អ្នកបានធ្វើកំហុសមួយ។"
  },
  {
    "word": "答案",
    "pinyin": "dá àn",
    "meaning": "ចម្លើយ",
    "example": "我知道这个问题的答案。",
    "example_pinyin": "wǒ zhī dào zhè ge wèn tí de dá àn.",
    "example_kh": "ខ្ញុំដឹងចម្លើយសំណួរនេះ។"
  },
  {
    "word": "打扮",
    "pinyin": "dǎ ban",
    "meaning": "ស្លៀក​ពាក់​ឡើង",
    "example": "她打扮得很漂亮。",
    "example_pinyin": "tā dǎ ban de hěn piāo liàng.",
    "example_kh": "នាងស្លៀកពាក់យ៉ាងស្រស់ស្អាត។"
  },
  {
    "word": "打扰",
    "pinyin": "dǎ rǎo",
    "meaning": "រំខាន",
    "example": "抱歉打扰您。",
    "example_pinyin": "bào qiàn dǎ rǎo nín.",
    "example_kh": "សូមទោសដែលរំខានអ្នក។"
  },
  {
    "word": "打印",
    "pinyin": "dǎ yìn",
    "meaning": "បោះពុម្ព",
    "example": "请打印这份文件。",
    "example_pinyin": "qǐng dǎ yìn zhè fèn wén jiàn.",
    "example_kh": "សូមបោះពុម្ពឯកសារនេះ។"
  },
  {
    "word": "打招呼",
    "pinyin": "dǎ zhāo hu",
    "meaning": "ស្វាគមន៍",
    "example": "我们见面时要打招呼。",
    "example_pinyin": "wǒ men jiàn miàn shí yào dǎ zhāo hu.",
    "example_kh": "ពេលដែលយើងជួបគ្នា, គួរតែស្វាគមន៍គ្នា។"
  },
  {
    "word": "打折",
    "pinyin": "dǎ zhé",
    "meaning": "ការបញ្ចុះតម្លៃ",
    "example": "这个商品正在打折。",
    "example_pinyin": "zhè ge shāng pǐn zhèng zài dǎ zhé.",
    "example_kh": "ផលិតផលនេះកំពុងមានការបញ្ចុះតម្លៃ។"
  },
  {
    "word": "打针",
    "pinyin": "dǎ zhēn",
    "meaning": "ចាក់",
    "example": "我害怕打针。",
    "example_pinyin": "wǒ hài pà dǎ zhēn.",
    "example_kh": "ខ្ញុំភ័យចាក់។"
  },
  {
    "word": "大概",
    "pinyin": "dà gài",
    "meaning": "ប្រហែលជា",
    "example": "大概晚上七点见。",
    "example_pinyin": "dà gài wǎn shàng qī diǎn jiàn.",
    "example_kh": "ប្រហែលជា, ជួបគ្នាម៉ោង ៧ ព្រឹក។"
  },
  {
    "word": "大使馆",
    "pinyin": "dà shǐ guǎn",
    "meaning": "ស្ថានទូត",
    "example": "我去大使馆办签证。",
    "example_pinyin": "wǒ qù dà shǐ guǎn bàn qiān zhèng.",
    "example_kh": "ខ្ញុំទៅស្ថានទូតដើម្បីធ្វើបណ្ណស័ក្ស។"
  },
  {
    "word": "大约",
    "pinyin": "dà yuē",
    "meaning": "អំពី",
    "example": "大约一个小时后到达。",
    "example_pinyin": "dà yuē yí ge xiǎo shí hòu dào dá.",
    "example_kh": "ប្រហែលមួយម៉ោងបន្ទាប់ពីការទៅដល់។"
  },
  {
    "word": "大夫",
    "pinyin": "dài fu",
    "meaning": "វេជ្ជបណ្ឌិត",
    "example": "他是一个非常好的大夫。",
    "example_pinyin": "tā shì yí ge fēi cháng hǎo de dài fu.",
    "example_kh": "គាត់ជាវេជ្ជបណ្ឌិតដ៏ល្អ។"
  },
  {
    "word": "戴",
    "pinyin": "dài",
    "meaning": "ពាក់",
    "example": "她戴了一副眼镜。",
    "example_pinyin": "tā dài le yí fù yǎn jìng.",
    "example_kh": "នាងពាក់កញ្ចក់ភ្នែកមួយ។"
  },
  {
    "word": "当",
    "pinyin": "dāng",
    "meaning": "ពេលណា​",
    "example": "当时我在家。",
    "example_pinyin": "dāng shí wǒ zài jiā.",
    "example_kh": "ពេលនោះខ្ញុំនៅផ្ទះ។"
  },
  {
    "word": "当时",
    "pinyin": "dāng shí",
    "meaning": "បន្ទាប់មក",
    "example": "当时我们没有钱。",
    "example_pinyin": "dāng shí wǒ men méi yǒu qián.",
    "example_kh": "បន្ទាប់ពីនេះយើងគ្មានប្រាក់។"
  },
  {
    "word": "刀",
    "pinyin": "dāo",
    "meaning": "កាំបិត",
    "example": "这个刀非常锋利。",
    "example_pinyin": "zhè ge dāo fēi cháng fēng lì.",
    "example_kh": "កាំបិតនេះមានកាំភ្លើងក្តៅ។"
  },
  {
    "word": "导游",
    "pinyin": "dǎo yóu",
    "meaning": "មគ្គុទេសក៍",
    "example": "她是一位优秀的导游。",
    "example_pinyin": "tā shì yí wèi yōu xiù de dǎo yóu.",
    "example_kh": "នាងជាគ្រូបង្គោលដ៏ល្អ។"
  },
  {
    "word": "倒",
    "pinyin": "dào",
    "meaning": "ដាក់បញ្ច្រាស",
    "example": "他把水倒进杯子里。",
    "example_pinyin": "tā bǎ shuǐ dào jìn bēi zi lǐ.",
    "example_kh": "គាត់ដាក់ទឹកចូលក្នុងពែង។"
  },
  {
    "word": "到处",
    "pinyin": "dào chù",
    "meaning": "នៅគ្រប់ទីកន្លែង",
    "example": "到处都是花。",
    "example_pinyin": "dào chù dōu shì huā.",
    "example_kh": "នៅគ្រប់ទីកន្លែងគ្រប់មូលដ្ឋានដូចមួយ។"
  },
  {
    "word": "到底",
    "pinyin": "dào dǐ",
    "meaning": "នៅចុងបញ្ចប់",
    "example": "你到底是什么意思？",
    "example_pinyin": "nǐ dào dǐ shì shén me yì si?",
    "example_kh": "អ្នកកំពុងនិយាយអ្វីមួយនៅចុងបញ្ចប់?"
    },
    {
    "word": "道歉",
    "pinyin": "dào qiàn",
    "meaning": "សុំទោស",
    "example": "我向你道歉。",
    "example_pinyin": "wǒ xiàng nǐ dào qiàn.",
    "example_kh": "ខ្ញុំសុំទោសអ្នក។"
    },
    {
    "word": "得",
    "pinyin": "dé",
    "meaning": "ទទួលបាន",
    "example": "我得到了第一名。",
    "example_pinyin": "wǒ dé dào le dì yī míng.",
    "example_kh": "ខ្ញុំទទួលបានលេខមួយ។"
    },
    {
    "word": "得意",
    "pinyin": "dé yì",
    "meaning": "មានមោទនភាព",
    "example": "他得意地笑了。",
    "example_pinyin": "tā dé yì de xiào le.",
    "example_kh": "គាត់ហេងមុខពោលមោទនភាព។"
    },
    {
      "word": "登机牌",
      "pinyin": "dēng jī pái",
      "meaning": "ប័ណ្ណឡើងជិះ",
      "example": "请出示你的登机牌。",
      "example_pinyin": "qǐng chū shì nǐ de dēng jī pái.",
      "example_kh": "សូមបង្ហាញប័ណ្ណឡើងជិះរបស់អ្នក។"
    },
    {
      "word": "等",
      "pinyin": "děng",
      "meaning": "រងចាំ",
      "example": "等一下，我马上来。",
      "example_pinyin": "děng yí xià, wǒ mǎ shàng lái.",
      "example_kh": "រង់ចាំមួយភ្លែត, ខ្ញុំនឹងមកឆាប់។"
    },
    {
      "word": "低",
      "pinyin": "dī",
      "meaning": "ទាប",
      "example": "这个价格太低了。",
      "example_pinyin": "zhè ge jià gé tài dī le.",
      "example_kh": "តម្លៃនេះទាបពេក។"
    },
    {
      "word": "底",
      "pinyin": "dǐ",
      "meaning": "បាត",
      "example": "这本书的底部有一个标签。",
      "example_pinyin": "zhè běn shū de dǐ bù yǒu yí ge biāo qiān.",
      "example_kh": "បំពង់ខាងក្រោមនៃសៀវភៅនេះមានស្លាក។"
    },
    {
      "word": "地点",
      "pinyin": "dì diǎn",
      "meaning": "ទីតាំង",
      "example": "这次会议的地点是酒店。",
      "example_pinyin": "zhè cì huì yì de dì diǎn shì jiǔ diàn.",
      "example_kh": "ទីតាំងប្រជុំនេះគឺនៅសណ្ឋាគារ។"
    },
    {
      "word": "地球",
      "pinyin": "dì qiú",
      "meaning": "ផែនដី",
      "example": "地球上有很多国家。",
      "example_pinyin": "dì qiú shàng yǒu hěn duō guó jiā.",
      "example_kh": "នៅលើផែនដីមានប្រទេសជាច្រើន។"
    },
    {
      "word": "地址",
      "pinyin": "dì zhǐ",
      "meaning": "អាសយដ្ឋាន",
      "example": "请告诉我你的地址。",
      "example_pinyin": "qǐng gào su wǒ nǐ de dì zhǐ.",
      "example_kh": "សូមប្រាប់ខ្ញុំអាសយដ្ឋានរបស់អ្នក។"
    },
    {
      "word": "掉",
      "pinyin": "diào",
      "meaning": "ទម្លាក់",
      "example": "我掉了一块钱。",
      "example_pinyin": "wǒ diào le yí kuài qián.",
      "example_kh": "ខ្ញុំបានបោះប្រាក់មួយចោល។"
    },
    {
      "word": "调查",
      "pinyin": "diào chá",
      "meaning": "ការស្ទង់មតិ",
      "example": "公司正在进行市场调查。",
      "example_pinyin": "gōng sī zhèng zài jìn xíng shì chǎng diào chá.",
      "example_kh": "ក្រុមហ៊ុនកំពុងធ្វើការស្ទង់មតិក្នុងទីផ្សារ។"
    },
    {
      "word": "丢",
      "pinyin": "diū",
      "meaning": "បោះ",
      "example": "我丢了我的手机。",
      "example_pinyin": "wǒ diū le wǒ de shǒu jī.",
      "example_kh": "ខ្ញុំបានបាត់ទូរស័ព្ទរបស់ខ្ញុំ។"
    },
    {
      "word": "动作",
      "pinyin": "dòng zuò",
      "meaning": "សកម្មភាព",
      "example": "他的动作非常快。",
      "example_pinyin": "tā de dòng zuò fēi cháng kuài.",
      "example_kh": "សកម្មភាពរបស់គាត់រហ័សណាស់។"
    },
    {
      "word": "堵车",
      "pinyin": "dǔ chē",
      "meaning": "ស្ទះចរាចរណ៍",
      "example": "今天早上我遇到了堵车。",
      "example_pinyin": "jīn tiān zǎo shàng wǒ yù dào le dǔ chē.",
      "example_kh": "ព្រឹកនេះខ្ញុំបានជួបប្រទៈនឹងស្ទះចរាចរណ៍។"
    },
    {
      "word": "肚子",
      "pinyin": "dù zi",
      "meaning": "ពោះ",
      "example": "我肚子很饿。",
      "example_pinyin": "wǒ dù zi hěn è.",
      "example_kh": "ពោះខ្ញុំឃ្ងុំពណ័ះ។"
    },
    {
      "word": "短信",
      "pinyin": "duǎn xìn",
      "meaning": "សារ",
      "example": "我刚刚收到了短信。",
      "example_pinyin": "wǒ gāng gāng shōu dào le duǎn xìn.",
      "example_kh": "ខ្ញុំទទួលបានសារមួយមុននេះទេ។"
    },
    {
      "word": "对话",
      "pinyin": "duì huà",
      "meaning": "ការសន្ទនា",
      "example": "我们进行了一次愉快的对话。",
      "example_pinyin": "wǒ men jìn xíng le yí cì yú kuài de duì huà.",
      "example_kh": "យើងបានធ្វើការសន្ទនាដោយរីករាយ។"
    },
    {
      "word": "对面",
      "pinyin": "duì miàn",
      "meaning": "ផ្ទុយ",
      "example": "我的办公室就在对面。",
      "example_pinyin": "wǒ de bàng gōng shì jiù zài duì miàn.",
      "example_kh": "ការិយាល័យរបស់ខ្ញុំនៅផ្ទុយ។"
    },
    {
      "word": "对于",
      "pinyin": "duì yú",
      "meaning": "សម្រាប់",
      "example": "对于这个问题，我有不同的看法。",
      "example_pinyin": "duì yú zhè ge wèn tí, wǒ yǒu bù tóng de kàn fǎ.",
      "example_kh": "សម្រាប់សំណួរនេះ ខ្ញុំមានមតិខុសគ្នា។"
    },
    {
      "word": "儿童",
      "pinyin": "ér tóng",
      "meaning": "កូន",
      "example": "这本书适合儿童读。",
      "example_pinyin": "zhè běn shū shì hé ér tóng dú.",
      "example_kh": "សៀវភៅនេះសាកសមសម្រាប់កុមារ។"
    },
    {
      "word": "而",
      "pinyin": "ér",
      "meaning": "និង",
      "example": "他而且很聪明。",
      "example_pinyin": "tā ér qiě hěn cōng míng.",
      "example_kh": "គាត់និងមានបំណងចេះជាខ្ពស់។"
    },
    {
      "word": "发生",
      "pinyin": "fā shēng",
      "meaning": "កើតឡើង",
      "example": "这件事情发生了很多次。",
      "example_pinyin": "zhè jiàn shì qíng fā shēng le hěn duō cì.",
      "example_kh": "អ្វីៗនេះបានកើតឡើងជាច្រើនដង។"
    },
    {
      "word": "发展",
      "pinyin": "fā zhǎn",
      "meaning": "ការអភិវឌ្ឍនៃ",
      "example": "这个城市的经济发展得很快。",
      "example_pinyin": "zhè ge chéng shì de jīng jì fā zhǎn dé hěn kuài.",
      "example_kh": "សេដ្ឋកិច្ចនៃទីក្រុងនេះកំពុងអភិវឌ្ឍបានយ៉ាងលឿន។"
    },
    {
      "word": "法律",
      "pinyin": "fǎ lǜ",
      "meaning": "ស្របច្បាប់",
      "example": "我们应该遵守法律。",
      "example_pinyin": "wǒ men yīng gāi zūn shǒu fǎ lǜ.",
      "example_kh": "យើងគួរតែគោរពច្បាប់។"
    },
    {
      "word": "翻译",
      "pinyin": "fān yì",
      "meaning": "ការបកប្រែ",
      "example": "这本书需要翻译。",
      "example_pinyin": "zhè běn shū xū yào fān yì.",
      "example_kh": "សៀវភៅនេះត្រូវការបកប្រែ។"
    },
    {
      "word": "烦恼",
      "pinyin": "fán nǎo",
      "meaning": "តូចចិត្ត",
      "example": "他最近很烦恼。",
      "example_pinyin": "tā zuì jìn hěn fán nǎo.",
      "example_kh": "គាត់ប៉ះពាល់នឹងភាពតូចចិត្តសព្វថ្ងៃនេះ។"
    },
    {
      "word": "反对",
      "pinyin": "fǎn duì",
      "meaning": "ប្រឆាំង",
      "example": "我反对这个提议。",
      "example_pinyin": "wǒ fǎn duì zhè ge tí yì.",
      "example_kh": "ខ្ញុំប្រឆាំងនឹងគំនិតនេះ។"
    },
    {
      "word": "方法",
      "pinyin": "fāng fǎ",
      "meaning": "វិធីសាស្រ្ត",
      "example": "他有一个很好的方法。",
      "example_pinyin": "tā yǒu yí ge hěn hǎo de fāng fǎ.",
      "example_kh": "គាត់មានវិធីសាស្រ្តល្អមួយ។"
    },
    {
      "word": "方面",
      "pinyin": "fāng miàn",
      "meaning": "ទិដ្ឋភាព",
      "example": "在这方面，我们有很多经验。",
      "example_pinyin": "zài zhè fāng miàn, wǒ men yǒu hěn duō jīng yàn.",
      "example_kh": "នៅក្នុងទិដ្ឋភាពនេះ យើងមានបទពិសោធន៍ជាច្រើន។"
    },
    {
      "word": "方向",
      "pinyin": "fāng xiàng",
      "meaning": "ទិសដៅ",
      "example": "我们需要确定正确的方向。",
      "example_pinyin": "wǒ men xū yào què dìng zhèng què de fāng xiàng.",
      "example_kh": "យើងត្រូវការកំណត់ទិសដៅត្រឹមត្រូវ។"
    },
    {
      "word": "房东",
      "pinyin": "fáng dōng",
      "meaning": "ម្ចាស់ដី",
      "example": "房东要求我提前支付租金。",
      "example_pinyin": "fáng dōng yāo qiú wǒ tí qián zhī fù zū jīn.",
      "example_kh": "ម្ចាស់ដីបានស្នើឲ្យខ្ញុំបង់ប្រាក់ជួលមុន។"
    },
    {
      "word": "放弃",
      "pinyin": "fàng qì",
      "meaning": "បោះបង់",
      "example": "他决定放弃这个计划。",
      "example_pinyin": "tā jué dìng fàng qì zhè ge jì huà.",
      "example_kh": "គាត់បានសម្រេចចិត្តបោះបង់ផែនការនេះ។"
    },
    {
      "word": "放暑假",
      "pinyin": "fàng shǔ jià",
      "meaning": "វិស្សមកាល​រដូវ​ក្តៅ",
      "example": "孩子们正在放暑假。",
      "example_pinyin": "hái zi men zhèng zài fàng shǔ jià.",
      "example_kh": "កុមារកំពុងឈប់វិស្សមកាលរដូវក្តៅ។"
    },
    {
      "word": "放松",
      "pinyin": "fàng sōng",
      "meaning": "សម្រាក",
      "example": "假期是放松的好时机。",
      "example_pinyin": "jià qī shì fàng sōng de hǎo shí jī.",
      "example_kh": "ឈប់សម្រាកគឺជាពេលវេលាល្អសម្រាប់ការសម្រាក។"
    },
    {
      "word": "份",
      "pinyin": "fèn",
      "meaning": "ចែករំលែក",
      "example": "我买了一份礼物。",
      "example_pinyin": "wǒ mǎi le yí fèn lǐ wù.",
      "example_kh": "ខ្ញុំទិញអំណោយមួយ។"
    },
    {
      "word": "丰富",
      "pinyin": "fēng fù",
      "meaning": "អ្នកមាន",
      "example": "他的经验非常丰富。",
      "example_pinyin": "tā de jīng yàn fēi cháng fēng fù.",
      "example_kh": "បទពិសោធន៍របស់គាត់មានភាពសម្បូរបែបណាស់។"
    },
    {
      "word": "否则",
      "pinyin": "fǒu zé",
      "meaning": "បើមិនដូច្នេះទេ",
      "example": "请按时完成，否则会受到惩罚。",
      "example_pinyin": "qǐng àn shí wán chéng, fǒu zé huì shòu dào chéng fá.",
      "example_kh": "សូមបញ្ចប់ការងារតាមកាលបរិច្ឆេទ មិនត្រឹមត្រូវទេអ្នកនឹងត្រូវទទួលទោស។"
    },
    {
      "word": "符合",
      "pinyin": "fú hé",
      "meaning": "ជួប",
      "example": "这个产品符合我们的要求。",
      "example_pinyin": "zhè ge chǎn pǐn fú hé wǒ men de yāo qiú.",
      "example_kh": "ផលិតផលនេះត្រូវការពីលក្ខខណ្ឌរបស់យើង។"
    },
    {
      "word": "付款",
      "pinyin": "fù kuǎn",
      "meaning": "ការទូទាត់",
      "example": "他已经付款了。",
      "example_pinyin": "tā yǐ jīng fù kuǎn le.",
      "example_kh": "គាត់បានទូទាត់ហើយ។"
    },
    {
      "word": "复印",
      "pinyin": "fù yìn",
      "meaning": "ចម្លង",
      "example": "请复印这份文件。",
      "example_pinyin": "qǐng fù yìn zhè fèn wén jiàn.",
      "example_kh": "សូមចម្លងឯកសារនេះ។"
    },
    {
      "word": "复杂",
      "pinyin": "fù zá",
      "meaning": "ស្មុគស្មាញ",
      "example": "这道题很复杂。",
      "example_pinyin": "zhè dào tí hěn fù zá.",
      "example_kh": "សំណួរនេះស្មុគស្មាញណាស់។"
    },
    {
      "word": "富",
      "pinyin": "fù",
      "meaning": "អ្នកមាន",
      "example": "他是一个富有的人。",
      "example_pinyin": "tā shì yí gè fù yǒu de rén.",
      "example_kh": "គាត់គឺជាមនុស្សមានទ្រព្យសម្បត្តិ។"
    },
    {
      "word": "父亲",
      "pinyin": "fù qīn",
      "meaning": "ឪពុក",
      "example": "我的父亲是一名医生。",
      "example_pinyin": "wǒ de fù qīn shì yì míng yī shēng.",
      "example_kh": "ឪពុករបស់ខ្ញុំគឺជាគ្រូពេទ្យម្នាក់។"
    },
    {
      "word": "负责",
      "pinyin": "fù zé",
      "meaning": "ទទួលខុសត្រូវចំពោះ",
      "example": "他负责这项工作。",
      "example_pinyin": "tā fù zé zhè xiàng gōng zuò.",
      "example_kh": "គាត់ទទួលខុសត្រូវចំពោះការងារនេះ។"
    },
    {
      "word": "改变",
      "pinyin": "gǎi biàn",
      "meaning": "ផ្លាស់ប្តូរ",
      "example": "他决定改变自己的生活方式。",
      "example_pinyin": "tā jué dìng gǎi biàn zì jǐ de shēng huó fāng shì.",
      "example_kh": "គាត់បានសម្រេចចិត្តផ្លាស់ប្តូរបែបផែនជីវិតរបស់ខ្លួន។"
    },
    {
      "word": "干杯",
      "pinyin": "gān bēi",
      "meaning": "លើកទឹកចិត្ត",
      "example": "我们为他的成功干杯。",
      "example_pinyin": "wǒ men wèi tā de chéng gōng gān bēi.",
      "example_kh": "យើងលើកទឹកចិត្តសម្រាប់ជោគជ័យរបស់គាត់។"
    },
    {
      "word": "感动",
      "pinyin": "gǎn dòng",
      "meaning": "ការផ្លាស់ទីលំនៅ",
      "example": "她的话让我很感动。",
      "example_pinyin": "tā de huà ràng wǒ hěn gǎn dòng.",
      "example_kh": "ពាក្យរបស់នាងបានធ្វើឱ្យខ្ញុំមានអារម្មណ៍ចម្រុះ។"
    },
    {
      "word": "感觉",
      "pinyin": "gǎn jué",
      "meaning": "មានអារម្មណ៍",
      "example": "他感觉到了一些不对劲。",
      "example_pinyin": "tā gǎn jué dào le yì xiē bù duì jìn.",
      "example_kh": "គាត់មានអារម្មណ៍ថាអ្វីៗមិនត្រឹមត្រូវ។"
    },
    {
      "word": "感情",
      "pinyin": "gǎn qíng",
      "meaning": "អារម្មណ៍",
      "example": "他们之间的感情非常深。",
      "example_pinyin": "tā men zhī jiān de gǎn qíng fēi cháng shēn.",
      "example_kh": "អារម្មណ៍រវាងពួកគេមានភាពជ្រាលជ្រៅ។"
    },
    {
      "word": "感谢",
      "pinyin": "gǎn xiè",
      "meaning": "សូមអរគុណ",
      "example": "我感谢你对我的帮助。",
      "example_pinyin": "wǒ gǎn xiè nǐ duì wǒ de bāng zhù.",
      "example_kh": "ខ្ញុំសូមអរគុណចំពោះការជួយរបស់អ្នក។"
    },
    {
      "word": "敢",
      "pinyin": "gǎn",
      "meaning": "ហ៊ាន",
      "example": "他敢于挑战自己。",
      "example_pinyin": "tā gǎn yú tiǎo zhàn zì jǐ.",
      "example_kh": "គាត់ហ៊ានទម្លាប់ការប្រឈមមុខទៅនឹងខ្លួនឯង។"
    },
    {
      "word": "赶",
      "pinyin": "gǎn",
      "meaning": "ប្រញាប់",
      "example": "我赶时间，不能停下来。",
      "example_pinyin": "wǒ gǎn shí jiān, bù néng tíng xià lái.",
      "example_kh": "ខ្ញុំប្រញាប់ពេលវេលា មិនអាចឈប់បានទេ។"
    },
    {
      "word": "干",
      "pinyin": "gàn",
      "meaning": "ស្ងួត",
      "example": "今天的天气很干。",
      "example_pinyin": "jīn tiān de tiān qì hěn gàn.",
      "example_kh": "អាកាសធាតុថ្ងៃនេះស្ងួតណាស់។"
    },
    {
      "word": "刚",
      "pinyin": "gāng",
      "meaning": "គ្រាន់តែ",
      "example": "他刚到办公室。",
      "example_pinyin": "tā gāng dào bàng gōng shì.",
      "example_kh": "គាត់គ្រាន់តែបានមកដល់ការិយាល័យ។"
    },
    {
      "word": "高速公路",
      "pinyin": "gāo sù gōng lù",
      "meaning": "ផ្លូវហាយវេ",
      "example": "我们正在高速公路上行驶。",
      "example_pinyin": "wǒ men zhèng zài gāo sù gōng lù shàng xíng shǐ.",
      "example_kh": "យើងកំពុងបើកយានយន្តលើផ្លូវហាយវេ។"
    },
    {
      "word": "胳膊",
      "pinyin": "gē bo",
      "meaning": "ដៃ",
      "example": "她的胳膊受伤了。",
      "example_pinyin": "tā de gē bo shòu shāng le.",
      "example_kh": "ដៃរបស់នាងបានរបួស។"
    },
    {
      "word": "各",
      "pinyin": "gè",
      "meaning": "គ្នា",
      "example": "各位同学请注意。",
      "example_pinyin": "gè wèi tóng xué qǐng zhù yì.",
      "example_kh": "សូមអនុញ្ញាតឲ្យសិស្សរាល់គ្នាការយកចិត្តទុកដាក់។"
    },
    {
      "word": "公里",
      "pinyin": "gōng lǐ",
      "meaning": "គីឡូម៉ែត្រ",
      "example": "这条路有十公里长。",
      "example_pinyin": "zhè tiáo lù yǒu shí gōng lǐ cháng.",
      "example_kh": "ផ្លូវនេះមានប្រវែងដល់ដប់គីឡូម៉ែត្រ។"
    },
    {
      "word": "功夫",
      "pinyin": "gōng fu",
      "meaning": "ការខិតខំ",
      "example": "他练了很多年功夫。",
      "example_pinyin": "tā liàn le hěn duō nián gōng fu.",
      "example_kh": "គាត់បានហ្វឹកហាត់កីឡា យ៉ាងយូរ។"
    },
    {
      "word": "工资",
      "pinyin": "gōng zī",
      "meaning": "ប្រាក់ឈ្នួល",
      "example": "他的工资很高。",
      "example_pinyin": "tā de gōng zī hěn gāo.",
      "example_kh": "ប្រាក់ឈ្នួលរបស់គាត់ខ្ពស់ណាស់។"
    },
    {
      "word": "共同",
      "pinyin": "gòng tóng",
      "meaning": "ធម្មតា",
      "example": "我们有很多共同的兴趣。",
      "example_pinyin": "wǒ men yǒu hěn duō gòng tóng de xìng qù.",
      "example_kh": "យើងមានចំណាប់អារម្មណ៍តែមួយគ្នាច្រើន។"
    },
    {
      "word": "够",
      "pinyin": "gòu",
      "meaning": "គ្រប់គ្រាន់",
      "example": "这本书够重的。",
      "example_pinyin": "zhè běn shū gòu zhòng de.",
      "example_kh": "សៀវភៅនេះមានទំងន់គ្រប់គ្រាន់។"
    },
    {
      "word": "购物",
      "pinyin": "gòu wù",
      "meaning": "ការដើរទិញឥវ៉ាន់",
      "example": "她喜欢购物。",
      "example_pinyin": "tā xǐ huān gòu wù.",
      "example_kh": "នាងចូលចិត្តការទិញឥវ៉ាន់។"
    },
    {
      "word": "估计",
      "pinyin": "gū jì",
      "meaning": "ប៉ាន់ស្មាន",
      "example": "我估计他会迟到。",
      "example_pinyin": "wǒ gū jì tā huì chí dào.",
      "example_kh": "ខ្ញុំប៉ាន់ស្មានថាគាត់នឹងមកយឺត។"
    },
    {
      "word": "鼓励",
      "pinyin": "gǔ lì",
      "meaning": "លើកទឹកចិត្ត",
      "example": "老师鼓励我们要努力学习。",
      "example_pinyin": "lǎo shī gǔ lì wǒ men yào nǔ lì xué xí.",
      "example_kh": "គ្រូបង្ហាត់លើកទឹកចិត្តយើងឲ្យខិតខំសិក្សា។"
    },
    {
      "word": "故意",
      "pinyin": "gù yì",
      "meaning": "ដោយចេតនា",
      "example": "他故意没有告诉我。",
      "example_pinyin": "tā gù yì méi yǒu gào su wǒ.",
      "example_kh": "គាត់បានធ្វើដោយចេតនាហើយមិនប្រាប់ខ្ញុំទេ។"
    },
    {
      "word": "顾客",
      "pinyin": "gù kè",
      "meaning": "អតិថិជន",
      "example": "店里有很多顾客。",
      "example_pinyin": "diàn lǐ yǒu hěn duō gù kè.",
      "example_kh": "នៅហាងមានអតិថិជនច្រើន។"
    },
    {
      "word": "挂",
      "pinyin": "guà",
      "meaning": "ព្យួរ",
      "example": "他挂了电话。",
      "example_pinyin": "tā guà le diàn huà.",
      "example_kh": "គាត់បានព្យួរសារទូរស័ព្ទ។"
    },
    {
      "word": "关键",
      "pinyin": "guān jiàn",
      "meaning": "ភាពចាំបាច់",
      "example": "这是一个关键时刻。",
      "example_pinyin": "zhè shì yī gè guān jiàn shí kè.",
      "example_kh": "នេះគឺជាពេលវេលាសំខាន់មួយ។"
    },
    {
      "word": "观众",
      "pinyin": "guān zhòng",
      "meaning": "ទស្សនិកជន",
      "example": "观众都很喜欢这场表演。",
      "example_pinyin": "guān zhòng dōu hěn xǐ huān zhè chǎng biǎo yǎn.",
      "example_kh": "ទស្សនិកជនគ្រប់គ្នាចូលចិត្តការសម្ដែងនេះ។"
    },
    {
      "word": "管理",
      "pinyin": "guǎn lǐ",
      "meaning": "ការគ្រប់គ្រង",
      "example": "他负责公司的管理工作。",
      "example_pinyin": "tā fù zé gōng sī de guǎn lǐ gōng zuò.",
      "example_kh": "គាត់ទទួលខុសត្រូវក្នុងការគ្រប់គ្រងក្រុមហ៊ុន។"
    },
    {
      "word": "光",
      "pinyin": "guāng",
      "meaning": "ពន្លឺ",
      "example": "房间里没有光。",
      "example_pinyin": "fáng jiān lǐ méi yǒu guāng.",
      "example_kh": "បន្ទប់មិនមានពន្លឺទេ។"
    },
    {
      "word": "广播",
      "pinyin": "guǎng bō",
      "meaning": "ផ្សាយ",
      "example": "我正在听广播。",
      "example_pinyin": "wǒ zhèng zài tīng guǎng bō.",
      "example_kh": "ខ្ញុំកំពុងស្តាប់ការផ្សាយ។"
    },
    {
      "word": "广告",
      "pinyin": "guǎng gào",
      "meaning": "ផ្សាយពាណិជ្ជកម្ម",
      "example": "电视里有很多广告。",
      "example_pinyin": "diàn shì lǐ yǒu hěn duō guǎng gào.",
      "example_kh": "នៅទូរទស្សន៍មានការផ្សាយពាណិជ្ជកម្មច្រើន។"
    },
    {
      "word": "逛",
      "pinyin": "guàng",
      "meaning": "ទស្សនា",
      "example": "我们去商场逛一逛。",
      "example_pinyin": "wǒ men qù shāng chǎng guàng yī guàng.",
      "example_kh": "យើងទៅផ្សារមួយដើម្បីទស្សនា។"
    },
    {
      "word": "规定",
      "pinyin": "guī dìng",
      "meaning": "លលាដ៍ក្បាល",
      "example": "学校有很多规定。",
      "example_pinyin": "xué xiào yǒu hěn duō guī dìng.",
      "example_kh": "សាលាមានលក្ខខណ្ឌច្រើន។"
    },
    {
      "word": "国籍",
      "pinyin": "guó jí",
      "meaning": "ប្រទេសសញ្ជាតិ",
      "example": "他的国籍是中国。",
      "example_pinyin": "tā de guó jí shì zhōng guó.",
      "example_kh": "សញ្ជាតិរបស់គាត់គឺជាចិន។"
    },
    {
      "word": "国际",
      "pinyin": "guó jì",
      "meaning": "អន្តរជាតិ",
      "example": "他们公司有很多国际业务。",
      "example_pinyin": "tā men gōng sī yǒu hěn duō guó jì yè wù.",
      "example_kh": "ក្រុមហ៊ុនរបស់ពួកគាត់មានអាជីវកម្មអន្តរជាតិច្រើន។"
    },
    {
      "word": "果汁",
      "pinyin": "guǒ zhī",
      "meaning": "ទឹកផ្លែឈើ",
      "example": "我喜欢喝橙汁和苹果汁。",
      "example_pinyin": "wǒ xǐ huān hē chéng zhī hé píng guǒ zhī.",
      "example_kh": "ខ្ញុំចូលចិត្តផឹកទឹកទំព័រដែលមានរសជាតិផ្លែប៉ោម និងផ្លែទំណាក់។"
    },
    {
      "word": "过程",
      "pinyin": "guò chéng",
      "meaning": "ដំណើរការ",
      "example": "整个过程非常顺利。",
      "example_pinyin": "zhěng gè guò chéng fēi cháng shùn lì.",
      "example_kh": "ដំណើរការទាំងមូលស្នាក់នៅក្នុងភាពរលូនណាស់។"
    },
    {
      "word": "海洋",
      "pinyin": "hǎi yáng",
      "meaning": "មហាសមុទ្រ",
      "example": "海洋是地球上最大的生态系统。",
      "example_pinyin": "hǎi yáng shì dì qiú shàng zuì dà de shēng tài xì tǒng.",
      "example_kh": "មហាសមុទ្រ គឺជាប្រព័ន្ធគ្រប់គ្រងធម្មជាតិសំខាន់បំផុតនៅលើភពភ្នាក់ងារ។"
    },
    {
      "word": "害羞",
      "pinyin": "hài xiū",
      "meaning": "ខ្មាស់អៀន",
      "example": "她很害羞，不喜欢在人前说话。",
      "example_pinyin": "tā hěn hài xiū, bù xǐ huān zài rén qián shuō huà.",
      "example_kh": "នាងខ្មាស់អៀន ហើយមិនចូលចិត្តនិយាយនៅមុខមនុស្សទេ។"
    },
    {
      "word": "寒假",
      "pinyin": "hán jià",
      "meaning": "វិស្សមកាលរដូវរងារ",
      "example": "寒假期间，我去旅游了。",
      "example_pinyin": "hán jià qī jiān, wǒ qù lǚ yóu le.",
      "example_kh": "ក្នុងវិស្សមកាលរដូវរងារ ខ្ញុំបានទៅធ្វើដំណើរ។"
    },
    {
      "word": "汗",
      "pinyin": "hàn",
      "meaning": "ញើស",
      "example": "他在运动后流了很多汗。",
      "example_pinyin": "tā zài yùn dòng hòu liú le hěn duō hàn.",
      "example_kh": "គាត់បានញើសយ៉ាងច្រើនបន្ទាប់ពីហាត់ប្រាណ។"
    },
    {
      "word": "航班",
      "pinyin": "háng bān",
      "meaning": "ការហោះហើរ",
      "example": "航班已经推迟了一个小时。",
      "example_pinyin": "háng bān yǐ jīng tuī chí le yī gè xiǎo shí.",
      "example_kh": "កា​ហោះហើរបានពន្យារពេលជាងមួយម៉ោងហើយ។"
    },
    {
      "word": "好处",
      "pinyin": "hǎo chu",
      "meaning": "ទទួលបានអត្ថប្រយោជន៍",
      "example": "运动有很多好处，比如增强体力。",
      "example_pinyin": "yùn dòng yǒu hěn duō hǎo chu, bǐ rú zēng qiáng tǐ lì.",
      "example_kh": "ការហាត់ប្រាណមានអត្ថប្រយោជន៍ច្រើន ដូចជាការលើកទឹកចិត្តនៃសុខភាព។"
    },
    {
      "word": "好像",
      "pinyin": "hǎo xiàng",
      "meaning": "ចូលចិត្ត",
      "example": "她好像很喜欢这个电影。",
      "example_pinyin": "tā hǎo xiàng hěn xǐ huān zhè ge diàn yǐng.",
      "example_kh": "នាងចូលចិត្តភាពយន្តនេះ។"
    },
    {
      "word": "号码",
      "pinyin": "hào mǎ",
      "meaning": "ចំនួន",
      "example": "请告诉我你的电话号码。",
      "example_pinyin": "qǐng gào su wǒ nǐ de diàn huà hào mǎ.",
      "example_kh": "សូមប្រាប់លេខទូរស័ព្ទរបស់អ្នក។"
    },
    {
      "word": "合格",
      "pinyin": "hé gé",
      "meaning": "មានលក្ខណៈសម្បត្តិគ្រប់គ្រាន់",
      "example": "他的成绩达到了合格标准。",
      "example_pinyin": "tā de chéng jī dá dào le hé gé biāo zhǔn.",
      "example_kh": "ចំណាត់ថ្នាក់របស់គាត់បានសម្រេចបានគ្រប់គ្រាន់។"
    },
    {
      "word": "合适",
      "pinyin": "hé shì",
      "meaning": "សមរម្យ",
      "example": "这件衣服对你很合适。",
      "example_pinyin": "zhè jiàn yī fú duì nǐ hěn hé shì.",
      "example_kh": "សម្លៀកបំពាក់នេះសមស្របសម្រាប់អ្នក។"
    },
    {
      "word": "盒子",
      "pinyin": "hé zi",
      "meaning": "ប្រអប់",
      "example": "我把书放进了盒子里。",
      "example_pinyin": "wǒ bǎ shū fàng jìn le hé zi lǐ.",
      "example_kh": "ខ្ញុំបានដាក់សៀវភៅនៅក្នុងប្រអប់។"
    },
    {
      "word": "厚",
      "pinyin": "hòu",
      "meaning": "ក្រាស់",
      "example": "这本书的封面很厚。",
      "example_pinyin": "zhè běn shū de fēng miàn hěn hòu.",
      "example_kh": "មុខទំព័រនៃសៀវភៅនេះគឺក្រាស់។"
    },
    {
      "word": "后悔",
      "pinyin": "hòu huǐ",
      "meaning": "សោកស្តាយ",
      "example": "我很后悔没有早点出发。",
      "example_pinyin": "wǒ hěn hòu huǐ méi yǒu zǎo diǎn chū fā.",
      "example_kh": "ខ្ញុំសោកស្តាយដែលមិនបានចេញដំណើរចាប់តែពេលមុន។"
    },
    {
      "word": "互联网",
      "pinyin": "hù lián wǎng",
      "meaning": "អ៊ីនធឺណិត",
      "example": "互联网改变了我们的生活方式。",
      "example_pinyin": "hù lián wǎng gǎi biàn le wǒ men de shēng huó fāng shì.",
      "example_kh": "អ៊ីនធឺណិតបានផ្លាស់ប្តូរប្រព័ន្ធជីវិតរបស់យើង។"
    },
    {
      "word": "互相",
      "pinyin": "hù xiāng",
      "meaning": "ទៅវិញទៅមក",
      "example": "我们互相帮助，共同完成任务。",
      "example_pinyin": "wǒ men hù xiāng bāng zhù, gòng tóng wán chéng rèn wu.",
      "example_kh": "យើងជួយគ្នា និងបញ្ចប់ការងារជាមួយគ្នា។"
    },
    {
      "word": "护士",
      "pinyin": "hù shi",
      "meaning": "គិលានុបដ្ឋាយិកា",
      "example": "护士正在照顾病人。",
      "example_pinyin": "hù shi zhèng zài zhào gù bìng rén.",
      "example_kh": "គិលានុបដ្ឋាយិកាកំពុងថែទាំអ្នកជំងឺ។"
    },
    {
      "word": "怀疑",
      "pinyin": "huái yí",
      "meaning": "សង្ស័យ",
      "example": "他怀疑这件事不是真的。",
      "example_pinyin": "tā huái yí zhè jiàn shì bù shì zhēn de.",
      "example_kh": "គាត់សង្ស័យថាអ្នកនឹងកើតឡើង។"
    },
    {
      "word": "回忆",
      "pinyin": "huí yì",
      "meaning": "អនុស្សាវរីយ៍",
      "example": "我经常回忆起小时候的快乐时光。",
      "example_pinyin": "wǒ jīng cháng huí yì qǐ xiǎo shí hòu de kuài lè shí guāng.",
      "example_kh": "ខ្ញុំនឹកឃើញពីពេលក្មេងៗដែលសប្បាយ។"
    },
    {
      "word": "活动",
      "pinyin": "huó dòng",
      "meaning": "សកម្មភាព",
      "example": "这周末有很多有趣的活动。",
      "example_pinyin": "zhè zhōu mò yǒu hěn duō yǒu qù de huó dòng.",
      "example_kh": "នៅចុងសប្តាហ៍នេះ មានសកម្មភាពរំភើបច្រើន។"
    },
    {
      "word": "活泼",
      "pinyin": "huó po",
      "meaning": "រស់រវើក",
      "example": "这个孩子非常活泼。",
      "example_pinyin": "zhè ge hái zi fēi cháng huó po.",
      "example_kh": "ក្មេងនេះមានអារម្មណ៍រស់រវើកណាស់។"
    },
    {
      "word": "火",
      "pinyin": "huǒ",
      "meaning": "ភ្លើង",
      "example": "火灾是非常危险的。",
      "example_pinyin": "huǒ zāi shì fēi cháng wēi xiǎn de.",
      "example_kh": "ភ្លើងបែកគឺគ្រោះថ្នាក់យ៉ាងខ្លាំង។"
    },
    {
      "word": "获得",
      "pinyin": "huò dé",
      "meaning": "ទទួលបាន",
      "example": "他通过努力获得了奖学金。",
      "example_pinyin": "tā tōng guò nǔ lì huò dé le jiǎng xué jīn.",
      "example_kh": "គាត់ទទួលបានប័ណ្ណអាហារូបករណ៍ដោយការខិតខំ។"
    },
    {
      "word": "基础",
      "pinyin": "jī chǔ",
      "meaning": "មូលដ្ឋាន",
      "example": "数学是很多学科的基础。",
      "example_pinyin": "shù xué shì hěn duō xué kē de jī chǔ.",
      "example_kh": "គណិតវិទ្យាជាមូលដ្ឋានសម្រាប់វិស័យជាច្រើន។"
    },
    {
      "word": "激动",
      "pinyin": "jī dòng",
      "meaning": "រំភើប",
      "example": "听到这个消息，我感到非常激动。",
      "example_pinyin": "tīng dào zhè ge xiāo xī, wǒ gǎn dào fēi cháng jī dòng.",
      "example_kh": "ការប្រកាសនេះធ្វើអោយខ្ញុំរំភើបខ្លាំង។"
    },
    {
      "word": "积极",
      "pinyin": "jī jí",
      "meaning": "វិជ្ជមាន",
      "example": "他总是以积极的态度面对困难。",
      "example_pinyin": "tā zǒng shì yǐ jī jí de tài dù miàn duì kùn nán.",
      "example_kh": "គាត់តែងតែបង្ហាញនូវទិដ្ឋភាពវិជ្ជមាននៅពេលប្រឈមមុខនឹងការលំបាក។"
    },
    {
      "word": "积累",
      "pinyin": "jī lěi",
      "meaning": "កកកុញ",
      "example": "他通过多年的努力积累了丰富的经验。",
      "example_pinyin": "tā tōng guò duō nián de nǔ lì jī lěi le fēng fù de jīng yàn.",
      "example_kh": "គាត់បានស្ទឹមស្នាក់ការងារខ្ពស់បន្ទាប់ពីការខិតខំ។"
    },
    {
      "word": "即使",
      "pinyin": "jí shǐ",
      "meaning": "បើ​ទោះ​បី​ជា",
      "example": "即使遇到困难，他也没有放弃。",
      "example_pinyin": "jí shǐ yù dào kùn nán, tā yě méi yǒu fàng qì.",
      "example_kh": "បើទោះបីជាប្រឈមមុខនឹងបញ្ហាក៏ដោយ គាត់ក៏មិនទោសទេ។"
    },
    {
      "word": "及时",
      "pinyin": "jí shí",
      "meaning": "ទាន់ពេលវេលា",
      "example": "他及时赶到医院，救了病人。",
      "example_pinyin": "tā jí shí gǎn dào yī yuàn, jiù le bìng rén.",
      "example_kh": "គាត់បានមកដល់មន្ទីរពេទ្យទាន់ពេលវេលា ហើយជួយអ្នកជំងឺ។"
    },
    {
      "word": "寄",
      "pinyin": "jì",
      "meaning": "ផ្ញើ",
      "example": "我昨天寄了一个包裹。",
      "example_pinyin": "wǒ zuó tiān jì le yī gè bāo guǒ.",
      "example_kh": "ខ្ញុំបានផ្ញើប្រអប់មួយនៅម្សិលមិញ។"
    },
    {
      "word": "技术",
      "pinyin": "jì shù",
      "meaning": "បច្ចេកវិទ្យា",
      "example": "这个公司专注于创新技术。",
      "example_pinyin": "zhè ge gōng sī zhuān zhù yú chuàng xīn jì shù.",
      "example_kh": "ក្រុមហ៊ុននេះមានការផ្តោតសំខាន់លើបច្ចេកវិទ្យាថ្មីៗ។"
    },
    {
      "word": "既然",
      "pinyin": "jì rán",
      "meaning": "ចាប់តាំងពី",
      "example": "既然你已经决定了，就不必再犹豫。",
      "example_pinyin": "jì rán nǐ yǐ jīng jué dìng le, jiù bù bì zài yóu yù.",
      "example_kh": "ចាប់តាំងពីអ្នកបានសម្រេចហើយ ក៏មិនចាំបាច់ត្រឡប់មកទៀតទេ។"
    },
    {
      "word": "继续",
      "pinyin": "jì xù",
      "meaning": "អនុវត្តលើ",
      "example": "我们应该继续努力，不放弃。",
      "example_pinyin": "wǒ men yīng gāi jì xù nǔ lì, bù fàng qì.",
      "example_kh": "យើងគួរតែបន្តខិតខំ ហើយកុំបោះបង់។"
    },
    {
      "word": "计划",
      "pinyin": "jì huà",
      "meaning": "ផែនការ",
      "example": "我们有一个详细的旅行计划。",
      "example_pinyin": "wǒ men yǒu yī gè xiáng xì de lǚ xíng jì huà.",
      "example_kh": "យើងមានផែនការដែលមានពិពណ៌នាពីការធ្វើដំណើរ។"
    },
    {
      "word": "记者",
      "pinyin": "jì zhě",
      "meaning": "អ្នកយកព័ត៌មាន",
      "example": "记者正在采访这位演员。",
      "example_pinyin": "jì zhě zhèng zài cǎi fǎng zhè wèi yǎn yuán.",
      "example_kh": "អ្នកយកព័ត៌មានកំពុងសម្ភាសអ្នកសម្ដែងនេះ។"
    },
    {
      "word": "加班",
      "pinyin": "jiā bān",
      "meaning": "ហួសពេល",
      "example": "他今天加班，工作到很晚。",
      "example_pinyin": "tā jīn tiān jiā bān, gōng zuò dào hěn wǎn.",
      "example_kh": "គាត់បានធ្វើការហួសពេល នៅថ្ងៃនេះ។"
    },
    {
      "word": "加油站",
      "pinyin": "jiā yóu zhàn",
      "meaning": "ឧស្ម័ន",
      "example": "我们在加油站停下来加油。",
      "example_pinyin": "wǒ men zài jiā yóu zhàn tíng xià lái jiā yóu.",
      "example_kh": "យើងបានតាំងពីឧស្ម័ន នៅអគ្គិសនី។"
    },
    {
      "word": "家具",
      "pinyin": "jiā jù",
      "meaning": "គ្រឿងសង្ហារឹម",
      "example": "这家店卖各种各样的家具。",
      "example_pinyin": "zhè jiā diàn mài gè zhǒng gè yàng de jiā jù.",
      "example_kh": "ហាងនេះលក់គ្រឿងសង្ហារឹមជាច្រើនប្រភេទ។"
    },
    {
      "word": "假",
      "pinyin": "jiǎ",
      "meaning": "មិនពិត",
      "example": "这个证件是假的。",
      "example_pinyin": "zhè ge zhèng jiàn shì jiǎ de.",
      "example_kh": "សញ្ញាប័ត្រនេះគឺមិនពិតទេ។"
    },
    {
      "word": "价格",
      "pinyin": "jià gé",
      "meaning": "តម្លៃ",
      "example": "这件衣服的价格非常高。",
      "example_pinyin": "zhè jiàn yī fú de jià gé fēi cháng gāo.",
      "example_kh": "សម្លៀកបំពាក់នេះមានតម្លៃខ្ពស់ណាស់។"
    },
    {
      "word": "坚持",
      "pinyin": "jiān chí",
      "meaning": "ប្រកាន់ខ្ជាប់",
      "example": "他坚持每天跑步。",
      "example_pinyin": "tā jiān chí měi tiān pǎo bù.",
      "example_kh": "គាត់ប្រកាន់ខ្ជាប់រត់បាល់រៀងរាល់ថ្ងៃ។"
    },
    {
      "word": "减肥",
      "pinyin": "jiǎn féi",
      "meaning": "ស្រកទម្ងន់",
      "example": "她决定开始减肥，健康饮食。",
      "example_pinyin": "tā jué dìng kāi shǐ jiǎn féi, jiàn kāng yǐn shí.",
      "example_kh": "គាត់បានសម្រេចចិត្តចាប់ផ្តើមស្រកទម្ងន់ និងទទួលអាហារសុខភាព។"
    },
    {
      "word": "减少",
      "pinyin": "jiǎn shǎo",
      "meaning": "កាត់ត្រឡប់មកវិញ",
      "example": "我们应该减少浪费。",
      "example_pinyin": "wǒ men yīng gāi jiǎn shǎo làng fèi.",
      "example_kh": "យើងគួរតែបន្ថយការបំពាន។"
    },
    {
      "word": "建议",
      "pinyin": "jiàn yì",
      "meaning": "សំណូមពរ",
      "example": "他提出了一个很好的建议。",
      "example_pinyin": "tā tí chū le yī gè hěn hǎo de jiàn yì.",
      "example_kh": "គាត់បានផ្តល់អនុសាសន៍ល្អមួយ។"
    },
    {
      "word": "将来",
      "pinyin": "jiāng lái",
      "meaning": "អនាគត",
      "example": "我希望将来能成为一名医生。",
      "example_pinyin": "wǒ xī wàng jiāng lái néng chéng wéi yī míng yī shēng.",
      "example_kh": "ខ្ញុំសង្ឃឹមថា នៅអនាគតខ្ញុំនឹងក្លាយជាពេទ្យ។"
    },
    {
      "word": "奖金",
      "pinyin": "jiǎng jīn",
      "meaning": "ប្រាក់រង្វាន់",
      "example": "公司给员工发放了奖金。",
      "example_pinyin": "gōng sī gěi yuán gōng fā fàng le jiǎng jīn.",
      "example_kh": "ក្រុមហ៊ុនបានផ្តល់ប្រាក់រង្វាន់សម្រាប់បុគ្គលិក។"
    },
    {
      "word": "降低",
      "pinyin": "jiàng dī",
      "meaning": "កាត់បន្ថយ",
      "example": "为了节省能源，我们需要降低电力消耗。",
      "example_pinyin": "wèi le jié shěng néng yuán, wǒ men xū yào jiàng dī diàn lì xiāo hào.",
      "example_kh": "ដើម្បីសន្សំសំចៃថាមពល យើងត្រូវតែបន្ថយការប្រើប្រាស់អគ្គិសនី។"
    },
    {
      "word": "降落",
      "pinyin": "jiàng luò",
      "meaning": "ចុះចត",
      "example": "飞机已经顺利降落。",
      "example_pinyin": "fēi jī yǐ jīng shùn lì jiàng luò.",
      "example_kh": "យន្តហោះបានចុះចតដោយជោគជ័យ។"
    },
    {
      "word": "交",
      "pinyin": "jiāo",
      "meaning": "ឈើឆ្កាង",
      "example": "他在交给我一本书。",
      "example_pinyin": "tā zài jiāo gěi wǒ yī běn shū.",
      "example_kh": "គាត់កំពុងផ្តល់សៀវភៅមួយទៅខ្ញុំ។"
    },
    {
      "word": "交流",
      "pinyin": "jiāo liú",
      "meaning": "ទំនាក់ទំនងជាមួយ",
      "example": "我们需要更好的交流。",
      "example_pinyin": "wǒ men xū yào gèng hǎo de jiāo liú.",
      "example_kh": "យើងត្រូវការទំនាក់ទំនងល្អប្រសើរជាងនេះ។"
    },
    {
      "word": "交通",
      "pinyin": "jiāo tōng",
      "meaning": "ចរាចរណ៍",
      "example": "这条路的交通很繁忙。",
      "example_pinyin": "zhè tiáo lù de jiāo tōng hěn fán máng.",
      "example_kh": "ចរាចរណ៍នៅលើផ្លូវនេះមានការច្របូកច្របល់។"
    },
    {
      "word": "郊区",
      "pinyin": "jiāo qū",
      "meaning": "តំបន់ជាយក្រុង",
      "example": "我住在郊区，离市区很远。",
      "example_pinyin": "wǒ zhù zài jiāo qū, lí shì qū hěn yuǎn.",
      "example_kh": "ខ្ញុំអំពើនៅតំបន់ជាយក្រុង ហើយនៅឆ្ងាយពីក្រុង។"
    },
    {
      "word": "骄傲",
      "pinyin": "jiāo ào",
      "meaning": "មានមោទនភាព",
      "example": "他对自己的成就感到骄傲。",
      "example_pinyin": "tā duì zì jǐ de chéng jiù gǎn dào jiāo ào.",
      "example_kh": "គាត់មានមោទនភាពចំពោះកិច្ចសម្រង់របស់ខ្លួន។"
    },
    {
      "word": "饺子",
      "pinyin": "jiǎo zi",
      "meaning": "នំប៉ាវ",
      "example": "我们今晚吃饺子。",
      "example_pinyin": "wǒ men jīn wǎn chī jiǎo zi.",
      "example_kh": "យើងបរិច្ឆេទនេះញ៉ាំនំប៉ាវ។"
    },
    {
      "word": "教授",
      "pinyin": "jiào shòu",
      "meaning": "សាស្រ្តាចារ្យ",
      "example": "他是一位著名的教授。",
      "example_pinyin": "tā shì yī wèi zhù míng de jiào shòu.",
      "example_kh": "គាត់គឺជាសាស្រ្តាចារ្យដ៏ល្បីមួយ។"
    },
    {
      "word": "教育",
      "pinyin": "jiào yù",
      "meaning": "ការអប់រំ",
      "example": "教育是国家发展的基石。",
      "example_pinyin": "jiào yù shì guó jiā fā zhǎn de jī shí.",
      "example_kh": "ការអប់រំគឺជាឧបករណ៍សំខាន់សម្រាប់ការអភិវឌ្ឍន៍ប្រទេស។"
    },
    {
      "word": "接受",
      "pinyin": "jiē shòu",
      "meaning": "ទទួលយក",
      "example": "我接受了他的建议。",
      "example_pinyin": "wǒ jiē shòu le tā de jiàn yì.",
      "example_kh": "ខ្ញុំបានទទួលយកការផ្តល់អនុសាសន៍របស់គាត់។"
    },
    {
      "word": "接着",
      "pinyin": "jiē zhe",
      "meaning": "បន្ទាប់មក",
      "example": "我们接着讨论下一个问题。",
      "example_pinyin": "wǒ men jiē zhe tǎo lùn xià yī gè wèn tí.",
      "example_kh": "យើងបន្ទាប់មកពិភាក្សាសំណួរដទៃទៀត។"
    },
    {
      "word": "结果",
      "pinyin": "jié guǒ",
      "meaning": "លទ្ធផល",
      "example": "这次考试的结果让我很失望。",
      "example_pinyin": "zhè cì kǎo shì de jié guǒ ràng wǒ hěn shī wàng.",
      "example_kh": "លទ្ធផលពីការប្រឡងនេះបានធ្វើឱ្យខ្ញុំមានអារម្មណ៍សោកស្តាយ។"
    },
    {
      "word": "节",
      "pinyin": "jié",
      "meaning": "ផ្នែក",
      "example": "这是课程的最后一节。",
      "example_pinyin": "zhè shì kè chéng de zuì hòu yī jié.",
      "example_kh": "នេះគឺជាប្រភេទចុងក្រោយនៃមេរៀន។"
    },
    {
      "word": "节约",
      "pinyin": "jié yuē",
      "meaning": "សន្សំ",
      "example": "我们要节约水电。",
      "example_pinyin": "wǒ men yào jié yuē shuǐ diàn.",
      "example_kh": "យើងត្រូវសន្សំទឹក និងអគ្គិសនី។"
    },
    {
      "word": "解释",
      "pinyin": "jiě shì",
      "meaning": "ការពន្យល់",
      "example": "请给我解释一下这个问题。",
      "example_pinyin": "qǐng gěi wǒ jiě shì yī xià zhè ge wèn tí.",
      "example_kh": "សូមពន្យល់សំណួរនេះទៅខ្ញុំ។"
    },
    {
      "word": "尽管",
      "pinyin": "jǐn guǎn",
      "meaning": "ទោះជា",
      "example": "尽管下雨，我们还是去旅行。",
      "example_pinyin": "jǐn guǎn xià yǔ, wǒ men hái shì qù lǚ xíng.",
      "example_kh": "ទោះបីជាកង្ហើបផ្ទះខ្យល់នៅលើក្តី, យើងក៏ទៅដំណើរត្រូវបានគេហៅ។"
    },
    {
      "word": "紧张",
      "pinyin": "jǐn zhāng",
      "meaning": "ភាពតានតឹង",
      "example": "考试前我总是感到紧张。",
      "example_pinyin": "kǎo shì qián wǒ zǒng shì gǎn dào jǐn zhāng.",
      "example_kh": "មុនការប្រឡងខ្ញុំតែងតែមានអារម្មណ៍តានតឹង។"
    },
    {
      "word": "禁止",
      "pinyin": "jìn zhǐ",
      "meaning": "ហាមឃាត់",
      "example": "这里禁止吸烟。",
      "example_pinyin": "zhè lǐ jìn zhǐ xī yān.",
      "example_kh": "ទីនេះហាមឃាត់ការជក់ស្គរីត។"
    },
    {
      "word": "进行",
      "pinyin": "jìn xíng",
      "meaning": "អនុវត្ត",
      "example": "会议正在进行中。",
      "example_pinyin": "huì yì zhèng zài jìn xíng zhōng.",
      "example_kh": "កិច្ចប្រជុំកំពុងដំណើរការ។"
    },
    {
      "word": "京剧",
      "pinyin": "jīng jù",
      "meaning": "ល្ខោនពេកាំង",
      "example": "我喜欢看京剧。",
      "example_pinyin": "wǒ xǐ huān kàn jīng jù.",
      "example_kh": "ខ្ញុំចូលចិត្តមើលល្ខោនពេកាំង។"
    },
    {
      "word": "精彩",
      "pinyin": "jīng cǎi",
      "meaning": "អស្ចារ្យ",
      "example": "比赛非常精彩。",
      "example_pinyin": "bǐ sài fēi cháng jīng cǎi.",
      "example_kh": "ការប្រកួតអស្ចារ្យណាស់។"
    },
    {
      "word": "经济",
      "pinyin": "jīng jì",
      "meaning": "សេដ្ឋកិច្ច",
      "example": "中国的经济发展很快。",
      "example_pinyin": "zhōng guó de jīng jì fā zhǎn hěn kuài.",
      "example_kh": "សេដ្ឋកិច្ចរបស់ចិនអភិវឌ្ឍលឿនណាស់។"
    },
    {
      "word": "经历",
      "pinyin": "jīng lì",
      "meaning": "បទពិសោធន៍",
      "example": "他有很多工作经历。",
      "example_pinyin": "tā yǒu hěn duō gōng zuò jīng lì.",
      "example_kh": "គាត់មានបទពិសោធន៍ការងារច្រើន។"
    },
    {
      "word": "经验",
      "pinyin": "jīng yàn",
      "meaning": "បទពិសោធន៍",
      "example": "老师有丰富的教学经验。",
      "example_pinyin": "lǎo shī yǒu fēng fù de jiào xué jīng yàn.",
      "example_kh": "គ្រូមានបទពិសោធន៍បង្រៀនច្រើន។"
    },
    {
      "word": "景色",
      "pinyin": "jǐng sè",
      "meaning": "ទេសភាព",
      "example": "这里的景色很美。",
      "example_pinyin": "zhè lǐ de jǐng sè hěn měi.",
      "example_kh": "ទេសភាពនៅទីនេះស្អាតណាស់។"
    }
],
5:[
  {
    "word": "爱情",
    "pinyin": "ài qíng",
    "meaning": "ស្រឡាញ់",
    "example": "他们的爱情非常感人。",
    "example_pinyin": "tā men de ài qíng fēi cháng gǎn rén.",
    "example_kh": "សេចក្ដីស្រឡាញ់របស់ពួកគេគួរឲ្យអារម្មណ៍រំភើប។"
  },
  {
    "word": "安排",
    "pinyin": "ān pái",
    "meaning": "ការរៀបចំ",
    "example": "我们已经安排好了旅行计划。",
    "example_pinyin": "wǒ men yǐ jīng ān pái hǎo le lǚ xíng jì huà.",
    "example_kh": "ពួកយើងបានរៀបចំផែនការធ្វើដំណើររួចរាល់ហើយ។"
  },
  {
    "word": "安全",
    "pinyin": "ān quán",
    "meaning": "សុវត្ថិភាព",
    "example": "请注意安全。",
    "example_pinyin": "qǐng zhù yì ān quán.",
    "example_kh": "សូមប្រុងប្រយ័ត្នសុវត្ថិភាព។"
  },
  {
    "word": "按时",
    "pinyin": "àn shí",
    "meaning": "ទាន់​ពេលវេលា",
    "example": "他每天按时上班。",
    "example_pinyin": "tā měi tiān àn shí shàng bān.",
    "example_kh": "គាត់ទៅធ្វើការទាន់ពេលរៀងរាល់ថ្ងៃ។"
  },
  {
    "word": "按照",
    "pinyin": "àn zhào",
    "meaning": "យោង​ទៅ​តាម",
    "example": "请按照说明操作。",
    "example_pinyin": "qǐng àn zhào shuō míng cāo zuò.",
    "example_kh": "សូមប្រើប្រាស់ដោយយោងតាមការណែនាំ។"
  },
  {
    "word": "百分之",
    "pinyin": "bǎi fēn zhī",
    "meaning": "ភាគរយ",
    "example": "通过率达到百分之九十。",
    "example_pinyin": "tōng guò lǜ dá dào bǎi fēn zhī jiǔ shí.",
    "example_kh": "អត្រាឆ្លងធ្វើបានដល់ ៩០ ភាគរយ។"
  },
  {
    "word": "棒",
    "pinyin": "bàng",
    "meaning": "ល្អបំផុត",
    "example": "你做得真棒！",
    "example_pinyin": "nǐ zuò de zhēn bàng!",
    "example_kh": "អ្នកបានធ្វើបានល្អណាស់!"
  },
  {
    "word": "包子",
    "pinyin": "bāo zi",
    "meaning": "ប៊ុន",
    "example": "我早餐吃了两个包子。",
    "example_pinyin": "wǒ zǎo cān chī le liǎng gè bāo zi.",
    "example_kh": "ខ្ញុំបានបរិច្ឆេទប៊ុនពីរពេលអាហារពេលព្រឹក។"
  },
  {
    "word": "保护",
    "pinyin": "bǎo hù",
    "meaning": "ការការពារ",
    "example": "我们要保护环境。",
    "example_pinyin": "wǒ men yào bǎo hù huán jìng.",
    "example_kh": "ពួកយើងត្រូវការពារបរិស្ថាន។"
  },
  {
    "word": "保证",
    "pinyin": "bǎo zhèng",
    "meaning": "ធានា",
    "example": "我保证明天一定到。",
    "example_pinyin": "wǒ bǎo zhèng míng tiān yí dìng dào.",
    "example_kh": "ខ្ញុំធានាថាថ្ងៃស្អែកនឹងមកជាក់ជាមិនខាន។"
  },
  {
    "word": "报名",
    "pinyin": "bào míng",
    "meaning": "ចុះ​ឈ្មោះ",
    "example": "他已经报名参加比赛了。",
    "example_pinyin": "tā yǐ jīng bào míng cān jiā bǐ sài le.",
    "example_kh": "គាត់បានចុះឈ្មោះចូលរួមប្រកួតរួចរាល់។"
  },
  {
    "word": "抱",
    "pinyin": "bào",
    "meaning": "សង្កត់",
    "example": "妈妈抱着孩子。",
    "example_pinyin": "mā mā bào zhe hái zi.",
    "example_kh": "ម៉ាក់កំពុងសង្កត់កូន។"
  },
  {
    "word": "抱歉",
    "pinyin": "bào qiàn",
    "meaning": "សុំទោស",
    "example": "很抱歉，我来晚了。",
    "example_pinyin": "hěn bào qiàn, wǒ lái wǎn le.",
    "example_kh": "សុំទោសខ្ញុំមកយឺត។"
  },
  {
    "word": "倍",
    "pinyin": "bèi",
    "meaning": "ដង",
    "example": "这个房子的价格是去年的两倍。",
    "example_pinyin": "zhè ge fáng zi de jià gé shì qù nián de liǎng bèi.",
    "example_kh": "តម្លៃផ្ទះនេះគឺជាពីរដងនៃឆ្នាំមុន។"
  },
  {
    "word": "本来",
    "pinyin": "běn lái",
    "meaning": "ដើមឡើយ",
    "example": "我本来不想去的。",
    "example_pinyin": "wǒ běn lái bù xiǎng qù de.",
    "example_kh": "ដើមឡើយខ្ញុំមិនចង់ទៅទេ។"
  },
  {
    "word": "笨",
    "pinyin": "bèn",
    "meaning": "ឆោតល្ងង់",
    "example": "他不是笨，只是没认真学。",
    "example_pinyin": "tā bú shì bèn, zhǐ shì méi rèn zhēn xué.",
    "example_kh": "គាត់មិនឆោតទេ គ្រាន់តែមិនស៊ើបអានឱ្យម៉ត់ចត់ប៉ុណ្ណោះ។"
  },
  {
    "word": "比如",
    "pinyin": "bǐ rú",
    "meaning": "ដូចជា",
    "example": "我喜欢吃水果，比如苹果和香蕉。",
    "example_pinyin": "wǒ xǐ huān chī shuǐ guǒ, bǐ rú píng guǒ hé xiāng jiāo.",
    "example_kh": "ខ្ញុំចូលចិត្តញាំផ្លែឈើ ដូចជា ផ្លែប៉ោម និងចេក។"
  }
],
6:[
  {
    "word": "挨",
    "pinyin": "ái",
    "meaning": "រងទុក្ខ",
    "example": "他挨了一顿打。",
    "example_pinyin": "tā ái le yí dùn dǎ.",
    "example_kh": "គាត់បានរងការដាស់តឿន។"
  },
  {
    "word": "癌症",
    "pinyin": "ái zhèng",
    "meaning": "មហារីក",
    "example": "他被诊断患有癌症。",
    "example_pinyin": "tā bèi zhěn duàn huàn yǒu ái zhèng.",
    "example_kh": "គាត់ត្រូវបានវេជ្ជបញ្ជាក់ថាមានជំងឺមហារីក។"
  },
  {
    "word": "暧昧",
    "pinyin": "ài mèi",
    "meaning": "មិនច្បាស់",
    "example": "他们之间的关系很暧昧。",
    "example_pinyin": "tā men zhī jiān de guān xì hěn ài mèi.",
    "example_kh": "ទំនាក់ទំនងរវាងពួកគេមិនច្បាស់លាស់។"
  },
  {
    "word": "爱不释手",
    "pinyin": "ài bù shì shǒu",
    "meaning": "ស្រលាញ់ខ្លាំងដល់មិនចង់ដាក់ចោល",
    "example": "他对这本书爱不释手。",
    "example_pinyin": "tā duì zhè běn shū ài bù shì shǒu.",
    "example_kh": "គាត់ស្រលាញ់សៀវភៅនេះខ្លាំងណាស់។"
  },
  {
    "word": "爱戴",
    "pinyin": "ài dài",
    "meaning": "ស្រឡាញ់គោរព",
    "example": "他深受人民的爱戴。",
    "example_pinyin": "tā shēn shòu rén mín de ài dài.",
    "example_kh": "គាត់ត្រូវបានប្រជាជនស្រឡាញ់និងគោរព។"
  }
]

  };

  
  const studyButtons = document.querySelectorAll(".study-btn");
  const display = document.getElementById("vocab-display");
  
  studyButtons.forEach(button => {
    // Get the data-level attribute to determine which HSK level to show
    const levelBtn = button.previousElementSibling;
    const level = levelBtn.getAttribute("data-level");
  
    button.addEventListener("click", () => {
      const words = vocabData[level] || [];
  
      // If no words exist for the selected level, show a message
      if (words.length === 0) {
        display.innerHTML = `<p>មិនមានទិន្នន័យសម្រាប់ HSK ថ្នាក់ទី ${level} ទេ។</p>`;
        return;
      }
  
      // Generate HTML content dynamically for each word
      const html = words.map(item => `
        <div class="vocab-item">
          <h3>${item.word} (${item.pinyin})</h3>
          <p><strong>អត្ថន័យ (Khmer):</strong> ${item.meaning}</p>
          <p><strong>ឧទាហរណ៍:</strong> ${item.example}</p>
          <p><strong>Pinyin:</strong> ${item.example_pinyin}</p>
          <p><strong>បកប្រែខ្មែរ:</strong> ${item.example_kh}</p>
        </div>
      `).join("");
  
      // Update the display with the generated HTML
      display.innerHTML = html;
    });
  });
  
