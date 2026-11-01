/* Copia de seguridad del progreso (solo versión GitHub Pages).
   Guarda en un archivo .json todas las claves "ope-" de localStorage (Cuaderno + Test)
   y permite restaurarlas. Se muestra en «Hoy» (Cuaderno) y en «Mi progreso» (Test). */
(function(){
  var APP=(document.currentScript&&document.currentScript.dataset.app)||"estudio";
  var RUTA=APP==="test"?"progreso":"hoy", DEF=APP==="test"?"inicio":"hoy";
  var LAST="ope-ultima-copia", pendiente=null;
  var view=document.getElementById("view");
  if(!view)return;

  function ls(){try{return window.localStorage}catch(e){return null}}
  function route(){return (location.hash||"").slice(1)||DEF}
  function fecha(t){var d=new Date(t);return d.toLocaleDateString("es-ES",{day:"numeric",month:"long",year:"numeric"})+", "+d.toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"})}
  function hoyISO(){var d=new Date();function p(n){return (n<10?"0":"")+n}return d.getFullYear()+"-"+p(d.getMonth()+1)+"-"+p(d.getDate())}

  function infoTxt(){
    var s=ls(),t=s&&+s.getItem(LAST);
    if(!t)return "Todavía no has guardado ninguna copia.";
    var dias=Math.floor((Date.now()-t)/864e5);
    return "Última copia: "+fecha(t)+(dias>=1?" (hace "+dias+(dias===1?" día":" días")+")":"")+".";
  }
  function card(){
    var h=APP==="test"?"h3":"h2";
    return '<section class="card stack" id="copia" style="gap:10px">'+
      "<"+h+' style="margin:0">Copia de seguridad</'+h+">"+
      '<p class="muted small" style="margin:0">El progreso del Cuaderno y de los Test se guarda solo en este dispositivo. Guarda una copia de vez en cuando (por ejemplo, cada domingo) en Archivos o en iCloud Drive.</p>'+
      '<p class="small" style="margin:0" id="copiaInfo">'+infoTxt()+"</p>"+
      '<div class="row"><button type="button" class="btn pri" data-copia="exportar">Guardar copia</button>'+
      '<label class="btn ghost" for="copiaFile" style="cursor:pointer">Restaurar una copia</label></div>'+
      '<input type="file" id="copiaFile" accept=".json,application/json,text/plain" style="position:absolute;width:1px;height:1px;opacity:0;pointer-events:none">'+
      '<div id="copiaMsg" class="small" aria-live="polite"></div></section>';
  }
  function pinta(){
    if(route()!==RUTA||document.getElementById("copia"))return;
    var host=view.firstElementChild&&view.firstElementChild.classList.contains("stack")?view.firstElementChild:view;
    host.insertAdjacentHTML("beforeend",card());
  }
  new MutationObserver(pinta).observe(view,{childList:true});
  pinta();

  function msg(html){var m=document.getElementById("copiaMsg");if(m)m.innerHTML=html}
  function marca(){var s=ls();if(s)try{s.setItem(LAST,String(Date.now()))}catch(e){}var i=document.getElementById("copiaInfo");if(i)i.textContent=infoTxt()}

  function datos(){
    var s=ls(),d={};if(!s)return d;
    for(var i=0;i<s.length;i++){var k=s.key(i);if(k&&k.indexOf("ope-")===0&&k!==LAST)d[k]=s.getItem(k)}
    return d;
  }
  function exportar(){
    var json=JSON.stringify({app:"ope-enfermeria",v:1,fecha:Date.now(),datos:datos()});
    var nombre="ope-enfermeria-copia-"+hoyISO()+".json";
    var file=null;
    try{
      file=new File([json],nombre,{type:"application/json"});
      if(!(navigator.canShare&&navigator.canShare({files:[file]}))){
        file=new File([json],nombre,{type:"text/plain"});
        if(!(navigator.canShare&&navigator.canShare({files:[file]})))file=null;
      }
    }catch(e){file=null}
    if(file&&navigator.share){
      navigator.share({files:[file],title:"Copia OPE Enfermería"}).then(function(){
        marca();msg("Copia guardada.");
      },function(e){
        if(e&&e.name==="AbortError")return;
        descarga(json,nombre);
      });
      return;
    }
    descarga(json,nombre);
  }
  function descarga(json,nombre){
    try{
      var url=URL.createObjectURL(new Blob([json],{type:"application/json"}));
      var a=document.createElement("a");a.href=url;a.download=nombre;document.body.appendChild(a);a.click();
      setTimeout(function(){URL.revokeObjectURL(url);a.remove()},4000);
      marca();msg("Copia descargada: <b>"+nombre+"</b>.");
    }catch(e){msg("No se ha podido guardar la copia en este navegador.")}
  }

  function leer(file){
    var r=new FileReader();
    r.onload=function(){
      var o=null;try{o=JSON.parse(r.result)}catch(e){}
      if(!o||o.app!=="ope-enfermeria"||!o.datos||typeof o.datos!=="object"){pendiente=null;msg("Ese archivo no es una copia de OPE Enfermería.");return}
      var keys=Object.keys(o.datos).filter(function(k){return k.indexOf("ope-")===0&&typeof o.datos[k]==="string"});
      if(!keys.length){pendiente=null;msg("La copia está vacía.");return}
      pendiente={fecha:o.fecha,keys:keys,datos:o.datos};
      var que=[];if(keys.indexOf("ope-estudio-estado")>=0)que.push("Cuaderno");if(keys.indexOf("ope-test-estado")>=0)que.push("Test");
      msg('<div class="stack" style="gap:8px"><p style="margin:0">Copia del <b>'+(o.fecha?fecha(o.fecha):"fecha desconocida")+"</b>"+(que.length?" ("+que.join(" y ")+")":"")+". Sustituirá el progreso que hay ahora en este dispositivo.</p>"+
        '<div class="row"><button type="button" class="btn pri sm" data-copia="confirmar">Restaurar</button><button type="button" class="btn ghost sm" data-copia="cancelar">Cancelar</button></div></div>');
    };
    r.onerror=function(){msg("No se ha podido leer el archivo.")};
    r.readAsText(file);
  }
  function restaurar(){
    var s=ls();if(!s||!pendiente)return;
    try{
      var borrar=[];for(var i=0;i<s.length;i++){var k=s.key(i);if(k&&k.indexOf("ope-")===0&&k!==LAST)borrar.push(k)}
      borrar.forEach(function(k){s.removeItem(k)});
      pendiente.keys.forEach(function(k){s.setItem(k,pendiente.datos[k])});
      if(pendiente.fecha)s.setItem(LAST,String(pendiente.fecha));
    }catch(e){msg("No se ha podido restaurar: falta espacio o el navegador no lo permite.");return}
    location.reload();
  }

  document.addEventListener("click",function(ev){
    var b=ev.target.closest&&ev.target.closest("[data-copia]");if(!b)return;
    var a=b.dataset.copia;
    if(a==="exportar")exportar();
    else if(a==="confirmar")restaurar();
    else if(a==="cancelar"){pendiente=null;msg("")}
  });
  document.addEventListener("change",function(ev){
    var t=ev.target;
    if(t&&t.id==="copiaFile"&&t.files&&t.files[0]){leer(t.files[0]);t.value=""}
  });
})();
