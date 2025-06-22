import {Component, onCleanup, onMount, Show} from "solid-js";
import clsx from "clsx";
import {IBarContainerProps} from "../types";

import style from "../styles/Container.module.scss";
import {ConfigContext} from "../context/config";
import {config} from "../constants/constant";
import {groupState, setGroupState} from "../states/groupState";


export const BarContainer:Component<IBarContainerProps> = props => {

    function handleKeyDown(e:KeyboardEvent){
        if (e.key.toLowerCase()=="escape" && groupState()) setGroupState(false);
    }

    onMount(()=>{
        window.addEventListener("keydown",handleKeyDown);
    });

    onCleanup(()=>{
        window.removeEventListener("keydown",handleKeyDown);
    });

    function handleClick(e:MouseEvent){
        if (e.target instanceof HTMLSpanElement) return;
        setGroupState(false);
    }

    return (
        <ConfigContext.Provider value={props.config??config}>
            <div {...props}
                 class={clsx(props.config?.noStyle||style.container)}
                 onClick={handleClick}
                 data-theme={props.config?.theme}
            >
                    {props.children}
                <Show when={groupState()}>
                    <div class={style.background}></div>
                </Show>
            </div>
        </ConfigContext.Provider>
    )
}
