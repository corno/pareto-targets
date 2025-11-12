import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/unconstrained"

// **** TYPES

export type _T_Identifier = string

export type _T_Path = {
    readonly 'up steps': _i_core._T_List<null, null>
    readonly 'context': {
        readonly 'sibling': null
        readonly 'state constraint': {
            readonly 'name': _T_Identifier
        }
    }
    readonly 'selection steps': _i_core._T_List<null, {
        readonly 'group': {
            readonly 'name': _T_Identifier
        }
        readonly 'state constraint': {
            readonly 'name': _T_Identifier
        }
        readonly 'reference': {
            readonly 'name': _T_Identifier
        }
    }>
}

export type _T_Node = {
    readonly 'properties': _i_core._T_Dictionary<null, {
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['collection', {
                readonly 'node': _T_Node
                readonly 'key': _T_Identifier
            }]
            | readonly ['group', {
                readonly 'node': _T_Node
            }]
            | readonly ['text', {
                readonly 'constraint': _pt.Optional_Value<{
                    readonly 'path': _T_Path
                    readonly 'dictionary': _T_Identifier
                }>
            }]
            | readonly ['state group', {
                readonly 'states': _i_core._T_Dictionary<null, {
                    readonly 'constraints': _i_core._T_Dictionary<null, {
                        readonly 'path': _T_Path
                    }>
                    readonly 'node': _T_Node
                }>
            }]
        >
    }>
}

