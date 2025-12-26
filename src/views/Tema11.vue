<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 11
      h1 Normativa

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema11/1.png", alt="Imagen decorativa")

    .row.justify-content-center.mb-4
      .col-xl-10(data-aos="fade-down")
        div.banner-text.bg-color-primario-p10
          p.mb-0 En el ámbito de la joyería y el trabajo con metales preciosos, es fundamental comprender el conjunto de lineamientos que orientan la producción, el control de calidad y la comercialización de las piezas. Estos lineamientos no solo garantizan prácticas responsables en cada etapa del proceso, sino que también brindan seguridad al consumidor, fortalecen la transparencia en el mercado y permiten que los productos cumplan con estándares reconocidos a nivel nacional e internacional. Conocerlos y aplicarlos adecuadamente se convierte en un elemento clave para asegurar la confiabilidad y la profesionalización del oficio.

    .fullwidth-bg.fullwidth-bg--1
    Separador
    #t_11_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 11.1 Seguridad y salud en el trabajo

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-10.col-md-8.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema11/2.png" alt="Imagen decorativa" data-aos="fade-down")
      .col-lg-9
        p La actividad joyera implica procesos técnicos como fundición, manejo de hornos, uso de químicos, aplicación de calor, manipulación de herramientas cortantes y exposición a partículas metálicas. Estos riesgos requieren que el aprendiz conozca, comprenda y aplique los lineamientos establecidos por la normatividad colombiana en Seguridad y Salud en el Trabajo. Dichos lineamientos buscan proteger la integridad física y mental del trabajador, promover ambientes de trabajo seguros y prevenir accidentes y enfermedades laborales asociadas al sector.
        p.mb-0 Principales riesgos en el taller joyero según normatividad de SST:

    TabsB.color-acento-contenido.z-2.mb-4
      .py-4.py-md-5(titulo="Riesgo químico" :icono="require('@/assets/curso/temas/tema11/11.svg')")
        .row.align-items-center
          .offset-lg-1.col-md-7.mb-4.mb-md-0
            h4.mb-4 Riesgo químico
            p SGA, ventilación, guantes resistentes, capacitación.
            p.mb-4.mb-lg-0 <strong>Ejemplo</strong>: ácidos de decapado, vapores metálicos.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema11/3.png', alt='Imagen de acompañamiento')
      .py-4.py-md-5(titulo="Riesgo físico" :icono="require('@/assets/curso/temas/tema11/12.svg')")
        .row.align-items-center
          .offset-lg-1.col-md-7.mb-4.mb-md-0
            h4.mb-4 Riesgo físico
            p EPP térmico, señalización, extintores.
            p.mb-4.mb-lg-0 <strong>Ejemplo</strong>: calor de hornos, llama, metal fundido.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema11/4.png', alt='Imagen de acompañamiento')
      .py-4.py-md-5(titulo="Riesgo mecánico" :icono="require('@/assets/curso/temas/tema11/13.svg')")
        .row.align-items-center
          .offset-lg-1.col-md-7.mb-4.mb-md-0
            h4.mb-4 Riesgo mecánico
            p Procedimientos seguros, mantenimiento.
            p.mb-4.mb-lg-0 <strong>Ejemplo</strong>: herramientas cortantes, fresas, limas.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema11/5.png', alt='Imagen de acompañamiento')
      .py-4.py-md-5(titulo="Riesgo ergonómico" :icono="require('@/assets/curso/temas/tema11/14.svg')")
        .row.align-items-center
          .offset-lg-1.col-md-7.mb-4.mb-md-0
            h4.mb-4 Riesgo ergonómico
            p Pausas activas, ergonomía del puesto.
            p.mb-4.mb-lg-0 <strong>Ejemplo</strong>: postura prolongada en banca 
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema11/6.png', alt='Imagen de acompañamiento')
      .py-4.py-md-5(titulo="Riesgo eléctrico" :icono="require('@/assets/curso/temas/tema11/15.svg')")
        .row.align-items-center
          .offset-lg-1.col-md-7.mb-4.mb-md-0
            h4.mb-4 Riesgo eléctrico
            p Instalación regulada y mantenimiento.
            p.mb-4.mb-lg-0 <strong>Ejemplo</strong>: hornos, motores de pulido
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema11/7.png', alt='Imagen de acompañamiento')
      .py-4.py-md-5(titulo="Riesgo por partículas" :icono="require('@/assets/curso/temas/tema11/16.svg')")
        .row.align-items-center
          .offset-lg-1.col-md-7.mb-4.mb-md-0
            h4.mb-4 Riesgo por partículas
            p Mascara P95 o P100, extractores.
            p.mb-4.mb-lg-0 <strong>Ejemplo</strong>: polvo metálico en limado y pulido
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema11/8.png', alt='Imagen de acompañamiento')
      
    Separador
    .row.justify-content-center.z-2
      .col-xl-10
        #t_11_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 11.2 Nivel de riesgo tipo 3

    .row.justify-content-center.align-items-center.factores-slider.z-2.mb-5
      .col-10.col-sm-6.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema11/9.png" alt="Imagen decorativa" data-aos="fade-down")
      .col-lg-7.col-xl-6
        p En Colombia, el Nivel de Riesgo Tipo 3 incluye actividades laborales con exposición moderada a peligros que pueden generar accidentes o enfermedades laborales significativas. Dentro del sector joyero; especialmente en procesos de fundición, manejo de metales, uso de hornos y sustancias químicas; esta clasificación aplica debido a la combinación de riesgo físico, químico, mecánico, térmico y ergonómico.
        p.mb-0 El Nivel de Riesgo 3 implica que el empleador o taller debe implementar medidas y controles más estrictos dentro del SG-SST, incluyendo protocolos de manipulación segura, uso obligatorio de EPP, programas de capacitación técnica y vigilancia de salud ocupacional.


    .row.justify-content-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 13.
          span Descripción del riesgo tipo 3
        .tabla-a.color-secundario
          table
            caption <strong>Fuente:</strong> SENA, 2025.
            thead(style="background-color: #FAF8F4;")
              tr
                th Aspecto
                th(colspan="2") Riesgo Tipo 3 
                th(colspan="2") Aplicación a metales preciosos y aleaciones
            tbody
              tr
                td <strong>Naturaleza del riesgo.</strong>
                td(colspan="2") Exposición a procesos industriales con calor, sustancias químicas o maquinaria.
                td(colspan="2") Fundición, hornos, decapado con ácidos, manejo de herramientas.
              tr
                td <strong>Nivel de peligrosidad.</strong>
                td(colspan="2") Moderado a alto, requiere controles específicos.
                td(colspan="2") Controles térmicos, ventilación, EPP, protocolos de seguridad.
              tr
                td <strong>Probabilidad de accidente.</strong>
                td(colspan="2") Media.
                td(colspan="2") Quemaduras, irritación, cortes, intoxicación química.
              tr
                td <strong>Probabilidad de enfermedad laboral.</strong>
                td(colspan="2") Media.
                td(colspan="2") Dermatitis por metales / ácidos; afectación respiratoria; trastornos ergonómicos.
              tr
                td <strong>Exigencias del SG-SST.</strong>
                td(colspan="2") Normativa estricta, monitoreo, capacitaciones y registros.
                td(colspan="2") Inducción y reinducción, hoja de seguridad SGA, procedimientos escritos.

    .row.justify-content-center.z-2.mb-5
      .col-xl-10
        p.mb-0 Ahora bien, dentro del marco de las actividades de joyería se establecen las medidas de control obligatorias que se deben tener muy en cuenta para no incurrir en algún tipo de enfermedad o en el peor de los casos, accidente laboral:

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 5.
          span Medidas de control obligatorias para Nivel de Riesgo Tipo 3
        img.mb-2.d-sm-none(data-aos="fade-up", src='@/assets/curso/temas/tema11/10-mob.svg', alt='La figura 5 muestra cuales son las medidas de control requeridas para el nivel de riesgo Tipo 3.')
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src='@/assets/curso/temas/tema11/10.svg', alt='La figura 5 muestra cuales son las medidas de control requeridas para el nivel de riesgo Tipo 3.')
        figcaption <strong>Fuente:</strong> SENA, 2025


</template>

<script>
export default {
  name: 'Tema11',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
