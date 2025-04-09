interface Props {
  primaryButton?: boolean;
  children?: any;
  baseClassname?: string;
}

function Button(props: Props) {
  
  const { primaryButton, children, baseClassname } = props;

  const css: string = primaryButton ? "p-4 rounded-xl border-black border-[1px] cursor-pointer hover:shadow-md" : "bg-black p-4 rounded-xl text-white cursor-pointer";

  return (
    <button className={`${css} ${baseClassname}`}>{children}</button>
  )
}

export default Button
