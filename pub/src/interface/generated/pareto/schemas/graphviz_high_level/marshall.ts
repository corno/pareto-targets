import * as _pt from 'exupery-core-types'

import * as _i_out from "../../core/astn_target"
import * as _i_in from "./data_types/source"
import * as _i_vs from "./value_serializers"

// **** TYPES

export type _T_Graph_Attributes = (
    $$_: _i_in._T_Graph_Attributes,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Node_Attributes = (
    $$_: _i_in._T_Node_Attributes,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Tree = (
    $$_: _i_in._T_Tree,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_End_Point_Specification = (
    $$_: _i_in._T_End_Point_Specification,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Edge_Attributes = (
    $$_: _i_in._T_Edge_Attributes,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Graph = (
    $$_: _i_in._T_Graph,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Attribute_Value = (
    $$_: _i_in._T_Attribute_Value,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Graph_Attributes = _T_Graph_Attributes

export type Node_Attributes = _T_Node_Attributes

export type Tree = _T_Tree

export type End_Point_Specification = _T_End_Point_Specification

export type Edge_Attributes = _T_Edge_Attributes

export type Graph = _T_Graph

export type Attribute_Value = _T_Attribute_Value

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Graph_Attributes {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Graph_Attributes
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Node_Attributes {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Node_Attributes
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Tree {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Tree
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_End_Point_Specification {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_End_Point_Specification
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Edge_Attributes {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Edge_Attributes
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
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
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Attribute_Value {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Attribute_Value
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

// *** ALIASES FOR NESTED TYPES

export namespace Graph_Attributes {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Graph_Attributes
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Node_Attributes {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Node_Attributes
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Tree {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Tree
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace End_Point_Specification {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_End_Point_Specification
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Edge_Attributes {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Edge_Attributes
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
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
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Attribute_Value {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Attribute_Value
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}
