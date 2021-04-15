import React, { useState, useEffect } from 'react'
import Sketch from 'react-p5'

// const initialValue = {
//     x1: 0,
//     y1: 0,
//     x2: 100,
//     y2: 0,
//     x3: 50,
//     y3: 100,
// }

const initialValue = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 100,
    x3: 100,
    y3: 50,
}

export default function Triangle() {
    const [point, setPoint] = useState(initialValue)
    const [directionY, setdirectionY] = useState('^')
    const [directionX, setdirectionX] = useState('>')

    const setup = (p5, parentRef) => {
        p5.createCanvas(800, 400).parent(parentRef)
        reset(p5)
    }

    const draw = (p5) => {
        const { x1, x2, x3, y1, y2, y3 } = point
        p5.background(0)
        p5.fill(255, 255, 0)
        p5.triangle(x1, y1, x2, y2, x3, y3)
        // console.log(`x`, x)
        // console.log(`y`, y)
        // if (y > p5.height) {
        //     setdirectionY('')
        // }
        // if (y < p5.height / 2) {
        //     if (y < 0) {
        //         console.log('y1')
        //         setdirectionY('^')
        //     }
        //     if (directionY === '^') {
        //         console.log('y2')
        //         setY(y + 2)
        //     } else {
        //         console.log('y3')
        //         setY(y - 2)
        //     }
        // } else {
        //     console.log(`x`, x)
        //     if (x < p5.width) {
        //         if (x < 0) {
        //             console.log('x1')
        //             setdirectionX('>')
        //         }
        //         if (directionX === '>') {
        //             console.log('x2')
        //             setX(x + 2)
        //         } else {
        //             console.log('x3')
        //             setX(x - 2)
        //         }
        //     } else {
        //         console.log('do something')
        //         reset(p5)
        //     }
        // }
    }

    const reset = (p5) => {
        setPoint(initialValue)
    }
    return (
        <div>
            <h1>react-p5</h1>
            <Sketch setup={setup} draw={draw} />
        </div>
    )
}
