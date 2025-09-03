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
    "Soy estudiante de Ciencias de la Computación con experiencia en desarrollo web y ciberseguridad. Me especializo en ciberseguridad y redes, protegiendo infraestructuras y redes con soluciones avanzadas para garantizar su seguridad. Siempre buscando aprender, mejorar y compartir conocimientos",
  avatarUrl: "/me.png",
  skills: [
    "PHP",
    "JavaScript",
    "Laravel",
    "Tailwind",
    "Bootstrap",
    "SQL",
    "PostgresSQL",
    "Monitoreo y gestión de redes",
    "Configuración de firewalls",
    "Documentación y soporte técnico",
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
      title: "Analista de Centro de Operaciones de Red (NOC) – Nivel 1",
      logoUrl: "/Movistar.jpg",
      start: "Junio 2025",
      end: "Actualidad",
      description: "En Movistar El Salvador, participo como Analista NOC Nivel 1, monitoreo la infraestructura de red, detecto y resuelvo incidentes, configuro y mantengo dispositivos de red, y colaboro con el equipo para garantizar disponibilidad, rendimiento y seguridad de los sistemas, tanto de forma remota."
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
      href: "https://www.incaf.gob.sv/",
      degree: "SD-WAN Solution Planning and Deployment Training",
      logoUrl: "/Huawei.png",
      start: "2025",
      end: "2025",
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
