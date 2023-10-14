<template>
  <div>
    <main class="mx-auto max-w-5xl px-4 sm:px-10">
      <div class="my-[fluid(3.5rem,7rem,30rem,64rem)]">
        <h1>PostCSS Fluid Demo</h1>
      </div>

      <DemoSection :code="typography">
        <template #heading>Fluid Typography</template>
        <DemoFrame class="h-[23.125rem]" src="/example/typography" />
      </DemoSection>

      <DemoSection :code="growingSquare">
        <template #heading>Width and Height</template>
        <DemoFrame class="h-[18rem]" src="/example/growing" />
      </DemoSection>

      <DemoSection :code="paddedBox">
        <template #heading>Padding</template>
        <DemoFrame class="h-[18rem]" src="/example/padding" />
      </DemoSection>

      <DemoSection :code="positionedBox">
        <template #heading>Position</template>
        <DemoFrame class="h-[14rem]" src="/example/position" />
      </DemoSection>

      <DemoSection :code="shrinkingSquare">
        <template #heading>Larger Value on Mobile</template>
        <DemoFrame class="h-[18rem]" src="/example/shrinking" />
      </DemoSection>

      <DemoSection :code="boxToCircle">
        <template #heading>Border Radius</template>
        <DemoFrame class="h-[14rem]" src="/example/border-radius" />
      </DemoSection>

      <DemoSection :code="fluidGridGap">
        <template #heading>Gap</template>
        <DemoFrame class="h-[20rem]" src="/example/grid-gap" />
      </DemoSection>

      <DemoSection :code="fluidBorder">
        <template #heading>Border</template>
        <DemoFrame class="h-[14rem]" src="/example/border" />
      </DemoSection>

      <GithubBadge />
    </main>

    <div class="bg-base-700 flex justify-center p-3 md:hidden">
      <GithubLink>
        <IconGithub />
      </GithubLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  boxToCircle,
  fluidBorder,
  fluidGridGap,
  growingSquare,
  paddedBox,
  positionedBox,
  shrinkingSquare,
  typography,
} from "@/code-examples"
</script>
