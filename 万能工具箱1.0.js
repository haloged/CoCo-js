const types = {
    isInvisibleWidget: true,
    type: "wngjx",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "万能工具箱",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);

    }

}
var document = this.document;
var window = this.window;
var navigator = this.navigator;
var history = this.history;
types['methods'].push({
    key: 'window',
    label: '获取窗口',
    params: [],
    valueType: ['string','number','boolean','array','color','object',],

})
Widget.prototype.window = function () {
      return (window);
}
types['methods'].push({
    key: 'documen',
    label: '获取文档',
    params: [],
    valueType: ['string','number','boolean','array','color','object',],

})
Widget.prototype.documen = function () {
      return (document);
}
types['methods'].push({
    key: 'navigator',
    label: '获取浏览器',
    params: [],
    valueType: ['string','number','boolean','array','color','object',],

})
Widget.prototype.navigator = function () {
      return (navigator);
}
types['methods'].push({
    key: 'history',
    label: '获取历史记录',
    params: [],
    valueType: ['string','number','boolean','array','color','object',],

})
Widget.prototype.history = function () {
      return (history);
}
types['methods'].push({
    key: 'hqpmkd',
    label: '获取屏幕宽度',
    params: [],
    valueType: ['string','number','boolean','array','color','object',],

})
Widget.prototype.hqpmkd = function () {
      return (screen.width);
}
types['methods'].push({
    key: 'hqpmgd',
    label: '获取屏幕高度',
    params: [],
    valueType: ['string','number','boolean','array','color','object',],

})
Widget.prototype.hqpmgd = function () {
      return (screen.height);
}
types['methods'].push({
    key: 'hqpmkygd',
    label: '获取屏幕可用高度',
    params: [],
    valueType: ['string','number','boolean','array','color','object',],

})
Widget.prototype.hqpmkygd = function () {
      return (screen.availHeight);
}
types['methods'].push({
    key: 'hqpmkykd',
    label: '获取屏幕可用宽度',
    params: [],
    valueType: ['string','number','boolean','array','color','object',],

})
Widget.prototype.hqpmkykd = function () {
      return (screen.availWidth);
}
types['methods'].push({
    key: 'hqpmss',
    label: '获取屏幕色深',
    params: [],
    valueType: ['string','number','boolean','array','color','object',],

})
Widget.prototype.hqpmss = function () {
      return (screen.colorDepth);
}
types['methods'].push({
    key: 'hqpmxssd',
    label: '获取屏幕像素深度',
    params: [],
    valueType: ['string','number','boolean','array','color','object',],

})
Widget.prototype.hqpmxssd = function () {
      return (screen.pixelDepth);
}
types['methods'].push({
    key: 'hqdqsfywl',
    label: '获取当前是否有网络(如果有返回True)',
    params: [],
    valueType: ['string','number','boolean','array','color','object',],

})
Widget.prototype.hqdqsfywl = function () {
      if (navigator.onLine) {
    return true;} else {
    return false;}

}
types['methods'].push({
    key: 'hqllqyy',
    label: '获取浏览器语言',
    params: [],
    valueType: ['string','number','boolean','array','color','object',],

})
Widget.prototype.hqllqyy = function () {
      return (navigator.language);
}
types['methods'].push({
    key: 'windowsormac',
    label: '获取操作系统',
    params: [],
    valueType: ['string','number','boolean','array','color','object',],

})
Widget.prototype.windowsormac = function () {
      return (navigator.platform);
}
types['methods'].push({
    key: 'URL',
    label: '获取当前界面URL',
    params: [],
    valueType: ['string','number','boolean','array','color','object',],

})
Widget.prototype.URL = function () {
      return (window.location.href);
}
types['methods'].push({
    key: 's',
    label: '获取当前时间戳',
    params: [
      {
          key: 'sjc',
          label: '获取当前',
          valueType: 'string',
          dropdown: [
    { label: '时间戳', value: '时间戳', },

    { label: '年份', value: '年份', },

    { label: '月份', value: '月份', },

    { label: '小时', value: '小时', },

    { label: '日', value: '日', },

    { label: '分钟', value: '分钟', },

    { label: '秒数', value: '秒数', },

    { label: '毫秒数', value: '毫秒数', },

    { label: '星期', value: '星期', },
  ],
      },

],
    valueType: ['string','number','boolean','array','color','object',],

})
Widget.prototype.s = function (sjc,) {
      if (sjc == '时间戳') {
    return (new Date().getTime());}
  if (sjc == '年份') {
    return (new Date().getFullYear());}
  if (sjc == '月份') {
    return (new Date().getMonth());}
  if (sjc == '日') {
    return (new Date().getDate());}
  if (sjc == '小时') {
    return (new Date().getHours());}
  if (sjc == '分钟') {
    return (new Date().getMinutes());}
  if (sjc == '秒数') {
    return (new Date().getSeconds());}
  if (sjc == '毫秒数') {
    return (new Date().getMilliseconds());}
  if (sjc == '星期') {
    return (new Date().getDay());}

}
exports.types = types;
exports.widget = Widget;
