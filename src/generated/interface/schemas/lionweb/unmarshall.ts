import * as _pt from 'exupery-core-types'

import * as _i_in from "../../core/astn_source"
import * as _i_out from "./data_types/unconstrained"

// **** TYPES

export type _T_MetaPointer = (
    $$_: _i_in._T_Value,
    $$_p: null,
) => _i_out._T_MetaPointer

export type _T_SerializationChunk = (
    $$_: _i_in._T_Value,
    $$_p: null,
) => _i_out._T_SerializationChunk

export type _T_SerializationChunks = (
    $$_: _i_in._T_Value,
    $$_p: null,
) => _i_out._T_SerializationChunks

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type MetaPointer = _T_MetaPointer

export type SerializationChunk = _T_SerializationChunk

export type SerializationChunks = _T_SerializationChunks

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_MetaPointer {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_MetaPointer
}

export namespace _T_SerializationChunk {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_SerializationChunk
}

export namespace _T_SerializationChunks {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_SerializationChunks
}

// *** ALIASES FOR NESTED TYPES

export namespace MetaPointer {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_MetaPointer
}

export namespace SerializationChunk {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_SerializationChunk
}

export namespace SerializationChunks {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_SerializationChunks
}
