import * as _pt from 'exupery-core-types'

import * as _i_in from "./data_types/unconstrained"
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

export type _T_s_Attribute_Value = (
    $$_: _i_in._T_Attribute_Value,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Edge_Attributes = (
    $$_: _i_in._T_Edge_Attributes,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_End_Point_Specification = (
    $$_: _i_in._T_End_Point_Specification,
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

export type _T_s_Graph_Attributes = (
    $$_: _i_in._T_Graph_Attributes,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Node_Attributes = (
    $$_: _i_in._T_Node_Attributes,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Tree = (
    $$_: _i_in._T_Tree,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Value_Serializers = _T_Value_Serializers

export type s_Attribute_Value = _T_s_Attribute_Value

export type s_Edge_Attributes = _T_s_Edge_Attributes

export type s_End_Point_Specification = _T_s_End_Point_Specification

export type s_Graph = _T_s_Graph

export type s_Graph_Attributes = _T_s_Graph_Attributes

export type s_Node_Attributes = _T_s_Node_Attributes

export type s_Tree = _T_s_Tree

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

export namespace _T_s_Attribute_Value {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Attribute_Value
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Edge_Attributes {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Edge_Attributes
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_End_Point_Specification {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_End_Point_Specification
    
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

export namespace _T_s_Graph_Attributes {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Graph_Attributes
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Node_Attributes {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Node_Attributes
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Tree {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Tree
    
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

export namespace s_Attribute_Value {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Attribute_Value
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Edge_Attributes {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Edge_Attributes
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_End_Point_Specification {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_End_Point_Specification
    
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

export namespace s_Graph_Attributes {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Graph_Attributes
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Node_Attributes {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Node_Attributes
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Tree {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Tree
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}
