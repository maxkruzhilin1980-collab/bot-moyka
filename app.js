const CITIES = [
  ["tlv", "Тель-Авив", "תל אביב", "Tel Aviv"],
  ["rishon", "Ришон-ле-Цион", "ראשון לציון", "Rishon LeZion"],
  ["netanya", "Нетания", "נתניה", "Netanya"],
  ["haifa", "Хайфа", "חיפה", "Haifa"],
  ["jerusalem", "Иерусалим", "ירושלים", "Jerusalem"],
  ["petah", "Петах-Тиква", "פתח תקווה", "Petah Tikva"],
  ["ashdod", "Ашдод", "אשדוד", "Ashdod"],
  ["beer", "Беэр-Шева", "באר שבע", "Beersheba"],
  ["holon", "Холон", "חולון", "Holon"],
  ["herzliya", "Герцлия", "הרצליה", "Herzliya"],
  ["rehovot", "Реховот", "רחובות", "Rehovot"],
  ["eilat", "Эйлат", "אילת", "Eilat"],
  ["ashkelon", "Ашкелон", "אשקלון", "Ashkelon"],
  ["kfar", "Кфар-Саба", "כפר סבא", "Kfar Saba"],
  ["batyam", "Бат-Ям", "בת ים", "Bat Yam"],
  ["modiin", "Модиин", "מודיעין", "Modiin"],
];
const TRADES = [
  ["tile", "Плитка", "ריצוף / קרמיקה", "Tiling"],
  ["elec", "Электрика", "חשמל", "Electrical"],
  ["paint", "Малярка", "צבע", "Painting"],
  ["plumb", "Сантехника", "אינסטלציה", "Plumbing"],
  ["gypsum", "Гипсокартон", "גבס", "Drywall"],
  ["ac", "Кондиционеры", "מיזוג", "Air conditioning"],
  ["alum", "Алюминий / окна", "אלומיניום", "Windows / aluminum"],
  ["frame", "Каркас", "שלד", "Framing"],
  ["reno", "Ремонт под ключ", "שיפוץ כללי", "Full renovation"],
  ["facade", "Фасадные работы", "עבודות חזית", "Facade works"],
  ["other", "Прочее", "אחר", "Other"],
];

const WORKS = {
  tile: [
    ["floor", "Пол / комната", "ריצוף חדר", "Room floor"],
    ["bath", "Стены и пол ванной", "ריצוף וחיפוי חדר רחצה", "Bathroom tile"],
    ["shower", "Душевой поддон / ниша", "מקלחון / נישה", "Shower / niche"],
    ["kitchen", "Фартук кухни", "חיפוי מטבח", "Kitchen backsplash"],
    ["steps", "Ступени / крыльцо", "מדרגות / כניסה", "Steps / entrance"],
    ["grout", "Затирка / ремонт швов", "רובה / תיקון מישקים", "Grout repair"],
  ],
  elec: [
    ["panel", "Щиток", "לוח חשמל", "Electrical panel"],
    ["points", "Точки розеток и выключателей", "נקודות חשמל", "Outlets and switches"],
    ["light", "Освещение / споты", "תאורה", "Lighting"],
    ["floorheat", "Тёплый пол", "חימום תת רצפתי", "Underfloor heating"],
    ["weak", "Слаботочка / интернет", "תקשורת", "Low voltage / internet"],
  ],
  paint: [
    ["walls", "Стены", "קירות", "Walls"],
    ["ceiling", "Потолок", "תקרה", "Ceiling"],
    ["out", "Фасад / балкон", "חזית / מרפסת", "Facade / balcony"],
    ["prep", "Шпаклёвка и грунт", "שפכטל והכנה", "Prep and primer"],
    ["wallp", "Обои", "טפטים", "Wallpaper"],
  ],
  plumb: [
    ["bath", "Разводка ванной", "אינסטלציה בחדר רחצה", "Bathroom plumbing"],
    ["kitchen", "Кухня / мойка", "מטבח / כיור", "Kitchen sink"],
    ["leak", "Протечка", "נזילה", "Leak"],
    ["boiler", "Бойлер", "דוד שמש / חשמל", "Water heater"],
    ["sewer", "Канализация", "ביוב", "Sewage"],
  ],
  gypsum: [
    ["walls", "Стены / перегородки", "קירות / מחיצות", "Walls / partitions"],
    ["ceiling", "Потолок", "תקרה", "Ceiling"],
    ["niche", "Ниши и короба", "נישות וארגזים", "Niches and boxes"],
    ["door", "Откосы дверей", "משקופים", "Door frames"],
    ["spot", "Потолок под споты", "תקרה לתושבות", "Ceiling for spotlights"],
  ],
  ac: [
    ["split", "Поставить сплит", "התקנת מזגן", "Install split AC"],
    ["multi", "Мультисплит", "מולטי ספליט", "Multi-split"],
    ["service", "Сервис / чистка", "שירות / ניקוי", "Service / cleaning"],
    ["duct", "Воздуховоды", "תעלות", "Ducts"],
  ],
  alum: [
    ["win", "Окна", "חלונות", "Windows"],
    ["door", "Двери", "דלתות", "Doors"],
    ["shutter", "Рольставни", "תריסים", "Shutters"],
    ["rail", "Перила балкона", "מעקה מרפסת", "Balcony railing"],
  ],
  frame: [
    ["wall", "Стены каркаса", "קירות שלד", "Frame walls"],
    ["roof", "Крыша", "גג", "Roof"],
    ["conc", "Бетон / стяжка", "בטון / רצפה", "Concrete / screed"],
    ["open", "Проёмы", "פתחים", "Openings"],
  ],
  reno: [
    ["full", "Квартира под ключ", "דירה מפתח", "Turnkey apartment"],
    ["bath", "Только санузел", "רק חדר רחצה", "Bathroom only"],
    ["kitchen", "Только кухня", "רק מטבח", "Kitchen only"],
    ["room", "Одна комната", "חדר אחד", "One room"],
  ],
  facade: [
    ["paint", "Покраска фасада", "צביעת חזית", "Facade painting"],
    ["plaster", "Штукатурка / шпаклёвка", "טיח בחזית", "Facade plaster"],
    ["stone", "Камень / клинкер", "אבן / קלינקר", "Stone / clinker"],
    ["panels", "Монтаж панелей", "התקנת פאנלים", "Panel installation"],
    ["insul", "Утепление фасада", "בידוד חזית", "Facade insulation"],
    ["scaffold", "Леса / высота", "פיגומים / גובה", "Scaffolding / height"],
    ["clean", "Мойка фасада", "שטיפת חזית", "Facade cleaning"],
  ],
};

const FLAG_IDS = ["citizen", "resident", "permit", "height", "tools", "car", "crew"];
const FLAG_MARK = {
  citizen: "🇮🇱",
  resident: "🏠",
  permit: "📄",
  height: "🏗️",
  tools: "🛠️",
  car: "🚗",
  crew: "👷",
};

