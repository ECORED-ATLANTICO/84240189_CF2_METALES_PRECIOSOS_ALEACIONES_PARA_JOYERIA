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

    .fullwidth-bg.fullwidth-bg--1
    Separador
    .row.justify-content-center.z-2
      .col-xl-10
        #t_4_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 4.1 Descripción

    .row.justify-content-center.align-items-center.z-2
      .col-10.col-sm-6.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up", src="@/assets/curso/temas/tema4/2.png", alt="Imagen decorativa")
      .col-lg-6
        p.mb-0 En los procesos de fundición para joyería, tanto los equipos como las herramientas cumplen funciones esenciales orientadas a transformar metales preciosos (como oro, plata y sus aleaciones), desde su estado sólido hasta una forma líquida que pueda ser vaciada en moldes. Estos implementos permiten controlar variables críticas del proceso: temperatura, tiempo, pureza del metal, presión y movimiento del vaciado. De manera general, los equipos son dispositivos mecánicos, térmicos o eléctricos que proporcionan la energía necesaria para fundir o vaciar el metal, mientras que las herramientas son objetos manuales utilizados para manipular, sostener o intervenir en el metal y el molde en distintas fases del procedimiento. Ambos son imprescindibles para garantizar calidad, precisión, repetibilidad y seguridad en los talleres joyeros, tanto artesanales como industriales.

    Separador
    .row.justify-content-center.z-2
      .col-xl-10
        #t_4_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 4.2 Clasificación

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-6
        p La clasificación de los equipos y herramientas para la fundición en joyería se organiza según su función y nivel de intervención dentro del proceso. Los equipos se caracterizan por ser sistemas técnicos que permiten generar y controlar las condiciones necesarias para fundir y vaciar los metales, mientras que las herramientas corresponden a implementos manuales utilizados para manipularlos de manera segura y precisa durante cada etapa del trabajo. Esta distinción facilita comprender el rol que cumple cada elemento, optimiza la organización del taller y contribuye a garantizar tanto la calidad del producto final como la seguridad en las operaciones de fundición.
        p.mb-4.mb-lg-0 Entre los equipos tenemos lo siguiente:
      .col-10.col-sm-6.col-lg-4
        figure
          img(data-aos="fade-up", src="@/assets/curso/temas/tema4/3.png", alt="Imagen decorativa")
        
    TabsB.color-acento-contenido.z-2.mb-4
      .py-4.py-md-5(titulo="Horno de fundición" :icono="require('@/assets/curso/temas/tema4/21.svg')")
        .row.align-items-center.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            h4.mb-4 Horno de fundición
            p.mb-4 Equipo térmico diseñado para elevar la temperatura del metal por encima de su punto de fusión.
            p.mb-4 <strong>Funciones clave</strong>: controlar temperatura, evitar impurezas, fundir cantidades pequeñas o medianas de metal.
            p.mb-1 <strong>Tipos.</strong>
            ul.checklist
              li Eléctrico (precisión y estabilidad).
              li De gas (calentamiento rápido).
              li De inducción (pureza y eficiencia energética).
          .col-10.col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema4/4.png', alt='Imagen de acompañamiento')

      .py-4.py-md-5(titulo="Máquina centrífuga de fundición" :icono="require('@/assets/curso/temas/tema4/22.svg')")
        .row.align-items-center.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            h4.mb-4 Máquina centrífuga de fundición
            p.mb-4 Aprovecha la fuerza centrífuga para introducir el metal fundido dentro del molde.
            p.mb-4 <strong>Aplicación</strong>: piezas con detalles finos, joyería artesanal y semiindustrial.
            p.mb-4 <strong>Ventaja</strong>: velocidad de llenado y mínima porosidad.
          .col-10.col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema4/5.png', alt='Imagen de acompañamiento')

      .py-4.py-md-5(titulo="Máquina de fundición al vacío" :icono="require('@/assets/curso/temas/tema4/23.svg')")
        .row.align-items-center.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            h4.mb-4 Máquina de fundición al vacío
            p.mb-4 Equipo que crea un ambiente de vacío en el molde para facilitar la entrada del metal.
            p.mb-4 <strong>Uso</strong>: joyería de alta precisión y piezas complejas.
            p.mb-4 <strong>Ventajas</strong>: evita burbujas, mejora definición, aumenta calidad superficial.
          .col-10.col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema4/26.png', alt='Imagen de acompañamiento')

      .py-4.py-md-5(titulo="Mezcladora y cámara de vacío para yeso refractario" :icono="require('@/assets/curso/temas/tema4/24.svg')")
        .row.align-items-center.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            h4.mb-4 Aparato que mezcla el yeso y elimina burbujas para crear moldes uniformes.
            p.mb-4 <strong>Rol</strong>: evita fallas en el molde, asegura detalles nítidos y repele el vapor atrapado.
          .col-10.col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema4/6.png', alt='Imagen de acompañamiento')

      .py-4.py-md-5(titulo="Pirómetro o termómetro de alta temperatura" :icono="require('@/assets/curso/temas/tema4/25.svg')")
        .row.align-items-center.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            h4.mb-4 Pirómetro o termómetro de alta temperatura
            p.mb-4 Instrumento electrónico para medir el calor del metal y asegurar que alcanza la temperatura correcta antes del vaciado.
          .col-10.col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema4/7.png', alt='Imagen de acompañamiento')

    .row.align-items-center.z-2.mb-4
      .col-2.col-lg-1
        figure
          img(src='@/assets/curso/temas/tema4/8.svg', alt='Imagen de acompañamiento')
      .col-10.col-lg-9
        p.mb-0 Las herramientas manuales son la siguientes: 

    figure
      img.mb-4(src='@/assets/curso/temas/tema4/9.png', alt='Imagen de acompañamiento' data-aos="fade-down")

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-verde-claro")
      .row(titulo="Crisol").justify-content-around.align-items-center
        .col-md-6.col-lg-5.mb-4.mb-md-0
          p.mb-0 Recipiente refractario donde se coloca el metal para fundirlo.
          p Materiales: grafito, carburo de silicio, cerámica.
          p Características: resistencia térmica, durabilidad, conductividad.
        .col-10.col-sm-6.col-lg-4.col-xl-3
          figure
            img(src='@/assets/curso/temas/tema4/10.png', alt='imagen de acompañamiento')

      .row(titulo="Pinzas y tenazas térmicas").justify-content-around.align-items-center
        .col-md-6.col-lg-5.mb-4.mb-md-0
          p Permiten manipular el crisol y objetos calientes durante la fundición y el vaciado.
        .col-10.col-sm-6.col-lg-4.col-xl-3
          figure
            img(src='@/assets/curso/temas/tema4/11.png', alt='imagen de acompañamiento')

      .row(titulo="Soplete").justify-content-around.align-items-center
        .col-md-6.col-lg-5.mb-4.mb-md-0
          p Genera llama directa para calentar metales en cantidades pequeñas o apoyar procesos de soldadura y fundición artesanal.
        .col-10.col-sm-6.col-lg-4.col-xl-3
          figure
            img(src='@/assets/curso/temas/tema4/12.png', alt='imagen de acompañamiento')

      .row(titulo="Ladrillo o bloque refractario").justify-content-around.align-items-center
        .col-md-6.col-lg-5.mb-4.mb-md-0
          p.mb-0 Superficie resistente a altas temperaturas donde se apoya el crisol o se realizan fundiciones directas.
        .col-10.col-sm-6.col-lg-4.col-xl-3
          figure
            img(src='@/assets/curso/temas/tema4/13.png', alt='imagen de acompañamiento')

      .row(titulo="Guantes, careta y delantal térmico").justify-content-around.align-items-center
        .col-md-6.col-lg-5.mb-4.mb-md-0
          p.mb-0 Equipos de protección indispensables para operar de forma segura con metales fundidos.
        .col-10.col-sm-6.col-lg-4.col-xl-3
          figure
            img(src='@/assets/curso/temas/tema4/14.png', alt='imagen de acompañamiento')

      .row(titulo="Balanza de precisión").justify-content-around.align-items-center
        .col-md-6.col-lg-5.mb-4.mb-md-0
          p.mb-0 Se utiliza para pesar metales y cálculos exactos de las aleaciones.
        .col-10.col-sm-6.col-lg-4.col-xl-3
          figure
            img(src='@/assets/curso/temas/tema4/15.png', alt='imagen de acompañamiento')

      .row(titulo="Herramientas de manipulación y corte").justify-content-around.align-items-center
        .col-md-6.col-lg-5.mb-4.mb-md-0
          p <strong>Alicates</strong>: para doblar, sujetar y cortar metal o alambre. Existen varios tipos, como los de punta de cadena o punta redonda.
          p <strong>Sierras de joyero</strong>: con hojas finas, permiten hacer cortes precisos y detallados en láminas de metal.
          p <strong>Limas y limatones</strong>: para suavizar bordes, desbastar y dar forma a superficies de metales y otros materiales.
          p <strong>Pinzas</strong>: ideales para manipular piezas pequeñas y delicadas sin dañarlas.
          p <strong>Martillos y mazos</strong>: se usan para forjar, repujar y dar forma a las piezas.
          p <strong>Punzones</strong>: para marcar, perforar y realizar detalles en el metal.
        .col-md-3
          figure
            img(src='@/assets/curso/temas/tema4/16.png', alt='imagen de acompañamiento')

    Separador
    #t_4_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.3 Mantenimiento

    .row.justify-content-center.z-2.mb-5.align-items-center
      .col-10.col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src="@/assets/curso/temas/tema4/17.png", alt="Imagen decorativa")
      .col-lg-9.col-xl-7
        p El mantenimiento de los equipos y herramientas utilizados en los procesos de fundición es esencial para asegurar la continuidad operativa del taller, la calidad de las piezas producidas y la seguridad del personal. Debido a que estos elementos trabajan bajo condiciones de alta temperatura, exposición a metales fundidos y uso constante, requieren rutinas sistemáticas que permitan prevenir fallas, prolongar su vida útil y mantener un funcionamiento estable.
        .p-4.bg-arena.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-9
              p.mb-0 El mantenimiento se estructura en dos grandes enfoques: preventivo, que contempla las acciones periódicas para evitar deterioros, y correctivo, que se aplica cuando ya se ha presentado una falla o desgaste significativo. Ambos enfoques son indispensables para garantizar que los procesos de fundición se realicen bajo parámetros confiables y con los estándares técnicos requeridos en joyería.
            .col-lg-3.d-none.d-lg-block
              figure
                img(src="@/assets/curso/temas/tema4/18.svg" alt="Imagen decorativa" data-aos="fade-down")

    .row.justify-content-center.mb-4.z-2
      .col-lg-10
        h4(data-aos='zoom-in-right')
          span.etiqueta-title Mantenimiento preventivo

    .row.justify-content-center.z-2
      .col-lg-10
        p.mb-4 El mantenimiento preventivo está orientado a realizar inspecciones y cuidados periódicos que eviten daños mayores. En los equipos y herramientas de fundición incluye:

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span Actividades del mantenimiento preventivo
        img.mb-2.d-sm-none(data-aos="fade-up", src='@/assets/curso/temas/tema4/19-mob.svg', alt='La figura muestra las actividades que se deben realizar dentro del marco del mantenimiento preventivo en equipos de fundición.')
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src='@/assets/curso/temas/tema4/19.svg', alt='La figura muestra las actividades que se deben realizar dentro del marco del mantenimiento preventivo en equipos de fundición.')
        figcaption <strong>Fuente:</strong> SENA, 2025

    .row.justify-content-center.mb-4.z-2
      .col-lg-10
        h4(data-aos='zoom-in-right')
          span.etiqueta-title Mantenimiento correctivo

    .row.justify-content-center.z-2
      .col-lg-10
        p.mb-4 El mantenimiento correctivo interviene cuando se presenta una falla o daño que afecta el funcionamiento del equipo o herramienta. Incluye acciones como:

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Figura 3.
      span Actividades del mantenimiento correctivo 
    img.mb-2.d-sm-none(data-aos="fade-down", src='@/assets/curso/temas/tema4/20-mob.svg', alt='La figura muestra las acciones que hacen parte del mantenimiento preventivo en equipos de fundición.')
    img.mb-2.d-none.d-sm-block(data-aos="fade-down", src='@/assets/curso/temas/tema4/20.svg', alt='La figura muestra las acciones que hacen parte del mantenimiento preventivo en equipos de fundición.')
    figcaption <strong>Fuente:</strong> SENA, 2025

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
