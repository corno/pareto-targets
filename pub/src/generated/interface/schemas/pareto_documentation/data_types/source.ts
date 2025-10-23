import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/resolved"
import * as _i_imports_graphviz from "../../graphviz_high_level/data_types/source"

// **** TYPES

export type _T_Graphviz_Directory = _i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
    | readonly ['directory', _T_Graphviz_Directory]
    | readonly ['file', _i_imports_graphviz._T_Graph]
>>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Graphviz_Directory = _T_Graphviz_Directory

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Graphviz_Directory {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace directory {
            }
            export type directory = _T_Graphviz_Directory
            
            export namespace file {
            }
            export type file = _i_imports_graphviz._T_Graph
        }
        export type SG = 
            | readonly ['directory', _T_Graphviz_Directory]
            | readonly ['file', _i_imports_graphviz._T_Graph]
    }
    export type D = _i_core._T_State_Group<null, 
        | readonly ['directory', _T_Graphviz_Directory]
        | readonly ['file', _i_imports_graphviz._T_Graph]
    >
}

// *** ALIASES FOR NESTED TYPES

export namespace Graphviz_Directory {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace directory {
            }
            export type directory = _T_Graphviz_Directory
            
            export namespace file {
            }
            export type file = _i_imports_graphviz._T_Graph
        }
        export type SG = 
            | readonly ['directory', _T_Graphviz_Directory]
            | readonly ['file', _i_imports_graphviz._T_Graph]
    }
    export type D = _i_core._T_State_Group<null, 
        | readonly ['directory', _T_Graphviz_Directory]
        | readonly ['file', _i_imports_graphviz._T_Graph]
    >
}