const I18N = {
  ru: {
    brand: "Kadlan",
    waHello: "Здравствуйте! Интересует размещённое вами на Kadlan.\nЭто: {kind}\nКатегория: {cat}\nОбъявление: {topic}\nЯ: {me}\nkadlan.co.il",
    heroTitle: "Кабланы и мастера находят друг друга",
    heroText: "Биржа стройки для Израиля. Пока бесплатно — заявка, отклик, WhatsApp.",
    iAmContractor: "Я каблан / заказчик",
    iAmContractorHint: "Нужна бригада или мастер на объект",
    iAmWorker: "Я мастер / бригада",
    iAmWorkerHint: "Ищу объекты рядом",
    feed: "Лента",
    newJob: "Заявка",
    postOrder: "Разместить заказ",
    postWork: "Предложить услугу",
    profile: "Профиль",
    more: "Ещё",
    all: "Все",
    filterJobs: "Мастера",
    waKindJob: "заказ",
    waKindOffer: "анкета мастера",
    waKindMember: "анкета",
    sortNew: "Новые",
    sortBest: "Сначала лучшие",
    cityPick: "Город",
    nearMe: "Рядом со мной",
    nearMeHint: "Определить по геолокации",
    radius0: "Только город",
    radius20: "+20 км",
    radius40: "+40 км",
    radius80: "+80 км",
    radiusAll: "Вся страна",
    pickTrade: "Профессия",
    allTrades: "Все профессии",
    demoTag: "Пример",
    filterOffers: "Заказы",
    badgeJob: "Заказ",
    badgeOffer: "Мастер свободен",
    emptyJobs: "Заказов пока нет.",
    emptyOffers: "Мастера ещё не выставили анкеты.",
    post: "Опубликовать",
    city: "Город",
    trade: "Работа",
    title: "Что нужно сделать",
    works: "Какие работы",
    otherText: "Прочее — напишите сами",
    desc: "Подробности",
    dates: "Когда",
    dateFrom: "С даты",
    dateTo: "По дату",
    budget: "Бюджет",
    budgetSum: "Сумма",
    budgetTalk: "По договорённости",
    payFilter: "Сумма заказа",
    payAll: "₪ любая",
    payTalk: "₪ по договорённости",
    pay1: "до ₪5,000",
    pay2: "₪5,000–15,000",
    pay3: "₪15,000–50,000",
    pay4: "₪50,000–150,000",
    pay5: "от ₪150,000",
    plan: "Чертёж / фото объекта",
    pickFile: "Выбрать файл",
    pickFiles: "Выбрать файлы",
    planHint: "Лучше JPG или PDF, до 2 МБ. Не HEIC и не видео.",
    extraDocs: "Документы",
    extraDocsHint: "Правила, требования. Формат: PDF или JPG, до 2 МБ.",
    noPlan: "Чертёж не приложен",
    noExtraDocs: "Других документов нет",
    openFile: "Открыть",
    fileLost: "Файл не сохранился. Нажмите — откроется образец схемы.",
    noDesc: "Отдельный текст не написали — работы указаны выше.",
    flagsNeed: "Что нужно на объекте",
    flagsHave: "Статус и возможности",
    flagsHint: "Нажмите на значок — будет расшифровка.",
    flag_citizen: "Гражданин",
    flag_citizen_h: "Гражданин Израиля (эзрах).",
    flag_resident: "Постоянный житель",
    flag_resident_h: "Тошав кева — постоянный житель Израиля.",
    flag_permit: "Есть разрешение на работу",
    flag_permit_h: "Есть действующий хетер авода / разрешение на работу в Израиле.",
    flag_height: "Разрешение на высоту",
    flag_height_h: "Есть ишур авода бе-гова — допуск к работе на высоте.",
    flag_tools: "Есть инструмент",
    flag_tools_h: "Свой инструмент на объект.",
    flag_car: "Есть машина",
    flag_car_h: "Есть транспорт, может доехать и привезти материал.",
    flag_crew: "Работаем бригадой",
    flag_crew_h: "Выходит не один человек, а бригада.",
    tradesNeed: "Какие работы нужны",
    tradesCan: "Что умеете",
    legalStatus: "Гражданин / житель / разрешение",
    legalOne: "Можно выбрать только один вариант",
    objectPhoto: "Фото объекта",
    workRadius: "Радиус выезда",
    pickOne: "Отметьте хотя бы одну работу",
    phone: "WhatsApp",
    name: "Имя / компания",
    save: "Сохранить",
    empty: "Пока нет описания.",
    noMemberPosts: "Объявлений пока нет.",
    noMemberPostsWorker: "Мастер ещё не выставил «ищу работу».",
    noMemberPostsKablan: "Каблан ещё не выставил заказ.",
    wa: "WhatsApp",
    posted: "Заявка в ленте",
    ad: "Сюда позже встанет реклама магазина материалов — сервис для кабланов и мастеров бесплатный.",
    demo: "Примеры заявок уже в ленте. Свои хранятся в этом телефоне.",
    switchWorker: "Войти как мастер",
    switchContractor: "Войти как каблан",
    nowContractor: "Зарегистрирован как каблан",
    nowWorker: "Зарегистрирован как мастер",
    changeRole: "Сменить роль",
    seek: "Ищу работу",
    seekHint: "Профессия, что умеете и города. И каблан, и мастер могут выставить поиск работы.",
    seekSave: "Выставить в ленту",
    seekingIn: "Ищу работу",
    login: "Вход",
    loginFail: "Неверный телефон или пароль.",
    notRegistered: "Этот номер не зарегистрирован. Нажмите Регистрация вверху.",
    badPassword: "Неверный пароль.",
    register: "Регистрация",
    password: "Пароль",
    who: "Кто вы",
    sphere: "Сфера",
    needAuth: "Ленту видят все. Разместить заказ или искать работу — только после регистрации.",
    logout: "Выйти",
    guests: "Гости по ссылке",
    guestsHint: "Кто хотя бы раз открыл приложение",
    guestsEmpty: "Пока никто не заходил или облако не ответило.",
    guestAnon: "Гость",
    guestWhen: "первый заход",
    admin: "Админ",
    adminIn: "Войти как админ",
    adminOut: "Выйти из админки",
    adminPin: "Код администратора",
    adminBad: "Неверный код",
    adminStats: "Статистика",
    statGuests: "Гостей",
    statWa: "В WhatsApp",
    statWaToday: "WhatsApp сегодня",
    waClicks: "Кто открывал WhatsApp",
    waFrom: "Кто нажал",
    waTo: "Кому писали",
    waEmpty: "Пока никто не нажимал WhatsApp.",
    statReg: "Регистраций",
    statJobs: "Заказов",
    statOffers: "Предложений мастеров",
    statToday: "Заходили сегодня",
    cloudOn: "Общая лента включена — заявки видят все.",
    cloudOff: "Нет сети. Пока видны только заявки с этого телефона.",
    myActive: "Актуальные",
    myHistory: "История",
    myActiveHint: "То, что сейчас в ленте",
    myHistoryHint: "То, что вы уже снимали с ленты",
    toHistory: "В историю",
    toActive: "Вернуть в ленту",
    emptyMine: "Вы ещё ничего не выставляли",
    emptyHistory: "История пустая",
    deleteJob: "Удалить",
    confirmDelete: "Удалить заявку навсегда? Её не будет в ленте и в профиле.",
    deleted: "Заявка удалена",
    backProfile: "К профилю",
    hasAccount: "Уже есть вход",
    noAccount: "Нет аккаунта — регистрация",
    rating: "Рейтинг",
    reviews: "отзывов",
    noRating: "Пока нет отзывов",
    badgePhone: "Телефон подтверждён",
    badgeDocs: "Документы загружены",
    badgeIns: "Есть страховка",
    badgeJobs: "Закрытые объекты",
    badgeWarn: "Есть жалоба",
    docsTitle: "Документы доверия",
    docsHint: "Пока без проверки человеком. Значок появится после загрузки.",
    addReview: "Отзыв после сдачи работы",
    reviewText: "Короткий отзыв",
    reviewSave: "Поставить оценку",
    stars: "Оценка",
    closedPlus: "Отметить объект сданным",
    members: "Участники",
    ratingBoard: "Рейтинг",
    boardFeed: "Лента",
    searchCode: "Код или имя",
    memberCode: "Код участника",
    topWorkers: "Лучшие мастера",
    topContractors: "Лучшие кабланы",
    uploadDocs: "Загрузить документы",
    docsList: "Загружено",
    viewReviews: "Смотреть отзывы",
    hideReviews: "Скрыть отзывы",
    writeReview: "Написать отзыв мастеру",
    writeReviewC: "Написать отзыв каблану",
    sendReview: "Отправить отзыв",
    reviewTo: "Отзыв для",
    needLoginReview: "Чтобы написать отзыв — войдите.",
    reviewOk: "Отзыв сохранён",
    reviewOnce: "С этого профиля отзыв этому участнику уже оставлен",
    reviewSelf: "Нельзя поставить оценку своему профилю",
    reviewNeedWork: "Отзыв можно оставить после контакта: напишите в WhatsApp или отметьте «мы работали»",
    workedBtn: "Мы работали",
    workedOk: "Контакт записан. Теперь можно оставить отзыв",
    rulesTab: "Правила",
    rulesTitle: "Как устроен рейтинг Kadlan",
    rulesLead: "Чтобы рейтинг был честным. Коротко, без мелкого шрифта.",
    rules1: "Подтверждённый аккаунт. Загрузите теудат зеут, осэк или выписку из реестра компаний. Пока документа нет — в рейтинге вы ниже, значок серый.",
    rules2: "Отзыв только после работы. Оценить человека можно, если вы писали ему в WhatsApp из приложения или нажали «мы работали». Один отзыв с одного профиля.",
    rules3: "Жалоба. Напишите причину. После двух жалоб от разных людей появится красный значок.",
    rules4: "Свежие отзывы сильнее. Оценкам старше 12 месяцев вес меньше. В карточке видна дата последнего отзыва.",
    rules5: "Полнота профиля 0–100. Фото, город, сфера, телефон, документы и 3 фото работ. Ниже 50% — не в топе рейтинга.",
    rules6: "Скорость ответа. Если профиль не обновляли больше 14 дней — пометка «редко отвечает».",
    rules7: "Нельзя хвалить себя и свои номера. Повторная оценка тому же человеку с того же профиля закрыта.",
    rules8: "Документы и чертежи. Лучший формат: JPG для фото и PDF для бумаг. Размер до 2 МБ. Не прикладывайте HEIC, видео и тяжёлые PNG — они не открываются у других.",
    badgeVerified: "Подтверждён",
    badgePending: "Документ на проверке",
    badgeUnverified: "Не подтверждён",
    badgeSlow: "Редко отвечает",
    badgeFresh: "Активен",
    complete: "Профиль заполнен",
    lastReview: "Последний отзыв",
    verifyTitle: "Подтверждение личности",
    verifyHint: "Теудат зеут, осэк машур или רשם החברות. После загрузки появится значок.",
    complain: "Пожаловаться",
    complainWhy: "Причина жалобы",
    complainOk: "Жалоба отправлена",
    complainNeed: "Войдите, чтобы пожаловаться",
    complainSelf: "На себя жалобу оставить нельзя",
    complainOnce: "С этого профиля жалоба уже есть",
    waReview: "Отзыв на Kadlan",
    waViewed: "Ваш профиль посмотрели на Kadlan",
    waStars: "оценка",
    details: "Подробнее",
    back: "Назад в ленту",
    postedBy: "Кто выставил",
    jobDetails: "О заказе",
    offerDetails: "Об анкете",
    documents: "Документы",
    noDocs: "Документов пока нет",
    docsPrivate: "Документы видит только владелец",
    docsRequest: "Запросить документы",
    docsRequested: "Запрос отправлен",
    docsGranted: "Документы открыты",
    docsInbox: "Запросы на документы",
    docsGrant: "Открыть",
    docsDeny: "Отклонить",
    worksDone: "Состав работ",
    photo: "Фото профиля",
    photoChange: "Нажмите на фото, чтобы сменить",
    installApp: "Установить Kadlan на телефон",
    installIos: "На iPhone: Поделиться → На экран «Домой»",
    installLater: "Позже",
    helpTab: "Помощь",
    helpTitle: "Вопрос — ответ",
    helpLead: "Коротко, как пользоваться Kadlan. Если не нашли ответ — напишите в поддержку.",
    helpWrite: "Написать в поддержку",
    helpQ1: "Как зарегистрироваться?",
    helpA1: "Профиль → регистрация: имя, телефон, пароль, кто вы — каблан или мастер. Ленту видно без входа. Заказ и «ищу работу» — после регистрации.",
    helpQ2: "Как выложить заказ?",
    helpA2: "Внизу «Есть заказ». Работы, город, даты, бюджет. Телефон берётся из профиля. Чертёж — по желанию.",
    helpQ3: "Как искать работу?",
    helpA3: "Внизу «Ищу работу». Профессии, города, фото работ. Объявление попадёт в ленту «Ищу мастера».",
    helpQ4: "Как написать человеку?",
    helpA4: "В ленте зелёная кнопка WhatsApp. На карточке заявки кнопка в блоке «Кто выставил».",
    helpQ5: "Как поставить приложение на телефон?",
    helpA5: "Android: сверху «Установить Kadlan». iPhone: Поделиться → На экран «Домой».",
    helpQ6: "Как сменить фото и телефон?",
    helpA6: "Профиль: нажмите на круглое фото. Имя и до трёх номеров — в форме, затем Сохранить. Первый номер — WhatsApp и вход.",
    helpQ7: "Почему нет ленты на Android?",
    helpA7: "Откройте kadlan.co.il в Chrome, не во встроенном браузере Facebook. Обновите страницу.",
    helpQ8: "Кто видит отзывы и участников?",
    helpA8: "Только зарегистрированные. Один человек ставит другому один отзыв.",
    loginToReview: "Отзыв может оставить только зарегистрированный пользователь.",
    loginToMembers: "Участников видят только зарегистрированные.",
    workPhotos: "Фото работ",
    workPhotosHint: "Фото работ: JPG, до 6 штук. Не видео и не HEIC с iPhone.",
    worksCount: "Работ",
    myPage: "Личная страница",
  },
  he: {
    brand: "Kadlan",
    waHello: "שלום, מעניין אותי מה שפרסמתם ב-Kadlan.\nזה: {kind}\nקטגוריה: {cat}\nמודעה: {topic}\nאני: {me}\nkadlan.co.il",
    heroTitle: "קבלנים ומקצוענים מוצאים אחד את השני",
    heroText: "בורסת בנייה לישראל. בינתיים בחינם — מודעה, פנייה, וואטסאפ.",
    iAmContractor: "אני קבלן / מזמין",
    iAmContractorHint: "צריך בעל מקצוע או צוות לפרויקט",
    iAmWorker: "אני בעל מקצוע / צוות",
    iAmWorkerHint: "מחפש עבודות באזור",
    feed: "לוח",
    newJob: "מודעה",
    postOrder: "פרסם הזמנה",
    postWork: "הצע שירות",
    profile: "פרופיל",
    more: "עוד",
    all: "הכל",
    filterJobs: "מקצוענים",
    waKindJob: "הזמנה",
    waKindOffer: "כרטיס מקצוען",
    waKindMember: "כרטיס",
    sortNew: "חדשים",
    sortBest: "הכי טובים",
    cityPick: "עיר",
    nearMe: "לידי",
    nearMeHint: "לפי מיקום",
    radius0: "רק העיר",
    radius20: "+20 ק״מ",
    radius40: "+40 ק״מ",
    radius80: "+80 ק״מ",
    radiusAll: "כל הארץ",
    pickTrade: "מקצוע",
    allTrades: "כל המקצועות",
    demoTag: "דוגמה",
    filterOffers: "הזמנות",
    badgeJob: "הזמנה",
    badgeOffer: "מקצוען פנוי",
    emptyJobs: "אין הזמנות עדיין.",
    emptyOffers: "אין עדיין כרטיסי מקצוענים.",
    post: "פרסום",
    city: "עיר",
    trade: "מקצוע",
    title: "מה צריך לעשות",
    works: "אילו עבודות",
    otherText: "אחר — כתבו בעצמכם",
    desc: "פרטים",
    dates: "מתי",
    dateFrom: "מתאריך",
    dateTo: "עד תאריך",
    budget: "תקציב",
    budgetSum: "סכום",
    budgetTalk: "לפי סיכום",
    payFilter: "סכום הזמנה",
    payAll: "₪ כל סכום",
    payTalk: "₪ לפי סיכום",
    pay1: "עד ₪5,000",
    pay2: "₪5,000–15,000",
    pay3: "₪15,000–50,000",
    pay4: "₪50,000–150,000",
    pay5: "מ־₪150,000",
    plan: "שרטוט / תמונת האתר",
    pickFile: "בחר קובץ",
    pickFiles: "בחר קבצים",
    planHint: "עדיף JPG או PDF עד 2MB. לא HEIC ולא וידאו.",
    extraDocs: "מסמכים",
    extraDocsHint: "כללים ודרישות. PDF או JPG עד 2MB.",
    noPlan: "אין שרטוט",
    noExtraDocs: "אין מסמכים נוספים",
    openFile: "פתיחה",
    fileLost: "הקובץ לא נשמר. אפשר לפתוח דוגמת תוכנית.",
    noDesc: "אין טקסט נוסף — העבודות מסומנות למעלה.",
    flagsNeed: "מה נדרש באתר",
    flagsHave: "סטטוס ויכולות",
    flagsHint: "לחצו על הסימון לפרוט.",
    flag_citizen: "אזרח",
    flag_citizen_h: "אזרח ישראל.",
    flag_resident: "תושב קבע",
    flag_resident_h: "תושב קבע בישראל.",
    flag_permit: "יש היתר עבודה",
    flag_permit_h: "יש היתר עבודה בתוקף בישראל.",
    flag_height: "אישור עבודה בגובה",
    flag_height_h: "יש אישור עבודה בגובה.",
    flag_tools: "יש כלים",
    flag_tools_h: "מגיע עם כלים משלו.",
    flag_car: "יש רכב",
    flag_car_h: "יש רכב — הגעה והובלת חומר.",
    flag_crew: "עובדים כצוות",
    flag_crew_h: "מגיעה קבוצה / בריגדה, לא אדם אחד.",
    tradesNeed: "אילו עבודות צריך",
    tradesCan: "מה אתם יודעים לעשות",
    legalStatus: "אזרח / תושב / היתר",
    legalOne: "אפשר לבחור אפשרות אחת",
    objectPhoto: "תמונת האתר",
    workRadius: "רדיוס נסיעה",
    pickOne: "סמנו לפחות מקצוע אחד",
    phone: "וואטסאפ",
    name: "שם / חברה",
    save: "שמירה",
    empty: "אין תיאור עדיין.",
    noMemberPosts: "אין מודעות עדיין.",
    noMemberPostsWorker: "הפועל עוד לא פרסם «מחפש עבודה».",
    noMemberPostsKablan: "הקבלן עוד לא פרסם הזמנה.",
    wa: "WhatsApp",
    posted: "המודעה בלוח",
    ad: "כאן תהיה פרסומת לחנות חומרים. השירות לקבלנים ולמקצוענים בחינם.",
    demo: "יש מודעות לדוגמה. המודעות שלכם נשמרות בטלפון.",
    switchWorker: "כניסה כבעל מקצוע",
    switchContractor: "כניסה כקבלן",
    nowContractor: "נרשם כקבלן",
    nowWorker: "נרשם כבעל מקצוע",
    changeRole: "החלפת תפקיד",
    seek: "מחפש עבודה",
    seekHint: "מקצוע, מה אתם יודעים ואילו ערים. גם קבלן וגם מקצוען יכולים לפרסם חיפוש עבודה.",
    seekSave: "שמירת כרטיס",
    seekingIn: "מחפש עבודה",
    login: "כניסה",
    loginFail: "טלפון או סיסמה שגויים.",
    notRegistered: "המספר לא רשום. לחץ על הרשמה למעלה.",
    badPassword: "סיסמה שגויה.",
    register: "הרשמה",
    password: "סיסמה",
    who: "מי אתם",
    sphere: "תחום",
    needAuth: "את הלוח רואים כולם. פרסום הזמנה או חיפוש עבודה — רק אחרי הרשמה.",
    logout: "יציאה",
    guests: "אורחים מהקישור",
    guestsHint: "מי שפתח את האפליקציה לפחות פעם אחת",
    guestsEmpty: "עדיין אין כניסות.",
    guestAnon: "אורח",
    guestWhen: "כניסה ראשונה",
    admin: "מנהל",
    adminIn: "כניסת מנהל",
    adminOut: "יציאה מניהול",
    adminPin: "קוד מנהל",
    adminBad: "קוד שגוי",
    adminStats: "סטטיסטיקה",
    statGuests: "אורחים",
    statWa: "לוואטסאפ",
    statWaToday: "וואטסאפ היום",
    waClicks: "מי פתח וואטסאפ",
    waFrom: "מי לחץ",
    waTo: "למי כתבו",
    waEmpty: "עדיין אין לחיצות וואטסאפ.",
    statReg: "נרשמים",
    statJobs: "הזמנות",
    statOffers: "הצעות בעלי מקצוע",
    statToday: "נכנסו היום",
    cloudOn: "לוח משותף פעיל — כולם רואים את המודעות.",
    cloudOff: "אין רשת. רואים רק מודעות מהטלפון הזה.",
    myActive: "פעילים",
    myHistory: "היסטוריה",
    myActiveHint: "מה שמופיע בלוח עכשיו",
    myHistoryHint: "מה שהורדתם מהלוח",
    toHistory: "להיסטוריה",
    toActive: "להחזיר ללוח",
    emptyMine: "עדיין לא פרסמתם",
    emptyHistory: "אין היסטוריה",
    deleteJob: "מחיקה",
    confirmDelete: "למחוק את המודעה לצמיתות? היא לא תופיע בלוח ולא בפרופיל.",
    deleted: "המודעה נמחקה",
    backProfile: "חזרה לפרופיל",
    hasAccount: "כבר רשומים",
    noAccount: "אין חשבון — הרשמה",
    rating: "דירוג",
    reviews: "ביקורות",
    noRating: "עדיין אין ביקורות",
    badgePhone: "טלפון מאומת",
    badgeDocs: "מסמכים הועלו",
    badgeIns: "יש ביטוח",
    badgeJobs: "עבודות שנסגרו",
    badgeWarn: "יש תלונה",
    docsTitle: "מסמכי אמון",
    docsHint: "בינתיים בלי בדיקת אדם. הסימון יופיע אחרי העלאה.",
    addReview: "ביקורת אחרי מסירת העבודה",
    reviewText: "ביקורת קצרה",
    reviewSave: "שמירת ציון",
    stars: "ציון",
    closedPlus: "לסמן עבודה כהושלמה",
    members: "משתתפים",
    ratingBoard: "דירוג",
    boardFeed: "לוח",
    searchCode: "קוד או שם",
    memberCode: "קוד משתתף",
    topWorkers: "מקצוענים מובילים",
    topContractors: "קבלנים מובילים",
    uploadDocs: "העלאת מסמכים",
    docsList: "הועלה",
    viewReviews: "לראות ביקורות",
    hideReviews: "להסתיר ביקורות",
    writeReview: "לכתוב ביקורת למקצוען",
    writeReviewC: "לכתוב ביקורת לקבלן",
    sendReview: "שליחת ביקורת",
    reviewTo: "ביקורת עבור",
    needLoginReview: "כדי לכתוב ביקורת צריך להיכנס.",
    reviewOk: "הביקורת נשמרה",
    reviewOnce: "כבר השארת ביקורת למשתמש הזה מהפרופיל הזה",
    reviewSelf: "אי אפשר לדרג את הפרופיל של עצמך",
    reviewNeedWork: "אפשר לכתוב ביקורת אחרי יצירת קשר: וואטסאפ מתוך האפליקציה או «עבדנו יחד»",
    workedBtn: "עבדנו יחד",
    workedOk: "הקשר נשמר. עכשיו אפשר לכתוב ביקורת",
    rulesTab: "כללים",
    rulesTitle: "איך הדירוג עובד ב-Kadlan",
    rulesLead: "כדי שהדירוג יהיה הוגן. קצר ולעניין.",
    rules1: "חשבון מאומת. העלו תעודת זהות, עוסק או אישור מרשם החברות. בלי מסמך המקום בדירוג נמוך יותר.",
    rules2: "ביקורת רק אחרי עבודה. אפשר לדרג אחרי וואטסאפ מהאפליקציה או לחיצה על «עבדנו יחד». ביקורת אחת מכל פרופיל.",
    rules3: "תלונה עם תמונה. ציינו סיבה וצילום. אחרי שתי תלונות מאנשים שונים יופיע סימון אדום.",
    rules4: "ביקורות חדשות חזקות יותר. לביקורת מעל 12 חודשים משקל נמוך יותר.",
    rules5: "שלמות פרופיל 0–100. תמונה, עיר, תחום, טלפון, מסמכים ו-3 תמונות עבודה. מתחת ל-50% לא בראש הדירוג.",
    rules6: "מהירות מענה. אם לא עדכנו פרופיל מעל 14 יום — «נדיר שמגיב».",
    rules7: "אי אפשר לדרג את עצמך או את אותו אדם שוב מאותו פרופיל.",
    rules8: "מסמכים ושרטוטים: JPG לתמונה, PDF למסמך, עד 2MB. בלי HEIC, וידאו ו-PNG כבד.",
    badgeVerified: "מאומת",
    badgePending: "מסמך בבדיקה",
    badgeUnverified: "לא מאומת",
    badgeSlow: "נדיר שמגיב",
    badgeFresh: "פעיל",
    complete: "הפרופיל מלא",
    lastReview: "ביקורת אחרונה",
    verifyTitle: "אימות זהות",
    verifyHint: "תעודת זהות, עוסק מורשה או רשם החברות.",
    complain: "תלונה",
    complainWhy: "סיבת התלונה",
    complainOk: "התלונה נשלחה",
    complainNeed: "יש להיכנס כדי לשלוח תלונה",
    complainSelf: "אי אפשר להתלונן על עצמך",
    complainOnce: "כבר שלחת תלונה מהפרופיל הזה",
    waReview: "ביקורת ב-Kadlan",
    waViewed: "צפו בפרופיל שלך ב-Kadlan",
    waStars: "דירוג",
    details: "פרטים",
    back: "חזרה ללוח",
    postedBy: "מי פרסם",
    jobDetails: "על ההזמנה",
    offerDetails: "על הכרטיס",
    documents: "מסמכים",
    noDocs: "אין מסמכים עדיין",
    docsPrivate: "המסמכים גלויים רק לבעלים",
    docsRequest: "בקש מסמכים",
    docsRequested: "הבקשה נשלחה",
    docsGranted: "המסמכים פתוחים",
    docsInbox: "בקשות למסמכים",
    docsGrant: "אשר",
    docsDeny: "דחה",
    worksDone: "פירוט עבודות",
    photo: "תמונת פרופיל",
    photoChange: "לחצו על התמונה להחלפה",
    installApp: "התקנת Kadlan לטלפון",
    installIos: "באייפון: שיתוף → הוסף למסך הבית",
    installLater: "אחר כך",
    helpTab: "עזרה",
    helpTitle: "שאלה — תשובה",
    helpLead: "בקצרה איך משתמשים ב-Kadlan. לא מצאתם תשובה? כתבו לתמיכה.",
    helpWrite: "כתבו לתמיכה",
    helpQ1: "איך נרשמים?",
    helpA1: "פרופיל → הרשמה: שם, טלפון, סיסמה, קבלן או מקצוען. את הפיד רואים בלי כניסה. לפרסם — רק אחרי הרשמה.",
    helpQ2: "איך מפרסמים הזמנה?",
    helpA2: "למטה «יש הזמנה». עבודות, עיר, תאריכים, תקציב. הטלפון מגיע מהפרופיל.",
    helpQ3: "איך מחפשים עבודה?",
    helpA3: "למטה «מחפש עבודה». מקצועות, ערים, תמונות.",
    helpQ4: "איך כותבים?",
    helpA4: "בפיד כפתור WhatsApp. בכרטיס הזמנה — אצל «מי פרסם».",
    helpQ5: "איך מתקינים לטלפון?",
    helpA5: "אנדרואיד: «התקנת Kadlan». אייפון: שיתוף → מסך הבית.",
    helpQ6: "איך מחליפים תמונה וטלפון?",
    helpA6: "בפרופיל לחצו על התמונה העגולה. שם ועד 3 מספרים בטופס.",
    helpQ7: "למה הפיד ריק באנדרואיד?",
    helpA7: "פתחו ב-Chrome, לא מתוך פייסבוק, ורעננו.",
    helpQ8: "מי רואה חוות דעת?",
    helpA8: "רק משתמשים רשומים. חוות דעת אחת לאדם.",
    loginToReview: "רק משתמש רשום יכול להשאיר חוות דעת.",
    loginToMembers: "רק משתמשים רשומים רואים משתתפים.",
    workPhotos: "תמונות עבודות",
    workPhotosHint: "תמונות עבודה ב-JPG, עד 6. בלי וידאו ו-HEIC.",
    worksCount: "עבודות",
    myPage: "עמוד אישי",
  },
  en: {
    brand: "Kadlan",
    waHello: "Hello! I am interested in what you posted on Kadlan.\nThis is: {kind}\nCategory: {cat}\nListing: {topic}\nI am: {me}\nkadlan.co.il",
    heroTitle: "Contractors and tradespeople find each other",
    heroText: "A construction board for Israel. Free for now — post, reply, WhatsApp.",
    iAmContractor: "I am a contractor",
    iAmContractorHint: "I need a crew or a tradesperson",
    iAmWorker: "I am a tradesperson / crew",
    iAmWorkerHint: "I am looking for jobs nearby",
    feed: "Feed",
    newJob: "Post",
    postOrder: "Post a job",
    postWork: "Offer a service",
    profile: "Profile",
    more: "More",
    all: "All",
    filterJobs: "Pros",
    waKindJob: "an order",
    waKindOffer: "a master listing",
    waKindMember: "a profile",
    sortNew: "Newest",
    sortBest: "Best first",
    cityPick: "City",
    nearMe: "Near me",
    nearMeHint: "Use my location",
    radius0: "This city",
    radius20: "+20 km",
    radius40: "+40 km",
    radius80: "+80 km",
    radiusAll: "All Israel",
    pickTrade: "Trade",
    allTrades: "All trades",
    demoTag: "Sample",
    filterOffers: "Jobs",
    badgeJob: "Job",
    badgeOffer: "Pro available",
    emptyJobs: "No jobs yet.",
    emptyOffers: "No tradespeople posted yet.",
    post: "Publish",
    city: "City",
    trade: "Trade",
    title: "What needs to be done",
    works: "Work items",
    otherText: "Other — type it yourself",
    desc: "Details",
    dates: "When",
    dateFrom: "From",
    dateTo: "To",
    budget: "Budget",
    budgetSum: "Amount",
    budgetTalk: "To be agreed",
    payFilter: "Order budget",
    payAll: "₪ any",
    payTalk: "₪ negotiable",
    pay1: "up to ₪5,000",
    pay2: "₪5,000–15,000",
    pay3: "₪15,000–50,000",
    pay4: "₪50,000–150,000",
    pay5: "₪150,000+",
    plan: "Drawing / site photo",
    pickFile: "Choose file",
    pickFiles: "Choose files",
    planHint: "Best: JPG or PDF, under 2 MB. No HEIC or video.",
    extraDocs: "Documents",
    extraDocsHint: "Rules and requirements. PDF or JPG, under 2 MB.",
    noPlan: "No drawing attached",
    noExtraDocs: "No other documents",
    openFile: "Open",
    fileLost: "File was not saved. Tap to open a sample plan.",
    noDesc: "No extra text — the selected works are listed above.",
    flagsNeed: "What the site needs",
    flagsHave: "Status and capabilities",
    flagsHint: "Tap a badge to see what it means.",
    flag_citizen: "Citizen",
    flag_citizen_h: "Israeli citizen.",
    flag_resident: "Permanent resident",
    flag_resident_h: "Permanent resident of Israel (toshav keva).",
    flag_permit: "Work permit",
    flag_permit_h: "Valid Israeli work permit.",
    flag_height: "Height permit",
    flag_height_h: "Certified to work at height.",
    flag_tools: "Has tools",
    flag_tools_h: "Brings their own tools.",
    flag_car: "Has a car",
    flag_car_h: "Has a vehicle for travel and materials.",
    flag_crew: "Works as a crew",
    flag_crew_h: "Comes as a crew, not one person.",
    tradesNeed: "Which trades",
    tradesCan: "What you can do",
    legalStatus: "Citizen / resident / permit",
    legalOne: "Pick only one",
    objectPhoto: "Site photo",
    workRadius: "Travel radius",
    pickOne: "Select at least one trade",
    phone: "WhatsApp",
    name: "Name / company",
    save: "Save",
    empty: "No description yet.",
    noMemberPosts: "No listings yet.",
    noMemberPostsWorker: "This worker has not posted availability.",
    noMemberPostsKablan: "This contractor has not posted a job.",
    wa: "WhatsApp",
    posted: "Posted to the feed",
    ad: "Material-store ads will go here. The board stays free for contractors and trades.",
    demo: "Sample posts are in the feed. Your posts stay on this phone for now.",
    switchWorker: "Switch to tradesperson",
    switchContractor: "Switch to contractor",
    nowContractor: "Registered as contractor",
    nowWorker: "Registered as tradesperson",
    changeRole: "Change role",
    seek: "Looking for work",
    seekHint: "Trade, skills and cities. Both contractors and tradespeople can post this.",
    seekSave: "Post to feed",
    seekingIn: "Looking for work",
    login: "Log in",
    loginFail: "Wrong phone or password.",
    notRegistered: "This number is not registered. Use Sign up above.",
    badPassword: "Wrong password.",
    register: "Sign up",
    password: "Password",
    who: "Who are you",
    sphere: "Field",
    needAuth: "Anyone can browse the feed. Post a job or offer work after sign-up.",
    logout: "Log out",
    guests: "Link visitors",
    guestsHint: "Anyone who opened the app at least once",
    guestsEmpty: "No visits yet, or cloud is offline.",
    guestAnon: "Guest",
    guestWhen: "first visit",
    admin: "Admin",
    adminIn: "Admin login",
    adminOut: "Leave admin",
    adminPin: "Admin code",
    adminBad: "Wrong code",
    adminStats: "Statistics",
    statGuests: "Guests",
    statWa: "WhatsApp taps",
    statWaToday: "WhatsApp today",
    waClicks: "Who opened WhatsApp",
    waFrom: "Who tapped",
    waTo: "Who they wrote",
    waEmpty: "No WhatsApp taps yet.",
    statReg: "Signups",
    statJobs: "Jobs",
    statOffers: "Worker offers",
    statToday: "Visited today",
    cloudOn: "Shared feed is on — everyone can see posts.",
    cloudOff: "Offline. Only posts from this phone are visible.",
    myActive: "Active",
    myHistory: "History",
    myActiveHint: "What is live on the feed",
    myHistoryHint: "What you took off the feed",
    toHistory: "Move to history",
    toActive: "Put back on feed",
    emptyMine: "You have not posted yet",
    emptyHistory: "History is empty",
    deleteJob: "Delete",
    confirmDelete: "Delete this post forever? It will leave the feed and your profile.",
    deleted: "Post deleted",
    backProfile: "Back to profile",
    hasAccount: "Already have an account",
    noAccount: "No account — sign up",
    rating: "Rating",
    reviews: "reviews",
    noRating: "No reviews yet",
    badgePhone: "Phone verified",
    badgeDocs: "Documents uploaded",
    badgeIns: "Insured",
    badgeJobs: "Closed jobs",
    badgeWarn: "Open complaint",
    docsTitle: "Trust documents",
    docsHint: "Not human-checked yet. Badge appears after upload.",
    addReview: "Review after job is done",
    reviewText: "Short review",
    reviewSave: "Submit rating",
    stars: "Score",
    closedPlus: "Mark job completed",
    members: "Members",
    ratingBoard: "Ranking",
    boardFeed: "Feed",
    searchCode: "Code or name",
    memberCode: "Member code",
    topWorkers: "Top tradespeople",
    topContractors: "Top contractors",
    uploadDocs: "Upload documents",
    docsList: "Uploaded",
    viewReviews: "See reviews",
    hideReviews: "Hide reviews",
    writeReview: "Write a review for the pro",
    writeReviewC: "Write a review for the contractor",
    sendReview: "Send review",
    reviewTo: "Review for",
    needLoginReview: "Log in to write a review.",
    reviewOk: "Review saved",
    reviewOnce: "This profile already reviewed this member",
    reviewSelf: "You cannot rate your own profile",
    reviewNeedWork: "Review after contact: WhatsApp from the app or tap “we worked together”",
    workedBtn: "We worked together",
    workedOk: "Contact saved. You can leave a review now",
    rulesTab: "Rules",
    rulesTitle: "How Kadlan rating works",
    rulesLead: "Fair ranking, stated plainly.",
    rules1: "Verified account. Upload ID, osek, or company extract. Unverified profiles rank lower.",
    rules2: "Review only after work. Rate after WhatsApp from the app or “we worked together”. One review per profile.",
    rules3: "Complaint with photo. After two complaints from different people a red badge appears.",
    rules4: "Fresh reviews weigh more. Reviews older than 12 months count less.",
    rules5: "Profile completeness 0–100. Photo, city, trade, phone, documents and 3 work photos. Below 50% stays out of the top.",
    rules6: "Response speed. No profile update for 14 days — “rarely replies”.",
    rules7: "No self-reviews. Same profile cannot rate the same member twice.",
    rules8: "Documents and drawings: JPG for photos, PDF for papers, under 2 MB. No HEIC, video, or heavy PNG.",
    badgeVerified: "Verified",
    badgePending: "Document in review",
    badgeUnverified: "Not verified",
    badgeSlow: "Rarely replies",
    badgeFresh: "Active",
    complete: "Profile complete",
    lastReview: "Last review",
    verifyTitle: "Identity check",
    verifyHint: "Teudat zehut, osek, or company registry extract.",
    complain: "Report",
    complainWhy: "Reason",
    complainOk: "Complaint sent",
    complainNeed: "Log in to send a complaint",
    complainOnce: "You already sent a complaint",
    complainSelf: "You cannot report yourself",
    waReview: "Review on Kadlan",
    waViewed: "Someone viewed your Kadlan profile",
    waStars: "rating",
    details: "Details",
    back: "Back to feed",
    postedBy: "Posted by",
    jobDetails: "About the job",
    offerDetails: "About the profile",
    documents: "Documents",
    noDocs: "No documents yet",
    docsPrivate: "Documents are private",
    docsRequest: "Request documents",
    docsRequested: "Request sent",
    docsGranted: "Documents unlocked",
    docsInbox: "Document requests",
    docsGrant: "Allow",
    docsDeny: "Deny",
    worksDone: "Work items",
    photo: "Profile photo",
    photoChange: "Tap the photo to change it",
    installApp: "Install Kadlan on your phone",
    installIos: "iPhone: Share → Add to Home Screen",
    installLater: "Later",
    helpTab: "Help",
    helpTitle: "Questions",
    helpLead: "Short answers. If you need more, message support.",
    helpWrite: "Message support",
    helpQ1: "How do I sign up?",
    helpA1: "Profile → register: name, phone, password, contractor or tradesperson. The feed is public. Posting needs an account.",
    helpQ2: "How do I post a job?",
    helpA2: "Bottom tab “Need a crew”. Trades, city, dates, budget. Phone comes from your profile.",
    helpQ3: "How do I look for work?",
    helpA3: "Bottom tab “Looking for work”. Trades, cities, work photos.",
    helpQ4: "How do I message someone?",
    helpA4: "Green WhatsApp on the feed. On a job page it sits under “Posted by”.",
    helpQ5: "How do I install the app?",
    helpA5: "Android: Install Kadlan at the top. iPhone: Share → Add to Home Screen.",
    helpQ6: "How do I change photo and phone?",
    helpA6: "Profile: tap the round photo. Name and up to 3 numbers are in the form. First number is WhatsApp and login.",
    helpQ7: "Android feed is empty?",
    helpA7: "Open kadlan.co.il in Chrome, not the Facebook in-app browser, then refresh.",
    helpQ8: "Who can see reviews and members?",
    helpA8: "Signed-in users only. One review per person.",
    loginToReview: "Only registered users can leave a review.",
    loginToMembers: "Only registered users can see members.",
    workPhotos: "Work photos",
    workPhotosHint: "Work photos as JPG, up to 6. No video or HEIC.",
    worksCount: "Jobs",
    myPage: "Profile page",
  },
};

