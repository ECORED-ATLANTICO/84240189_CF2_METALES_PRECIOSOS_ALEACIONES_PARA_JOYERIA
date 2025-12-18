<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Fundente

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema6/1.png", alt="Imagen decorativa")

    .row.justify-content-center.mb-4.z-2
      .col-xl-10(data-aos="fade-down")
        div.banner-text.bg-color-primario-p10
          p.mb-0 En los procesos de fundición y soldadura en joyería, muchas veces el resultado final dependerá no solo de la destreza del artesano y del control térmico, sino también de la correcta preparación del metal y del ambiente químico en torno a él. Es en esos momentos críticos cuando un elemento aparentemente secundario, puede marcar la diferencia entre una pieza con acabado perfecto o una con defectos, impurezas u oxidados. Ese elemento es el fundente, cuya presencia y empleo adecuado pueden transformar un proceso riesgoso en una operación controlada, contribuyendo decisivamente a la calidad, pureza y presentación final de la joya.

    .fullwidth-bg.fullwidth-bg--1
    Separador

    .row.justify-content-center.z-2
      .col-xl-10
        #t_6_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 6.1 Concepto

    .row.justify-content-center.z-2
      .col-xl-10
        .p-4.bg-arena.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-10
              p.mb-0 Un fundente es una sustancia (generalmente química) que se utiliza en procesos de fundición y soldadura de metales preciosos y aleaciones para facilitar la fluidez del metal, proteger su superficie de la oxidación, eliminar impurezas y permitir que la unión o fundición se realice de manera limpia, homogénea y controlada. Actúa como una barrera protectora contra el oxígeno, reduciendo la formación de óxidos y mejorando la adherencia de la soldadura o la uniformidad del fundido.
            .col-lg-1.d-none.d-lg-block
              figure
                img.w-85(src="@/assets/curso/temas/tema6/2.svg" alt="Imagen decorativa" data-aos="fade-down")

    Separador
    .row.justify-content-center.z-2
      .col-xl-10
        #t_6_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 6.2 Clases

    .row.justify-content-center.z-2
      .col-xl-10
        p.mb-4 Dependiendo del metal, del proceso y del tipo de soldadura o fundición, existen varios tipos de fundente. Entre los más comunes tenemos:

    .row.justify-content-center.align-items-center.factores-slider.z-2.mb-5
      .col-10.col-sm-6.col-lg-3
        figure
          img(src="@/assets/curso/temas/tema6/3.png" alt="Imagen decorativa" data-aos="fade-down")
      .col-lg-9.col-xl-8
        SlyderF(columnas="col-lg-6")
          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon(src='@/assets/curso/temas/tema6/4.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Fundente de bórax (borato de sodio)
            p.mb-4.mb-5.text-center Probablemente el más utilizado en joyería, tanto para soldadura como para fundición.
          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon(src='@/assets/curso/temas/tema6/5.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Fundentes mezclados
            p.mb-4.mb-5.text-center Mezclas de boratos, carbonatos y otras sales especiales, diseñadas para metales específicos o aleaciones complejas.
          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon(src='@/assets/curso/temas/tema6/4.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Fundente para soldadura 
            p.mb-4.mb-5.text-center Utilizado en piezas que requieren mayor resistencia mecánica.
          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon(src='@/assets/curso/temas/tema6/5.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Fundente para metales sensibles.
            p.mb-4.mb-5.text-center Formulados para asegurar mínima contaminación y proteger la aleación.
          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon(src='@/assets/curso/temas/tema6/5.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Fundente en pasta o en polvo
            p.mb-4.mb-5.text-center Según la técnica: puede aplicarse en seco, disuelto o como suspensión, dependiendo del método de soldadura / fundición.

    Separacion
    .row.justify-content-center.z-2
      .col-xl-10
        #t_6_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 6.3 Preparación

    .row.justify-content-center.align-items-center.z-2
      .col-xl-10
        p.mb-5 Aunque algunos fundentes comerciales vienen listos para usarse, en joyería artesanal es común preparar el fundente según la técnica o el metal. Su preparación influye directamente en su eficacia y en la calidad del trabajo final.
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 4.
          span Proceso de Preparación de fundente
        img.mb-2.d-sm-none(data-aos="fade-up", src='@/assets/curso/temas/tema6/9-mob.svg', alt='La figura muestra cuatro ejemplos de KPIs aplicados a acciones de mercadeo.')
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src='@/assets/curso/temas/tema6/9.svg', alt='La figura muestra cuatro ejemplos de KPIs aplicados a acciones de mercadeo.')
        figcaption <strong>Fuente:</strong> SENA, 2025
  



</template>

<script>
export default {
  name: 'Tema6',
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
