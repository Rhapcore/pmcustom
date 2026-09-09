import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import dataLogger from "@/assets/data-logger-pmcustom.jpg.asset.json";
import sistemaRiego from "@/assets/sistema-riego-iot.jpg.asset.json";
import solucionesIot from "@/assets/soluciones-iot.jpg.asset.json";
import pillarServices from "@/assets/pillar-services.jpg";
import pillarProducts from "@/assets/pillar-products.jpg";
import pillarCorfo from "@/assets/pillar-corfo.jpg";
import serviceEmbedded from "@/assets/service-embedded.jpg";
import serviceAutomation from "@/assets/service-automation.jpg";
import serviceRd from "@/assets/service-rd.jpg";
import serviceNdvi from "@/assets/service-ndvi.jpg";

export type CaseStudy = {
  slug: string;
  title: string;
  short: string;
  description: string;
  benefits: string[];
  image: string;
};

export const cases: CaseStudy[] = [
  {
    slug: "nodo-riego-controlador",
    title: "Sistema de riego automatizado IoT",
    short: "Producto integrado: controlador central en la nube + nodos autónomos LoRa por sectores.",
    description:
      "Solución integral de riego inteligente que combina un controlador central para la automatización de irrigación y fertilización —con monitoreo de presión, flujo y operación remota desde la nube vía web y comunicación celular— junto a nodos autónomos alimentados por energía solar que gestionan válvulas y distribuyen el riego por sectores mediante tecnología LoRa. Un solo producto que integra control centralizado y operación en terreno con amplia cobertura y bajo consumo.",
    benefits: [
      "Control centralizado desde la nube",
      "Nodos autónomos solares con LoRa",
      "Mayor eficiencia hídrica y menor intervención manual",
      "Escalabilidad y cobertura por sectores",
    ],
    image: sistemaRiego.url,
  },
  {
    slug: "data-logger",
    title: "Data Logger Inteligente",
    short: "Captura, almacena y visualiza datos multi-sensor en dashboard en tiempo real.",
    description:
      "Plataforma para captura, almacenamiento y visualización de datos provenientes de múltiples sensores. Integra variables como temperatura, presión, humedad, nivel y posición, entregando información lista para decisiones operacionales.",
    benefits: [
      "Monitoreo remoto",
      "Dashboard en tiempo real",
      "Integración de múltiples variables",
      "Mejor toma de decisiones",
    ],
    image: dataLogger.url,
  },
];

export type Product = {
  slug: string;
  title: string;
  short: string;
  image: string;
};

export const products: Product[] = [
  {
    slug: "nodo-riego-controlador",
    title: "Sistema de riego automatizado IoT",
    short: "Producto integrado: controlador central en la nube + nodos autónomos LoRa por sectores.",
    image: sistemaRiego.url,
  },
  {
    slug: "data-logger",
    title: "Data Logger Inteligente",
    short: "Captura, almacena y visualiza datos multi-sensor en dashboard en tiempo real.",
    image: dataLogger.url,
  },
  {
    slug: "sistema-predictor-riego-ndvi",
    title: "Índice de Vegetación de Diferencia Normalizada",
    short: "Imágenes satelitales de polígonos con filtros NDVI para estimar el estado vegetativo y optimizar el riego.",
    image: serviceNdvi,
  },
];

export type ServicePage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  body: string;
  benefits: string[];
  image: string;
};