const DEMO = [
  { id: "d1", kind: "job", trade: "tile", trades: ["tile"], city: "netanya", titleRu: "Плитка ванная + пол 42 м²", titleHe: "ריצוף חדר רחצה ורצפה 42 מ״ר", titleEn: "Bathroom and floor tile 42 m²", dates: "23–26.09", budget: "₪ 4,800", phone: "0501110001", name: "Dana Build", posterCode: "K-10802", rating: 4.8, reviews: 14, docs: true, planName: "tohnit-bathroom.pdf", descRu: "Ванная 4.2 м² и пол комнаты. Плитка уже куплена, на объекте с 08:00. Нужен мастер на 3–4 дня.", descHe: "חדר רחצה 4.2 מ״ר ורצפת חדר. האריחים כבר באתר, כניסה מ-08:00. צריך מקצוען ל-3–4 ימים.", descEn: "4.2 m² bathroom plus room floor. Tiles on site, access from 08:00. Need a pro for 3–4 days." },
  { id: "d2", kind: "job", trade: "elec", trades: ["elec"], city: "rishon", titleRu: "Щиток и точки в новостройке", titleHe: "לוח חשמל ונקודות בדירה חדשה", titleEn: "Panel and outlets in a new flat", dates: "на этой неделе", budget: "", phone: "0501110002", name: "Yossi Electric", posterCode: "K-11017", rating: 4.2, reviews: 6, planName: "points-plan.jpg", planData: "icons/plan-sample.jpg", descRu: "Новая квартира, щиток 24 модуля, 18 точек. Есть частичная схема.", descHe: "דירה חדשה, לוח 24 מודול, 18 נקודות. יש תוכנית חלקית.", descEn: "New flat, 24-module panel, 18 points. Partial plan available." },
  { id: "d3", kind: "job", trade: "reno", trades: ["reno", "paint"], city: "tlv", titleRu: "Косметический ремонт 3 комн.", titleHe: "שיפוץ קוסמטי 3 חדרים", titleEn: "Cosmetic renovation, 3 rooms", dates: "октябрь", budget: "₪ 28,000", phone: "0501110003", name: "Dana Build", posterCode: "K-10802", rating: 5, reviews: 3, docs: true, insurance: true, planName: "3room-tohnit.pdf", descRu: "Покраска, плинтуса, лёгкий гипс в коридоре. Доступ ежедневно после 16:00.", descHe: "צבע, פנלים, גבס קל במסדרון. כניסה כל יום אחרי 16:00.", descEn: "Paint, skirting, light drywall in the hall. Access daily after 16:00." },
  { id: "d4", kind: "offer", trade: "gypsum", trades: ["gypsum"], cities: ["netanya", "herzliya"], titleRu: "Гипсокартон — стены и потолки", titleHe: "גבס — קירות ותקרות", titleEn: "Drywall — walls and ceilings", phone: "0501110004", name: "Igor", posterCode: "K-10421", rating: 4.9, reviews: 21, docs: true, insurance: true, closed: 21, planName: "portfolio-gypsum.pdf", descRu: "Стены, потолки, ниши. Работаю Нетания и Герцлия. Есть страховка.", descHe: "קירות, תקרות, נישות. נתניה והרצליה. יש ביטוח.", descEn: "Walls, ceilings, niches. Netanya and Herzliya. Insured." },
  { id: "d5", kind: "job", trade: "plumb", trades: ["plumb"], city: "haifa", titleRu: "Замена труб кухня + санузел", titleHe: "החלפת צנרת מטבח ושירותים", titleEn: "Replace pipes kitchen and WC", dates: "28–30.09", budget: "₪ 6,200", phone: "0501110005", name: "Haifa Home", posterCode: "K-11230", rating: 4.5, reviews: 8, docs: true, descRu: "Старые трубы на кухне и в туалете. Доступ с 07:30.", descHe: "צנרת ישנה במטבח ובשירותים. כניסה מ-07:30.", descEn: "Old pipes in kitchen and WC. Access from 07:30." },
  { id: "d6", kind: "job", trade: "paint", trades: ["paint"], city: "holon", titleRu: "Покраска квартиры 80 м²", titleHe: "צביעת דירה 80 מ״ר", titleEn: "Paint 80 m² flat", dates: "1–3.10", budget: "₪ 5,500", phone: "0501110006", name: "Holon Fix", posterCode: "K-11311", rating: 4.7, reviews: 11, descRu: "Две комнаты и коридор. Краска уже куплена.", descHe: "שני חדרים ומסדרון. הצבע כבר נקנה.", descEn: "Two rooms and hall. Paint already bought." },
  { id: "d7", kind: "job", trade: "ac", trades: ["ac"], city: "ashdod", titleRu: "Поставить 2 кондиционера", titleHe: "התקנת 2 מזגנים", titleEn: "Install 2 AC units", dates: "на этой неделе", budget: "₪ 3,800", phone: "0501110007", name: "Ashdod Build", posterCode: "K-11402", rating: 4.4, reviews: 7, descRu: "Гостиная и спальня. Кронштейны есть.", descHe: "סלון וחדר שינה. התושבות במקום.", descEn: "Living room and bedroom. Brackets on site." },
  { id: "d8", kind: "job", trade: "alum", trades: ["alum"], city: "petah", titleRu: "Окно + москитная сетка", titleHe: "חלון ורשת נגד יתושים", titleEn: "Window plus fly screen", dates: "5.10", budget: "по договорённости", phone: "0501110008", name: "PT Kablan", posterCode: "K-11540", rating: 4.3, reviews: 5, descRu: "Замена одного окна на балкон.", descHe: "החלפת חלון אחד למרפסת.", descEn: "Replace one balcony window." },
  { id: "d9", kind: "job", trade: "frame", trades: ["frame"], city: "modiin", titleRu: "Каркас гипсокартона 2 стены", titleHe: "שלד גבס 2 קירות", titleEn: "Drywall frame, 2 walls", dates: "октябрь", budget: "₪ 4,200", phone: "0501110009", name: "Modiin Pro", posterCode: "K-11608", rating: 4.6, reviews: 9, docs: true, descRu: "Две внутренние стены, профиль есть.", descHe: "שני קירות פנים, הפרופיל במקום.", descEn: "Two internal walls, profiles on site." },
  { id: "d10", kind: "job", trade: "tile", trades: ["tile"], city: "jerusalem", titleRu: "Плитка кухня фартук 7 м²", titleHe: "חיפוי מטבח 7 מ״ר", titleEn: "Kitchen backsplash 7 m²", dates: "8–9.10", budget: "₪ 2,900", phone: "0501110010", name: "Jerusalem Works", posterCode: "K-11721", rating: 4.8, reviews: 16, descRu: "Фартук и столешница. Плитка на объекте.", descHe: "חיפוי ומשטח. האריחים באתר.", descEn: "Backsplash and counter. Tiles on site." },
  { id: "d11", kind: "offer", trade: "tile", trades: ["tile"], cities: ["tlv", "holon", "batyam"], titleRu: "Плиточник — ванные и полы", titleHe: "רצף — חדרי רחצה ורצפות", titleEn: "Tiler — baths and floors", phone: "0501110011", name: "Sasha Tile", posterCode: "K-11803", rating: 4.9, reviews: 33, docs: true, insurance: true, closed: 33, descRu: "Ванные, полы, фартуки. Тель-Авив и юг Гуша.", descHe: "חדרי רחצה, רצפות, חיפויים. תל אביב ודרום גוש דן.", descEn: "Baths, floors, splashbacks. Tel Aviv and south Gush Dan." },
  { id: "d12", kind: "offer", trade: "elec", trades: ["elec"], cities: ["haifa", "kfar"], titleRu: "Электрик мусмах — щитки", titleHe: "חשמלאי מוסמך — לוחות", titleEn: "Licensed electrician — panels", phone: "0501110012", name: "Alex Power", posterCode: "K-11944", rating: 4.7, reviews: 18, docs: true, insurance: true, closed: 18, descRu: "Щитки, точки, замена проводки. Хайфа.", descHe: "לוחות, נקודות, החלפת חיווט. חיפה.", descEn: "Panels, points, rewiring. Haifa." },
  { id: "d13", kind: "offer", trade: "paint", trades: ["paint", "reno"], cities: ["rishon", "rehovot"], titleRu: "Маляр + косметика", titleHe: "צבע + שיפוץ קוסמטי", titleEn: "Painter + cosmetic work", phone: "0501110013", name: "Roma Color", posterCode: "K-12015", rating: 4.6, reviews: 12, closed: 12, descRu: "Покраска, шпаклёвка, мелкий ремонт.", descHe: "צביעה, שפכטל, תיקונים קטנים.", descEn: "Paint, filler, small repairs." },
  { id: "d14", kind: "offer", trade: "plumb", trades: ["plumb"], cities: ["ashdod", "ashkelon"], titleRu: "Сантехник — трубы и бойлер", titleHe: "אינסטלטור — צנרת ודוד", titleEn: "Plumber — pipes and boiler", phone: "0501110014", name: "Gabi Plumb", posterCode: "K-12109", rating: 4.8, reviews: 22, docs: true, insurance: true, closed: 22, descRu: "Трубы, бойлер, протечки. Ашдод / Ашкелон.", descHe: "צנרת, דוד, נזילות. אשדוד / אשקלון.", descEn: "Pipes, boiler, leaks. Ashdod / Ashkelon." },
  { id: "d15", kind: "offer", trade: "ac", trades: ["ac"], cities: ["tlv", "herzliya", "netanya"], titleRu: "Кондиционеры — монтаж и сервис", titleHe: "מזגנים — התקנה ושירות", titleEn: "AC — install and service", phone: "0501110015", name: "CoolIL", posterCode: "K-12270", rating: 4.5, reviews: 15, insurance: true, closed: 15, descRu: "Монтаж, заправка, сервис по центру.", descHe: "התקנה, מילוי, שירות במרכז.", descEn: "Install, refill, service in the center." },
  { id: "d16", kind: "offer", trade: "alum", trades: ["alum"], cities: ["jerusalem", "modiin"], titleRu: "Алюминий и окна", titleHe: "אלומיניום וחלונות", titleEn: "Aluminum and windows", phone: "0501110016", name: "Nir Alum", posterCode: "K-12333", rating: 4.4, reviews: 10, docs: true, closed: 10, descRu: "Окна, двери, москитные сетки.", descHe: "חלונות, דלתות, רשתות.", descEn: "Windows, doors, screens." },
  { id: "d17", kind: "job", trade: "reno", trades: ["reno", "gypsum", "paint"], city: "beer", titleRu: "Ремонт под ключ 2 комн.", titleHe: "שיפוץ מפתח 2 חדרים", titleEn: "Turnkey renovation, 2 rooms", dates: "ноябрь", budget: "₪ 45,000", phone: "0501110017", name: "Beer Sheva Kablan", posterCode: "K-12480", rating: 4.7, reviews: 13, docs: true, insurance: true, descRu: "Полный косметический ремонт. Есть тухнит.", descHe: "שיפוץ קוסמטי מלא. יש תוכנית.", descEn: "Full cosmetic renovation. Plan ready." },
  { id: "d18", kind: "offer", trade: "frame", trades: ["frame", "gypsum"], cities: ["eilat"], titleRu: "Каркас и гипс — Эйлат", titleHe: "שלד וגבס — אילת", titleEn: "Framing and drywall — Eilat", phone: "0501110018", name: "Eilat Crew", posterCode: "K-12561", rating: 4.3, reviews: 6, closed: 6, descRu: "Бригада в Эйлате. Каркас, гипс, потолки.", descHe: "צוות באילת. שלד, גבס, תקרות.", descEn: "Crew in Eilat. Frames, drywall, ceilings." },
]

function asList(v) { return Array.isArray(v) ? v : []; }
function safeParse(raw, fallback) {
  if (fallback === undefined) fallback = [];
  try { return raw ? JSON.parse(raw) : fallback; } catch (e) { return fallback; }
}
const store = {
  get lang() { return localStorage.getItem("bil_lang") || "ru"; },
  set lang(v) { localStorage.setItem("bil_lang", v); },
  get role() { return localStorage.getItem("bil_role") || ""; },
  set role(v) { localStorage.setItem("bil_role", v); },
  get tab() { return localStorage.getItem("bil_tab") || "feed"; },
  set tab(v) { localStorage.setItem("bil_tab", v); },
  get filter() { return localStorage.getItem("bil_filter") || "all"; },
  set filter(v) { localStorage.setItem("bil_filter", v); },
  get cityFilter() { return localStorage.getItem("bil_cityf") || "all"; },
  get radius() { return localStorage.getItem("bil_radius") || "40"; },
  set radius(v) { localStorage.setItem("bil_radius", String(v)); },
  get panel() { return localStorage.getItem("bil_panel") || ""; },
  set panel(v) { localStorage.setItem("bil_panel", v || ""); },
  get sort() { return localStorage.getItem("bil_sort") || "new"; },
  set sort(v) { localStorage.setItem("bil_sort", v); },
  set cityFilter(v) { localStorage.setItem("bil_cityf", v); },
  get payFilter() { return localStorage.getItem("bil_payf") || "all"; },
  set payFilter(v) { localStorage.setItem("bil_payf", v); },
  get kind() { return localStorage.getItem("bil_kind") || "all"; },
  set kind(v) { localStorage.setItem("bil_kind", v); },
  get board() { return localStorage.getItem("bil_board") || "feed"; },
  set board(v) { localStorage.setItem("bil_board", v); },
  get q() { return localStorage.getItem("bil_q") || ""; },
  set q(v) { localStorage.setItem("bil_q", v); },
  get openRev() { return localStorage.getItem("bil_openrev") || ""; },
  set openRev(v) { localStorage.setItem("bil_openrev", v); },
  get openJob() { return localStorage.getItem("bil_openjob") || ""; },
  set openJob(v) { localStorage.setItem("bil_openjob", v); },
  extraRevs() { try { return safeParse(localStorage.getItem("bil_extra_revs") || "{}"); } catch { return {}; } },
  saveExtraRevs(map) { localStorage.setItem("bil_extra_revs", JSON.stringify(map)); },
  contacts() { try { return safeParse(localStorage.getItem("bil_contacts") || "{}"); } catch { return {}; } },
  saveContacts(map) { localStorage.setItem("bil_contacts", JSON.stringify(map)); },
  complaints() { try { return safeParse(localStorage.getItem("bil_complaints") || "{}"); } catch { return {}; } },
  saveComplaints(map) { localStorage.setItem("bil_complaints", JSON.stringify(map)); },
  jobs() { try { return safeParse(localStorage.getItem("bil_jobs") || "[]"); } catch { return []; } },
  saveJobs(list) { localStorage.setItem("bil_jobs", JSON.stringify(list)); },
  profile() { try { return safeParse(localStorage.getItem("bil_profile") || "{}"); } catch { return {}; } },
  saveProfile(p) { localStorage.setItem("bil_profile", JSON.stringify(p)); },
  users() { try { return safeParse(localStorage.getItem("bil_users") || "[]"); } catch { return []; } },
  saveUsers(list) { localStorage.setItem("bil_users", JSON.stringify(list)); },
  get admin() { return localStorage.getItem("bil_admin") === "1"; },
  set admin(v) { localStorage.setItem("bil_admin", v ? "1" : ""); },
  get session() { return localStorage.getItem("bil_session") || ""; },
  set session(v) { localStorage.setItem("bil_session", v); },
  user() {
    const s = normPhone(this.session);
    if (!s) return null;
    return this.users().find((u) => {
      if (normPhone(u.phone) === s) return true;
      return (u.phones || []).some((x) => normPhone(x) === s);
    }) || null;
  },
};
const FB = "https://kadlan-il-default-rtdb.europe-west1.firebasedatabase.app";
const FB_BUCKET = "kadlan-il.firebasestorage.app";
function fb(path) { return FB + path + ".json"; }
function dataUrlToBlob(dataUrl) {
  const s = String(dataUrl || "");
  const m = s.match(/^data:([^;]+);base64,(.+)$/);
  if (!m) return null;
  const bin = atob(m[2]);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
  return new Blob([arr], { type: m[1] || "image/jpeg" });
}
async function storagePut(path, dataUrl) {
  if (!dataUrl || !String(dataUrl).startsWith("data:")) return String(dataUrl || "");
  const blob = dataUrlToBlob(dataUrl);
  if (!blob) return "";
  const url = "https://firebasestorage.googleapis.com/v0/b/" + FB_BUCKET + "/o?uploadType=media&name=" + encodeURIComponent(path);
  try {
    const res = await fetch(url, { method: "POST", headers: { "Content-Type": blob.type || "image/jpeg" }, body: blob });
    if (!res.ok) return "";
    return "https://firebasestorage.googleapis.com/v0/b/" + FB_BUCKET + "/o/" + encodeURIComponent(path) + "?alt=media";
  } catch (e) { return ""; }
}
function normPhone(v) {
  let s = String(v || "").replace(/\D/g, "");
  if (s.startsWith("972") && s.length >= 11) s = "0" + s.slice(3);
  if (s.length === 9 && s[0] === "5") s = "0" + s;
  return s;
}
const ADMIN_PIN = "kadlan1";
const SUPPORT_PHONE = ""; // номер поддержки, например 9725...
let cloudCache = [];
let guestCache = [];
let waClickCache = [];
let postingLock = false;
let privDocsCache = {};
let docReqCache = {};
let showGuests = false;
let cloudOk = false;

function visitorId() {
  let id = localStorage.getItem("bil_vid");
  if (!id) {
    id = "v" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
    localStorage.setItem("bil_vid", id);
  }
  return id;
}
async function pingVisit() {
  const vid = visitorId();
  const user = store.user && store.user();
  const p = store.profile ? store.profile() : {};
  const row = {
    vid,
    first: Number(localStorage.getItem("bil_vid_first") || Date.now()),
    last: Date.now(),
    lang: store.lang || "ru",
    phone: (user && user.phone) || store.session || p.phone || "",
    name: (user && user.name) || p.name || "",
    role: (user && user.role) || store.role || "",
    via: "qr-or-link",
  };
  if (!localStorage.getItem("bil_vid_first")) localStorage.setItem("bil_vid_first", String(row.first));
  try {
    await fetch(fb("/visits/" + vid), { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(row) });
    localStorage.setItem("bil_visit_ok", "1");
  } catch (e) {
    const local = safeParse(localStorage.getItem("bil_visits_local") || "[]");
    localStorage.setItem("bil_visits_local", JSON.stringify(local.concat([row]).slice(-20)));
  }
}

function compressImageFile(file, max, q) {
  max = max || 800;
  q = q || 0.58;
  return new Promise((resolve) => {
    if (!file) { resolve(""); return; }
    const _tp = String(file.type || "");
    if (_tp && !_tp.startsWith("image/") && !_tp.startsWith("application/octet")) { resolve(""); return; }
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      let w = img.width, h = img.height;
      if (Math.max(w, h) > max) {
        const k = max / Math.max(w, h);
        w = Math.round(w * k); h = Math.round(h * k);
      }
      const c = document.createElement("canvas");
      c.width = w; c.height = h;
      c.getContext("2d").drawImage(img, 0, 0, w, h);
      URL.revokeObjectURL(url);
      resolve(c.toDataURL("image/jpeg", q));
    };
    img.onerror = () => { URL.revokeObjectURL(url); resolve(""); };
    img.src = url;
  });
}
function photoSrc(p) {
  if (!p) return "";
  if (typeof p === "string") return p;
  return String(p.data || p.src || "");
}
function safeFace(name, photo, role, trades) {
  const src = photoSrc(photo);
  if (src && !isCartoonSrc(src) && (src.startsWith("data:image") || src.startsWith("http"))) return src;
  if (src && src.startsWith("icons/")) return src;
  return tradeAvatar(trades, role === "worker" ? "worker" : "contractor");
}
function lightGallery(photos) {
  const list = (photos || []).map(photoSrc).filter((s) => typeof s === "string" && s.startsWith("data:image") && s.length < 400000).slice(0, 3);
  if (!list.length) {
    const n = (photos || []).length;
    return n ? `<div class="meta">${n} фото</div>` : "";
  }
  return `<div class="work-gallery">${list.map((src) => `<button type="button" class="file-open" data-view-src="${src.replace(/"/g,"")}"><img class="plan-preview" src="${src.replace(/"/g,"")}" alt="" /></button>`).join("")}</div>`;
}

function galleryHtml(photos) {
  const raw = Array.isArray(photos) ? photos : (photos ? [photos] : []);
  const list = raw.map(photoSrc).filter((s) => {
    if (typeof s !== "string" || s.length < 8) return false;
    if (s.length > 220000) return false;
    return s.startsWith("data:image") || s.startsWith("http") || s.startsWith("icons/");
  }).slice(0, 6);
  if (!list.length) {
    const n = raw.length;
    return n ? `<div class="meta">${n} фото</div>` : "";
  }
  return `<div class="work-gallery">${list.map((src) => `<button type="button" class="file-open" data-view-src="${src.replace(/"/g, "")}"><img class="plan-preview" src="${src.replace(/"/g, "")}" alt="" /></button>`).join("")}</div>`;
}
function slimJob(j) {
  const copy = { ...j };
  delete copy._id;
  if (copy.planData && String(copy.planData).length > 350000) copy.planData = "";
  if (Array.isArray(copy.extraDocs)) {
    copy.extraDocs = copy.extraDocs.map((f) => {
      const data = f && f.data && String(f.data).length > 350000 ? "" : (f && f.data) || "";
      return { name: (f && f.name) || "", data };
    });
  }
  if (Array.isArray(copy.workPhotos)) copy.workPhotos = copy.workPhotos.filter(Boolean).slice(0, 4);
  return copy;
}
async function cloudLoad() {
  try {
    const res = await fetch(fb("/jobs"));
    if (!res.ok) throw new Error("cloud");
    const data = await res.json();
    cloudCache = data && typeof data === "object"
      ? Object.keys(data).map((k) => ({ ...data[k], cloudId: data[k].cloudId || k }))
      : [];
    cloudOk = true;
  } catch (e) {
    cloudOk = false;
  }
  return cloudCache;
}
async function putJobFile(jobId, kind, dataUrl) {
  const raw = String(dataUrl || "");
  if (!raw) return "";
  if (raw.startsWith("http") || raw.startsWith("icons/")) return raw;
  if (!raw.startsWith("data:")) return raw;
  const ext = raw.startsWith("data:application/pdf") ? "pdf" : "jpg";
  return (await storagePut("plans/" + jobId + "/" + kind + "." + ext, raw)) || "";
}
function planGuessUrl(jobId) {
  if (!jobId) return "";
  return "https://firebasestorage.googleapis.com/v0/b/" + FB_BUCKET + "/o/" + encodeURIComponent("plans/" + jobId + "/plan.jpg") + "?alt=media";
}
async function cloudSave(job) {
  const id = String(job.cloudId || job.id || ("j" + Date.now()));
  const planUrl = await putJobFile(id, "plan", job.planData);
  const extras = [];
  const extraList = Array.isArray(job.extraDocs) ? job.extraDocs : [];
  for (let i = 0; i < extraList.length; i++) {
    const f = extraList[i] || {};
    const url = await putJobFile(id, "doc" + i, f.data);
    extras.push({ name: f.name || "", data: url });
  }
  const body = JSON.stringify({ ...slimJob({ ...job, planData: planUrl || job.planData, extraDocs: extras.length ? extras : job.extraDocs }), cloudId: id });
  try {
    const res = await fetch(fb("/jobs/" + id), { method: "PUT", headers: { "Content-Type": "application/json" }, body });
    if (!res.ok) throw new Error("put");
    cloudOk = true;
    if (planUrl) {
      const list = store.jobs().map((j) => j.id === job.id || j.cloudId === id ? { ...j, planData: planUrl, cloudId: id } : j);
      store.saveJobs(list);
    }
    return id;
  } catch (e) {
    cloudOk = false;
    return "";
  }
}
async function cloudDelete(cloudId) {
  if (!cloudId) return false;
  try {
    const res = await fetch(fb("/jobs/" + cloudId), { method: "DELETE" });
    return res.ok || res.status === 404;
  } catch (e) {
    return false;
  }
}
async function cloudLoadUsers() {
  try {
    const res = await fetch(fb("/users"));
    if (!res.ok) return;
    const data = await res.json();
    if (!data || typeof data !== "object") return;
    const map = {};
    store.users().forEach((u) => { map[normPhone(u.phone)] = u; });
    Object.values(data).forEach((u) => {
      if (!u || !u.phone) return;
      const k = normPhone(u.phone);
      map[k] = { ...(map[k] || {}), ...u, phone: k };
    });
    store.saveUsers(Object.values(map));
  } catch (e) {}
}
async function cloudSavePhotos(phone, photo, workPhotos) {
  const key = normPhone(phone);
  if (!key) return;
  const rawShots = (workPhotos || []).map(photoSrc).filter(Boolean).slice(0, 4);
  const photoUrl = await storagePut("photos/" + key + "/avatar.jpg", photoSrc(photo) || "");
  const shots = [];
  for (let i = 0; i < rawShots.length; i++) {
    const one = rawShots[i];
    shots.push(one.startsWith("http") ? one : (await storagePut("photos/" + key + "/w" + i + ".jpg", one)) || one);
  }
  try {
    await fetch(fb("/photos/" + key), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ photo: photoUrl || "", workPhotos: shots, at: Date.now() }),
    });
  } catch (e) {}
}
async function cloudLoadPhotosAll() {
  try {
    const res = await fetch(fb("/photos"));
    if (!res.ok) return;
    const data = await res.json();
    if (!data || typeof data !== "object") return;
    const users = store.users().map((u) => {
      const pack = data[normPhone(u.phone)] || data[u.phone];
      if (!pack) return u;
      return { ...u, photo: pack.photo || u.photo || "", workPhotos: pack.workPhotos || u.workPhotos || [] };
    });
    store.saveUsers(users);
    const me = store.user();
    if (me) {
      const pack = data[normPhone(me.phone)] || data[me.phone];
      if (pack && (pack.photo || pack.workPhotos)) {
        store.saveProfile({ ...store.profile(), photo: pack.photo || store.profile().photo, workPhotos: pack.workPhotos || store.profile().workPhotos });
      }
    }
  } catch (e) {}
}
async function cloudLoadPhotos(phone) {
  const key = normPhone(phone);
  if (!key) return null;
  try {
    const res = await fetch(fb("/photos/" + key));
    if (!res.ok) return null;
    return await res.json();
  } catch (e) { return null; }
}
async function cloudSaveUser(user) {
  if (!user || !user.phone) return;
  try {
    const slim = { ...user };
    const photo = slim.photo;
    const workPhotos = slim.workPhotos;
    delete slim.workPhotos;
    delete slim.photo;
    await fetch(fb("/users/" + normPhone(user.phone)), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(slim),
    });
    await cloudSavePhotos(user.phone, photo, workPhotos);
  } catch (e) {}
}

