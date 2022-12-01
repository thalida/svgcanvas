export default function globalCompositeOperation(ctx) {
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = '#FD0';
    ctx.fillRect(0, 0, 75, 75);
    ctx.fillStyle = '#6C0';
    ctx.fillRect(75, 0, 75, 75);
    ctx.fillStyle = '#09F';
    ctx.fillRect(0, 75, 75, 75);
    ctx.fillStyle = '#F30';
    ctx.fillRect(75, 75, 75, 75);

    ctx.save()
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = '#000';
    for (var i = 0; i < 10; i++) {
        ctx.lineWidth = 1 + i;
        ctx.beginPath();
        ctx.moveTo(5 + i * 14, 5);
        ctx.lineTo(5 + i * 14, 140);
        ctx.stroke();
    }
    ctx.restore();
};
