import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "sheep44044的小站",
	subtitle: "博客",
	keywords: ["sheep44044", "博客", "技术", "生活"],
	lang: "zh_CN",
	translate: {
		enable: true,
		service: "client.edge",
		defaultLanguage: "zh-CN",
		autoDiscriminate: true,
		ignoreClasses: ["ignore"],
		ignoreTags: ["script", "style", "code", "pre"],
	},
	themeColor: {
		hue: 250,
		fixed: false,
	},
	defaultTheme: "system",
	wallpaper: {
		mode: "banner",
		src: {
			desktop: ["assets/images/preview.jpg"],
			mobile: ["assets/images/preview.jpg"],
		},
		position: "center",
		carousel: {
			enable: false,
			interval: 6,
		},
		banner: {
			homeText: {
				enable: true,
				title: "欢迎来到我的小站",
				subtitle: ["记录生活", "一起学习"],
				typewriter: {
					enable: true,
					speed: 110,
					deleteSpeed: 55,
					pauseTime: 2400,
				},
			},
			credit: {
				enable: false,
				text: "",
				url: "",
			},
			navbar: {
				transparentMode: "semifull",
			},
		},
		fullscreen: {
			zIndex: -1,
			opacity: 0.85,
			blur: 1.5,
			navbar: {
				transparentMode: "semi",
			},
		},
	},
	toc: {
		enable: true,
		depth: 2,
	},
	generateOgImages: false,
	favicon: [
		{
			src: "/favicon/favicon.png",
		},
	],
	showLastModified: true,
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Notes,
		LinkPreset.weekly,
		LinkPreset.About,
		LinkPreset.Archive,
		{
			name: "GitHub",
			url: "https://github.com/sheep44044",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/IMG_1302.PNG",
	name: "sheep44044",
	bio: "种一棵树最好的时间是十年前，其次是现在",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/sheep44044",
		},
		{
			name: "Mail",
			icon: "material-symbols:alternate-email",
			url: "mailto:3290120053@qq.com",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};
