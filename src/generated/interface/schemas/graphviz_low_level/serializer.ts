import * as _pt from 'exupery-core-types'

import * as _i_in from "./unconstrained"
import * as _i_out from "../../core/astn_target"

// **** TYPES

export type _T_Value_Serializers = {
    readonly 'boolean': (
        $$_: boolean,
        $$_p: null,
    ) => string
    readonly 'custom numbers': null
    readonly 'default number': (
        $$_: number,
        $$_p: null,
    ) => string
}

export type _T_s_Attribute_List = (
    $$_: _i_in._T_Attribute_List,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Graph = (
    $$_: _i_in._T_Graph,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_ID = (
    $$_: _i_in._T_ID,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Node_ID = (
    $$_: _i_in._T_Node_ID,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Statement_List = (
    $$_: _i_in._T_Statement_List,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Subgraph = (
    $$_: _i_in._T_Subgraph,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Value_Serializers = _T_Value_Serializers

export type s_Attribute_List = _T_s_Attribute_List

export type s_Graph = _T_s_Graph

export type s_ID = _T_s_ID

export type s_Node_ID = _T_s_Node_ID

export type s_Statement_List = _T_s_Statement_List

export type s_Subgraph = _T_s_Subgraph

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Value_Serializers {
    
    export namespace _boolean {
        export type CONTEXT = boolean
        
        export namespace PARAMS {
        }
        export type RESULT = string
    }
    export type _boolean = (
        $$_: boolean,
        $$_p: null,
    ) => string
    
    export namespace custom_numbers {
    }
    export type custom_numbers = null
    
    export namespace default_number {
        export type CONTEXT = number
        
        export namespace PARAMS {
        }
        export type RESULT = string
    }
    export type default_number = (
        $$_: number,
        $$_p: null,
    ) => string
}

export namespace _T_s_Attribute_List {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Attribute_List
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Graph {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Graph
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_ID {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_ID
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Node_ID {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Node_ID
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Statement_List {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Statement_List
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Subgraph {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Subgraph
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

// *** ALIASES FOR NESTED TYPES

export namespace Value_Serializers {
    
    export namespace _boolean {
        export type CONTEXT = boolean
        
        export namespace PARAMS {
        }
        export type RESULT = string
    }
    export type _boolean = (
        $$_: boolean,
        $$_p: null,
    ) => string
    
    export namespace custom_numbers {
    }
    export type custom_numbers = null
    
    export namespace default_number {
        export type CONTEXT = number
        
        export namespace PARAMS {
        }
        export type RESULT = string
    }
    export type default_number = (
        $$_: number,
        $$_p: null,
    ) => string
}

export namespace s_Attribute_List {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Attribute_List
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Graph {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Graph
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_ID {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_ID
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Node_ID {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Node_ID
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Statement_List {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Statement_List
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Subgraph {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Subgraph
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}
