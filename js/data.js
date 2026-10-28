// ========================================================
// NUVÓ MEMORIES: CONTENIDO DEL SITIO
// ========================================================
// AQUÍ EDITAS: galerías de eventos, pasos del proceso,
// opciones de personalización y preguntas frecuentes.
//
// PARA AGREGAR UNA FOTO O VIDEO:
//   1. Sube el archivo a la carpeta img/matrimonio/ (o la que
//      corresponda). Ejemplo: "boda-01.jpg" o "boda-video.mp4"
//   2. Agrega el nombre del archivo a la lista "fotos" de
//      ese evento, entre comillas y con coma. Ejemplo:
//        fotos: ["boda-01.jpg", "boda-video.mp4"]
//
// Fotos aceptadas: .jpg .jpeg .png .webp
// Videos aceptados: .mp4 .mov .webm
// (El sitio detecta automáticamente si es video)
// ========================================================

const EVENTOS = {
  matrimonio: {
    titulo: "Matrimonios",
    emoji: "💍",
    descripcion: "Recuerdos que celebran el amor. Café de especialidad empacado con la elegancia que tu día merece.",
    fotos: [
      "matrimonio-01.jpg",
      "matrimonio-02.jpg",
      "matrimonio-03.jpg",
      "matrimonio-04.jpg",
      "matrimonio-05.jpg",
      "matrimonio-06.jpg",
      "matrimonio-video-01.mp4",
      "matrimonio-video-02.mp4"
    ]
  },

  bautizo: {
    titulo: "Bautizos y Primera Comunión",
    emoji: "🕊️",
    descripcion: "Un detalle delicado y simbólico para acompañar los primeros momentos sagrados.",
    fotos: [
      "bautizo-01.jpg",
      "bautizo-02.jpg",
      "bautizo-03.jpg",
      "bautizo-04.jpg",
      "bautizo-05.jpg",
      "bautizo-06.jpg",
      "bautizo-07.jpg",
      "bautizo-video-01.mp4",
      "bautizo-video-02.mp4"
    ]
  },

  "baby-shower": {
    titulo: "Baby Shower",
    emoji: "👶",
    descripcion: "Dulces y pequeños, como el momento. Empaques tiernos para celebrar la nueva vida.",
    fotos: [
      "baby-shower-01.jpg",
      "baby-shower-video-01.mp4"
    ]
  },

  cumpleanos: {
    titulo: "Cumpleaños",
    emoji: "🎂",
    descripcion: "Celebra con un recuerdo útil y aromático que tus invitados agradecerán.",
    fotos: [
      "cumpleanos-01.jpg",
      "cumpleanos-02.jpg",
      "cumpleanos-03.jpg"
    ]
  },

  grado: {
    titulo: "Grados y Defensas de Tesis",
    emoji: "🎓",
    descripcion: "Para brindar por los logros. Un recuerdo tan memorable como el esfuerzo que celebra.",
    fotos: [
      "grado-01.jpg",
      "grado-02.jpg",
      "grado-03.jpg",
      "grado-04.jpg",
      "grado-video-01.mp4",
      "grado-video-02.mp4"
    ]
  },

  corporativo: {
    titulo: "Eventos Corporativos",
    emoji: "💼",
    descripcion: "Regalos corporativos con alma. Diseñados para equipos, clientes y aliados que esperan algo distinto.",
    fotos: [
      "corporativo-01.jpg",
      "corporativo-02.jpg",
      "corporativo-03.jpg",
      "corporativo-04.jpg",
      "corporativo-05.jpg",
      "corporativo-06.jpg",
      "corporativo-07.jpg",
      "corporativo-08.jpg",
      "corporativo-video-01.mp4",
      "corporativo-video-02.mp4",
      "corporativo-video-03.mp4",
      "corporativo-video-04.mp4"
    ]
  }
};

