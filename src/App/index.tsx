import React from 'react';

import Container from './Screens';
import './scss/mixins.scss';

class App extends React.Component<any, any> {
    ctx: CanvasRenderingContext2D;

    color: string | CanvasGradient | CanvasPattern;

    x: number;

    y: number;

    n:number;

    r:number;

    inset: number;

    constructor(props:any) {
        super(props);
        this.state = {
            width: '',
            height: '',
            c: {},
            starStrokes: [],
            loaded: true,
        };
    }

    componentDidMount() {
        this.getSize();
    }

    componentDidUpdate(_preprops:any, preState:any) {
        const { width } = this.state;
        if (width !== preState.width) {
            this.getSize();
        }
    }

    getSize() {
        const canvas = document.querySelector('canvas');
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const c = canvas.getContext('2d');
            const starStrokes:any = [];
            if (c) {
                for (let i = 0; i < canvas.width / 10; i += 1) {
                    const x = Math.floor(Math.random() * (canvas.width - 0) + 0);
                    const y = Math.floor(Math.random() * (canvas.height - 0) + 0);
                    const r = Math.floor(Math.random() * (3 - 1) + 1);
                    const n = Math.floor(Math.random() * (10 - 4) + 4);
                    const inset = Math.floor(Math.random() * (6 - 3) + 3);
                    const colorNum = Math.floor(Math.random() * (4 - 0) + 0);
                    starStrokes.push({
                        x, y, r, n, inset, colorNum,
                    });
                }
                this.setState((pre:any) => ({
                    ...pre,
                    width: canvas.width,
                    height: canvas.height,
                    starStrokes,
                    c,
                }), () => this.animate());
            }
        }
    }

    strokeStar = (ctx:CanvasRenderingContext2D, x:number, y:number, r:number, n:number, inset:number, color:string, clear?:string) => {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.r = r;
        this.n = n;
        this.inset = inset;
        this.color = color;
        this.ctx.fillStyle = this.color;
        this.ctx.save();
        const { width, height } = this.state;
        this.ctx.beginPath();
        if (clear) {
            this.ctx.clearRect(0, 0, width, height);
        }
        this.ctx.translate(this.x, this.y);
        this.ctx.moveTo(0, 0 - this.r);
        for (let i = 0; i < this.n; i += 1) {
            this.ctx.rotate(Math.PI / this.n);
            this.ctx.lineTo(0, 0 - (this.r * this.inset));
            this.ctx.rotate(Math.PI / this.n);
            this.ctx.lineTo(0, 0 - this.r);
        }
        this.ctx.closePath();
        this.ctx.fill();
        if (clear) this.ctx.filter = 'brightness(150%)';
        this.ctx.restore();
    };

    animate() {
        const {
            c, starStrokes, loaded,
        } = this.state;
        requestAnimationFrame(() => this.animate());
        const color = [
            '#FFC15E',
            '#F5C66E',
            '#FFB212',
            '#EBAA07',
            '#FFC926',
        ];
        if (starStrokes) {
            if (loaded) {
                starStrokes.forEach((el:any, i:number) => {
                    this.strokeStar(c, el.x, el.y, el.r, el.n, el.inset, color[el.colorNum], i === 0 ? 'clear' : '');
                });
                this.setState((pre:any) => ({
                    ...pre,
                    loaded: false,
                }));
            } else {
                const randomStar = Math.floor(Math.random() * (starStrokes.length - 0) + 0);
                starStrokes.forEach((el:any, i: number) => {
                    if (i === randomStar) {
                        this.strokeStar(c, el.x, el.y, el.r + 2, el.n, el.inset, color[el.colorNum], i === 0 ? 'clear' : '');
                    } else {
                        this.strokeStar(c, el.x, el.y, el.r, el.n, el.inset, color[el.colorNum], i === 0 ? 'clear' : '');
                    }
                });
            }
            window.addEventListener('resize', () => {
                this.setState((pre: any) => ({
                    ...pre,
                    width: window.innerWidth,
                    heigth: window.innerHeight,
                }));
            });
        }
    }

    render() {
        return (
            <div className="canvas-container">
                <canvas />
                <Container />
            </div>
        );
    }
}

export default App;