export type _T_Root = {
    readonly 'numerical types': _i_core._T_Dictionary<null, null>
    readonly 'root': _T_Node
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Identifier = _T_Identifier

export type Path = _T_Path

export type Node = _T_Node

export type Root = _T_Root

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Path {
    
    export namespace up_steps {
        
        export namespace L {
        }
        export type L = null
    }
    export type up_steps = _i_core._T_List<null, null>
    
    export namespace context {
        
        export namespace sibling {
        }
        export type sibling = null
        
        export namespace state_constraint {
            
            export namespace name {
            }
            export type name = _T_Identifier
        }
        export type state_constraint = {
            readonly 'name': _T_Identifier
        }
    }
    export type context = {
        readonly 'sibling': null
        readonly 'state constraint': {
            readonly 'name': _T_Identifier
        }
    }
    
    export namespace selection_steps {
        
        export namespace L {
            
            export namespace group {
                
                export namespace name {
                }
                export type name = _T_Identifier
            }
            export type group = {
                readonly 'name': _T_Identifier
            }
            
            export namespace state_constraint {
                
                export namespace name {
                }
                export type name = _T_Identifier
            }
            export type state_constraint = {
                readonly 'name': _T_Identifier
            }
            
            export namespace reference {
                
                export namespace name {
                }
                export type name = _T_Identifier
            }
            export type reference = {
                readonly 'name': _T_Identifier
            }
        }
        export type L = {
            readonly 'group': {
                readonly 'name': _T_Identifier
            }
            readonly 'state constraint': {
                readonly 'name': _T_Identifier
            }
            readonly 'reference': {
                readonly 'name': _T_Identifier
            }
        }
    }
    export type selection_steps = _i_core._T_List<null, {
        readonly 'group': {
            readonly 'name': _T_Identifier
        }
        readonly 'state constraint': {
            readonly 'name': _T_Identifier
        }
        readonly 'reference': {
            readonly 'name': _T_Identifier
        }
    }>
}

export namespace _T_Node {
    
    export namespace properties {
        
        export namespace D {
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace collection {
                        
                        export namespace node {
                        }
                        export type node = _T_Node
                        
                        export namespace key {
                        }
                        export type key = _T_Identifier
                    }
                    export type collection = {
                        readonly 'node': _T_Node
                        readonly 'key': _T_Identifier
                    }
                    
                    export namespace group {
                        
                        export namespace node {
                        }
                        export type node = _T_Node
                    }
                    export type group = {
                        readonly 'node': _T_Node
                    }
                    
                    export namespace text {
                        
                        export namespace constraint {
                            
                            export namespace O {
                                
                                export namespace path {
                                }
                                export type path = _T_Path
                                
                                export namespace dictionary {
                                }
                                export type dictionary = _T_Identifier
                            }
                            export type O = {
                                readonly 'path': _T_Path
                                readonly 'dictionary': _T_Identifier
                            }
                        }
                        export type constraint = _pt.Optional_Value<{
                            readonly 'path': _T_Path
                            readonly 'dictionary': _T_Identifier
                        }>
                    }
                    export type text = {
                        readonly 'constraint': _pt.Optional_Value<{
                            readonly 'path': _T_Path
                            readonly 'dictionary': _T_Identifier
                        }>
                    }
                    
                    export namespace state_group {
                        
                        export namespace states {
                            
                            export namespace D {
                                
                                export namespace constraints {
                                    
                                    export namespace D {
                                        
                                        export namespace path {
                                        }
                                        export type path = _T_Path
                                    }
                                    export type D = {
                                        readonly 'path': _T_Path
                                    }
                                }
                                export type constraints = _i_core._T_Dictionary<null, {
                                    readonly 'path': _T_Path
                                }>
                                
                                export namespace node {
                                }
                                export type node = _T_Node
                            }
                            export type D = {
                                readonly 'constraints': _i_core._T_Dictionary<null, {
                                    readonly 'path': _T_Path
                                }>
                                readonly 'node': _T_Node
                            }
                        }
                        export type states = _i_core._T_Dictionary<null, {
                            readonly 'constraints': _i_core._T_Dictionary<null, {
                                readonly 'path': _T_Path
                            }>
                            readonly 'node': _T_Node
                        }>
                    }
                    export type state_group = {
                        readonly 'states': _i_core._T_Dictionary<null, {
                            readonly 'constraints': _i_core._T_Dictionary<null, {
                                readonly 'path': _T_Path
                            }>
                            readonly 'node': _T_Node
                        }>
                    }
                }
                export type SG = 
                    | readonly ['collection', {
                        readonly 'node': _T_Node
                        readonly 'key': _T_Identifier
                    }]
                    | readonly ['group', {
                        readonly 'node': _T_Node
                    }]
                    | readonly ['text', {
                        readonly 'constraint': _pt.Optional_Value<{
                            readonly 'path': _T_Path
                            readonly 'dictionary': _T_Identifier
                        }>
                    }]
                    | readonly ['state group', {
                        readonly 'states': _i_core._T_Dictionary<null, {
                            readonly 'constraints': _i_core._T_Dictionary<null, {
                                readonly 'path': _T_Path
                            }>
                            readonly 'node': _T_Node
                        }>
                    }]
            }
            export type _type = _i_core._T_State_Group<null, 
                | readonly ['collection', {
                    readonly 'node': _T_Node
                    readonly 'key': _T_Identifier
                }]
                | readonly ['group', {
                    readonly 'node': _T_Node
                }]
                | readonly ['text', {
                    readonly 'constraint': _pt.Optional_Value<{
                        readonly 'path': _T_Path
                        readonly 'dictionary': _T_Identifier
                    }>
                }]
                | readonly ['state group', {
                    readonly 'states': _i_core._T_Dictionary<null, {
                        readonly 'constraints': _i_core._T_Dictionary<null, {
                            readonly 'path': _T_Path
                        }>
                        readonly 'node': _T_Node
                    }>
                }]
            >
        }
        export type D = {
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['collection', {
                    readonly 'node': _T_Node
                    readonly 'key': _T_Identifier
                }]
                | readonly ['group', {
                    readonly 'node': _T_Node
                }]
                | readonly ['text', {
                    readonly 'constraint': _pt.Optional_Value<{
                        readonly 'path': _T_Path
                        readonly 'dictionary': _T_Identifier
                    }>
                }]
                | readonly ['state group', {
                    readonly 'states': _i_core._T_Dictionary<null, {
                        readonly 'constraints': _i_core._T_Dictionary<null, {
                            readonly 'path': _T_Path
                        }>
                        readonly 'node': _T_Node
                    }>
                }]
            >
        }
    }
    export type properties = _i_core._T_Dictionary<null, {
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['collection', {
                readonly 'node': _T_Node
                readonly 'key': _T_Identifier
            }]
            | readonly ['group', {
                readonly 'node': _T_Node
            }]
            | readonly ['text', {
                readonly 'constraint': _pt.Optional_Value<{
                    readonly 'path': _T_Path
                    readonly 'dictionary': _T_Identifier
                }>
            }]
            | readonly ['state group', {
                readonly 'states': _i_core._T_Dictionary<null, {
                    readonly 'constraints': _i_core._T_Dictionary<null, {
                        readonly 'path': _T_Path
                    }>
                    readonly 'node': _T_Node
                }>
            }]
        >
    }>
}

