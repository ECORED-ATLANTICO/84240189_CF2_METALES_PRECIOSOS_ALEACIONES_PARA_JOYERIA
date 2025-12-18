<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Fundición de metales

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema5/1.png", alt="Imagen decorativa")

    .row.justify-content-center.mb-4
      .col-xl-10(data-aos="fade-down")
        div.banner-text.bg-color-primario-p10
          p.mb-0  La fundición de metales constituye uno de los procesos fundamentales en la elaboración de piezas de joyería, pues permite transformar los metales preciosos desde su estado sólido hasta una forma líquida que pueda ser vaciada en moldes y posteriormente trabajada con precisión. Este procedimiento exige el control riguroso de variables como temperatura, pureza del material, tiempo de calentamiento y tipo de molde, ya que cualquier variación puede influir en la calidad, resistencia y acabado de la pieza final.

    p En este capítulo se abordan las técnicas, las condiciones y los puntos de fusión de los metales.

    Separador
    #t_5_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.1 Concepto

    .row.justify-content-center.align-items-center.z-2
      .col-10.col-md-6.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema5/2.png" alt="Imagen decorativa" data-aos="fade-down")
      .col-lg-8
        p La fundición de metales es el proceso metalúrgico mediante el cual un metal o aleación es calentado hasta su punto de fusión, llevado a estado líquido y posteriormente vaciado en un molde que define su forma inicial. Este proceso incluye etapas como la preparación del metal, el calentamiento controlado, la eliminación de impurezas, el vaciado y la solidificación dentro del molde. 
        .p-4.bg-arena.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-10
              p.mb-0 En joyería, la fundición implica considerar características específicas de cada metal, la fluidez del material, la compatibilidad con los moldes y la estabilidad térmica del sistema para garantizar un resultado limpio, homogéneo y libre de defectos. Es un procedimiento técnico que combina conocimientos de metalurgia, manejo de equipos de alta temperatura y técnicas de moldeo para obtener piezas o lingotes que cumplen con estándares estéticos y de calidad.
            .d-none.d-lg-block.col-lg-2
              figure
                img(src="@/assets/curso/temas/tema5/3.svg" alt="Imagen decorativa" data-aos="fade-down")

    Separador
    #t_5_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.2 Técnicas

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-10.col-md-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema5/4.png" alt="Imagen decorativa" data-aos="fade-down")
      .col-lg-8
        p El tipo de técnica empleada depende del diseño de la pieza, el metal utilizado, la precisión requerida y el nivel tecnológico del taller. Cada técnica controla distintas variables como presión, gravedad, vacío o fuerza centrífuga para asegurar que el metal fluya adecuadamente dentro del molde y reproduzca fielmente los detalles de la pieza.
        p.mb-0 Estas técnicas constituyen la base de procesos como la elaboración de lingotes, la fundición de aleaciones, la creación de piezas seriadas y la producción artesanal o industrial de joyería

    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Tabla 4.
      span Técnicas de fundición
    .tabla-a.color-secundario.tabla-a--left.z-2
      table
        caption <strong>Fuente:</strong> SENA, 2025.
        thead(style="background-color: #FAF8F4;")
          tr
            th Técnica
            th Concepto
            th Ventajas
            th Desventajas
            th Usos más comunes en joyería
        tbody
          tr
            td <strong>Fundición por gravedad.</strong>
            td El metal fundido se vierte directamente en el molde aprovechando únicamente la fuerza de la gravedad.
            td Simple, económica, no requiere maquinaria compleja.
            td No es adecuada para piezas muy delgadas o detalles finos. Riesgo de porosidad.
            td Lingotes, piezas gruesas, componentes simples.
          tr
            td <strong>Fundición centrífuga.</strong>
            td El molde gira a gran velocidad, impulsando el metal hacia el interior por fuerza centrífuga.
            td Relleno uniforme, ideal para detalles finos, reduce porosidades.
            td Requiere equipo especializado; riesgo si no se balancea bien.
            td Anillos, piezas con detalles, microcomponentes.
          tr
            td <strong>Fundición al vacío.</strong>
            td Se usa vacío para succionar o atraer el metal fundido hacia el molde.
            td Excelente precisión, mínimo atrapamiento de aire, alta calidad.
            td Equipos costosos; requiere mantenimiento técnico.
            td Piezas complejas, joyería fina, micro fusión.
          tr
            td <strong>Fundición directa (soplete).</strong>
            td El metal se funde y se solidifica de forma continua para obtener barras o lingotes uniformes.
            td Homogeneidad, eficiencia productiva.
            td Limitada a formas simples; se usa más para preparación de material que para joyería final.
            td Se usa más para preparación de material que para joyería final. Lingotes para laminado, alambres, chapas.

    .fullwidth-bg.fullwidth-bg--1
    Separador
    .row.justify-content-center.z-2
      .col-xl-10
        #t_5_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 5.3 Puntos de fusión de metales

    .row.justify-content-center.align-items-center.factores-slider.z-2.mb-5
      .col-10.col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema5/5.png" alt="Imagen decorativa" data-aos="fade-down")
      .col-lg-9.col-xl-7
        p.mb-0 El punto de fusión de un metal es la temperatura específica en la cual el material pasa del estado sólido al estado líquido sin modificar su composición química. En joyería, este valor es fundamental porque determina el comportamiento del metal al momento de fundirlo, su respuesta térmica, la fluidez al vaciarlo en un molde y la compatibilidad entre distintos elementos en la elaboración de aleaciones. Cada metal precioso posee un punto de fusión característico, influido por su pureza, la presencia de impurezas y la proporción de otros metales cuando forma una aleación.

    .row.justify-content-center.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4.z-2
          h5 Tabla 5.
          span Puntos de fusión de metales usados en joyería
        .tabla-a.color-secundario.tabla-a--left.z-2
          table
            caption <strong>Fuente:</strong> SENA, 2025.
            thead(style="background-color: #FAF8F4;")
              tr
                th Metal
                th Símbolo
                th Punto de fusión (° C)
                th(colspan="2") Usos en joyería
            tbody
              tr
                td Oro puro (24K).
                td Au
                td 1.064 ° C
                td(colspan="2") Base para aleaciones, joyería fina, lingotes.
              tr
                td Plata pura.
                td Ag
                td 962 ° C
                td(colspan="2") Joyería, aleaciones .925, piezas grandes.
              tr
                td Platino.
                td Pt
                td 1.768 ° C
                td(colspan="2") Alta joyería, piezas premium, monturas.
              tr
                td Paladio.
                td Pd 
                td 1.554 ° C
                td(colspan="2") Oro blanco, piezas resistentes y ligeras.
              tr
                td Cobre.
                td Cu
                td 1.085 ° C
                td(colspan="2") Aleaciones de oro y plata, refuerzo estructural.
              tr
                td Rodio.
                td Rh
                td 1.964 ° C
                td(colspan="2") Baños de recubrimiento, acabados brillantes.
              tr
                td Níquel.
                td Ni
                td 1.455 ° C
                td(colspan="2") Oro blanco (en desuso por alergias), endurecedor.
              tr
                td Zinc.
                td Zn
                td 419 ° C
                td(colspan="2") Aleaciones de plata y metales base.
              tr
                td Estaño.
                td Sn
                td 232 ° C
                td(colspan="2") Soldaduras suaves.
              tr
                td Aluminio.
                td Al
                td 660 ° C
                td(colspan="2") Joyería alternativa, piezas ligeras.

    Separador
    .row.justify-content-center.z-2
      .col-xl-10
        #t_5_4.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 5.4. Temperatura en metales para joyería

    .row.justify-content-center.z-2
      .col-xl-10
        p La temperatura es un parámetro fundamental en los procesos de joyería, ya que de ella dependen la fundición correcta de los metales preciosos, la calidad de las soldaduras, el ciclo de quemado de la cera perdida, la durabilidad de la pieza y la seguridad del joyero. El dominio de la temperatura permite controlar:

    .row.justify-content-center.align-items-stretch.z-2.mb-3
      .col-md-6.col-xl-4.mb-3.mb-md-0
        .rounded-5.p-4.py-3.bg-color-primario-p10.h-100
          .row.align-items-center.justify-content-center
            .col-2
              figure
                img.w-46(src="@/assets/curso/temas/tema5/6.svg" alt="Imagen decorativa" data-aos="fade-down")
            .col-9
              p.mb-0 <strong>Fluidez del metal fundido.</strong>
      .col-md-6.col-xl-4
        .rounded-5.p-4.py-3.bg-color-primario-p10.h-100
          .row.align-items-center.justify-content-center
            .col-2
              figure
                img.w-46(src="@/assets/curso/temas/tema5/7.svg" alt="Imagen decorativa" data-aos="fade-down")
            .col-9
              p.mb-0 <strong>Oxidación o limpieza de superficie.</strong>
    .row.justify-content-center.align-items-stretch.z-2.mb-3
      .col-md-6.col-xl-4.mb-3.mb-md-0
        .rounded-5.p-4.py-3.bg-color-primario-p10.h-100
          .row.align-items-center.justify-content-center
            .col-2
              figure
                img.w-46(src="@/assets/curso/temas/tema5/8.svg" alt="Imagen decorativa" data-aos="fade-down")
            .col-9
              p.mb-0 <strong>Soldadura correcta según el tipo de metal.</strong>
      .col-md-6.col-xl-4
        .rounded-5.p-4.py-3.bg-color-primario-p10.h-100
          .row.align-items-center.justify-content-center
            .col-2
              figure
                img.w-46(src="@/assets/curso/temas/tema5/9.svg" alt="Imagen decorativa" data-aos="fade-down")
            .col-9
              p.mb-0 <strong>Evitar sobrecalentamiento.</strong>
    .row.justify-content-center.align-items-stretch.z-2.mb-5
      .col-md-6.col-xl-4.mb-3.mb-md-0
        .rounded-5.p-4.py-3.bg-color-primario-p10.h-100
          .row.align-items-center.justify-content-center
            .col-2
              figure
                img.w-46(src="@/assets/curso/temas/tema5/10.svg" alt="Imagen decorativa" data-aos="fade-down")
            .col-9
              p.mb-0 <strong>Evitar porosidades o granulación.</strong>
      .col-md-6.col-xl-4
        .rounded-5.p-4.py-3.bg-color-primario-p10.h-100
          .row.align-items-center.justify-content-center
            .col-2
              figure
                img.w-46(src="@/assets/curso/temas/tema5/11.svg" alt="Imagen decorativa" data-aos="fade-down")
            .col-9
              p.mb-0 <strong>Calidad final de la pieza.</strong>

    .row.justify-content-center.z-2.mb-5
      .col-xl-10
        p Ahora bien, cada proceso de joyería requiere un rango de temperatura seguro y estable. A continuación, se relacionan los principales:  

    .row.justify-content-center.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4.z-2
          h5 Tabla 6.
          span Rangos de temperatura de fundición en metales para joyería.
        .tabla-a.color-secundario.tabla-a--left.z-2
          table
            caption <strong>Fuente:</strong> SENA, 2025.
            thead(style="background-color: #FAF8F4;")
              tr
                th Metal / Aleación
                th Rango típico de fundición
            tbody
              tr
                td Oro 24K.
                td 1060 - 1100 °C.
              tr
                td Oro 18k amarillo.
                td 940 - 980 °C.
              tr
                td Oro 18k blanco.
                td 950 - 1080 °C (por níquel o paladio).
              tr
                td Plata 999 (fina).
                td 960 - 1000 °C.
              tr
                td Plata 925 (esterlina).
                td 890 - 940 °C.
              tr
                td Latón.
                td 950 - 1000 °C.
              tr
                td Bronce.
                td 900 - 950 °C.

    Separador
    #t_5_5.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.5. Llamas oxidantes y reductoras

    p.mb-5 El control del tipo de llama es fundamental para garantizar soldaduras limpias, fundiciones estables y evitar daños en metales y aleaciones. Las llamas se clasifican según la relación entre el gas combustible y el oxígeno, lo cual determina su comportamiento químico.

    TabsA.color-acento-contenido
      .tarjeta.p-4(titulo="Llama oxidante")
        .row.justify-content-center.align-items-center
          .col-lg-7
            p Es una llama donde hay exceso de oxígeno respecto al gas combustible. Este exceso de oxígeno aumenta la capacidad de la llama para oxidar los metales.
            <strong>Descripción</strong>
            p.mb-0 Color: azul muy brillante, con un cono interno más corto y puntiagudo.
            p.mb-0 Sonido: más ruidosa, “silba” ligeramente.
            p.mb-0 Temperatura: muy alta, más caliente que la llama neutra.
            p Efecto químico: favorece la oxidación de las superficies metálicas.
            <strong>Aplicación en joyería</strong>
            p.mb-0 Limpieza de herramientas metálicas por oxidación superficial.
            p.mb-0 Cortes rápidos en metales.
            p.mb-0 Temperatura: muy alta, más caliente que la llama neutra.
            p En joyería fina casi no se recomienda, ya que puede dañar el oro y la plata.
          .col-sm-6.col-lg-5
            figure
              img(src="@/assets/curso/temas/tema5/13.png" alt="Imagen decorativa" data-aos="fade-down")
      .tarjeta.p-4(titulo="Llama oxidante")
        .row.justify-content-center.align-items-center
          .col-lg-7
            p Es una llama donde hay exceso de gas combustible y menor proporción de oxígeno. Tiene la capacidad de reducir óxidos en la superficie del metal.
            <strong>Descripción</strong>
            p.mb-0 Color: azul suave o ligeramente amarilloso.
            p.mb-0 Cono interno: largo, menos definido.
            p.mb-0 Menos ruidosa que la oxidante.
            p.mb-0 Temperatura: alta, pero más estable que la oxidante.
            p Efecto químico: La llama limpia y evita formación de óxidos.
            <strong>Aplicación en joyería</strong>
            p.mb-0 Soldadura de oro y plata.
            p.mb-0 Fundición de metales preciosos.
            p.mb-0 Recalentamiento para recocido.
            p Trabajo de metales sensibles a la oxidación.
          .col-sm-6.col-lg-5
            figure
              img(src="@/assets/curso/temas/tema5/14.png" alt="Imagen decorativa" data-aos="fade-down")


</template>

<script>
export default {
  name: 'Tema5',
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
