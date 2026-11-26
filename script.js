const $ = s => document.querySelector(s);
const menu = $('.menu-toggle'), nav = $('.nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
$('#year').textContent=new Date().getFullYear();

// Galería en formato diapositivas: una sola fotografía visible.
const galleryItems = [{"src": "assets/gallery/primary_3AAndroid_2Fmedia_2Fcom.whatsapp.w4b_2FWhatsApp_20Business_2FMedia_2F.Statuses_2Fb6f18cd110b046d18f81dcc3155cabb5.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/primary_3AAndroid_2Fmedia_2Fcom.whatsapp.w4b_2FWhatsApp_20Business_2FMedia_2F.Statuses_2Ff2daaeac619849cda9776a745b537b16.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/20250926_214612.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/20250926_214607.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/IMG_20250727_025835225.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/IMG_20250727_025831225.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/IMG-20261107-WA0082.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/IMG-20261107-WA0086.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/IMG-20261107-WA0079.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/IMG-20260921-WA0556.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/IMG-20260921-WA0527.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/IMG-20260920-WA0131.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/IMG-20251228-WA0026.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/IMG-20251228-WA0028.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/IMG-20250730-WA0113.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/IMG-20250727-WA0031.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/IMG-20250727-WA0024.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/IMG-20250727-WA0022.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/IMG-20250727-WA0020.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/IMG-20250727-WA0019.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/IMG-20250727-WA0016.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/IMG-20250712-WA0061.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/IMG-20250103-WA0256.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/IMG-20250103-WA0255.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/IMG-20250102-WA0588.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/IMG-20250101-WA0020.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/IMG-20241223-WA0098.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/IMG-20240805-WA0071.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/IMG-20240805-WA0074.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/IMG-20240805-WA0076.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}, {"src": "assets/gallery/IMG-20240805-WA0088.webp", "alt": "DJ Lucas Quintana — fotografía de evento"}];
const slideImage = $('#gallery-slide-image');
const slideNumber = $('#gallery-slide-number');
const slideDots = $('#gallery-dots');
const prevSlide = $('#gallery-prev');
const nextSlide = $('#gallery-next');
const autoSlideButton = $('#gallery-autoplay');
let slideIndex = 0;
let slideTimer = null;
let slidePaused = false;

galleryItems.forEach((item, index) => {
  const dot = document.createElement('button');
  dot.type = 'button';
  dot.className = 'slide-dot';
  dot.setAttribute('aria-label', `Ver fotografía ${index + 1}`);
  dot.addEventListener('click', () => showSlide(index, true));
  slideDots.append(dot);
});

function showSlide(index, restartTimer = false) {
  slideIndex = (index + galleryItems.length) % galleryItems.length;
  const item = galleryItems[slideIndex];
  slideImage.classList.add('changing');
  window.setTimeout(() => {
    slideImage.src = item.src;
    slideImage.alt = item.alt;
    slideImage.classList.remove('changing');
  }, 140);
  slideNumber.textContent = `${String(slideIndex + 1).padStart(2, '0')} / ${String(galleryItems.length).padStart(2, '0')}`;
  [...slideDots.children].forEach((dot, i) => {
    dot.classList.toggle('active', i === slideIndex);
    dot.setAttribute('aria-current', i === slideIndex ? 'true' : 'false');
  });
  if (restartTimer && !slidePaused) startSlideTimer();
}
function startSlideTimer() {
  window.clearInterval(slideTimer);
  slideTimer = window.setInterval(() => showSlide(slideIndex + 1), 5000);
}
prevSlide.addEventListener('click', () => showSlide(slideIndex - 1, true));
nextSlide.addEventListener('click', () => showSlide(slideIndex + 1, true));
autoSlideButton.addEventListener('click', () => {
  slidePaused = !slidePaused;
  autoSlideButton.textContent = slidePaused ? '▶' : 'Ⅱ';
  autoSlideButton.setAttribute('aria-label', slidePaused ? 'Reanudar presentación' : 'Pausar presentación');
  if (slidePaused) window.clearInterval(slideTimer);
  else startSlideTimer();
});
const galleryStage = $('.slide-stage');
let touchStartX = 0;
galleryStage.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, {passive:true});
galleryStage.addEventListener('touchend', e => {
  const delta = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(delta) > 45) showSlide(slideIndex + (delta < 0 ? 1 : -1), true);
}, {passive:true});
showSlide(0);
startSlideTimer();

// // Reproductor: agregar el MP3 autorizado como assets/set-promo.mp3.
const audio=$('#promo-audio');audio.src='assets/set-promo.mp3';
const play=$('#play-btn'),progress=$('#progress'),wave=$('#waveform'),current=$('#current-time'),duration=$('#duration'),note=$('#audio-note');
const fmt=n=>Number.isFinite(n)?`${String(Math.floor(n/60)).padStart(2,'0')}:${String(Math.floor(n%60)).padStart(2,'0')}`:'--:--';
audio.addEventListener('loadedmetadata',()=>{duration.textContent=fmt(audio.duration);note.textContent='SET PROMO · ADELANTO VERANO';});
audio.addEventListener('timeupdate',()=>{current.textContent=fmt(audio.currentTime);progress.style.width=`${audio.duration?audio.currentTime/audio.duration*100:0}%`;});
audio.addEventListener('play',()=>play.textContent='Ⅱ');audio.addEventListener('pause',()=>play.textContent='▶');
audio.addEventListener('error',()=>{note.textContent='SET PROMO';});
play.addEventListener('click',async()=>{if(audio.paused){try{await audio.play();}catch(e){note.textContent='No se pudo reproducir. Comprobá que exista assets/set-promo.mp3.';}}else audio.pause();});
function seek(x){const r=wave.getBoundingClientRect();if(Number.isFinite(audio.duration))audio.currentTime=Math.max(0,Math.min(1,(x-r.left)/r.width))*audio.duration;}
wave.addEventListener('click',e=>seek(e.clientX));wave.addEventListener('keydown',e=>{if(e.key==='ArrowRight'&&Number.isFinite(audio.duration))audio.currentTime=Math.min(audio.duration,audio.currentTime+5);if(e.key==='ArrowLeft')audio.currentTime=Math.max(0,audio.currentTime-5);});

// Un único reproductor local para las dos presentaciones.
const showPlayer = $('#showreel-player');
const showSources = [
  { src: 'assets/videos/presentacion-01.mp4', title: 'PRESENTACIÓN EN VIVO 01' },
  { src: 'assets/videos/presentacion-02.mp4', title: 'PRESENTACIÓN EN VIVO 02' }
];
const showTitle = $('#video-current-title');
const showCounter = $('#video-counter');
const showChoices = [...document.querySelectorAll('.showreel-choice')];
let showIndex = 0;
function loadShowVideo(index, autoplay = false) {
  showIndex = Math.max(0, Math.min(showSources.length - 1, index));
  const item = showSources[showIndex];
  showPlayer.src = item.src;
  showPlayer.load();
  showTitle.textContent = item.title;
  showCounter.textContent = `${String(showIndex + 1).padStart(2, '0')} / ${String(showSources.length).padStart(2, '0')}`;
  showChoices.forEach((choice, i) => {
    choice.classList.toggle('active', i === showIndex);
    choice.setAttribute('aria-pressed', i === showIndex ? 'true' : 'false');
  });
  if (autoplay) showPlayer.play().catch(() => {});
}
showChoices.forEach(choice => choice.addEventListener('click', () => loadShowVideo(Number(choice.dataset.videoIndex), true)));
showPlayer.addEventListener('ended', () => {
  if (showIndex < showSources.length - 1) loadShowVideo(showIndex + 1, true);
});
loadShowVideo(0);

// Formulario: prepara mensaje y abre WhatsApp. No almacena datos.
$('#booking-form').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);const msg=['Hola DJ Lucas Quintana, quiero consultar por una contratación.',`Nombre: ${d.get('nombre')}`,`Evento: ${d.get('evento')}`,`Fecha: ${d.get('fecha')||'A coordinar'}`,`Localidad: ${d.get('localidad')||'A confirmar'}`,`Mensaje: ${d.get('mensaje')||'Quisiera recibir información.'}`].join('\n');window.open(`https://wa.me/5493754413824?text=${encodeURIComponent(msg)}`,'_blank','noopener');});
