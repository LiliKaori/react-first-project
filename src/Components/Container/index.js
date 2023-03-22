import { Div } from "./style"

function Container({children, user}){
    
    return <Div user={user}>{children}</Div>
}

export default Container