<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Lingote

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema8/1.png", alt="Imagen decorativa")

    .row.justify-content-center.mb-4
      .col-xl-10(data-aos="fade-down")
        div.banner-text.bg-color-primario-p10
          p.mb-0 En el proceso de elaboración de joyería, una de las etapas fundamentales es la obtención de un material metálico homogéneo, limpio y con las propiedades adecuadas para continuar con las operaciones posteriores, como el laminado, trefilado o la fabricación de piezas específicas. Este paso asegura que la mezcla de metales utilizada en la aleación mantenga su calidad, pureza y comportamiento técnico, permitiendo un mejor control durante la transformación. Además, constituye un eslabón clave para estandarizar el trabajo del joyero, evitando defectos y garantizando la continuidad del proceso productivo.

    Separador

    




</template>

<script>
export default {
  name: 'Tema8',
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
