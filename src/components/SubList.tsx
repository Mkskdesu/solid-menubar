import {Component, createSignal, Show, useContext} from "solid-js";
import {ISubGroupProps} from "../types";
import {groupState} from "../states/groupState";
import clsx from "clsx";
import {ConfigContext} from "../context/config";

import style from "../styles/SubGroup.module.scss";
import listStyle from "../styles/ListItem.module.scss";
import groupStyle from "../styles/Group.module.scss";

export const SubList:Component<ISubGroupProps> = props  => {

    const [showSubList,setShowSubList] = createSignal(false);
    const config = useContext(ConfigContext);

    function openSubList(){
        setShowSubList(true);
    }

    return (
        <div {...props} class={clsx(config.noStyle||style.subgroup,props.class)} tabIndex={0} onFocus={openSubList} onPointerEnter={openSubList}>
            <div class={clsx(config.noStyle||listStyle.listItem,config.noStyle||style.label,props.labelClass)} onClick={e=>e.stopPropagation()}>
                {props.icon || <div></div>}
                {props.title}
                <Show when={config.subGroup?.showArrow!==false}>
                    <div class={clsx(config.noStyle||style.arrow)}>{config.subGroup?.arrowIconOverride || String.fromCodePoint(0x003e)}</div>
                </Show>
            </div>
            <Show when={showSubList()}>
                <div class={clsx(config.noStyle||style.list,config.noStyle||groupStyle.list,props.listClass)} data-theme={config.theme}>
                    {props.children}
                </div>
            </Show>
        </div>
    )
}
