export const languages = {
  ja: '日本語',
  en: 'English',
};

export const defaultLang = 'ja';

export const ui = {
  ja: {
    'nav.home': 'ホーム',
    'nav.about': '私たちについて',
    'nav.members': 'メンバー',
    'nav.activities': '活動内容',
    'nav.events': 'イベント',
    'nav.contact': 'お問い合わせ',
    'hero.title': 'デジタルと海辺の暮らしが織りなす新しい働き方',
    'hero.subtitle': 'IT × Local Life in HYUGA\n波のリズムとデジタルワークが調和する街',
    'hero.cta.learn': '詳しく見る',
    'hero.cta.members': 'メンバーを見る',
    'about.title': 'デジタルと波が出会う場所',
    'about.description': '日向の穏やかな海辺で、先端技術と心地よい暮らしを両立する新しいワークスタイルを創造しています。都会の喧騒を離れ、デジタルの力で世界と繋がりながら、地域に根ざした持続可能なキャリアと生活を実現します。',
    'activities.title': '活動内容',
    'members.title': 'メンバー紹介',
    'events.title': 'ニュース & イベント',
    'contact.title': 'お問い合わせ',
    'footer.description': '日向市を拠点とするデジタル人材のコミュニティ。地方からの新しい働き方と暮らし方を発信します。',
    'site.title': 'HUGA DIGITAL COLLECTIVE - 日向デジタル・コレクティブ',
    'site.description': '日向市を拠点とするデジタル人材のコミュニティ。地方からの新しい働き方と暮らし方を発信します。',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.members': 'Members',
    'nav.activities': 'Activities',
    'nav.events': 'Events',
    'nav.contact': 'Contact',
    'hero.title': 'A New Way of Working Where Digital Meets Coastal Living',
    'hero.subtitle': 'IT × Local Life in HYUGA\nA city where the rhythm of waves harmonizes with digital work',
    'hero.cta.learn': 'Learn More',
    'hero.cta.members': 'View Members',
    'about.title': 'Where Digital Meets the Waves',
    'about.description': 'We create new work styles that balance cutting-edge technology with comfortable living on the tranquil shores of Hyuga. Away from the hustle and bustle of the city, we achieve sustainable careers and lifestyles rooted in the local community while connecting to the world through digital technology.',
    'activities.title': 'Our Activities',
    'members.title': 'Meet Our Members',
    'events.title': 'News & Events',
    'contact.title': 'Contact Us',
    'footer.description': 'A community of digital professionals based in Hyuga City. We promote new ways of working and living from rural areas.',
    'site.title': 'HUGA DIGITAL COLLECTIVE',
    'site.description': 'A community of digital professionals based in Hyuga City. We promote new ways of working and living from rural areas.',
  },
} as const;

export type Lang = keyof typeof ui;