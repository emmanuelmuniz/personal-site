/**
 * Se inyecta inline en <head> para fijar el tema antes del primer paint
 * (evita el flash) y marcar que hay JS para que los reveals arranquen ocultos.
 */
export const themeScript = `(function(){try{var d=document.documentElement;d.classList.add('js');var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}d.dataset.theme=t}catch(e){}})();`;