export namespace _T_Root {
    
    export namespace numerical_types {
        
        export namespace D {
        }
        export type D = null
    }
    export type numerical_types = _i_core._T_Dictionary<null, null>
    
    export namespace root {
    }
    export type root = _T_Node
}

// *** ALIASES FOR NESTED TYPES

export namespace Path {
    
    export namespace up_steps {
        
        export namespace L {
        }
        export type L = null
    }
    export type up_steps = _i_core._T_List<null, null>
    
    export namespace context {
        
        export namespace sibling {
        }
        export type sibling = null
        
        export namespace state_constraint {
            
            export namespace name {
            }
            export type name = _T_Identifier
        }
        export type state_constraint = {
            readonly 'name': _T_Identifier
        }
    }
    export type context = {
        readonly 'sibling': null
        readonly 'state constraint': {
            readonly 'name': _T_Identifier
        }
    }
    
    export namespace selection_steps {
        
        export namespace L {
            
            export namespace group {
                
                export namespace name {
                }
                export type name = _T_Identifier
            }
            export type group = {
                readonly 'name': _T_Identifier
            }
            
            export namespace state_constraint {
                
                export namespace name {
                }
                export type name = _T_Identifier
            }
            export type state_constraint = {
                readonly 'name': _T_Identifier
            }
            
            export namespace reference {
                
                export namespace name {
                }
                export type name = _T_Identifier
            }
            export type reference = {
                readonly 'name': _T_Identifier
            }
        }
        export type L = {
            readonly 'group': {
                readonly 'name': _T_Identifier
            }
            readonly 'state constraint': {
                readonly 'name': _T_Identifier
            }
            readonly 'reference': {
                readonly 'name': _T_Identifier
            }
        }
    }
    export type selection_steps = _i_core._T_List<null, {
        readonly 'group': {
            readonly 'name': _T_Identifier
        }
        readonly 'state constraint': {
            readonly 'name': _T_Identifier
        }
        readonly 'reference': {
            readonly 'name': _T_Identifier
        }
    }>
}

export namespace Node {
    
    export namespace properties {
        
        export namespace D {
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace collection {
                        
                        export namespace node {
                        }
                        export type node = _T_Node
                        
                        export namespace key {
                        }
                        export type key = _T_Identifier
                    }
                    export type collection = {
                        readonly 'node': _T_Node
                        readonly 'key': _T_Identifier
                    }
                    
                    export namespace group {
                        
                        export namespace node {
                        }
                        export type node = _T_Node
                    }
                    export type group = {
                        readonly 'node': _T_Node
                    }
                    
                    export namespace text {
                        
                        export namespace constraint {
                            
                            export namespace O {
                                
                                export namespace path {
                                }
                                export type path = _T_Path
                                
                                export namespace dictionary {
                                }
                                export type dictionary = _T_Identifier
                            }
                            export type O = {
                                readonly 'path': _T_Path
                                readonly 'dictionary': _T_Identifier
                            }
                        }
                        export type constraint = _pt.Optional_Value<{
                            readonly 'path': _T_Path
                            readonly 'dictionary': _T_Identifier
                        }>
                    }
                    export type text = {
                        readonly 'constraint': _pt.Optional_Value<{
                            readonly 'path': _T_Path
                            readonly 'dictionary': _T_Identifier
                        }>
                    }
                    
                    export namespace state_group {
                        
                        export namespace states {
                            
                            export namespace D {
                                
                                export namespace constraints {
                                    
                                    export namespace D {
                                        
