import {Component, For, Show, useContext} from "solid-js";
import {IBarGroupProps} from "../types";
import {groupState, setGroupState} from "../states/groupState";

import style from "../styles/Group.module.scss";
import {ConfigContext} from "../context/config";
import clsx from "clsx";

export const BarGroup: Component<IBarGroupProps> = props => {

    const config = useContext(ConfigContext);

    function handleClick(e:MouseEvent|FocusEvent) {
        e.stopPropagation();
        if (groupState() == props.title) setGroupState(false);
        else setGroupState(props.title || "");
    }
    function handleFocus(e:FocusEvent){
        e.preventDefault()
    }

    function handleHover() {
        if (groupState() != false) setGroupState(props.title || "")
    }


    return (
        <div {...props} class={clsx(config.noStyle||style.group,props.class)} onClick={handleClick} tabIndex={0} onPointerEnter={handleHover}
             onFocus={handleFocus} data-active={groupState() == props.title}>
            <span class={clsx(config.noStyle||style.label,props.labelClass)}>{props.title}</span>

            <Show when={groupState() == props.title}>
                <div class={clsx(config.noStyle||style.list,props.listClass)} data-theme={config.theme}>
                    {props.children}
                </div>
            </Show>
        </div>
    )
}
