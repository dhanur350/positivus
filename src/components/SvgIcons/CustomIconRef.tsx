import Burger from "./Icon/Burger";
import Icon from "./Icon/Icon";

export enum CUSTOM_ICON_REF {
  Logo = 'Logo',
  Burger = 'Burger',
  Twitter = "Twitter",
  Facebook = 'Facebook',
  Linkedin = 'Linkedin'
}

export const CustomIconRef:any = {
  [CUSTOM_ICON_REF.Logo]: Icon,
  [CUSTOM_ICON_REF.Burger]: Burger,
  [CUSTOM_ICON_REF.Twitter]: Burger,
  [CUSTOM_ICON_REF.Facebook]: Burger,
  [CUSTOM_ICON_REF.Linkedin]: Burger,
} 