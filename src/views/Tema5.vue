<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Fundición de metales

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema5/1.png", alt="Imagen decorativa")

    .row.justify-content-center.mb-4
      .col-xl-10(data-aos="fade-down")
        div.banner-text.bg-color-primario-p10
          p.mb-0  La fundición de metales constituye uno de los procesos fundamentales en la elaboración de piezas de joyería, pues permite transformar los metales preciosos desde su estado sólido hasta una forma líquida que pueda ser vaciada en moldes y posteriormente trabajada con precisión. Este procedimiento exige el control riguroso de variables como temperatura, pureza del material, tiempo de calentamiento y tipo de molde, ya que cualquier variación puede influir en la calidad, resistencia y acabado de la pieza final.

    p En este capítulo se abordan las técnicas, las condiciones y los puntos de fusión de los metales.

    Separador

</template>

<script>
export default {
  name: 'Tema5',
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
