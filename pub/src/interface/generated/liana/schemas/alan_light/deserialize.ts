
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/deserialize"

import * as i_out from "./data"

export namespace Identifier_ {
    
    export type I = string
    
    export type O = i_out.Identifier
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Identifier_ = (
    context: Identifier_.I,
    abort: _pi.Abort<Identifier_.E>,
    parameters: {
        readonly 'document resource identifier': Identifier_.P.document_resource_identifier
        readonly 'indentation': Identifier_.P.indentation
    },
) => Identifier_.O

export namespace Path_ {
    
    export type I = string
    
    export type O = i_out.Path
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Path_ = (
    context: Path_.I,
    abort: _pi.Abort<Path_.E>,
    parameters: {
        readonly 'document resource identifier': Path_.P.document_resource_identifier
        readonly 'indentation': Path_.P.indentation
    },
) => Path_.O

export namespace Node_ {
    
    export type I = string
    
    export type O = i_out.Node
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Node_ = (
    context: Node_.I,
    abort: _pi.Abort<Node_.E>,
    parameters: {
        readonly 'document resource identifier': Node_.P.document_resource_identifier
        readonly 'indentation': Node_.P.indentation
    },
) => Node_.O

export namespace Root_ {
    
    export type I = string
    
    export type O = i_out.Root
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Root_ = (
    context: Root_.I,
    abort: _pi.Abort<Root_.E>,
    parameters: {
        readonly 'document resource identifier': Root_.P.document_resource_identifier
        readonly 'indentation': Root_.P.indentation
    },
) => Root_.O

export { 
    Identifier_ as Identifier, 
    Path_ as Path, 
    Node_ as Node, 
    Root_ as Root, 
}