                                        export namespace path {
                                        }
                                        export type path = _T_Path
                                    }
                                    export type D = {
                                        readonly 'path': _T_Path
                                    }
                                }
                                export type constraints = _i_core._T_Dictionary<null, {
                                    readonly 'path': _T_Path
                                }>
                                
                                export namespace node {
                                }
                                export type node = _T_Node
                            }
                            export type D = {
                                readonly 'constraints': _i_core._T_Dictionary<null, {
                                    readonly 'path': _T_Path
                                }>
                                readonly 'node': _T_Node
                            }
                        }
                        export type states = _i_core._T_Dictionary<null, {
                            readonly 'constraints': _i_core._T_Dictionary<null, {
                                readonly 'path': _T_Path
                            }>
                            readonly 'node': _T_Node
                        }>
                    }
                    export type state_group = {
                        readonly 'states': _i_core._T_Dictionary<null, {
                            readonly 'constraints': _i_core._T_Dictionary<null, {
                                readonly 'path': _T_Path
                            }>
                            readonly 'node': _T_Node
                        }>
                    }
                }
                export type SG = 
                    | readonly ['collection', {
                        readonly 'node': _T_Node
                        readonly 'key': _T_Identifier
                    }]
                    | readonly ['group', {
                        readonly 'node': _T_Node
                    }]
                    | readonly ['text', {
                        readonly 'constraint': _pt.Optional_Value<{
                            readonly 'path': _T_Path
                            readonly 'dictionary': _T_Identifier
                        }>
                    }]
                    | readonly ['state group', {
                        readonly 'states': _i_core._T_Dictionary<null, {
                            readonly 'constraints': _i_core._T_Dictionary<null, {
                                readonly 'path': _T_Path
                            }>
                            readonly 'node': _T_Node
                        }>
                    }]
            }
            export type _type = _i_core._T_State_Group<null, 
                | readonly ['collection', {
                    readonly 'node': _T_Node
                    readonly 'key': _T_Identifier
                }]
                | readonly ['group', {
                    readonly 'node': _T_Node
                }]
                | readonly ['text', {
                    readonly 'constraint': _pt.Optional_Value<{
                        readonly 'path': _T_Path
                        readonly 'dictionary': _T_Identifier
                    }>
                }]
                | readonly ['state group', {
                    readonly 'states': _i_core._T_Dictionary<null, {
                        readonly 'constraints': _i_core._T_Dictionary<null, {
                            readonly 'path': _T_Path
                        }>
                        readonly 'node': _T_Node
                    }>
                }]
            >
        }
        export type D = {
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['collection', {
                    readonly 'node': _T_Node
                    readonly 'key': _T_Identifier
                }]
                | readonly ['group', {
                    readonly 'node': _T_Node
                }]
                | readonly ['text', {
                    readonly 'constraint': _pt.Optional_Value<{
                        readonly 'path': _T_Path
                        readonly 'dictionary': _T_Identifier
                    }>
                }]
                | readonly ['state group', {
                    readonly 'states': _i_core._T_Dictionary<null, {
                        readonly 'constraints': _i_core._T_Dictionary<null, {
                            readonly 'path': _T_Path
                        }>
                        readonly 'node': _T_Node
                    }>
                }]
            >
        }
    }
    export type properties = _i_core._T_Dictionary<null, {
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['collection', {
                readonly 'node': _T_Node
                readonly 'key': _T_Identifier
            }]
            | readonly ['group', {
                readonly 'node': _T_Node
            }]
            | readonly ['text', {
                readonly 'constraint': _pt.Optional_Value<{
                    readonly 'path': _T_Path
                    readonly 'dictionary': _T_Identifier
                }>
            }]
            | readonly ['state group', {
                readonly 'states': _i_core._T_Dictionary<null, {
                    readonly 'constraints': _i_core._T_Dictionary<null, {
                        readonly 'path': _T_Path
                    }>
                    readonly 'node': _T_Node
                }>
            }]
        >
    }>
}

export namespace Root {
    
    export namespace numerical_types {
        
        export namespace D {
        }
        export type D = null
    }
    export type numerical_types = _i_core._T_Dictionary<null, null>
    
    export namespace root {
    }
    export type root = _T_Node
}