function profilePhones(p) {
  const src = p || store.profile() || {};
  const raw = [].concat(src.phones || [], [src.phone, src.phone2, src.phone3]);
  const out = [];
  raw.forEach((x) => {
    const n = normPhone(x);
    if (n && out.indexOf(n) < 0) out.push(n);
  });
  return out.slice(0, 3);
}
function recentlyPosted(kind, phone) {
  const p = normPhone(phone || myPhone() || "");
  const code = (store.user() && store.user().code) || (store.profile() || {}).code || "";
  const now = Date.now();
  return (store.jobs() || []).some((j) => {
    if (j.kind !== kind) return false;
    if ((now - Number(j.created || 0)) >= 20000) return false;
    if (p && normPhone(j.phone) === p) return true;
    if (code && j.posterCode && j.posterCode === code) return true;
    return false;
  });
}
function isLogged() {
  if (store.user()) return true;
  return !!(store.session || (store.profile() && store.profile().phone));
}
function ensureUserRow() {
  if (store.user()) return store.user();
  const phone = normPhone(store.session || (store.profile() || {}).phone || "");
  if (!phone) return null;
  const p = store.profile() || {};
  const row = {
    phone,
    phones: p.phones || [phone],
    name: p.name || "",
    role: store.role || p.role || "contractor",
    code: p.code || "",
    city: p.city || "",
    trades: p.trades || [],
    photo: p.photo || ""
  };
  const users = store.users().filter((u) => normPhone(u.phone) !== phone);
  users.push(row);
  store.saveUsers(users);
  store.session = phone;
  return row;
}
function myPhone() {
  const u = store.user && store.user();
  const p = store.profile ? store.profile() : {};
  return normPhone((u && u.phone) || store.session || p.phone || "");
}
async function loadPrivDocs(phone) {
  const key = normPhone(phone);
  if (!key) return [];
  try {
    const res = await fetch(fb("/privdocs/" + key));
    const data = res.ok ? await res.json() : null;
    const list = data && typeof data === "object" ? Object.keys(data).map((id) => ({ id, ...data[id] })) : [];
    privDocsCache[key] = list;
    return list;
  } catch (e) {
    privDocsCache[key] = privDocsCache[key] || [];
    return privDocsCache[key];
  }
}
async function savePrivDoc(phone, file) {
  const key = normPhone(phone);
  const id = "d" + Date.now();
  const row = { id, name: file.name || "doc", data: file.data || "", at: Date.now() };
  try {
    await fetch(fb("/privdocs/" + key + "/" + id), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(row),
    });
  } catch (e) {}
  privDocsCache[key] = (privDocsCache[key] || []).concat([row]);
  return row;
}
function reqKey(owner, from) { return normPhone(owner) + "_" + normPhone(from); }
async function loadDocReqs(owner) {
  const key = normPhone(owner);
  if (!key) return {};
  try {
    const res = await fetch(fb("/docreq/" + key));
    const data = res.ok ? await res.json() : null;
    if (data && typeof data === "object") {
      Object.keys(data).forEach((from) => { docReqCache[reqKey(key, from)] = data[from]; });
    }
  } catch (e) {}
  return docReqCache;
}
async function setDocReq(owner, from, row) {
  const o = normPhone(owner), f = normPhone(from);
  docReqCache[reqKey(o, f)] = row;
  try {
    await fetch(fb("/docreq/" + o + "/" + f), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(row),
    });
  } catch (e) {}
}
function docAccess(owner, from) {
  const row = docReqCache[reqKey(owner, from)];
  return row && row.status ? row.status : "";
}
function canSeeDocs(owner) {
  const me = myPhone();
  const o = normPhone(owner);
  if (!o) return false;
  if (me && me === o) return true;
  return docAccess(o, me) === "ok";
}

async function removeMyJob(id) {
  if (!id) return;
  if (!confirm(t("confirmDelete"))) return;
  const local = store.jobs().find((j) => j.id === id);
  const cloud = publicJobs().find((j) => j.id === id);
  const job = local || cloud;
  if (job && job.cloudId) await cloudDelete(job.cloudId);
  store.saveJobs(store.jobs().filter((j) => j.id !== id));
  cloudCache = cloudCache.filter((j) => j && j.id !== id);
  if (store.openJob === id) store.openJob = "";
  await cloudLoad();
  render();
}
async function cloudPushLocal() {
  const list = store.jobs();
  let changed = false;
  for (let i = 0; i < list.length; i++) {
    if (!list[i].cloudId) {
      const id = await cloudSave(list[i]);
      if (id) { list[i] = { ...list[i], cloudId: id }; changed = true; }
    }
  }
  if (changed) store.saveJobs(list);
}
function publicJobs() {
  const map = {};
  cloudCache.forEach((j) => { if (j && j.id) map[j.id] = j; });
  store.jobs().forEach((j) => { map[j.id] = { ...(map[j.id] || {}), ...j }; });
  return Object.values(map);
}
function jobsForMember(m) {
  if (!m) return [];
  const phones = [m.phone];
  const u = store.users().find((x) => x.code === m.code || (m.phone && normPhone(x.phone) === normPhone(m.phone)));
  if (u && u.phone) phones.push(u.phone);
  const pset = new Set(phones.filter(Boolean).map(normPhone));
  const name = String(m.name || "").trim().toLowerCase();
  return publicJobs().filter((j) => {
    if (m.code && j.posterCode && String(j.posterCode) === String(m.code)) return true;
    if (j.phone && pset.has(normPhone(j.phone))) return true;
    const jn = String(j.name || "").trim().toLowerCase();
    if (name && jn && (jn === name || jn.includes(name) || name.includes(jn))) return true;
    return false;
  }).sort((a, b) => jobStamp(b) - jobStamp(a));
}



const ICO = {
  wa: "M12 2C6.5 2 2 6.2 2 11.4c0 1.8.5 3.5 1.5 5L2 22l5.7-1.5c1.4.8 3 1.2 4.6 1.2 5.5 0 10-4.2 10-9.3S17.5 2 12 2zm5.2 13.1c-.2.6-1.1 1.1-1.6 1.2-.4.1-.8.2-1.4.1-.8-.1-1.7-.4-2.8-1.1-1.7-1-3.1-2.6-3.6-3.3-.4-.6-.9-1.4-.9-2.2 0-.7.4-1.1.7-1.3.2-.2.4-.3.6-.3h.5c.2 0 .3 0 .4.3l.7 1.6c.1.2 0 .4-.1.5l-.3.4c-.2.2-.2.3-.1.5.3.5.9 1.3 1.8 2 .8.7 1.5 1 1.8 1.1.2.1.4 0 .5-.1l.4-.5c.2-.2.3-.2.5-.1l1.6.8c.2.1.3.2.3.4.1.2 0 .7-.2 1.3z",
  tile: "M4 10l8-6 8 6v10H4V10zm8 2v6",
  elec: "M13 2L4 14h7l-1 8 9-12h-7l1-8z",
  paint: "M12 3l7 7-8 8H6v-5l6-10zM5 20h14",
  plumb: "M7 3h4v8H7zM11 7h6v4H11zM15 11v8M12 19h6",
  gypsum: "M4 6h16v4H4zM4 12h7v6H4zM13 12h7v6h-7z",
  ac: "M12 4v16M4 12h16M7 7l10 10M17 7L7 17",
  alum: "M4 6h16v12H4zM8 6v12M16 6v12",
  frame: "M3 20h18M6 20V8l6-4 6 4v12M10 20v-6h4v6",
  reno: "M4 11l8-7 8 7v9H4v-9zm6 9v-6h4v6",
  other: "M4 20l2-2 12-12 2 2L8 20H4zm12-14l2 2",
  city: "M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11zm0-8a3 3 0 110-6 3 3 0 010 6z",
  date: "M7 3v3M17 3v3M4 8h16M5 5h14a1 1 0 011 1v14H4V6a1 1 0 011-1z",
  money: "M12 3v18M8 7h5a3 3 0 010 6H9a3 3 0 000 6h7",
  hasJob: "M4 11l8-7 8 7v10H4V11zm8 2h2v2h2v2h-2v2h-2v-2H8v-2h2v-2z",
  needWork: "M10 16a6 6 0 110-12 6 6 0 010 12zM20 20l-3.5-3.5M8 10h4M10 8v4",
  plan: "M4 6l8-3 8 3v12l-8 3-8-3V6zm8-3v18M8 9l8 3M8 13l8 3",
  phone: "M7 3h10v18H7zM11 18h2",
  name: "M12 12a4 4 0 100-8 4 4 0 000 8zM5 20a7 7 0 0114 0",
  feed: "M8 6h13M8 12h13M8 18h13M4 6v.01M4 12v.01M4 18v.01",
  job: "M8 7V5h8v2M5 7h14v13H5V7z",
  profile: "M12 12a4 4 0 100-8 4 4 0 000 8zM4 20c1.5-3 4-5 8-5s6.5 2 8 5",
  more: "M5 12h.01M12 12h.01M19 12h.01",
  contractor: "M4 20h16M6 20V9l6-5 6 5v11M10 20v-5h4v5",
  worker: "M14.7 6.3a4 4 0 11-5.4 0M9 10l-5 9h16l-5-9",
};
function t(key) { return (I18N[store.lang] || I18N.ru)[key] || key; }
function ico(id) {
  const pics = { tile:1, elec:1, paint:1, plumb:1, gypsum:1, ac:1, alum:1, frame:1, reno:1, facade:1, other:1, contractor:1, worker:1, profile:1 };
  if (pics[id]) {
    const file = id === "facade" ? "paint" : id;
    return `<span class="picwrap"><img class="icon pic" src="icons/${file}.gif?v=24" alt="" /></span>`;
  }
  const d = ICO[id];
  if (!d) return "";
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="${d}"/></svg>`;
}
function loc(row) {
  if (!row) return "";
  if (store.lang === "he") return row[2];
  if (store.lang === "en") return row[3] || row[1];
  return row[1];
}

function phraseBook() {
  const rows = [];
  TRADES.forEach((r) => rows.push([r[1], r[2], r[3]]));
  Object.keys(WORKS).forEach((k) => WORKS[k].forEach((r) => rows.push([r[1], r[2], r[3]])));
  rows.sort((a, b) => Math.max(...a.map((x) => String(x||"").length)) - Math.max(...b.map((x) => String(x||"").length)));
  return rows.reverse();
}
function toLangText(text, lang) {
  let s = String(text || "");
  if (!s) return "";
  const idx = lang === "he" ? 1 : lang === "en" ? 2 : 0;
  phraseBook().forEach((row) => {
    const dst = row[idx];
    if (!dst) return;
    row.forEach((src) => {
      if (src && src !== dst && s.indexOf(src) >= 0) s = s.split(src).join(dst);
    });
  });
  return s;
}
function jobTitle(j) {
  const raw = store.lang === "he" ? (j.titleHe || j.titleRu || j.titleEn) : store.lang === "en" ? (j.titleEn || j.titleRu || j.titleHe) : (j.titleRu || j.titleHe || j.titleEn);
  return toLangText(raw, store.lang);
}
function jobDesc(j) {
  const raw = store.lang === "he" ? (j.descHe || j.descRu || j.descEn || j.other) : store.lang === "en" ? (j.descEn || j.descRu || j.descHe || j.other) : (j.descRu || j.descHe || j.descEn || j.other);
  return toLangText(raw, store.lang);
}
function tradeName(id) {
  const row = TRADES.find((x) => x[0] === id);
  if (!row) return id;
  return loc(row);
}
function tradeLabel(id) { return `${ico(id)}${tradeName(id)}`; }
function flagLabel(id) { return t("flag_" + id); }
function flagHint(id) { return t("flag_" + id + "_h"); }
function flagsHtml(ids) {
  return asList(ids).filter((id) => FLAG_MARK[id]).map((id) =>
    `<button type="button" class="flag" data-flag-info="${id}" title="${flagHint(id)}">${FLAG_MARK[id]} ${flagLabel(id)}</button>`
  ).join("");
}
function flagChecks(name, selected) {
  const on = selected || [];
  return FLAG_IDS.map((id) =>
    `<label class="check"><input type="checkbox" name="${name}" value="${id}" ${on.includes(id) ? "checked" : ""} /> ${FLAG_MARK[id]} ${flagLabel(id)}</label>`
  ).join("");
}
const LEGAL_IDS = ["citizen", "resident", "permit"];
const EXTRA_FLAG_IDS = ["height", "tools", "car", "crew"];
function legalChecks(selected) {
  const on = (selected || []).find((id) => LEGAL_IDS.includes(id)) || "";
  return LEGAL_IDS.map((id) =>
    `<label class="check"><input type="radio" name="legal" value="${id}" ${on === id ? "checked" : ""} /> ${FLAG_MARK[id]} ${flagLabel(id)}</label>`
  ).join("");
}
function extraFlagChecks(selected) {
  const on = selected || [];
  return EXTRA_FLAG_IDS.map((id) =>
    `<label class="check"><input type="checkbox" name="flags" value="${id}" ${on.includes(id) ? "checked" : ""} /> ${FLAG_MARK[id]} ${flagLabel(id)}</label>`
  ).join("");
}
function workName(trade, id) {
  const row = (WORKS[trade] || []).find((x) => x[0] === id);
  if (!row) return id;
  return loc(row);
}
function cityName(id) {
  const row = CITIES.find((x) => x[0] === id || x[1] === id || x[2] === id);
  if (!row) return id;
  return loc(row);
}

const DEMO_REVIEWS = {
  d1: [
    { stars: 5, name: "Михаил", textRu: "Плитку положил ровно, швы аккуратные.", textHe: "ריצוף ישר ומישקים נקיים.", textEn: "Even tiling, clean joints." },
    { stars: 5, name: "Ольга", textRu: "Уложились в срок, объект чистый.", textHe: "עמדו בלוח הזמנים, האתר נקי.", textEn: "On time and the site was clean." },
    { stars: 4, name: "Avi", textRu: "Хорошая работа, чуть задержали материал.", textHe: "עבודה טובה, החומר התעכב קצת.", textEn: "Good work, materials were a bit late." },
  ],
  d2: [
    { stars: 4, name: "Сергей", textRu: "Щиток собрал нормально, объяснил схему.", textHe: "הלוח הורכב בסדר, הסביר את התוכנית.", textEn: "Panel was fine, explained the layout." },
    { stars: 5, name: "Noa", textRu: "Приехал вовремя, точки где просили.", textHe: "הגיע בזמן, הנקודות במקום.", textEn: "Arrived on time, points where asked." },
  ],
  d3: [
    { stars: 5, name: "Ирина", textRu: "Косметика на высоте, краска без полос.", textHe: "שיפוץ קוסמטי מצוין, הצבע אחיד.", textEn: "Great cosmetic job, even paint." },
    { stars: 5, name: "David", textRu: "Смета совпала с фактом.", textHe: "ההצעה תאמה את המחיר הסופי.", textEn: "Quote matched the final price." },
    { stars: 5, name: "Лена", textRu: "Можно рекомендовать.", textHe: "אפשר להמליץ.", textEn: "Would recommend." },
  ],
  d4: [
    { stars: 5, name: "Андрей", textRu: "Потолок и ниши — как в тухните.", textHe: "התקרה והנישות לפי התוכנית.", textEn: "Ceiling and niches match the plan." },
    { stars: 5, name: "Maya", textRu: "Быстро и без грязи в квартире.", textHe: "מהיר ובלי לכלוך בדירה.", textEn: "Fast and no mess in the flat." },
    { stars: 4, name: "Павел", textRu: "Короб чуть подровняли на второй день.", textHe: "תיקנו את הארגז ביום השני.", textEn: "Adjusted a box on day two." },
    { stars: 5, name: "Юлия", textRu: "Игорь знает гипс. Буду звать ещё.", textHe: "איגור מבין בגבס. אזמין שוב.", textEn: "Igor knows drywall. Will hire again." },
  ],
  "K-10421": [
    { stars: 5, name: "Андрей", textRu: "Потолок и ниши — как в тухните.", textHe: "התקרה והנישות לפי התוכנית.", textEn: "Ceiling and niches match the plan." },
    { stars: 5, name: "Maya", textRu: "Быстро и без грязи в квартире.", textHe: "מהיר ובלי לכלוך בדירה.", textEn: "Fast and no mess in the flat." },
    { stars: 5, name: "Юлия", textRu: "Игорь знает гипс.", textHe: "איגור מבין בגבס.", textEn: "Igor knows drywall." },
  ],
  "K-10802": [
    { stars: 5, name: "Игорь Г.", textRu: "Каблан платит вовремя, объект понятный.", textHe: "הקבלן משלם בזמן, הפרויקט ברור.", textEn: "Pays on time, clear site." },
    { stars: 4, name: "Yossi", textRu: "ТЗ нормальное, чуть много правок.", textHe: "המפרט בסדר, קצת יותר מדי תיקונים.", textEn: "Brief was fine, a few extra changes." },
  ],
  "K-11017": [
    { stars: 5, name: "Dana", textRu: "Электрика по стандарту, аккуратно.", textHe: "חשמל לפי התקן, עבודה נקייה.", textEn: "Electrical to code, tidy." },
    { stars: 4, name: "Роман", textRu: "Приехал на день позже, работу сделал.", textHe: "הגיע באיחור של יום, אבל סיים.", textEn: "A day late, but finished the job." },
  ],
  d11: [
    { stars: 5, name: "Лена", textRu: "Плитка в ванной идеально.", textHe: "הריצוף בחדר הרחצה מושלם.", textEn: "Bathroom tile is perfect." },
    { stars: 5, name: "Itay", textRu: "Быстро и чисто.", textHe: "מהיר ונקי.", textEn: "Fast and clean." },
  ],
  d14: [
    { stars: 5, name: "Марина", textRu: "Протечку нашёл сразу.", textHe: "מצא את הנזילה מיד.", textEn: "Found the leak immediately." },
    { stars: 4, name: "Oren", textRu: "Цена нормальная.", textHe: "המחיר סביר.", textEn: "Fair price." },
  ],
  "K-11803": [
    { stars: 5, name: "Dana", textRu: "Саша кладёт плитку ровно.", textHe: "סשה מרצף ישר.", textEn: "Sasha lays tile straight." },
  ],
  "K-12109": [
    { stars: 5, name: "Avi", textRu: "Габи приехал ночью на протечку.", textHe: "גבי הגיע בלילה לנזילה.", textEn: "Gabi came at night for a leak." },
  ],
};

const SEED_MEMBERS = [
  { code: "K-10421", name: "Igor", role: "worker", city: "netanya", cities: ["netanya", "herzliya"], rating: 4.9, reviews: 21, docs: true, insurance: true, closed: 21, trades: ["gypsum"], phone: "0501110004", docFiles: ["bituch.pdf", "portfolio-gypsum.pdf"], aboutRu: "Гипсокартон 8 лет. Стены, потолки, ниши.", aboutHe: "גבס 8 שנים. קירות, תקרות, נישות.", aboutEn: "Drywall for 8 years. Walls, ceilings, niches." },
  { code: "K-10802", name: "Dana Build", role: "contractor", city: "tlv", rating: 4.8, reviews: 14, docs: true, closed: 14, trades: ["reno"], phone: "0501110001", docFiles: ["osek.pdf", "3room-tohnit.pdf"], aboutRu: "Каблан косметики и плитки в центре.", aboutHe: "קבלן שיפוץ קוסמטי וריצוף במרכז.", aboutEn: "Cosmetic and tile contractor in the center." },
  { code: "K-11017", name: "Yossi Electric", role: "worker", city: "rishon", cities: ["rishon", "holon"], rating: 4.6, reviews: 9, docs: true, insurance: true, closed: 9, trades: ["elec"], phone: "0501110002", docFiles: ["hashmal-license.pdf"], aboutRu: "Электрик мусмах, щитки и точки.", aboutHe: "חשמלאי מוסמך, לוחות ונקודות.", aboutEn: "Licensed electrician, panels and points." },
  { code: "K-11803", name: "Sasha Tile", role: "worker", city: "tlv", cities: ["tlv", "holon", "batyam"], rating: 4.9, reviews: 33, docs: true, insurance: true, closed: 33, trades: ["tile"], phone: "0501110011", aboutRu: "Плиточник 12 лет. Ванные и полы.", aboutHe: "רצף 12 שנה. חדרי רחצה ורצפות.", aboutEn: "Tiler 12 years. Baths and floors." },
  { code: "K-11944", name: "Alex Power", role: "worker", city: "haifa", rating: 4.7, reviews: 18, docs: true, insurance: true, closed: 18, trades: ["elec"], phone: "0501110012", aboutRu: "Электрик мусмах, Хайфа.", aboutHe: "חשמלאי מוסמך, חיפה.", aboutEn: "Licensed electrician, Haifa." },
  { code: "K-12015", name: "Roma Color", role: "worker", city: "rishon", rating: 4.6, reviews: 12, closed: 12, trades: ["paint", "reno"], phone: "0501110013", aboutRu: "Маляр и косметика.", aboutHe: "צבע ושיפוץ קוסמטי.", aboutEn: "Painter and cosmetic work." },
  { code: "K-12109", name: "Gabi Plumb", role: "worker", city: "ashdod", rating: 4.8, reviews: 22, docs: true, insurance: true, closed: 22, trades: ["plumb"], phone: "0501110014", aboutRu: "Сантехник Ашдод / Ашкелон.", aboutHe: "אינסטלטור אשדוד / אשקלון.", aboutEn: "Plumber Ashdod / Ashkelon." },
  { code: "K-12270", name: "CoolIL", role: "worker", city: "tlv", rating: 4.5, reviews: 15, insurance: true, closed: 15, trades: ["ac"], phone: "0501110015", aboutRu: "Кондиционеры по центру.", aboutHe: "מזגנים במרכז.", aboutEn: "AC in the center." },
  { code: "K-11230", name: "Haifa Home", role: "contractor", city: "haifa", rating: 4.5, reviews: 8, docs: true, closed: 8, trades: ["plumb", "reno"], phone: "0501110005", aboutRu: "Каблан Хайфа, сантехника и ремонт.", aboutHe: "קבלן חיפה, אינסטלציה ושיפוץ.", aboutEn: "Haifa contractor, plumbing and reno." },
  { code: "K-12480", name: "Beer Sheva Kablan", role: "contractor", city: "beer", rating: 4.7, reviews: 13, docs: true, insurance: true, closed: 13, trades: ["reno"], phone: "0501110017", aboutRu: "Ремонт под ключ в Беэр-Шеве.", aboutHe: "שיפוץ מפתח בבאר שבע.", aboutEn: "Turnkey renovation in Beersheba." },
];

function codeNum(code) {
  const m = String(code || "").match(/^K-(\d+)$/i);
  return m ? Number(m[1]) : 0;
}
function usedCodes(extra) {
  const set = new Set(SEED_MEMBERS.map((m) => m.code).filter(Boolean));
  (extra || []).forEach((c) => { if (c) set.add(c); });
  store.users().forEach((u) => { if (u && u.code) set.add(u.code); });
  return set;
}
function nextCode() {
  const used = usedCodes();
  let n = 10000;
  used.forEach((c) => { n = Math.max(n, codeNum(c)); });
  n += 1;
  let code = "K-" + n;
  while (used.has(code)) { n += 1; code = "K-" + n; }
  return code;
}
function ensureCodes() {
  const seen = new Set(SEED_MEMBERS.map((m) => m.code).filter(Boolean));
  let changed = false;
  const users = store.users().map((u) => {
    if (u.code && !seen.has(u.code)) {
      seen.add(u.code);
      return u;
    }
    let n = 10000;
    seen.forEach((c) => { n = Math.max(n, codeNum(c)); });
    n += 1;
    let code = "K-" + n;
    while (seen.has(code)) { n += 1; code = "K-" + n; }
    seen.add(code);
    changed = true;
    return { ...u, code };
  });
  if (changed) {
    store.saveUsers(users);
    users.forEach((u) => { if (u && u.phone) cloudSaveUser(u); });
  }
}
function memberList() {
  ensureCodes();
  const fromUsers = store.users().map((u) => {
    const mine = u.phone === store.session;
    const p = mine ? store.profile() : {};
    const r = mine ? myRep() : {};
    const live = liveRepFor(u.code, u);
    return {
      code: u.code,
      name: u.name || p.name || u.phone,
      role: u.role || "contractor",
      city: p.city || u.city || "",
      rating: live.avg || r.avg || u.rating || 0,
      reviews: live.count || r.count || u.reviews || 0,
      docs: r.docs || u.docs,
      insurance: r.insurance || u.insurance,
      closed: r.closed || u.closed || 0,
      phone: u.phone,
      phones: u.phones || p.phones || (u.phone ? [u.phone] : []),
      trades: u.trades || p.trades || [],
      flags: u.flags || p.flags || [],
      photo: p.photo || u.photo || "",
      workPhotos: p.workPhotos || u.workPhotos || [],
      verified: u.verified || p.verified || r.docs,
      verifyPending: u.verifyPending || p.verifyPending,
      lastAct: u.lastAct || p.lastAct || 0,
      warn: uniqueComplaints(u.code).length >= 2,
    };
  });
  return fromUsers.concat(SEED_MEMBERS.filter((s) => !fromUsers.some((u) => u.code === s.code)));
}
function myRep() {
  const p = store.profile();
  const list = Array.isArray(p.reviews) ? p.reviews : [];
  const avg = list.length ? list.reduce((s, r) => s + Number(r.stars || 0), 0) / list.length : 0;
  return {
    avg: Math.round(avg * 10) / 10,
    count: list.length,
    phone: Boolean(store.session || p.phone),
    docs: Boolean(p.docs),
    insurance: Boolean(p.insurance),
    closed: Number(p.closed || 0),
    warn: Boolean(p.warn),
  };
}
function starOnPhoto(j) {
  const r = liveRepFor(j.posterCode || j.id, j);
  if (!r.count) return "";
  const n = Math.max(1, Math.min(5, Math.round(r.avg || 0)));
  return `<span class="star-on-photo">${"★".repeat(n)}</span>`;
}
function starsHtml(score, count) {
  if (!count) return `<span class="meta">${t("noRating")}</span>`;
  const full = Math.round(score);
  return `<span class="stars">${"★".repeat(full)}${"☆".repeat(Math.max(0, 5 - full))} <b>${score}</b> · ${count}</span>`;
}
function badgesHtml(item) {
  if (isVerifiedMember(item)) return `<span class="tag ok">${t("badgeVerified")}</span>`;
  return `<span class="tag muted">${t("badgeUnverified")}</span>`;
}

function reviewText(r) {
  if (store.lang === "he") return r.textHe || r.textRu || r.text || "";
  if (store.lang === "en") return r.textEn || r.textRu || r.text || "";
  return r.textRu || r.text || "";
}
function reviewsFor(id) {
  const extra = asList((store.extraRevs() || {})[id]);
  const extra2 = id ? asList((store.extraRevs() || {})[String(id)]) : [];
  const allExtra = extra.concat(extra2.filter((r) => extra.indexOf(r) < 0));
  return asList(DEMO_REVIEWS[id]).concat(allExtra).filter(Boolean);
}
function myReviewerId() {
  return normPhone(myPhone() || (store.profile() && store.profile().phone) || store.session || "");
}
function alreadyReviewed(id) {
  const me = myReviewerId();
  if (!me || !id) return false;
  return reviewsFor(id).some((r) => {
    const from = normPhone(r.fromPhone || r.phone || "");
    if (from && from === me) return true;
    const myName = String((store.profile() && store.profile().name) || "").trim().toLowerCase();
    return myName && from === "" && String(r.name || "").trim().toLowerCase() === myName;
  });
}
function isSelfTarget(id) {
  const me = store.user() || store.profile() || {};
  if (!id) return false;
  if (me.code && String(me.code) === String(id)) return true;
  if (me.phone && normPhone(me.phone) === normPhone(id)) return true;
  const owner = typeof findOwnerByTarget === "function" ? findOwnerByTarget(id) : null;
  if (owner && owner.phone && myPhone() && normPhone(owner.phone) === myPhone()) return true;
  return false;
}
function contactKey(a, b) {
  const x = normPhone(a), y = normPhone(b);
  return [x, y].sort().join("_");
}
function markWorked(targetPhone, targetCode) {
  const me = myReviewerId();
  if (!me) return;
  const map = store.contacts();
  if (targetPhone) map[contactKey(me, targetPhone)] = Date.now();
  if (targetCode) map["code_" + me + "_" + targetCode] = Date.now();
  store.saveContacts(map);
  touchAct();
}
function workedWith(id) {
  const me = myReviewerId();
  if (!me || !id) return false;
  const map = store.contacts();
  if (map["code_" + me + "_" + id]) return true;
  const owner = typeof findOwnerByTarget === "function" ? findOwnerByTarget(id) : null;
  const phone = owner && owner.phone ? normPhone(owner.phone) : normPhone(id);
  if (phone && map[contactKey(me, phone)]) return true;
  return false;
}
function canWriteReview(id) {
  if (!store.session) return false;
  if (isSelfTarget(id)) return false;
  if (alreadyReviewed(id)) return false;
  return workedWith(id);
}
function reviewWeight(r) {
  const at = Number(r && r.at) || 0;
  if (!at) return 0.7;
  const age = Date.now() - at;
  if (age > 365 * 24 * 3600 * 1000) return 0.4;
  return 1;
}
function lastReviewAt(id) {
  let last = 0;
  reviewsFor(id).forEach((r) => { last = Math.max(last, Number(r.at) || 0); });
  return last;
}
function fmtDay(ms) {
  if (!ms) return "";
  const d = new Date(ms);
  if (Number.isNaN(d.getTime())) return "";
  const p = (n) => String(n).padStart(2, "0");
  return p(d.getDate()) + "." + p(d.getMonth() + 1) + "." + d.getFullYear();
}
function complaintsFor(id) {
  const map = store.complaints();
  return asList(map[id]).concat(id ? asList(map[String(id)]) : []);
}
function uniqueComplaints(id) {
  const seen = {};
  return complaintsFor(id).filter((c) => {
    const k = normPhone(c.fromPhone || c.phone || "") || String(c.name || "x");
    if (seen[k]) return false;
    seen[k] = 1;
    return true;
  });
}
function hasMyComplaint(id) {
  const me = myReviewerId();
  return uniqueComplaints(id).some((c) => normPhone(c.fromPhone) === me);
}
function isVerifiedMember(m) {
  if (!m) return false;
  if (m.verified || m.docs) return true;
  const u = store.users().find((x) => x.code === m.code || (m.phone && x.phone === m.phone));
  return Boolean(u && (u.verified || u.docs));
}
function profileScore(m) {
  const p = (m && m.phone === store.session) ? { ...m, ...store.profile() } : (m || {});
  let n = 0;
  if (p.name) n += 15;
  if (p.photo) n += 15;
  if (p.city) n += 10;
  if ((p.trades || []).length) n += 10;
  if (p.phone) n += 10;
  if (p.docs || p.verified) n += 15;
  if ((p.workPhotos || []).length >= 3) n += 15;
  if (p.verified || p.docs) n += 10;
  return Math.min(100, n);
}
function isSlowMember(m) {
  const at = Number((m && m.lastAct) || 0);
  if (!at) return false;
  return (Date.now() - at) > 14 * 24 * 3600 * 1000;
}
function isFreshMember(m) {
  const at = Number((m && m.lastAct) || 0);
  return at && (Date.now() - at) < 2 * 24 * 3600 * 1000;
}
function touchAct() {
  const p = store.profile() || {};
  store.saveProfile({ ...p, lastAct: Date.now() });
  const users = store.users().map((u) => u.phone === store.session ? { ...u, lastAct: Date.now() } : u);
  store.saveUsers(users);
}
function rankScore(m) {
  const live = liveRepFor(m.code, m);
  const stars = live.avg || 0;
  const comp = profileScore(m) / 100;
  const ver = isVerifiedMember(m) ? 1.15 : 0.85;
  const slow = isSlowMember(m) ? 0.8 : 1;
  const warns = uniqueComplaints(m.code).length;
  const low = comp < 0.5 ? 0.7 : 1;
  return stars * ver * slow * low * (0.6 + 0.4 * comp) - warns * 0.35;
}
function avgStars(list) {
  const rows = (list || []).filter((r) => Number(r.stars) > 0);
  if (!rows.length) return 0;
  return Math.round(rows.reduce((s, r) => s + Number(r.stars), 0) / rows.length * 10) / 10;
}
function liveRepFor(id, fallback) {
  const list = reviewsFor(id);
  if (!list.length) return { avg: (fallback && fallback.rating) || 0, count: (fallback && fallback.reviews) || 0, last: 0 };
  let wsum = 0, w = 0, last = 0;
  list.forEach((r) => {
    const ww = reviewWeight(r);
    wsum += Number(r.stars || 0) * ww;
    w += ww;
    last = Math.max(last, Number(r.at) || 0);
  });
  return { avg: w ? Math.round(wsum / w * 10) / 10 : 0, count: list.length, last };
}
function reviewsBox(id, kind) {
  const open = store.openRev === id;
  const list = reviewsFor(id);
  const shown = list.map((r) => `<div class="review-item"><b>★${r.stars}</b> ${r.name || t("reviews")} — ${reviewText(r)}</div>`).join("");
  const last = lastReviewAt(id);
  const lastLine = last ? `<div class="meta">${t("lastReview")}: ${fmtDay(last)}</div>` : "";
  let form = "";
  if (isSelfTarget(id)) {
    form = `<div class="meta">${t("reviewSelf")}</div>`;
  } else if (!store.session) {
    form = `<div class="meta">${t("loginToReview")}</div><button class="btn ghost" type="button" data-tab="profile">${t("login")}</button>`;
  } else if (store.session && alreadyReviewed(id)) {
    form = `<div class="meta">${t("reviewOnce")}</div>`;
  } else if (store.session && !workedWith(id)) {
    form = `<div class="meta">${t("reviewNeedWork")}</div>
      <button class="btn ghost" type="button" data-worked="${id}">${t("workedBtn")}</button>`;
  } else {
    form = `<form class="review-write" data-rev-target="${id}">
    <label>${kind === "worker" || kind === "offer" ? t("writeReview") : t("writeReviewC")}</label>
    <select name="stars"><option>5</option><option>4</option><option>3</option><option>2</option><option>1</option></select>
    <textarea name="text" placeholder="${t("reviewText")}"></textarea>
    <button class="btn" type="submit">${t("sendReview")}</button>
  </form>`;
  }
  form = lastLine + form;
  return `<button class="btn ghost" type="button" data-open-rev="${id}">${open ? t("hideReviews") : t("viewReviews")}</button>
    ${open ? `<div class="reviews">${shown || `<div class="meta">${t("noRating")}</div>`}${form}${complainBox(id)}</div>` : ""}`;
}
function complainBox(id) {
  if (isSelfTarget(id)) return "";
  if (!store.session) return `<div class="meta">${t("loginToReview")}</div>`;
  if (store.session && hasMyComplaint(id)) return `<div class="meta">${t("complainOnce")}</div>`;
  return `<form class="complain-write" data-complain-target="${id}">
    <label>${t("complain")}</label>
    <textarea name="why" placeholder="${t("complainWhy")}" required></textarea>
    <button class="btn danger" type="submit">${t("complain")}</button>
  </form>`;
}
function setLang(lang) {
  store.lang = lang;
  document.documentElement.lang = lang === "he" ? "he" : lang === "en" ? "en" : "ru";
  document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
  document.body.dir = lang === "he" ? "rtl" : "ltr";
}


function findOwnerByTarget(id) {
  if (!id) return null;
  const members = memberList();
  const m = members.find((x) => x.code === id || normPhone(x.phone) === normPhone(id));
  if (m && m.phone) return m;
  const job = (typeof findJob === "function" ? findJob(id) : null) || publicJobs().concat(typeof DEMO !== "undefined" ? DEMO : []).find((j) => j.id === id);
  if (job && job.phone) return { phone: job.phone, name: job.name || "", code: job.posterCode || job.id };
  return m || null;
}
function notifyOwnerWa(owner, kind, extra) {
  if (!owner || !owner.phone) return;
  if (kind !== "review" && kind !== "offer") return;
  const mePhone = myPhone();
  if (mePhone && normPhone(owner.phone) === mePhone) return;
  const me = store.profile() || {};
  const from = me.name || mePhone || "Kadlan";
  let text = "";
  if (kind === "review") {
    text = t("waReview") + ": " + (extra && extra.stars || "") + "/5 " + t("waStars") + " — " + from + (extra && extra.text ? ". " + extra.text : "") + "\nhttps://kadlan.co.il";
  } else {
    const key = "viewed_" + normPhone(owner.phone);
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, "1");
    text = t("waViewed") + " — " + from + (owner.code ? " (" + owner.code + ")" : "") + "\nhttps://kadlan.co.il";
  }
  const url = waLink(owner.phone, text);
  try {
    fetch(fb("/inbox/" + normPhone(owner.phone)), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind, text, from, at: Date.now() })
    }).catch(() => {});
  } catch (e) {}
  if (url && url !== "#") {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => a.remove(), 500);
  }
}

function waKindLabel(kind, role) {
  if (kind === "job") return t("waKindJob");
  if (kind === "offer") return t("waKindOffer");
  if (role === "worker") return t("waKindOffer");
  if (role === "contractor") return t("waKindJob");
  return t("waKindMember");
}
function plainText(value) {
  return String(value || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}
function waCats(trades) {
  const ids = Array.isArray(trades) ? trades : (trades ? [trades] : []);
  return ids.map((id) => plainText(tradeLabel(id))).filter(Boolean).join(", ");
}
function waHelloText(code, topic, kind, trades, role) {
  const p = store.profile() || {};
  const u = store.user ? store.user() : null;
  const me = p.name || (u && u.name) || t("guestAnon");
  const subj = plainText(topic || code || "") || "Kadlan";
  const cat = waCats(trades) || subj;
  const type = waKindLabel(kind, role);
  return t("waHello")
    .replace("{kind}", type)
    .replace("{cat}", cat)
    .replace("{topic}", subj)
    .replace("{me}", me);
}
function waLink(phone, text) {
  const num = String(phone || "").replace(/\D/g, "");
  if (!num) return "#";
  const full = num.startsWith("972") ? num : num.replace(/^0/, "972");
  return `https://wa.me/${full}?text=${encodeURIComponent(text || "")}`;
}

