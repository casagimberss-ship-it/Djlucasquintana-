# DJ LUCAS QUINTANA — OFFICIAL PRESS KIT NEON

## Contenido del rediseño
1. Inicio / portada del artista.
2. Biografía artística.
3. Especialidades y géneros musicales.
4. SET PROMO con reproductor HTML5.
5. Videos de presentaciones.
6. Galería fotográfica con lightbox.
7. Contrataciones y eventos.
8. Contacto directo por WhatsApp e Instagram.

## Recursos incluidos
- Logotipo original extraído del press kit.
- Fotografía promocional principal y retratos adicionales.
- 31 fotografías de eventos optimizadas en WebP.
- Diseño responsive para móvil, tablet y escritorio.

## Configurar antes de publicar
### Audio
Copiar el archivo MP3 autorizado del set promocional a `assets/set-promo.mp3`.
El reproductor está implementado, pero los ZIP recibidos no contienen audio.

### Videos
Editar `videos.json` y agregar los IDs de inserción de YouTube:
```json
{
  "videos": [
    {"id": "ID_DEL_VIDEO", "title": "Presentación en vivo"}
  ]
}
```
Los ZIP recibidos no contienen videos ni enlaces de video, por eso la sección muestra un estado de preparación hasta que se agreguen enlaces oficiales.

### Contacto
Se configuró el WhatsApp `+54 9 3754 413824` y el Instagram `@djlucasquintana`, según los datos visibles en el logotipo entregado. Confirmar que ambos siguen vigentes antes de publicar.

## Publicar en Netlify
1. Descomprimir `DJLQ_NEON_PRESSKIT_FINAL.zip`.
2. Arrastrar el contenido de esta carpeta a Netlify Drop o conectar el repositorio Git.
3. No necesita Node, npm ni compilación: abrirá directamente desde `index.html`.

## Privacidad
El formulario no almacena información. Prepara el mensaje y abre WhatsApp para que la persona lo envíe manualmente. El sitio no incorpora analítica ni cookies propias.


## Videos de presentaciones
Los dos videos se incluyen localmente en `assets/videos/` y se reproducen desde un único reproductor HTML5. La lista permite seleccionar cada presentación; al terminar el primer video, el segundo comienza automáticamente. No requiere Google Drive, YouTube ni conexión externa para reproducir los MP4.
