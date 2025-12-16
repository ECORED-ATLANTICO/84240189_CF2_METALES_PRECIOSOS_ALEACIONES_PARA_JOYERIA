<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ley de un metal precioso

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema2/1.png", alt="Imagen decorativa")

    .row.justify-content-center.mb-4
      .col-xl-10(data-aos="fade-down")
        div.banner-text.bg-color-primario-p10
          p.mb-0 La ley de un metal precioso constituye uno de los parámetros fundamentales para garantizar la autenticidad, calidad y valor comercial de las aleaciones utilizadas en joyería. Este estándar expresa el grado de pureza del metal contenido en una pieza, lo cual influye directamente en sus propiedades físicas, químicas y estéticas, así como en su comportamiento durante los procesos de fundición, laminado, soldadura y acabado. 

</template>

<script>
export default {
  name: 'Tema2',
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
