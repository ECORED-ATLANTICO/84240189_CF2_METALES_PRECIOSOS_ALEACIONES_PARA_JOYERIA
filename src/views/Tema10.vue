<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Pruebas de ley de los metales preciosos

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema10/1.png", alt="Imagen decorativa")

    .row.justify-content-center.mb-4
      .col-xl-10(data-aos="fade-down")
        div.banner-text.bg-color-primario-p10
          p.mb-0 Las pruebas de ley son procedimientos analíticos y operativos destinados a determinar la pureza real de un metal precioso en una pieza o muestra: es decir, la proporción de metal fino frente a los demás componentes de la aleación. Estas pruebas son esenciales para certificar el valor comercial, garantizar el cumplimiento normativo y guiar decisiones técnicas (formulación de aleaciones, control de calidad en fundición y marcaje/contrastación).

    .fullwidth-bg.fullwidth-bg--1
    Separador
    .row.justify-content-center.z-2
      .col-xl-10
        #t_10_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 10.1 Concepto
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-6.col-md-4.col-lg-2
        figure
          img(src="@/assets/curso/temas/tema10/2.png" alt="Imagen decorativa" data-aos="fade-down")
      .col-lg-8
        p Una prueba de ley es cualquier método (químico, físico o instrumental) que cuantifica la fracción de metal precioso presente en una muestra, expresada en kilates (K), porcentaje (%) o milésimas (‰). Su finalidad incluye: 

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-md-8.col-lg-6.col-xl-5.mb-4
        .bg-imagen.p-4.px-3.rounded-4
          .row.justify-content-end.align-items-center
            .col-7.py-3
              p.mb-0 Verificar la conformidad con la ley declarada o exigida por la normativa
      .col-md-8.col-lg-6.col-xl-5.mb-4
        .bg-imagen.bg-imagen--2.p-4.px-3.rounded-4
          .row.justify-content-end.align-items-center
            .col-7.py-3
              p.mb-0 Apoyar la formulación de aleaciones y el control de procesos
      .col-md-8.col-lg-6.col-xl-5.mb-4.mb-lg-0
        .bg-imagen.bg-imagen--3.p-4.px-3.rounded-4
          .row.justify-content-end.align-items-center
            .col-7.py-3
              p.mb-0 Aportar evidencia para la venta o revaluación de metales
      .col-md-8.col-lg-6.col-xl-5
        .bg-imagen.bg-imagen--4.p-4.px-3.rounded-4
          .row.justify-content-end.align-items-center
            .col-7.py-3
              p.mb-0 Servir como base para el marcado (punzones / <em>hallmarks</em>). 

    .row.justify-content-center.z-2.align-items-center
      .d-none.d-lg-block.col-lg-1
        figure
          img(src="@/assets/curso/temas/tema10/3.svg" alt="Imagen decorativa" data-aos="fade-up") 
      .col-lg-9
        p.mb-0 Las pruebas pueden ser destructivas (consumen o alteran la muestra) o no destructivas (mantienen la integridad de la pieza), variar en precisión, costo y tiempo de respuesta, y suelen realizarse en talleres para controles rápidos o en laboratorios acreditados para certificación oficial.

    Separador
    .row.justify-content-center.z-2
      .col-xl-10
        #t_10_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 10.2 Tipos

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.z-2.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema10/4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Estas pruebas permiten asegurar que las piezas cumplan con los estándares comerciales, garantizar la calidad en procesos de fabricación y evitar fraudes. En joyería, se usan tanto métodos tradicionales como técnicas instrumentales modernas, cada una con diferentes niveles de precisión y aplicaciones.
        p.mb-0 Los tipos de pruebas de ley utilizadas en metales preciosos son los siguientes:

    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Tabla 12.
      span Tipos de pruebas de ley
    .tabla-a.color-secundario.tabla-a--left.z-2
      table
        caption <strong>Fuente:</strong> SENA, 2025.
        thead(style="background-color: #FAF8F4;")
          tr
            th Tipo de prueba
            th Naturaleza
            th Destructiva / No destructiva
            th Precisión
            th Qué determina
            th Ventajas principales
            th Uso recomendado
        tbody
          tr
            td <strong>Piedra de toque + ácidos.</strong>
            td Químico tradicional.
            td No destructiva (mínimo desgaste).
            td Baja-media.
            td Oro y plata por comparación.
            td Rápido, económico, portátil.
            td Compradores, talleres pequeños, verificación rápida.
          tr
            td <strong>Ensayo al fuego (copelación).</strong>
            td Químico de laboratorio.
            td Destructiva.
            td Muy alta (estándar).
            td Oro y plata con exactitud.
            td Método oficial más preciso.
            td Certificación, peritaje, lingotes.
          tr
            td <strong>XRF (Fluorescencia de rayos X).</strong>
            td Físico instrumental.
            td No destructiva.
            td Alta.
            td Composición superficial.
            td Rápido, exacto, no daña pieza.
            td Joyerías, control de calidad, piezas terminadas.
          tr
            td <strong>ICP-OES / ICP-MS.</strong>
            td Instrumental avanzado.
            td Destructiva.
            td Muy alta.
            td Composición completa (trazas incluidas).
            td Extremadamente preciso, analiza todo.
            td Laboratorios, análisis completo de aleaciones.
          tr
            td <strong>AAS (Absorción Atómica).</strong>
            td Instrumental.
            td Destructiva.
            td Alta.
            td Elementos específicos (Au, Ag, Pt).
            td Método consolidado y confiable.
            td Control químico de aleaciones.
          tr
            td <strong>Testers electrónicos (conductividad).</strong>
            td Físico portátil.
            td No destructiva.
            td Media.
            td Estimación general.
            td Portátiles, fáciles de usar.
            td Cribado rápido y preliminar.

    Separador
    #t_10_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 10.3 Aplicabilidad

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema10/5.png", alt="Imagen decorativa")

    .row.justify-content-center.mb-4
      .col-xl-10(data-aos="fade-down")
        div.banner-text.bg-color-primario-p10
          p.mb-0 Las pruebas de ley son fundamentales para determinar la pureza, composición y valor comercial de diferentes metales preciosos. Se aplican en múltiples sectores debido a que permiten obtener mediciones precisas sobre la cantidad real de metal fino presente en un material, lo que impacta procesos financieros, industriales, artesanales y regulatorios. La aplicabilidad de estas pruebas es amplia y trasciende desde el ámbito minero hasta el de manufactura de bienes de lujo.

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-verde-claro")
      .row(titulo="Sector minero y metalúrgico").justify-content-center.align-items-center
        .col-md-6.mb-4.mb-md-0
          p En minería, las pruebas de ley son esenciales para: 
          ul.checklist
            li.mb-3 Evaluar la calidad del mineral extraído: permiten saber si un yacimiento es económicamente viable.
            li.mb-3 Definir procesos de beneficio: según la ley del mineral, se seleccionan métodos de extracción como cianuración, flotación o fusiones.
            li.mb-3 Controlar la recuperación metalúrgica: se comparan leyes de entrada, cabeza, concentrado y relave.
            li Estimar costos operativos y rentabilidad: directamente relacionados con la cantidad de metal recuperable.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema10/6.png', alt='imagen de acompañamiento')

      .row(titulo="Industria joyera y manufactura de bienes de lujo").justify-content-center.align-items-center
        .col-md-6.mb-4.mb-md-0
          p En el sector joyero, las pruebas de ley son aplicadas para:
          ul.checklist
            li.mb-3 Certificar la pureza de las piezas fabricadas.
            li.mb-3 Cumplir normativas nacionales e internacionales: para marcar aleaciones (ej. 10K, 14K, 18K, 24K en oro).
            li.mb-3 Evitar fraudes comerciales: se detectan adulteraciones o mezclas con metales de menor valor.
            li Establecer precios de compra y venta.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema10/7.png', alt='imagen de acompañamiento')

      .row(titulo="Casas de empeño, comercializadores y entidades financieras").justify-content-center.align-items-center
        .col-md-6.mb-4.mb-md-0
          p Estas instituciones requieren pruebas de ley para:
          ul.checklist
            li.mb-3 Valorar objetos prendarios o transaccionales (joyas, lingotes, monedas).
            li.mb-3 Garantizar transparencia en operaciones de compra y recompra.
            li Reducir riesgo de recibir metales falsificados.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema10/8.png', alt='imagen de acompañamiento')

      .row(titulo="Fabricación de barras, monedas y lingotes certificados").justify-content-center.align-items-center
        .col-md-6.mb-4.mb-md-0
          p Los refinadores utilizan pruebas de ley para: 
          ul.checklist
            li Control de calidad en la fundición y afinado.
            li Certificación de pureza ante entidades internacionales (LBMA, COMEX).
            li Garantizar que los lingotes cumplen estándares de 99.9 % o 99.99 % de pureza
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema10/9.png', alt='imagen de acompañamiento')

      .row(titulo="Control aduanero y regulatorio").justify-content-center.align-items-center
        .col-md-6.mb-4.mb-md-0
          p Las pruebas de ley se aplican para:
          ul.checklist
            li.mb-3 Verificar mercancías que ingresan o salen del país.
            li.mb-3 Combatir contrabando y lavado de activos.
            li Registrar exportaciones de metales refinados o semiprocesados.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema10/10.png', alt='imagen de acompañamiento')

      .row(titulo="Investigación científica y desarrollo de materiales").justify-content-center.align-items-center
        .col-md-6.mb-4.mb-md-0
          p En laboratorios de investigación, las pruebas de ley permiten:
          ul.checklist
            li.mb-3 Caracterizar nuevas aleaciones o materiales avanzados.
            li.mb-3 Estudiar procesos de corrosión, recubrimientos o nanotecnología.
            li Validar técnicas de recuperación de metales tecnológicos (electrónica, baterías, catalizadores).
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema10/11.png', alt='imagen de acompañamiento')

      .row(titulo="Conservación del patrimonio cultural").justify-content-center.align-items-center
        .col-md-6.mb-4.mb-md-0
          p En piezas arqueológicas o históricas, las pruebas de ley ayudan a:
          ul.checklist
            li.mb-3 Determinar la autenticidad de artefactos.
            li.mb-3 Comprender técnicas de manufactura antiguas.
            li Planificar intervenciones de restauración.
          p En este caso, se prefieren métodos no destructivos, como XRF portátil.  
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema10/12.png', alt='imagen de acompañamiento')

      .row(titulo="Industria electrónica y automotriz").justify-content-center.align-items-center
        .col-md-6.mb-4.mb-md-0
          p Aunque menos conocido, los metales preciosos se usan en:
          ul.checklist
            li.mb-3 Componentes electrónicos.
            li.mb-3 Conectores.
            li.mb-3 Catalizadores automotrices.
            li.mb-3 Recubrimientos industriales.
          p Las pruebas de ley permiten:
          li.mb-3 Controlar espesores y pureza de recubrimientos.
          li Validar procesos de recuperación de metales.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema10/13.png', alt='imagen de acompañamiento')

      .row(titulo="Industria de reciclaje y recuperación de metales").justify-content-center.align-items-center
        .col-md-6.mb-4.mb-md-0
          p Las pruebas de ley permiten:
          ul.checklist
            li.mb-3 Analizar chatarra electrónica, industrial o joyera.
            li.mb-3 Clasificar materiales según su valor metálico.
            li Determinar la eficiencia del proceso de refinación.
          p Aquí, XRF e ICP son particularmente útiles.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema10/14.png', alt='imagen de acompañamiento')
</template>

<script>
export default {
  name: 'Tema10',
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
