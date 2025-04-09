import { CUSTOM_ICON_REF, CustomIconRef } from "./CustomIconRef";

interface Props {
  name: CUSTOM_ICON_REF;
  baseClassname?: string;
}

function SvgIcons(props: Props) {

  const { name, baseClassname } = props;

  const CustomIcon = CustomIconRef[name];

  return (
    <div className={baseClassname}>
      <CustomIcon />
    </div>
  )
}

export default SvgIcons
