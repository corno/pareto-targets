import * as _et from 'pareto-core-interface'

import * as _i_in from "./data_types/source"
import * as _i_vs from "./value_serializers"

// **** TYPES

export type _T_Graphviz_Directory = (
    $$_: _i_in._T_Graphviz_Directory,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Graphviz_Directory = _T_Graphviz_Directory

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Graphviz_Directory {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Graphviz_Directory
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

// *** ALIASES FOR NESTED TYPES

export namespace Graphviz_Directory {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Graphviz_Directory
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}
