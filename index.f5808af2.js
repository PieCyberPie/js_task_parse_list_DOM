var t=document.getElementsByTagName("li"),a=[];!function(){var e=!0,r=!1,i=void 0;try{for(var n,o=t[Symbol.iterator]();!(e=(n=o.next()).done);e=!0){var l=n.value;a.push({name:l.innerText,position:l.getAttribute("data-position"),salary:+l.getAttribute("data-salary").slice(1).split(",").join(""),age:l.getAttribute("data-age")})}}catch(t){r=!0,i=t}finally{try{e||null==o.return||o.return()}finally{if(r)throw i}}a.sort(function(t,a){return a.salary-t.salary})}(),function(){for(var e=0;e<t.length;e++)t[e].innerText=a[e].name,t[e].setAttribute("data-position",a[e].position),t[e].setAttribute("data-salary",a[e].salary),t[e].setAttribute("data-age",a[e].age)}();
//# sourceMappingURL=index.f5808af2.js.map
