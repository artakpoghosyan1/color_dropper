import {draw} from "./draw";

window.onload = function() {
    const canvas: HTMLElement | null = document.getElementById('canvas');
    if(canvas) {
        const ctx: CanvasRenderingContext2D | null = (canvas as HTMLCanvasElement).getContext("2d");
        draw(canvas as HTMLCanvasElement, ctx!)
    }
}