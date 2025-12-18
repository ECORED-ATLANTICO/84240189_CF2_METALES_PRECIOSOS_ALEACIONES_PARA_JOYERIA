<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Decapado

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema9/1.png", alt="Imagen decorativa")

    .row.justify-content-center.mb-4
      .col-xl-10(data-aos="fade-down")
        div.banner-text.bg-color-primario-p10
          p.mb-0 En los procesos de fabricación y acabado de piezas de joyería, resulta esencial garantizar que los metales mantengan una apariencia limpia, uniforme y libre de impurezas superficiales que puedan afectar su calidad final. Durante las distintas etapas de conformado, soldadura o calentamiento, los metales desarrollan residuos, manchas u óxidos que dificultan su manipulación y alteran su estética. Para enfrentar estos retos, los joyeros recurren a un procedimiento químico específico que permite restaurar la superficie del metal y prepararlo adecuadamente para los siguientes pasos del trabajo artesanal o industrial.

    Separador

</template>

<script>
export default {
  name: 'Tema9',
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