export const services: ServicePage[] = [
  {
    slug: "sistemas-embebidos",
    title: "Sistemas Embebidos",
    metaTitle: "Sistemas Embebidos a Medida | PM CUSTOM",
    metaDescription:
      "Desarrollo de sistemas embebidos a medida: hardware, firmware y dispositivos electrónicos para automatizar y monitorear procesos críticos.",
    lead: "Dispositivos electrónicos inteligentes diseñados para tu operación.",
    body: "Desarrollamos dispositivos electrónicos inteligentes capaces de controlar, monitorear y automatizar procesos críticos. Acompañamos cada etapa: diseño de hardware, firmware embebido, validación y despliegue en terreno.",
    benefits: [
      "Hardware y firmware a medida",
      "Robustez para entornos industriales",
      "Bajo consumo y operación autónoma",
      "Integración con sensores y actuadores",
    ],
    image: serviceEmbedded,
  },
  {
    slug: "iot",
    title: "Soluciones IoT",
    metaTitle: "Soluciones IoT Industriales | PM CUSTOM",
    metaDescription:
      "Plataformas IoT a medida que conectan sensores, dispositivos y dashboards para entregar información en tiempo real desde cualquier lugar.",
    lead: "Conectamos sensores, dispositivos y plataformas para entregar datos en tiempo real.",
    body: "Diseñamos soluciones IoT que conectan sensores y dispositivos en terreno con plataformas y dashboards en la nube. Información oportuna y precisa para gestionar la operación desde cualquier lugar.",
    benefits: [
      "Telemetría cifrada hacia la nube",
      "Dashboards en tiempo real",
      "Alertas y automatizaciones",
      "Escalable a miles de dispositivos",
    ],
    image: solucionesIot.url,
  },
  {
    slug: "automatizacion-industrial",
    title: "Automatización Industrial",
    metaTitle: "Automatización Industrial | PM CUSTOM",
    metaDescription:
      "Soluciones de automatización industrial que reducen tareas manuales y mejoran la eficiencia operacional en agricultura, minería, manufactura e industria.",
    lead: "Menos tareas manuales, más eficiencia operacional.",
    body: "Reducimos tareas manuales y mejoramos la eficiencia operacional mediante soluciones automatizadas: controladores, integraciones, comunicación industrial y supervisión remota.",
    benefits: [
      "Reducción de errores operacionales",
      "Trazabilidad de procesos",
      "Integración con sistemas existentes",
      "Control remoto y supervisión 24/7",
    ],
    image: serviceAutomation,
  },
  {
    slug: "desarrollo-productos",
    title: "Desarrollo de Productos Tecnológicos",
    metaTitle: "Desarrollo de Productos Tecnológicos | PM CUSTOM",
    metaDescription:
      "Diseñamos hardware, software y plataformas para convertir desafíos complejos en productos tecnológicos funcionales y escalables.",
    lead: "De la idea al producto: hardware, software y plataformas.",
    body: "Diseñamos hardware, software y plataformas para convertir desafíos complejos en soluciones concretas. Acompañamos el ciclo completo: requerimientos, diseño, prototipado, manufactura piloto y soporte.",
    benefits: [
      "Diseño industrial y electrónico",
      "Prototipado rápido",
      "Manufactura piloto y escalado",
      "Soporte y mejora continua",
    ],
    image: pillarServices,
  },
  {
    slug: "investigacion-desarrollo",
    title: "Investigación y Desarrollo",
    metaTitle: "I+D, Ley I+D y CORFO | PM CUSTOM",
    metaDescription:
      "Procesos de I+D, prototipado y validación. Asesoría para acceder a Ley I+D, fondos CORFO y financiamiento de innovación tecnológica.",
    lead: "Transformamos ideas en productos tecnológicos validados.",
    body: "Transformamos ideas en productos tecnológicos funcionales mediante procesos de innovación, prototipado y validación. Asesoramos en la postulación a Ley I+D, fondos CORFO y otros instrumentos de financiamiento para que tu proyecto sea más accesible y rentable.",
    benefits: [
      "Método científico y validación técnica",
      "Asesoría Ley I+D",
      "Postulación a CORFO y fondos concursables",
      "Propiedad intelectual y patentes",
    ],
    image: serviceRd,
  },
  {
    slug: "sistema-predictor-riego-ndvi",
    title: "Índice de Vegetación de Diferencia Normalizada",
    metaTitle: "Sistema Predictor de Riego NDVI | PM CUSTOM",
    metaDescription:
      "Sistema predictor de riego basado en imágenes satelitales NDVI. Monitorea el estado vegetativo de polígonos y optimiza el riego según la humedad real del cultivo.",
    lead: "Predice el riego de tus cultivos con imágenes satelitales NDVI.",
    body:
      "Sistema web para predicción y recomendaciones de riego mediante imágenes satelitales las cuales a tráves de la generación de polígonos en distintas superficies y aplicando distintos tipos de filtros se visualiza el estado vegetativo del lugar a través de mapas de color:\n- Rojo: indica zonas bastante secas\n- Verde: indica zonas bastante húmedas\nCon esto se llega a una estimación para alcanzar un estado vegetativo óptimo.",
    benefits: [
      "Imágenes satelitales de polígonos",
      "Mapas de color de estado vegetativo",
      "Estimación de riego óptimo",
      "Reducción de desperdicio hídrico",
    ],
    image: serviceNdvi,
  },
];

export const industries = [
  { name: "Agricultura", description: "Monitoreo de cultivos, riego inteligente y gestión de recursos." },
  { name: "Minería", description: "Captura de datos operacionales y monitoreo remoto de activos." },
  { name: "Alimentos", description: "Automatización, homogeneidad, trazabilidad y control de procesos productivos en la industria alimentaria." },
  { name: "Manufactura", description: "Control de variables críticas y trazabilidad." },
  { name: "Energía", description: "Monitoreo de infraestructura y gestión de datos." },
  { name: "Logística", description: "Seguimiento de activos y control operacional." },
];

export const pillars = [
  {
    title: "Seguridad",
    description:
      "Diseñamos soluciones tecnológicas robustas y seguras utilizando protocolos industriales, actualizaciones permanentes y altos estándares de desarrollo que protegen la información y garantizan la continuidad operacional.",
    image: pillarServices,
  },
  {
    title: "Robustez",
    description:
      "Nuestros dispositivos están preparados para operar en entornos exigentes como agricultura, minería e industria, asegurando estabilidad, disponibilidad de datos y funcionamiento continuo.",
    image: pillarProducts,
  },
  {
    title: "Usabilidad",
    description:
      "Creamos tecnología pensada para las personas. Soluciones intuitivas, fáciles de implementar y diseñadas para integrarse rápidamente a las operaciones de cada cliente.",
    image: pillarCorfo,
  },
];

export const benefitsList = [
  "Información en tiempo real",
  "Automatización de procesos",
  "Disminución de errores operacionales",
  "Mayor eficiencia productiva",
  "Control remoto de operaciones",
  "Escalabilidad tecnológica",
  "Optimización de recursos",
  "Mejor toma de decisiones",
];

export const process = [
  { n: "01", t: "Diagnóstico", d: "Entendemos el problema, la operación y los objetivos del negocio." },
  { n: "02", t: "Factibilidad Técnica", d: "Evaluamos tecnologías, recursos y oportunidades." },
  { n: "03", t: "Diseño de Solución", d: "Definimos arquitectura, hardware, software e integración." },
  { n: "04", t: "Prototipado", d: "Validamos la solución antes de escalar." },
  { n: "05", t: "Desarrollo", d: "Construimos la tecnología adaptada al proyecto." },
  { n: "06", t: "Implementación", d: "Integramos la solución a la operación." },
  { n: "07", t: "Optimización", d: "Monitoreamos, mejoramos y acompañamos el crecimiento." },
];
