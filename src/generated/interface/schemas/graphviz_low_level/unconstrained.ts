import * as _pt from 'exupery-core-types'

import * as _i_core from "../../core/unconstrained"

// **** TYPES

export type _T_Attribute_List = _i_core._T_List<null, {
    readonly 'name': _T_ID
    readonly 'value': _T_ID
}>

export type _T_Graph = {
    readonly 'name': _pt.Optional_Value<_T_ID>
    readonly 'statements': _T_Statement_List
    readonly 'strict': boolean
    readonly 'type': _i_core._T_State_Group<null, 
        | readonly ['digraph', null]
        | readonly ['graph', null]
    >
}

export type _T_ID = _i_core._T_State_Group<null, 
    | readonly ['html', string]
    | readonly ['id', string]
    | readonly ['number', number]
    | readonly ['string', string]
>

export type _T_Node_ID = {
    readonly 'id': _T_ID
    readonly 'port': _pt.Optional_Value<{
        readonly 'compass point': _pt.Optional_Value<_T_ID>
        readonly 'port': _T_ID
    }>
}

export type _T_Statement_List = _i_core._T_List<null, _i_core._T_State_Group<null, 
    | readonly ['attribute assignment', {
        readonly 'name': _T_ID
        readonly 'value': _T_ID
    }]
    | readonly ['attribute list', {
        readonly 'attributes': _T_Attribute_List
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['edge', null]
            | readonly ['graph', null]
            | readonly ['node', null]
        >
    }]
    | readonly ['edge', {
        readonly 'attributes': _T_Attribute_List
        readonly 'left': _i_core._T_State_Group<null, 
            | readonly ['node', _T_Node_ID]
            | readonly ['subgraph', _T_Subgraph]
        >
        readonly 'right': _i_core._T_List<null, _i_core._T_State_Group<null, 
            | readonly ['node', _T_Node_ID]
            | readonly ['subgraph', _T_Subgraph]
        >>
    }]
    | readonly ['node', {
        readonly 'attribute list': _T_Attribute_List
        readonly 'node': _T_Node_ID
    }]
    | readonly ['subgraph', _T_Subgraph]
>>

