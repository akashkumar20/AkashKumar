import React from 'react';
import './scss/mixins.scss';
declare class App extends React.Component<any, any> {
    ctx: CanvasRenderingContext2D;
    color: string | CanvasGradient | CanvasPattern;
    x: number;
    y: number;
    n: number;
    r: number;
    inset: number;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(_preprops: any, preState: any): void;
    getSize(): void;
    strokeStar: (ctx: CanvasRenderingContext2D, x: number, y: number, r: number, n: number, inset: number, color: string, clear?: string | undefined) => void;
    animate(): void;
    render(): JSX.Element;
}
export default App;
