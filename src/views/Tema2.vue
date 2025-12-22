<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ley de un metal precioso

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema2/1.png", alt="Imagen decorativa")

    .row.justify-content-center.mb-5
      .col-xl-10(data-aos="fade-down")
        div.banner-text.bg-color-primario-p10
          p.mb-0 La ley de un metal precioso constituye uno de los parámetros fundamentales para garantizar la autenticidad, calidad y valor comercial de las aleaciones utilizadas en joyería. Este estándar expresa el grado de pureza del metal contenido en una pieza, lo cual influye directamente en sus propiedades físicas, químicas y estéticas, así como en su comportamiento durante los procesos de fundición, laminado, soldadura y acabado. 

    .row.justify-content-center.align-items-center
      .col-10.col-md-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema2/2.png" alt="Imagen decorativa" data-aos="fade-down")
      .col-lg-7
        p Comprender la ley es esencial tanto para el joyero como para el consumidor, ya que asegura transparencia en el mercado, facilita el control técnico sobre la composición de las aleaciones y permite cumplir con las normas nacionales e internacionales que regulan la fabricación y comercialización de productos de metales preciosos.
        p.mb-0 En este capítulo, dominar este concepto permite realizar formulaciones precisas, validar la calidad del lingote y garantizar que la pieza final cumpla con los estándares exigidos en la industria.

    Separador
    .row.justify-content-center
      .col-xl-10
        #t_2_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 2.1 Concepto
        
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-4.mb-lg-0 La ley de un metal precioso es la medida de pureza que indica la proporción de metal fino presente en una aleación, expresada comúnmente en milésimas (‰) o kilates (k) según el metal y la normativa utilizada. En milésimas, la ley se representa como el número de partes de metal puro contenido en 1000 partes de aleación; por ejemplo, una pieza marcada como 925 contiene 925 partes de plata pura por cada 1000 y 75 partes de otros metales, generalmente cobre. En el sistema de kilates, aplicado principalmente al oro, la ley se expresa sobre una base de 24 partes; así, un oro 18k corresponde al 75 % de oro fino.
      .col-10.col-md-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema2/3.png" alt="Imagen decorativa" data-aos="fade-down")

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.z-2
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La ley no solo determina la pureza, sino que también establece características funcionales del material, ya que la cantidad y el tipo de metales de aleación modifican el color, la dureza, la resistencia, el punto de fusión y el valor económico de la pieza. Además, constituye un requisito legal en muchos países, donde la normativa exige marcar o sellar las piezas con su ley correspondiente para asegurar la veracidad del contenido metálico y proteger al comprador. En joyería profesional, conocer y controlar la ley es indispensable para formular aleaciones correctas, realizar análisis de calidad del lingote y asegurar que el producto final cumpla con los estándares técnicos y comerciales vigentes.

    Separador
    .row.justify-content-center.z-2
      .col-xl-10
        #t_2_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 2.2 Clases

        p.mb-5 Las clases de leyes se refieren a las formas o sistemas utilizados para expresar la pureza de los metales preciosos, así como a las diferentes categorías de pureza oficialmente aceptadas para oro, plata y platino. A continuación, se presentan de manera estructurada las clases más utilizadas y reconocidas internacionalmente.

    .fullwidth-bg.fullwidth-bg--2
    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Tabla 3.
      span Clases de ley
    .tabla-a.color-secundario.tabla-a--left.z-2
      table
        caption <strong>Fuente:</strong> SENA, 2025.
        thead(style="background-color: #FAF8F4;")
          tr
            th Clase de ley
            th Concepto
            th Ejemplo
            th Usos
        tbody
          tr
            td <strong>Milésimas (‰).</strong>
            td Es la clase de ley más empleada a nivel mundial. Define cuántas partes de metal precioso puro hay por cada 1.000 partes de aleación.
            td 
              ul.checklist
                li Ley 999 ‰:  99,9 % puro.
                li Ley 950 ‰: 95 % puro.
                li Ley 925 ‰: 92,5 % puro.
                li Ley 750 ‰: 75 % puro.
            td 
              ul.checklist
                li Sistema obligatorio en Europa, México, Ecuador y otros países latinoamericanos.
                li Aplicable a oro, plata y platino.
          tr
            td <strong>Kilates (K).</strong>
            td Clase de ley usada solo para el oro, basada en un sistema de 24 partes.
            td               
              ul.checklist
                li 24K: 999 ‰ (oro casi puro).
                li 22K: 916 ‰.
                li 18K: 750 ‰.
                li 14K: 585 ‰.
                li 10K: 417 ‰.
            td 
              ul.checklist
                li América Latina, Estados Unidos, India, Medio Oriente.
          tr
            td <strong>ISO (Norma ISO 9202).</strong>
            td Clase de ley basada en la norma internacional que define leyes mínimas estándar aceptadas mundialmente.
            td               
              ul.checklist
                li <strong>Oro</strong>: 375, 585, 750, 916, 990.
                li <strong>Plata</strong>: 800, 830, 925, 999.
                li <strong>Platino</strong>: 850, 900, 950, 999.
            td
              ul.checklist
                li Tomada como referencia por distintos países para legislar la pureza.
          tr
            td <strong>Ley mínima legal según país.</strong>
            td Estos valores definen la clase de ley mínima que la legislación permite para comercializar joyería.
            td               
              ul.checklist
                li <strong>España</strong>: oro 375 / plata 925 / platino 850.
                li <strong>México</strong>: oro 375 / plata 800 / platino 850.
                li <strong>Ecuador</strong>: oro 750 / plata 800 - 950.
                li <strong>Colombia</strong>: se ajusta al estándar de mercado; oro 375 - 750 / plata 925 / platino 950.
            td
              ul.checklist
                li Estas leyes definen calidades oficiales de comercialización.
          tr
            td <strong>Ley por contrastación o marcaje oficial.</strong>
            td Clase de ley certificada mediante punzones o sellos emitidos por laboratorios autorizados.
            td               
              ul.checklist
                li <strong>Punzón del metal</strong>: indica la ley (ej. 750, 925, 950).
                li <strong>Punzón del fabricante</strong>: identificación del joyero / taller.
                li <strong>Punzón del laboratorio</strong>: certificación oficial de la ley.
            td
              ul.checklist
                li Europa y países con sistema de <em>“Hallmarking”</em>.
          tr
            td <strong>Ley comercial o de mercado.</strong>
            td Clase de ley definida por los estándares más comunes en la industria joyera.
            td               
              ul.checklist
                li Oro 18K (750): estándar de joyería fina.
                li Oro 14K (585): estándar comercial accesible.
                li Plata 925: “plata esterlina”.
                li Platino 950: estándar de alta joyería.
            td
              ul.checklist
                li Esta clase responde a tendencias comerciales y técnicas.
          tr
            td <strong>Ley técnica o funcional.</strong>
            td Clase de ley determinada por las propiedades requeridas en la aleación, según el uso final.
            td               
              ul.checklist
                li Mayor dureza: oro 14K (585).
                li Mayor ductilidad: oro 22K (916).
                li Mayor blancura: aleaciones con paladio o níquel.
                li Mayor resistencia: platino 950.
            td
              ul.checklist
                li Esta clase está muy relacionada con el diseño y la manufactura.

    Separador
    .row.justify-content-center
      .col-xl-10
        #t_2_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 2.3 Determinación

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-8
        p La determinación de la ley es el conjunto de métodos físicos, químicos y analíticos utilizados para identificar el porcentaje exacto de metal precioso contenido en una pieza de joyería. En la fabricación de joyas, conocer con precisión la ley no solo asegura el cumplimiento de normas internacionales, sino que también orienta la selección de materiales adecuados, la formulación de aleaciones específicas y el control de calidad durante todo el proceso productivo.
        p.mb-4.mb-lg-0 Los métodos de determinación de la ley son los siguientes:
      .col-8.col-md-4.col-lg-2
        figure
          img(src="@/assets/curso/temas/tema2/5.svg" alt="Imagen decorativa" data-aos="fade-down")

    div.slider-wrapper.z-2.mb-5
      .bg-fullwidth
      .tarjeta.tarjeta--blanca.p-4.pt-5.z-2.mt-5.mb-3
        SlyderA(tipo="b")
          .row.z-2.justify-content-center.align-items-center
            .col-lg-6
              h4.mb-4 Piedra de toque
              p <strong>Proceso</strong>
              p.mb-0.d-flex.gap-1
                span •
                span Se frota la joya sobre una piedra de toque (basalto o lidita).
              p.mb-0.d-flex.gap-1
                span •
                span Se aplica ácido de prueba según el metal.
              p.d-flex.gap-1
                span •
                span La persistencia o disolución de la marca indica la aproximación de la ley.
              p <strong>Descripción</strong>
              p.mb-0 • Ventajas: rápido, económico.
              p.mb-4.mb-lg-0 • Desventajas: aproximado, no exacto.
            .col-10.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema2/6.png', alt='Imagen de acompañamiento')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-6
              h4.mb-4 Ensayo al fuego (Copelación). Oro y Plata
              p <strong>Proceso</strong>
              p.mb-0.d-flex.gap-1
                span •
                span Se funde la muestra y se separa el metal precioso del plomo en una cúpula de ceniza.
              p • Permite medir la pureza con alta precisión.
              p <strong>Descripción</strong>
              p.mb-0 • Ventajas: método más exacto para oro / plata.
              p.mb-4.mb-lg-0 • Desventajas: destructivo.
            .col-10.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema2/7.png', alt='Imagen de acompañamiento')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-6
              h4.mb-4 Fluorescencia de Rayos X (XRF)
              p <strong>Proceso</strong>
              p.mb-0.d-flex.gap-1
                span •
                span Analiza la composición química de la pieza sin dañarla.
              p.d-flex.gap-1
                span •
                span Proporciona resultados rápidos y precisos.
              p <strong>Descripción</strong>
              p.mb-0 • Ventajas: no destructivo, ideal para joyería terminada.
              p.mb-4.mb-lg-0 • Desventajas: requiere equipo especializado.
            .col-10.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema2/8.png', alt='Imagen de acompañamiento')
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
