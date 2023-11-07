// From https://easings.net/#easeOutCirc
export function circOut(x: number): number {
    return Math.sqrt(1 - Math.pow(x - 1, 2));
}
  