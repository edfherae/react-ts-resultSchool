export default function Button({isActive = true, children, ...props} : {isActive : boolean, children : string} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button 
    {...props}
    className={isActive ? "button button--active" : "button"}>
    {children}
    </button>
}