import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import '../../scss/tab.scss';
interface ITabsProps extends RouteComponentProps {
    tabs: any;
}
declare class Tabs extends React.Component<ITabsProps, any> {
    constructor(props: ITabsProps);
    componentDidMount(): void;
    renderTabs(): JSX.Element;
    render(): JSX.Element;
}
declare const _default: React.ComponentClass<Pick<ITabsProps, "tabs"> & {
    wrappedComponentRef?: ((instance: Tabs | null) => void) | React.RefObject<Tabs> | null | undefined;
}, any> & import("react-router").WithRouterStatics<typeof Tabs>;
export default _default;
