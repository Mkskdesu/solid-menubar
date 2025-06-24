import {Component, Match, Show, splitProps, Switch, useContext} from "solid-js";
import {IBarListItemProps} from "../types";

import style from "../styles/ListItem.module.scss";
import {ConfigContext} from "../context/config";
import clsx from "clsx";

export const BarListItem:Component<IBarListItemProps<"normal"|"checkbox"|"icon">> = props => {

    const config = useContext(ConfigContext);
    const [prop,other] = splitProps(props, ["type","icon","checked"]);

    return (
        <button {...other} class={clsx(config.noStyle||style.listItem,props.class)} data-animation-enabled={config.animation}>
            <div class={clsx(config.noStyle||style.icon)}>
                <Switch>
                    <Match when={props.type=="icon"}>{props.icon}</Match>
                    <Match when={props.type=="checkbox"}>
                        <Show when={props.checked}>
                            {/*チェックマークにはicon propを優先的に使用し、configのオーバーライドおよびu+2713でフォールバックする*/}
                            {props.icon || config.listItem?.checkMarkOverride || String.fromCodePoint(0x2713)}
                        </Show>
                        </Match>
                </Switch>
            </div>
            <div class={clsx(config.noStyle||style.content)}>
                {props.children}
            </div>
            <Show when={props.hintLabel}>
                <span class={clsx(config.noStyle||style.hintLabel)}>{props.hintLabel}</span>
            </Show>
        </button>
    ) as Element
}
