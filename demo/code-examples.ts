export const typography = /*css*/ `
div {
  font-size: fluid(16px, 28px, 480px, 720px);
  line-height: fluid(26px, 38px, 480px, 720px);
  letter-spacing: fluid(0, 0.6px, 480px, 720px);
}

/* Compiled output:
div {
  font-size: clamp(16px, -8px + 5vw, 28px);
  line-height: clamp(26px, 2px + 5vw, 38px);
  letter-spacing: clamp(0px, -1.2px + 0.25vw, 0.6px);
}
*/`

export const growingSquare = /*css*/ `
div {
  width: fluid(50px, 200px, 480px, 720px);
  height: fluid(50px, 200px, 480px, 720px);
}

/* Compiled output:
div {
  width: clamp(50px, -250px + 62.5vw, 200px);
  height: clamp(50px, -250px + 62.5vw, 200px);
}
*/`

export const paddedBox = /*css*/ `
div {
  padding: fluid(4px, 40px, 480px, 720px);
}

/* Compiled output:
div {
  padding: clamp(4px, -68px + 15vw, 40px);
}
*/`

export const positionedBox = /*css*/ `
div {
  position: absolute;
  top: fluid(0px, 60px, 480px, 720px);
  left: fluid(0px, 60px, 480px, 720px);
}

/* Compiled output:
div {
  position: absolute;
  top: clamp(0px, -120px + 25vw, 60px);
  left: clamp(0px, -120px + 25vw, 60px);
}
*/`

export const shrinkingSquare = /*css*/ `
div {
  width: fluid(200px, 50px, 480px, 720px);
  height: fluid(200px, 50px, 480px, 720px);
}

/* Compiled output:
div {
  width: clamp(50px, 500px + -62.5vw, 200px);
  height: clamp(50px, 500px + -62.5vw, 200px);
}
*/`

export const boxToCircle = /*css*/ `
div {
  border-radius: fluid(0, 50px, 480px, 720px);
}

/* Compiled output:
div {
  border-radius: clamp(0px, -100px + 20.8333vw, 50px);
}
*/`

export const fluidGridGap = /*css*/ `
div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: fluid(0, 30px, 480px, 720px);
}

/* Compiled output:
div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(0px, -60px + 12.5vw, 30px);
}
*/`

export const fluidBorder = /*css*/ `
div {
  border: fluid(10px, 22px, 480px, 720px) solid black;
}

/* Compiled output:
div {
  border: clamp(10px, -14px + 5vw, 22px) solid black;
}
*/`
