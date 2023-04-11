<template>
  <main class="mx-auto max-w-5xl px-4 sm:px-10">
    <DemoSection :code="typography">
      <template #heading>Fluid Typography</template>
      <iframe class="h-[23.125rem]" src="/postcss-fluid/example/typography" />
    </DemoSection>

    <DemoSection :code="growingSquare">
      <template #heading>Width and Height</template>
      <iframe class="h-[18rem]" src="/postcss-fluid/example/growing" />
    </DemoSection>

    <DemoSection :code="paddedBox">
      <template #heading>Padding</template>
      <iframe class="h-[18rem]" src="/postcss-fluid/example/padding" />
    </DemoSection>

    <DemoSection :code="positionedBox">
      <template #heading>Position</template>
      <iframe class="h-[14rem]" src="/postcss-fluid/example/position" />
    </DemoSection>

    <DemoSection :code="shrinkingSquare">
      <template #heading>Larger Value on Mobile</template>
      <iframe class="h-[18rem]" src="/postcss-fluid/example/shrinking" />
    </DemoSection>

    <DemoSection :code="boxToCircle">
      <template #heading>Border Radius</template>
      <iframe class="h-[14rem]" src="/postcss-fluid/example/border-radius" />
    </DemoSection>

    <DemoSection :code="fluidGridGap">
      <template #heading>Gap</template>
      <iframe class="h-[20rem]" src="/postcss-fluid/example/grid-gap" />
    </DemoSection>

    <DemoSection :code="fluidBorder">
      <template #heading>Border</template>
      <iframe class="h-[14rem]" src="/postcss-fluid/example/border" />
    </DemoSection>

    <GithubBadge />
  </main>
</template>

<script lang="ts" setup>
const typography = ref(`
div {
  font-size: fluid(18px, 26px, 480px, 720px);
  line-height: fluid(26px, 38px, 480px, 720px);
  letter-spacing: fluid(0, 0.5px, 480px, 720px);
}`)
const growingSquare = ref(`
div {
  width: fluid(40px, 200px, 480px, 720px);
  height: fluid(40px, 200px, 480px, 720px);
}`)
const paddedBox = ref(`
div {
  padding: fluid(4px, 40px, 480px, 720px);
}`)
const positionedBox = ref(`
div {
  position: absolute;
  top: fluid(0px, 80px, 480px, 720px);
  left: fluid(0px, 80px, 480px, 720px);
}`)
const shrinkingSquare = ref(`
div {
  width: fluid(200px, 40px, 480px, 720px);
  height: fluid(200px, 40px, 480px, 720px);
}`)
const boxToCircle = ref(`
div {
  border-radius: fluid(0, 50px, 480px, 720px);
}`)
const fluidGridGap = ref(`
div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: fluid(0, 30px, 480px, 720px);
}`)
const fluidBorder = ref(`
div {
  border: fluid(10px, 20px, 480px, 720px) solid black;
}`)
</script>