// ========================================================
// PROCESO: cómo pedir tu café personalizado
// Edita los pasos o cambia el número si tienes más/menos.
// ========================================================
const PROCESO = [
  {
    numero: "01",
    titulo: "Escríbenos",
    texto: "Cuéntanos sobre tu evento: fecha, número de invitados y qué tipo de celebración es."
  },
  {
    numero: "02",
    titulo: "Elegimos juntos",
    texto: "Te enviamos opciones de empaques y detalles personalizables según tu estilo. Trabajamos con café de especialidad Castillo Rosario de ISVAR Coffee Factory."
  },
  {
    numero: "03",
    titulo: "Diseño personalizado",
    texto: "Creamos las etiquetas con tus nombres, fecha, mensaje o la temática que elijas."
  },
  {
    numero: "04",
    titulo: "Confirmación y producción",
    texto: "Aprobamos el diseño final y comenzamos a preparar cada detalle con cuidado."
  },
  {
    numero: "05",
    titulo: "Entrega",
    texto: "Recibes tu pedido listo para sorprender a tus invitados en el día especial."
  }
];

// ========================================================
// PERSONALIZACIÓN: qué se le puede añadir al café
// ========================================================
const PERSONALIZACION = [
  {
    icono: "🍫",
    titulo: "Frascos de café con chocolate",
    texto: "Nuestro producto estrella: granos de café bañados en chocolate, en frascos con etiquetas y decoraciones a tu medida."
  },
  {
    icono: "🏷️",
    titulo: "Etiquetas personalizadas",
    texto: "Con nombres, fecha, iniciales, mensaje o temática del evento."
  },
  {
    icono: "📦",
    titulo: "Empaques elegantes",
    texto: "Bolsas de café elegantes y novedosas, algo que destacará en tu evento."
  },
  {
    icono: "☕",
    titulo: "Café de especialidad",
    texto: "Castillo Rosario de ISVAR Coffee Factory en bolsas de 100 gr. Perfil achocolatado y balanceado. Molido o en grano."
  },
  {
    icono: "🎀",
    titulo: "Cintas y lazos",
    texto: "Detalles finales en colores que combinen con tu paleta."
  },
  {
    icono: "🌿",
    titulo: "Toques naturales",
    texto: "Hojitas secas o flores prensadas para una presentación única."
  }
];

// ========================================================
// FAQs: preguntas frecuentes
// ========================================================
const FAQS = [
  {
    pregunta: "¿Cuál es el pedido mínimo?",
    respuesta: "El pedido mínimo es de 10 unidades. Para pedidos corporativos consulta precios especiales por volumen."
  },
  {
    pregunta: "¿De cuántos gramos son las bolsas de café?",
    respuesta: "Nuestras bolsas estándar son de 100 gramos. Si necesitas otros gramajes como 50, 200, 400 o 1000 gr, contáctanos por WhatsApp y lo cotizamos a tu medida."
  },
  {
    pregunta: "¿Con cuánto tiempo debo encargar mi pedido?",
    respuesta: "Recomendamos entre 2 y 3 semanas de anticipación para asegurar que el diseño y la producción se hagan sin apuro. Para pedidos urgentes, consúltanos."
  },
  {
    pregunta: "¿Puedo escoger el diseño de la etiqueta?",
    respuesta: "¡Claro! Trabajamos contigo el diseño o adaptamos uno de nuestras plantillas con tus colores, nombres y detalles."
  },
  {
    pregunta: "¿Hacen entregas a domicilio?",
    respuesta: "Sí, realizamos entregas a todo el país. Tenemos promociones especiales según la ciudad y la cantidad a fabricar."
  },
  {
    pregunta: "¿Qué tipo de café usan?",
    respuesta: "Trabajamos exclusivamente con café de especialidad ecuatoriano de ISVAR Coffee Factory, de origen trazable y tostado reciente. Conoce más sobre ISVAR <a href=\"https://isvarcoffee.com\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--terracota); font-weight: 500; border-bottom: 1px solid var(--terracota);\">aquí</a>."
  },
  {
    pregunta: "¿Cuánto debo dar de anticipo para empezar mi proyecto?",
    respuesta: "Para iniciar la producción solicitamos el 50% de anticipo. El saldo restante se cancela antes de la entrega."
  },
  {
    pregunta: "¿Qué métodos de pago aceptan?",
    respuesta: "Aceptamos transferencia bancaria y pago con tarjeta de crédito con un recargo del 5% + IVA."
  }
];
