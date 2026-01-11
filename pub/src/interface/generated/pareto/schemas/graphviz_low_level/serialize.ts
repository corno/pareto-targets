import * as _pi from "pareto-core-interface"
    
    import * as _i_in from "./data_types/source"
    import * as _i_vs from "./value_serializers"
    
    // **** TYPES
    
    export type _T_ID = (
        $$_: _i_in._T_ID,
        $$_p: {
            readonly 'value serializers': _i_vs._T_Value_Serializers
        },
    ) => string
    
    export type _T_Node_ID = (
        $$_: _i_in._T_Node_ID,
        $$_p: {
            readonly 'value serializers': _i_vs._T_Value_Serializers
        },
    ) => string
    
    export type _T_Attribute_List = (
        $$_: _i_in._T_Attribute_List,
        $$_p: {
            readonly 'value serializers': _i_vs._T_Value_Serializers
        },
    ) => string
    
    export type _T_Subgraph = (
        $$_: _i_in._T_Subgraph,
        $$_p: {
            readonly 'value serializers': _i_vs._T_Value_Serializers
        },
    ) => string
    
    export type _T_Statement_List = (
        $$_: _i_in._T_Statement_List,
        $$_p: {
            readonly 'value serializers': _i_vs._T_Value_Serializers
        },
    ) => string
    
    export type _T_Graph = (
        $$_: _i_in._T_Graph,
        $$_p: {
            readonly 'value serializers': _i_vs._T_Value_Serializers
        },
    ) => string
    
    // **** FRIENDLY NAMES FOR THE GLOBAL TYPES
    
    export type ID = _T_ID
    
    export type Node_ID = _T_Node_ID
    
    export type Attribute_List = _T_Attribute_List
    
    export type Subgraph = _T_Subgraph
    
    export type Statement_List = _T_Statement_List
    
    export type Graph = _T_Graph
    
    // **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES
    
    export namespace _T_ID {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_ID
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        export type RESULT = string
    }
    
    export namespace _T_Node_ID {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Node_ID
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        export type RESULT = string
    }
    
    export namespace _T_Attribute_List {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Attribute_List
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        export type RESULT = string
    }
    
    export namespace _T_Subgraph {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Subgraph
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        export type RESULT = string
    }
    
    export namespace _T_Statement_List {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Statement_List
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        export type RESULT = string
    }
    
    export namespace _T_Graph {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Graph
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        export type RESULT = string
    }
    
    // *** ALIASES FOR NESTED TYPES
    
    export namespace ID {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_ID
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        export type RESULT = string
    }
    
    export namespace Node_ID {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Node_ID
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        export type RESULT = string
    }
    
    export namespace Attribute_List {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Attribute_List
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        export type RESULT = string
    }
    
    export namespace Subgraph {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Subgraph
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        export type RESULT = string
    }
    
    export namespace Statement_List {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Statement_List
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        export type RESULT = string
    }
    
    export namespace Graph {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Graph
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        export type RESULT = string
    }
