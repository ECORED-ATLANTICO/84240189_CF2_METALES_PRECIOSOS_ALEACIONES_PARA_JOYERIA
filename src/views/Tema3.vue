<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Kilate

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema3/1.png", alt="Imagen decorativa")

    .row.justify-content-center.mb-4
      .col-xl-10(data-aos="fade-down")
        div.banner-text.bg-color-primario-p10
          p.mb-0 La medida en Kilates permite identificar la proporción real de oro puro presente en una mezcla, lo que influye directamente en la dureza, color, valor económico y aplicación del metal en distintos tipos de joyería. Conocer el significado de los Kilates es indispensable para la correcta formulación de aleaciones, para la estandarización de procesos productivos y para garantizar al cliente la autenticidad y calidad del producto final.

    Separador
    .row.justify-content-center
      .col-xl-10
        #t_3_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 3.1 Concepto

        p.mb-0 El kilate (K o kt) es una unidad de medida que indica la proporción de oro puro presente en una aleación.
        p.mb-5 La escala se basa en un total de 24 partes:

    .row.justify-content-center.mb-5
      .col-lg-8.col-xl-6.bg-color-primario-p20.rounded-4.py-3.py-lg-0
        .row.justify-content-center.align-items-center
          .col-8.col-sm-5.col-lg-4
            figure
              img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema3/2.png" data-aos="fade-in")
          .col-lg-8
            .py-2.px-4.rounded-4.bg-color-primario
              p.mb-0 <strong>• 1 kilate</strong> = 1 / 24 de oro puro.
              p.mb-0 <strong>• 24 kilates</strong> = 100 % de oro puro.

    .row.justify-content-center.z-2
      .col-xl-10
        .rounded-4.bg-ring
          .row.align-items-center.justify-content-center
            .col-lg-9.p-4.order-2.order-lg-1
              p.mb-0 <strong>Ejemplo</strong>: Una joya de 18K contiene 18 partes de oro y 6 partes de otros metales, equivalentes a 75 % de pureza.
              p En joyería, los kilates se utilizan exclusivamente para medir la pureza del oro, no para otros metales.
            .col-4.col-lg-2.order-1.order-lg-2
                figure
                  img(src="@/assets/curso/temas/tema3/3.png" alt="Imagen decorativa" data-aos="fade-down")
    
    .fullwidth-bg.fullwidth-bg--1
    Separador

    .row.justify-content-center
      .col-xl-10
        #t_3_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 3.2 Equivalencias

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-8
        p.mb-4.mb-lg-0 Las equivalencias de kilates representan un sistema estandarizado que permite comprender la cantidad real de oro puro presente en una aleación, facilitando la identificación de su pureza, valor y propiedades. Estas equivalencias, expresadas en kilates (K), porcentajes (%) o milésimas (‰), constituyen una referencia esencial para joyeros, técnicos y clientes, ya que permiten comparar de manera precisa la composición de distintas aleaciones utilizadas en la fabricación de pieza.
      .col-8.col-md-4.col-lg-2
        figure
          img(src="@/assets/curso/temas/tema3/4.svg" alt="Imagen decorativa" data-aos="fade-down")

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10.col-xl-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Tipos de Kilates
        img.mb-2.d-sm-none(data-aos="fade-up", src='@/assets/curso/temas/tema3/5-mob.svg', alt='La figura muestra los cuatro tipos de kilates de oro que se presentan en joyería.')
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src='@/assets/curso/temas/tema3/5.svg', alt='La figura muestra los cuatro tipos de kilates de oro que se presentan en joyería.')
        figcaption <strong>Fuente:</strong> SENA, 2025

    
</template>

<script>
export default {
  name: 'Tema3',
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
