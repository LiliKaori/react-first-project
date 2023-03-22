import { DivItems } from "./style";

function ContainerItems({children, isBlur}){

    return <DivItems isBlur={isBlur}>{children}</DivItems>
}

export default ContainerItems