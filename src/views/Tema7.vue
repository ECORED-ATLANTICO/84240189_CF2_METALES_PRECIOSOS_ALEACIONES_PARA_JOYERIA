<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Colada del metal

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.z-2
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las técnicas de colado en joyería constituyen un conjunto de procedimientos fundamentales para transformar el metal fundido en piezas con formas definidas y precisión dimensional. Estas técnicas permiten reproducir diseños complejos, garantizar la calidad estructural del metal y optimizar la producción de elementos ornamentales. Su adecuada aplicación implica comprender los principios físicos del flujo del metal, las propiedades térmicas de los materiales involucrados y las condiciones operativas que influyen en el resultado final. Por ello, seleccionar la técnica de colado correcta es esencial para obtener piezas de alta calidad, con buen acabado superficial y mínima porosidad.

    .fullwidth-bg.fullwidth-bg--1
    Separador
    .row.justify-content-center.z-2
      .col-xl-10
        #t_7_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 7.1 Concepto

    .row.justify-content-center.z-2.align-items-center.mb-5
      .col-xl-9
        p Es el proceso mediante el cual el metal previamente fundido se vierte en un molde o canal de recepción con el fin de obtener un lingote, barra, placa o preforma que servirá como base para las operaciones posteriores de conformado en joyería. Durante la colada, el metal líquido fluye hacia el interior del molde bajo la acción de la gravedad o mediante presión asistida, solidificándose gradualmente hasta alcanzar una estructura compacta y homogénea.
        p.mb-0 Generalidades de la colada del metal en joyería.
      .col-xl-1
        figure
          img(src="@/assets/curso/temas/tema7/2.svg" alt="Imagen decorativa" data-aos="fade-down")
      
    .row.justify-content-center.align-items-center.factores-slider.z-2.mb-5
      .col-10.col-sm-6.col-lg-3
        figure
          img(src="@/assets/curso/temas/tema7/3.png" alt="Imagen decorativa" data-aos="fade-down")
      .col-lg-9.col-xl-8
        SlyderF(columnas="col-lg-6")
          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon(src='@/assets/curso/temas/tema7/4.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Control térmico
            p.mb-4.mb-5.text-centerLa temperatura debe mantenerse ligeramente por encima del punto de fusión para garantizar fluidez sin provocar sobrecalentamiento, lo cual genera oxidación y fragilidad.
          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon(src='@/assets/curso/temas/tema7/5.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Molde adecuado
            p.mb-4.mb-5.text-center Pueden emplearse moldes de acero, grafito o cerámica refractaria, según la técnica y la aleación.
          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon(src='@/assets/curso/temas/tema7/4.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Prevención de impurezas 
            p.mb-4.mb-5.text-center Es fundamental que el metal esté previamente desgasificado y que el fundente haya formado una capa protectora adecuada.
          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon(src='@/assets/curso/temas/tema7/5.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Solidificación controlada
            p.mb-4.mb-5.text-center Un enfriamiento excesivamente rápido puede generar porosidad interna; uno demasiado lento puede producir segregación de componentes.
          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon(src='@/assets/curso/temas/tema7/5.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Fluidez y viscosidad
            p.mb-4.mb-5.text-center Determinan la capacidad del metal para llenar el molde sin formar cavidades o discontinuidades.
          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon(src='@/assets/curso/temas/tema7/5.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Superficie del lingote
            p.mb-4.mb-5.text-center Debe resultar lisa y sin fisuras, pues estas se trasladan a procesos posteriores como laminado o trefilado.

    Separador
    .row.justify-content-center.z-2
      .col-xl-10
        #t_7_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 7.2 Técnicas

    .row.justify-content-center.align-items-center.factores-slider.z-2.mb-5
      .col-10.col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema7/10.png" alt="Imagen decorativa" data-aos="fade-down")
      .col-lg-9.col-xl-7
        p.mb-0 Las técnicas de colado en joyería constituyen un conjunto de procedimientos fundamentales para transformar el metal fundido en piezas con formas definidas y precisión dimensional. Estas técnicas permiten reproducir diseños complejos, garantizar la calidad estructural del metal y optimizar la producción de elementos ornamentales. Su adecuada aplicación implica comprender los principios físicos del flujo del metal, las propiedades térmicas de los materiales involucrados y las condiciones operativas que influyen en el resultado final. Por ello, seleccionar la técnica de colado correcta es esencial para obtener piezas de alta calidad, con buen acabado superficial y mínima porosidad.

    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Tabla 8.
      span Técnicas de colado
    .tabla-a.color-secundario.tabla-a--left.z-2
      table
        caption <strong>Fuente:</strong> SENA, 2025.
        thead(style="background-color: #FAF8F4;")
          tr
            th Técnica de colado
            th Descripción general
            th Ventajas
            th Desventajas
            th Aplicaciones comunes
        tbody
          tr
            td <strong>Colado por gravedad.</strong>
            td El metal fundido fluye de manera natural hacia el molde por acción de la gravedad.
            td Sencillez, bajo costo, ideal para piezas simples.
            td Limitado para detalles finos; riesgo de porosidad.
            td Piezas pequeñas y medianas sin gran complejidad.
          tr
            td <strong>Colado por centrifugación.</strong>
            td El metal fundido es impulsado al molde mediante fuerza centrífuga generada por la máquina de colado.
            td Excelente llenado del molde; ideal para detalles finos.
            td Requiere equipo especializado; riesgos por alta velocidad.
            td Anillos, colgantes, piezas con filigrana.
          tr
            td <strong>Colado al vacío.</strong>
            td Utiliza vacío para succionar el metal dentro del molde, eliminando burbujas y mejorando el flujo.
            td Alta calidad superficial; reduce porosidad; precisión elevada.
            td Equipos más costosos; requiere control técnico.
            td Piezas delicadas, microcomponentes, trabajos de alta precisión.
          tr
            td <strong>Colado continuo.</strong>
            td El metal fundido se vierte en un molde enfriado continuamente para formar barras o alambres.
            td Gran eficiencia; homogeneidad del metal.
            td No sirve para piezas terminadas; requiere maquinaria.
            td Lingotes, láminas, alambres y perfiles para joyería.
          tr
            td <strong>Colado a presión.</strong>
            td Se inyecta el metal fundido en el molde mediante presión controlada.
            td Excelente acabado; alta velocidad de producción.
            td Equipos costosos; no todos los metales son aptos.
            td Componentes pequeños, piezas repetitivas.


</template>

<script>
export default {
  name: 'Tema7',
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
