import * as _pi from "pareto-core-interface"
    
    import * as _i_core from "../../../core/unconstrained"
    import * as _i_imports_graphviz from "../../graphviz_high_level/data_types/target"
    
    // **** TYPES
    
    export type _T_Graphviz_Directory = _i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
        | readonly ['file', _i_imports_graphviz._T_Graph]
        | readonly ['directory', _T_Graphviz_Directory]
    >>
    
    // **** FRIENDLY NAMES FOR THE GLOBAL TYPES
    
    export type Graphviz_Directory = _T_Graphviz_Directory
    
    // **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES
    
    export namespace _T_Graphviz_Directory {
        
        export namespace D {
            
            export namespace SG {
                
                export namespace file {
                }
                export type file = _i_imports_graphviz._T_Graph
                
                export namespace directory {
                }
                export type directory = _T_Graphviz_Directory
            }
            export type SG = 
                | readonly ['file', _i_imports_graphviz._T_Graph]
                | readonly ['directory', _T_Graphviz_Directory]
        }
        export type D = _i_core._T_State_Group<null, 
            | readonly ['file', _i_imports_graphviz._T_Graph]
            | readonly ['directory', _T_Graphviz_Directory]
        >
    }
    
    // *** ALIASES FOR NESTED TYPES
    
    export namespace Graphviz_Directory {
        
        export namespace D {
            
            export namespace SG {
                
                export namespace file {
                }
                export type file = _i_imports_graphviz._T_Graph
                
                export namespace directory {
                }
                export type directory = _T_Graphviz_Directory
            }
            export type SG = 
                | readonly ['file', _i_imports_graphviz._T_Graph]
                | readonly ['directory', _T_Graphviz_Directory]
        }
        export type D = _i_core._T_State_Group<null, 
            | readonly ['file', _i_imports_graphviz._T_Graph]
            | readonly ['directory', _T_Graphviz_Directory]
        >
    }
