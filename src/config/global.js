export default {
  global: {
    Name: 'Formulación y evaluación de aleaciones',
    Description:
      'El componente formativo permite comprender los principios que intervienen en la combinación de metales para obtener materiales con propiedades específicas y adecuadas para la fabricación de piezas de joyería. En este espacio se abordan los factores que influyen en la calidad de una aleación, y las condiciones de transformación que determinan su resistencia, color, durabilidad y facilidad de trabajo. A partir de este conocimiento, el aprendiz desarrolla criterios técnicos para analizar, seleccionar y valorar aleaciones según los requisitos del diseño y la función de cada pieza, fortaleciendo así su capacidad para garantizar productos finales estéticos, seguros y de alta calidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Aleaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Aleaciones',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Propiedades',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Composición',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ley de un metal precioso',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Clases',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Determinación',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Kilate',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Equivalencias',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Equipos y herramientas para fundición',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Descripción',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Clasificación',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Mantenimiento',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Fundición de metales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Técnicas',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Punto de fusión de metales',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Temperatura en metales para joyería',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Llamas oxidantes y reductoras',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Fundente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Clases',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Preparación',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Colada del metal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Concepto',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Técnicas',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Lingote',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Concepto',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Clases de lingotes',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Características',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo: 'Defectos en los lingotes',
            hash: 't_8_4',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Decapado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Concepto',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Clases',
            hash: 't_9_2',
          },
          {
            numero: '9.3',
            titulo: 'Técnicas',
            hash: 't_9_3',
          },
          {
            numero: '9.4',
            titulo: 'Tipos de ácidos para decapado',
            hash: 't_9_4',
          },
          {
            numero: '9.5',
            titulo: 'Cuidados en el uso de decapantes',
            hash: 't_9_5',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Pruebas de ley de los metales preciosos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '10.1',
            titulo: 'Concepto',
            hash: 't_10_1',
          },
          {
            numero: '10.2',
            titulo: 'Tipos',
            hash: 't_10_2',
          },
          {
            numero: '10.3',
            titulo: 'Aplicabilidad',
            hash: 't_10_3',
          },
        ],
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Normativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '11.1',
            titulo: 'Seguridad y salud en el trabajo',
            hash: 't_11_1',
          },
          {
            numero: '11.2',
            titulo: 'Riesgo 3',
            hash: 't_11_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: '',
      significado: '',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