export type _T_Subgraph = {
    readonly 'statements': _T_Statement_List
    readonly 'subgraph': _pt.Optional_Value<_pt.Optional_Value<_T_ID>>
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Attribute_List = _T_Attribute_List

export type Graph = _T_Graph

export type ID = _T_ID

export type Node_ID = _T_Node_ID

export type Statement_List = _T_Statement_List

export type Subgraph = _T_Subgraph

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Attribute_List {
    
    export namespace L {
        
        export namespace name {
        }
        export type name = _T_ID
        
        export namespace value {
        }
        export type value = _T_ID
    }
    export type L = {
        readonly 'name': _T_ID
        readonly 'value': _T_ID
    }
}

export namespace _T_Graph {
    
    export namespace name {
        
        export namespace O {
        }
        export type O = _T_ID
    }
    export type name = _pt.Optional_Value<_T_ID>
    
    export namespace statements {
    }
    export type statements = _T_Statement_List
    export type strict = boolean
    
    export namespace _type {
        
        export namespace SG {
            export type digraph = null
            export type graph = null
        }
        export type SG = 
            | readonly ['digraph', null]
            | readonly ['graph', null]
    }
    export type _type = _i_core._T_State_Group<null, 
        | readonly ['digraph', null]
        | readonly ['graph', null]
    >
}

export namespace _T_ID {
    
    export namespace SG {
        export type html = string
        export type id = string
        export type _number = number
        export type _string = string
    }
    export type SG = 
        | readonly ['html', string]
        | readonly ['id', string]
        | readonly ['number', number]
        | readonly ['string', string]
}

export namespace _T_Node_ID {
    
    export namespace id {
    }
    export type id = _T_ID
    
    export namespace port {
        
        export namespace O {
            
            export namespace compass_point {
                
                export namespace O {
                }
                export type O = _T_ID
            }
            export type compass_point = _pt.Optional_Value<_T_ID>
            
            export namespace port {
            }
            export type port = _T_ID
        }
        export type O = {
            readonly 'compass point': _pt.Optional_Value<_T_ID>
            readonly 'port': _T_ID
        }
    }
    export type port = _pt.Optional_Value<{
        readonly 'compass point': _pt.Optional_Value<_T_ID>
        readonly 'port': _T_ID
    }>
}

export namespace _T_Statement_List {
    
    export namespace L {
        
        export namespace SG {
            
            export namespace attribute_assignment {
                
                export namespace name {
                }
                export type name = _T_ID
                
                export namespace value {
                }
                export type value = _T_ID
            }
            export type attribute_assignment = {
                readonly 'name': _T_ID
                readonly 'value': _T_ID
            }
            
            export namespace attribute_list {
                
                export namespace attributes {
                }
                export type attributes = _T_Attribute_List
                
                export namespace _type {
                    
                    export namespace SG {
                        export type edge = null
                        export type graph = null
                        export type node = null
                    }
                    export type SG = 
                        | readonly ['edge', null]
                        | readonly ['graph', null]
                        | readonly ['node', null]
                }
                export type _type = _i_core._T_State_Group<null, 
                    | readonly ['edge', null]
                    | readonly ['graph', null]
                    | readonly ['node', null]
                >
            }
            export type attribute_list = {
                readonly 'attributes': _T_Attribute_List
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['edge', null]
                    | readonly ['graph', null]
                    | readonly ['node', null]
                >
            }
            
            export namespace edge {
                
                export namespace attributes {
                }
                export type attributes = _T_Attribute_List
                
                export namespace left {
                    
                    export namespace SG {
                        
                        export namespace node {
                        }
                        export type node = _T_Node_ID
                        
                        export namespace subgraph {
                        }
                        export type subgraph = _T_Subgraph
                    }
                    export type SG = 
                        | readonly ['node', _T_Node_ID]
                        | readonly ['subgraph', _T_Subgraph]
                }
                export type left = _i_core._T_State_Group<null, 
                    | readonly ['node', _T_Node_ID]
                    | readonly ['subgraph', _T_Subgraph]
                >
                
                export namespace right {
                    
                    export namespace L {
                        
                        export namespace SG {
                            
                            export namespace node {
                            }
                            export type node = _T_Node_ID
                            
                            export namespace subgraph {
                            }
                            export type subgraph = _T_Subgraph
                        }
                        export type SG = 
                            | readonly ['node', _T_Node_ID]
                            | readonly ['subgraph', _T_Subgraph]
                    }
                    export type L = _i_core._T_State_Group<null, 
                        | readonly ['node', _T_Node_ID]
                        | readonly ['subgraph', _T_Subgraph]
                    >
                }
                export type right = _i_core._T_List<null, _i_core._T_State_Group<null, 
                    | readonly ['node', _T_Node_ID]
                    | readonly ['subgraph', _T_Subgraph]
                >>
            }
            export type edge = {
                readonly 'attributes': _T_Attribute_List
                readonly 'left': _i_core._T_State_Group<null, 
                    | readonly ['node', _T_Node_ID]
                    | readonly ['subgraph', _T_Subgraph]
                >
                readonly 'right': _i_core._T_List<null, _i_core._T_State_Group<null, 
                    | readonly ['node', _T_Node_ID]
                    | readonly ['subgraph', _T_Subgraph]
                >>
            }
            
            export namespace node {
                
                export namespace attribute_list {
                }
                export type attribute_list = _T_Attribute_List
                
                export namespace node {
                }
                export type node = _T_Node_ID
            }
            export type node = {
                readonly 'attribute list': _T_Attribute_List
                readonly 'node': _T_Node_ID
            }
            
            export namespace subgraph {
            }
            export type subgraph = _T_Subgraph
        }
        export type SG = 
            | readonly ['attribute assignment', {
                readonly 'name': _T_ID
                readonly 'value': _T_ID
            }]
            | readonly ['attribute list', {
                readonly 'attributes': _T_Attribute_List
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['edge', null]
                    | readonly ['graph', null]
                    | readonly ['node', null]
                >
            }]
            | readonly ['edge', {
                readonly 'attributes': _T_Attribute_List
                readonly 'left': _i_core._T_State_Group<null, 
                    | readonly ['node', _T_Node_ID]
                    | readonly ['subgraph', _T_Subgraph]
                >
                readonly 'right': _i_core._T_List<null, _i_core._T_State_Group<null, 
                    | readonly ['node', _T_Node_ID]
                    | readonly ['subgraph', _T_Subgraph]
                >>
            }]
            | readonly ['node', {
                readonly 'attribute list': _T_Attribute_List
                readonly 'node': _T_Node_ID
            }]
            | readonly ['subgraph', _T_Subgraph]
    }
    export type L = _i_core._T_State_Group<null, 
        | readonly ['attribute assignment', {
            readonly 'name': _T_ID
            readonly 'value': _T_ID
        }]
        | readonly ['attribute list', {
            readonly 'attributes': _T_Attribute_List
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['edge', null]
                | readonly ['graph', null]
                | readonly ['node', null]
            >
        }]
        | readonly ['edge', {
            readonly 'attributes': _T_Attribute_List
            readonly 'left': _i_core._T_State_Group<null, 
                | readonly ['node', _T_Node_ID]
                | readonly ['subgraph', _T_Subgraph]
            >
            readonly 'right': _i_core._T_List<null, _i_core._T_State_Group<null, 
                | readonly ['node', _T_Node_ID]
                | readonly ['subgraph', _T_Subgraph]
            >>
        }]
        | readonly ['node', {
            readonly 'attribute list': _T_Attribute_List
            readonly 'node': _T_Node_ID
        }]
        | readonly ['subgraph', _T_Subgraph]
    >
}

export namespace _T_Subgraph {
    
    export namespace statements {
    }
    export type statements = _T_Statement_List
    
    export namespace subgraph {
        
        export namespace O {
            
            export namespace O {
            }
            export type O = _T_ID
        }
        export type O = _pt.Optional_Value<_T_ID>
    }
    export type subgraph = _pt.Optional_Value<_pt.Optional_Value<_T_ID>>
}

// *** ALIASES FOR NESTED TYPES

export namespace Attribute_List {
    
    export namespace L {
        
        export namespace name {
        }
        export type name = _T_ID
        
        export namespace value {
        }
        export type value = _T_ID
    }
    export type L = {
        readonly 'name': _T_ID
        readonly 'value': _T_ID
    }
}

export namespace Graph {
    
    export namespace name {
        
        export namespace O {
        }
        export type O = _T_ID
    }
    export type name = _pt.Optional_Value<_T_ID>
    
    export namespace statements {
    }
    export type statements = _T_Statement_List
    export type strict = boolean
    
    export namespace _type {
        
        export namespace SG {
            export type digraph = null
            export type graph = null
        }
        export type SG = 
            | readonly ['digraph', null]
            | readonly ['graph', null]
    }
    export type _type = _i_core._T_State_Group<null, 
        | readonly ['digraph', null]
        | readonly ['graph', null]
    >
}

export namespace ID {
    
    export namespace SG {
        export type html = string
        export type id = string
        export type _number = number
        export type _string = string
    }
    export type SG = 
        | readonly ['html', string]
        | readonly ['id', string]
        | readonly ['number', number]
        | readonly ['string', string]
}

export namespace Node_ID {
    
    export namespace id {
    }
    export type id = _T_ID
    
    export namespace port {
        
        export namespace O {
            
            export namespace compass_point {
                
                export namespace O {
                }
                export type O = _T_ID
            }
            export type compass_point = _pt.Optional_Value<_T_ID>
            
            export namespace port {
            }
            export type port = _T_ID
        }
        export type O = {
            readonly 'compass point': _pt.Optional_Value<_T_ID>
            readonly 'port': _T_ID
        }
    }
    export type port = _pt.Optional_Value<{
        readonly 'compass point': _pt.Optional_Value<_T_ID>
        readonly 'port': _T_ID
    }>
}

export namespace Statement_List {
    
    export namespace L {
        
        export namespace SG {
            
            export namespace attribute_assignment {
                
                export namespace name {
                }
                export type name = _T_ID
                
                export namespace value {
                }
                export type value = _T_ID
            }
            export type attribute_assignment = {
                readonly 'name': _T_ID
                readonly 'value': _T_ID
            }
            
            export namespace attribute_list {
                
                export namespace attributes {
                }
                export type attributes = _T_Attribute_List
                
                export namespace _type {
                    
                    export namespace SG {
                        export type edge = null
                        export type graph = null
                        export type node = null
                    }
                    export type SG = 
                        | readonly ['edge', null]
                        | readonly ['graph', null]
                        | readonly ['node', null]
                }
                export type _type = _i_core._T_State_Group<null, 
                    | readonly ['edge', null]
                    | readonly ['graph', null]
                    | readonly ['node', null]
                >
            }
            export type attribute_list = {
                readonly 'attributes': _T_Attribute_List
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['edge', null]
                    | readonly ['graph', null]
                    | readonly ['node', null]
                >
            }
            
            export namespace edge {
                
                export namespace attributes {
                }
                export type attributes = _T_Attribute_List
                
                export namespace left {
                    
                    export namespace SG {
                        
                        export namespace node {
                        }
                        export type node = _T_Node_ID
                        
                        export namespace subgraph {
                        }
                        export type subgraph = _T_Subgraph
                    }
                    export type SG = 
                        | readonly ['node', _T_Node_ID]
                        | readonly ['subgraph', _T_Subgraph]
                }
                export type left = _i_core._T_State_Group<null, 
                    | readonly ['node', _T_Node_ID]
                    | readonly ['subgraph', _T_Subgraph]
                >
                
                export namespace right {
                    
                    export namespace L {
                        
                        export namespace SG {
                            
                            export namespace node {
                            }
                            export type node = _T_Node_ID
                            
                            export namespace subgraph {
                            }
                            export type subgraph = _T_Subgraph
                        }
                        export type SG = 
                            | readonly ['node', _T_Node_ID]
                            | readonly ['subgraph', _T_Subgraph]
                    }
                    export type L = _i_core._T_State_Group<null, 
                        | readonly ['node', _T_Node_ID]
                        | readonly ['subgraph', _T_Subgraph]
                    >
                }
                export type right = _i_core._T_List<null, _i_core._T_State_Group<null, 
                    | readonly ['node', _T_Node_ID]
                    | readonly ['subgraph', _T_Subgraph]
                >>
            }
            export type edge = {
                readonly 'attributes': _T_Attribute_List
                readonly 'left': _i_core._T_State_Group<null, 
                    | readonly ['node', _T_Node_ID]
                    | readonly ['subgraph', _T_Subgraph]
                >
                readonly 'right': _i_core._T_List<null, _i_core._T_State_Group<null, 
                    | readonly ['node', _T_Node_ID]
                    | readonly ['subgraph', _T_Subgraph]
                >>
            }
            
            export namespace node {
                
                export namespace attribute_list {
                }
                export type attribute_list = _T_Attribute_List
                
                export namespace node {
                }
                export type node = _T_Node_ID
            }
            export type node = {
                readonly 'attribute list': _T_Attribute_List
                readonly 'node': _T_Node_ID
            }
            
            export namespace subgraph {
            }
            export type subgraph = _T_Subgraph
        }
        export type SG = 
            | readonly ['attribute assignment', {
                readonly 'name': _T_ID
                readonly 'value': _T_ID
            }]
            | readonly ['attribute list', {
                readonly 'attributes': _T_Attribute_List
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['edge', null]
                    | readonly ['graph', null]
                    | readonly ['node', null]
                >
            }]
            | readonly ['edge', {
                readonly 'attributes': _T_Attribute_List
                readonly 'left': _i_core._T_State_Group<null, 
                    | readonly ['node', _T_Node_ID]
                    | readonly ['subgraph', _T_Subgraph]
                >
                readonly 'right': _i_core._T_List<null, _i_core._T_State_Group<null, 
                    | readonly ['node', _T_Node_ID]
                    | readonly ['subgraph', _T_Subgraph]
                >>
            }]
            | readonly ['node', {
                readonly 'attribute list': _T_Attribute_List
                readonly 'node': _T_Node_ID
            }]
            | readonly ['subgraph', _T_Subgraph]
    }
    export type L = _i_core._T_State_Group<null, 
        | readonly ['attribute assignment', {
            readonly 'name': _T_ID
            readonly 'value': _T_ID
        }]
        | readonly ['attribute list', {
            readonly 'attributes': _T_Attribute_List
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['edge', null]
                | readonly ['graph', null]
                | readonly ['node', null]
            >
        }]
        | readonly ['edge', {
            readonly 'attributes': _T_Attribute_List
            readonly 'left': _i_core._T_State_Group<null, 
                | readonly ['node', _T_Node_ID]
                | readonly ['subgraph', _T_Subgraph]
            >
            readonly 'right': _i_core._T_List<null, _i_core._T_State_Group<null, 
                | readonly ['node', _T_Node_ID]
                | readonly ['subgraph', _T_Subgraph]
            >>
        }]
        | readonly ['node', {
            readonly 'attribute list': _T_Attribute_List
            readonly 'node': _T_Node_ID
        }]
        | readonly ['subgraph', _T_Subgraph]
    >
}

export namespace Subgraph {
    
    export namespace statements {
    }
    export type statements = _T_Statement_List
    
    export namespace subgraph {
        
        export namespace O {
            
            export namespace O {
            }
            export type O = _T_ID
        }
        export type O = _pt.Optional_Value<_T_ID>
    }
    export type subgraph = _pt.Optional_Value<_pt.Optional_Value<_T_ID>>
}
