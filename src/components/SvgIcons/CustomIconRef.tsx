import ArrowAbove from "./Icon/ArrowAbove";
import Burger from "./Icon/Burger";
import Facebook from "./Icon/Facebook";
import Icon from "./Icon/Icon";
import Linkedin from "./Icon/Linkedin";
import MainScreenIllustration from "./Icon/MainScreenIllustration";
import ServiceIllustration from "./Icon/ServiceIllustration";
import ServiceIllustration1 from "./Icon/ServiceIllustration1";
import Twitter from "./Icon/Twitter";

export enum CUSTOM_ICON_REF {
  Logo = 'Logo',
  Burger = 'Burger',
  MainScreenIllustration = 'MainScreenIllustration',
  ArrowAbove = 'ArrowAbove',
  ServiceIllustration = 'ServiceIllustration',
  ServiceIllustration1 = 'ServiceIllustration1',
  Twitter = "Twitter",
  Facebook = 'Facebook',
  Linkedin = 'Linkedin'
}

export const CustomIconRef:any = {
  [CUSTOM_ICON_REF.Logo]: Icon,
  [CUSTOM_ICON_REF.Burger]: Burger,
  [CUSTOM_ICON_REF.Twitter]: Twitter,
  [CUSTOM_ICON_REF.Facebook]: Facebook,
  [CUSTOM_ICON_REF.Linkedin]: Linkedin,
  [CUSTOM_ICON_REF.ArrowAbove]: ArrowAbove,
  [CUSTOM_ICON_REF.MainScreenIllustration]: MainScreenIllustration,
  [CUSTOM_ICON_REF.ServiceIllustration]: ServiceIllustration,
  [CUSTOM_ICON_REF.ServiceIllustration1]: ServiceIllustration1
} 