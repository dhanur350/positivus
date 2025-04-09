interface Props {
  primaryButton?: boolean;
  children?: any;
}

function Button(props: Props) {
  
  const { primaryButton, children } = props;

  const css: string = primaryButton ? "p-4 rounded-xl border-black border-[1px] cursor-pointer hover:shadow-md" : "cursor-pointer";

  return (
    <button className={css}>{children}</button>
  )
}

export default Button
