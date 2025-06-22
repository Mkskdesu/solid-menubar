import {Component, JSX, JSXElement} from "solid-js";
import HTMLAttributes = JSX.HTMLAttributes;

interface ArrayElem<T> extends Array<T> {
}

type Exclusive<T extends Record<PropertyKey, unknown>, U extends Record<PropertyKey, unknown>> =
    | (T & { [k in Exclude<keyof U, keyof T>]?: never })
    | (U & { [k in Exclude<keyof T, keyof U>]?: never });

interface IConfig{
    noStyle?:boolean
    theme?:"dark"|"light",
    listItem?:{
        checkMarkOverride?:JSXElement
    }
    subGroup?:{
        showArrow?:boolean
        arrowIconOverride?: JSXElement
    }
}

interface IBarContainerProps extends JSX.HTMLAttributes<HTMLDivElement> {
    children?: JSXElement
    config?:IConfig
}


interface IBarGroupProps extends HTMLAttributes<HTMLDivElement>{
    title?: string
    icon?: JSXElement
    children?: JSXElement
    labelClass?:string
    listClass?:string
}


interface IBarListItemProps<T extends "normal" | "icon" | "checkbox"|"nested"> extends HTMLAttributes<HTMLButtonElement>{
    children?: string
    hintLabel?:string
    type?: T
    icon?: JSXElement
    checked?: T extends "checkbox" ? boolean : never
}


type ISubGroupProps = IBarGroupProps
