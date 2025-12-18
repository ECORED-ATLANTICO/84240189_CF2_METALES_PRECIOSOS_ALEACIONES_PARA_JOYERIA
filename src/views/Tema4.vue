<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Equipos y herramientas para fundición
    img(data-aos="fade-up")(src="@/assets/curso/temas/tema4/1.png", alt="Imagen decorativa")

    .row.justify-content-center.mb-4
      .col-xl-10(data-aos="fade-down")
        div.banner-text.bg-color-primario-p10
          p.mb-0 La fundición en joyería es uno de los procesos fundamentales para transformar metales preciosos en piezas funcionales y estéticamente refinadas. Este procedimiento requiere no solo conocimientos técnicos, sino también el uso de equipos y herramientas especializados que permitan alcanzar y controlar altas temperaturas, manipular metales en estado líquido y garantizar la precisión del vaciado en moldes. La correcta selección y uso de estos implementos no solo influyen en la calidad final de la joya, sino también en la seguridad del operario y la eficiencia del proceso productivo. Por ello, comprender los equipos, herramientas y su clasificación resulta esencial para cualquier taller de joyería que trabaje con técnicas de fundición.

    Separador

    

</template>

<script>
export default {
  name: 'Tema4',
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
