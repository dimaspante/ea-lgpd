var ac_style='<style type="text/css">#accept-cookies{position:fixed;bottom:0;left:0;right:0;z-index:999999999999;background-color:'+_eaQuery[2][1]+";padding:4px 12px;font-family:'Trebuchet MS',Calibri,Arial,sans-serif !important;font-size:14px !important}#accept-cookies p{color:"+_eaQuery[3][1]+";text-align:left;margin:0}#accept-cookies p a{color:"+_eaQuery[3][1]+";text-decoration:underline}#accept-cookies button{border:0;background-color:#000;color:#fff;padding:4px 16px 7px;cursor:pointer;margin:5px auto;display:table}@media all and (min-width:768px){#accept-cookies p{float:left;line-height:2}#accept-cookies button{float:right;margin:0}}</style>",ac_button='<section id="accept-cookies"><p>Utilizamos cookies para melhorar a sua experiência de uso e navegação no site e recomendar conteúdos de seu interesse. Ao "ACEITAR", você concorda com nossa <a href="/politica-privacidade.html">Política de Privacidade.</a></p><button id="ac-nounderstood_button" onclick="document.getElementById(\'accept-cookies\').style.display=\'none\'" style="margin-left:5px">&times; Recusar!</button><button id="ac-understood_button" onclick="javascript:i_accept_cookies()">&check; Aceitar!</button></section>';function writeCookie(e,o,a){var s,r;r=a?((s=new Date).setTime(s.getTime()+24*a*60*60*1e3),"; expires="+s.toGMTString()):"",document.cookie=e+"="+o+r+"; path=/"}function readCookie(e){var o,a,s,r=e+"=";for(s=document.cookie.split(";"),o=0;o<s.length;o++){for(a=s[o];" "==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(r))return!0}return!1}function box_accept_cookies(){var e=document.createElement("div");e.innerHTML=ac_style+ac_button,document.body.appendChild(e)}function i_accept_cookies(){document.getElementById("accept-cookies").outerHTML="","undefined"!=typeof localStorage?window.localStorage.setItem("accepted-cookies-from",_eaQuery[0][1]):writeCookie("accepted-cookies-from",_eaQuery[0][1],30)}window.onload=function(){"undefined"!=typeof localStorage?null===localStorage.getItem("accepted-cookies-from")&&box_accept_cookies():readCookie("accepted-cookies-from")||box_accept_cookies()};
