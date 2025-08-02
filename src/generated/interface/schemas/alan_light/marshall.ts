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

export type _T_s_Identifier = (
    $$_: _i_in._T_Identifier,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Node = (
    $$_: _i_in._T_Node,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Path = (
    $$_: _i_in._T_Path,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Root = (
    $$_: _i_in._T_Root,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Value_Serializers = _T_Value_Serializers

export type s_Identifier = _T_s_Identifier

export type s_Node = _T_s_Node

export type s_Path = _T_s_Path

export type s_Root = _T_s_Root

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

export namespace _T_s_Identifier {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Identifier
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Node {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Node
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Path {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Path
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Root {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Root
    
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

export namespace s_Identifier {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Identifier
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Node {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Node
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Path {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Path
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Root {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Root
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}
