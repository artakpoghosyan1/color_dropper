import {draw} from "./draw";
import {pick} from "./pick";

window.onload = function() {
    const canvas: HTMLElement | null = document.getElementById('canvas');
    if(canvas) {
        const ctx: CanvasRenderingContext2D | null = (canvas as HTMLCanvasElement).getContext("2d");
        draw(canvas as HTMLCanvasElement, ctx!);
        pick(canvas as HTMLCanvasElement, ctx!);
    }
}