function waBtn(phone, code, topic, kind, trades, role) {
  if (!phone) return "";
  const msg = code === "support" ? t("helpWrite") : waHelloText(code, topic, kind, trades, role);
  return `<a class="btn wa-btn" data-contact="${phone}" data-contact-code="${code || ""}" href="${waLink(phone, msg)}">${ico("wa")}<span>WhatsApp</span></a>`;
}


let deferredInstall = null;
window.addEventListener("hashchange", () => { if (wantAdminLink()) openAdminLogin(); });
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredInstall = e;
  try { render(); } catch (err) {}
});
function isStandalone() {
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}
function isIos() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent);
}
function installBanner() {
  if (isStandalone()) return "";
  if (localStorage.getItem("bil_hideinst") === "1") return "";
  if (deferredInstall) {
    return `<div class="install-bar"><button type="button" class="btn" data-install="1">${t("installApp")}</button><button type="button" class="btn ghost" data-install-hide="1">${t("installLater")}</button></div>`;
  }
  if (isIos()) {
    return `<div class="install-bar"><span>${t("installIos")}</span><button type="button" class="btn ghost" data-install-hide="1">${t("installLater")}</button></div>`;
  }
  return `<div class="install-bar"><span>${t("installApp")}</span><button type="button" class="btn ghost" data-install-hide="1">${t("installLater")}</button></div>`;
}
function render() {
  try { renderSafe(); } catch (e) {
    const app = document.getElementById("app");
    console.error(e);
    if (app) app.innerHTML = "<div class=\"card\"><p>Сбой экрана.</p><p class=\"meta\">" + String(e && e.message || e) + "</p><button class=\"btn\" type=\"button\" id=\"fix-crash\">Сбросить данные на этом устройстве</button></div>";
    const b = document.getElementById("fix-crash");
    if (b) b.onclick = () => {
      Object.keys(localStorage).forEach((k) => { if (k.indexOf("bil_") === 0) localStorage.removeItem(k); });
      location.replace("./?ok=1");
    };
  }
}
function renderSafe() {
  const app = document.getElementById("app");
  const langBar = `
    <div class="lang">
      <button class="${store.lang === "ru" ? "on" : ""}" data-lang="ru">RU</button>
      <button class="${store.lang === "he" ? "on" : ""}" data-lang="he">עב</button>
      <button class="${store.lang === "en" ? "on" : ""}" data-lang="en">EN</button>
    </div>`;

  const user = store.user() || (isLogged() ? ensureUserRow() : null);
  if (user && user.role) store.role = user.role;

  let main = "";
  if (store.tab === "feed" && String(store.openJob).startsWith("member:")) {
    try { main = viewMemberDetail(store.openJob.slice(7)); }
    catch (e) { main = `<div class="card"><button class="btn ghost" data-close-job="1">${t("back")}</button><p>${t("empty")}</p><p class="meta">${e.message}</p></div>`; }
  } else if (store.tab === "feed" && store.openJob) {
    try { main = viewJobDetail(store.openJob); }
    catch (e) { main = `<div class="card"><button class="btn ghost" data-close-job="1">${t("back")}</button><p>${t("empty")}</p><p class="meta">${e.message}</p></div>`; }
  }
  else if (store.tab === "feed") main = store.board === "rules" ? viewRules() : store.board === "members" ? (user ? viewMembers() : viewAuth()) : store.board === "rating" ? (user ? viewRatingBoard() : viewAuth()) : viewFeed();
  else if (store.tab === "new" || store.tab === "order") {
    try { main = !user ? viewAuth() : viewNew(); }
    catch (e) { main = `<div class="card"><p>${t("empty")}</p><p class="meta">${esc(e && e.message)}</p></div>`; }
  }
  else if (store.tab === "work") {
    try { main = !user ? viewAuth() : viewSeek(); }
    catch (e) { main = `<div class="card"><p>${t("empty")}</p><p class="meta">${esc(e && e.message)}</p></div>`; }
  }
  else if (store.tab === "mine" || store.tab === "history") main = user ? viewMine(store.tab === "history") : viewAuth();
  else if (store.tab === "help") {
    try { main = viewHelp(); }
    catch (e) { main = `<div class="card"><p>${t("empty")}</p></div>`; }
  }
  else if (store.tab === "profile") {
    try {
      if (store.admin) main = viewAdmin() + (user ? viewProfile() : "");
      else if (wantAdminLink()) main = viewAdminGate();
      else main = user ? viewProfile() : viewAuth();
    }
    catch (e) { main = `<div class="card"><p>${t("empty")}</p><p class="meta">${esc(e && e.message)}</p><button class="btn" data-tab="feed">${t("feed")}</button></div>`; }
  }
  else main = `<div class="card"><p>${t("ad")}</p><p class="meta">${t("demo")}</p></div>`;

  app.innerHTML = `
    <div class="app">
      <div class="top"><div class="logo"><img class="brand-face" src="icons/hero.jpg?v=30" alt="" /><span>${t("brand")}</span></div>${langBar}<button type="button" class="help-mini" data-tab="help">${t("helpTab")}</button></div>
      ${installBanner()}
      ${main}
      <nav class="nav">
        <button data-tab="feed" class="${store.tab === "feed" ? "on" : ""}">${ico("feed")}${t("feed")}</button>
        <button data-tab="order" class="${store.tab === "order" || store.tab === "new" ? "on" : ""}">${ico("hasJob")}${t("postOrder")}</button>
        <button data-tab="work" class="${store.tab === "work" ? "on" : ""}">${ico("needWork")}${t("postWork")}</button>
        <button data-tab="profile" class="${store.tab === "profile" || store.tab === "mine" || store.tab === "history" ? "on" : ""}">${ico("profile")}${t("profile")}</button>
      </nav>
    </div>`;
  bind();
  bindViewer();
}

function boardNav() {
  if (store.openJob) return `<div class="filters"><button class="chip" data-board="feed" data-close-job="1">${t("back")}</button></div>`;
  return `<div class="filters">
    <button class="chip ${store.board === "feed" ? "on" : ""}" data-board="feed">${t("boardFeed")}</button>
    <button class="chip ${store.board === "members" ? "on" : ""}" data-board="members">${t("members")}</button>
    <button class="chip ${store.board === "rating" ? "on" : ""}" data-board="rating">${t("ratingBoard")}</button>
  </div>`;
}
function cityChips() {
  const opts = [`<option value="all">${t("all")}</option>`]
    .concat(CITIES.map((row) => `<option value="${row[0]}" ${store.cityFilter === row[0] ? "selected" : ""}>${loc(row)}</option>`))
    .join("");
  return `<div class="filters"><label class="citypick">${ico("city")}<select id="city-filter">${opts}</select></label></div>`;
}
const CITY_XY = {
  tlv:[32.08,34.78], rishon:[31.97,34.79], netanya:[32.33,34.86], haifa:[32.79,34.99],
  jerusalem:[31.77,35.22], petah:[32.09,34.89], ashdod:[31.80,34.65], beer:[31.25,34.79],
  holon:[32.02,34.77], herzliya:[32.16,34.84], rehovot:[31.89,34.81], eilat:[29.56,34.95],
  ashkelon:[31.67,34.57], kfar:[32.18,34.91], batyam:[32.02,34.75], modiim:[31.90,35.01]
};
function geoKm(lat1, lon1, lat2, lon2) {
  const R = 6371, dLat = (lat2-lat1)*Math.PI/180, dLon = (lon2-lon1)*Math.PI/180;
  const x = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)**2;
  return 2*R*Math.asin(Math.min(1, Math.sqrt(x)));
}
function nearestCityId(lat, lon) {
  let best = "tlv", bestD = 1e9;
  Object.keys(CITY_XY).forEach((id) => {
    const xy = CITY_XY[id];
    const d = geoKm(lat, lon, xy[0], xy[1]);
    if (d < bestD) { bestD = d; best = id; }
  });
  return best;
}
function askGeoCity() {
  if (!navigator.geolocation) return;
  if (localStorage.getItem("bil_geo_done") === "1") return;
  navigator.geolocation.getCurrentPosition((pos) => {
    localStorage.setItem("bil_geo_done", "1");
    const id = nearestCityId(pos.coords.latitude, pos.coords.longitude);
    store.cityFilter = id;
    if (store.radius === "999") store.radius = "40";
    render();
  }, () => { localStorage.setItem("bil_geo_done", "1"); }, { enableHighAccuracy: false, timeout: 8000, maximumAge: 600000 });
}
function cityKm(a, b) {
  const A = CITY_XY[a], B = CITY_XY[b];
  if (!A || !B) return a === b ? 0 : 9999;
  const R = 6371, dLat = (B[0]-A[0])*Math.PI/180, dLon = (B[1]-A[1])*Math.PI/180;
  const x = Math.sin(dLat/2)**2 + Math.cos(A[0]*Math.PI/180)*Math.cos(B[0]*Math.PI/180)*Math.sin(dLon/2)**2;
  return 2*R*Math.asin(Math.min(1, Math.sqrt(x)));
}
const NEAR = {
  tlv: ["tlv","rishon","petah","holon","batyam","herzliya","kfar"],
  rishon: ["rishon","tlv","holon","rehovot","ashdod","batyam"],
  netanya: ["netanya","herzliya","kfar","tlv"],
  haifa: ["haifa"],
  jerusalem: ["jerusalem","modiin"],
  petah: ["petah","tlv","kfar","modiin"],
  ashdod: ["ashdod","ashkelon","rishon","rehovot"],
  beer: ["beer"],
  holon: ["holon","batyam","tlv","rishon"],
  herzliya: ["herzliya","tlv","netanya","kfar"],
  rehovot: ["rehovot","rishon","ashdod","modiin"],
  eilat: ["eilat"],
  ashkelon: ["ashkelon","ashdod"],
  kfar: ["kfar","petah","herzliya","tlv","netanya"],
  batyam: ["batyam","holon","tlv","rishon"],
  modiim: ["modiin","jerusalem","petah","rehovot"]
};
function nearCities(id) { return NEAR[id] || (id && id !== "all" ? [id] : []); }
function inCity(item) {
  if (store.cityFilter === "all" || store.radius === "999") return true;
  const cities = item.cities || (item.city ? [item.city] : []);
  const r = Number(store.radius || 40);
  if (!r) return cities.includes(store.cityFilter);
  return cities.some((c) => c === store.cityFilter || cityKm(store.cityFilter, c) <= r + 1);
}
function jobAmount(j) {
  const raw = String((j && j.budget) || "");
  if (!raw) return null;
  const low = raw.toLowerCase();
  if (/договор|סיכום|agreed|talk|догов/.test(low)) return null;
  const n = Number(String(raw).replace(/[^0-9.,]/g, "").replace(/,/g, ""));
  return Number.isFinite(n) && n > 0 ? n : null;
}
function shekel(v) {
  const raw = String(v || "").trim();
  if (!raw) return "₪";
  if (/₪|nis|שק/i.test(raw)) return raw.replace(/nis/ig, "₪");
  const n = jobAmount({ budget: raw });
  if (n != null) return "₪ " + Math.round(n).toLocaleString("en-US");
  return "₪ " + raw;
}
function inPay(j) {
  const f = store.payFilter || "all";
  if (f === "all") return true;
  const n = jobAmount(j);
  if (f === "talk") return n == null;
  if (n == null) return false;
  if (f === "0-5000") return n <= 5000;
  if (f === "5000-15000") return n > 5000 && n <= 15000;
  if (f === "15000-50000") return n > 15000 && n <= 50000;
  if (f === "50000-150000") return n > 50000 && n <= 150000;
  if (f === "150000+") return n > 150000;
  return true;
}


function jobStamp(j) {
  if (j && j.created) return Number(j.created) || 0;
  const m = String((j && j.id) || "").match(/^[jo](\d{10,})$/);
  return m ? Number(m[1]) : 0;
}
function jobEndDay(j) {
  const raw = String((j && (j.dateTo || j.dates)) || "");
  const iso = raw.match(/(\d{4})-(\d{2})-(\d{2})/g);
  if (iso && iso.length) return iso[iso.length - 1];
  const dmy = raw.match(/(\d{1,2})[./](\d{1,2})(?:[./](\d{2,4}))?/);
  if (dmy) {
    const d = Number(dmy[1]), mo = Number(dmy[2]), y = dmy[3] ? Number(dmy[3]) : new Date().getFullYear();
    const year = y < 100 ? 2000 + y : y;
    return year + "-" + String(mo).padStart(2,"0") + "-" + String(d).padStart(2,"0");
  }
  const months = { январ:1, феврал:2, март:3, апрел:4, мая:5, май:5, июн:6, июл:7, август:8, сентябр:9, октябр:10, ноябр:11, декабр:12 };
  const low = raw.toLowerCase();
  for (const k of Object.keys(months)) {
    if (low.includes(k)) {
      const y = new Date().getFullYear();
      const last = new Date(y, months[k], 0).getDate();
      return y + "-" + String(months[k]).padStart(2,"0") + "-" + String(last).padStart(2,"0");
    }
  }
  return "";
}
function jobExpired(j) {
  const day = jobEndDay(j);
  if (!day) return false;
  const today = new Date();
  const tiso = today.getFullYear() + "-" + String(today.getMonth()+1).padStart(2,"0") + "-" + String(today.getDate()).padStart(2,"0");
  return day < tiso;
}

