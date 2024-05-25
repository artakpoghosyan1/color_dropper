import image from './image.jpg';

export function draw(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    const img = new Image();
    const canvasWrapper = document.getElementById('canvasWrapper') as HTMLDivElement;

    function getImageSize(): {width: number, height: number} {
        const imgRatio = img.width / img.height;
        const canvasRatio = canvas.width / canvas.height;
        let drawWidth, drawHeight;

        if (canvasRatio < imgRatio) {
            drawWidth = canvas.width;
            drawHeight = drawWidth / imgRatio;
        } else {
            drawHeight = canvas.height;
            drawWidth = drawHeight * imgRatio;
        }

        return {
            width: drawWidth,
            height: drawHeight
        }
    }

    function drawImage() {
        const {width, height} = getImageSize()

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, width, height);
    }

    function resizeCanvas() {
        canvas.width = canvasWrapper.offsetWidth;
        canvas.height = canvasWrapper.offsetHeight;
        drawImage();
    }

    img.onload = function() {
        resizeCanvas()
    };

    img.src = image;

    window.addEventListener('resize', resizeCanvas);
}