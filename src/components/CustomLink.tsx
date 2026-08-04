import { Link, useMatch, type LinkProps } from "react-router";

export default function CustomLink({to, children, ...props} : LinkProps) {
    const match = useMatch(to.toString()); // Проверка, совпадает ли путь с путём ссылки

    return <Link 
        to={to}
        style={{
            color: match ? "violet" : "blue"
        }}
        {...props}
        >
        {children}
    </Link>
}