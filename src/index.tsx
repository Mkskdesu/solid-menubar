import {BarContainer} from "./components/Menubar";
import {BarGroup} from "./components/MenubarGroup";
import {BarListItem} from "./components/ListItem";
import {ItemSeparator} from "./components/Separator";
import {SubList} from "./components/SubList";


namespace MenuBar{
  export const Container= BarContainer;
  export const Group = BarGroup;
  export const ListItem = BarListItem;
  export const Separator = ItemSeparator;
  export const SubGroup = SubList;
}

export default MenuBar;
