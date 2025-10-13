declare module "locomotive-scroll" {
  export type ScrollOptions = object;
  export class LocomotiveScroll {
    constructor(opts: ScrollOptions);
    on(eventName: string, callback: (event: unknown) => void): void;
    scrollTo(target: number | string | HTMLElement, opts?: { offset?: number; duration?: number; easing?: [number, number, number, number] }): void;
    update(): void;
    destroy(): void;
    stop(): void;
    start(): void;
    // more methods/properties…
  }
  export default LocomotiveScroll;
}
