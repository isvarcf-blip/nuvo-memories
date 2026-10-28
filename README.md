# Nuvó Memories · Sitio web

Catálogo web para Nuvó Memories. Hecho en HTML/CSS/JS puro, sin frameworks, para que sea gratis en GitHub Pages y fácil de actualizar.

---

## 🚀 Subir el sitio por primera vez

1. Crea una cuenta en [github.com](https://github.com) (gratis).
2. Click en el `+` arriba a la derecha → **New repository**.
3. Nombre: `nuvo-memories` (o el que quieras). Marca **Public**. Marca "Add a README file". Click **Create repository**.
4. En el repositorio, click **"Add file" → "Upload files"**. Arrastra TODOS los archivos de esta carpeta (`index.html`, carpetas `css/`, `js/`, `img/`). Scroll abajo y click **Commit changes**.
5. En el repositorio click la pestaña **Settings** → menú izquierdo **Pages** → en "Source" elige **Deploy from a branch**, rama **main**, carpeta **/ (root)**. Click **Save**.
6. Espera 1–2 minutos. Tu sitio estará en `https://TU-USUARIO.github.io/nuvo-memories/`.

---

## ✏️ Editar el contenido

Solo tocas **dos archivos**:

### 📞 `js/config.js` · Datos de contacto

Cambia tu número de WhatsApp, Instagram, email y ciudad.

```js
const CONFIG = {
  whatsapp: "593990000000",   // ← cambia este número
  mensajeWhatsapp: "...",
  instagram: "nuvo.memories",
  email: "hola@nuvomemories.com",
  ciudad: "Quito, Ecuador"
};
```

### 📝 `js/data.js` · Galerías, proceso, FAQs

Aquí editas:
- Nombres y descripciones de cada tipo de evento
- Pasos del proceso de pedido
- Opciones de personalización
- Preguntas frecuentes

---

## 📷 Agregar fotos nuevas

1. Toma tus fotos. Súbelas a la carpeta correspondiente:
   - Boda → `img/matrimonio/`
   - Bautizo → `img/bautizo/`
   - Baby shower → `img/baby-shower/`
   - Cumpleaños → `img/cumpleanos/`
   - Grado → `img/grado/`
   - Corporativo → `img/corporativo/`

2. Abre `js/data.js` y agrega el nombre del archivo a la lista `fotos` del evento. Ejemplo:

```js
matrimonio: {
  titulo: "Matrimonios",
  emoji: "💍",
  descripcion: "...",
  fotos: [
    "boda-maria-y-juan.jpg",   // ← agrega una línea por foto
    "boda-ana-y-pedro.jpg",
  ]
}
```

3. Guarda, sube los cambios a GitHub y en 30 segundos aparecen online.

### Consejos para las fotos
- Formato: **JPG** (más liviano) o PNG.
- Tamaño ideal: entre **1200×1500 px** y **1600×2000 px**. Más grande que eso ralentiza la carga.
- Nombres sin tildes ni espacios: `boda-01.jpg`, no `boda nº1.jpg`.
- Para comprimir imágenes gratis: [tinypng.com](https://tinypng.com) (arrastras y descargas más livianas).

---

## 🎨 Marca aplicada

- **Colores:** Violeta Sofisticado `#7d7084`, Lavanda Suave `#aa989e`, Dorado Terracota `#c8945b`, Oro Suave `#ddba80`, Arena Elegante `#e6caa3`.
- **Tipografías:** Arvo (títulos) + Inter (cuerpo), ambas cargadas desde Google Fonts gratis.
- **Logos:** carpeta `img/logo/` incluye las variantes principal, gráfico y slogan en violeta, blanco y arena.

---

## 💡 ¿Y si quiero un dominio propio tipo `nuvomemories.com`?

1. Compra el dominio en [Namecheap](https://namecheap.com) o similar (~$12/año).
2. En Settings → Pages de tu repo, en "Custom domain" escribe `nuvomemories.com`.
3. En Namecheap configura los DNS apuntando a GitHub (hay un tutorial oficial, buscar "GitHub Pages custom domain").

El dominio es opcional. Tu URL de GitHub también funciona perfectamente y es gratis.
