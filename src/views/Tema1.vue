<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Aleaciones

    .row.justify-content-center.align-items-center.mb-5.bg-color-secundario-s5.p-3.p-xl-0
      .col-sm-6.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema1/1.png" alt="Imagen decorativa")
      .col-lg-8
        p.mb-0 En el ámbito de la joyería, las aleaciones constituyen la base material que define las propiedades estéticas, mecánicas y funcionales de las piezas que se elaboran. Comprender su composición, comportamiento y proceso de formulación es esencial para garantizar que los metales preciosos, como el oro, la plata o el platino, alcancen las características de dureza, color, resistencia y trabajabilidad requeridas en los talleres modernos. El abordaje de este tema adquiere especial relevancia, pues permite al aprendiz fortalecer criterios técnicos fundamentados en la metalurgia, la normatividad vigente y las necesidades específicas del cliente, asegurando resultados confiables y de alta calidad en los procesos de fundición y conformado.

    .fullwidth-bg.fullwidth-bg--1
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.1 Concepto

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.z-2
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una aleación es la combinación homogénea de dos o más metales; o de un metal con un elemento no metálico, diseñada para modificar o mejorar las propiedades físicas y químicas del metal base. En joyería, las aleaciones permiten ajustar características como dureza, color, punto de fusión, resistencia al desgaste, maleabilidad y comportamiento durante la fundición y el conformado. Estas proporciones deben establecerse con criterios técnicos precisos y según los estándares de ley vigentes (por ejemplo, quilates y purezas permitidos). se entiende además como un proceso técnico fundamentado en la metalurgia práctica, orientado a satisfacer requerimientos estéticos y funcionales del cliente, garantizando a la vez la estabilidad del material y el cumplimiento normativo en la elaboración de lingotes y piezas finales.

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.2 Aleaciones

    .row.justify-content-center.align-items-center.mb-5.z-2
      .col-lg-11
        p.mb-0 Las aleaciones pueden clasificarse de diversas maneras, dependiendo del criterio técnico que se utilice. En el contexto de la joyería y de los procesos de fundición y conformado, su clasificación permite comprender mejor sus propiedades, comportamiento y aplicaciones. A continuación, se presentan las principales formas de clasificar las aleaciones:
        
      .d-none.d-lg-block.col-lg-1
        figure
          img(src="@/assets/curso/temas/tema1/3.svg" alt="Imagen decorativa" data-aos="fade-down")

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 1.
      span Tipos de aleaciones
    .tabla-a.color-secundario
      table
        caption <strong>Fuente:</strong> SENA, 2025.
        thead(style="background-color: #FAF8F4;")
          tr
            th Criterio de clasificación
            th Categorías
            th(colspan="2") Descripción breve
        tbody
          tr
            td <strong>Según el metal base.</strong>
            td Oro, plata, platino, cobre.
            td(colspan="2") Se define el metal principal que determina pureza, color y valor.
          tr
            td <strong>Según número de elementos.</strong>
            td Binarias, ternarias, complejas.
            td(colspan="2") Se clasifican según la cantidad de metales o elementos presentes.
          tr
            td <strong>Según su función.</strong>
            td Estructurales, decorativas, para fundición, para laminado
            td(colspan="2") Dependen del propósito de uso en joyería y el comportamiento esperado.
          tr
            td <strong>Según comportamiento mecánico.</strong>
            td Duras, blandas.
            td(colspan="2") Clasificación basada en su resistencia, maleabilidad y dureza.
          tr
            td <strong>Según respuesta térmica.</strong>
            td Bajo punto de fusión, alto punto de fusión.
            td(colspan="2") Dependen de la cantidad de energía necesaria para fundirse.
          tr
            td <strong>Según normatividad.</strong>
            td Normalizadas (leyes y quilates), No normalizadas.
            td(colspan="2") Determinadas por estándares legales de pureza o uso experimental.

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.3 Propiedades
  
    img(data-aos="fade-up")(src="@/assets/curso/temas/tema1/4.png", alt="Imagen decorativa")

    .row.justify-content-center.mb-4
      .col-xl-10(data-aos="fade-down")
        div.banner-text.bg-color-primario-p10
          p.mb-0 Las aleaciones presentan una combinación de propiedades físicas, químicas y mecánicas que difieren significativamente de las de los metales puros. Estas propiedades no solo definen su desempeño técnico, sino también su idoneidad para aplicaciones específicas dentro de la joyería. Comprenderlas permite seleccionar la composición adecuada, garantizar la durabilidad de la pieza, conservar el brillo y asegurar que el metal responda correctamente a procesos de deformación y transformación.

    .row.justify-content-center.align-items-center.mb-5.z-2
      .col-lg-10
        p.mb-0 A continuación, se presenta una descripción organizada de las principales propiedades:

    .row.justify-content-center.mb-5.z-2
      .col-lg-10
        h4(data-aos='zoom-in-right')
          span.etiqueta-title Propiedades físicas

    .row.justify-content-center.align-items-stretch.mb-5
      .col-sm-8.col-lg-4.mb-4.mb-lg-0
        .card-propiedad
          figure.card-propiedad__icono(data-aos="fade-up")
            img(src="@/assets/curso/temas/tema1/5.png" alt="Icono")
          h4.card-propiedad__title Densidad
          ul.checklist
            li Determina el peso del metal o aleación.
            li Las aleaciones suelen ser más livianas que el metal puro debido a la mezcla de elementos de menor densidad.
            li En joyería influye en la percepción de calidad y valor.
      .col-sm-8.col-lg-4.mb-4.mb-lg-0
        .card-propiedad
          figure.card-propiedad__icono(data-aos="fade-up")
            img(src="@/assets/curso/temas/tema1/6.png" alt="Icono")
          h4.card-propiedad__title Punto de fusión
          ul.checklist
            li Las aleaciones poseen un rango de fusión, no un punto fijo.
            li Añadir metales como cobre, plata o zinc disminuye la temperatura respecto al oro puro (1064 °C).
      .col-sm-8.col-lg-4
        .card-propiedad
          figure.card-propiedad__icono(data-aos="fade-up")
            img(src="@/assets/curso/temas/tema1/7.png" alt="Icono")
          h4.card-propiedad__title Recuperación
          ul.checklist
            li Generalmente disminuye al alearse.
            li Importante para procesos como soldadura y control de calor en la fundición.

    .row.justify-content-center.mb-5.z-2
      .col-lg-10
        h4(data-aos='zoom-in-right')
          span.etiqueta-title Propiedades mecánicas

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-sm-6.col-lg-4.col-xl-3
        figure(data-aos="fade-up")
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema1/8.png" alt="Imagen decorativa")
      .col-lg-8.col-xl-7
        TabsA.color-terciario
          .tarjeta.bg-color-secundario-s10.p-4.h-100(titulo="Dureza")
            ul.checklist
              li.mb-3 Las aleaciones son más duras que los metales puros.
              li.mb-3 Ejemplo: el oro de 24k es muy blando; el de 18k (oro + plata + cobre) es mucho más resistente.
              li Afecta el rayado, desgaste y durabilidad.
          .tarjeta.bg-color-secundario-s10.p-4.h-100(titulo="Tenacidad")
            ul.checklist
              li.mb-3 Capacidad de absorber energía sin fracturarse.
              li Importante para evitar quiebres durante trabajos de laminación y doblado.
          .tarjeta.bg-color-secundario-s10.p-4.h-100(titulo="Maleabilidad")
            ul.checklist
              li.mb-3 Capacidad de deformación plástica sin romperse.
              li Oro y plata pura son muy maleables, pero las aleaciones reducen esta propiedad dependiendo del metal añadido.
          .tarjeta.bg-color-secundario-s10.p-4.h-100(titulo="Resistencia a la tracción")
            ul.checklist
              li.mb-3 Indica qué tanta fuerza puede soportar antes de romperse.
              li Fundamental en piezas sometidas a tensión, como cadenas.

    .row.justify-content-center.mb-5.z-2
      .col-lg-10
        h4(data-aos='zoom-in-right')
          span.etiqueta-title Propiedades químicas

    .row.justify-content-center.z-2.mb-4.mb-lg-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(data-aos="fade-down")(src="@/assets/curso/temas/tema1/9.png", alt="Imagen decorativa")
          .crd_hover_txt--body.bg-color-primario-p5
            h4.mb-4.text-center Resistencia a la corrosión
            ul.checklist
              li Varía según los elementos usados.
              li <strong>Ejemplo</strong>: el cobre aumenta la corrosión; la plata se empaña; el paladio y el platino mejoran la resistencia química.

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(data-aos="fade-down")(src="@/assets/curso/temas/tema1/10.png", alt="Imagen decorativa")
          .crd_hover_txt--body.bg-color-primario-p5
            h4.mb-4.text-center Afinidad con agentes externos
            ul.checklist
              li Reacción con sulfurados, cloruros o ácidos.
              li Importante para joyas expuestas a cosméticos, cloro, perfume y sudor.

    Separador
    #t_1_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.4 Composición

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema1/11.png", alt="Imagen decorativa")

    .row.justify-content-center.mb-5.z-2
      .col-xl-10(data-aos="fade-down")
        div.banner-text.bg-color-primario-p10
          p.mb-0 La composición de una aleación se refiere a la proporción y tipo de metales que se combinan para obtener un material con propiedades específicas. En joyería, esta composición es cuidadosamente seleccionada para equilibrar factores como dureza, color, maleabilidad, resistencia al desgaste y cumplimiento de estándares de ley (quilates o milésimas).

    .row.justify-content-center.align-items-center.mb-5.z-2
      .col-10.col-sm-6.col-lg-2
        figure(data-aos="fade-up")
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema1/12.png" alt="Imagen decorativa")
      .col-lg-8
        p.mb-0 En metales preciosos (como el oro, la plata y el platino) la aleación es imprescindible, ya que los metales puros suelen ser demasiado blandos para fabricar joyas duraderas. Al combinarse con metales complementarios (cobre, plata, zinc, paladio, níquel, etc.), se obtienen composiciones que mejoran notablemente el comportamiento del material durante fundición, laminado, trefilado, soldadura y uso final. 

    .row.justify-content-center.mb-5.z-2
      .col-lg-8
        .p-4.rounded-4.bg-color-primario-p10
          p.mb-0.text-center <strong>Metales base preciosos</strong>. Estos son los elementos principales y de mayor proporción:

    div.slider-wrapper.z-2.mb-5
      .bg-fullwidth
      .tarjeta.tarjeta--blanca.p-4.pt-5.z-2.mt-5.mb-3
        SlyderA(tipo="b")
          .row.z-2.justify-content-center.align-items-center
            .col-lg-6
              h4.mb-4 Oro (Au)
              p <strong>Características</strong>
              p Muy maleable, resistente a la corrosión, color amarillo característico.
              p <strong>Uso en aleaciones</strong>
              p.mb-4.mb-lg-0 Base para aleaciones 24k, 18k, 14k, 10k; permite diversos colores.
            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema1/13.png', alt='Imagen de acompañamiento')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-6
              h4.mb-4 Plata (Ag)
              p <strong>Características</strong>
              p Excelente conductividad, brillante, maleable.
              p <strong>Uso en aleaciones</strong>
              p.mb-4.mb-lg-0 Utilizada en aleaciones .999, .950, .925 (esterlina).
            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema1/14.png', alt='Imagen de acompañamiento')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-6
              h4.mb-4 Platino (Pt)
              p <strong>Características</strong>
              p Muy denso, resistente y de color blanco natural.
              p <strong>Uso en aleaciones</strong>
              p.mb-4.mb-lg-0 Aleaciones al 95% o 90% para joyería de alta gama.
            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema1/15.png', alt='Imagen de acompañamiento')

    .row.justify-content-center.mb-5.z-2
      .col-lg-8
        .p-4.rounded-4.bg-color-primario-p10
          p.mb-0.text-center <strong>Metales secundarios o de aporte</strong>. Estos metales se añaden para modificar color, dureza, fusión y comportamiento tecnológico.

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 2.
      span metales secundarios utilizados en aleaciones.
    .tabla-a.color-secundario
      table
        caption <strong>Fuente:</strong> SENA, 2025.
        thead(style="background-color: #FAF8F4;")
          tr
            th(style="text-align: center") Metal
            th(colspan="2") Función en aleaciones
            th(colspan="2") Ejemplo en joyería
        tbody
          tr
            td(style="text-align: center") <strong>Cobre (Cu).</strong>
            td(colspan="2") Aumenta dureza y resistencia; aporta tonos rojizos.
            td(colspan="2") Oro rosa, plata 925.
          tr
            td(style="text-align: center") <strong>Plata (Ag).</strong>
            td(colspan="2") Aclara el color y mejora la fluidez.
            td(colspan="2") Oro amarillo y oro verde.
          tr
            td(style="text-align: center") <strong>Zinc (Zn).</strong>
            td(colspan="2") Mejora fluidez, disminuye temperatura de fusión.
            td(colspan="2") Oro 10k - 18k para fundición.
          tr
            td(style="text-align: center") <strong>Níquel (Ni).</strong>
            td(colspan="2") Blanqueador del oro; da dureza.
            td(colspan="2") Oro blanco (aunque puede causar alergias).
          tr
            td(style="text-align: center") <strong>Paladio (Pd).</strong>
            td(colspan="2") Blanqueador premium del oro; mayor pureza y resistencia.
            td(colspan="2") Oro blanco de alta gama.
          tr
            td(style="text-align: center") <strong>Iridio / Rutenio (Ir/Ru).</strong>
            td(colspan="2") Refinadores de grano en platino.
            td(colspan="2") Platino 950.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
