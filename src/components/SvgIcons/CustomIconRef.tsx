import Burger from "./Icon/Burger";
import Icon from "./Icon/Icon";

export enum CUSTOM_ICON_REF {
  Logo = 'Logo',
  Burger = 'Burger',
}

export const CustomIconRef:any = {
  [CUSTOM_ICON_REF.Logo]: Icon,
  [CUSTOM_ICON_REF.Burger]: Burger,
} 