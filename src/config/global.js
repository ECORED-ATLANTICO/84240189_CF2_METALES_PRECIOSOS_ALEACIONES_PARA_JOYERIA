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
            titulo: 'Nivel de riesgo tipo 3',
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
        download: 'downloads/CF02_84240189_DU.pdf',
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
      tema: 'Aleaciones',
      referencia:
        'Servicio Nacional de Aprendizaje SENA. (2025) <em>Las aleaciones y análisis en los metales precioso.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=jrdn75m9v08&t=2s',
    },
    {
      tema: 'Fundición de metales',
      referencia:
        'Instituto tecnológico de Ensenada. (2024). <em>Normas y Criterios Para La Fundición De Materiales</em>',
      tipo: 'Artículo',
      link:
        'https://www.ensenada.tecnm.mx/wp-content/uploads/2024/06/ORTO-MARTINEZ.pdf?utm_source=chatgpt.com',
    },
  ],
  glosario: [
    {
      termino: 'Aleaciones',
      significado:
        'Producto homogéneo, obtenido por fusión, compuesto de dos o más elementos químicos, al menos uno de los cuales es un metal.',
    },

    {
      termino: 'bórax',
      significado:
        'Sustancia blanca constituida por sal de ácido bórico y sodio, usada en farmacia y en la industria. Puede encontrarse en estado natural.',
    },

    {
      termino: 'Combustión',
      significado:
        'Acción y efecto de arder o quemar. En química: reacción entre el oxígeno y una sustancia oxidables, acompañada de desprendimiento de energía, usualmente manifestada por calor y luz.',
    },

    {
      termino: 'Corrosión',
      significado:
        'Desgaste paulatino de cuerpos metálicos por acción de agentes externos.',
    },

    {
      termino: 'Filigrana',
      significado:
        'técnica de trabajar hilos finos de metales, usualmente metales preciosos; para crear diseños delicados y ornamentales.',
    },

    {
      termino: 'Metales preciosos',
      significado:
        'Designa a ciertos metales que no se oxidan ni se alteran con facilidad, como el oro, la plata y el platino.',
    },

    {
      termino: '<em>Pickling</em>',
      significado:
        'Es un tratamiento químico de superficies metálicas consistente en sumergir la pieza en una solución ácida (o con reactivos adecuados), para eliminar óxidos, escamas, impurezas superficiales, residuos de soldadura o calor, óxido de laminación, etc.',
    },

    {
      termino: 'Resistencia química',
      significado:
        'Se refiere a la capacidad de un material para resistir la acción de sustancias químicas agresivas (ácidos, álcalis, sales, solventes, etc.) sin degradarse, oxidarse, corroerse o alterarse.',
    },
  ],
  referencias: [
    {
      referencia:
        'Tylecote, R. F. (1991). <em>Historia de la metalurgia</em>. Fondo de Cultura Económica.',
      link:
        'https://www.academia.edu/22186223/El_estudio_de_la_metalurgia_una_historia_de_frustraciones_y_aciertos',
    },
    {
      referencia:
        'Ortega Burgos, E. (s. f.). <em>Los metales preciosos y su marco normativo</em>.',
      link:
        'https://enriqueortegaburgos.com/los-metales-preciosos-y-su-marco-normativo/?utm_source',
    },
    {
      referencia:
        'Secretaría de Economía. (2020). <em>NOM-033/1-SE-2020: Artículos de oro, plata, platino y paladio — Parte 1: Información comercial y métodos de análisis</em>. Diario Oficial de la Federación.',
      link: 'https://sidof.segob.gob.mx/notas/docFuente/5638887',
    },
    {
      referencia:
        'Heman. (2024). <em>Guía de herramientas y equipos esenciales para joyeros profesionales</em>. Sobling.',
      link:
        'https://sobling.jewelry/es/guia-de-herramientas-y-equipos-esenciales-para-profesionales-de-la-joyeria/',
    },
    {
      referencia:
        'JF-Joyeros. (2024). <em>Seguridad en la manipulación de metales en el taller de joyería</em>. JF Joyeros.',
      link:
        'https://jf-joyeros.com/seguridad-en-la-manipulacion-de-metales-en-el-taller-de-joyeria/',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social de Colombia; Ministerio de Trabajo de Colombia. (2012). <em>Ley 1562 de 2012: Por medio de la cual se modifica el Sistema de Riesgos Laborales y se dictan otras disposiciones</em>.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=48365',
    },
    {
      referencia:
        'Gutiérrez, M., & López, A. (2015). <em>Técnicas de fundición y soldadura en orfebrería</em>. Revista de Joyería Artesanal, 8(2), 45-59.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Andrea Bobadilla Gutiérrez',
          cargo: 'Guionista línea de producción',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Heydy Cristina González García',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera',
          cargo: 'Diseñador <i>web</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack junior</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
