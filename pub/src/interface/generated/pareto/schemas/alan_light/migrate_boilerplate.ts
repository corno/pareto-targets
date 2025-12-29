import * as _et from 'pareto-core-interface'

import * as _i_out from "./data_types/target"
import * as _i_in from "./data_types/source"

// **** TYPES

export type _T_Identifier = (
    $$_: _i_in._T_Identifier,
    $$_p: null,
) => _i_out._T_Identifier

export type _T_Path = (
    $$_: _i_in._T_Path,
    $$_p: null,
) => _i_out._T_Path

export type _T_Node = (
    $$_: _i_in._T_Node,
    $$_p: null,
) => _i_out._T_Node

export type _T_Root = (
    $$_: _i_in._T_Root,
    $$_p: null,
) => _i_out._T_Root

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Identifier = _T_Identifier

export type Path = _T_Path

export type Node = _T_Node

export type Root = _T_Root

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Identifier {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Identifier
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Identifier
}

export namespace _T_Path {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Path
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Path
}

export namespace _T_Node {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Node
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Node
}

export namespace _T_Root {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Root
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Root
}

// *** ALIASES FOR NESTED TYPES

export namespace Identifier {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Identifier
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Identifier
}

export namespace Path {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Path
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Path
}

export namespace Node {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Node
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Node
}

export namespace Root {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Root
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Root
}
