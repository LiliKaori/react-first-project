import { ContainerButton } from "./style"

function Button({children, ...props}){

    return <ContainerButton {...props}>{children}</ContainerButton>
}

export default Button