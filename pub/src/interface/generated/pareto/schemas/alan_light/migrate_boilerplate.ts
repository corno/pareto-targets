
import * as _pi from "pareto-core-interface"

import * as i_out from "./data"

import * as i_in from "./data"

export namespace Identifier_ {
    
    export type I = i_in.Identifier
    
    export type O = i_out.Identifier
    
    export namespace P {
        
    }
    
}

export type Identifier_ = (
    $$_: Identifier_.I,
) => Identifier_.O

export namespace Path_ {
    
    export type I = i_in.Path
    
    export type O = i_out.Path
    
    export namespace P {
        
    }
    
}

export type Path_ = (
    $$_: Path_.I,
) => Path_.O

export namespace Node_ {
    
    export type I = i_in.Node
    
    export type O = i_out.Node
    
    export namespace P {
        
    }
    
}

export type Node_ = (
    $$_: Node_.I,
) => Node_.O

export namespace Root_ {
    
    export type I = i_in.Root
    
    export type O = i_out.Root
    
    export namespace P {
        
    }
    
}

export type Root_ = (
    $$_: Root_.I,
) => Root_.O

export { 
    Identifier_ as Identifier, 
    Path_ as Path, 
    Node_ as Node, 
    Root_ as Root, 
}
