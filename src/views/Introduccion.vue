<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-2
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/intro/1.png" alt="Imagen de introducción al curso")
      .col-lg-7
        p El estudio y manejo de los metales preciosos constituye uno de los pilares fundamentales del oficio joyero, pues de su correcta selección, transformación y control dependen tanto la calidad estética como la integridad técnica de las piezas producidas.
        p.mb-0 Este componente formativo orienta a fortalecer las competencias necesarias para comprender los principios fisicoquímicos de los metales, las técnicas de fundición y las normativas que regulan la pureza y estandarización de las aleaciones empleadas en la industria.
  
    .p-4.bg-brown.rounded-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-9
          p.mb-0 Además, también trata sobre aspectos como: formular aleaciones conforme a las técnicas de fundición y a los requerimientos específicos del cliente, lo que implica no solo que el aprendiz podrá dominar proporciones y reacciones metalúrgicas, sino también interpretar necesidades funcionales y estéticas. Asimismo, se aborda la habilidad de determinar la calidad de la aleación en concordancia con los estándares de ley y con las características finales del lingote, garantizando que el producto obtenido responda a parámetros de pureza, resistencia, color y comportamiento mecánico exigidos en la joyería profesional. Este componente formativo, por tanto, establece las bases técnicas y normativas necesarias para que el futuro joyero desarrolle procesos productivos seguros, precisos y alineados con las buenas prácticas del sector
        .col-lg-2.d-none.d-lg-block
          figure.mb-4.mb-md-0
            img.w-138(src="@/assets/curso/intro/2.svg" alt="Imagen objetivo general")
    
    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
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
