import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Cristian Sosa",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Apasionado por la ciberseguridad y las redes.",
  summary:
    "Soy estudiante de Ciencias de la Computación con experiencia en soporte de redes y telecomunicaciones. Trabajo en el monitoreo y operación de servicios de conectividad, participando en el diagnóstico y seguimiento de incidencias en redes empresariales. Siempre busco aprender, mejorar y seguir creciendo en el área de redes y ciberseguridad.",
  avatarUrl: "/me.png",
  skills: [
    "LAN / WAN",
    "MPLS y DIA",
    "Servicios de conectividad empresarial",
    "Análisis de logs y eventos de red",
    "Documentación técnica",
    "Soporte técnico",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Inicio" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
     
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/cristian-sosa-074117322/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Movistar El Salvador",
      href: "https://ets.consulting/",
      badges: [],
      location: "Remoto",
      title: "Especialista en Soporte de Redes",
      logoUrl: "/Movistar.jpg",
      start: "Junio 2025",
      end: "Actualidad",
      description: "Participación en la operación y monitoreo de servicios de conectividad empresarial en entornos 24/7, realizando monitoreo de enlaces MPLS, DIA y servicios de conectividad corporativa. Ejecución de validaciones de conectividad mediante pruebas de red como ping y traceroute, revisión de estados de interfaces, tablas ARP, consumo de CPU y análisis de logs de equipos. Atención y seguimiento de incidencias de red reportadas por clientes, coordinación con áreas técnicas durante el proceso de diagnóstico y resolución, y soporte en redes LAN, WAN y servicios de conectividad provistos por terceros."
      ,
    },
    {
      company: "Ets Consulting",
      href: "https://ets.consulting/",
      badges: [],
      location: "Remoto",
      title: "Implementación y Soporte Técnico",
      logoUrl: "/ets.png",
      start: "Febrero 2025",
      end: "Mayo 2025",
      description:
        "En Ets Consulting, participo en la implementación y soporte de firewalls Palo Alto. Colaboro en la configuración de interfaces, zonas, políticas de seguridad, NAT y VPNs, tanto de forma remota como presencial en sitios de clientes. Además, brindo soporte técnico post-implementación, ayudando con ajustes de configuración y resolución de incidencias junto al equipo de redes.",
    },

  ],
  education: [
    {
      school: "Universidad Luterana Salvadoreña",
      href: "https://uls.edu.sv/sitioweb/",
      degree: "Ciencias de la Computación",
      logoUrl: "/uls.jpg",
      start: "2022",
      end: "2026",
    },
    {
      school: "Huawei Global Training Center",
      href: "https://e.huawei.com/es/solutions/services/demo/talent/industry-talent",
      degree: "SD-WAN Solution Planning and Deployment Training",
      logoUrl: "/Huawei.png",
      start: "2025",
      end: "2025",
    },
       {
      school: "Cybersecurity Educator Professional",
      href: "https://courses.redteamleaders.com/exams/b442ad36-44fe-4b6f-99f5-fd6f7ddbb4b4",
      degree: "Certified Cybersecurity Educator Professional (CCEP)",
      logoUrl: "/CCEP.png",
      start: "2026",
      end: "2026",
    },

    {
      school: "Instituto Nacional de Capacitación y Formación",
      href: "https://www.incaf.gob.sv/",
      degree: "Gestión de la Ciberseguridad Avanzada",
      logoUrl: "/incaf.jpg",
      start: "2025",
      end: "2025",
    },
    {
      school: "Hacker Mentor",
      href: "https://www.hacker-mentor.com/",
      degree: "Auditor Interno ISO 27001",
      logoUrl: "/hackermentor.jpg",
      start: "2024",
      end: "2025",
    },
    {
      school: "Cisco Networking Academy",
      href: "https://www.netacad.com/es/career-paths/cybersecurity?courseLang=es-XL",
      degree: "Junior Cybersecurity Analyst",
      logoUrl: "/jr.png",
      start: "2024",
      end: "2024",
    },
  ],
  projects: [
   
  ],
  hackathons: [
    {
      title: "SD-WAN Solution Planning and Deployment Training",
      dates: "22 de agosto de 2025",
      location: "San Salvador, El Salvador",
      description: "Participé en la planificación e implementación de soluciones SD-WAN, aprendiendo a optimizar el enrutamiento de tráfico, garantizar alta disponibilidad y mejorar la seguridad de la red corporativa.",

      image:
        "/Huawei.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Innovation Camp 2025",
      dates: "28 de mayo de 2025",
      location: "San Salvador, El Salvador",
      description: "Desarrollé un Security Operations Center (SOC) para monitorizar y proteger la infraestructura de red.",
      
      image: "/inovention_camp.jpg",
      links: [],
    },
  ],
} as const;