function avatarFor(key) {
  const s = String(key || "user");
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 33 + s.charCodeAt(i)) >>> 0;
  return "avatars/a" + (h % 8) + ".jpg";
}
function tradeAvatar(trades, role) {
  const pics = { tile:1, elec:1, paint:1, plumb:1, gypsum:1, ac:1, alum:1, frame:1, reno:1, facade:1, other:1 };
  const first = (trades || []).find((id) => pics[id]);
  if (first === "facade") return "icons/paint.gif?v=24";
  if (first) return "icons/" + first + ".gif?v=24";
  if (role === "worker") return "icons/worker.gif?v=24";
  return "icons/contractor.gif?v=24";
}
function face(name, photo, role, trades) {
  if (photo) return photo;
  return tradeAvatar(trades, role);
}
function isCartoonSrc(src) {
  const s = String(src || "");
  return !s || s.indexOf("icons/") >= 0 || s.indexOf("avatars/") >= 0 || /\.gif(\?|$)/.test(s);
}
function realFaceSrc(photo) {
  const src = photoSrc(photo);
  if (!src || isCartoonSrc(src)) return "";
  if (src.startsWith("data:image") || src.startsWith("http")) return src;
  return "";
}
function jobPhoto(j) {
  const poster = findPoster(j) || {};
  const mine = (j && j.phone && myPhone() && normPhone(j.phone) === myPhone()) ? (store.profile() || {}) : {};
  const face = realFaceSrc(mine.photo) || realFaceSrc(poster.photo) || realFaceSrc(j && j.photo);
  if (face) return face;
  const plan = String((j && j.planData) || "");
  if (plan.startsWith("data:image") || (plan.startsWith("http") && !isCartoonSrc(plan))) return plan;
  const trades = (j && (j.trades || (j.trade ? [j.trade] : []))) || [];
  if (trades.length) return tradeAvatar(trades, j.kind === "offer" ? "worker" : "contractor");
  if (j && j.kind === "offer") return "icons/worker.gif?v=24";
  return "icons/contractor.gif?v=24";
}
function memberCard(m) {
  return `<article class="card job tt-card ${m.role === "worker" ? "offer" : "order"}">
    <div class="tt-row">
      <span class="picwrap big"><img class="tt-photo" src="${face(m.name, m.photo, m.role === "worker" ? "worker" : "contractor", m.trades)}" alt="" /></span>
      <div class="tt-body">
        <div class="badge ${m.role === "worker" ? "offer" : "order"}">${m.code}</div>
        <h3>${m.name || m.code}</h3>
        <div class="meta">${m.role === "worker" ? t("nowWorker") : t("nowContractor")} · ${m.city ? ico("city") + cityName(m.city) : ""}</div>
        <div>${starsHtml((liveRepFor(m.code, m).avg), (liveRepFor(m.code, m).count))}</div>
        <div class="tags">${badgesHtml(m)}</div>
        <div class="tags">${(m.trades || []).map((id) => `<span class="tag">${tradeLabel(id)}</span>`).join("")}</div>
        ${m.role === "worker" ? `<div class="flags">${flagsHtml(m.flags)}</div>` : ""}
        ${m.phone && !isSelfTarget(m.code) ? `<div class="wa-row">${waBtn(m.phone, m.code, m.name, m.role === "worker" ? "offer" : "job", m.trades, m.role)}</div>` : ""}
        <button class="btn ghost sm details-sep" type="button" data-open-member="${m.code}">${t("details")}</button>
      </div>
    </div>
  </article>`;
}
function viewMembers() {
  const q = store.q.trim().toLowerCase();
  let list = memberList();
  if (q) list = list.filter((m) => `${m.code} ${m.name} ${m.phone || ""}`.toLowerCase().includes(q));
  list = list.filter(inCity);
  return boardNav() + cityChips() + `<div class="card">
    <label>${t("searchCode")}</label>
    <input id="member-q" value="${store.q}" placeholder="K-10421" />
  </div>` + (list.map(memberCard).join("") || `<div class="empty">${t("empty")}</div>`);
}
function viewHelp() {
  const items = [1,2,3,4,5,6,7,8].map((n) => `<details class="faq"><summary>${t("helpQ"+n)}</summary><p>${t("helpA"+n)}</p></details>`).join("");
  const wa = SUPPORT_PHONE ? `<div class="wa-row">${waBtn(SUPPORT_PHONE, "support")}</div><p class="meta">${t("helpWrite")}</p>` : "";
  return `<div class="card">
    <h2>${t("helpTitle")}</h2>
    <p>${t("helpLead")}</p>
    ${items}
    ${wa}
  </div>`;
}
function viewRules() {
  return boardNav() + `<div class="card rules-card">
    <h2>${t("rulesTitle")}</h2>
    <p>${t("rulesLead")}</p>
    <ol class="rules">
      <li>${t("rules1")}</li>
      <li>${t("rules2")}</li>
      <li>${t("rules3")}</li>
      <li>${t("rules4")}</li>
      <li>${t("rules5")}</li>
      <li>${t("rules6")}</li>
      <li>${t("rules7")}</li>
      <li>${t("rules8")}</li>
    </ol>
  </div>`;
}
function viewRatingBoard() {
  const list = memberList().filter((m) => m.reviews || m.closed || profileScore(m) >= 50);
  const workers = list.filter((m) => m.role === "worker").sort((a, b) => rankScore(b) - rankScore(a));
  const contractors = list.filter((m) => m.role !== "worker").sort((a, b) => rankScore(b) - rankScore(a));
  return boardNav() + `<div class="card"><b>${t("topWorkers")}</b></div>` +
    (workers.slice(0, 10).map((m, i) => `<div class="meta">${i + 1}. ${m.code} ${m.name}</div>` + memberCard(m)).join("") || `<div class="empty">${t("emptyOffers")}</div>`) +
    `<div class="card"><b>${t("topContractors")}</b></div>` +
    (contractors.slice(0, 10).map((m, i) => `<div class="meta">${i + 1}. ${m.code} ${m.name}</div>` + memberCard(m)).join("") || `<div class="empty">${t("emptyJobs")}</div>`);
}

function payChips() {
  const rows = [
    ["all", t("payAll")],
    ["talk", t("payTalk")],
    ["0-5000", t("pay1")],
    ["5000-15000", t("pay2")],
    ["15000-50000", t("pay3")],
    ["50000-150000", t("pay4")],
    ["150000+", t("pay5")]
  ];
  return `<div class="filters">` + rows.map(([v,l]) => `<button class="chip ${store.payFilter === v ? "on" : ""}" data-pay="${v}">${l}</button>`).join("") + `</div>`;
}
function filterPanel() {
  if (store.panel === "trade") {
    const rows = [`<button class="sheet-item ${store.filter === "all" ? "on" : ""}" data-filter="all">${t("allTrades")}</button>`]
      .concat(TRADES.map(([id]) => `<button class="sheet-item ${store.filter === id ? "on" : ""}" data-filter="${id}">${tradeLabel(id)}</button>`));
    return `<div class="sheet"><div class="sheet-title">${t("pickTrade")}</div>${rows.join("")}</div>`;
  }
  if (store.panel === "city") {
    const rads = [["0", t("radius0")],["20", t("radius20")],["40", t("radius40")],["80", t("radius80")],["999", t("radiusAll")]];
    const cities = [`<button class="sheet-item ${store.cityFilter === "all" ? "on" : ""}" data-city="all">${t("all")}</button>`]
      .concat(CITIES.map((row) => `<button class="sheet-item ${store.cityFilter === row[0] ? "on" : ""}" data-city="${row[0]}">${loc(row)}</button>`));
    return `<div class="sheet"><div class="sheet-title">${t("cityPick")}</div>
      <button class="city-btn" type="button" data-geo="1">${ico("city")}<span><b>${t("nearMe")}</b><small>${t("nearMeHint")}</small></span></button>
      <div class="filters">${rads.map(([v,l]) => `<button class="chip ${store.radius === v ? "on" : ""}" data-radius="${v}">${l}</button>`).join("")}</div>
      ${cities.join("")}</div>`;
  }
  return "";
}

function viewFeed() {
  const own = publicJobs().filter((j) => !j.archived && !jobExpired(j))
    .sort((a, b) => jobStamp(b) - jobStamp(a));
  const demo = DEMO.filter((j) => !jobExpired(j));
  const all = [...own, ...demo];
  let filtered = all;
  const itemKind = (j) => j.kind === "offer" ? "offer" : "job";
  if (store.kind === "job") filtered = filtered.filter((j) => itemKind(j) === "job");
  if (store.kind === "offer") filtered = filtered.filter((j) => itemKind(j) === "offer");
  if (store.filter !== "all") filtered = filtered.filter((j) => (j.trades || [j.trade]).includes(store.filter));
  if (store.kind !== "job") store.payFilter = "all";
  filtered = filtered.filter(inCity).filter((j) => store.kind !== "job" || inPay(j));
  const tradeNow = store.filter === "all" ? t("allTrades") : tradeLabel(store.filter);
  const cityNow = store.cityFilter === "all" ? t("all") : cityName(store.cityFilter);
  const radLbl = store.cityFilter === "all" || store.radius === "999" ? t("radiusAll") : store.radius === "0" ? t("radius0") : ("+" + store.radius + " " + "км");
  const kinds = `<div class="kind-row">
      <button class="kind-btn ${store.kind === "offer" ? "on" : ""}" data-kind="offer" data-panel="trade">${ico("worker")}<span><b>${t("filterJobs")}</b><small>${tradeNow}</small></span></button>
      <button class="kind-btn ${store.kind === "job" ? "on" : ""}" data-kind="job" data-panel="trade">${ico("contractor")}<span><b>${t("filterOffers")}</b><small>${tradeNow}</small></span></button>
    </div>
    <button class="city-btn" type="button" data-panel="city">${ico("city")}<span><b>${cityNow}</b><small>${radLbl}</small></span></button>
    ` + (store.kind === "job" ? payChips() : "") + filterPanel();
  const chips = "";
  if (!filtered.length) {
    const msg = store.kind === "offer" ? t("emptyOffers") : store.kind === "job" ? t("emptyJobs") : t("empty");
    return kinds + chips + `<div class="empty">${msg}</div>`;
  }
  const demoIds = new Set(DEMO.map((d) => d.id));
  filtered.sort((a, b) => {
    const da = demoIds.has(a.id) ? 1 : 0;
    const db = demoIds.has(b.id) ? 1 : 0;
    if (da !== db) return da - db;
    return jobStamp(b) - jobStamp(a);
  });
  return kinds + chips + filtered.map((j) => {
    const offer = j.kind === "offer";
    const title = jobTitle(j);
    const cities = (j.cities || [j.city]).filter(Boolean).map(cityName).join(", ");
    const text = `${title} — ${cities}`;
    const demo = demoIds.has(j.id);
    const pic = jobPhoto(j);
    return `<article class="card job tt-card slim ${offer ? "offer" : "order"}">
      <div class="tt-row">
        <span class="picwrap big tap-open" data-open-job="${j.id}"><img class="tt-photo" src="${pic}" alt="" />${starOnPhoto(j)}</span>
        <div class="tt-body">
          <div class="badge-row">${demo ? `<span class="badge demo">${t("demoTag")}</span>` : ""}<span class="badge ${offer ? "offer" : "order"}">${offer ? t("badgeOffer") : t("badgeJob")}</span></div>
          <h3 class="tap-open" data-open-job="${j.id}">${title}</h3>
          <div class="meta">${ico("city")}${cities}${!offer && j.budget ? " · " + shekel(j.budget) : ""}</div>
          <div class="wa-row">${waBtn(j.phone, j.posterCode, text, j.kind, j.trades || j.trade, "")}</div>
        </div>
      </div>
    </article>`;
  }).join("");
}

function findJob(id) {
  return publicJobs().concat(DEMO).find((j) => j.id === id) || null;
}
function findPoster(job) {
  if (!job) return null;
  const list = memberList();
  return list.find((m) => m.code && m.code === job.posterCode)
    || list.find((m) => m.phone && job.phone && m.phone === job.phone)
    || {
      code: job.posterCode || "—",
      name: job.name || job.phone || t("postedBy"),
      role: job.kind === "offer" ? "worker" : "contractor",
      city: job.city,
      rating: job.rating || 0,
      reviews: job.reviews || 0,
      docs: job.docs,
      insurance: job.insurance,
      closed: job.closed || 0,
      phone: job.phone,
      trades: job.trades || [job.trade],
    };
}
function docsBlock(m, phone) {
  const owner = normPhone(phone || m.phone || "");
  const me = myPhone();
  const mine = me && owner && me === owner;
  const files = (privDocsCache[owner] || []).concat((m.docFiles || []).map((n) => typeof n === "string" ? { name: n, data: "" } : n));
  const uniq = [];
  const seen = new Set();
  files.forEach((f) => {
    const k = (f && (f.id || f.name)) || "";
    if (k && !seen.has(k)) { seen.add(k); uniq.push(f); }
  });
  if (mine) {
    const inbox = Object.keys(docReqCache)
      .filter((k) => k.startsWith(owner + "_"))
      .map((k) => docReqCache[k])
      .filter((r) => r && r.status === "pending");
    const inboxHtml = inbox.length ? `<div class="meta">${t("docsInbox")}</div>` + inbox.map((r) =>
      `<div class="review-item"><b>${r.fromName || r.from}</b>
        <button type="button" class="btn" data-doc-grant="${r.from}">${t("docsGrant")}</button>
        <button type="button" class="btn ghost" data-doc-deny="${r.from}">${t("docsDeny")}</button>
      </div>`).join("") : "";
    const list = uniq.length ? uniq.map((f) => fileView(f.name, f.data) || `<div class="plan-name">📄 ${f.name || ""}</div>`).join("") : `<div class="meta">${t("noDocs")}</div>`;
    return list + inboxHtml;
  }
  if (!owner) return `<div class="meta">${t("noDocs")}</div>`;
  if (!uniq.length && !(m.docs)) return `<div class="meta">${t("noDocs")}</div>`;
  if (!me) return `<div class="meta">${t("docsPrivate")}</div>`;
  const st = docAccess(owner, me);
  if (st === "ok") {
    const list = uniq.length ? uniq.map((f) => fileView(f.name, f.data) || `<div class="plan-name">📄 ${f.name || ""}</div>`).join("") : `<div class="meta">${t("docsGranted")}</div>`;
    return `<div class="meta">${t("docsGranted")}</div>` + list;
  }
  if (st === "pending") return `<div class="meta">${t("docsRequested")}</div>`;
  return `<div class="meta">${t("docsPrivate")}</div><button type="button" class="btn ghost" data-doc-ask="${owner}">${t("docsRequest")}</button>`;
}
function viewMemberDetail(code) {
  try {
    const m = memberList().find((x) => x.code === code) || SEED_MEMBERS.find((x) => x.code === code);
    if (!m) return `<div class="card"><button class="btn ghost" data-close-job="1">${t("back")}</button><p>${t("empty")}</p></div>`;
    const worker = m.role === "worker";
    const about = store.lang === "he" ? (m.aboutHe || m.aboutRu || "") : store.lang === "en" ? (m.aboutEn || m.aboutRu || "") : (m.aboutRu || "");
    const cities = (m.cities || [m.city]).filter(Boolean).map((c) => cityName(c)).join(", ");
    const seed = SEED_MEMBERS.find((x) => x.code === code) || {};
    const text = esc(about || seed.aboutRu || "");
    const phone = m.phone || seed.phone || "";
    let posts = "";
    try {
      const his = jobsForMember(m);
      posts = his.map((j) => {
        const title = jobTitle(j);
        const mark = j.archived ? " · " + t("myHistory") : jobExpired(j) ? " · " + t("toHistory") : "";
        return `<button type="button" class="btn ghost" data-open-job="${j.id}">${j.kind === "offer" ? t("badgeOffer") : t("badgeJob")} · ${esc(title || j.id)}${j.budget ? " · " + shekel(j.budget) : ""}${mark}</button>`;
      }).join("");
    } catch (e1) { posts = ""; }
    const emptyPosts = worker ? t("noMemberPostsWorker") : t("noMemberPostsKablan");
    const faceSrc = safeFace(m.name, m.photo, worker ? "worker" : "contractor", m.trades);
    let docs = "";
    try { docs = docsBlock(m, phone); } catch (e2) { docs = `<div class="meta">${t("noDocs")}</div>`; }
    let revs = "";
    try { revs = reviewsBox(m.code, worker ? "worker" : "contractor") + complainBox(m.code); } catch (e3) { revs = ""; }
    return `${boardNav()}
    <article class="card job ${worker ? "offer" : "order"}">
      <div class="tt-row">
        <span class="picwrap big file-open" data-view-src="${faceSrc}"><img class="tt-photo" src="${faceSrc}" alt="" /></span>
        <div class="tt-body">
          <div class="badge ${worker ? "offer" : "order"}">${esc(m.code)}</div>
          <h3>${esc(m.name)}</h3>
          <div class="meta">${worker ? t("nowWorker") : t("nowContractor")} · ${ico("city")}${esc(cities)}</div>
          <div>${starsHtml((liveRepFor(m.code, m).avg), (liveRepFor(m.code, m).count))}</div>
        </div>
      </div>
      <div class="tags">${(m.trades || []).map((id) => `<span class="tag">${tradeLabel(id)}</span>`).join("")}${badgesHtml({ ...m, ...seed })}</div>
      ${galleryHtml(m.workPhotos)}
      <b>${worker ? t("offerDetails") : t("jobDetails")}</b>
      <p>${text || t("empty")}</p>
      <b>${t("boardFeed")}</b>
      ${posts || `<div class="meta">${emptyPosts}</div>`}
      <b>${t("documents")}</b>
      ${docs}
      ${revs}
      ${phone && !isSelfTarget(m.code) ? `<div class="wa-row">${waBtn(phone, m.code, m.name, m.role === "worker" ? "offer" : "job", m.trades, m.role)}</div>` : ""}
    </article>`;
  } catch (e) {
    return `<div class="card"><button class="btn ghost" data-close-job="1">${t("back")}</button><h3>${esc(code)}</h3><p>${t("empty")}</p><p class="meta">${esc(e && e.message)}</p></div>`;
  }
}
function fileView(name, data, jobId) {
  if (!name && !data) return "";
  let raw = String(data || "");
  if (!raw && /plan-sample|tohnit-bathroom|3room-tohnit|points-plan/i.test(String(name || ""))) raw = "icons/plan-sample.jpg";
  if (!raw && jobId && /\.(png|jpe?g|gif|webp|pdf)$/i.test(String(name || ""))) raw = planGuessUrl(jobId);
  const label = `${t("openFile")}${name ? " — " + name : ""}`;
  const looksImg = /\.(png|jpe?g|gif|webp)(\?|$)/i.test(raw) || /\.(png|jpe?g|gif|webp)$/i.test(String(name || "")) || raw.startsWith("data:image") || raw.startsWith("icons/") || (raw.startsWith("http") && raw.indexOf(".pdf") < 0);
  const isPdf = raw.startsWith("data:application/pdf") || /\.pdf(\?|$)/i.test(raw) || /\.pdf$/i.test(String(name || ""));
  if (raw && looksImg && !isPdf) {
    return `<button type="button" class="file-open" data-view-src="${raw.replace(/"/g, "")}" data-view-kind="img">
      <img class="plan-preview" src="${raw.replace(/"/g, "")}" alt="${name || ""}" />
      <span class="plan-name">${label}</span>
    </button>`;
  }
  if (raw && (isPdf || raw.startsWith("data:") || raw.startsWith("http"))) {
    return `<button type="button" class="btn ghost file-open" data-view-src="${raw.replace(/"/g, "")}" data-view-kind="${isPdf ? "pdf" : "img"}">${label}</button>`;
  }
  return name ? `<div class="plan-name">📄 ${name} — ${t("planMissing")}</div>` : "";
}

function viewJobDetail(id) {
  const j = findJob(id);
  if (!j) return `<div class="card"><button class="btn ghost" data-close-job="1">${t("back")}</button><p>${t("empty")}</p></div>`;
  const offer = j.kind === "offer";
  const title = jobTitle(j);
  const desc = jobDesc(j);
  const cities = (j.cities || [j.city]).filter(Boolean).map(cityName).join(", ");
  const poster = findPoster(j);
  const extra = asList(j.extraDocs).concat(j.extraName ? [{ name: j.extraName, data: j.extraData }] : []);
  const extraHtml = extra.map((f) => fileView(f.name || f, f.data)).filter(Boolean).join("")
    || (j.docFiles || []).map((n) => `<div class="plan-name">📄 ${n}</div>`).join("");
  return `${boardNav()}
    <article class="card job ${offer ? "offer" : "order"}">
      <div class="badge ${offer ? "offer" : "order"}">${offer ? t("badgeOffer") : t("badgeJob")}</div>
      <h3>${title}</h3>
      <div>${starsHtml(liveRepFor(j.id, j).avg, liveRepFor(j.id, j).count)}</div>
      <div class="meta">${ico("city")}${cities}${j.dates ? " · " + ico("date") + j.dates : ""}${j.budget ? " · " + ico("money") + shekel(j.budget) : ""}</div>
      <div class="tags">${(j.trades || [j.trade]).filter(Boolean).map((id) => `<span class="tag">${tradeLabel(id)}</span>`).join("")}</div>
      ${offer ? `<div class="flags">${flagsHtml(j.flags)}</div>${j.flags && j.flags.length ? `<div class="meta">${t("flagsHint")}</div>` : ""}` : ""}
      <b>${offer ? t("offerDetails") : t("jobDetails")}</b>
      <p>${desc || t("noDesc")}</p>
      ${offer ? galleryHtml((j.workPhotos && j.workPhotos.length ? j.workPhotos : ((poster && poster.workPhotos) || []))) : ((fileView(j.planName, j.planData, j.cloudId || j.id) ? `<b>${t("plan")}</b>${fileView(j.planName, j.planData, j.cloudId || j.id)}` : (j.planName ? `<b>${t("plan")}</b><div class="plan-name">📄 ${j.planName}</div>` : "")) + (isMine(j) ? `<label class="filebtn">${t("plan")} · ${t("pickFile")}<input type="file" id="replan-file" accept="image/*,.pdf,application/pdf" /></label>` : ""))}
      ${!offer && extraHtml ? `<b>${t("extraDocs")}</b>${extraHtml}` : ""}
      ${reviewsBox(j.id || j.phone, offer ? "offer" : "job")}
      ${isMine(j) ? `<button class="btn danger" type="button" data-del-job="${j.id}">${t("deleteJob")}</button>` : ""}
    </article>
    <div class="card">
      <b>${t("postedBy")}</b>
      ${poster ? memberCard(poster) : ""}
    </div>`;
}
function viewNew() {
  const cities = CITIES.map((row) => `<option value="${row[0]}">${loc(row)}</option>`).join("");
  const checks = TRADES.map(([id]) => `<label class="check"><input type="checkbox" name="trades" value="${id}" /> ${tradeLabel(id)}</label>`).join("");
  return `<form class="card" id="job-form">
    <label>${t("tradesNeed")}</label>
    <div class="checkgrid">${checks}</div>
    <div id="works-box"></div>
    <label>${t("otherText")}</label>
    <textarea name="other" placeholder="${t("otherText")}"></textarea>
    <label>${ico("plan")}${t("plan")}</label>
    <label class="filebtn">${ico("plan")}${t("pickFile")}
      <input type="file" name="plan" accept="image/*,.pdf,application/pdf" />
    </label>
    <label class="filebtn">${t("objectPhoto")}
      <input type="file" name="objectPhoto" accept="image/*" multiple />
    </label>
    <div class="plan-name">${t("planHint")}</div>
    <label>${t("extraDocs")}</label>
    <label class="filebtn">${t("pickFiles")}
      <input type="file" name="docs" accept="image/*,.pdf,application/pdf" multiple />
    </label>
    <div class="plan-name">${t("extraDocsHint")}</div>
    <label>${ico("city")}${t("city")}</label><select name="city">${cities}</select>
    <label>${ico("money")}${t("budget")}</label>
    <div class="checkgrid">
      <label class="check"><input type="radio" name="budgetType" value="talk" checked /> ${t("budgetTalk")}</label>
      <label class="check"><input type="radio" name="budgetType" value="sum" /> ${t("budgetSum")}</label>
    </div>
    <input name="budget" id="budget-sum" placeholder="₪ 5000" style="display:none" />
    <p class="meta">${ico("phone")} ${esc(myPhone() || t("phone"))}</p>
    <div style="height:10px"></div>
    <button class="btn" type="submit">${t("post")}</button>
  </form>`;
}

