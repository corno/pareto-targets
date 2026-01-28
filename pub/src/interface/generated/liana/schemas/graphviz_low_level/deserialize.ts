
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/deserialize"

import * as i_out from "./data"

export namespace ID_ {
    
    export type I = string
    
    export type O = i_out.ID
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type ID_ = (
    context: ID_.I,
    abort: _pi.Abort<ID_.E>,
    parameters: {
        readonly 'document resource identifier': ID_.P.document_resource_identifier
        readonly 'indentation': ID_.P.indentation
    },
) => ID_.O

export namespace Node_ID_ {
    
    export type I = string
    
    export type O = i_out.Node_ID
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Node_ID_ = (
    context: Node_ID_.I,
    abort: _pi.Abort<Node_ID_.E>,
    parameters: {
        readonly 'document resource identifier': Node_ID_.P.document_resource_identifier
        readonly 'indentation': Node_ID_.P.indentation
    },
) => Node_ID_.O

export namespace Attribute_List_ {
    
    export type I = string
    
    export type O = i_out.Attribute_List
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Attribute_List_ = (
    context: Attribute_List_.I,
    abort: _pi.Abort<Attribute_List_.E>,
    parameters: {
        readonly 'document resource identifier': Attribute_List_.P.document_resource_identifier
        readonly 'indentation': Attribute_List_.P.indentation
    },
) => Attribute_List_.O

export namespace Subgraph_ {
    
    export type I = string
    
    export type O = i_out.Subgraph
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Subgraph_ = (
    context: Subgraph_.I,
    abort: _pi.Abort<Subgraph_.E>,
    parameters: {
        readonly 'document resource identifier': Subgraph_.P.document_resource_identifier
        readonly 'indentation': Subgraph_.P.indentation
    },
) => Subgraph_.O

export namespace Statement_List_ {
    
    export type I = string
    
    export type O = i_out.Statement_List
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Statement_List_ = (
    context: Statement_List_.I,
    abort: _pi.Abort<Statement_List_.E>,
    parameters: {
        readonly 'document resource identifier': Statement_List_.P.document_resource_identifier
        readonly 'indentation': Statement_List_.P.indentation
    },
) => Statement_List_.O

export namespace Graph_ {
    
    export type I = string
    
    export type O = i_out.Graph
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Graph_ = (
    context: Graph_.I,
    abort: _pi.Abort<Graph_.E>,
    parameters: {
        readonly 'document resource identifier': Graph_.P.document_resource_identifier
        readonly 'indentation': Graph_.P.indentation
    },
) => Graph_.O

export { 
    ID_ as ID, 
    Node_ID_ as Node_ID, 
    Attribute_List_ as Attribute_List, 
    Subgraph_ as Subgraph, 
    Statement_List_ as Statement_List, 
    Graph_ as Graph, 
}
