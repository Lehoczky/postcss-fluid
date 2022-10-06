<template>
  <main class="max-w-5xl mx-auto px-10">
    <section>
      <h2>Fluid Typography</h2>
      <CodeBlock :code="typography" />

      <p class="typography">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas vero
        eaque iste sapiente, asperiores non quaerat unde animi pariatur
        dignissimos sunt ex culpa eveniet temporibus odit et ducimus placeat
        soluta. Autem nihil molestiae esse quibusdam rem! Reiciendis quaerat
        nobis, dolor corporis repellat odit ipsam incidunt corrupti provident
        ducimus sunt ab debitis repellendus exercitationem quasi dolore
        laboriosam deleniti libero aperiam. Modi. Sed eius non necessitatibus
        quidem aut mollitia laborum esse fuga! Ipsa voluptatum soluta sunt ex.
        Provident optio laboriosam nobis facilis sit repellendus hic maxime
        neque, voluptates corporis aperiam quas fuga! Incidunt modi, magnam vel
        nesciunt dolores qui perspiciatis consectetur velit architecto
        perferendis iste quibusdam nisi temporibus quod officia dolorem
        reiciendis debitis excepturi animi fugiat. In amet at facilis earum a.
      </p>
    </section>

    <section>
      <h2>Width and Height</h2>

      <div class="flex">
        <CodeBlock :code="growingSquare" />

        <div class="ml-7">
          <div class="growing-square" />
        </div>
      </div>
    </section>

    <section>
      <h2>Padding</h2>

      <div>
        <CodeBlock :code="paddedBox" />
        <div class="padded-box">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          dolore voluptatibus, ex nisi dolorum, veritatis quia sint voluptates
          distinctio odio quis, natus qui dicta corporis autem neque harum?
          Assumenda, voluptatum.
        </div>
      </div>
    </section>

    <section>
      <h2>Position</h2>

      <div class="flex">
        <CodeBlock :code="positionedBox" />

        <div class="ml-7">
          <div class="relative w-full h-12">
            <div class="positioned-box" />
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2>Shrinking value</h2>

      <div class="flex">
        <CodeBlock :code="shrinkingSquare" />

        <div class="ml-7">
          <div class="shrinking-square" />
        </div>
      </div>
    </section>

    <section>
      <h2>Border Radius</h2>

      <div class="flex">
        <CodeBlock :code="boxToCircle" />

        <div class="ml-7">
          <div class="box-to-circle" />
        </div>
      </div>
    </section>

    <section>
      <h2>Gap</h2>

      <div class="flex">
        <CodeBlock :code="fluidGridGap" />

        <div class="ml-7">
          <div class="flex">
            <div class="fluid-grid-gap">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2>Border</h2>

      <div class="flex">
        <CodeBlock :code="fluidBorder" />

        <div class="ml-7">
          <div class="fluid-border" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: "en-US",
  },
  title: "PostCSS Fluid Demo",
  bodyAttrs: {
    class: "bg-base-700 font-poppins text-base-300",
  },
})

const typography = ref(`
div {
  font-size: fluid(18px, 26px, 768px, 1280px);
  line-height: fluid(26px, 38px, 768px, 1280px);
  letter-spacing: fluid(0, 0.5px, 768px, 1280px);
}`)
const growingSquare = ref(`
div {
  width: fluid(40px, 200px, 768px, 1280px);
  height: fluid(40px, 200px, 768px, 1280px);
}`)
const paddedBox = ref(`
div {
  padding: fluid(4px, 40px, 768px, 1280px);
}`)
const positionedBox = ref(`
div {
  position: absolute;
  top: fluid(0px, 80px, 768px, 1280px);
  left: fluid(0px, 80px, 768px, 1280px);
}`)
const shrinkingSquare = ref(`
div {
  width: fluid(200px, 40px, 768px, 1280px);
  height: fluid(200px, 40px, 768px, 1280px);
}`)
const boxToCircle = ref(`
div {
  border-radius: fluid(0, 50px, 768px, 1280px);
}`)
const fluidGridGap = ref(`
div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: fluid(0, 30px, 768px, 1280px);
}`)
const fluidBorder = ref(`
div {
  border: fluid(10px, 20px, 768px, 1280px) solid black;
}`)
</script>

<style scoped>
.typography {
  font-size: fluid(18px, 26px, 768px, 1280px);
  line-height: fluid(26px, 38px, 768px, 1280px);
  letter-spacing: fluid(0, 0.5px, 768px, 1280px);
}

.growing-square {
  width: fluid(40px, 200px, 768px, 1280px);
  height: fluid(40px, 200px, 768px, 1280px);

  @apply bg-box;
}

.padded-box {
  padding: fluid(4px, 40px, 768px, 1280px);
  @apply bg-box;
}

.positioned-box {
  position: absolute;
  top: fluid(0, 80px, 768px, 1280px);
  left: fluid(0, 80px, 768px, 1280px);
  width: 40px;
  min-height: 40px;
  @apply bg-box;
}

.shrinking-square {
  width: fluid(200px, 40px, 768px, 1280px);
  height: fluid(200px, 40px, 768px, 1280px);
  @apply bg-box;
}

.box-to-circle {
  width: 100px;
  height: 100px;
  border-radius: fluid(0, 50px, 768px, 1280px);
  @apply bg-box;
}

.fluid-grid-gap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: fluid(0, 30px, 768px, 1280px);
}

.fluid-grid-gap > * {
  width: 60px;
  height: 60px;
  @apply bg-box;
}

.fluid-border {
  width: 60px;
  height: 60px;
  border: fluid(10px, 20px, 768px, 1280px) solid black;
  @apply bg-box;
}
</style>
