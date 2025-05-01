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
    "Seguridad informática para empresas",
    "Recuperación y prevención de pérdida de datos",
    "Ethical Hacking y pruebas de penetración",
    "Linux (Administración y Seguridad)",
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
      company: "Ets Consulting",
      href: "https://ets.consulting/",
      badges: [],
      location: "Remote",
      title: "Implementación y Soporte Técnico",
      logoUrl: "/ets.png",
      start: "Marzo 2025",
      end: "Actualidad",
      description:
        "Ets Consulting participé en la implementación y soporte de firewalls Palo Alto. Colaboré en la configuración de interfaces, zonas, políticas de seguridad, NAT y VPNs, tanto de forma remota como presencial en sitios de clientes. También brindé soporte técnico post-implementación, ayudando con ajustes de configuración y resolución de incidencias junto al equipo de redes. ",
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
      degree: "Perimetraje e Informática Forense",
      logoUrl: "/hackermentor.jpg",
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
      href: "https://www.netacad.com/courses/ethical-hacker?courseLang=en-US",
      degree: "Ethical Hacker",
      logoUrl: "/cisco_offensive.png",
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
    {
      school: "Cisco Networking Academy",
      href: "https://www.netacad.com/",
      degree: "Cisco Certified Network Associate V7",
      logoUrl: "/cisco.png",
      start: "2023",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Alpha & Omega - GYM",
      href: "",
      dates: "Enero 2023 - Junio 2023",
      active: true,
      description:
        "Aplicacion web para gestionar miembros, membresías, inventario y roles de usuario, con capacidad de generar tickets de transacciones.",
      technologies: [
        "Php",
        "Javascript",
        "Bootstrap",
        "Css",
        "MySQL",
      ],
      image: "/gym.png",
      video:
        "",
    },
    {
      title: "Pelichivo",
      href: "",
      dates: "Julio 2023 - Diciembre 2023",
      active: true,
      description:
        "Aplicacion web que consume una API para mostrar carteleras de películas en tiempo real. Incluye un sistema de suscripciones para notificaciones y acceso a contenido exclusivo.",
      technologies: [
        "Laravel",
        "Javascript",
        "Tailwind",
        "Css",
        "MySQL",
      ],
      image: "/pelichivo.png",
      video: "",
    },
    {
      title: "Infraestructura de Monitoreo",
      href: "",
      dates: "Enero 2024 - Junio 2024",
      active: true,
      description:
        "Sistema de monitoreo diseñado para la recoleccion, almacenamiento, visualización y alertas de metricas en tiempo real, optimizando la supervision de infraestructura y aplicaciones.",
      technologies: [
        "Grafana",
        "Prometheus",
        "Node Exporter",
        "Alertmanager",
        "Loki",
        "Linux",
      ],
      image: "/grafana.jpg",
      video: "",
    },
    {
      title: "Sistema de Gestion de Respaldos Automatizado",
      href: "",
      dates: "Julio 2024 - Diciembre 2024",
      active: true,
      description:
        "Sistema de backups automatizados diseñado para la gestión, monitoreo y recuperación de datos de manera eficiente, utilizando como la interfaz para la administración centralizada de tareas de respaldo y restauracion en tiempo real.",
      technologies: [
        "Bacula",
        "Bacula Web",
        "MySQL",
        "Cron",
        "Linux",
      ],
      image: "/bacula.png",
      video:
        "",
    },
  ],
  hackathons: [
    
  ],
} as const;
