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

    Separador

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
