// 注: process.env.XX是Vercel的环境变量，配置方式见：https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a
const BLOG = {
  // Important page_id！！！Duplicate Template from  https://www.notion.so/tanghh/02ab3b8678004aa69e9e415905ef32a5
  NOTION_PAGE_ID:
        process.env.NOTION_PAGE_ID || 'b969304570d54d49b5ea42944cc824ef',
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // 伪静态路径，开启后所有文章URL都以 .html 结尾。
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 36000, // 更新内容缓存间隔 单位(秒)；即每个页面有5秒的纯静态期、此期间无论多少次访问都不会抓取notion数据；调大该值有助于节省Vercel资源、同时提升访问速率，但也会使文章更新有延迟。
  THEME: process.env.NEXT_PUBLIC_THEME || 'heo', // 当前主题，在themes文件夹下可找到所有支持的主题；主题名称就是文件夹名，例如 example,fukasawa,gitbook,heo,hexo,landing,matery,medium,next,nobelium,plog,simple
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || false, // 是否显示切换主题按钮
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN', // e.g 'zh-CN','en-US'  see /lib/lang.js for more.
  SINCE: process.env.NEXT_SINCE || 2021, // e.g if leave this empty, current year will be used.
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'auto', // ['light', 'dark', 'auto'], // light 日间模式 ， dark夜间模式， auto根据时间和主题自动夜间模式
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [23, 7], // 夜间模式起至时间，false时关闭根据时间自动切换夜间模式

  // 3.14.1版本后，欢迎语在此配置，英文逗号隔开 ,  即可支持多个欢迎语打字效果。
  GREETING_WORDS: process.env.NEXT_PUBLIC_GREETING_WORDS || 'Hi，我是一个大学牲, Hi，我是一个打工人,Hi，我是一个干饭人,欢迎来到我的博客🎉',

  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true, // 支持Menu 类型，从3.12.0版本起，各主题将逐步支持灵活的二级菜单配置，替代了原来的Page类型，此配置是试验功能、默认关闭。

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || '故人', // 您的昵称 例如 tangly1024
  BIO: process.env.NEXT_PUBLIC_BIO || '我与春风皆过客，你携秋水揽星河。', // 作者简介
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://88lin.eu.org', // 网站地址
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'Notion,88lin,故人,博客,Blog', // 网站关键词 英文逗号隔开

  // 社交链接，不需要可留空白，例如 CONTACT_WEIBO:''
  CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'guren88@888.com', // 邮箱地址 
  CONTACT_WEIBO: process.env.NEXT_PUBLIC_CONTACT_WEIBO || '', // 你的微博个人主页
  CONTACT_TWITTER: process.env.NEXT_PUBLIC_CONTACT_TWITTER || '', // 你的twitter个人主页
  CONTACT_GITHUB: process.env.NEXT_PUBLIC_CONTACT_GITHUB || 'https://githubfast.com/88lin', // 你的github个人主页 
  CONTACT_TELEGRAM: process.env.NEXT_PUBLIC_CONTACT_TELEGRAM || '', // 你的telegram 地址 例如 https://t.me/tangly_1024
  CONTACT_LINKEDIN: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || '', // 你的linkedIn 首页
  CONTACT_INSTAGRAM: process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM || '', // 您的instagram地址
  CONTACT_BILIBILI: process.env.NEXT_PUBLIC_CONTACT_BILIBILI || 'https://space.bilibili.com/1412014683', // B站主页
  CONTACT_YOUTUBE: process.env.NEXT_PUBLIC_CONTACT_YOUTUBE || '', // Youtube主页

  NOTION_HOST: process.env.NEXT_PUBLIC_NOTION_HOST || 'https://www.notion.so', // Notion域名，您可以选择用自己的域名进行反向代理，如果不懂得什么是反向代理，请勿修改此项

  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || 'https://jsd.cdn.zzko.cn/gh/88lin/PicX@master/微信图片_20231204174129.jpg', // blog favicon 配置, 默认使用 /favicon.ico，支持在线图片，如 https://img.imesong.com/favicon.png

  IMAGE_COMPRESS_WIDTH: process.env.NEXT_PUBLIC_IMAGE_COMPRESS_WIDTH || 800, // 图片压缩宽度默认值，作用于博客封面和文章内容 越小加载图片越快
  IMAGE_ZOOM_IN_WIDTH: process.env.NEXT_PUBLIC_IMAGE_ZOOM_IN_WIDTH || 1200, // 文章图片点击放大后的画质宽度，不代表在网页中的实际展示宽度
  RANDOM_IMAGE_URL: process.env.NEXT_PUBLIC_RANDOM_IMAGE_URL || '', // 随机图片API,如果未配置下面的关键字，主页封面，头像，文章封面图都会被替换为随机图片
  RANDOM_IMAGE_REPLACE_TEXT: process.env.NEXT_PUBLIC_RANDOM_IMAGE_NOT_REPLACE_TEXT || 'images.unsplash.com', // 触发替换图片的 url 关键字(多个支持用英文逗号分开)，只有图片地址中包含此关键字才会替换为上方随机图片url
  // eg: images.unsplash.com(notion图床的所有图片都会替换),如果你在 notion 里已经添加了一个随机图片 url，恰巧那个服务跑路或者挂掉，想一键切换所有配图可以将该 url 配置在这里
  // 默认下会将你上传到 notion的主页封面图和头像也给替换，建议将主页封面图和头像放在其他图床，在 notion 里配置 link 即可。

  // START ************网站字体*****************
  // ['font-serif','font-sans'] 两种可选，分别是衬线和无衬线: 参考 https://www.jianshu.com/p/55e410bd2115
  // 后面空格隔开的font-light的字体粗细，留空是默认粗细；参考 https://www.tailwindcss.cn/docs/font-weight
  FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || 'font-sans font-light',
  // 字体CSS 例如 https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css
  FONT_URL: [
    //'https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css',
    'https://fonts.googleapis.com/css?family=Bitter&display=swap', // Bitter 用作英文数字的字体
    'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300&display=swap'
  ],
  // 无衬线字体 例如'"LXGW WenKai"'
  FONT_SANS: [
    //'"LXGW WenKai"',
    '"PingFang SC"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Hiragino Sans GB"',
    '"Microsoft YaHei"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Segoe UI"',
    '"Noto Sans SC"',
    'HarmonyOS_Regular',
    '"Helvetica Neue"',
    'Helvetica',
    '"Source Han Sans SC"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"'
  ],
  // 衬线字体 例如'"LXGW WenKai"'
  FONT_SERIF: [
    '"LXGW WenKai"',
    'Bitter',
    '"Noto Serif SC"',
    'SimSun',
    '"Times New Roman"',
    'Times',
    'serif',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Apple Color Emoji"'
  ],
  FONT_AWESOME: process.env.NEXT_PUBLIC_FONT_AWESOME_PATH || 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', // font-awesome 字体图标地址; 可选 /css/all.min.css ， https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/6.0.0/css/all.min.css

  // END ************网站字体*****************
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, // 是否允许复制页面内容 默认允许，如果设置为false、则全栈禁止复制内容。
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU: process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU || false, // 自定义右键菜单，覆盖系统菜单
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_THEME_SWITCH: process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_THEME_SWITCH || true,

  // 自定义外部脚本，外部样式
  CUSTOM_EXTERNAL_JS: ['https://cdn.bootcss.com/pace/1.0.2/pace.min.js'], // e.g. ['http://xx.com/script.js','http://xx.com/script.js']
  CUSTOM_EXTERNAL_CSS: [''], // e.g. ['http://xx.com/style.css','http://xx.com/style.css']

  // 侧栏布局 是否反转(左变右,右变左) 已支持主题: hexo next medium fukasawa example
  LAYOUT_SIDEBAR_REVERSE: process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  // 一个小插件展示你的facebook fan page~ @see https://tw.andys.pro/article/add-facebook-fanpage-notionnext
  FACEBOOK_PAGE_TITLE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null, // 邊欄 Facebook Page widget 的標題欄，填''則無標題欄 e.g FACEBOOK 粉絲團'
  FACEBOOK_PAGE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null, // Facebook Page 的連結 e.g https://www.facebook.com/tw.andys.pro
  FACEBOOK_PAGE_ID: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '', // Facebook Page ID 來啟用 messenger 聊天功能
  FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '', // Facebook App ID 來啟用 messenger 聊天功能 获取: https://developers.facebook.com/

  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '桂ICP备21002685号-1', // 备案号 闽ICP备XXXXXXX

  // START********代码相关********
  // PrismJs 代码相关
  PRISM_JS_PATH: 'https://npm.elemecdn.com/prismjs@1.29.0/components/',
  PRISM_JS_AUTO_LOADER: 'https://npm.elemecdn.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js',

  // 代码主题 @see https://githubfast.com/PrismJS/prism-themes
  PRISM_THEME_PREFIX_PATH: process.env.NEXT_PUBLIC_PRISM_THEME_PREFIX_PATH || 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-holi-theme.min.css', // 代码块默认主题
  PRISM_THEME_SWITCH: process.env.NEXT_PUBLIC_PRISM_THEME_SWITCH || true, // 是否开启浅色/深色模式代码主题切换； 开启后将显示以下两个主题
  PRISM_THEME_LIGHT_PATH: process.env.NEXT_PUBLIC_PRISM_THEME_LIGHT_PATH || 'https://npm.elemecdn.com/prism-themes/themes/prism-holi-theme.css', // 浅色模式主题
  PRISM_THEME_DARK_PATH: process.env.NEXT_PUBLIC_PRISM_THEME_DARK_PATH || 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.min.css', // 深色模式主题

  CODE_MAC_BAR: process.env.NEXT_PUBLIC_CODE_MAC_BAR || true, // 代码左上角显示mac的红黄绿图标
  CODE_LINE_NUMBERS: process.env.NEXT_PUBLIC_CODE_LINE_NUMBERS || false, // 是否显示行号
  CODE_COLLAPSE: process.env.NEXT_PUBLIC_CODE_COLLAPSE || false, // 是否支持折叠代码框
  CODE_COLLAPSE_EXPAND_DEFAULT: process.env.NEXT_PUBLIC_CODE_COLLAPSE_EXPAND_DEFAULT || true, // 折叠代码默认是展开状态

  // END********代码相关********

  // Mermaid 图表CDN
  MERMAID_CDN: process.env.NEXT_PUBLIC_MERMAID_CDN || 'https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.2.4/mermaid.min.js', // CDN
  // QRCodeCDN
  QR_CODE_CDN: process.env.NEXT_PUBLIC_QR_CODE_CDN || 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',

  BACKGROUND_LIGHT: '#eeeeee', // use hex value, don't forget '#' e.g #fffefc
  BACKGROUND_DARK: '#000000', // use hex value, don't forget '#'
  SUB_PATH: '', // leave this empty unless you want to deploy in a folder

  POST_SHARE_BAR_ENABLE: process.env.NEXT_PUBLIC_POST_SHARE_BAR || 'true', // 文章分享功能 ，将在底部显示一个分享条
  POSTS_SHARE_SERVICES: process.env.NEXT_PUBLIC_POST_SHARE_SERVICES || 'link,wechat,qq,weibo,email', // 分享的服務，按顺序显示,逗号隔开
  // 所有支持的分享服务：link(复制链接),wechat(微信),qq,weibo(微博),email(邮件),facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin,vkshare,okshare,tumblr,livejournal,mailru,viber,workplace,pocket,instapaper,hatena

  POST_URL_PREFIX: process.env.NEXT_PUBLIC_POST_URL_PREFIX || 'article',
  // POST类型文章的默认路径前缀，例如默认POST类型的路径是  /article/[slug]
  // 如果此项配置为 '' 空， 则文章将没有前缀路径，使用场景： 希望文章前缀路径为 /post 的情况 支持多级
  // 支援類似 WP 可自訂文章連結格式的功能：https://wordpress.org/documentation/article/customize-permalinks/，目前只先實作 %year%/%month%/%day%
  // 例：如想連結改成前綴 article + 時間戳記，可變更為： 'article/%year%/%month%/%day%'

  POST_LIST_STYLE: process.env.NEXT_PUBLIC_POST_LIST_STYLE || 'page', // ['page','scroll] 文章列表样式:页码分页、单页滚动加载
  POST_LIST_PREVIEW: process.env.NEXT_PUBLIC_POST_PREVIEW || 'false', //  是否在列表加载文章预览
  POST_PREVIEW_LINES: 16, // 预览博客行数
  POST_RECOMMEND_COUNT: 6, // 推荐文章数量
  POSTS_PER_PAGE: 12, // post counts per page
  POSTS_SORT_BY: process.env.NEXT_PUBLIC_POST_SORT_BY || 'date', // 排序方式 'date'按时间,'notion'由notion控制

  ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || null, // 在这里查看 https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_ADMIN_APP_KEY: process.env.ALGOLIA_ADMIN_APP_KEY || null, // 管理后台的KEY，不要暴露在代码中，在这里查看 https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_SEARCH_ONLY_APP_KEY: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_APP_KEY || null, // 客户端搜索用的KEY
  ALGOLIA_INDEX: process.env.NEXT_PUBLIC_ALGOLIA_INDEX || null, // 在Algolia中创建一个index用作数据库
  //   ALGOLIA_RECREATE_DATA: process.env.ALGOLIA_RECREATE_DATA || process.env.npm_lifecycle_event === 'build', // 为true时重新构建索引数据; 默认在build时会构建

  PREVIEW_CATEGORY_COUNT: 0, // 首页最多展示的分类数量，0为不限制
  PREVIEW_TAG_COUNT: 0, // 首页最多展示的标签数量，0为不限制

  POST_DISABLE_GALLERY_CLICK: process.env.NEXT_PUBLIC_POST_DISABLE_GALLERY_CLICK || true, // 画册视图禁止点击，方便在友链页面的画册插入链接

  //   ********动态特效相关********
  // 鼠标点击烟花特效
  FIREWORKS: process.env.NEXT_PUBLIC_FIREWORKS || true, // 开关
  FIREWORKS_COLOR: [
    '255, 20, 97',
    '24, 255, 146',
    '90, 135, 255',
    '251, 243, 140'
  ],
  // 樱花飘落特效
  SAKURA: process.env.NEXT_PUBLIC_SAKURA || true, // 开关
  // 漂浮线段特效
  NEST: process.env.NEXT_PUBLIC_NEST || false, // 开关
  // 动态彩带特效
  FLUTTERINGRIBBON: process.env.NEXT_PUBLIC_FLUTTERINGRIBBON || false, // 开关
  // 静态彩带特效
  RIBBON: process.env.NEXT_PUBLIC_RIBBON || false, // 开关
  // 星空雨特效 黑夜模式才会生效
  STARRY_SKY: process.env.NEXT_PUBLIC_STARRY_SKY || true, // 开关

  //   ********挂件组件相关********
  // AI 文章摘要生成 @see https://docs_s.tianli0.top/
  TianliGPT_CSS: process.env.NEXT_PUBLIC_TIANLI_GPT_CSS || 'https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.15.2/tianli_gpt.css',
  TianliGPT_JS: process.env.NEXT_PUBLIC_TIANLI_GPT_JS || 'https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.15.2/tianli_gpt.js',
  TianliGPT_KEY: process.env.NEXT_PUBLIC_TIANLI_GPT_KEY || '',

  // Chatbase 是否显示chatbase机器人 https://www.chatbase.co/
  CHATBASE_ID: process.env.NEXT_PUBLIC_CHATBASE_ID || efdSivbEcXuzA3NAkQIpO,
  // WebwhizAI 机器人 @see https://githubfast.com/webwhiz-ai/webwhiz
  WEB_WHIZ_ENABLED: process.env.NEXT_PUBLIC_WEB_WHIZ_ENABLED || false, // 是否显示
  WEB_WHIZ_BASE_URL: process.env.NEXT_PUBLIC_WEB_WHIZ_BASE_URL || 'https://api.webwhiz.ai', // 可以自建服务器
  WEB_WHIZ_CHAT_BOT_ID: process.env.NEXT_PUBLIC_WEB_WHIZ_CHAT_BOT_ID || null, // 在后台获取ID
  DIFY_CHATBOT_ENABLED: process.env.NEXT_PUBLIC_DIFY_CHATBOT_ENABLED || false,
  DIFY_CHATBOT_BASE_URL: process.env.NEXT_PUBLIC_DIFY_CHATBOT_BASE_URL || '',
  DIFY_CHATBOT_TOKEN: process.env.NEXT_PUBLIC_DIFY_CHATBOT_TOKEN || '',
  // 悬浮挂件
  WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET || true, // 是否显示宠物挂件
  WIDGET_PET_LINK:
        process.env.NEXT_PUBLIC_WIDGET_PET_LINK ||
        'https://cdn.jsdelivr.net/npm/live2d-widget-model-tororo@1.0.5/assets/tororo.model.json', // 挂件模型地址 @see https://githubfast.com/xiazeyu/live2d-widget-models
  WIDGET_PET_SWITCH_THEME: process.env.NEXT_PUBLIC_WIDGET_PET_SWITCH_THEME || false, // 点击宠物挂件切换博客主题

  // 音乐播放插件
  MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER || false, // 是否使用音乐播放插件
  MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || true, // 是否在左下角显示播放和切换，如果使用播放器，打开自动播放再隐藏，就会以类似背景音乐的方式播放，无法取消和暂停
  MUSIC_PLAYER_AUTO_PLAY:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || true, // 是否自动播放，不过自动播放时常不生效（移动设备不支持自动播放）
  MUSIC_PLAYER_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_LRC_TYPE || '0', // 歌词显示类型，可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）（前提是有配置歌词路径，对 meting 无效）
  MUSIC_PLAYER_CDN_URL:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL ||
        'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js',
  MUSIC_PLAYER_ORDER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_ORDER || 'list', // 默认播放方式，顺序 list，随机 random
  MUSIC_PLAYER_AUDIO_LIST: [
    // 示例音乐列表。除了以下配置外，还可配置歌词，具体配置项看此文档 https://aplayer.js.org/#/zh-Hans/
    {
      name: '风を共に舞う気持ち',
      artist: 'Falcom Sound Team jdk',
      url: 'https://music.163.com/song/media/outer/url?id=731419.mp3',
      cover:
            'https://p2.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },
    {
      name: '王都グランセル',
      artist: 'Falcom Sound Team jdk',
      url: 'https://music.163.com/song/media/outer/url?id=731355.mp3',
      cover:
            'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    }
  ],
  MUSIC_PLAYER_METING: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING || false, // 是否要开启 MetingJS，从平台获取歌单。会覆盖自定义的 MUSIC_PLAYER_AUDIO_LIST，更多配置信息：https://githubfast.com/metowolf/MetingJS
  MUSIC_PLAYER_METING_SERVER:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_SERVER || 'netease', // 音乐平台，[netease, tencent, kugou, xiami, baidu]
  MUSIC_PLAYER_METING_ID:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_ID || '60198', // 对应歌单的 id
  MUSIC_PLAYER_METING_LRC_TYPE:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_LRC_TYPE || '1', // 可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）

  //   ********挂件组件相关********
  // ----> 评论互动 可同时开启多个支持 WALINE VALINE GISCUS CUSDIS UTTERRANCES GITALK

  COMMENT_HIDE_SINGLE_TAB: process.env.NEXT_PUBLIC_COMMENT_HIDE_SINGLE_TAB || false, // Whether hide the tab when there's no tabs. 只有一个评论组件时是否隐藏切换组件的标签页

  // artalk 评论插件
  COMMENT_ARTALK_SERVER: process.env.NEXT_PUBLIC_COMMENT_ARTALK_SERVER || '', // ArtalkServert后端地址 https://artalk.js.org/guide/deploy.html
  COMMENT_ARTALK_JS: process.env.NEXT_PUBLIC_COMMENT_ARTALK_JS || 'https://cdnjs.cloudflare.com/ajax/libs/artalk/2.5.5/Artalk.js', // ArtalkServert js cdn
  COMMENT_ARTALK_CSS: process.env.NEXT_PUBLIC_COMMENT_ARTALK_CSS || 'https://cdnjs.cloudflare.com/ajax/libs/artalk/2.5.5/Artalk.css', // ArtalkServert css cdn

  // twikoo
  COMMENT_TWIKOO_ENV_ID: process.env.NEXT_PUBLIC_COMMENT_ENV_ID || '', // TWIKOO后端地址 腾讯云环境填envId；Vercel环境填域名，教程：https://tangly1024.com/article/notionnext-twikoo
  COMMENT_TWIKOO_COUNT_ENABLE: process.env.NEXT_PUBLIC_COMMENT_TWIKOO_COUNT_ENABLE || true, // 博客列表是否显示评论数
  COMMENT_TWIKOO_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_TWIKOO_CDN_URL || 'https://cdn.staticfile.org/twikoo/1.6.17/twikoo.min.js', // twikoo客户端cdn

  // utterance
  COMMENT_UTTERRANCES_REPO:
        process.env.NEXT_PUBLIC_COMMENT_UTTERRANCES_REPO || '', // 你的代码仓库名， 例如我是 'tangly1024/NotionNext'； 更多文档参考 https://utteranc.es/

  // giscus @see https://giscus.app/
  COMMENT_GISCUS_REPO: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO || '', // 你的Github仓库名 e.g 'tangly1024/NotionNext'
  COMMENT_GISCUS_REPO_ID: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO_ID || '', // 你的Github Repo ID e.g ( 設定完 giscus 即可看到 )
  COMMENT_GISCUS_CATEGORY_ID:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY_ID || '', // 你的Github Discussions 內的 Category ID ( 設定完 giscus 即可看到 )
  COMMENT_GISCUS_MAPPING:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_MAPPING || 'pathname', // 你的Github Discussions 使用哪種方式來標定文章, 預設 'pathname'
  COMMENT_GISCUS_REACTIONS_ENABLED:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_REACTIONS_ENABLED || '1', // 你的 Giscus 是否開啟文章表情符號 '1' 開啟 "0" 關閉 預設開啟
  COMMENT_GISCUS_EMIT_METADATA:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_EMIT_METADATA || '0', // 你的 Giscus 是否提取 Metadata '1' 開啟 '0' 關閉 預設關閉
  COMMENT_GISCUS_INPUT_POSITION:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_INPUT_POSITION || 'bottom', // 你的 Giscus 發表留言位置 'bottom' 尾部 'top' 頂部, 預設 'bottom'
  COMMENT_GISCUS_LANG: process.env.NEXT_PUBLIC_COMMENT_GISCUS_LANG || 'zh-CN', // 你的 Giscus 語言 e.g 'en', 'zh-TW', 'zh-CN', 預設 'en'
  COMMENT_GISCUS_LOADING:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_LOADING || 'lazy', // 你的 Giscus 載入是否漸進式載入, 預設 'lazy'
  COMMENT_GISCUS_CROSSORIGIN:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_CROSSORIGIN || 'anonymous', // 你的 Giscus 可以跨網域, 預設 'anonymous'

  COMMENT_CUSDIS_APP_ID: process.env.NEXT_PUBLIC_COMMENT_CUSDIS_APP_ID || '', // data-app-id 36位 see https://cusdis.com/
  COMMENT_CUSDIS_HOST:
        process.env.NEXT_PUBLIC_COMMENT_CUSDIS_HOST || 'https://cusdis.com', // data-host, change this if you're using self-hosted version
  COMMENT_CUSDIS_SCRIPT_SRC:
        process.env.NEXT_PUBLIC_COMMENT_CUSDIS_SCRIPT_SRC ||
        '/js/cusdis.es.js', // change this if you're using self-hosted version

  // gitalk评论插件 更多参考 https://gitalk.github.io/
  COMMENT_GITALK_REPO: process.env.NEXT_PUBLIC_COMMENT_GITALK_REPO || '', // 你的Github仓库名，例如 'NotionNext'
  COMMENT_GITALK_OWNER: process.env.NEXT_PUBLIC_COMMENT_GITALK_OWNER || '', // 你的用户名 e.g tangly1024
  COMMENT_GITALK_ADMIN: process.env.NEXT_PUBLIC_COMMENT_GITALK_ADMIN || '', // 管理员用户名、一般是自己 e.g 'tangly1024'
  COMMENT_GITALK_CLIENT_ID:
        process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_ID || '', // e.g 20位ID ， 在gitalk后台获取
  COMMENT_GITALK_CLIENT_SECRET:
        process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_SECRET || '', // e.g 40位ID， 在gitalk后台获取
  COMMENT_GITALK_DISTRACTION_FREE_MODE: false, // 类似facebook的无干扰模式
  COMMENT_GITALK_JS_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_GITALK_JS_CDN_URL || 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js', // gitalk客户端 js cdn
  COMMENT_GITALK_CSS_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_GITALK_CSS_CDN_URL || 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css', // gitalk客户端 css cdn

  COMMENT_GITTER_ROOM: process.env.NEXT_PUBLIC_COMMENT_GITTER_ROOM || '', // gitter聊天室 see https://gitter.im/ 不需要则留空
  COMMENT_DAO_VOICE_ID: process.env.NEXT_PUBLIC_COMMENT_DAO_VOICE_ID || '', // DaoVoice http://dashboard.daovoice.io/get-started
  COMMENT_TIDIO_ID: process.env.NEXT_PUBLIC_COMMENT_TIDIO_ID || '', // [tidio_id] -> //code.tidio.co/[tidio_id].js

  COMMENT_VALINE_CDN: process.env.NEXT_PUBLIC_VALINE_CDN || 'https://unpkg.com/valine@1.5.1/dist/Valine.min.js',
  COMMENT_VALINE_APP_ID: process.env.NEXT_PUBLIC_VALINE_ID || '', // Valine @see https://valine.js.org/quickstart.html 或 https://githubfast.com/stonehank/react-valine#%E8%8E%B7%E5%8F%96app-id-%E5%92%8C-app-key
  COMMENT_VALINE_APP_KEY: process.env.NEXT_PUBLIC_VALINE_KEY || '',
  COMMENT_VALINE_SERVER_URLS: process.env.NEXT_PUBLIC_VALINE_SERVER_URLS || '', // 该配置适用于国内自定义域名用户, 海外版本会自动检测(无需手动填写) @see https://valine.js.org/configuration.html#serverURLs
  COMMENT_VALINE_PLACEHOLDER:
        process.env.NEXT_PUBLIC_VALINE_PLACEHOLDER || '抢个沙发吧~', // 可以搭配后台管理评论 https://githubfast.com/DesertsP/Valine-Admin  便于查看评论，以及邮件通知，垃圾评论过滤等功能

  COMMENT_WALINE_SERVER_URL: process.env.NEXT_PUBLIC_WALINE_SERVER_URL || 'https://pl.accn.link/', // 请配置完整的Waline评论地址 例如 hhttps://preview-waline.tangly1024.com @see https://waline.js.org/guide/get-started.html
  COMMENT_WALINE_RECENT: process.env.NEXT_PUBLIC_WALINE_RECENT || false, // 最新评论

  // 此评论系统基于WebMention，细节可参考https://webmention.io
  // 它是一个基于IndieWeb理念的开放式评论系统，下方COMMENT_WEBMENTION包含的属性皆需配置：
  // ENABLE: 是否开启
  // AUTH: Webmention使用的IndieLogin，可使用Twitter或Github个人页面连结
  // HOSTNAME: Webmention绑定之网域，通常即为本站网址
  // TWITTER_USERNAME: 评论显示区域需要的资讯
  // TOKEN: Webmention的API token
  COMMENT_WEBMENTION_ENABLE: process.env.NEXT_PUBLIC_WEBMENTION_ENABLE || false,
  COMMENT_WEBMENTION_AUTH: process.env.NEXT_PUBLIC_WEBMENTION_AUTH || '',
  COMMENT_WEBMENTION_HOSTNAME: process.env.NEXT_PUBLIC_WEBMENTION_HOSTNAME || '',
  COMMENT_WEBMENTION_TWITTER_USERNAME: process.env.NEXT_PUBLIC_TWITTER_USERNAME || '',
  COMMENT_WEBMENTION_TOKEN: process.env.NEXT_PUBLIC_WEBMENTION_TOKEN || '',
  // <---- 评论插件

  // ----> 站点统计
  ANALYTICS_VERCEL: process.env.NEXT_PUBLIC_ANALYTICS_VERCEL || false, // vercel自带的统计 https://vercel.com/docs/concepts/analytics/quickstart https://githubfast.com/tangly1024/NotionNext/issues/897
  ANALYTICS_BUSUANZI_ENABLE: process.env.NEXT_PUBLIC_ANALYTICS_BUSUANZI_ENABLE || true, // 展示网站阅读量、访问数 see http://busuanzi.ibruce.info/
  ANALYTICS_BAIDU_ID: process.env.NEXT_PUBLIC_ANALYTICS_BAIDU_ID || '', // e.g 只需要填写百度统计的id，[baidu_id] -> https://hm.baidu.com/hm.js?[baidu_id]
  ANALYTICS_CNZZ_ID: process.env.NEXT_PUBLIC_ANALYTICS_CNZZ_ID || '', // 只需要填写站长统计的id, [cnzz_id] -> https://s9.cnzz.com/z_stat.php?id=[cnzz_id]&web_id=[cnzz_id]
  ANALYTICS_GOOGLE_ID: process.env.NEXT_PUBLIC_ANALYTICS_GOOGLE_ID || 'G-EN1QW81VW9', // 谷歌Analytics的id e.g: G-XXXXXXXXXX

  // 51la 站点统计 https://www.51.la/
  ANALYTICS_51LA_ID: process.env.NEXT_PUBLIC_ANALYTICS_51LA_ID || '', // id，在51la后台获取 参阅 https://docs.tangly1024.com/article/notion-next-51-la
  ANALYTICS_51LA_CK: process.env.NEXT_PUBLIC_ANALYTICS_51LA_CK || '', // ck，在51la后台获取

  // Matomo 网站统计
  MATOMO_HOST_URL: process.env.NEXT_PUBLIC_MATOMO_HOST_URL || '', // Matomo服务器地址，不带斜杠
  MATOMO_SITE_ID: process.env.NEXT_PUBLIC_MATOMO_SITE_ID || '', // Matomo网站ID
  // ACKEE网站访客统计工具
  ANALYTICS_ACKEE_TRACKER: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_TRACKER || '', // e.g 'https://ackee.tangly1024.com/tracker.js'
  ANALYTICS_ACKEE_DATA_SERVER: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DATA_SERVER || '', // e.g https://ackee.tangly1024.com , don't end with a slash
  ANALYTICS_ACKEE_DOMAIN_ID: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DOMAIN_ID || '', // e.g '82e51db6-dec2-423a-b7c9-b4ff7ebb3302'

  SEO_GOOGLE_SITE_VERIFICATION:
        process.env.NEXT_PUBLIC_SEO_GOOGLE_SITE_VERIFICATION || '', // Remove the value or replace it with your own google site verification code

  SEO_BAIDU_SITE_VERIFICATION:
        process.env.NEXT_PUBLIC_SEO_BAIDU_SITE_VERIFICATION || 'codeva-5Gs7LGUeHJ', // 百度站长平台的站点验证

  // 微软 Clarity 站点分析
  CLARITY_ID: process.env.NEXT_PUBLIC_CLARITY_ID || null, // 只需要复制Clarity脚本中的ID部分，ID是一个十位的英文数字组合

  // <---- 站点统计

  // START---->营收相关

  // 谷歌广告
  ADSENSE_GOOGLE_ID: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_ID || '', // 谷歌广告ID e.g ca-pub-xxxxxxxxxxxxxxxx
  ADSENSE_GOOGLE_TEST: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_TEST || false, // 谷歌广告ID测试模式，这种模式获取假的测试广告，用于开发 https://www.tangly1024.com/article/local-dev-google-adsense
  ADSENSE_GOOGLE_SLOT_IN_ARTICLE: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_IN_ARTICLE || '3806269138', // Google AdScene>广告>按单元广告>新建文章内嵌广告 粘贴html代码中的data-ad-slot值
  ADSENSE_GOOGLE_SLOT_FLOW: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_FLOW || '1510444138', // Google AdScene>广告>按单元广告>新建信息流广告
  ADSENSE_GOOGLE_SLOT_NATIVE: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_NATIVE || '4980048999', // Google AdScene>广告>按单元广告>新建原生广告
  ADSENSE_GOOGLE_SLOT_AUTO: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_AUTO || '8807314373', // Google AdScene>广告>按单元广告>新建展示广告 （自动广告）

  // 万维广告
  AD_WWADS_ID: process.env.NEXT_PUBLIC_WWAD_ID || null, // https://wwads.cn/ 创建您的万维广告单元ID
  AD_WWADS_BLOCK_DETECT: process.env.NEXT_PUBLIC_WWADS_AD_BLOCK_DETECT || false, // 是否开启WWADS广告屏蔽插件检测,开启后会在广告位上以文字提示 @see https://githubfast.com/bytegravity/whitelist-wwads

  // END<----营收相关

  // 自定义配置notion数据库字段名
  NOTION_PROPERTY_NAME: {
    password: process.env.NEXT_PUBLIC_NOTION_PROPERTY_PASSWORD || 'password',
    type: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE || 'type', // 文章类型，
    type_post: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_POST || 'Post', // 当type文章类型与此值相同时，为博文。
    type_page: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_PAGE || 'Page', // 当type文章类型与此值相同时，为单页。
    type_notice:
          process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_NOTICE || 'Notice', // 当type文章类型与此值相同时，为公告。
    type_menu: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_MENU || 'Menu', // 当type文章类型与此值相同时，为菜单。
    type_sub_menu:
          process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_SUB_MENU || 'SubMenu', // 当type文章类型与此值相同时，为子菜单。
    title: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TITLE || 'title', // 文章标题
    status: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS || 'status',
    status_publish:
          process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_PUBLISH || 'Published', // 当status状态值与此相同时为发布，可以为中文
    status_invisible:
          process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_INVISIBLE || 'Invisible', // 当status状态值与此相同时为隐藏发布，可以为中文 ， 除此之外其他页面状态不会显示在博客上
    summary: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SUMMARY || 'summary',
    slug: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SLUG || 'slug',
    category: process.env.NEXT_PUBLIC_NOTION_PROPERTY_CATEGORY || 'category',
    date: process.env.NEXT_PUBLIC_NOTION_PROPERTY_DATE || 'date',
    tags: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TAGS || 'tags',
    icon: process.env.NEXT_PUBLIC_NOTION_PROPERTY_ICON || 'icon'
  },

  // RSS订阅
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, // 是否开启RSS订阅功能
  MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID || null, // 开启mailichimp邮件订阅 客户列表ID ，具体使用方法参阅文档
  MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY || null, // 开启mailichimp邮件订阅 APIkey

  // 作废配置
  AVATAR: process.env.NEXT_PUBLIC_AVATAR || '/avatar.svg', // 作者头像，被notion中的ICON覆盖。若无ICON则取public目录下的avatar.png
  TITLE: process.env.NEXT_PUBLIC_TITLE || '故人BLOG', // 站点标题 ，被notion中的页面标题覆盖；此处请勿留空白，否则服务器无法编译
  HOME_BANNER_IMAGE:
        process.env.NEXT_PUBLIC_HOME_BANNER_IMAGE || '/bg_image.jpg', // 首页背景大图, 会被notion中的封面图覆盖，若无封面图则会使用代码中的 /public/bg_image.jpg 文件
  DESCRIPTION:
        process.env.NEXT_PUBLIC_DESCRIPTION || '这是一个由NotionNext生成的站点', // 站点描述，被notion中的页面描述覆盖

  // 网站图片
  IMG_LAZY_LOAD_PLACEHOLDER: process.env.NEXT_PUBLIC_IMG_LAZY_LOAD_PLACEHOLDER || 'data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibGRzLWxhdmEtbGFtcCIgd2lkdGg9IjgwcHgiICBoZWlnaHQ9IjgwcHgiICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+PGRlZnM+CiAgPGZpbHRlciBpZD0ibGRzLWxhdmEtbGFtcC1maWx0ZXJpZC1lNTVhOTVjNDFjZTRhIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4KICAgIDxmZUdhdXNzaWFuQmx1ciBpbj0iU291cmNlR3JhcGhpYyIgc3RkRGV2aWF0aW9uPSIzIj48L2ZlR2F1c3NpYW5CbHVyPgogICAgPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjEgMCAwIDAgMCAgMCAxIDAgMCAwICAwIDAgMSAwIDAgIDAgMCAwIDEwIC01Ij48L2ZlQ29sb3JNYXRyaXg+CiAgPC9maWx0ZXI+CjwvZGVmcz48ZyBmaWx0ZXI9InVybCgjbGRzLWxhdmEtbGFtcC1maWx0ZXJpZC1lNTVhOTVjNDFjZTRhKSI+PGNpcmNsZSBjeD0iNzciIGN5PSI0MC45NjIyIiByPSIwLjgzNjc4OCIgZmlsbD0iI2ZmN2M4MSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTMyLjQxMTc5NTQ4MTQ0MTk3Oy03LjA3MjUyNjI0OTc1NTEwNyIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4wMjIyOTI5MjEyNDQwODEyMnMiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjIzOzA7MCIga2V5VGltZXM9IjA7MC42ODAzNzk4NzA1ODAzMjM1OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMDIyMjkyOTIxMjQ0MDgxMjJzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9Ijc3IiBjeT0iODUuMzA5NiIgcj0iNy44MjQwOSIgZmlsbD0iI2ZmN2M4MSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTIyLjM2OTI5NjMyOTQ0MTU0Oy05LjMzMjk4OTcwOTM3MTUxIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjY0ODA1NjU0NjU3Mjg5ODlzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIxMzswOzAiIGtleVRpbWVzPSIwOzAuNzA2NzQ4NzYyNjQ4OTU1ODsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjY0ODA1NjU0NjU3Mjg5ODlzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjU2IiBjeT0iOTkuNzI2MSIgcj0iMTkuNTAzNSIgZmlsbD0iI2ZmN2M4MSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTQ0LjIxMDUwMjI4MDc1NDQ3Oy0yNi4wOTY0MjkwNDQ2OTA3MyIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC42Mjc4Njc3OTE4OTYzNjE4cyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMzM7MDswIiBrZXlUaW1lcz0iMDswLjYzODY1NzU0NTI2Mzk1MzE7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC42Mjc4Njc3OTE4OTYzNjE4cyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI1MCIgY3k9IjY5LjMyODIiIHI9IjE3Ljc5NzgiIGZpbGw9IiNmZjdjODEiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjE1OC4zNjg4OTk4Nzc0MTg0MTstNDguMDYxMzQyNzMyMjg5ODYiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuNzk4MDAyMzM0ODIxNjg5MXMiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjU0OzA7MCIga2V5VGltZXM9IjA7MC42NDMzODkzNTc3MDY5MDM0OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuNzk4MDAyMzM0ODIxNjg5MXMiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iMzAiIGN5PSIxMTMuNDk5IiByPSIxNi44NjEiIGZpbGw9IiNmZjdjODEiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjE0Ni45OTA3MjMxMzkzNjk2NjstMTIuNTAwMDcyMzE2MDM4NTMzIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjU3NjY1NjU2MDcxNzc3NjNzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIyODswOzAiIGtleVRpbWVzPSIwOzAuNTI3ODUwMzg2MzUyODY3MzsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjU3NjY1NjU2MDcxNzc3NjNzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjQ1IiBjeT0iNy4xNTAxNiIgcj0iMCIgZmlsbD0iI2ZmN2M4MSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTM5LjAzMTQ4MjUyNjY5OTk7LTEzLjkwMjg3ODE2MzAwMTk1MSIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4yMjkwMDYwNDQ5NTg2MzI0MnMiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjI4OzA7MCIga2V5VGltZXM9IjA7MC41NzAxMDI2Mjg5OTQzOTY7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4yMjkwMDYwNDQ5NTg2MzI0MnMiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iNTMiIGN5PSItOS4wNjE1OCIgcj0iMCIgZmlsbD0iI2ZmN2M4MSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTY1LjE5ODEzNDgyNzY2NTE7LTM3LjE2OTYzODc1MDM4Mjc5IiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjIyNzc3MDc3MjU2NDg4MDc2cyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iNTM7MDswIiBrZXlUaW1lcz0iMDswLjcwOTcxOTg1MjI3MjY4MDQ7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4yMjc3NzA3NzI1NjQ4ODA3NnMiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iNTYiIGN5PSI2Ni4xOTYzIiByPSIxMy4wNDg4IiBmaWxsPSIjZmY3YzgxIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeSIgdmFsdWVzPSIxMjYuNjY1NjgzMTEzMDU2NzM7LTE4LjU3NTcxMzIwMjkxMzYzIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjc4MzAwMzk0NDE2NDM1MTNzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIyMzswOzAiIGtleVRpbWVzPSIwOzAuOTYyMjY5MjI2Mjg2MDk0NjsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjc4MzAwMzk0NDE2NDM1MTNzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjQ5IiBjeT0iLTMxLjM3MTgiIHI9IjIuNDYxNjYiIGZpbGw9IiNmZjdjODEiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjE3Mi40NDAxNDM3NTg5ODM7LTUzLjEwNzAxNTYzMDU0OTIzIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjI3MDMwMDE1OTA2MjYxMzA3cyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iNTc7MDswIiBrZXlUaW1lcz0iMDswLjk0NDQyMDEwODYyNTgzNTE7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4yNzAzMDAxNTkwNjI2MTMwN3MiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iNDkiIGN5PSIyNy45ODI0IiByPSI5LjU4MzYzIiBmaWxsPSIjZmY3YzgxIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeSIgdmFsdWVzPSIxNTYuMDc5NTA5MzE4NTI2NTM7LTQxLjY3ODY2OTQ4NDYxMjg1IiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjAxNDQxMjc5Mzk0MDc4MDU0NHMiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjQ1OzA7MCIga2V5VGltZXM9IjA7MC44MjMwMjUzOTQzNDM1MDI1OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMDE0NDEyNzkzOTQwNzgwNTQ0cyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI1NiIgY3k9IjUzLjQ0MzciIHI9IjkuNzE3NzgiIGZpbGw9IiNmZjdjODEiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjE1NS4zMzI2MjQ4MjExMDI1NzstMzMuOTEwNzk0MTIyMzEyMzciIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuOTA1MDY4MTU3NjE2NjQzM3MiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjQxOzA7MCIga2V5VGltZXM9IjA7MC43MDU2NTUyNjM3NjA1MjMzOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuOTA1MDY4MTU3NjE2NjQzM3MiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iNTciIGN5PSI1MC42ODc3IiByPSI4Ljc1MTI3IiBmaWxsPSIjZmY3YzgxIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeSIgdmFsdWVzPSIxNDAuODc3MDQ4MzA0MzEzNTstMTEuOTcyNjE5Mzk0MDU2MDQiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuOTU2NzE5MDc0MDc2Mzg0N3MiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjMxOzA7MCIga2V5VGltZXM9IjA7MC44MjIxNDIzNTkyOTIyMDI7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC45NTY3MTkwNzQwNzYzODQ3cyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI1NyIgY3k9IjYyLjM2NTEiIHI9IjEuODE1NCIgZmlsbD0iI2ZmN2M4MSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTExLjY5MjEwMjM2NTgxNTc2Oy00LjQ3MDY5MTM0MTA2MzYzMyIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC43OTEzMDM5MzA5NzQ5MDQ0cyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iNTswOzAiIGtleVRpbWVzPSIwOzAuNjY2NzAzNjUxMDI4MDgzNTsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjc5MTMwMzkzMDk3NDkwNDRzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjUwIiBjeT0iMzEuNDM2NyIgcj0iMTEuNTI0NiIgZmlsbD0iI2ZmN2M4MSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTU2LjgzMDQ3NDY3ODgxNjE7LTQzLjk4ODg1MjAyMDAwNzE4IiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjk5MTA3NzQwMTgzNjg5MDZzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSI1MDswOzAiIGtleVRpbWVzPSIwOzAuODExNDQxODUxNTMzMDkzNzsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjk5MTA3NzQwMTgzNjg5MDZzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjQ5IiBjeT0iMzcuNTc5MSIgcj0iMCIgZmlsbD0iI2ZmN2M4MSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTQ2LjUzMjAxMjU3Mjg1MTU7LTI1LjUxNDkxOTMxMTU4MDcxIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjk5OTk0MDg1NzQxNjMyMzhzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSI0MzswOzAiIGtleVRpbWVzPSIwOzAuNjIwNzU0MTY0OTUxOTkzOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuOTk5OTQwODU3NDE2MzIzOHMiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iNDUiIGN5PSItMC41NTAzMjMiIHI9IjAiIGZpbGw9IiNmZjdjODEiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjEzMS4xMzc3NjQzMDk5ODIxMjstMTYuODg2ODY0NzU3MzE4MjMiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMjU2MzAzMDIzNjM0NTIzNHMiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjE5OzA7MCIga2V5VGltZXM9IjA7MC42MDA4NDU1NDEyMTQxMDE7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4yNTYzMDMwMjM2MzQ1MjM0cyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI1MCIgY3k9IjkyLjgzODciIHI9IjIxLjM1NDUiIGZpbGw9IiNmZjdjODEiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjE1Ny4yNjgwNTUzODYwNTM2NzstMzcuMzA2NTI3MDA0NjQ3NzEiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuNjk3Nzk2MTY3NTAxMTc5N3MiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjQxOzA7MCIga2V5VGltZXM9IjA7MC42OTEwNjQ5MDI1NzI2MDU7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC42OTc3OTYxNjc1MDExNzk3cyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI0MCIgY3k9IjYwLjQ5ODciIHI9IjE1Ljk2MzkiIGZpbGw9IiNmZjdjODEiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjE0NS4yODE0Njc4Mjk4MDA4NTstMTYuODMwODYyOTQzNzg4NzAyIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjg4OTY1NDE3MzQ0NTE1NTdzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIzNTswOzAiIGtleVRpbWVzPSIwOzAuOTYxNTcyNTA3MTY5MzIyOTsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjg4OTY1NDE3MzQ0NTE1NTdzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjUyIiBjeT0iNzYuNzEyOCIgcj0iMjIuNTI2NiIgZmlsbD0iI2ZmN2M4MSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTQ5Ljc0MzY1MjU1OTE1MTYzOy0yOS4wNDQ0MDQ4MTc0OTk2NjgiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuNzc1MTQzODQ4ODgyNjU2N3MiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjQ3OzA7MCIga2V5VGltZXM9IjA7MC43ODQ0NjI1NTE0ODkwNDk7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC43NzUxNDM4NDg4ODI2NTY3cyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI4OSIgY3k9IjI1LjQxMTMiIHI9IjAiIGZpbGw9IiNmZjdjODEiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjEyMi43MzQ0MDY2NjMxMzE5ODsxMi4yOTUzMjAyODk4MzgwMiIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4yNDc5MDQ2NDU4NTUyMjIzMnMiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjM7MDswIiBrZXlUaW1lcz0iMDswLjU3MjMzMDkzMDMwMTE0ODM7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4yNDc5MDQ2NDU4NTUyMjIzMnMiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iNjciIGN5PSI0NS4zODgxIiByPSIwIiBmaWxsPSIjZmY3YzgxIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeSIgdmFsdWVzPSIxMjQuOTUyOTE3MDU0NDM5MzM7LTYuNDIwMTA4NDQyODAzMzIyIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjk3MjMwNzMwMTM2ODQzNDlzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIxNTswOzAiIGtleVRpbWVzPSIwOzAuNTQ5Nzk1OTMxMjY3NDc0NTsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjk3MjMwNzMwMTM2ODQzNDlzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjQ5IiBjeT0iLTkuMTM5MjgiIHI9IjAiIGZpbGw9IiNmZjdjODEiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjE1Mi4zNzA0NjI1NjIyNTM4Oy0zNC43MzU2NTg4Nzk4MjI1NSIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4yMjk4NjUzMDA4Nzk3Mjc3OXMiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjUyOzA7MCIga2V5VGltZXM9IjA7MC42MTIzMDIyMDY5NjgyOTU2OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMjI5ODY1MzAwODc5NzI3NzlzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjUxIiBjeT0iLTE1LjA0NTQiIHI9IjAiIGZpbGw9IiNmZjdjODEiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjE1NS4yNjg3MTMyNTE0MTk5Oy0yOC42MTkxNzQ1NDMyODM1NDIiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMjkyODUxMjcyOTU2MDc5OTNzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIzOTswOzAiIGtleVRpbWVzPSIwOzAuNjM5NjU5NjY5OTYxMTg4MTsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjI5Mjg1MTI3Mjk1NjA3OTkzcyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI3MCIgY3k9IjYzLjkzMTEiIHI9IjcuNjIxODkiIGZpbGw9IiNmZjdjODEiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjEyNS45ODA0OTIxNTE4OTQ4ODstMTAuMjYzMTcwMjc4OTA0NjM3IiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjgyMjA5NjUyODk0ODgwNThzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIxNzswOzAiIGtleVRpbWVzPSIwOzAuODI1NTcyMjk3MzkwODEzMTsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjgyMjA5NjUyODk0ODgwNThzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjU4IiBjeT0iMzcuMjg3MyIgcj0iMS4yMTgxMyIgZmlsbD0iI2ZmN2M4MSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTQ5LjAzMDQwMDA5OTc1MzE3Oy0xNy41NTY1MDIzMjAyMjQiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMDM3NDQ2MjIyODMwOTcwNjU1cyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMzE7MDswIiBrZXlUaW1lcz0iMDswLjY5ODIxNTU4MjY5MjM2MjY7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4wMzc0NDYyMjI4MzA5NzA2NTVzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjIzIiBjeT0iNjcuMDY3NyIgcj0iNS43OTUxIiBmaWxsPSIjZmY3YzgxIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeSIgdmFsdWVzPSIxMjQuOTQxMjkwODU0MDc3NTI7LTYuODYwMjk3NTAxMTUyNjgzIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjgwNTc2Mjk1MDYwMzkyODhzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIxMzswOzAiIGtleVRpbWVzPSIwOzAuNzkyMjczMDgxMzczMDEzOTsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjgwNTc2Mjk1MDYwMzkyODhzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjYyIiBjeT0iLTE1LjUyMTkiIHI9IjAiIGZpbGw9IiNmZjdjODEiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjEzNy4wNTg5Mjk1NjgyODU3Oy0xNi44NTI1NzM0NTc3MzY4NTYiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMzU4MDIwNjY0NzY0ODYyN3MiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjM2OzA7MCIga2V5VGltZXM9IjA7MC42Mzg1ODU0ODU0MTM1OTU3OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMzU4MDIwNjY0NzY0ODYyN3MiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iNjkiIGN5PSI1MC43MjgzIiByPSIwIiBmaWxsPSIjZmY3YzgxIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeSIgdmFsdWVzPSIxMjQuNzE3NDE0MTgyNzA3OTg7OS44MDMxMTc1OTQ2MjQ2NDUiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMDEwNTI5ODg4MjUwNjg0MTI3cyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iOTswOzAiIGtleVRpbWVzPSIwOzAuNTQzMDY3MzYzMjU0OTE5NDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjAxMDUyOTg4ODI1MDY4NDEyN3MiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iNzMiIGN5PSIxMTQuMDAzIiByPSIxNy4wNDQzIiBmaWxsPSIjZmY3YzgxIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeSIgdmFsdWVzPSIxMTguNjEzMDE1OTkzNTAwMjc7LTUuMTM2NzU1MDk0MTcxOTM1IiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjQwMzkxNjE5NTc3ODA0NzA1cyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMTg7MDswIiBrZXlUaW1lcz0iMDswLjcwMTU3Njk3NDA0NDg0OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuNDAzOTE2MTk1Nzc4MDQ3MDVzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjUwIiBjeT0iMTE1LjY5MSIgcj0iMzMuOTc0NiIgZmlsbD0iI2ZmN2M4MSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTczLjMyOTE4NTk1OTkzMDMzOy0zNS4yNzY2NTUxNjcxMjY4OSIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC42NDI5Njc2ODgzOTYzMzIycyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iNTQ7MDswIiBrZXlUaW1lcz0iMDswLjc0NTA2ODE2ODMzOTY1MTc7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC42NDI5Njc2ODgzOTYzMzIycyI+PC9hbmltYXRlPgo8L2NpcmNsZT48L2c+PGcgZmlsdGVyPSJ1cmwoI2xkcy1sYXZhLWxhbXAtZmlsdGVyaWQtZTU1YTk1YzQxY2U0YSkiPjxjaXJjbGUgY3g9IjM2IiBjeT0iMzQuNjQ2NiIgcj0iMCIgZmlsbD0iI2ZhYzA5MCI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTI4LjQxMDY3OTI1OTEwMDE2OzYuMzY4MTY0NTY4MTYyNTk4IiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjEzNDk1NzMwNDgwMjUwN3MiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjEyOzA7MCIga2V5VGltZXM9IjA7MC41MzY5Mzc3NzE5NTAzMzgxOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMTM0OTU3MzA0ODAyNTA3cyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI0MyIgY3k9IjExOS4xMjkiIHI9IjIyLjA0OTEiIGZpbGw9IiNmYWMwOTAiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjE0OS4wNDgzODY1MjAxMjI4MjstMjEuMDQyOTg4MTU0NjcyNjUiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuNTQyNTY5MTI2NjM4MjI0MnMiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjMwOzA7MCIga2V5VGltZXM9IjA7MC42NjM3MDQ5OTUwMTc3NzM4OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuNTQyNTY5MTI2NjM4MjI0MnMiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iMjciIGN5PSI0Ni43MzEiIHI9IjUuNjk3ODYiIGZpbGw9IiNmYWMwOTAiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjEyMi42MDE5NDY3MjA3OTQ4NzstMTEuMzcxMTc4NTcxODYzMjg2IiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjkzMjk4MDk4MjkzNDAxOTRzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIxNTswOzAiIGtleVRpbWVzPSIwOzAuOTEzMjAwMTk5NTgzNzkzNTsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjkzMjk4MDk4MjkzNDAxOTRzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjYwIiBjeT0iMjguOTQ2NyIgcj0iMC4zOTQ5MDkiIGZpbGw9IiNmYWMwOTAiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjE0Ni4wNjgwNjE0NDg3MzQxNzstMjguNjA4MDExMjk4MjU3MjI1IiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjAzNzE3MjU1NTY4Mjg1MDgzcyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMzU7MDswIiBrZXlUaW1lcz0iMDswLjY3ODE1NzYyMjkwOTkzOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMDM3MTcyNTU1NjgyODUwODNzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjIxIiBjeT0iOTcuMDY3NiIgcj0iMi4yMzUxNiIgZmlsbD0iI2ZhYzA5MCI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTExLjkyNTY5OTUxMjM4OTQxOzQuMjY2MzM3OTc3MzE2MTU1IiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjUwNDY3NjQ4NjI5NTg0MDhzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIzOzA7MCIga2V5VGltZXM9IjA7MC41NDEzMjk0OTgwMzAzMjYzOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuNTA0Njc2NDg2Mjk1ODQwOHMiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iMzQiIGN5PSI2Ny42MzU0IiByPSIxLjI2NzY3IiBmaWxsPSIjZmFjMDkwIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeSIgdmFsdWVzPSIxMzMuNzM1MTM5OTU3MDM4MTc7LTcuNjgxNzIzMDk5MzM3NzQ3IiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjgzNDA3NzQ0NjU2MTIxODhzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIxODswOzAiIGtleVRpbWVzPSIwOzAuNTAyODIyNTY1NDg2NDk0OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuODM0MDc3NDQ2NTYxMjE4OHMiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iNTYiIGN5PSIxNDYuMzkxIiByPSIzMS43NzgyIiBmaWxsPSIjZmFjMDkwIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeSIgdmFsdWVzPSIxNTEuMjEyMzk0MzA1NTkyOy0yMS42ODgyOTExNzk1ODg3NiIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4zOTQ1NTE5Mzc3MTY4OTc4cyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMzM7MDswIiBrZXlUaW1lcz0iMDswLjc1MzE4OTkxNDUzMzExODU7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4zOTQ1NTE5Mzc3MTY4OTc4cyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSIyOSIgY3k9IjgzLjEwNSIgcj0iNi42NzgzNCIgZmlsbD0iI2ZhYzA5MCI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTMxLjA3NjYyNDE4MTUzMTc7MS42NTk2NzA0NTgwNTU3ODkiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuNzM3MzQxODUyNTI4NzM2N3MiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjEyOzA7MCIga2V5VGltZXM9IjA7MC44MzU4NDkyMjE2NDA1ODU3OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuNzM3MzQxODUyNTI4NzM2N3MiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iMjUiIGN5PSIxMi44NjUzIiByPSIwIiBmaWxsPSIjZmFjMDkwIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeSIgdmFsdWVzPSIxMzMuMDYzMjc0NDk3NDkyMDI7LTEwLjgxNDU3MjQ0MzgzODg1NCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4yMDIwODM2MjI5MDAwNDgyMnMiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjIxOzA7MCIga2V5VGltZXM9IjA7MC41MDM4ODI1MjEyMDI2OTE1OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMjAyMDgzNjIyOTAwMDQ4MjJzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjU5IiBjeT0iMjkuNzAwOSIgcj0iMi42MzA3MSIgZmlsbD0iI2ZhYzA5MCI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTI5LjY5MDEzMDQ2MzQ3NjstMC40MTQ1Mzg4NjA3ODg1MjE2NSIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4xMzUxOTYxMDIyODY4Nzg2MnMiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjIwOzA7MCIga2V5VGltZXM9IjA7MC44ODQ5MjkxMjMxMzQ2OTk0OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMTM1MTk2MTAyMjg2ODc4NjJzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjU3IiBjeT0iODAuMTcyOCIgcj0iNC4xODUwMyIgZmlsbD0iI2ZhYzA5MCI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTE3LjY0ODA0OTg5MTA5MDQxOzIuMzQ2NDYwMDc3OTc0Mzg4MyIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC42OTE2ODU5MDY5MzUyNzY4cyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iOTswOzAiIGtleVRpbWVzPSIwOzAuNjA3NTE2OTM5Njk4NDkzMjsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjY5MTY4NTkwNjkzNTI3NjhzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjU3IiBjeT0iNTkuMDg3OCIgcj0iMy43NTYxIiBmaWxsPSIjZmFjMDkwIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeSIgdmFsdWVzPSIxMjIuMDI5NzIzNTMxOTcwMDk7LTAuMzEwNzg1NzQ1MTE5NjczNiIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC44ODExNDg0MDg2Njk2MDA0cyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMTc7MDswIiBrZXlUaW1lcz0iMDswLjY2MDM5MzkzNTc4MjMxNjk7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC44ODExNDg0MDg2Njk2MDA0cyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI0NCIgY3k9IjU5LjEyNDkiIHI9IjUuNjY1OTUiIGZpbGw9IiNmYWMwOTAiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjEyMy4yMjQ2MTI0NDc4OTUzODstNi41ODk1MjYxMzQ5Mjk2ODYiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuODYwNDQ3MTg4NDk3MzEwOHMiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjE1OzA7MCIga2V5VGltZXM9IjA7MC43OTM1MTQ1MTc5NjI2MjQxOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuODYwNDQ3MTg4NDk3MzEwOHMiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iNTEiIGN5PSIyOS4zOTE1IiByPSIwIiBmaWxsPSIjZmFjMDkwIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeSIgdmFsdWVzPSIxMjEuMjA4MjI1NjIxNDQzNDg7MS4zNTIxNDQ1ODI0NDI4Nzg4IiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjEzMjcyNDYwNTk2MzU3MzM4cyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMTI7MDswIiBrZXlUaW1lcz0iMDswLjc1MTM4NzAxOTEzMzkyNzU7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4xMzI3MjQ2MDU5NjM1NzMzOHMiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iMzYiIGN5PSIyMS4yODM5IiByPSI5LjgwMjYyIiBmaWxsPSIjZmFjMDkwIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeSIgdmFsdWVzPSIxMzguOTg3OTYwNDI5MjU3NTM7LTMwLjc5OTMwNTQ1NTg0OTE5MyIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4wNTk5MTA5OTU0NTM2Njg3MzZzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIzMjswOzAiIGtleVRpbWVzPSIwOzAuOTk5Mzg5MDY0Mjc3MTk2OTsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjA1OTkxMDk5NTQ1MzY2ODczNnMiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iMzIiIGN5PSIyLjAyNzU3IiByPSIwIiBmaWxsPSIjZmFjMDkwIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeSIgdmFsdWVzPSIxMzkuNjkzNTU4MTk2ODQxODstMTMuODU0MDYxMTc5ODY5NDY4IiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjI2MzIzNTI5NDQ1ODc1NTI2cyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMjM7MDswIiBrZXlUaW1lcz0iMDswLjU3NjE3NjQ5ODg2OTM2NTM7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4yNjMyMzUyOTQ0NTg3NTUyNnMiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iMzgiIGN5PSI0NC45MTA4IiByPSI1LjY4NjkyIiBmaWxsPSIjZmFjMDkwIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeSIgdmFsdWVzPSIxMzMuNzk1MDA3NDk5OTEwMjstNS44MjU2OTQzMTc2MDk5ODMiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMDAzMjc4NjA5MTY2ODQ2NDEzNXMiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjIyOzA7MCIga2V5VGltZXM9IjA7MC44NTg1NDE2MzgyNjEzNzcyOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMDAzMjc4NjA5MTY2ODQ2NDEzNXMiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iNjMiIGN5PSIxMDMuMDM3IiByPSIxMi44MDMiIGZpbGw9IiNmYWMwOTAiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjEzNi44MTE4NDcxODE4MzM5NDstOC45NjIyOTc1MDY4OTgzODQiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuNTk4MzU5NDQ0ODM4Mzg0cyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMTg7MDswIiBrZXlUaW1lcz0iMDswLjgwMjQ4MjY3MzM5NTkxNTM7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC41OTgzNTk0NDQ4MzgzODRzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjM1IiBjeT0iMjIuNjAwMiIgcj0iMCIgZmlsbD0iI2ZhYzA5MCI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTQzLjIwNzEyNDk1NTc5NzQ0Oy0xMS44MDgxMDU1Mjk0MDIyOTciIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMTQ0Njk5NjYwNzkzMDIyNjZzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIyNjswOzAiIGtleVRpbWVzPSIwOzAuNTU1NDk2ODg4MjA5MTY2MTsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjE0NDY5OTY2MDc5MzAyMjY2cyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI2NCIgY3k9IjI5LjYzOTIiIHI9IjAiIGZpbGw9IiNmYWMwOTAiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjE1Mi4zMjA3NTU1MTY3ODI3MzstMzAuNDk2MDI2MzMxNTMzOTI2IiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjAzNzcyOTM5MTkyOTM0MjIxNXMiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjM0OzA7MCIga2V5VGltZXM9IjA7MC42MzU5NTkyNjg2ODY5MTc0OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMDM3NzI5MzkxOTI5MzQyMjE1cyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSIzMiIgY3k9IjEwNy44OTkiIHI9IjEyLjc5MyIgZmlsbD0iI2ZhYzA5MCI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTM1LjE3MzI0MTM5Nzc3NTI2Oy04LjMzMDk1Nzk5MzQwMTM5NSIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC41NTY3MjY3NDc1Njc3NjU1cyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMTc7MDswIiBrZXlUaW1lcz0iMDswLjc2ODAwNzA5Njk5NTcyNjY7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC41NTY3MjY3NDc1Njc3NjU1cyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI0MyIgY3k9IjEwNi4xIiByPSIyNy43MTgxIiBmaWxsPSIjZmFjMDkwIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeSIgdmFsdWVzPSIxNTAuOTU1OTYyMjMwNjQzMDI7LTM2LjMyNDY1NTMzNjM5ODk3IiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjYwNjE4MTI5NzcyODMwOTJzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSI0MDswOzAiIGtleVRpbWVzPSIwOzAuNzgwMDU5Mjc2MjQyOTU3MTsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjYwNjE4MTI5NzcyODMwOTJzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9Ijc3IiBjeT0iNjEuNDQ1IiByPSI1LjA3NDA2IiBmaWxsPSIjZmFjMDkwIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeSIgdmFsdWVzPSIxMTQuNjE1ODY2NzIxNjM2NzY7NC44NzE1NjE4NjYyMDA5MjQiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuODUxMTY0NzczODQ3NzU3N3MiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjEwOzA7MCIga2V5VGltZXM9IjA7MC45ODM1NjUwMzQzOTM3Mjc3OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuODUxMTY0NzczODQ3NzU3N3MiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iNDgiIGN5PSItMC4wMjQyNTM4IiByPSIwIiBmaWxsPSIjZmFjMDkwIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeSIgdmFsdWVzPSIxMjEuMjc0MDUzNTM2Mzg2NTk7LTkuMTc3MzM2ODc0OTUzMjMiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMjk2NTAyMDAyNzQyNTU0cyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMTA7MDswIiBrZXlUaW1lcz0iMDswLjcwODA0NjU1OTM0NzUzNjU7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4yOTY1MDIwMDI3NDI1NTRzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9Ijg2IiBjeT0iMTA0LjAxOCIgcj0iNy44MzY5OCIgZmlsbD0iI2ZhYzA5MCI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTE3LjM4OTE3MDcyNTA5MTc7LTAuMDI0MTQxMzYxOTU4ODc5MDYiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuNDgwNTQzNzc0MTk4Mzk2OXMiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9Ijk7MDswIiBrZXlUaW1lcz0iMDswLjg4MTIzNjc0OTE0MzE0OTQ7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC40ODA1NDM3NzQxOTgzOTY5cyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI0MiIgY3k9IjguMDA5ODciIHI9IjAiIGZpbGw9IiNmYWMwOTAiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjE0OC43MzMzMzQ1MTcyNzM4NzstMTMuNzg2ODcwNjYyMjE0ODEiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMjMyNTQ5NTU3Njg5ODMxNTRzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIzMTswOzAiIGtleVRpbWVzPSIwOzAuNjk4MzIwNzcwNTU3OTQ2MTsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjIzMjU0OTU1NzY4OTgzMTU0cyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI0MSIgY3k9IjU2Ljk5NjkiIHI9IjIuMDU4NSIgZmlsbD0iI2ZhYzA5MCI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTE5LjcxNDA3MTIyNTA3OTU4OzQuMjM3MTE4OTQ3NTkyNDUzIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjkwOTc4MDc3MjQ0NDYxMzJzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSI2OzA7MCIga2V5VGltZXM9IjA7MC44MjY3NjMxNjI0NTIzNzU7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC45MDk3ODA3NzI0NDQ2MTMycyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI2OSIgY3k9IjExNy4zNTIiIHI9IjguMzQ5MjIiIGZpbGw9IiNmYWMwOTAiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjEyNS4zMjY0MDE5MjQ5NDk0NzstMy43NDI2Mzg1OTIxMjQyNjY0IiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjQyODQ0OTYyOTQ4MDcyODNzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSI5OzA7MCIga2V5VGltZXM9IjA7MC44NTQ0MzE5NDIyODA0MzYyOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuNDI4NDQ5NjI5NDgwNzI4M3MiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iNDAiIGN5PSItNC4zMzgxMyIgcj0iMCIgZmlsbD0iI2ZhYzA5MCI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTM2LjU5ODY5ODE1Njg1MDI4Oy0xNC4xMDY5NTI5NjA1ODMzMzUiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMzAxODQ2MTg5Njc1MTE1OXMiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjMyOzA7MCIga2V5VGltZXM9IjA7MC45MTkzMDIyNjQ5ODcwOTg4OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMzAxODQ2MTg5Njc1MTE1OXMiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iMzgiIGN5PSI4Ny4yNDYzIiByPSIxOC4zMzU4IiBmaWxsPSIjZmFjMDkwIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeSIgdmFsdWVzPSIxNTAuNTc0NzY1OTE5NjkxMzstMjAuODIxNjYzMjk0NzI3NTU3IiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjczNjE1MjAzODUxNjE4NTNzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIzNDswOzAiIGtleVRpbWVzPSIwOzAuODAxOTg1NzI1NzA3ODI0ODsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjczNjE1MjAzODUxNjE4NTNzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjwvZz48ZyBmaWx0ZXI9InVybCgjbGRzLWxhdmEtbGFtcC1maWx0ZXJpZC1lNTVhOTVjNDFjZTRhKSI+PGNpcmNsZSBjeD0iOTMiIGN5PSI2MC40MzYyIiByPSIyLjI2NDIxIiBmaWxsPSIjZmZmZmNiIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeSIgdmFsdWVzPSIxMDguOTExNTI0MTMzNjM1NTE7MTAuNTk5MDU2ODUzOTE4MDciIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuODU5NzQxMDY2NTc0NTE5NXMiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjU7MDswIiBrZXlUaW1lcz0iMDswLjkwMTE1NDE3NDEyNTAwNDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjg1OTc0MTA2NjU3NDUxOTVzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjExIiBjeT0iNzUuODcyOSIgcj0iNS41NTcwMSIgZmlsbD0iI2ZmZmZjYiI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTA5LjEwMzAyMDI5NDc0MTI4Oy04LjA5Mjg5MTQxMTA3MzE3MiIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC42NTAyMDk3ODE1Njc5MzIycyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iOTswOzAiIGtleVRpbWVzPSIwOzAuNzQxMTg0MjY4NjAzODAwODsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjY1MDIwOTc4MTU2NzkzMjJzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjU2IiBjeT0iODMuMTMxMyIgcj0iMy4zMzc2OCIgZmlsbD0iI2ZmZmZjYiI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTE2LjY0MzkzODkzNjE3NDExOzExLjIyNTc1NjQ3NzU1OTM4MyIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC42ODQ1Njg1MTIxODE0NzcxcyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iNjswOzAiIGtleVRpbWVzPSIwOzAuNzE2NDQ2NjQ1NjQxOTUyMjsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjY4NDU2ODUxMjE4MTQ3NzFzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjUzIiBjeT0iMjUuMzcyOSIgcj0iMCIgZmlsbD0iI2ZmZmZjYiI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTE3Ljk3NzY1NzEyNTE0MDcxOy0xLjMyMDE3Njk1Nzc3ODY3OTUiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMTQyOTE0Nzg0MjYwMTQwODFzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSI2OzA7MCIga2V5VGltZXM9IjA7MC43NDI2OTQwMjk5MTEyMTYxOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMTQyOTE0Nzg0MjYwMTQwODFzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjM5IiBjeT0iLTEuMTMxNDYiIHI9IjAiIGZpbGw9IiNmZmZmY2IiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjEyNy44OTg1MDcwNDg2ODc1ODstMy4xODc4OTczMzIzMDc1NDU1IiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjM1MDk3ODk3NjQ2MTQ2MTVzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIxMDswOzAiIGtleVRpbWVzPSIwOzAuODY3MzU2ODI0MDA1NzczMTsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjM1MDk3ODk3NjQ2MTQ2MTVzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjQzIiBjeT0iMTE0LjIyMiIgcj0iOC4zMTE2IiBmaWxsPSIjZmZmZmNiIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeSIgdmFsdWVzPSIxMTkuMjkwNjQyNTU5MDc2MjU7Ni44NTQ1NzYzOTQ5MzQ3NzEiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuNDExNzQ4NjQ0NDI3MTc2M3MiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9Ijk7MDswIiBrZXlUaW1lcz0iMDswLjU4OTM5NDE4ODM4ODM4NDQ7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC40MTE3NDg2NDQ0MjcxNzYzcyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI4NyIgY3k9Ijg2LjIxNjkiIHI9IjQuNzk1NTkiIGZpbGw9IiNmZmZmY2IiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjEyNy43NTU0NjY3MDk5Njg1NjstMi4wMjUwOTkwODMyMzU3MjY3IiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjY4NjczNDMwNDc2NzM5N3MiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjEyOzA7MCIga2V5VGltZXM9IjA7MC41MzMxMTk3MTY5Mzg5OTE3OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuNjg2NzM0MzA0NzY3Mzk3cyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI4MyIgY3k9IjE4LjU0NjMiIHI9IjAiIGZpbGw9IiNmZmZmY2IiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjEzMC42MDAxMzM2NTIxODUyNDstMC4wNzg1NTc0MzgxMzg5NzIyIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjIyNDE0MjM5Njg3ODIxMDM2cyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMTI7MDswIiBrZXlUaW1lcz0iMDswLjU1NTAzMDE0MDUyODkxOTM7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4yMjQxNDIzOTY4NzgyMTAzNnMiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iMjgiIGN5PSIxNC42NDY0IiByPSIzLjI5OTM3IiBmaWxsPSIjZmZmZmNiIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeSIgdmFsdWVzPSIxMjMuMzQwNDkxNzEzMjk2NjstMTUuMTQzNTE1NzM3NDkxMzYiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMTUxNTUxOTk5MTA2OTUyMDVzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIxNzswOzAiIGtleVRpbWVzPSIwOzAuOTczOTAwNTA1ODA2NjEzNjsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjE1MTU1MTk5OTEwNjk1MjA1cyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI1MSIgY3k9IjE2LjMxOTgiIHI9IjAiIGZpbGw9IiNmZmZmY2IiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjExOC45MzI0MDcwMjMwMTA1ODsxMi4yNjg4ODk2ODcxMTU1NTciIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMzI4Njg4MzgzMTE4NTA0MXMiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjY7MDswIiBrZXlUaW1lcz0iMDswLjYxNjEwMDMwMTAxODkwMTc7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4zMjg2ODgzODMxMTg1MDQxcyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI1OSIgY3k9IjMxLjIxMTIiIHI9IjAiIGZpbGw9IiNmZmZmY2IiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjEyNS42NDM3MTk3MDc4MzAwNDsyLjM3NjE0Mjg2ODk5MzUxODciIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMTMyNzQ0MjI3MjM3OTQ2ODhzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIxMzswOzAiIGtleVRpbWVzPSIwOzAuNjMwNjY3NjUwODI5NDExMjsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjEzMjc0NDIyNzIzNzk0Njg4cyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI1NiIgY3k9IjQ1LjcwNTQiIHI9IjAiIGZpbGw9IiNmZmZmY2IiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjEyNi40NTUzNjAzMjkzMTA5Oy0zLjg3NTg3ODA1NzYwNTU1OCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC45ODYyNDE5Mzg4NzI1OTQ3cyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMTg7MDswIiBrZXlUaW1lcz0iMDswLjU4MDkwMjAxNzQ3NjkwMjY7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC45ODYyNDE5Mzg4NzI1OTQ3cyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI3MCIgY3k9IjMyLjQ1MTMiIHI9IjAiIGZpbGw9IiNmZmZmY2IiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjEzNy4yMjE2NjgyMTIxOTk3NzstOS4yODE1MTU5MzU3MTYxIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjA4MTgwNzI2NzgxMzQ5NTEycyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMTg7MDswIiBrZXlUaW1lcz0iMDswLjY5MjkyNjUxNTQxNzA5OTk7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4wODE4MDcyNjc4MTM0OTUxMnMiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iNTAiIGN5PSI0NC45MzA5IiByPSIwIiBmaWxsPSIjZmZmZmNiIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeSIgdmFsdWVzPSIxMTEuODYyMzYxNDE5MzU5Njk7My44NDcyNzY4MDI5ODI3MyIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC45ODYzMTYxMjUyNzM0Mjk0cyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMTA7MDswIiBrZXlUaW1lcz0iMDswLjUwMDcxNjQwOTY5MTkyMzM7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC45ODYzMTYxMjUyNzM0Mjk0cyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSIxMyIgY3k9IjMyLjA2NjkiIHI9IjAiIGZpbGw9IiNmZmZmY2IiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjExOS4zMTQ2OTI1Njk2NDc5Mjs4LjMwNTA3Mzg5NTI5ODMwNyIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4xNTI2MTQ0MjcxNjg4MTM0NnMiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjY7MDswIiBrZXlUaW1lcz0iMDswLjc1OTkyMTM0MDE5NTE3Mzc7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4xNTI2MTQ0MjcxNjg4MTM0NnMiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iNzkiIGN5PSIxMDYuODM2IiByPSI0LjgzNDI5IiBmaWxsPSIjZmZmZmNiIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeSIgdmFsdWVzPSIxMDguNDUyOTI0NzIwODc3OTM7MTEuMDQ1ODM2MDMzNDAwNTI2IiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjM4MzI2NDQwMDAyNTYxNzhzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSI1OzA7MCIga2V5VGltZXM9IjA7MC41MDA3OTkzMDU0MjA4OTI2OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMzgzMjY0NDAwMDI1NjE3OHMiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iNzIiIGN5PSIxMS40MjI2IiByPSIwIiBmaWxsPSIjZmZmZmNiIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeSIgdmFsdWVzPSIxMTEuMTg3MjkxOTY1MTUwMzs3Ljc2NTU4MDc0NDIwODUwMyIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4zMzEzMDYwOTAyMjQyOTYxM3MiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjQ7MDswIiBrZXlUaW1lcz0iMDswLjkyNDU5MTIwNTY2NjI3ODsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjMzMTMwNjA5MDIyNDI5NjEzcyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI1MSIgY3k9IjI1LjA0MDciIHI9IjAiIGZpbGw9IiNmZmZmY2IiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjEyNS43MTkyMjIwNDk1NTg0NTstMC45MzgxOTQyNTA5NjY1MTQ0IiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjE2MTU1NTE5ODkzNTcwMzE0cyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMTY7MDswIiBrZXlUaW1lcz0iMDswLjU0MzQ1NjY1MzE5MzAwMzU7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4xNjE1NTUxOTg5MzU3MDMxNHMiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iNjAiIGN5PSIxMjMuNDQiIHI9IjE4LjgxMTUiIGZpbGw9IiNmZmZmY2IiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjEyNy42NzQ5NTU2Mjk4OTg3OTstOC4zOTMxNDI1MjU4MTM3MTIiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMzk3NzkzNzAxMDc4MzIxMjRzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIyMDswOzAiIGtleVRpbWVzPSIwOzAuNTIzODEzODAzMTM3ODkwMjsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjM5Nzc5MzcwMTA3ODMyMTI0cyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI5MiIgY3k9IjYwLjA4NjQiIHI9IjIuMTEwODMiIGZpbGw9IiNmZmZmY2IiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjEwNi43MzM3MTk4MDExNjA4Mjs2Ljk2ODk0NTE3OTgwMDU0MiIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC44MzQyNDAwNzIyNjQxNTc0cyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iNTswOzAiIGtleVRpbWVzPSIwOzAuODA5MTgxNjk3Nzc1NDk1NTsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjgzNDI0MDA3MjI2NDE1NzRzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjM2IiBjeT0iMjYuNDc3NSIgcj0iMCIgZmlsbD0iI2ZmZmZjYiI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTE5LjM5OTc2MTk2Mzc4NTIyOzAuNjMxMDAxOTkxNTk2OTAzNiIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4xNDkwNDY0MTUxMTg1OTU1cyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMTc7MDswIiBrZXlUaW1lcz0iMDswLjU0MTkzOTcwMjU5ODQwOTsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjE0OTA0NjQxNTExODU5NTVzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9Ijg0IiBjeT0iNjguNTgyOSIgcj0iMS44MTE4OCIgZmlsbD0iI2ZmZmZjYiI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTA4LjM0MDc4OTA3NTgzNTg3Oy0wLjkxMjg2MDYyMjQ3NDQ2MjQiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuNzMwNTcwOTExMTUzNDYxM3MiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjM7MDswIiBrZXlUaW1lcz0iMDswLjkxODg1NTQ4NzUwODI4NTk7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC43MzA1NzA5MTExNTM0NjEzcyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSIzMiIgY3k9IjQ1LjU0MDQiIHI9IjEuNDA5NjEiIGZpbGw9IiNmZmZmY2IiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjExNS4xOTg3MzU5MTQzNzk3ODstOC42NTk0ODQ1MjQyODEwOSIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC45MjkwNzA1NTU2NzI4MDQzcyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMTI7MDswIiBrZXlUaW1lcz0iMDswLjYzNzI2MTQ5NTYwMzI2NDQ7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC45MjkwNzA1NTU2NzI4MDQzcyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI2MyIgY3k9IjE4LjQ3MDUiIHI9IjAiIGZpbGw9IiNmZmZmY2IiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjEwNC42NTkzNjU4NDg5NzE0OTsxNS42NDExNjA3MDE0NzI3MjEiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMzM0ODgyOTU2NjgzNjI0MnMiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjM7MDswIiBrZXlUaW1lcz0iMDswLjU3NzIzNTQ5NDExNDkyMTY7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4zMzQ4ODI5NTY2ODM2MjQycyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI3MyIgY3k9IjMzLjMxNjMiIHI9IjMuNTM3OTIiIGZpbGw9IiNmZmZmY2IiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjExOS44NDQ5NTExMjgzODkyNDstNS43NjI1NzAxMTE3NDg3OTciIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMDU1NTQ3NTc1MDg1ODMzNjM0cyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMTk7MDswIiBrZXlUaW1lcz0iMDswLjg0NjUwNTY5MDM5MzE5MTM7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4wNTU1NDc1NzUwODU4MzM2MzRzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjYyIiBjeT0iMzkuMDM4NyIgcj0iMCIgZmlsbD0iI2ZmZmZjYiI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTE2LjY0NTYwODcxNDIzMjY4Oy0yLjkxMTM3MjU0ODg4NzAwOSIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4wMTU3ODcwOTY5MjA5NjQ4MDVzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIxMzswOzAiIGtleVRpbWVzPSIwOzAuNjM4NTM5NzM0ODg3MjQ3MjsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjAxNTc4NzA5NjkyMDk2NDgwNXMiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iNDEiIGN5PSIyOC4zMiIgcj0iMCIgZmlsbD0iI2ZmZmZjYiI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTIxLjYwOTc2MzI4MzIzMTk4OzEyLjg1NTk5NDE3NjI4MDcxIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjIyNDQ3NDI1NjUzNTU4MjE3cyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iNDswOzAiIGtleVRpbWVzPSIwOzAuODIwNjUzNjI4MTcyMjU5OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMjI0NDc0MjU2NTM1NTgyMTdzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjUwIiBjeT0iNjkuMzI0OCIgcj0iNS4yNTM3MSIgZmlsbD0iI2ZmZmZjYiI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIHZhbHVlcz0iMTE5LjU4NjE3NTQzNzUwMzU2Oy0zLjM5Mjk3ODMwODgwNDcyNSIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC43NzUzNjQ3NjU1MTc1OTA2cyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMTI7MDswIiBrZXlUaW1lcz0iMDswLjcyNjk3NDMzNjYxODY4Njg7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC43NzUzNjQ3NjU1MTc1OTA2cyI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI3OSIgY3k9IjIwLjQ5ODIiIHI9IjAiIGZpbGw9IiNmZmZmY2IiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN5IiB2YWx1ZXM9IjEyNi41MTc5ODIzNTc4MDg7LTAuMDQ3NjA5Mjc3Mzc2NTMzNzU0IiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjIwNDMzMzY3MzQxOTAwNjQzcyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMTE7MDswIiBrZXlUaW1lcz0iMDswLjgzMTMzMzA2MzMzNzk0OTE7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4yMDQzMzM2NzM0MTkwMDY0M3MiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iMTciIGN5PSIxMTQuNTU2IiByPSIxMy42MjUyIiBmaWxsPSIjZmZmZmNiIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeSIgdmFsdWVzPSIxMzIuODgzODE1NDQyODU3NDc7My41NzQ1Mzc2NTYzNDEwNDY3IiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ii0wLjUwODQwMzYwNDkzNjcxOHMiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjE2OzA7MCIga2V5VGltZXM9IjA7MC45NTQ5NTQyNzkwMjI4OTAxOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuNTA4NDAzNjA0OTM2NzE4cyI+PC9hbmltYXRlPgo8L2NpcmNsZT48L2c+PC9zdmc+', // 懒加载占位图片地址，支持base64或url
  IMG_URL_TYPE: process.env.NEXT_PUBLIC_IMG_TYPE || 'Notion', // 此配置已失效，请勿使用；AMAZON方案不再支持，仅支持Notion方案。 ['Notion','AMAZON'] 站点图片前缀 默认 Notion:(https://notion.so/images/xx) ， AMAZON(https://s3.us-west-2.amazonaws.com/xxx)
  IMG_SHADOW: process.env.NEXT_PUBLIC_IMG_SHADOW || false, // 文章图片是否自动添加阴影
  IMG_COMPRESS_WIDTH: process.env.NEXT_PUBLIC_IMG_COMPRESS_WIDTH || 800, // Notion图片压缩宽度

  // 开发相关
  NOTION_ACCESS_TOKEN: process.env.NOTION_ACCESS_TOKEN || '', // Useful if you prefer not to make your database public
  DEBUG: process.env.NEXT_PUBLIC_DEBUG || false, // 是否显示调试按钮
  ENABLE_CACHE: process.env.ENABLE_CACHE || process.env.npm_lifecycle_event === 'build' || process.env.npm_lifecycle_event === 'export', // 在打包过程中默认开启缓存，开发或运行时开启此功能意义不大。
  isProd: process.env.VERCEL_ENV === 'production', // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  BUNDLE_ANALYZER: process.env.ANALYZE === 'true' || false, // 是否展示编译依赖内容与大小
  VERSION: process.env.NEXT_PUBLIC_VERSION // 版本号
}

module.exports = BLOG
