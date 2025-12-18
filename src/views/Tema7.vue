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
