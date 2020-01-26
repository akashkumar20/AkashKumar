import React from 'react';
interface IContainerProps {
}
declare class Container extends React.Component<IContainerProps, any> {
    constructor(props: IContainerProps);
    onClick(i: number): void;
    renderTabs(): JSX.Element;
    renderComponent(): JSX.Element;
    render(): JSX.Element;
}
export default Container;