function viewSeek() {
  const p = store.profile() || {};
  const picked = p.city || ((Array.isArray(p.cities) && p.cities[0]) || "");
  const selected = Array.isArray(p.trades) ? p.trades : [];
  const shotN = Array.isArray(p.workPhotos) ? p.workPhotos.length : 0;
  const rad = String(p.workRadius || "40");
  const checks = TRADES.filter(([id]) => id !== "other").map(([id]) => `<label class="check"><input type="checkbox" name="trades" value="${id}" ${selected.includes(id) ? "checked" : ""} /> ${tradeLabel(id)}</label>`).join("");
  const cityOpts = CITIES.map((row) => `<option value="${row[0]}" ${picked === row[0] ? "selected" : ""}>${loc(row)}</option>`).join("");
  const rads = [["0","radius0"],["20","radius20"],["40","radius40"],["80","radius80"],["999","radiusAll"]].map(([v,k]) => `<label class="check"><input type="radio" name="workRadius" value="${v}" ${rad === v ? "checked" : ""} /> ${t(k)}</label>`).join("");
  return `<form class="card" id="seek-form">
    <p>${t("seekHint")}</p>
    <label>${ico("name")}${t("name")}</label><input name="name" value="${esc(p.name)}" />
    <label>${t("tradesCan")}</label>
    <div class="checkgrid">${checks}</div>
    <div id="works-box"></div>
    <label>${ico("city")}${t("city")}</label>
    <select name="city">${cityOpts}</select>
    <label>${t("workRadius")}</label>
    <div class="checkgrid">${rads}</div>
    <p class="meta">${ico("phone")} ${esc(p.phone || myPhone() || t("phone"))}</p>
    <label>${t("legalStatus")}</label>
    <div class="checkgrid">${legalChecks(p.flags || [])}</div>
    <div class="plan-name">${t("legalOne")}</div>
    <label>${t("flagsHave")}</label>
    <div class="checkgrid">${extraFlagChecks(p.flags || [])}</div>
    <div class="plan-name">${t("flagsHint")}</div>
    <label>${t("workPhotos")}</label>
    <label class="filebtn">${t("pickFiles")}
      <input type="file" name="workPhotos" accept="image/*" multiple />
    </label>
    <div class="plan-name">${t("workPhotosHint")}</div>
    ${lightGallery(p.workPhotos) || (shotN ? `<div class="meta">${shotN} фото</div>` : "")}
    <div style="height:10px"></div>
    <button class="btn" type="submit">${t("seekSave")}</button>
  </form>`;
}

function fillWorks() {
  const box = document.getElementById("works-box");
  if (!box) return;
  const selected = [...document.querySelectorAll("input[name=trades]:checked")].map((x) => x.value);
  const blocks = selected.filter((id) => WORKS[id]).map((id) => {
    const saved = (store.profile().works || []);
    const items = WORKS[id].map(([wid]) => {
      const val = `${id}:${wid}`;
      const on = saved.includes(val) ? "checked" : "";
      return `<label class="check"><input type="checkbox" name="works" value="${val}" ${on} /> ${workName(id, wid)}</label>`;
    }).join("");
    return `<label>${tradeLabel(id)}</label><div class="checkgrid">${items}</div>`;
  });
  box.innerHTML = blocks.join("");
}

function viewAuth() {
  const checks = TRADES.filter(([id]) => id !== "other").map(([id]) => `<label class="check"><input type="checkbox" name="trades" value="${id}" /> ${tradeLabel(id)}</label>`).join("");
  return `<div class="card"><p>${t("needAuth")}</p></div>
  <form class="card" id="reg-form">
    <label>${t("register")}</label>
    <label>${t("name")}</label><input name="name" required />
    <label>${ico("phone")}${t("phone")}</label><input name="phone" placeholder="050..." required />
    <label>${t("password")}</label><input name="password" type="password" required />
    <label>${t("who")}</label>
    <div class="checkgrid">
      <label class="check"><input type="radio" name="role" value="contractor" checked /> ${t("iAmContractor")}</label>
      <label class="check"><input type="radio" name="role" value="worker" /> ${t("iAmWorker")}</label>
    </div>
    <label>${t("sphere")}</label>
    <div class="checkgrid">${checks}</div>
    <button class="btn" type="submit">${t("register")}</button>
  </form>
  <form class="card" id="login-form">
    <label>${t("hasAccount")}</label>
    <label>${ico("phone")}${t("phone")}</label><input name="phone" required />
    <label>${t("password")}</label><input name="password" type="password" required />
    <button class="btn ghost" type="submit">${t("login")}</button>
  </form>`;
}

function viewReputation() {
  const p = store.profile();
  const r = myRep();
  const code = p.code || (store.user() && store.user().code) || "";
  const files = (Array.isArray(p.docFiles) ? p.docFiles : []).map((n) => `<div class="plan-name">${typeof n === "string" ? n : (n && n.name) || ""}</div>`).join("");
  return `<div class="card profile-bg">
    <b>${t("memberCode")}</b>
    <h3>${code || "—"}</h3>
    <b>${t("rating")}</b>
    <div>${starsHtml(r.avg, r.count)}</div>
    <div class="tags">${badgesHtml({ ...r, ...p, code, phone: p.phone || (store.user() && store.user().phone), lastAct: p.lastAct })}</div>
    <div class="meta">${t("complete")}: ${profileScore({ ...p, ...r, code, phone: p.phone || (store.user() && store.user().phone), trades: p.trades, photo: p.photo, workPhotos: p.workPhotos, verified: p.verified, docs: p.docs })}%</div>
    <button type="button" class="btn ghost" data-tab="help">${t("helpTab")}</button>
    <button type="button" class="btn ghost" data-board="rules">${t("rulesTab")}</button>
    <p class="meta">${t("docsHint")}</p>
    <b>${t("verifyTitle")}</b>
    <p class="meta">${t("verifyHint")}</p>
    <label class="filebtn">${t("pickFile")}
      <input type="file" id="verify-file" accept="image/*,.pdf,application/pdf" />
    </label>
    <label class="check"><input type="checkbox" id="flag-docs" ${p.docs ? "checked" : ""} /> ${t("badgeDocs")}</label>
    <label class="check"><input type="checkbox" id="flag-ins" ${p.insurance ? "checked" : ""} /> ${t("badgeIns")}</label>
    <label>${t("uploadDocs")}</label>
    <label class="filebtn">${t("pickFile")}
      <input type="file" id="doc-file" accept="image/*,.pdf,application/pdf" />
    </label>
    <div class="plan-name">${t("docsList")}</div>
    ${files}
    ${docsInboxHtml()}
  </div>`;
}
function docsInboxHtml() {
  const me = myPhone();
  if (!me) return "";
  const inbox = Object.keys(docReqCache)
    .filter((k) => k.startsWith(me + "_"))
    .map((k) => docReqCache[k])
    .filter((r) => r && r.status === "pending");
  if (!inbox.length) return "";
  return `<div class="meta" style="margin-top:10px">${t("docsInbox")}</div>` + inbox.map((r) =>
    `<div class="review-item"><b>${r.fromName || r.from}</b>
      <button type="button" class="btn" data-doc-grant="${r.from}">${t("docsGrant")}</button>
      <button type="button" class="btn ghost" data-doc-deny="${r.from}">${t("docsDeny")}</button>
    </div>`).join("");
}

function isMine(j) {
  const u = store.user() || {};
  const p = store.profile() || {};
  const code = u.code || p.code || "";
  const phone = p.phone || u.phone || "";
  return Boolean((code && j.posterCode === code) || (phone && j.phone === phone));
}
function viewMine(history) {
  const list = publicJobs().filter((j) => isMine(j) && (history ? j.archived : !j.archived));
  const cards = list.length
    ? list.map((j) => {
        const offer = j.kind === "offer";
        const title = j.titleRu || j.titleHe || "";
        return `<article class="card job tt-card ${offer ? "offer" : "order"}">
          <div class="tt-row">
            <span class="file-open picwrap big" data-view-src="${jobPhoto(j)}"><img class="tt-photo" src="${jobPhoto(j)}" alt="" /></span>
            <div class="tt-body">
              <div class="badge ${offer ? "offer" : "order"}">${offer ? t("badgeOffer") : t("badgeJob")}</div>
              <h3>${title}</h3>
              <div class="meta">${(j.cities || [j.city]).filter(Boolean).map(cityName).join(", ")}${j.dates ? " · " + j.dates : ""}</div>
              <div class="tt-actions">
                <button class="btn ghost" type="button" data-open-job="${j.id}">${t("details")}</button>
                <button class="btn" type="button" data-archive="${j.id}" data-arch="${history ? "0" : "1"}">${history ? t("toActive") : t("toHistory")}</button>
                <button class="btn danger" type="button" data-del-job="${j.id}">${t("deleteJob")}</button>
              </div>
            </div>
          </div>
        </article>`;
      }).join("")
    : `<div class="empty">${history ? t("emptyHistory") : t("emptyMine")}</div>`;
  return `<div class="card page-head">
      <button class="btn ghost" type="button" data-tab="profile">${t("backProfile")}</button>
      <h2>${history ? t("myHistory") : t("myActive")}</h2>
      <p class="meta">${history ? t("myHistoryHint") : t("myActiveHint")}</p>
    </div>${cards}`;
}

function fmtWhen(ms) {
  const d = new Date(Number(ms) || Date.now());
  if (Number.isNaN(d.getTime())) return "—";
  const p = (n) => String(n).padStart(2, "0");
  return p(d.getDate()) + "." + p(d.getMonth() + 1) + "." + d.getFullYear() + " " + p(d.getHours()) + ":" + p(d.getMinutes());
}
async function pingWaClick(toPhone, toCode) {
  const user = store.user && store.user();
  const p = store.profile ? store.profile() : {};
  const row = {
    id: "w" + Date.now() + Math.random().toString(36).slice(2, 6),
    at: Date.now(),
    vid: visitorId(),
    fromPhone: (user && user.phone) || store.session || p.phone || "",
    fromName: (user && user.name) || p.name || t("guestAnon"),
    fromCode: (user && user.code) || p.code || "",
    toPhone: toPhone || "",
    toCode: toCode || ""
  };
  waClickCache = [row].concat(waClickCache).slice(0, 300);
  try { localStorage.setItem("bil_waclicks", JSON.stringify(waClickCache.slice(0, 80))); } catch (e) {}
  try {
    await fetch(fb("/waclicks/" + row.id), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(row)
    });
  } catch (e) {}
}
async function loadWaClicks() {
  try {
    const res = await fetch(fb("/waclicks"));
    const data = res.ok ? await res.json() : null;
    waClickCache = data && typeof data === "object" ? Object.values(data) : [];
  } catch (e) {
    waClickCache = safeParse(localStorage.getItem("bil_waclicks") || "[]");
  }
  waClickCache.sort((a, b) => Number(b.at || 0) - Number(a.at || 0));
}
function viewWaClicks() {
  const today = waClickCache.filter((x) => Number(x.at || 0) >= startOfToday()).length;
  const rows = waClickCache.slice(0, 80).map((x) => {
    const who = esc(x.fromName || x.fromPhone || t("guestAnon"));
    const code = x.fromCode ? " · " + esc(x.fromCode) : "";
    const phone = x.fromPhone ? " · " + esc(x.fromPhone) : "";
    const to = esc(x.toCode || x.toPhone || "—");
    return `<div class="review-item"><b>${who}</b>${code}${phone}<div class="meta">${t("waTo")}: ${to} · ${fmtWhen(x.at)}</div></div>`;
  }).join("");
  return `<div class="card">
    <b>${t("waClicks")}</b>
    <div class="meta">${t("statWa")}: ${waClickCache.length} · ${t("statWaToday")}: ${today}</div>
    ${rows || `<div class="meta">${t("waEmpty")}</div>`}
  </div>`;
}
function viewAdminGate() {
  return `<form class="card" id="admin-gate">
    <h2>${t("admin")}</h2>
    <label>${t("adminPin")}</label>
    <input name="pin" type="password" autocomplete="current-password" required />
    <div style="height:10px"></div>
    <button class="btn" type="submit">${t("login")}</button>
  </form>`;
}
async function enterAdmin() {
  store.admin = true;
  store.tab = "profile";
  try { await loadGuests(); } catch (e) {}
  try { await loadWaClicks(); } catch (e) {}
  render();
}
async function openAdminLogin() {
  store.tab = "profile";
  render();
}
function wantAdminLink() {
  const h = String(location.hash || "").replace("#", "").toLowerCase();
  const q = String(location.search || "").toLowerCase();
  return h === "admin" || h === "adm" || q.indexOf("admin=1") >= 0 || q.indexOf("adm=1") >= 0;
}
async function loadGuests() {
  try {
    const res = await fetch(fb("/visits"));
    const data = res.ok ? await res.json() : null;
    guestCache = data && typeof data === "object" ? Object.values(data) : [];
  } catch (e) {
    guestCache = safeParse(localStorage.getItem("bil_visits_local") || "[]");
  }
  guestCache.sort((a, b) => Number(b.last || b.first || 0) - Number(a.last || a.first || 0));
}
function viewGuests() {
  const rows = guestCache.map((g) => {
    const name = g.name || t("guestAnon");
    const phone = g.phone ? " · " + g.phone : "";
    const role = g.role ? " · " + g.role : "";
    return `<div class="review-item"><b>${name}</b>${phone}${role}<div class="meta">${t("guestWhen")}: ${fmtWhen(g.first)} · ${fmtWhen(g.last)}</div></div>`;
  }).join("");
  return `<div class="card">
    <b>${t("guests")}</b>
    <div class="meta">${t("guestsHint")} · ${guestCache.length}</div>
    ${rows || `<div class="meta">${t("guestsEmpty")}</div>`}
  </div>`;
}


function startOfToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}
function viewAdmin() {
  const jobs = publicJobs();
  const orders = jobs.filter((j) => j.kind !== "offer");
  const offers = jobs.filter((j) => j.kind === "offer");
  const users = store.users();
  const today = guestCache.filter((g) => Number(g.last || g.first || 0) >= startOfToday()).length;
  return `${boardNav()}
    <div class="card">
      <h2>${t("admin")} · ${t("adminStats")}</h2>
      <div class="stats">
        <div><b>${guestCache.length}</b><span>${t("statGuests")}</span></div>
        <div><b>${today}</b><span>${t("statToday")}</span></div>
        <div><b>${users.length}</b><span>${t("statReg")}</span></div>
        <div><b>${orders.length}</b><span>${t("statJobs")}</span></div>
        <div><b>${offers.length}</b><span>${t("statOffers")}</span></div>
        <div><b>${waClickCache.length}</b><span>${t("statWa")}</span></div>
        <div><b>${waClickCache.filter((x) => Number(x.at || 0) >= startOfToday()).length}</b><span>${t("statWaToday")}</span></div>
      </div>
      <button class="btn ghost" type="button" data-admin-out="1">${t("adminOut")}</button>
    </div>
    ${viewWaClicks()}
    ${viewGuests()}`;
}

function esc(s) {
  return String(s || "").replace(/[&<>"]/g, (c) => ({ "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;" }[c]));
}
function viewProfile() {
  const raw = store.profile() || {};
  const p = { ...raw };
  const r = myRep();
  const code = esc(p.code || (store.user() && store.user().code) || "");
  const cities = CITIES.map((row) => `<option value="${row[0]}" ${p.city === row[0] ? "selected" : ""}>${loc(row)}</option>`).join("");
  const shotN = Array.isArray(p.workPhotos) ? p.workPhotos.length : 0;
  return `<div class="card profile-bg page-head">
    <label class="avatar-edit">
      <img class="avatar lg" src="${safeFace(p.name, p.photo, store.role, p.trades)}" alt="" />
      <input type="file" id="photo-file" accept="image/*" />
    </label>
    <div class="meta">${t("photoChange")}</div>
    <h2>${esc(p.name) || t("myPage")}</h2>
    <div class="meta">${code} · ${store.role === "worker" ? t("nowWorker") : t("nowContractor")}</div>
    <div>${starsHtml(r.avg, r.count)}</div>
    <div class="stats">
      <div><b>${r.closed}</b><span>${t("worksCount")}</span></div>
      <div><b>${r.count}</b><span>${t("reviews")}</span></div>
      <div><b>${r.avg || "—"}</b><span>${t("rating")}</span></div>
    </div>
    <label class="filebtn">${t("workPhotos")}
      <input type="file" id="work-photos" accept="image/*" multiple />
    </label>
    <div class="plan-name">${t("workPhotosHint")}</div>
    ${lightGallery(p.workPhotos) || (shotN ? `<div class="meta">${shotN} фото</div>` : "")}
    <div class="mine-row">
      <button type="button" class="mine-tile" data-tab="mine">${ico("job")}<b>${t("myActive")}</b><span>${t("myActiveHint")}</span></button>
      <button type="button" class="mine-tile" data-tab="history">${ico("date")}<b>${t("myHistory")}</b><span>${t("myHistoryHint")}</span></button>
    </div>
    <button type="button" class="btn ghost" data-board="rules">${t("rulesTab")}</button>
  </div>
  <form class="card profile-bg" id="prof-form">
    <label>${ico("name")}${t("name")}</label><input name="name" value="${esc(p.name)}" required />
    <label>${ico("city")}${t("city")}</label><select name="city">${cities}</select>
    <label>${ico("phone")}${t("phone")} 1</label><input name="phone" value="${esc((p.phones && p.phones[0]) || p.phone || myPhone() || "")}" placeholder="050..." required />
    <label>${t("phone")} 2</label><input name="phone2" value="${esc((p.phones && p.phones[1]) || p.phone2 || "")}" placeholder="050..." />
    <label>${t("phone")} 3</label><input name="phone3" value="${esc((p.phones && p.phones[2]) || "")}" placeholder="050..." />
    <p class="meta">${t("phonesHint")}</p>
    <div style="height:10px"></div>
    <button class="btn" type="submit">${t("save")}</button>
  </form>
  ${viewReputation()}
  <div class="card">
    <button class="btn ghost" data-logout="1">${t("logout")}</button>
  </div>`;
}

function bindViewer() {
  const box = document.getElementById("lightbox");
  if (!box) return;
  const img = document.getElementById("lightbox-img");
  const pdf = document.getElementById("lightbox-pdf");
  const close = () => {
    box.hidden = true;
    if (img) img.removeAttribute("src");
    if (pdf) { pdf.hidden = true; pdf.removeAttribute("src"); }
  };
  const open = (src, kind) => {
    if (!src) return;
    box.hidden = false;
    if (kind === "pdf" || String(src).includes("application/pdf") || /\.pdf(\?|$)/i.test(src)) {
      if (img) img.removeAttribute("src");
      if (pdf) { pdf.hidden = false; pdf.src = src; }
      return;
    }
    if (pdf) { pdf.hidden = true; pdf.removeAttribute("src"); }
    if (img) img.src = src;
  };
  document.getElementById("lightbox-x").onclick = close;
  box.onclick = (e) => { if (e.target === box) close(); };
  document.querySelectorAll(".file-open").forEach((b) => {
    b.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const src = b.getAttribute("data-view-src") || (b.querySelector("img") && b.querySelector("img").getAttribute("src"));
      open(src, b.getAttribute("data-view-kind") || "img");
    };
  });
  document.querySelectorAll(".plan-preview, .avatar.lg, .tt-photo").forEach((im) => {
    if (im.closest(".file-open")) return;
    im.style.cursor = "zoom-in";
    im.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      open(im.getAttribute("src"), "img");
    };
  });
}

