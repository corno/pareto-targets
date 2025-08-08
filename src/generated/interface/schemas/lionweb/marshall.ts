import * as _pt from 'exupery-core-types'

import * as _i_in from "./data_types/unconstrained"
import * as _i_out from "../../core/astn_target"
import * as _i_vs from "./value_serializers"

// **** TYPES

export type _T_MetaPointer = (
    $$_: _i_in._T_MetaPointer,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_SerializationChunk = (
    $$_: _i_in._T_SerializationChunk,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_SerializationChunks = (
    $$_: _i_in._T_SerializationChunks,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type MetaPointer = _T_MetaPointer

export type SerializationChunk = _T_SerializationChunk

export type SerializationChunks = _T_SerializationChunks

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_MetaPointer {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_MetaPointer
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_SerializationChunk {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_SerializationChunk
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_SerializationChunks {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_SerializationChunks
    
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

export namespace MetaPointer {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_MetaPointer
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace SerializationChunk {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_SerializationChunk
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace SerializationChunks {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_SerializationChunks
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}
