import React, { useState, useEffect } from 'react'
import Sketch from 'react-p5'

export default function TestP5() {
    const [y, setY] = useState(0)
    const [x, setX] = useState(0)
    const [directionY, setdirectionY] = useState('^')
    const [directionX, setdirectionX] = useState('>')
    const setup = (p5, parentRef) => {
        // console.log(`p5`, p5)
        p5.createCanvas(800, 400).parent(parentRef)
        reset(p5)
    }

    const draw = (p5) => {
        p5.background(0)
        p5.fill(255, y * 1.3, 0)
        // p5.ellipse(p5.width / 2, y, 50)     // ขนาดของ circle
        p5.ellipse(x, y, 50) // ขนาดของ circle
        // console.log(`x`, x)
        // console.log(`y`, y)
        if (y > p5.height) {
            setdirectionY('')
        }
        if (y < p5.height / 2) {
            if (y < 0) {
                // console.log('y1')
                setdirectionY('^')
            }
            if (directionY === '^') {
                // console.log('y2')
                setY(y + 2)
            } else {
                // console.log('y3')
                setY(y - 2)
            }
        } else {
            if (x < p5.width) {
                if (x < 0) {
                    // console.log('x1')
                    setdirectionX('>')
                }
                if (directionX === '>') {
                    // console.log('x2')
                    setX(x + 2)
                } else {
                    // console.log('x3')
                    setX(x - 2)
                }
            } else {
                // console.log('do something')
                reset(p5)
            }
        }
    }

    const reset = (p5) => {
        setX(p5.width / 3)
        setY(0)
    }
    return <Sketch setup={setup} draw={draw} />
}
