/**
 * Mini Chefs con Paulina — Edicion Presencial
 * Landing page content — single source of truth for all copy.
 * Edit this file to change text, CTAs, and placeholder data.
 * Keep components free of hardcoded strings.
 */

export const siteConfig = {
  name: "Mini Chefs con Paulina",
  tagline: "La experiencia presencial de cocina para chicos y chicas",
  url: "https://paulinacocina.net/mini-chefs",
  description:
    "Mini Chefs con Paulina es la experiencia presencial de cocina para chicos y chicas. Aprenden, se divierten y cocinan de verdad en un evento pensado para toda la familia.",
  ogImage: "/og-image.jpg",
};

export const nav = {
  links: [
    { label: "Qué es", href: "#que-es" },
    { label: "Actividades", href: "#actividades" },
    { label: "Beneficios", href: "#beneficios" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Preguntas", href: "#faq" },
  ],
  cta: { label: "Inscribite", href: "#inscripcion" },
};

export const hero = {
  headline: "Tu hijo va a cocinar con Paulina",
  subheadline:
    "Una experiencia presencial unica donde los chicos aprenden a cocinar de verdad, se divierten y crean recuerdos.",
  cta: { label: "Reserva tu lugar", href: "#inscripcion" },
  secondaryCta: { label: "Quiero saber mas", href: "#que-es" },
  badge: "Vacantes limitadas",
  eventDetails: {
    date: "Sabado 13 de junio",
    location: "Azai Espacio Culinario, CABA",
    ages: "De 4 a 12 años",
    duration: "3 horas · 15 a 18hs",
  },
};

export const whatIs = {
  badge: "La experiencia",
  headline: "Qué es Mini Chefs con Paulina",
  description:
    "Mini Chefs es una jornada presencial de cocina para chicos y chicas. Un evento donde los mas chiquitos se ponen el delantal, se lavan las manos y entran al maravilloso mundo de la cocina junto a Paulina.",
  highlights: [
    "Actividad presencial en un espacio pensado y preparado para chicos",
    "Recetas reales que los chicos preparan de principio a fin",
    "Un adulto acompañante por cada niño/a participante",
    "Supervisado por Paulina y su equipo en todo momento",
  ],
  differentiator:
    "A diferencia del curso online, aca los chicos cocinan en vivo, tocan los ingredientes, prenden el horno y se llevan lo que prepararon a casa.",
};

export type Activity = {
  title: string;
  description: string;
  icon: "chef-hat" | "cookie" | "book-open" | "star" | "gift" | "users";
};

export const activities: Activity[] = [
  {
    title: "Recetas paso a paso",
    description:
      "Preparan dos recetas completas con ingredientes reales: una salada y una dulce. Todo guiado y explicado para sus edades.",
    icon: "chef-hat",
  },
  {
    title: "Técnicas básicas de cocina",
    description:
      "Aprenden a medir, mezclar, amasar y mas. Conceptos fundamentales que van a recordar siempre.",
    icon: "book-open",
  },
  {
    title: "Degustacion de lo cocinado",
    description:
      "Se sientan a comer lo que prepararon. La satisfacción de comer algo hecho por ellos mismos.",
    icon: "cookie",
  },
  {
    title: "Juegos y dinámicas",
    description:
      "Actividades lúdicas entre cocina y cocina para mantener la energía y la diversión.",
    icon: "star",
  },
  {
    title: "Regalos y sorpresas",
    description:
      "Cada participante se lleva su delantal de Mini Chef, un recetario impreso y sorpresas exclusivas.",
    icon: "gift",
  },
  {
    title: "Momento familiar",
    description:
      "Un espacio al final del evento para compartir con los adultos acompañantes y disfrutar juntos.",
    icon: "users",
  },
];

export const benefits = {
  badge: "Por qué Mini Chefs",
  headline: "Mucho mas que una clase de cocina",
  description:
    "Enseñar a los chicos a cocinar es fomentar su creatividad y autonomía. Es una forma de conectar con su alimentación y de aplicar habilidades de la vida real.",
  items: [
    {
      title: "Autonomia y confianza",
      description:
        "Los chicos que cocinan ganan independencia. Aprenden a prepararse su merienda solos y se sienten capaces.",
    },
    {
      title: "Ciencia en la cocina",
      description:
        "Qué hace el bicarbonato en una torta, por qué sube la masa, cómo se derrite el chocolate. Ciencia pura y divertida.",
    },
    {
      title: "Matemática aplicada",
      description:
        "Medir, dividir, multiplicar. Cada receta es un ejercicio de matematica practica sin que se den cuenta.",
    },
    {
      title: "Alimentacion consciente",
      description:
        "Los chicos que cocinan entienden lo que comen. Se animan a probar nuevos sabores y texturas.",
    },
    {
      title: "Recuerdos en familia",
      description:
        "Manchas de harina en la nariz, orgullo al ver el resultado final. Momentos que duran para siempre.",
    },
    {
      title: "Actividad sin pantallas",
      description:
        "Una experiencia 100% presencial con las manos en la masa. Nada de celulares ni tablets.",
    },
  ],
};

export const midPageCta = {
  headline: "Los cupos son limitados",
  description: "Reserva el lugar de tu Mini Chef antes de que se agoten.",
  cta: "Reserva tu lugar",
};

export const gifts = {
  badge: "Que se llevan",
  headline: "Cada Mini Chef se lleva a casa",
  note: "Todo incluido en la inscripcion — sin costos extra.",
  items: [
    {
      title: "Delantal de Mini Chef",
      description: "Un delantal exclusivo del evento para seguir cocinando en casa.",
    },
    {
      title: "Recetario impreso",
      description: "Las recetas del evento en un cuadernillo ilustrado para repetirlas.",
    },
    {
      title: "Diploma de Mini Chef",
      description: "Un certificado para enmarcar y recordar la experiencia.",
    },
    {
      title: "Sorpresas exclusivas",
      description: "Regalos sorpresa que se revelan durante el evento.",
    },
  ],
};

export const digitalProducts = {
  badge: "Lleva la experiencia a casa",
  headline: "Seguí cocinando después del evento",
  description:
    "Si tu hijo queda con ganas de mas, estos recursos de Paulina Cocina estan especialmente pensados para chicos y chicas.",
  featuredLabel: "Mejor precio",
  ctaLabel: "Ver en la tienda",
  items: [
    {
      title: "Curso de cocina para niños",
      type: "Curso online",
      description:
        "5 clases en video con recetas faciles, tecnicas y regalos. Para seguir aprendiendo desde casa, a su ritmo.",
      price: "ARS 23.400",
      originalPrice: "ARS 27.529",
      discount: "15%",
      href: "https://almacen.paulinacocina.net/producto/curso-para-ninos-y-ninas/",
    },
    {
      title: "Combo Curso + Ebook Cocinen Ustedes",
      type: "Curso + Ebook",
      description:
        "El curso completo mas el ebook con aun mas recetas, ilustraciones y conceptos. El combo mas completo.",
      price: "ARS 37.425",
      originalPrice: "ARS 44.029",
      discount: "15%",
      href: "https://almacen.paulinacocina.net/producto/curso-ebook-cocinen-ustedes/",
    },
    {
      title: "Libro Cocinen Ustedes",
      type: "Libro fisico",
      description:
        "192 paginas de recetas, tecnicas, fotos a todo color y un glosario culinario completo. Editorial Planeta.",
      price: "ARS 41.900",
      href: "https://almacen.paulinacocina.net/producto/libro-cocinen-ustedes/",
    },
  ],
};

export const aboutPaulina = {
  headline: "Sobre Paulina",
  description:
    "Paulina es socióloga de profesión, cocinera amateur y el humor atraviesa todo lo que hace. Es la referencia de quienes buscan recetas sencillas, para comer rico, práctico y casero día a día.",
  quote:
    "Los chicos que se acercan a la cocina aprenden a comer mejor, encuentran un espacio creativo y participan activamente de un area central de sus vidas.",
  stats: [
    { value: "15M+", label: "Seguidores en redes" },
    { value: "4M+", label: "Visitas mensuales" },
    { value: "6", label: "Libros publicados" },
    { value: "15+", label: "Años de trayectoria" },
  ],
};

export const testimonials = {
  badge: "Lo que dicen las familias",
  headline: "Familias que ya cocinaron con Paulina",
  items: [
    {
      quote:
        "Amamos hacer este curso. Lo hicimos junto con mis 2 hijos y disfrutamos mucho cada clase. Ahora ellos me miran cocinar y quieren participar. Lo mejor es que se animan a prepararse la merienda solos!",
      author: "Miriam",
      context: "Mamá de 2 hijos",
    },
    {
      quote:
        "Ahora queremos más! Lo compré para mi hija y lo hizo muy rápido, se ve que encontró su pasión. En la primera clase ya me pidió que le consiguiera una lista de ingredientes para cocinar con Paulina.",
      author: "Alejandra",
      context: "Mamá de una hija",
    },
    {
      quote:
        "Lo compré para mi hijo de 8 años, él siempre quería ayudarme en la cocina y le encantaba mirar tus videos en Youtube. Se puso muy contento con el curso.",
      author: "Belen",
      context: "Mamá de un hijo de 8 años",
    },
    {
      quote:
        "Este libro me fascinó! Es ideal para que tus hijos aprendan el abc de la cocina, desde la preparación de fideos hasta hacer unos panqueques espectaculares.",
      author: "Dani",
      context: "Lector/a del libro Cocinen Ustedes",
    },
    {
      quote:
        "Especial para los niños cocineros que no te pueden ver amasando unos ñoquis en paz sin querer meter mano en la masa. Mi hijo todos los días está esperando la hora de cocinar.",
      author: "Rexona",
      context: "Lector/a del libro Cocinen Ustedes",
    },
  ],
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "Para qué edades es el evento?",
    answer:
      "Mini Chefs está pensado para chicos y chicas de 4 a 12 años. Los más chiquitos (4-6) necesitan la compañía activa de un adulto. Los más grandes pueden participar con mayor autonomía, pero siempre con un adulto presente.",
  },
  {
    question: "Un adulto tiene que acompañar al chico/a?",
    answer:
      "Sí, es obligatorio que cada participante venga acompañado de un adulto responsable. El evento es una actividad familiar: el adulto supervisa, ayuda y disfruta junto al niño/a.",
  },
  {
    question: "Qué tiene que traer mi hijo/a?",
    answer:
      "Solo ganas de cocinar. Nosotros proveemos todos los ingredientes, utensilios, delantal y elementos necesarios. Recomendamos ropa comoda.",
  },
  {
    question: "Es seguro para los chicos?",
    answer:
      "Absolutamente. El evento está supervisado en todo momento por Paulina y su equipo. Los elementos cortantes y el uso del horno están controlados por adultos. La seguridad de los chicos es prioridad.",
  },
  {
    question: "Puedo ir con más de un hijo/a?",
    answer:
      "Sí, cada hijo/a necesita su propia inscripción. Tenés que registrar a cada uno por separado para garantizar su lugar y sus materiales.",
  },
  {
    question: "Cuánto dura el evento?",
    answer:
      "El evento dura aproximadamente 3 horas, con descansos incluidos. Hay un espacio de bienvenida, dos bloques de cocina, juegos entre medio y un cierre con degustación familiar.",
  },
  {
    question: "Dónde es el evento?",
    answer:
      "El evento se realiza en Azai Espacio Culinario (CABA), un espacio especialmente preparado y equipado para que los chicos cocinen con total seguridad.",
  },
  {
    question: "Hay alergias o restricciones alimentarias?",
    answer:
      "Si tu hijo/a tiene alguna alergia o restricción alimentaria, indicalo al momento de la inscripción. Hacemos todo lo posible por adaptar las recetas.",
  },
  {
    question: "Puedo cancelar mi inscripcion?",
    answer:
      "Sí, podés cancelar hasta 7 días antes del evento y recibir un reembolso completo. Después de esa fecha, te ofrecemos la posibilidad de transferir tu lugar a otra familia.",
  },
  {
    question: "Cuáles son los medios de pago?",
    answer:
      "Aceptamos tarjetas de credito y debito, transferencia bancaria y Mercado Pago. Los detalles se envian al momento de la inscripcion.",
  },
];

