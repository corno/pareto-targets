import * as _pi from "pareto-core-interface"
    
    import * as _i_core from "../../../core/resolved"
    
    // **** TYPES
    
    export type _T_ID = _i_core._T_State_Group<null, 
        | readonly ['id', string]
        | readonly ['string', string]
        | readonly ['html', string]
        | readonly ['number', number]
    >
    
    export type _T_Node_ID = {
        readonly 'id': _T_ID
        readonly 'port': _pi.Optional_Value<{
            readonly 'port': _T_ID
            readonly 'compass point': _pi.Optional_Value<_T_ID>
        }>
    }
    
    export type _T_Attribute_List = _i_core._T_List<null, {
        readonly 'name': _T_ID
        readonly 'value': _T_ID
    }>
    
    export type _T_Subgraph = {
        readonly 'subgraph': _pi.Optional_Value<_pi.Optional_Value<_T_ID>>
        readonly 'statements': _T_Statement_List
    }
    
    export type _T_Statement_List = _i_core._T_List<null, _i_core._T_State_Group<null, 
        | readonly ['node', {
            readonly 'node': _T_Node_ID
            readonly 'attribute list': _T_Attribute_List
        }]
        | readonly ['edge', {
            readonly 'left': _i_core._T_State_Group<null, 
                | readonly ['node', _T_Node_ID]
                | readonly ['subgraph', _T_Subgraph]
            >
            readonly 'right': _i_core._T_List<null, _i_core._T_State_Group<null, 
                | readonly ['node', _T_Node_ID]
                | readonly ['subgraph', _T_Subgraph]
            >>
            readonly 'attributes': _T_Attribute_List
        }]
        | readonly ['attribute list', {
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['graph', null]
                | readonly ['node', null]
                | readonly ['edge', null]
            >
            readonly 'attributes': _T_Attribute_List
        }]
        | readonly ['attribute assignment', {
            readonly 'name': _T_ID
            readonly 'value': _T_ID
        }]
        | readonly ['subgraph', _T_Subgraph]
    >>
    
    export type _T_Graph = {
        readonly 'strict': boolean
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['graph', null]
            | readonly ['digraph', null]
        >
        readonly 'name': _pi.Optional_Value<_T_ID>
        readonly 'statements': _T_Statement_List
    }
    
    // **** FRIENDLY NAMES FOR THE GLOBAL TYPES
    
    export type ID = _T_ID
    
    export type Node_ID = _T_Node_ID
    
    export type Attribute_List = _T_Attribute_List
    
    export type Subgraph = _T_Subgraph
    
    export type Statement_List = _T_Statement_List
    
    export type Graph = _T_Graph
    
    // **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES
    
    export namespace _T_ID {
        
        export namespace SG {
            export type id = string
            export type _string = string
            export type html = string
            export type _number = number
        }
        export type SG = 
            | readonly ['id', string]
            | readonly ['string', string]
            | readonly ['html', string]
            | readonly ['number', number]
    }
    
    export namespace _T_Node_ID {
        
        export namespace id {
        }
        export type id = _T_ID
        
        export namespace port {
            
            export namespace O {
                
                export namespace port {
                }
                export type port = _T_ID
                
                export namespace compass_point {
                    
                    export namespace O {
                    }
                    export type O = _T_ID
                }
                export type compass_point = _pi.Optional_Value<_T_ID>
            }
            export type O = {
                readonly 'port': _T_ID
                readonly 'compass point': _pi.Optional_Value<_T_ID>
            }
        }
        export type port = _pi.Optional_Value<{
            readonly 'port': _T_ID
            readonly 'compass point': _pi.Optional_Value<_T_ID>
        }>
    }
    
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
    
    export namespace _T_Subgraph {
        
        export namespace subgraph {
            
            export namespace O {
                
                export namespace O {
                }
                export type O = _T_ID
            }
            export type O = _pi.Optional_Value<_T_ID>
        }
        export type subgraph = _pi.Optional_Value<_pi.Optional_Value<_T_ID>>
        
        export namespace statements {
        }
        export type statements = _T_Statement_List
    }
    
    export namespace _T_Statement_List {
        
        export namespace L {
            
            export namespace SG {
                
                export namespace node {
                    
                    export namespace node {
                    }
                    export type node = _T_Node_ID
                    
                    export namespace attribute_list {
                    }
                    export type attribute_list = _T_Attribute_List
                }
                export type node = {
                    readonly 'node': _T_Node_ID
                    readonly 'attribute list': _T_Attribute_List
                }
                
                export namespace edge {
                    
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
                    
                    export namespace attributes {
                    }
                    export type attributes = _T_Attribute_List
                }
                export type edge = {
                    readonly 'left': _i_core._T_State_Group<null, 
                        | readonly ['node', _T_Node_ID]
                        | readonly ['subgraph', _T_Subgraph]
                    >
                    readonly 'right': _i_core._T_List<null, _i_core._T_State_Group<null, 
                        | readonly ['node', _T_Node_ID]
                        | readonly ['subgraph', _T_Subgraph]
                    >>
                    readonly 'attributes': _T_Attribute_List
                }
                
                export namespace attribute_list {
                    
                    export namespace _type {
                        
                        export namespace SG {
                            export type graph = null
                            export type node = null
                            export type edge = null
                        }
                        export type SG = 
                            | readonly ['graph', null]
                            | readonly ['node', null]
                            | readonly ['edge', null]
                    }
                    export type _type = _i_core._T_State_Group<null, 
                        | readonly ['graph', null]
                        | readonly ['node', null]
                        | readonly ['edge', null]
                    >
                    
                    export namespace attributes {
                    }
                    export type attributes = _T_Attribute_List
                }
                export type attribute_list = {
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['graph', null]
                        | readonly ['node', null]
                        | readonly ['edge', null]
                    >
                    readonly 'attributes': _T_Attribute_List
                }
                
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
                
                export namespace subgraph {
                }
                export type subgraph = _T_Subgraph
            }
            export type SG = 
                | readonly ['node', {
                    readonly 'node': _T_Node_ID
                    readonly 'attribute list': _T_Attribute_List
                }]
                | readonly ['edge', {
                    readonly 'left': _i_core._T_State_Group<null, 
                        | readonly ['node', _T_Node_ID]
                        | readonly ['subgraph', _T_Subgraph]
                    >
                    readonly 'right': _i_core._T_List<null, _i_core._T_State_Group<null, 
                        | readonly ['node', _T_Node_ID]
                        | readonly ['subgraph', _T_Subgraph]
                    >>
                    readonly 'attributes': _T_Attribute_List
                }]
                | readonly ['attribute list', {
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['graph', null]
                        | readonly ['node', null]
                        | readonly ['edge', null]
                    >
                    readonly 'attributes': _T_Attribute_List
                }]
                | readonly ['attribute assignment', {
                    readonly 'name': _T_ID
                    readonly 'value': _T_ID
                }]
                | readonly ['subgraph', _T_Subgraph]
        }
        export type L = _i_core._T_State_Group<null, 
            | readonly ['node', {
                readonly 'node': _T_Node_ID
                readonly 'attribute list': _T_Attribute_List
            }]
            | readonly ['edge', {
                readonly 'left': _i_core._T_State_Group<null, 
                    | readonly ['node', _T_Node_ID]
                    | readonly ['subgraph', _T_Subgraph]
                >
                readonly 'right': _i_core._T_List<null, _i_core._T_State_Group<null, 
                    | readonly ['node', _T_Node_ID]
                    | readonly ['subgraph', _T_Subgraph]
                >>
                readonly 'attributes': _T_Attribute_List
            }]
            | readonly ['attribute list', {
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['graph', null]
                    | readonly ['node', null]
                    | readonly ['edge', null]
                >
                readonly 'attributes': _T_Attribute_List
            }]
            | readonly ['attribute assignment', {
                readonly 'name': _T_ID
                readonly 'value': _T_ID
            }]
            | readonly ['subgraph', _T_Subgraph]
        >
    }
    
    export namespace _T_Graph {
        export type strict = boolean
        
        export namespace _type {
            
            export namespace SG {
                export type graph = null
                export type digraph = null
            }
            export type SG = 
                | readonly ['graph', null]
                | readonly ['digraph', null]
        }
        export type _type = _i_core._T_State_Group<null, 
            | readonly ['graph', null]
            | readonly ['digraph', null]
        >
        
        export namespace name {
            
            export namespace O {
            }
            export type O = _T_ID
        }
        export type name = _pi.Optional_Value<_T_ID>
        
        export namespace statements {
        }
        export type statements = _T_Statement_List
    }
    
    // *** ALIASES FOR NESTED TYPES
    
    export namespace ID {
        
        export namespace SG {
            export type id = string
            export type _string = string
            export type html = string
            export type _number = number
        }
        export type SG = 
            | readonly ['id', string]
            | readonly ['string', string]
            | readonly ['html', string]
            | readonly ['number', number]
    }
    
    export namespace Node_ID {
        
        export namespace id {
        }
        export type id = _T_ID
        
        export namespace port {
            
            export namespace O {
                
                export namespace port {
                }
                export type port = _T_ID
                
                export namespace compass_point {
                    
                    export namespace O {
                    }
                    export type O = _T_ID
                }
                export type compass_point = _pi.Optional_Value<_T_ID>
            }
            export type O = {
                readonly 'port': _T_ID
                readonly 'compass point': _pi.Optional_Value<_T_ID>
            }
        }
        export type port = _pi.Optional_Value<{
            readonly 'port': _T_ID
            readonly 'compass point': _pi.Optional_Value<_T_ID>
        }>
    }
    
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
    
    export namespace Subgraph {
        
        export namespace subgraph {
            
            export namespace O {
                
                export namespace O {
                }
                export type O = _T_ID
            }
            export type O = _pi.Optional_Value<_T_ID>
        }
        export type subgraph = _pi.Optional_Value<_pi.Optional_Value<_T_ID>>
        
        export namespace statements {
        }
        export type statements = _T_Statement_List
    }
    
    export namespace Statement_List {
        
        export namespace L {
            
            export namespace SG {
                
                export namespace node {
                    
                    export namespace node {
                    }
                    export type node = _T_Node_ID
                    
                    export namespace attribute_list {
                    }
                    export type attribute_list = _T_Attribute_List
                }
                export type node = {
                    readonly 'node': _T_Node_ID
                    readonly 'attribute list': _T_Attribute_List
                }
                
                export namespace edge {
                    
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
                    
                    export namespace attributes {
                    }
                    export type attributes = _T_Attribute_List
                }
                export type edge = {
                    readonly 'left': _i_core._T_State_Group<null, 
                        | readonly ['node', _T_Node_ID]
                        | readonly ['subgraph', _T_Subgraph]
                    >
                    readonly 'right': _i_core._T_List<null, _i_core._T_State_Group<null, 
                        | readonly ['node', _T_Node_ID]
                        | readonly ['subgraph', _T_Subgraph]
                    >>
                    readonly 'attributes': _T_Attribute_List
                }
                
                export namespace attribute_list {
                    
                    export namespace _type {
                        
                        export namespace SG {
                            export type graph = null
                            export type node = null
                            export type edge = null
                        }
                        export type SG = 
                            | readonly ['graph', null]
                            | readonly ['node', null]
                            | readonly ['edge', null]
                    }
                    export type _type = _i_core._T_State_Group<null, 
                        | readonly ['graph', null]
                        | readonly ['node', null]
                        | readonly ['edge', null]
                    >
                    
                    export namespace attributes {
                    }
                    export type attributes = _T_Attribute_List
                }
                export type attribute_list = {
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['graph', null]
                        | readonly ['node', null]
                        | readonly ['edge', null]
                    >
                    readonly 'attributes': _T_Attribute_List
                }
                
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
                
                export namespace subgraph {
                }
                export type subgraph = _T_Subgraph
            }
            export type SG = 
                | readonly ['node', {
                    readonly 'node': _T_Node_ID
                    readonly 'attribute list': _T_Attribute_List
                }]
                | readonly ['edge', {
                    readonly 'left': _i_core._T_State_Group<null, 
                        | readonly ['node', _T_Node_ID]
                        | readonly ['subgraph', _T_Subgraph]
                    >
                    readonly 'right': _i_core._T_List<null, _i_core._T_State_Group<null, 
                        | readonly ['node', _T_Node_ID]
                        | readonly ['subgraph', _T_Subgraph]
                    >>
                    readonly 'attributes': _T_Attribute_List
                }]
                | readonly ['attribute list', {
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['graph', null]
                        | readonly ['node', null]
                        | readonly ['edge', null]
                    >
                    readonly 'attributes': _T_Attribute_List
                }]
                | readonly ['attribute assignment', {
                    readonly 'name': _T_ID
                    readonly 'value': _T_ID
                }]
                | readonly ['subgraph', _T_Subgraph]
        }
        export type L = _i_core._T_State_Group<null, 
            | readonly ['node', {
                readonly 'node': _T_Node_ID
                readonly 'attribute list': _T_Attribute_List
            }]
            | readonly ['edge', {
                readonly 'left': _i_core._T_State_Group<null, 
                    | readonly ['node', _T_Node_ID]
                    | readonly ['subgraph', _T_Subgraph]
                >
                readonly 'right': _i_core._T_List<null, _i_core._T_State_Group<null, 
                    | readonly ['node', _T_Node_ID]
                    | readonly ['subgraph', _T_Subgraph]
                >>
                readonly 'attributes': _T_Attribute_List
            }]
            | readonly ['attribute list', {
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['graph', null]
                    | readonly ['node', null]
                    | readonly ['edge', null]
                >
                readonly 'attributes': _T_Attribute_List
            }]
            | readonly ['attribute assignment', {
                readonly 'name': _T_ID
                readonly 'value': _T_ID
            }]
            | readonly ['subgraph', _T_Subgraph]
        >
    }
    
    export namespace Graph {
        export type strict = boolean
        
        export namespace _type {
            
            export namespace SG {
                export type graph = null
                export type digraph = null
            }
            export type SG = 
                | readonly ['graph', null]
                | readonly ['digraph', null]
        }
        export type _type = _i_core._T_State_Group<null, 
            | readonly ['graph', null]
            | readonly ['digraph', null]
        >
        
        export namespace name {
            
            export namespace O {
            }
            export type O = _T_ID
        }
        export type name = _pi.Optional_Value<_T_ID>
        
        export namespace statements {
        }
        export type statements = _T_Statement_List
    }
