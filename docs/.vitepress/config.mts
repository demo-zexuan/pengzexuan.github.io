// noinspection JSUnusedGlobalSymbols

import {defineConfig} from 'vitepress'
// @ts-ignore
import {defineTeekConfig} from 'vitepress-theme-teek/config'

const teekConfig = defineTeekConfig({
    teekTheme: true,
    teekHome: true,
    vpHome: true,
    anchorScroll: true,
    themeSize: "large",
    themeEnhance: {
        enabled: true, // 启用主题增强功能
        position: "top", // 位置，top 为导航栏右侧，bottom 为右下角
        // 布局切换配置
        layoutSwitch: {
            disabled: false, // 禁用布局切换
            defaultMode: "original", // 布局切换的默认模式
            disableHelp: false, // 禁用帮助提示
            disableAnimation: false, // 禁用布局切换动画
            defaultDocMaxWidth: 90, // 内容布局最大宽度的默认百分比，仅限 0-100
            disableDocMaxWidthHelp: false, // 禁用帮助提示
            defaultPageMaxWidth: 95, // 页面布局最大宽度的默认百分比，仅限 0-100
            disablePageMaxWidthHelp: false, // 禁用帮助提示
        },
        // 布局主题色配置
        themeColor: {
            disabled: false, // 禁用布局主题色切换
            defaultColorName: "vp-default", // 布局默认主题色
            defaultSpread: false, // 是否将主题色扩散到其他元素（根据主题色计算其他元素需要的颜色）
            disableHelp: false, // 禁用帮助提示
            disabledInMobile: false, // 是否在移动端禁用
        },
        // 聚光灯配置
        spotlight: {
            disabled: false, // 禁用聚光灯
            defaultStyle: "aside", //  聚光灯默认样式
            disableHelp: true, // 禁用帮助提示
            defaultValue: true, // 聚光灯默认开关状态
        },
    },
    viewTransition: {
        enabled: true, // 是否启用深浅色切换动画效果
        mode: "out-in", // 动画模式，out 始终从点击点往全屏扩散，out-in 第一次从点击点往全屏扩散，再次点击从全屏回到点击点
        duration: 300, // 动画持续时间，当 mode 为 out 时，默认为 300ms，mode 为 out-in 时，默认为 600ms
        easing: "ease-in", // 缓动函数
    },
    backTop: {
        enabled: true, // 是否启动回到顶部功能
        content: "icon", // 回到顶部按钮的显示内容，可选配置 progress | icon
        done: TkMessage => TkMessage.success("返回顶部成功"), // 回到顶部后的回调
    },
    toComment: {
        enabled: true, // 是否启动滚动到评论区功能
        done: TkMessage => TkMessage.success("已抵达评论区"), // 滚动到评论区后的回调
    },
    codeBlock: {
        enabled: true, // 是否启用新版代码块
        collapseHeight: 700, // 超出高度后自动折叠，设置 true 则默认折叠，false 则默认不折叠
        overlay: false, // 代码块底部是否显示展开/折叠遮罩层
        overlayHeight: 400, // 当出现遮罩层时，指定代码块显示高度，当 overlay 为 true 时生效
        langTextTransform: "none", // 语言文本显示样式，为 text-transform 的值:none, capitalize, lowercase, uppercase
        copiedDone: TkMessage => TkMessage.success("复制成功！"), // 复制代码完成后的回调
    },
    windowTransition: true,
    author: {
        name: "zexuan.peng", // 作者名称
        link: "https://github.com/Kele-Bingtang", // 点击作者名称后跳转的链接
    },
    bodyBgImg: {
        //imgSrc: ["/img/bg.png"], // body 背景图片链接。单张图片 string | 多张图片 string[], 多张图片时每隔 imgInterval 秒换一张
        imgOpacity: 1, // body 背景图透明度，选值 0.1 ~ 1.0
        imgInterval: 15000, //  body 当多张背景图时（imgSrc 为数组），设置切换时间，单位：毫秒
        imgShuffle: false, // body 背景图是否随机切换，为 false 时按顺序切换
        mask: false, // body 背景图遮罩
        maskBg: "rgba(0, 0, 0, 0.5)", // body 背景图遮罩颜色，如果为数字，则是 rgba(0, 0, 0, ${maskBg})，如果为字符串，则作为背景色。mask 为 true 时生效
    },
    banner: {
        enabled: true,
        imgSrc: ["/img/bg.png"],
        name: "",
        bgStyle: "partImg",
        imgInterval: 15000,
        imgShuffle: true,
        mask: true,
        textColor: "#ffffff",
        descFontSize: "3.2rem",
        descStyle: "types",
        switchTime: 4000,
        switchShuffle: false,
        typesInTime: 100,
        typesOutTime: 100,
        typesNextTime: 800,
        typesShuffle: false,
        description: [
            "故事由我书写，旅程由你见证，传奇由她聆听。",
            "想一千次，不如努力的去做一次。纵然华丽的跌倒，也胜过无谓的徘徊。"
        ]
    },

    wallpaper: {
        enabled: false, // 是否启用壁纸模式
        hideBanner: false, // 开启壁纸模式后，是否隐藏 Banner
        hideMask: false, // 开启壁纸模式后，是否隐藏 Banner 或 bodyBgImage 的遮罩层，则确保 banner.mask 和 bodyBgImage.mask 为 true 才生效
    },

    articleBanner: {
        enabled: true, // 是否启用单文章页 Banner
        showCategory: true, // 是否展示分类
        showTag: true, // 是否展示标签
        defaultCoverImg: "", // 默认封面图
        defaultCoverBgColor: "", // 默认封面背景色，优先级低于 defaultCoverImg
    },

    articleAnalyze: {
        showIcon: true, // 作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息的图标是否显示
        dateFormat: "yyyy-MM-dd hh:mm:ss", // 文章日期格式，首页和文章页解析日期时使用
        showInfo: true, // 是否展示作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息，分别作用于首页和文章页
        showAuthor: true, // 是否展示作者
        showCreateDate: true, // 是否展示创建日期
        showUpdateDate: true, // 是否展示更新日期，仅在文章页显示
        showCategory: true, // 是否展示分类
        showTag: true, // 是否展示标签
    },

    breadcrumb: {
        enabled: true, // 是否启用面包屑
        showCurrentName: false, // 面包屑最后一列是否显示当前文章的文件名
        separator: "/", // 面包屑分隔符
        homeLabel: "首页", // 鼠标悬停首页图标的提示文案
    },

    pageStyle: "card-nav",

    post: {
        postStyle: "list", // 文章列表风格
        excerptPosition: "top", // 文章摘要位置
        showMore: true, // 是否显示更多按钮
        moreLabel: "阅读全文 >", // 更多按钮文字
        emptyLabel: "暂无文章", // 文章列表为空时的标签
        coverImgMode: "default", // 文章封面图模式
        showCapture: true, // 是否在摘要位置显示文章部分文字，当为 true 且不使用 frontmatter.describe 和 <!-- more --> 时，会自动截取前 300 个字符作为摘要
        splitSeparator: true, // 文章信息（作者、创建时间、分类、标签等信息）是否添加 | 分隔符
        transition: true, // 是否开启过渡动画
        transitionName: "tk-slide-fade", // 自定义过渡动画名称
        listStyleTitleTagPosition: "right", // 列表模式下的标题标签位置（postStyle 为 list）
        cardStyleTitleTagPosition: "left", // 卡片模式下的标题标签位置（postStyle 为 card）
        defaultCoverImg: [], // 默认封面图地址，如果不设置封面图则使用默认封面图地址
    },

    homeCardSort: ["topArticle", "category", "tag", "docAnalysis"],

    friendLink: {
        enabled: false
    },

    social: [
        {
            icon: "mdi:github",
            name: "GitHub",
            link: "https://github.com/demo-zexuan",
        },
        {
            icon: "material-symbols:stacked-email-rounded",
            name: "Email",
            link: "mailto:pengzexuan2001@gmail.com",
        },
    ],

    footerInfo: {
        theme: {
            show: false
        },
        copyright: {
            show: false
        }
    }
});

export default defineConfig({
    extends: teekConfig,
    // base: "/pengzexuan.github.io/",
    title: "Zexuan's blog",
    description: "Zexuan's blog; 泽瑄的博客",
    themeConfig: {
        search: {
            provider: 'algolia',
            options: {
                appId: 'LRB2LKROT6',
                apiKey: '8f7b61546764945907e85cc07943735d',
                indexName: 'blog'
            }
        },
        nav: [
            {text: 'Home', link: '/'},
            {text: '分类', link: '/pages/categories.md'},
            {text: '标签', link: '/pages/tags.md'},
            {text: '日常', link: './pages/00.日常/0-index.md'}
        ],
    },

})
