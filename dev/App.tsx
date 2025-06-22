import {Component, createSignal} from 'solid-js'
import style from './App.module.scss'
import MenuBar from "../dist/index.jsx";
import "../dist/index.css"

//Gear icon from microsoft/vscode-icons
const GearIcon: Component = () => {
    return (
        <svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em"
             width="1em" style="overflow: visible; color: currentcolor;">
            <path fill-rule="evenodd"
                  d="m19.85 8.75 4.15.83v4.84l-4.15.83 2.35 3.52-3.43 3.43-3.52-2.35-.83 4.15H9.58l-.83-4.15-3.52 2.35-3.43-3.43 2.35-3.52L0 14.42V9.58l4.15-.83L1.8 5.23 5.23 1.8l3.52 2.35L9.58 0h4.84l.83 4.15 3.52-2.35 3.43 3.43-2.35 3.52zm-1.57 5.07 4-.81v-2l-4-.81-.54-1.3 2.29-3.43-1.43-1.43-3.43 2.29-1.3-.54-.81-4h-2l-.81 4-1.3.54-3.43-2.29-1.43 1.43L6.38 8.9l-.54 1.3-4 .81v2l4 .81.54 1.3-2.29 3.43 1.43 1.43 3.43-2.29 1.3.54.81 4h2l.81-4 1.3-.54 3.43 2.29 1.43-1.43-2.29-3.43.54-1.3zm-8.186-4.672A3.43 3.43 0 0 1 12 8.57 3.44 3.44 0 0 1 15.43 12a3.43 3.43 0 1 1-5.336-2.852zm.956 4.274c.281.188.612.288.95.288A1.7 1.7 0 0 0 13.71 12a1.71 1.71 0 1 0-2.66 1.422z"
                  clip-rule="evenodd"></path>
        </svg>
    )
}

const App: Component = () => {

    console.log(MenuBar)
    const [checkBox, setCheckBox] = createSignal(false);

    return (
        <div class={style.App}>
            <MenuBar.Container config={{theme: "light"}}>
                {/*Tabs*/}
                <MenuBar.Group title={"Files"}>
                    {/*Basic list item*/}
                    <MenuBar.ListItem>
                        Item1
                    </MenuBar.ListItem>
                    {/*List item with checkbox*/}
                    <MenuBar.ListItem type={"checkbox"} checked={checkBox()} onClick={e => setCheckBox(p => !p)}>
                        Checkbox
                    </MenuBar.ListItem>
                    {/*List item with hint label (useful for annotations and key shortcuts)*/}
                    <MenuBar.ListItem hintLabel={"Ctrl+C"}
                                      onClick={()=>{navigator.clipboard.writeText("Some Text");alert("Copied!")}}>
                        Copy
                    </MenuBar.ListItem>
                    {/*List item with icon. icon prop accepts JSXElement!*/}
                    <MenuBar.ListItem type={"icon"} icon={<GearIcon/>} hintLabel={"Ctrl+,"}>
                        Preferences
                    </MenuBar.ListItem>
                    {/*Separator line*/}
                    <MenuBar.Separator/>
                    {/*Submenu*/}
                    <MenuBar.SubGroup title={"Save"}>
                        <MenuBar.ListItem hintLabel={"Ctrl+S"}>
                            Overwrite
                        </MenuBar.ListItem>
                        {/*Nested submenu*/}
                        <MenuBar.SubGroup title={"Export As"}>
                            <MenuBar.ListItem>HTML</MenuBar.ListItem>
                            {/*More nested submenu*/}
                            <MenuBar.SubGroup title={"Docs"}>
                                <MenuBar.ListItem>PDF</MenuBar.ListItem>
                                <MenuBar.ListItem>Docx</MenuBar.ListItem>
                                <MenuBar.ListItem>ODT</MenuBar.ListItem>
                            </MenuBar.SubGroup>
                            <MenuBar.SubGroup title={"Image"}>
                                <MenuBar.ListItem>PNG</MenuBar.ListItem>
                                <MenuBar.ListItem>JPG</MenuBar.ListItem>
                                <MenuBar.ListItem>SVG</MenuBar.ListItem>
                            </MenuBar.SubGroup>
                        </MenuBar.SubGroup>
                    </MenuBar.SubGroup>
                </MenuBar.Group>

                <MenuBar.Group title={"Tab2"}>
                </MenuBar.Group>
            </MenuBar.Container>
            <div class={style.main}>
                <h1>solid-menubar examples</h1>
            </div>
        </div>
    )
}

export default App
