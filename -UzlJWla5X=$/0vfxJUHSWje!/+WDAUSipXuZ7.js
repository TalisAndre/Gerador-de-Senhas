var _global="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:this;function bom(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e}function download(e,t,o){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){saveAs(n.response,t,o)},n.onerror=function(){console.error("could not download file")},n.send()}function corsEnabled(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return t.status>=200&&t.status<=299}function click(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var isMacOSWebView=_global.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),saveAs=_global.saveAs||("object"!=typeof window||window!==_global?function(){}:"download"in HTMLAnchorElement.prototype&&!isMacOSWebView?function(e,t,o){var n=_global.URL||_global.webkitURL,a=document.createElement("a");t=t||e.name||"download",a.download=t,a.rel="noopener","string"==typeof e?(a.href=e,a.origin!==location.origin?corsEnabled(a.href)?download(e,t,o):click(a,a.target="_blank"):click(a)):(a.href=n.createObjectURL(e),setTimeout(function(){n.revokeObjectURL(a.href)},4e4),setTimeout(function(){click(a)},0))}:"msSaveOrOpenBlob"in navigator?function(e,t,o){if(t=t||e.name||"download","string"==typeof e)if(corsEnabled(e))download(e,t,o);else{var n=document.createElement("a");n.href=e,n.target="_blank",setTimeout(function(){click(n)})}else navigator.msSaveOrOpenBlob(bom(e,o),t)}:function(e,t,o,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof e)return download(e,t,o);var a="application/octet-stream"===e.type,l=/constructor/i.test(_global.HTMLElement)||_global.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||a&&l||isMacOSWebView)&&"undefined"!=typeof FileReader){var r=new FileReader;r.onloadend=function(){var e=r.result;e=i?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=e:location=e,n=null},r.readAsDataURL(e)}else{var s=_global.URL||_global.webkitURL,c=s.createObjectURL(e);n?n.location=c:location.href=c,n=null,setTimeout(function(){s.revokeObjectURL(c)},4e4)}});_global.saveAs=saveAs.saveAs=saveAs,"undefined"!=typeof module&&(module.exports=saveAs);