export const inscription = {
  badge: "Vacantes limitadas",
  headline: "Reserva el lugar de tu Mini Chef",
  description:
    "Los cupos son limitados para garantizar una experiencia personalizada. Dejanos tus datos y te contactamos con toda la información.",
  cta: "Quiero inscribirme",
  emailPlaceholder: "Tu email",
  namePlaceholder: "Tu nombre",
  emailError: "Por favor, ingresá un email válido",
  disclaimer:
    "Al inscribirte, aceptas recibir información sobre el evento. Podés darte de baja cuando quieras.",
};

export const footer = {
  brand: "Mini Chefs con Paulina",
  description:
    "La experiencia presencial de cocina para chicos y chicas, por Paulina Cocina.",
  sections: [
    {
      title: "Evento",
      links: [
        { label: "Qué es", href: "#que-es" },
        { label: "Actividades", href: "#actividades" },
        { label: "Beneficios", href: "#beneficios" },
        { label: "Preguntas", href: "#faq" },
      ],
    },
    {
      title: "Contacto",
      links: [
        { label: "almacen@paulinacocina.net", href: "mailto:almacen@paulinacocina.net" },
        { label: "Instagram", href: "https://www.instagram.com/paulinacocina" },
      ],
    },
  ],
  email: "almacen@paulinacocina.net",
  copyright: `\u00A9 ${new Date().getFullYear()} Paulina Cocina. Todos los derechos reservados.`,
};
