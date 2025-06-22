import {Component, JSX, useContext} from "solid-js";
import clsx from "clsx";
import {ConfigContext} from "../context/config";

import style from "../styles/Separator.module.scss";

export const ItemSeparator:Component<JSX.HTMLAttributes<HTMLDivElement>> = props => {
    const config = useContext(ConfigContext);

    return (
        <div {...props} class={clsx(config.noStyle||style.separator,props.class)} data-theme={config.theme} />
    )
}
