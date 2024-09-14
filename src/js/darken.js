// https://github.com/ColinEspinas/darken, version 1.5.0

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.darken=t()}(this,function(){var e=function(e,t){var r=this;"function"==typeof e&&(t=e,e={}),e=Object.assign({container:null,default:"light",toggle:null,remember:"darken-mode",usePrefersColorScheme:!0,class:"darken",stylesheets:{},timestamps:{},variables:{}},e),this.dark=!1;var a=new Date;e.remember?localStorage.getItem(e.remember)?e.default=localStorage.getItem(e.remember):e.usePrefersColorScheme?e.default=this.__checkMatchMedia()||e.default:Object.keys(e.timestamps).length>0&&e.timestamps.dark&&e.timestamps.light&&(e.default=this.__checkTimestamps(e,a)):e.usePrefersColorScheme?(e.default=this.__checkMatchMedia()||e.default,window.matchMedia("(prefers-color-scheme: dark)").addListener(function(e){e.matches&&r.on()}),window.matchMedia("(prefers-color-scheme: light)").addListener(function(e){e.matches&&r.off()})):Object.keys(e.timestamps).length>0&&e.timestamps.dark&&e.timestamps.light&&(e.default=this.__checkTimestamps(e,a)),e.toggle&&document.querySelector(e.toggle).addEventListener("click",this.__handleClick.bind(this)),document.addEventListener("darken-dark",this.__handleDarkenEvent(e,t,"add"),!1),document.addEventListener("darken-light",this.__handleDarkenEvent(e,t,"remove"),!1),"light"===e.default?this.off():"dark"===e.default&&this.on()};return e.prototype.__handleDarkenEvent=function(e,t,r){var a=this;return function(){e.container?document.querySelector(e.container).classList[r](e.class):document.body.classList[r](e.class);for(var n=e.container?document.querySelector(e.container):document.documentElement,s=0,i=Object.entries(e.variables);s<i.length;s+=1){var o=i[s],d=o[0],c=o[1];c&&"object"==typeof c&&(Array.isArray(c)?n.style.setProperty(d,a.dark?c[1]:c[0]):n.style.setProperty(d,c[a.dark?"dark":"light"]))}a.__changeStylesheet(e.stylesheets.id,e.stylesheets[a.dark?"dark":"light"]),e.remember&&localStorage.setItem(e.remember,a.dark?"dark":"light"),"function"==typeof t&&t(a.dark)}},e.prototype.__handleClick=function(e){e.preventDefault(),this.toggle()},e.prototype.__checkMatchMedia=function(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":window.matchMedia("(prefers-color-scheme: light)").matches?"light":void 0},e.prototype.__normalizeTimestamps=function(e){for(var t=0,r=Object.entries(e);t<r.length;t+=1){var a=r[t],n=a[0],s=a[1],i=new Date,o=s.split(":");i.setHours(o[0],o[1],0,0),e[n]=i}},e.prototype.__changeStylesheet=function(e,t){var r=document.head.querySelector("#"+e||"#darken-stylesheet");r?t?r.href=t:document.head.removeChild(r):t&&((r=document.createElement("link")).id=e||"darken-stylesheet",r.rel="stylesheet",r.type="text/css",r.href=t,document.head.appendChild(r))},e.prototype.__checkTimestamps=function(e,t){return this.__normalizeTimestamps(e.timestamps),e.timestamps.dark<t&&t>e.timestamps.light||e.timestamps.dark>t&&t<e.timestamps.light?"dark":"light"},e.prototype.toggle=function(){this.dark=!this.dark,this.dark?document.dispatchEvent(new Event("darken-dark")):document.dispatchEvent(new Event("darken-light"))},e.prototype.on=function(){this.dark=!0,document.dispatchEvent(new Event("darken-dark"))},e.prototype.off=function(){this.dark=!1,document.dispatchEvent(new Event("darken-light"))},e});