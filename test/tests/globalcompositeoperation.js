export default function globalCompositeOperation(ctx) {
    for (var i = 0; i < 10; i++) {
        ctx.save()
        ctx.lineWidth = 10;
        if (i % 2 == 0) {
            ctx.globalCompositeOperation = "source-over";
            ctx.strokeStyle = '#FF0000';
            ctx.beginPath();
            ctx.moveTo(5, 5 + i * 14);
            ctx.lineTo(140, 5 + i * 14);
        } else {
            ctx.globalCompositeOperation = "destination-out";
            ctx.strokeStyle = '#000';
            ctx.beginPath();
            ctx.moveTo(5 + i * 14, 5);
            ctx.lineTo(5 + i * 14, 140);
        }
        ctx.stroke();
        ctx.restore();
    }
};
