import React from 'react';
import { useEffect, useState } from 'react';

export default function Diagram() {
    const [data, setData] = useState([10, 14, 2, 12, 15]);
    const [colors] = useState(["#fde23e", "#f16e23", "#57d9ff", "#937edd", "#57d9ff", "#f67e88"]);

    const getRandomArray = () => {
        const length = Math.floor(Math.random() * 5 + 5);
        const array = [];
        for (let i = 0; i < length; i++) {
            array.push(Math.floor(Math.random() * 10));
        }
        setData(array);
    }

    const drawPie = (canvas, data, colors) => {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const draw = () => {
            let total_value = 0;
            let color_index = 0;
            for (let item of data) {
                let value = item;
                total_value += value;
            }
            let start_angle = 0;
            for (let item of data) {
                let value = item;
                let slice_angle = 2 * Math.PI * value / total_value;

                const drawPieSlice = (ctx, centerX, centerY, radius, startAngle, endAngle, color) => {
                    ctx.fillStyle = color;
                    ctx.beginPath();
                    ctx.moveTo(centerX, centerY);
                    ctx.arc(centerX, centerY, Math.random() * radius, startAngle, endAngle);
                    ctx.closePath();
                    ctx.fill();
                }

                drawPieSlice(
                    ctx,
                    canvas.width / 2,
                    canvas.height / 2,
                    Math.min(canvas.width / 2, canvas.height / 2),
                    start_angle,
                    start_angle + slice_angle,
                    colors[color_index % colors.length]
                );
                start_angle += slice_angle;
                color_index++;
            }
        }
        draw();
    }

    useEffect(() => {
        const canvas = document.getElementById("canvas")
        drawPie(canvas, data, colors);
    }, [data, colors]);

    return (
        <>
            <div className='title'>Diagram</div>
            <canvas id="canvas" width={400} height={400} onClick={getRandomArray} />

        </>


    )
}
