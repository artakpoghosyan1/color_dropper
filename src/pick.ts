import {getContrastColor, rgbToHex} from "./utils";

const picker = document.getElementById('picker') as HTMLButtonElement;
const zoomContainer = document.getElementById('zoomContainer') as HTMLDivElement;
const colorLabel = document.getElementById('colorLabel') as HTMLSpanElement;
const zoomCanvas = document.getElementById('zoomCanvas') as HTMLCanvasElement;
const zoomCtx = zoomCanvas.getContext('2d') as CanvasRenderingContext2D;
const selectedColor = document.getElementById('selectedColor') as HTMLSelectElement;

function moveZoomContainer(e: MouseEvent) {
    zoomContainer.style.transform = `translate(${e.pageX - 50}px, ${e.pageY - 50}px)`;
    zoomContainer.style.display = 'block';
}

function manipulateColorLabel(hex: string) {
    colorLabel.textContent = hex;
    colorLabel.style.backgroundColor = hex;
    colorLabel.style.color = getContrastColor(hex);
}

export function pick(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    let isPickerActive = false;

    function pickColor(e: MouseEvent): string {
        const bounds = canvas.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;

        return rgbToHex(ctx.getImageData(x, y, 1, 1).data)
    }

    const handleMouseMove = (e: MouseEvent) => {
        const bounds = canvas.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;
        const zoomLevel = 4;

        zoomCtx.clearRect(0, 0, zoomCanvas.width, zoomCanvas.height);
        zoomCtx.drawImage(canvas, x - 50 / zoomLevel, y - 50 / zoomLevel, 100 / zoomLevel, 100 / zoomLevel, 0, 0, 300, 300);

        moveZoomContainer(e)
        manipulateColorLabel(pickColor(e))
    };

    const handleMouseClick = (e: MouseEvent) => {
        togglePicker();
        zoomContainer.style.display = 'none';
        selectedColor.textContent = pickColor(e);
    };

    const togglePicker = () => {
        isPickerActive = !isPickerActive;

        if (isPickerActive) {
            canvas.addEventListener('mousemove', handleMouseMove);
            canvas.addEventListener('click', handleMouseClick);
        } else {
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('click', handleMouseClick);
            zoomContainer.style.display = 'none';
        }
    };

    picker.addEventListener('click', togglePicker);
}