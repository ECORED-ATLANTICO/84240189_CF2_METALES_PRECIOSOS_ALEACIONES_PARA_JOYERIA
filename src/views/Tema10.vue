<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Pruebas de ley de los metales preciosos

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema10/1.png", alt="Imagen decorativa")

    .row.justify-content-center.mb-4
      .col-xl-10(data-aos="fade-down")
        div.banner-text.bg-color-primario-p10
          p.mb-0 Las pruebas de ley son procedimientos analíticos y operativos destinados a determinar la pureza real de un metal precioso en una pieza o muestra: es decir, la proporción de metal fino frente a los demás componentes de la aleación. Estas pruebas son esenciales para certificar el valor comercial, garantizar el cumplimiento normativo y guiar decisiones técnicas (formulación de aleaciones, control de calidad en fundición y marcaje/contrastación).

    Separador

</template>

<script>
export default {
  name: 'Tema10',
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