function bind() {
  document.querySelectorAll("[data-lang]").forEach((b) => b.onclick = () => { setLang(b.dataset.lang); render(); });
  document.querySelectorAll("[data-install]").forEach((b) => b.onclick = async () => {
    if (!deferredInstall) return;
    deferredInstall.prompt();
    try { await deferredInstall.userChoice; } catch (e) {}
    deferredInstall = null;
    render();
  });
  document.querySelectorAll("[data-install-hide]").forEach((b) => b.onclick = () => {
    localStorage.setItem("bil_hideinst", "1");
    render();
  });
  document.querySelectorAll("[data-role]").forEach((b) => b.onclick = () => { store.role = b.dataset.role; store.tab = "feed"; render(); });
  document.querySelectorAll("[data-tab]").forEach((b) => b.onclick = () => {
    store.tab = b.dataset.tab;
    if (b.dataset.tab === "feed") { store.board = "feed"; store.openJob = ""; }
    render();
  });
  document.querySelectorAll("[data-guests]").forEach((b) => b.onclick = async () => {
    showGuests = !showGuests;
    if (showGuests) { await loadGuests(); await loadWaClicks(); }
    render();
  });
  document.querySelectorAll("[data-admin-in]").forEach((b) => b.onclick = () => openAdminLogin());
  const gate = document.getElementById("admin-gate");
  if (gate) gate.onsubmit = async (e) => {
    e.preventDefault();
    const pin = String(new FormData(gate).get("pin") || "");
    if (pin === ADMIN_PIN) await enterAdmin();
    else alert(t("adminBad"));
  };
  document.querySelectorAll("[data-admin-out]").forEach((b) => b.onclick = () => {
    store.admin = false;
    try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {}
    render();
  });
  document.querySelectorAll("[data-filter]").forEach((b) => b.onclick = () => { store.filter = b.dataset.filter; store.panel = ""; render(); });
  document.querySelectorAll("[data-city]").forEach((b) => b.onclick = () => { store.cityFilter = b.dataset.city; if (b.dataset.city === "all") store.radius = "999"; store.panel = ""; render(); });
  const replan = document.getElementById("replan-file");
  if (replan) replan.onchange = async () => {
    const f = replan.files[0];
    if (!f || !store.openJob) return;
    const job = findJob(store.openJob);
    if (!job || !isMine(job)) return;
    const data = String(f.type || "").startsWith("image/") ? await compressImageFile(f, 1400, 0.72) : "";
    const payload = data || await new Promise((resolve) => {
      if (f.size > 900000) { resolve(""); return; }
      const r = new FileReader();
      r.onload = () => resolve(String(r.result || ""));
      r.readAsDataURL(f);
    });
    if (!payload) { alert(t("planMissing")); return; }
    const id = job.cloudId || job.id;
    const url = await putJobFile(id, "plan", payload);
    const list = store.jobs().map((j) => j.id === job.id ? { ...j, planName: f.name, planData: url || payload } : j);
    store.saveJobs(list);
    await cloudSave({ ...job, planName: f.name, planData: url || payload, cloudId: id });
    await cloudLoad();
    render();
  };
  const onPhoto = async (el) => {
    const f = el && el.files && el.files[0];
    if (!f) return;
    const data = await compressImageFile(f, 700, 0.7);
    if (!data) return;
    store.saveProfile({ ...store.profile(), photo: data });
    const u = store.user();
    if (u) {
      const upd = { ...u, photo: data };
      store.saveUsers(store.users().map((x) => x.phone === u.phone ? upd : x));
      await cloudSaveUser(upd);
    }
    render();
  };
  const photo = document.getElementById("photo-file");
  if (photo) photo.onchange = () => onPhoto(photo);
  const photoBtn = document.getElementById("photo-file-btn");
  if (photoBtn) photoBtn.onchange = () => onPhoto(photoBtn);
  const workPhotos = document.getElementById("work-photos");
  if (workPhotos) workPhotos.onchange = async () => {
    const files = [...(workPhotos.files || [])].slice(0, 6);
    const shots = [];
    for (const file of files) {
      const data = await compressImageFile(file);
      if (data) shots.push(data);
    }
    if (!shots.length) return;
    const prev = store.profile().workPhotos || [];
    const next = prev.concat(shots).slice(-6);
    store.saveProfile({ ...store.profile(), workPhotos: next, photo: store.profile().photo || next[0] });
    const u = store.user();
    if (u) {
      const upd = { ...u, workPhotos: next, photo: u.photo || store.profile().photo || next[0] };
      store.saveUsers(store.users().map((x) => x.phone === u.phone ? upd : x));
      await cloudSaveUser(upd);
    }
    render();
  };
  document.querySelectorAll("[data-kind]").forEach((b) => b.onclick = () => {
    store.kind = b.dataset.kind;
    store.panel = store.panel === "trade" ? "" : "trade";
    render();
  });
  document.querySelectorAll("[data-panel]").forEach((b) => {
    if (b.dataset.kind) return;
    b.onclick = () => { store.panel = store.panel === b.dataset.panel ? "" : b.dataset.panel; render(); };
  });
  document.querySelectorAll("[data-radius]").forEach((b) => b.onclick = () => { store.radius = b.dataset.radius; render(); });
  document.querySelectorAll("[data-geo]").forEach((b) => b.onclick = () => {
    localStorage.removeItem("bil_geo_done");
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((pos) => {
      localStorage.setItem("bil_geo_done", "1");
      store.cityFilter = nearestCityId(pos.coords.latitude, pos.coords.longitude);
      if (store.radius === "999") store.radius = "40";
      store.panel = "";
      render();
    }, () => { localStorage.setItem("bil_geo_done", "1"); }, { timeout: 8000 });
  });
  document.querySelectorAll("[data-sort]").forEach((b) => b.onclick = () => { store.sort = b.dataset.sort; render(); });
  document.querySelectorAll("[data-pay]").forEach((b) => b.onclick = () => { store.payFilter = b.dataset.pay; render(); });
  document.querySelectorAll("[data-board]").forEach((b) => b.onclick = () => { store.board = b.dataset.board; store.openJob = ""; store.tab = "feed"; render(); });
  document.querySelectorAll("[data-open-job]").forEach((b) => b.onclick = (e) => { e.preventDefault(); if (store.openJob) return; store.openJob = b.dataset.openJob; store.tab = "feed"; render(); notifyOwnerWa(findOwnerByTarget(b.dataset.openJob), "view"); });
  document.querySelectorAll("[data-open-member]").forEach((b) => b.onclick = () => {
    if (!store.session) { store.tab = "profile"; render(); return; }
    const code = b.dataset.openMember;
    store.openJob = "member:" + code;
    store.tab = "feed";
    render();
    const m = memberList().find((x) => x.code === code) || {};
    if (m.phone) {
      loadPrivDocs(m.phone).then(() => loadDocReqs(m.phone)).then(() => render()).catch(() => {});
      notifyOwnerWa(m, "view");
    }
  });
  document.querySelectorAll("[data-doc-ask]").forEach((b) => b.onclick = async () => {
    const owner = b.dataset.docAsk;
    const me = myPhone();
    if (!me) { store.tab = "profile"; render(); return; }
    const u = store.user() || store.profile() || {};
    await setDocReq(owner, me, { from: me, fromName: u.name || me, fromCode: u.code || "", status: "pending", at: Date.now() });
    render();
  });
  document.querySelectorAll("[data-doc-grant]").forEach((b) => b.onclick = async () => {
    const from = b.dataset.docGrant;
    const me = myPhone();
    const prev = docReqCache[reqKey(me, from)] || { from };
    await setDocReq(me, from, { ...prev, status: "ok", at: Date.now() });
    render();
  });
  document.querySelectorAll("[data-doc-deny]").forEach((b) => b.onclick = async () => {
    const from = b.dataset.docDeny;
    const me = myPhone();
    const prev = docReqCache[reqKey(me, from)] || { from };
    await setDocReq(me, from, { ...prev, status: "no", at: Date.now() });
    render();
  });
  document.querySelectorAll("[data-flag-info]").forEach((b) => {
    b.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      alert(FLAG_MARK[b.dataset.flagInfo] + " " + flagLabel(b.dataset.flagInfo) + "\n\n" + flagHint(b.dataset.flagInfo));
    };
  });
  document.querySelectorAll("[data-del-job]").forEach((b) => {
    b.onclick = () => removeMyJob(b.dataset.delJob);
  });
  document.querySelectorAll("[data-archive]").forEach((b) => {
    b.onclick = async () => {
      const id = b.dataset.archive;
      const on = b.dataset.arch === "1";
      const list = store.jobs().map((j) => j.id === id ? { ...j, archived: on } : j);
      store.saveJobs(list);
      const job = list.find((j) => j.id === id) || publicJobs().find((j) => j.id === id);
      if (job) {
        const cloudId = job.cloudId || await cloudSave({ ...job, archived: on });
        if (cloudId && !job.cloudId) store.saveJobs(store.jobs().map((j) => j.id === id ? { ...j, cloudId } : j));
        else if (job.cloudId) await cloudSave({ ...job, archived: on });
      }
      await cloudLoad();
      render();
    };
  });
  document.querySelectorAll("[data-close-job]").forEach((b) => b.onclick = () => { store.openJob = ""; render(); });
  document.querySelectorAll("[data-open-rev]").forEach((b) => b.onclick = () => {
    store.openRev = store.openRev === b.dataset.openRev ? "" : b.dataset.openRev;
    render();
  });
  document.querySelectorAll("[data-worked]").forEach((b) => {
    b.onclick = () => {
      if (!store.session) { alert(t("needLoginReview")); store.tab = "profile"; render(); return; }
      const id = b.dataset.worked;
      const owner = findOwnerByTarget(id);
      markWorked(owner && owner.phone, id);
      alert(t("workedOk"));
      store.openRev = id;
      render();
    };
  });
  document.querySelectorAll("a[data-contact]").forEach((a) => {
    a.addEventListener("click", () => { markWorked(a.getAttribute("data-contact"), a.getAttribute("data-contact-code")); pingWaClick(a.getAttribute("data-contact"), a.getAttribute("data-contact-code")); });
  });
  document.querySelectorAll("form[data-complain-target]").forEach((form) => {
    form.onsubmit = async (e) => {
      e.preventDefault();
      if (!store.session) { alert(t("complainNeed")); store.tab = "profile"; render(); return; }
      const id = form.dataset.complainTarget;
      if (isSelfTarget(id)) { alert(t("complainSelf")); return; }
      if (hasMyComplaint(id)) { alert(t("complainOnce")); return; }
      const f = new FormData(form);
      const file = form.querySelector("input[type=file]") && form.querySelector("input[type=file]").files[0];
      let shot = "";
      if (file && String(file.type || "").startsWith("image/")) {
        shot = await new Promise((resolve) => {
          const img = new Image();
          const url = URL.createObjectURL(file);
          img.onload = () => {
            const c = document.createElement("canvas");
            const s = Math.min(1, 900 / Math.max(img.width, img.height));
            c.width = Math.round(img.width * s); c.height = Math.round(img.height * s);
            c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
            URL.revokeObjectURL(url);
            resolve(c.toDataURL("image/jpeg", 0.7));
          };
          img.src = url;
        });
      }
      const map = store.complaints();
      map[id] = (map[id] || []).concat([{
        why: String(f.get("why") || ""),
        shot,
        fromPhone: myReviewerId(),
        name: (store.profile() || {}).name || "",
        at: Date.now()
      }]);
      store.saveComplaints(map);
      try { fetch(fb("/complaints/" + encodeURIComponent(id)), { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(map[id]) }).catch(() => {}); } catch (err) {}
      alert(t("complainOk"));
      render();
    };
  });
  document.querySelectorAll("form.review-write").forEach((form) => {
    form.onsubmit = (e) => {
      e.preventDefault();
      if (!store.session) { alert(t("needLoginReview")); store.tab = "profile"; render(); return; }
      const f = new FormData(form);
      const id = form.dataset.revTarget;
      if (isSelfTarget(id)) { alert(t("reviewSelf")); return; }
      if (alreadyReviewed(id)) { alert(t("reviewOnce")); return; }
      if (!workedWith(id)) { alert(t("reviewNeedWork")); return; }
      const map = store.extraRevs();
      map[id] = (map[id] || []).concat([{
        stars: Number(f.get("stars")),
        text: String(f.get("text") || ""),
        textRu: String(f.get("text") || ""),
        name: store.profile().name || t("reviews"),
        fromPhone: myReviewerId(),
        at: Date.now()
      }]);
      store.saveExtraRevs(map);
      try {
        fetch(fb("/reviews/" + encodeURIComponent(id)), {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(map[id])
        }).catch(() => {});
      } catch (e) {}
      store.openRev = id;
      render();
      const owner = findOwnerByTarget(id);
      notifyOwnerWa(owner, "review", { stars: Number(f.get("stars")), text: String(f.get("text") || "") });
      if (!owner || !owner.phone) alert(t("reviewOk") + ". WhatsApp: номер не найден");
      else alert(t("reviewOk"));
    };
  });
  const cf = document.getElementById("city-filter");
  if (cf) cf.onchange = () => { store.cityFilter = cf.value; render(); };
  const mq = document.getElementById("member-q");
  if (mq) mq.onchange = mq.onkeyup = () => { store.q = mq.value; }; 
  if (mq) mq.addEventListener("keydown", (e) => { if (e.key === "Enter") { store.q = mq.value; render(); } });
  const docFile = document.getElementById("doc-file");
  if (docFile) docFile.onchange = async () => {
    const f = docFile.files[0];
    if (!f) return;
    const reader = new FileReader();
    const data = await new Promise((resolve) => {
      if (String(f.type || "").startsWith("image/")) {
        const img = new Image();
        const url = URL.createObjectURL(f);
        img.onload = () => {
          const max = 1200;
          let w = img.width, h = img.height;
          if (Math.max(w, h) > max) { const k = max / Math.max(w, h); w = Math.round(w * k); h = Math.round(h * k); }
          const c = document.createElement("canvas");
          c.width = w; c.height = h;
          c.getContext("2d").drawImage(img, 0, 0, w, h);
          URL.revokeObjectURL(url);
          resolve(c.toDataURL("image/jpeg", 0.7));
        };
        img.src = url;
      } else if (f.size < 700000) {
        reader.onload = () => resolve(String(reader.result || ""));
        reader.readAsDataURL(f);
      } else resolve("");
    });
    const p = store.profile();
    const phone = myPhone() || p.phone;
    await savePrivDoc(phone, { name: f.name, data });
    store.saveProfile({ ...p, docs: true, docFiles: (p.docFiles || []).concat([f.name]) });
    const users = store.users().map((u) => normPhone(u.phone) === normPhone(phone) ? { ...u, docs: true } : u);
    store.saveUsers(users);
    const u = store.user();
    if (u) cloudSaveUser({ ...u, docs: true });
    render();
  };
  const verifyFile = document.getElementById("verify-file");
  if (verifyFile) verifyFile.onchange = async () => {
    const f = verifyFile.files[0];
    if (!f) return;
    const p = store.profile();
    store.saveProfile({ ...p, verified: true, verifyPending: true, docs: true, verifyName: f.name, lastAct: Date.now() });
    const users = store.users().map((u) => u.phone === store.session ? { ...u, verified: true, verifyPending: true, docs: true, lastAct: Date.now() } : u);
    store.saveUsers(users);
    const u = store.user();
    if (u) cloudSaveUser({ ...u, verified: true, docs: true, lastAct: Date.now() });
    touchAct();
    render();
  };
  document.querySelectorAll("[data-switch]").forEach((b) => {
    b.onclick = () => {
      store.role = b.dataset.switch;
      const users = store.users().map((u) => u.phone === store.session ? { ...u, role: store.role } : u);
      store.saveUsers(users);
      store.tab = "feed";
      render();
    };
  });
  document.querySelectorAll("[data-logout]").forEach((b) => b.onclick = () => { store.session = ""; store.tab = "feed"; render(); });
  const reg = document.getElementById("reg-form");
  if (reg) reg.onsubmit = (e) => {
    e.preventDefault();
    const f = new FormData(reg);
    const phone = normPhone(f.get("phone"));
    if (store.users().some((u) => normPhone(u.phone) === phone)) { alert(t("hasAccount")); return; }
    const trades = [...reg.querySelectorAll("input[name=trades]:checked")].map((x) => x.value);
    const user = {
      name: String(f.get("name") || ""),
      phone,
      password: String(f.get("password") || ""),
      role: String(f.get("role") || "contractor"),
      trades,
      code: nextCode(),
    };
    store.saveUsers(store.users().concat(user));
    cloudSaveUser(user);
    store.session = phone;
    store.role = user.role;
    store.saveProfile({ ...store.profile(), name: user.name, phone, trades, code: user.code });
    store.tab = "feed";
    render();
  };
  const login = document.getElementById("login-form");
  if (login) login.onsubmit = async (e) => {
    e.preventDefault();
    const f = new FormData(login);
    const phone = normPhone(f.get("phone"));
    const password = String(f.get("password") || "");
    await cloudLoadUsers();
    await cloudLoadPhotosAll();
    const known = store.users().find((u) => normPhone(u.phone) === phone);
    if (!known) { alert(t("notRegistered")); return; }
    if (String(known.password || "") !== password) { alert(t("badPassword")); return; }
    const user = known;
    store.session = phone;
    store.role = user.role;
    store.saveProfile({
      ...store.profile(),
      name: user.name,
      phone: user.phone,
      trades: user.trades || [],
      code: user.code || nextCode(),
      photo: store.profile().photo || user.photo || "",
      workPhotos: store.profile().workPhotos || user.workPhotos || [],
    });
    store.tab = "profile";
    render();
  };
  document.querySelectorAll("input[name=trades]").forEach((c) => c.onchange = fillWorks);
  fillWorks();
  const budgetSum = document.getElementById("budget-sum");
  document.querySelectorAll("input[name=budgetType]").forEach((r) => {
    r.onchange = () => {
      if (!budgetSum) return;
      const sumOn = document.querySelector("input[name=budgetType][value=sum]")?.checked;
      budgetSum.style.display = sumOn ? "block" : "none";
    };
  });
  const job = document.getElementById("job-form");
  if (job) job.onsubmit = async (e) => {
    e.preventDefault();
    if (postingLock) return;
    const jobBtn = job.querySelector("button[type=submit]");
    postingLock = true;
    if (jobBtn) jobBtn.disabled = true;
    try {
    const f = new FormData(job);
    const trades = [...job.querySelectorAll("input[name=trades]:checked")].map((x) => x.value);
    if (!trades.length) { postingLock = false; if (jobBtn) jobBtn.disabled = false; alert(t("pickOne")); return; }
    if (recentlyPosted("job", myPhone())) { postingLock = false; if (jobBtn) jobBtn.disabled = false; return; }
    const workLabels = [...job.querySelectorAll("input[name=works]:checked")].map((x) => {
      const [tr, wid] = String(x.value).split(":");
      return workName(tr, wid);
    });
    const other = String(f.get("other") || "").trim();
    const title = [...workLabels, other].filter(Boolean).join(", ") || tradeName(trades[0]);
    const from = String(f.get("dateFrom") || "");
    const to = String(f.get("dateTo") || "");
    const dates = to ? `${from} – ${to}` : from;
    const budget = f.get("budgetType") === "sum" && String(f.get("budget") || "").trim()
      ? String(f.get("budget")).trim()
      : t("budgetTalk");
    const readOne = (file) => new Promise((resolve) => {
      if (!file) { resolve({ name: "", data: "" }); return; }
      const done = (data) => resolve({ name: file.name, data });
      if (!String(file.type || "").startsWith("image/")) {
        if (file.size >= 900000) { done(""); return; }
        const reader = new FileReader();
        reader.onload = () => done(String(reader.result || ""));
        reader.readAsDataURL(file);
        return;
      }
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        const max = 1400;
        let w = img.width, h = img.height;
        if (Math.max(w, h) > max) {
          const k = max / Math.max(w, h);
          w = Math.round(w * k); h = Math.round(h * k);
        }
        const c = document.createElement("canvas");
        c.width = w; c.height = h;
        c.getContext("2d").drawImage(img, 0, 0, w, h);
        URL.revokeObjectURL(url);
        done(c.toDataURL("image/jpeg", 0.72));
      };
      img.onerror = () => { URL.revokeObjectURL(url); done(""); };
      img.src = url;
    });
    const planFile = job.querySelector("input[name=plan]")?.files[0];
    let plan = await readOne(planFile);
    const objectFiles = [...(job.querySelector("input[name=objectPhoto]")?.files || [])];
    const extraFiles = [...(job.querySelector("input[name=docs]")?.files || [])];
    const extraDocs = [];
    for (const file of objectFiles.slice(0, 4)) extraDocs.push(await readOne(file));
    if (!plan.data && extraDocs[0] && extraDocs[0].data) {
      plan = extraDocs.shift();
    }
    for (const file of extraFiles.slice(0, 4)) extraDocs.push(await readOne(file));
    const descText = [...workLabels, other].filter(Boolean).join(". ");
    const list = store.jobs();
    list.unshift({
      id: "j" + Date.now(),
      created: Date.now(),
      kind: "job",
      trade: trades[0],
      trades,
      city: f.get("city"),
      titleRu: toLangText(title, "ru"),
      titleHe: toLangText(title, "he"),
      titleEn: toLangText(title, "en"),
      dates,
      budget,
      phone: myPhone() || (store.user() && store.user().phone) || "",
      photo: (store.profile() || {}).photo || (store.user() && store.user().photo) || "",
      planName: plan.name,
      planData: plan.data,
      extraDocs,
      other,
      descRu: toLangText(descText, "ru"),
      descHe: toLangText(descText, "he"),
      descEn: toLangText(descText, "en"),
      posterCode: (store.user() && store.user().code) || store.profile().code || "",
      name: store.profile().name || "",
      docs: Boolean(store.profile().docs),
      insurance: Boolean(store.profile().insurance),
      archived: false,
    });
    store.saveJobs(list);
    const cloudId = await cloudSave(list[0]);
    if (cloudId) {
      list[0].cloudId = cloudId;
      store.saveJobs(list);
    }
    store.tab = "mine";
    try { await cloudLoad(); } catch (err) {}
    render();
    setTimeout(() => { postingLock = false; }, 2500);
    } catch (err) {
      postingLock = false;
      if (jobBtn) jobBtn.disabled = false;
      alert((err && err.message) || t("empty"));
    }
  };
  const seek = document.getElementById("seek-form");
  if (seek) seek.onsubmit = async (e) => {
    e.preventDefault();
    if (postingLock) return;
    const seekBtn = seek.querySelector("button[type=submit]");
    postingLock = true;
    if (seekBtn) seekBtn.disabled = true;
    try {
    ensureUserRow();
    const f = new FormData(seek);
    const trades = [...seek.querySelectorAll("input[name=trades]:checked")].map((x) => x.value);
    const works = [...seek.querySelectorAll("input[name=works]:checked")].map((x) => x.value);
    const city = String(f.get("city") || "");
    const cities = city ? [city] : [];
    const workRadius = String(f.get("workRadius") || "40");
    const name = String(f.get("name") || "");
    const phone = myPhone() || String((store.profile() || {}).phone || "") || "";
    if (recentlyPosted("offer", phone)) { postingLock = false; if (seekBtn) seekBtn.disabled = false; return; }
    const workLabels = works.map((w) => {
      const [tr, wid] = String(w).split(":");
      return workName(tr, wid);
    });
    const title = workLabels.filter(Boolean).join(", ") || trades.map(tradeName).join(", ") || name;
    const extraFlags = [...seek.querySelectorAll("input[name=flags]:checked")].map((x) => x.value);
    const legal = String(f.get("legal") || "");
    const flags = extraFlags.concat(legal ? [legal] : []);
    store.saveProfile({
      ...store.profile(),
      name,
      city: cities[0] || "",
      cities,
      workRadius,
      phone,
      trades,
      works,
      flags,
      seeking: true,
    });
    const shotFiles = [...(seek.querySelector("input[name=workPhotos]")?.files || [])].slice(0, 6);
    const workPhotos = [];
    for (const file of shotFiles) {
      const data = await compressImageFile(file);
      if (data) workPhotos.push(data);
    }
    const photos = workPhotos.length ? workPhotos : (store.profile().workPhotos || []);
    store.saveProfile({ ...store.profile(), workPhotos: photos });
    const list = store.jobs().filter((j) => !(j.kind === "offer" && j.phone === phone));
    list.unshift({
      id: "o" + Date.now(),
      created: Date.now(),
      kind: "offer",
      workPhotos: photos,
      photo: photos[0] || store.profile().photo || "",
      trade: trades[0],
      trades,
      cities,
      city: cities[0],
      titleRu: toLangText(title, "ru"),
      titleHe: toLangText(title, "he"),
      titleEn: toLangText(title, "en"),
      phone,
      name,
      flags,
      posterCode: (store.user() && store.user().code) || store.profile().code || "",
      docs: Boolean(store.profile().docs),
      insurance: Boolean(store.profile().insurance),
      closed: Number(store.profile().closed || 0),
      archived: false,
    });
    store.saveJobs(list);
    const cloudId = await cloudSave(list[0]);
    if (cloudId) {
      list[0].cloudId = cloudId;
      store.saveJobs(list);
    }
    const u = store.users().find((x) => normPhone(x.phone) === normPhone(phone) || (x.phones||[]).some((n) => normPhone(n)===normPhone(phone)));
    if (u) {
      const upd = { ...u, name, trades, cities, phone: normPhone(phone) || u.phone };
      store.saveUsers(store.users().map((x) => normPhone(x.phone) === normPhone(u.phone) ? upd : x));
      try { await cloudSaveUser(upd); } catch (err) {}
    }
    store.tab = "mine";
    try { await cloudLoad(); } catch (err) {}
    render();
    setTimeout(() => { postingLock = false; }, 2500);
    } catch (err) {
      postingLock = false;
      if (seekBtn) seekBtn.disabled = false;
      alert((err && err.message) || t("empty"));
    }
  };
  const docs = document.getElementById("flag-docs");
  const ins = document.getElementById("flag-ins");
  if (docs) docs.onchange = () => store.saveProfile({ ...store.profile(), docs: docs.checked });
  if (ins) ins.onchange = () => store.saveProfile({ ...store.profile(), insurance: ins.checked });
  const closedBtn = document.getElementById("btn-closed");
  if (closedBtn) closedBtn.onclick = () => {
    const p = store.profile();
    store.saveProfile({ ...p, closed: Number(p.closed || 0) + 1 });
    render();
  };
  const review = document.getElementById("review-form");
  if (review) review.onsubmit = (e) => {
    e.preventDefault();
    alert(t("reviewSelf"));
  };
  const prof = document.getElementById("prof-form");
  if (prof) prof.onsubmit = async (e) => {
    e.preventDefault();
    const f = new FormData(prof);
    const phones = profilePhones({
      phone: f.get("phone"),
      phone2: f.get("phone2"),
      phone3: f.get("phone3")
    });
    if (!phones.length) return;
    const name = String(f.get("name") || "").trim();
    const city = f.get("city");
    const oldUser = store.user() || {};
    const next = {
      ...oldUser,
      name: name || oldUser.name,
      city,
      phone: phones[0],
      phones,
      lastAct: Date.now()
    };
    let users = store.users().filter((u) => normPhone(u.phone) !== normPhone(oldUser.phone) && normPhone(u.phone) !== phones[0]);
    users.push(next);
    store.saveUsers(users);
    store.session = phones[0];
    store.saveProfile({
      ...store.profile(),
      name: name || store.profile().name,
      city,
      phone: phones[0],
      phones,
      lastAct: Date.now()
    });
    try { await cloudSaveUser(next); } catch (err) {}
    touchAct();
    render();
  };
}

setLang(store.lang);
(function resetStale() {
  const ver = "68";
  if (localStorage.getItem("bil_appv") !== ver) {
    localStorage.setItem("bil_appv", ver);
    localStorage.setItem("bil_board", "feed");
    localStorage.setItem("bil_tab", "feed");
    store.board = "feed";
    store.tab = "feed";
    store.openJob = "";
  }
})();

try {
  if (store.cityFilter === "all") {
    const pc = (store.profile() || {}).city;
    if (pc) store.cityFilter = pc;
  }
} catch (e) {}
try { askGeoCity(); } catch (e) {}

(async () => {
  try {
    if (store.session) store.session = normPhone(store.session);
    if (wantAdminLink()) await openAdminLogin();
    await cloudLoadUsers();
    await cloudLoadPhotosAll();
    await cloudLoad();
    await cloudPushLocal();
    try {
      const rr = await fetch(fb("/reviews"));
      if (rr.ok) {
        const data = await rr.json();
        if (data && typeof data === "object") {
          const map = store.extraRevs();
          Object.keys(data).forEach((k) => {
            const rows = Array.isArray(data[k]) ? data[k] : [];
            map[k] = (map[k] || []).concat(rows.filter((n) => !(map[k] || []).some((o) => {
              const np = normPhone(n.fromPhone || "");
              const op = normPhone(o.fromPhone || "");
              if (np && op && np === op) return true;
              return o.text === n.text && o.name === n.name && o.stars === n.stars;
            })));
          });
          store.saveExtraRevs(map);
        }
      }
    } catch (e) {}
    try {
      const cc = await fetch(fb("/complaints"));
      if (cc.ok) {
        const data = await cc.json();
        if (data && typeof data === "object") {
          const map = store.complaints();
          Object.keys(data).forEach((k) => {
            const rows = Array.isArray(data[k]) ? data[k] : [];
            map[k] = (map[k] || []).concat(rows.filter((n) => !(map[k] || []).some((o) => o.fromPhone === n.fromPhone && o.why === n.why)));
          });
          store.saveComplaints(map);
        }
      }
    } catch (e2) {}
    pingVisit();
    if (myPhone()) {
      await loadPrivDocs(myPhone());
      await loadDocReqs(myPhone());
      const pics = await cloudLoadPhotos(myPhone());
      if (pics && (pics.photo || (pics.workPhotos && pics.workPhotos.length))) {
        store.saveProfile({
          ...store.profile(),
          photo: pics.photo || store.profile().photo || "",
          workPhotos: pics.workPhotos || store.profile().workPhotos || []
        });
      }
    }
  } catch (e) { console.error(e); }
  render();
})();
