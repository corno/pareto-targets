
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/deserialize"

import * as i_out from "./data"

export namespace Graphviz_Directory_ {
    
    export type I = string
    
    export type O = i_out.Graphviz_Directory
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Graphviz_Directory_ = (
    context: Graphviz_Directory_.I,
    abort: _pi.Abort<Graphviz_Directory_.E>,
) => Graphviz_Directory_.O

export { 
    Graphviz_Directory_ as Graphviz_Directory, 
}
