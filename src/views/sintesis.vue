<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center
      .col-xl-10
        p A lo largo del componente, el aprendiz  desarrolla competencia para llevar a cabo los procesos y fundamentos que intervienen en el trabajo con metales preciosos y sus aleaciones en el sector joyero. Se revisa la importancia de comprender las características físicas y químicas de los materiales, así como las técnicas para determinar su pureza mediante pruebas de ley y métodos de análisis confiables; aplicabilidad de estas pruebas en la validación de calidad, en la trazabilidad y en la garantía del producto final.
        p Posteriormente, se profundiza en el papel fundamental de la seguridad y salud en el trabajo, identificando los riesgos presentes en las actividades de fundición, manipulación de químicos, uso de herramientas y exposición a temperaturas elevadas. Es importante destacar la necesidad de implementar controles, buenas prácticas y el cumplimiento de la normatividad vigente para proteger la integridad del trabajador. Finalmente, se integra una visión reflexiva del oficio joyero como un proceso que une técnica, arte, tradición y responsabilidad, entendiendo que la calidad del producto depende también del cuidado hacia las personas y el entorno donde este se crea.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
