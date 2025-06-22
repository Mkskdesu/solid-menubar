import {createSignal} from "solid-js";

export const [groupState,setGroupState] = createSignal<string|false>(false);
