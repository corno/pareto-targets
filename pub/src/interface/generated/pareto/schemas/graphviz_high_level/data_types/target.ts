import * as _et from 'exupery-core-types'

import * as _i_core from "../../../core/unconstrained"

// **** TYPES

export type _T_Graph_Attributes = _i_core._T_List<null, _i_core._T_State_Group<null, 
    | readonly ['concentrate', boolean]
    | readonly ['charset', string]
    | readonly ['clusterrank', _i_core._T_State_Group<null, 
        | readonly ['none', null]
        | readonly ['local', null]
        | readonly ['global', null]
    >]
    | readonly ['color', string]
    | readonly ['color scheme', string]
    | readonly ['comment', string]
    | readonly ['compound', boolean]
    | readonly ['dpi', number]
    | readonly ['font color', string]
    | readonly ['font name', string]
    | readonly ['font path', string]
    | readonly ['font size', number]
    | readonly ['label', string]
    | readonly ['label distance', number]
    | readonly ['label scheme', number]
    | readonly ['label location', _i_core._T_State_Group<null, 
        | readonly ['top', null]
        | readonly ['bottom', null]
    >]
    | readonly ['landscape', boolean]
    | readonly ['layer list', string]
    | readonly ['layer separator', string]
    | readonly ['layers', string]
    | readonly ['margin', string]
    | readonly ['max iteration', number]
    | readonly ['mclimit', number]
    | readonly ['mindist', number]
    | readonly ['mode', _i_core._T_State_Group<null, 
        | readonly ['no output', null]
        | readonly ['out', null]
        | readonly ['in', null]
        | readonly ['in out', null]
    >]
    | readonly ['newrank', boolean]
    | readonly ['no loop', boolean]
    | readonly ['normalize', boolean]
    | readonly ['ordering', _i_core._T_State_Group<null, 
        | readonly ['out', null]
        | readonly ['in', null]
        | readonly ['in out', null]
    >]
    | readonly ['orientation', number]
    | readonly ['output order', _i_core._T_State_Group<null, 
        | readonly ['breadth first', null]
        | readonly ['dfs', null]
    >]
    | readonly ['overlap', string]
    | readonly ['output mode', _i_core._T_State_Group<null, 
        | readonly ['edges first', null]
        | readonly ['nodes first', null]
    >]
    | readonly ['pack', boolean]
    | readonly ['pack mode', _i_core._T_State_Group<null, 
        | readonly ['node', null]
        | readonly ['graph', null]
    >]
    | readonly ['pad', number]
    | readonly ['page', string]
    | readonly ['quadtree', boolean]
    | readonly ['quantum', number]
    | readonly ['rankdir', _i_core._T_State_Group<null, 
        | readonly ['top bottom', null]
        | readonly ['bottom top', null]
        | readonly ['left right', null]
        | readonly ['right left', null]
    >]
    | readonly ['ranksep', string]
    | readonly ['ratio', string]
    | readonly ['remincross', boolean]
    | readonly ['rotate', number]
    | readonly ['scale', string]
    | readonly ['searchsize', number]
    | readonly ['sep', string]
    | readonly ['showboxes', boolean]
    | readonly ['size', string]
    | readonly ['smoothing', _i_core._T_State_Group<null, 
        | readonly ['none', null]
        | readonly ['spring', null]
        | readonly ['triangle', null]
    >]
    | readonly ['sortv', boolean]
    | readonly ['splines', string]
    | readonly ['start', number]
    | readonly ['style', string]
    | readonly ['stylesheet', string]
    | readonly ['target', string]
    | readonly ['tooltip', string]
    | readonly ['truecolor', boolean]
    | readonly ['viewport', string]
    | readonly ['width', number]
    | readonly ['xdotversion', number]
    | readonly ['xlabel', string]
>>

export type _T_Node_Attributes = _i_core._T_List<null, _i_core._T_State_Group<null, 
    | readonly ['color', string]
    | readonly ['colorscheme', string]
    | readonly ['comment', string]
    | readonly ['concentrate', boolean]
    | readonly ['fill color', string]
    | readonly ['fixed size', boolean]
    | readonly ['font color', string]
    | readonly ['font name', string]
    | readonly ['font size', number]
    | readonly ['group', string]
    | readonly ['height', number]
    | readonly ['image', string]
    | readonly ['label', string]
    | readonly ['labelloc', _i_core._T_State_Group<null, 
        | readonly ['top', null]
        | readonly ['center', null]
        | readonly ['bottom', null]
    >]
    | readonly ['layers', string]
    | readonly ['margin', string]
    | readonly ['nojustify', boolean]
    | readonly ['orientation', number]
    | readonly ['pen width', number]
    | readonly ['peripheries', number]
    | readonly ['pos', string]
    | readonly ['rects', string]
    | readonly ['regular', boolean]
    | readonly ['root', boolean]
    | readonly ['shape', string]
    | readonly ['showboxes', boolean]
    | readonly ['sides', number]
    | readonly ['skew', number]
    | readonly ['style', string]
    | readonly ['target', string]
    | readonly ['tooltip', string]
    | readonly ['width', number]
    | readonly ['xlabel', string]
    | readonly ['xlp', string]
>>

export type _T_Tree = {
    readonly 'attributes': _T_Graph_Attributes
    readonly 'elements': _i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
        | readonly ['node', {
            readonly 'attributes': _T_Node_Attributes
        }]
        | readonly ['sub', {
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['group', null]
                | readonly ['cluster', null]
                | readonly ['subgraph', null]
            >
            readonly 'tree': _T_Tree
        }]
    >>
}

export type _T_End_Point_Specification = {
    readonly 'start': string
    readonly 'tail': _i_core._T_List<null, string>
    readonly 'port data': _et.Optional_Value<{
        readonly 'port': string
        readonly 'compass direction': _et.Optional_Value<string>
    }>
}

export type _T_Edge_Attributes = _i_core._T_List<null, _i_core._T_State_Group<null, 
    | readonly ['arrowhead', string]
    | readonly ['arrowsize', number]
    | readonly ['arrowtail', string]
    | readonly ['bgcolor', string]
    | readonly ['color', string]
    | readonly ['colorscheme', string]
    | readonly ['comment', string]
    | readonly ['constraint', boolean]
    | readonly ['decorate', boolean]
    | readonly ['dir', _i_core._T_State_Group<null, 
        | readonly ['forward', null]
        | readonly ['back', null]
        | readonly ['both', null]
        | readonly ['none', null]
    >]
    | readonly ['edge url', string]
    | readonly ['edge lp', string]
    | readonly ['edge target', string]
    | readonly ['edge tooltip', string]
    | readonly ['head lp', string]
    | readonly ['headclip', boolean]
    | readonly ['headlabel', string]
    | readonly ['headport', string]
    | readonly ['height', number]
    | readonly ['id', string]
    | readonly ['label', string]
    | readonly ['label distance', number]
    | readonly ['label angle', number]
    | readonly ['label float', boolean]
    | readonly ['labelfloat', boolean]
    | readonly ['labelhref', string]
    | readonly ['label lp', string]
    | readonly ['layer', string]
    | readonly ['len', number]
    | readonly ['lhead', string]
    | readonly ['lp', string]
    | readonly ['ltail', string]
    | readonly ['minlen', number]
    | readonly ['pen width', number]
    | readonly ['pos', string]
    | readonly ['same head', boolean]
    | readonly ['same tail', boolean]
    | readonly ['showboxes', boolean]
    | readonly ['style', string]
    | readonly ['tail lp', string]
    | readonly ['tailclip', boolean]
    | readonly ['taillabel', string]
    | readonly ['tailport', string]
    | readonly ['tooltip', string]
    | readonly ['weight', number]
    | readonly ['xlabel', string]
    | readonly ['xlp', string]
>>

export type _T_Graph = {
    readonly 'name': _et.Optional_Value<string>
    readonly 'tree': _T_Tree
    readonly 'type': _i_core._T_State_Group<null, 
        | readonly ['undirected', {
            readonly 'edges': _i_core._T_List<null, {
                readonly 'yin': _T_End_Point_Specification
                readonly 'yang': _T_End_Point_Specification
                readonly 'attributes': _T_Edge_Attributes
            }>
        }]
        | readonly ['directed', {
            readonly 'edges': _i_core._T_List<null, {
                readonly 'from': _T_End_Point_Specification
                readonly 'to': _T_End_Point_Specification
                readonly 'attributes': _T_Edge_Attributes
            }>
        }]
    >
}

export type _T_Attribute_Value = _i_core._T_State_Group<null, 
    | readonly ['number', string]
    | readonly ['string', string]
    | readonly ['html string', string]
>

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
    
    export namespace L {
        
        export namespace SG {
            export type concentrate = boolean
            export type charset = string
            
            export namespace clusterrank {
                
                export namespace SG {
                    export type none = null
                    export type local = null
                    export type global = null
                }
                export type SG = 
                    | readonly ['none', null]
                    | readonly ['local', null]
                    | readonly ['global', null]
            }
            export type clusterrank = _i_core._T_State_Group<null, 
                | readonly ['none', null]
                | readonly ['local', null]
                | readonly ['global', null]
            >
            export type color = string
            export type color_scheme = string
            export type comment = string
            export type compound = boolean
            export type dpi = number
            export type font_color = string
            export type font_name = string
            export type font_path = string
            export type font_size = number
            export type label = string
            export type label_distance = number
            export type label_scheme = number
            
            export namespace label_location {
                
                export namespace SG {
                    export type top = null
                    export type bottom = null
                }
                export type SG = 
                    | readonly ['top', null]
                    | readonly ['bottom', null]
            }
            export type label_location = _i_core._T_State_Group<null, 
                | readonly ['top', null]
                | readonly ['bottom', null]
            >
            export type landscape = boolean
            export type layer_list = string
            export type layer_separator = string
            export type layers = string
            export type margin = string
            export type max_iteration = number
            export type mclimit = number
            export type mindist = number
            
            export namespace mode {
                
                export namespace SG {
                    export type no_output = null
                    export type out = null
                    export type _in = null
                    export type in_out = null
                }
                export type SG = 
                    | readonly ['no output', null]
                    | readonly ['out', null]
                    | readonly ['in', null]
                    | readonly ['in out', null]
            }
            export type mode = _i_core._T_State_Group<null, 
                | readonly ['no output', null]
                | readonly ['out', null]
                | readonly ['in', null]
                | readonly ['in out', null]
            >
            export type newrank = boolean
            export type no_loop = boolean
            export type normalize = boolean
            
            export namespace ordering {
                
                export namespace SG {
                    export type out = null
                    export type _in = null
                    export type in_out = null
                }
                export type SG = 
                    | readonly ['out', null]
                    | readonly ['in', null]
                    | readonly ['in out', null]
            }
            export type ordering = _i_core._T_State_Group<null, 
                | readonly ['out', null]
                | readonly ['in', null]
                | readonly ['in out', null]
            >
            export type orientation = number
            
            export namespace output_order {
                
                export namespace SG {
                    export type breadth_first = null
                    export type dfs = null
                }
                export type SG = 
                    | readonly ['breadth first', null]
                    | readonly ['dfs', null]
            }
            export type output_order = _i_core._T_State_Group<null, 
                | readonly ['breadth first', null]
                | readonly ['dfs', null]
            >
            export type overlap = string
            
            export namespace output_mode {
                
                export namespace SG {
                    export type edges_first = null
                    export type nodes_first = null
                }
                export type SG = 
                    | readonly ['edges first', null]
                    | readonly ['nodes first', null]
            }
            export type output_mode = _i_core._T_State_Group<null, 
                | readonly ['edges first', null]
                | readonly ['nodes first', null]
            >
            export type pack = boolean
            
            export namespace pack_mode {
                
                export namespace SG {
                    export type node = null
                    export type graph = null
                }
                export type SG = 
                    | readonly ['node', null]
                    | readonly ['graph', null]
            }
            export type pack_mode = _i_core._T_State_Group<null, 
                | readonly ['node', null]
                | readonly ['graph', null]
            >
            export type pad = number
            export type page = string
            export type quadtree = boolean
            export type quantum = number
            
            export namespace rankdir {
                
                export namespace SG {
                    export type top_bottom = null
                    export type bottom_top = null
                    export type left_right = null
                    export type right_left = null
                }
                export type SG = 
                    | readonly ['top bottom', null]
                    | readonly ['bottom top', null]
                    | readonly ['left right', null]
                    | readonly ['right left', null]
            }
            export type rankdir = _i_core._T_State_Group<null, 
                | readonly ['top bottom', null]
                | readonly ['bottom top', null]
                | readonly ['left right', null]
                | readonly ['right left', null]
            >
            export type ranksep = string
            export type ratio = string
            export type remincross = boolean
            export type rotate = number
            export type scale = string
            export type searchsize = number
            export type sep = string
            export type showboxes = boolean
            export type size = string
            
            export namespace smoothing {
                
                export namespace SG {
                    export type none = null
                    export type spring = null
                    export type triangle = null
                }
                export type SG = 
                    | readonly ['none', null]
                    | readonly ['spring', null]
                    | readonly ['triangle', null]
            }
            export type smoothing = _i_core._T_State_Group<null, 
                | readonly ['none', null]
                | readonly ['spring', null]
                | readonly ['triangle', null]
            >
            export type sortv = boolean
            export type splines = string
            export type start = number
            export type style = string
            export type stylesheet = string
            export type target = string
            export type tooltip = string
            export type truecolor = boolean
            export type viewport = string
            export type width = number
            export type xdotversion = number
            export type xlabel = string
        }
        export type SG = 
            | readonly ['concentrate', boolean]
            | readonly ['charset', string]
            | readonly ['clusterrank', _i_core._T_State_Group<null, 
                | readonly ['none', null]
                | readonly ['local', null]
                | readonly ['global', null]
            >]
            | readonly ['color', string]
            | readonly ['color scheme', string]
            | readonly ['comment', string]
            | readonly ['compound', boolean]
            | readonly ['dpi', number]
            | readonly ['font color', string]
            | readonly ['font name', string]
            | readonly ['font path', string]
            | readonly ['font size', number]
            | readonly ['label', string]
            | readonly ['label distance', number]
            | readonly ['label scheme', number]
            | readonly ['label location', _i_core._T_State_Group<null, 
                | readonly ['top', null]
                | readonly ['bottom', null]
            >]
            | readonly ['landscape', boolean]
            | readonly ['layer list', string]
            | readonly ['layer separator', string]
            | readonly ['layers', string]
            | readonly ['margin', string]
            | readonly ['max iteration', number]
            | readonly ['mclimit', number]
            | readonly ['mindist', number]
            | readonly ['mode', _i_core._T_State_Group<null, 
                | readonly ['no output', null]
                | readonly ['out', null]
                | readonly ['in', null]
                | readonly ['in out', null]
            >]
            | readonly ['newrank', boolean]
            | readonly ['no loop', boolean]
            | readonly ['normalize', boolean]
            | readonly ['ordering', _i_core._T_State_Group<null, 
                | readonly ['out', null]
                | readonly ['in', null]
                | readonly ['in out', null]
            >]
            | readonly ['orientation', number]
            | readonly ['output order', _i_core._T_State_Group<null, 
                | readonly ['breadth first', null]
                | readonly ['dfs', null]
            >]
            | readonly ['overlap', string]
            | readonly ['output mode', _i_core._T_State_Group<null, 
                | readonly ['edges first', null]
                | readonly ['nodes first', null]
            >]
            | readonly ['pack', boolean]
            | readonly ['pack mode', _i_core._T_State_Group<null, 
                | readonly ['node', null]
                | readonly ['graph', null]
            >]
            | readonly ['pad', number]
            | readonly ['page', string]
            | readonly ['quadtree', boolean]
            | readonly ['quantum', number]
            | readonly ['rankdir', _i_core._T_State_Group<null, 
                | readonly ['top bottom', null]
                | readonly ['bottom top', null]
                | readonly ['left right', null]
                | readonly ['right left', null]
            >]
            | readonly ['ranksep', string]
            | readonly ['ratio', string]
            | readonly ['remincross', boolean]
            | readonly ['rotate', number]
            | readonly ['scale', string]
            | readonly ['searchsize', number]
            | readonly ['sep', string]
            | readonly ['showboxes', boolean]
            | readonly ['size', string]
            | readonly ['smoothing', _i_core._T_State_Group<null, 
                | readonly ['none', null]
                | readonly ['spring', null]
                | readonly ['triangle', null]
            >]
            | readonly ['sortv', boolean]
            | readonly ['splines', string]
            | readonly ['start', number]
            | readonly ['style', string]
            | readonly ['stylesheet', string]
            | readonly ['target', string]
            | readonly ['tooltip', string]
            | readonly ['truecolor', boolean]
            | readonly ['viewport', string]
            | readonly ['width', number]
            | readonly ['xdotversion', number]
            | readonly ['xlabel', string]
    }
    export type L = _i_core._T_State_Group<null, 
        | readonly ['concentrate', boolean]
        | readonly ['charset', string]
        | readonly ['clusterrank', _i_core._T_State_Group<null, 
            | readonly ['none', null]
            | readonly ['local', null]
            | readonly ['global', null]
        >]
        | readonly ['color', string]
        | readonly ['color scheme', string]
        | readonly ['comment', string]
        | readonly ['compound', boolean]
        | readonly ['dpi', number]
        | readonly ['font color', string]
        | readonly ['font name', string]
        | readonly ['font path', string]
        | readonly ['font size', number]
        | readonly ['label', string]
        | readonly ['label distance', number]
        | readonly ['label scheme', number]
        | readonly ['label location', _i_core._T_State_Group<null, 
            | readonly ['top', null]
            | readonly ['bottom', null]
        >]
        | readonly ['landscape', boolean]
        | readonly ['layer list', string]
        | readonly ['layer separator', string]
        | readonly ['layers', string]
        | readonly ['margin', string]
        | readonly ['max iteration', number]
        | readonly ['mclimit', number]
        | readonly ['mindist', number]
        | readonly ['mode', _i_core._T_State_Group<null, 
            | readonly ['no output', null]
            | readonly ['out', null]
            | readonly ['in', null]
            | readonly ['in out', null]
        >]
        | readonly ['newrank', boolean]
        | readonly ['no loop', boolean]
        | readonly ['normalize', boolean]
        | readonly ['ordering', _i_core._T_State_Group<null, 
            | readonly ['out', null]
            | readonly ['in', null]
            | readonly ['in out', null]
        >]
        | readonly ['orientation', number]
        | readonly ['output order', _i_core._T_State_Group<null, 
            | readonly ['breadth first', null]
            | readonly ['dfs', null]
        >]
        | readonly ['overlap', string]
        | readonly ['output mode', _i_core._T_State_Group<null, 
            | readonly ['edges first', null]
            | readonly ['nodes first', null]
        >]
        | readonly ['pack', boolean]
        | readonly ['pack mode', _i_core._T_State_Group<null, 
            | readonly ['node', null]
            | readonly ['graph', null]
        >]
        | readonly ['pad', number]
        | readonly ['page', string]
        | readonly ['quadtree', boolean]
        | readonly ['quantum', number]
        | readonly ['rankdir', _i_core._T_State_Group<null, 
            | readonly ['top bottom', null]
            | readonly ['bottom top', null]
            | readonly ['left right', null]
            | readonly ['right left', null]
        >]
        | readonly ['ranksep', string]
        | readonly ['ratio', string]
        | readonly ['remincross', boolean]
        | readonly ['rotate', number]
        | readonly ['scale', string]
        | readonly ['searchsize', number]
        | readonly ['sep', string]
        | readonly ['showboxes', boolean]
        | readonly ['size', string]
        | readonly ['smoothing', _i_core._T_State_Group<null, 
            | readonly ['none', null]
            | readonly ['spring', null]
            | readonly ['triangle', null]
        >]
        | readonly ['sortv', boolean]
        | readonly ['splines', string]
        | readonly ['start', number]
        | readonly ['style', string]
        | readonly ['stylesheet', string]
        | readonly ['target', string]
        | readonly ['tooltip', string]
        | readonly ['truecolor', boolean]
        | readonly ['viewport', string]
        | readonly ['width', number]
        | readonly ['xdotversion', number]
        | readonly ['xlabel', string]
    >
}

export namespace _T_Node_Attributes {
    
    export namespace L {
        
        export namespace SG {
            export type color = string
            export type colorscheme = string
            export type comment = string
            export type concentrate = boolean
            export type fill_color = string
            export type fixed_size = boolean
            export type font_color = string
            export type font_name = string
            export type font_size = number
            export type group = string
            export type height = number
            export type image = string
            export type label = string
            
            export namespace labelloc {
                
                export namespace SG {
                    export type top = null
                    export type center = null
                    export type bottom = null
                }
                export type SG = 
                    | readonly ['top', null]
                    | readonly ['center', null]
                    | readonly ['bottom', null]
            }
            export type labelloc = _i_core._T_State_Group<null, 
                | readonly ['top', null]
                | readonly ['center', null]
                | readonly ['bottom', null]
            >
            export type layers = string
            export type margin = string
            export type nojustify = boolean
            export type orientation = number
            export type pen_width = number
            export type peripheries = number
            export type pos = string
            export type rects = string
            export type regular = boolean
            export type root = boolean
            export type shape = string
            export type showboxes = boolean
            export type sides = number
            export type skew = number
            export type style = string
            export type target = string
            export type tooltip = string
            export type width = number
            export type xlabel = string
            export type xlp = string
        }
        export type SG = 
            | readonly ['color', string]
            | readonly ['colorscheme', string]
            | readonly ['comment', string]
            | readonly ['concentrate', boolean]
            | readonly ['fill color', string]
            | readonly ['fixed size', boolean]
            | readonly ['font color', string]
            | readonly ['font name', string]
            | readonly ['font size', number]
            | readonly ['group', string]
            | readonly ['height', number]
            | readonly ['image', string]
            | readonly ['label', string]
            | readonly ['labelloc', _i_core._T_State_Group<null, 
                | readonly ['top', null]
                | readonly ['center', null]
                | readonly ['bottom', null]
            >]
            | readonly ['layers', string]
            | readonly ['margin', string]
            | readonly ['nojustify', boolean]
            | readonly ['orientation', number]
            | readonly ['pen width', number]
            | readonly ['peripheries', number]
            | readonly ['pos', string]
            | readonly ['rects', string]
            | readonly ['regular', boolean]
            | readonly ['root', boolean]
            | readonly ['shape', string]
            | readonly ['showboxes', boolean]
            | readonly ['sides', number]
            | readonly ['skew', number]
            | readonly ['style', string]
            | readonly ['target', string]
            | readonly ['tooltip', string]
            | readonly ['width', number]
            | readonly ['xlabel', string]
            | readonly ['xlp', string]
    }
    export type L = _i_core._T_State_Group<null, 
        | readonly ['color', string]
        | readonly ['colorscheme', string]
        | readonly ['comment', string]
        | readonly ['concentrate', boolean]
        | readonly ['fill color', string]
        | readonly ['fixed size', boolean]
        | readonly ['font color', string]
        | readonly ['font name', string]
        | readonly ['font size', number]
        | readonly ['group', string]
        | readonly ['height', number]
        | readonly ['image', string]
        | readonly ['label', string]
        | readonly ['labelloc', _i_core._T_State_Group<null, 
            | readonly ['top', null]
            | readonly ['center', null]
            | readonly ['bottom', null]
        >]
        | readonly ['layers', string]
        | readonly ['margin', string]
        | readonly ['nojustify', boolean]
        | readonly ['orientation', number]
        | readonly ['pen width', number]
        | readonly ['peripheries', number]
        | readonly ['pos', string]
        | readonly ['rects', string]
        | readonly ['regular', boolean]
        | readonly ['root', boolean]
        | readonly ['shape', string]
        | readonly ['showboxes', boolean]
        | readonly ['sides', number]
        | readonly ['skew', number]
        | readonly ['style', string]
        | readonly ['target', string]
        | readonly ['tooltip', string]
        | readonly ['width', number]
        | readonly ['xlabel', string]
        | readonly ['xlp', string]
    >
}

export namespace _T_Tree {
    
    export namespace attributes {
    }
    export type attributes = _T_Graph_Attributes
    
    export namespace elements {
        
        export namespace D {
            
            export namespace SG {
                
                export namespace node {
                    
                    export namespace attributes {
                    }
                    export type attributes = _T_Node_Attributes
                }
                export type node = {
                    readonly 'attributes': _T_Node_Attributes
                }
                
                export namespace sub {
                    
                    export namespace _type {
                        
                        export namespace SG {
                            export type group = null
                            export type cluster = null
                            export type subgraph = null
                        }
                        export type SG = 
                            | readonly ['group', null]
                            | readonly ['cluster', null]
                            | readonly ['subgraph', null]
                    }
                    export type _type = _i_core._T_State_Group<null, 
                        | readonly ['group', null]
                        | readonly ['cluster', null]
                        | readonly ['subgraph', null]
                    >
                    
                    export namespace tree {
                    }
                    export type tree = _T_Tree
                }
                export type sub = {
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['group', null]
                        | readonly ['cluster', null]
                        | readonly ['subgraph', null]
                    >
                    readonly 'tree': _T_Tree
                }
            }
            export type SG = 
                | readonly ['node', {
                    readonly 'attributes': _T_Node_Attributes
                }]
                | readonly ['sub', {
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['group', null]
                        | readonly ['cluster', null]
                        | readonly ['subgraph', null]
                    >
                    readonly 'tree': _T_Tree
                }]
        }
        export type D = _i_core._T_State_Group<null, 
            | readonly ['node', {
                readonly 'attributes': _T_Node_Attributes
            }]
            | readonly ['sub', {
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['group', null]
                    | readonly ['cluster', null]
                    | readonly ['subgraph', null]
                >
                readonly 'tree': _T_Tree
            }]
        >
    }
    export type elements = _i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
        | readonly ['node', {
            readonly 'attributes': _T_Node_Attributes
        }]
        | readonly ['sub', {
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['group', null]
                | readonly ['cluster', null]
                | readonly ['subgraph', null]
            >
            readonly 'tree': _T_Tree
        }]
    >>
}

export namespace _T_End_Point_Specification {
    export type start = string
    
    export namespace tail {
        export type L = string
    }
    export type tail = _i_core._T_List<null, string>
    
    export namespace port_data {
        
        export namespace O {
            export type port = string
            
            export namespace compass_direction {
                export type O = string
            }
            export type compass_direction = _et.Optional_Value<string>
        }
        export type O = {
            readonly 'port': string
            readonly 'compass direction': _et.Optional_Value<string>
        }
    }
    export type port_data = _et.Optional_Value<{
        readonly 'port': string
        readonly 'compass direction': _et.Optional_Value<string>
    }>
}

export namespace _T_Edge_Attributes {
    
    export namespace L {
        
        export namespace SG {
            export type arrowhead = string
            export type arrowsize = number
            export type arrowtail = string
            export type bgcolor = string
            export type color = string
            export type colorscheme = string
            export type comment = string
            export type constraint = boolean
            export type decorate = boolean
            
            export namespace dir {
                
                export namespace SG {
                    export type forward = null
                    export type back = null
                    export type both = null
                    export type none = null
                }
                export type SG = 
                    | readonly ['forward', null]
                    | readonly ['back', null]
                    | readonly ['both', null]
                    | readonly ['none', null]
            }
            export type dir = _i_core._T_State_Group<null, 
                | readonly ['forward', null]
                | readonly ['back', null]
                | readonly ['both', null]
                | readonly ['none', null]
            >
            export type edge_url = string
            export type edge_lp = string
            export type edge_target = string
            export type edge_tooltip = string
            export type head_lp = string
            export type headclip = boolean
            export type headlabel = string
            export type headport = string
            export type height = number
            export type id = string
            export type label = string
            export type label_distance = number
            export type label_angle = number
            export type label_float = boolean
            export type labelfloat = boolean
            export type labelhref = string
            export type label_lp = string
            export type layer = string
            export type len = number
            export type lhead = string
            export type lp = string
            export type ltail = string
            export type minlen = number
            export type pen_width = number
            export type pos = string
            export type same_head = boolean
            export type same_tail = boolean
            export type showboxes = boolean
            export type style = string
            export type tail_lp = string
            export type tailclip = boolean
            export type taillabel = string
            export type tailport = string
            export type tooltip = string
            export type weight = number
            export type xlabel = string
            export type xlp = string
        }
        export type SG = 
            | readonly ['arrowhead', string]
            | readonly ['arrowsize', number]
            | readonly ['arrowtail', string]
            | readonly ['bgcolor', string]
            | readonly ['color', string]
            | readonly ['colorscheme', string]
            | readonly ['comment', string]
            | readonly ['constraint', boolean]
            | readonly ['decorate', boolean]
            | readonly ['dir', _i_core._T_State_Group<null, 
                | readonly ['forward', null]
                | readonly ['back', null]
                | readonly ['both', null]
                | readonly ['none', null]
            >]
            | readonly ['edge url', string]
            | readonly ['edge lp', string]
            | readonly ['edge target', string]
            | readonly ['edge tooltip', string]
            | readonly ['head lp', string]
            | readonly ['headclip', boolean]
            | readonly ['headlabel', string]
            | readonly ['headport', string]
            | readonly ['height', number]
            | readonly ['id', string]
            | readonly ['label', string]
            | readonly ['label distance', number]
            | readonly ['label angle', number]
            | readonly ['label float', boolean]
            | readonly ['labelfloat', boolean]
            | readonly ['labelhref', string]
            | readonly ['label lp', string]
            | readonly ['layer', string]
            | readonly ['len', number]
            | readonly ['lhead', string]
            | readonly ['lp', string]
            | readonly ['ltail', string]
            | readonly ['minlen', number]
            | readonly ['pen width', number]
            | readonly ['pos', string]
            | readonly ['same head', boolean]
            | readonly ['same tail', boolean]
            | readonly ['showboxes', boolean]
            | readonly ['style', string]
            | readonly ['tail lp', string]
            | readonly ['tailclip', boolean]
            | readonly ['taillabel', string]
            | readonly ['tailport', string]
            | readonly ['tooltip', string]
            | readonly ['weight', number]
            | readonly ['xlabel', string]
            | readonly ['xlp', string]
    }
    export type L = _i_core._T_State_Group<null, 
        | readonly ['arrowhead', string]
        | readonly ['arrowsize', number]
        | readonly ['arrowtail', string]
        | readonly ['bgcolor', string]
        | readonly ['color', string]
        | readonly ['colorscheme', string]
        | readonly ['comment', string]
        | readonly ['constraint', boolean]
        | readonly ['decorate', boolean]
        | readonly ['dir', _i_core._T_State_Group<null, 
            | readonly ['forward', null]
            | readonly ['back', null]
            | readonly ['both', null]
            | readonly ['none', null]
        >]
        | readonly ['edge url', string]
        | readonly ['edge lp', string]
        | readonly ['edge target', string]
        | readonly ['edge tooltip', string]
        | readonly ['head lp', string]
        | readonly ['headclip', boolean]
        | readonly ['headlabel', string]
        | readonly ['headport', string]
        | readonly ['height', number]
        | readonly ['id', string]
        | readonly ['label', string]
        | readonly ['label distance', number]
        | readonly ['label angle', number]
        | readonly ['label float', boolean]
        | readonly ['labelfloat', boolean]
        | readonly ['labelhref', string]
        | readonly ['label lp', string]
        | readonly ['layer', string]
        | readonly ['len', number]
        | readonly ['lhead', string]
        | readonly ['lp', string]
        | readonly ['ltail', string]
        | readonly ['minlen', number]
        | readonly ['pen width', number]
        | readonly ['pos', string]
        | readonly ['same head', boolean]
        | readonly ['same tail', boolean]
        | readonly ['showboxes', boolean]
        | readonly ['style', string]
        | readonly ['tail lp', string]
        | readonly ['tailclip', boolean]
        | readonly ['taillabel', string]
        | readonly ['tailport', string]
        | readonly ['tooltip', string]
        | readonly ['weight', number]
        | readonly ['xlabel', string]
        | readonly ['xlp', string]
    >
}

export namespace _T_Graph {
    
    export namespace name {
        export type O = string
    }
    export type name = _et.Optional_Value<string>
    
    export namespace tree {
    }
    export type tree = _T_Tree
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace undirected {
                
                export namespace edges {
                    
                    export namespace L {
                        
                        export namespace yin {
                        }
                        export type yin = _T_End_Point_Specification
                        
                        export namespace yang {
                        }
                        export type yang = _T_End_Point_Specification
                        
                        export namespace attributes {
                        }
                        export type attributes = _T_Edge_Attributes
                    }
                    export type L = {
                        readonly 'yin': _T_End_Point_Specification
                        readonly 'yang': _T_End_Point_Specification
                        readonly 'attributes': _T_Edge_Attributes
                    }
                }
                export type edges = _i_core._T_List<null, {
                    readonly 'yin': _T_End_Point_Specification
                    readonly 'yang': _T_End_Point_Specification
                    readonly 'attributes': _T_Edge_Attributes
                }>
            }
            export type undirected = {
                readonly 'edges': _i_core._T_List<null, {
                    readonly 'yin': _T_End_Point_Specification
                    readonly 'yang': _T_End_Point_Specification
                    readonly 'attributes': _T_Edge_Attributes
                }>
            }
            
            export namespace directed {
                
                export namespace edges {
                    
                    export namespace L {
                        
                        export namespace _from {
                        }
                        export type _from = _T_End_Point_Specification
                        
                        export namespace to {
                        }
                        export type to = _T_End_Point_Specification
                        
                        export namespace attributes {
                        }
                        export type attributes = _T_Edge_Attributes
                    }
                    export type L = {
                        readonly 'from': _T_End_Point_Specification
                        readonly 'to': _T_End_Point_Specification
                        readonly 'attributes': _T_Edge_Attributes
                    }
                }
                export type edges = _i_core._T_List<null, {
                    readonly 'from': _T_End_Point_Specification
                    readonly 'to': _T_End_Point_Specification
                    readonly 'attributes': _T_Edge_Attributes
                }>
            }
            export type directed = {
                readonly 'edges': _i_core._T_List<null, {
                    readonly 'from': _T_End_Point_Specification
                    readonly 'to': _T_End_Point_Specification
                    readonly 'attributes': _T_Edge_Attributes
                }>
            }
        }
        export type SG = 
            | readonly ['undirected', {
                readonly 'edges': _i_core._T_List<null, {
                    readonly 'yin': _T_End_Point_Specification
                    readonly 'yang': _T_End_Point_Specification
                    readonly 'attributes': _T_Edge_Attributes
                }>
            }]
            | readonly ['directed', {
                readonly 'edges': _i_core._T_List<null, {
                    readonly 'from': _T_End_Point_Specification
                    readonly 'to': _T_End_Point_Specification
                    readonly 'attributes': _T_Edge_Attributes
                }>
            }]
    }
    export type _type = _i_core._T_State_Group<null, 
        | readonly ['undirected', {
            readonly 'edges': _i_core._T_List<null, {
                readonly 'yin': _T_End_Point_Specification
                readonly 'yang': _T_End_Point_Specification
                readonly 'attributes': _T_Edge_Attributes
            }>
        }]
        | readonly ['directed', {
            readonly 'edges': _i_core._T_List<null, {
                readonly 'from': _T_End_Point_Specification
                readonly 'to': _T_End_Point_Specification
                readonly 'attributes': _T_Edge_Attributes
            }>
        }]
    >
}

export namespace _T_Attribute_Value {
    
    export namespace SG {
        export type _number = string
        export type _string = string
        export type html_string = string
    }
    export type SG = 
        | readonly ['number', string]
        | readonly ['string', string]
        | readonly ['html string', string]
}

// *** ALIASES FOR NESTED TYPES

export namespace Graph_Attributes {
    
    export namespace L {
        
        export namespace SG {
            export type concentrate = boolean
            export type charset = string
            
            export namespace clusterrank {
                
                export namespace SG {
                    export type none = null
                    export type local = null
                    export type global = null
                }
                export type SG = 
                    | readonly ['none', null]
                    | readonly ['local', null]
                    | readonly ['global', null]
            }
            export type clusterrank = _i_core._T_State_Group<null, 
                | readonly ['none', null]
                | readonly ['local', null]
                | readonly ['global', null]
            >
            export type color = string
            export type color_scheme = string
            export type comment = string
            export type compound = boolean
            export type dpi = number
            export type font_color = string
            export type font_name = string
            export type font_path = string
            export type font_size = number
            export type label = string
            export type label_distance = number
            export type label_scheme = number
            
            export namespace label_location {
                
                export namespace SG {
                    export type top = null
                    export type bottom = null
                }
                export type SG = 
                    | readonly ['top', null]
                    | readonly ['bottom', null]
            }
            export type label_location = _i_core._T_State_Group<null, 
                | readonly ['top', null]
                | readonly ['bottom', null]
            >
            export type landscape = boolean
            export type layer_list = string
            export type layer_separator = string
            export type layers = string
            export type margin = string
            export type max_iteration = number
            export type mclimit = number
            export type mindist = number
            
            export namespace mode {
                
                export namespace SG {
                    export type no_output = null
                    export type out = null
                    export type _in = null
                    export type in_out = null
                }
                export type SG = 
                    | readonly ['no output', null]
                    | readonly ['out', null]
                    | readonly ['in', null]
                    | readonly ['in out', null]
            }
            export type mode = _i_core._T_State_Group<null, 
                | readonly ['no output', null]
                | readonly ['out', null]
                | readonly ['in', null]
                | readonly ['in out', null]
            >
            export type newrank = boolean
            export type no_loop = boolean
            export type normalize = boolean
            
            export namespace ordering {
                
                export namespace SG {
                    export type out = null
                    export type _in = null
                    export type in_out = null
                }
                export type SG = 
                    | readonly ['out', null]
                    | readonly ['in', null]
                    | readonly ['in out', null]
            }
            export type ordering = _i_core._T_State_Group<null, 
                | readonly ['out', null]
                | readonly ['in', null]
                | readonly ['in out', null]
            >
            export type orientation = number
            
            export namespace output_order {
                
                export namespace SG {
                    export type breadth_first = null
                    export type dfs = null
                }
                export type SG = 
                    | readonly ['breadth first', null]
                    | readonly ['dfs', null]
            }
            export type output_order = _i_core._T_State_Group<null, 
                | readonly ['breadth first', null]
                | readonly ['dfs', null]
            >
            export type overlap = string
            
            export namespace output_mode {
                
                export namespace SG {
                    export type edges_first = null
                    export type nodes_first = null
                }
                export type SG = 
                    | readonly ['edges first', null]
                    | readonly ['nodes first', null]
            }
            export type output_mode = _i_core._T_State_Group<null, 
                | readonly ['edges first', null]
                | readonly ['nodes first', null]
            >
            export type pack = boolean
            
            export namespace pack_mode {
                
                export namespace SG {
                    export type node = null
                    export type graph = null
                }
                export type SG = 
                    | readonly ['node', null]
                    | readonly ['graph', null]
            }
            export type pack_mode = _i_core._T_State_Group<null, 
                | readonly ['node', null]
                | readonly ['graph', null]
            >
            export type pad = number
            export type page = string
            export type quadtree = boolean
            export type quantum = number
            
            export namespace rankdir {
                
                export namespace SG {
                    export type top_bottom = null
                    export type bottom_top = null
                    export type left_right = null
                    export type right_left = null
                }
                export type SG = 
                    | readonly ['top bottom', null]
                    | readonly ['bottom top', null]
                    | readonly ['left right', null]
                    | readonly ['right left', null]
            }
            export type rankdir = _i_core._T_State_Group<null, 
                | readonly ['top bottom', null]
                | readonly ['bottom top', null]
                | readonly ['left right', null]
                | readonly ['right left', null]
            >
            export type ranksep = string
            export type ratio = string
            export type remincross = boolean
            export type rotate = number
            export type scale = string
            export type searchsize = number
            export type sep = string
            export type showboxes = boolean
            export type size = string
            
            export namespace smoothing {
                
                export namespace SG {
                    export type none = null
                    export type spring = null
                    export type triangle = null
                }
                export type SG = 
                    | readonly ['none', null]
                    | readonly ['spring', null]
                    | readonly ['triangle', null]
            }
            export type smoothing = _i_core._T_State_Group<null, 
                | readonly ['none', null]
                | readonly ['spring', null]
                | readonly ['triangle', null]
            >
            export type sortv = boolean
            export type splines = string
            export type start = number
            export type style = string
            export type stylesheet = string
            export type target = string
            export type tooltip = string
            export type truecolor = boolean
            export type viewport = string
            export type width = number
            export type xdotversion = number
            export type xlabel = string
        }
        export type SG = 
            | readonly ['concentrate', boolean]
            | readonly ['charset', string]
            | readonly ['clusterrank', _i_core._T_State_Group<null, 
                | readonly ['none', null]
                | readonly ['local', null]
                | readonly ['global', null]
            >]
            | readonly ['color', string]
            | readonly ['color scheme', string]
            | readonly ['comment', string]
            | readonly ['compound', boolean]
            | readonly ['dpi', number]
            | readonly ['font color', string]
            | readonly ['font name', string]
            | readonly ['font path', string]
            | readonly ['font size', number]
            | readonly ['label', string]
            | readonly ['label distance', number]
            | readonly ['label scheme', number]
            | readonly ['label location', _i_core._T_State_Group<null, 
                | readonly ['top', null]
                | readonly ['bottom', null]
            >]
            | readonly ['landscape', boolean]
            | readonly ['layer list', string]
            | readonly ['layer separator', string]
            | readonly ['layers', string]
            | readonly ['margin', string]
            | readonly ['max iteration', number]
            | readonly ['mclimit', number]
            | readonly ['mindist', number]
            | readonly ['mode', _i_core._T_State_Group<null, 
                | readonly ['no output', null]
                | readonly ['out', null]
                | readonly ['in', null]
                | readonly ['in out', null]
            >]
            | readonly ['newrank', boolean]
            | readonly ['no loop', boolean]
            | readonly ['normalize', boolean]
            | readonly ['ordering', _i_core._T_State_Group<null, 
                | readonly ['out', null]
                | readonly ['in', null]
                | readonly ['in out', null]
            >]
            | readonly ['orientation', number]
            | readonly ['output order', _i_core._T_State_Group<null, 
                | readonly ['breadth first', null]
                | readonly ['dfs', null]
            >]
            | readonly ['overlap', string]
            | readonly ['output mode', _i_core._T_State_Group<null, 
                | readonly ['edges first', null]
                | readonly ['nodes first', null]
            >]
            | readonly ['pack', boolean]
            | readonly ['pack mode', _i_core._T_State_Group<null, 
                | readonly ['node', null]
                | readonly ['graph', null]
            >]
            | readonly ['pad', number]
            | readonly ['page', string]
            | readonly ['quadtree', boolean]
            | readonly ['quantum', number]
            | readonly ['rankdir', _i_core._T_State_Group<null, 
                | readonly ['top bottom', null]
                | readonly ['bottom top', null]
                | readonly ['left right', null]
                | readonly ['right left', null]
            >]
            | readonly ['ranksep', string]
            | readonly ['ratio', string]
            | readonly ['remincross', boolean]
            | readonly ['rotate', number]
            | readonly ['scale', string]
            | readonly ['searchsize', number]
            | readonly ['sep', string]
            | readonly ['showboxes', boolean]
            | readonly ['size', string]
            | readonly ['smoothing', _i_core._T_State_Group<null, 
                | readonly ['none', null]
                | readonly ['spring', null]
                | readonly ['triangle', null]
            >]
            | readonly ['sortv', boolean]
            | readonly ['splines', string]
            | readonly ['start', number]
            | readonly ['style', string]
            | readonly ['stylesheet', string]
            | readonly ['target', string]
            | readonly ['tooltip', string]
            | readonly ['truecolor', boolean]
            | readonly ['viewport', string]
            | readonly ['width', number]
            | readonly ['xdotversion', number]
            | readonly ['xlabel', string]
    }
    export type L = _i_core._T_State_Group<null, 
        | readonly ['concentrate', boolean]
        | readonly ['charset', string]
        | readonly ['clusterrank', _i_core._T_State_Group<null, 
            | readonly ['none', null]
            | readonly ['local', null]
            | readonly ['global', null]
        >]
        | readonly ['color', string]
        | readonly ['color scheme', string]
        | readonly ['comment', string]
        | readonly ['compound', boolean]
        | readonly ['dpi', number]
        | readonly ['font color', string]
        | readonly ['font name', string]
        | readonly ['font path', string]
        | readonly ['font size', number]
        | readonly ['label', string]
        | readonly ['label distance', number]
        | readonly ['label scheme', number]
        | readonly ['label location', _i_core._T_State_Group<null, 
            | readonly ['top', null]
            | readonly ['bottom', null]
        >]
        | readonly ['landscape', boolean]
        | readonly ['layer list', string]
        | readonly ['layer separator', string]
        | readonly ['layers', string]
        | readonly ['margin', string]
        | readonly ['max iteration', number]
        | readonly ['mclimit', number]
        | readonly ['mindist', number]
        | readonly ['mode', _i_core._T_State_Group<null, 
            | readonly ['no output', null]
            | readonly ['out', null]
            | readonly ['in', null]
            | readonly ['in out', null]
        >]
        | readonly ['newrank', boolean]
        | readonly ['no loop', boolean]
        | readonly ['normalize', boolean]
        | readonly ['ordering', _i_core._T_State_Group<null, 
            | readonly ['out', null]
            | readonly ['in', null]
            | readonly ['in out', null]
        >]
        | readonly ['orientation', number]
        | readonly ['output order', _i_core._T_State_Group<null, 
            | readonly ['breadth first', null]
            | readonly ['dfs', null]
        >]
        | readonly ['overlap', string]
        | readonly ['output mode', _i_core._T_State_Group<null, 
            | readonly ['edges first', null]
            | readonly ['nodes first', null]
        >]
        | readonly ['pack', boolean]
        | readonly ['pack mode', _i_core._T_State_Group<null, 
            | readonly ['node', null]
            | readonly ['graph', null]
        >]
        | readonly ['pad', number]
        | readonly ['page', string]
        | readonly ['quadtree', boolean]
        | readonly ['quantum', number]
        | readonly ['rankdir', _i_core._T_State_Group<null, 
            | readonly ['top bottom', null]
            | readonly ['bottom top', null]
            | readonly ['left right', null]
            | readonly ['right left', null]
        >]
        | readonly ['ranksep', string]
        | readonly ['ratio', string]
        | readonly ['remincross', boolean]
        | readonly ['rotate', number]
        | readonly ['scale', string]
        | readonly ['searchsize', number]
        | readonly ['sep', string]
        | readonly ['showboxes', boolean]
        | readonly ['size', string]
        | readonly ['smoothing', _i_core._T_State_Group<null, 
            | readonly ['none', null]
            | readonly ['spring', null]
            | readonly ['triangle', null]
        >]
        | readonly ['sortv', boolean]
        | readonly ['splines', string]
        | readonly ['start', number]
        | readonly ['style', string]
        | readonly ['stylesheet', string]
        | readonly ['target', string]
        | readonly ['tooltip', string]
        | readonly ['truecolor', boolean]
        | readonly ['viewport', string]
        | readonly ['width', number]
        | readonly ['xdotversion', number]
        | readonly ['xlabel', string]
    >
}

export namespace Node_Attributes {
    
    export namespace L {
        
        export namespace SG {
            export type color = string
            export type colorscheme = string
            export type comment = string
            export type concentrate = boolean
            export type fill_color = string
            export type fixed_size = boolean
            export type font_color = string
            export type font_name = string
            export type font_size = number
            export type group = string
            export type height = number
            export type image = string
            export type label = string
            
            export namespace labelloc {
                
                export namespace SG {
                    export type top = null
                    export type center = null
                    export type bottom = null
                }
                export type SG = 
                    | readonly ['top', null]
                    | readonly ['center', null]
                    | readonly ['bottom', null]
            }
            export type labelloc = _i_core._T_State_Group<null, 
                | readonly ['top', null]
                | readonly ['center', null]
                | readonly ['bottom', null]
            >
            export type layers = string
            export type margin = string
            export type nojustify = boolean
            export type orientation = number
            export type pen_width = number
            export type peripheries = number
            export type pos = string
            export type rects = string
            export type regular = boolean
            export type root = boolean
            export type shape = string
            export type showboxes = boolean
            export type sides = number
            export type skew = number
            export type style = string
            export type target = string
            export type tooltip = string
            export type width = number
            export type xlabel = string
            export type xlp = string
        }
        export type SG = 
            | readonly ['color', string]
            | readonly ['colorscheme', string]
            | readonly ['comment', string]
            | readonly ['concentrate', boolean]
            | readonly ['fill color', string]
            | readonly ['fixed size', boolean]
            | readonly ['font color', string]
            | readonly ['font name', string]
            | readonly ['font size', number]
            | readonly ['group', string]
            | readonly ['height', number]
            | readonly ['image', string]
            | readonly ['label', string]
            | readonly ['labelloc', _i_core._T_State_Group<null, 
                | readonly ['top', null]
                | readonly ['center', null]
                | readonly ['bottom', null]
            >]
            | readonly ['layers', string]
            | readonly ['margin', string]
            | readonly ['nojustify', boolean]
            | readonly ['orientation', number]
            | readonly ['pen width', number]
            | readonly ['peripheries', number]
            | readonly ['pos', string]
            | readonly ['rects', string]
            | readonly ['regular', boolean]
            | readonly ['root', boolean]
            | readonly ['shape', string]
            | readonly ['showboxes', boolean]
            | readonly ['sides', number]
            | readonly ['skew', number]
            | readonly ['style', string]
            | readonly ['target', string]
            | readonly ['tooltip', string]
            | readonly ['width', number]
            | readonly ['xlabel', string]
            | readonly ['xlp', string]
    }
    export type L = _i_core._T_State_Group<null, 
        | readonly ['color', string]
        | readonly ['colorscheme', string]
        | readonly ['comment', string]
        | readonly ['concentrate', boolean]
        | readonly ['fill color', string]
        | readonly ['fixed size', boolean]
        | readonly ['font color', string]
        | readonly ['font name', string]
        | readonly ['font size', number]
        | readonly ['group', string]
        | readonly ['height', number]
        | readonly ['image', string]
        | readonly ['label', string]
        | readonly ['labelloc', _i_core._T_State_Group<null, 
            | readonly ['top', null]
            | readonly ['center', null]
            | readonly ['bottom', null]
        >]
        | readonly ['layers', string]
        | readonly ['margin', string]
        | readonly ['nojustify', boolean]
        | readonly ['orientation', number]
        | readonly ['pen width', number]
        | readonly ['peripheries', number]
        | readonly ['pos', string]
        | readonly ['rects', string]
        | readonly ['regular', boolean]
        | readonly ['root', boolean]
        | readonly ['shape', string]
        | readonly ['showboxes', boolean]
        | readonly ['sides', number]
        | readonly ['skew', number]
        | readonly ['style', string]
        | readonly ['target', string]
        | readonly ['tooltip', string]
        | readonly ['width', number]
        | readonly ['xlabel', string]
        | readonly ['xlp', string]
    >
}

export namespace Tree {
    
    export namespace attributes {
    }
    export type attributes = _T_Graph_Attributes
    
    export namespace elements {
        
        export namespace D {
            
            export namespace SG {
                
                export namespace node {
                    
                    export namespace attributes {
                    }
                    export type attributes = _T_Node_Attributes
                }
                export type node = {
                    readonly 'attributes': _T_Node_Attributes
                }
                
                export namespace sub {
                    
                    export namespace _type {
                        
                        export namespace SG {
                            export type group = null
                            export type cluster = null
                            export type subgraph = null
                        }
                        export type SG = 
                            | readonly ['group', null]
                            | readonly ['cluster', null]
                            | readonly ['subgraph', null]
                    }
                    export type _type = _i_core._T_State_Group<null, 
                        | readonly ['group', null]
                        | readonly ['cluster', null]
                        | readonly ['subgraph', null]
                    >
                    
                    export namespace tree {
                    }
                    export type tree = _T_Tree
                }
                export type sub = {
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['group', null]
                        | readonly ['cluster', null]
                        | readonly ['subgraph', null]
                    >
                    readonly 'tree': _T_Tree
                }
            }
            export type SG = 
                | readonly ['node', {
                    readonly 'attributes': _T_Node_Attributes
                }]
                | readonly ['sub', {
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['group', null]
                        | readonly ['cluster', null]
                        | readonly ['subgraph', null]
                    >
                    readonly 'tree': _T_Tree
                }]
        }
        export type D = _i_core._T_State_Group<null, 
            | readonly ['node', {
                readonly 'attributes': _T_Node_Attributes
            }]
            | readonly ['sub', {
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['group', null]
                    | readonly ['cluster', null]
                    | readonly ['subgraph', null]
                >
                readonly 'tree': _T_Tree
            }]
        >
    }
    export type elements = _i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
        | readonly ['node', {
            readonly 'attributes': _T_Node_Attributes
        }]
        | readonly ['sub', {
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['group', null]
                | readonly ['cluster', null]
                | readonly ['subgraph', null]
            >
            readonly 'tree': _T_Tree
        }]
    >>
}

export namespace End_Point_Specification {
    export type start = string
    
    export namespace tail {
        export type L = string
    }
    export type tail = _i_core._T_List<null, string>
    
    export namespace port_data {
        
        export namespace O {
            export type port = string
            
            export namespace compass_direction {
                export type O = string
            }
            export type compass_direction = _et.Optional_Value<string>
        }
        export type O = {
            readonly 'port': string
            readonly 'compass direction': _et.Optional_Value<string>
        }
    }
    export type port_data = _et.Optional_Value<{
        readonly 'port': string
        readonly 'compass direction': _et.Optional_Value<string>
    }>
}

export namespace Edge_Attributes {
    
    export namespace L {
        
        export namespace SG {
            export type arrowhead = string
            export type arrowsize = number
            export type arrowtail = string
            export type bgcolor = string
            export type color = string
            export type colorscheme = string
            export type comment = string
            export type constraint = boolean
            export type decorate = boolean
            
            export namespace dir {
                
                export namespace SG {
                    export type forward = null
                    export type back = null
                    export type both = null
                    export type none = null
                }
                export type SG = 
                    | readonly ['forward', null]
                    | readonly ['back', null]
                    | readonly ['both', null]
                    | readonly ['none', null]
            }
            export type dir = _i_core._T_State_Group<null, 
                | readonly ['forward', null]
                | readonly ['back', null]
                | readonly ['both', null]
                | readonly ['none', null]
            >
            export type edge_url = string
            export type edge_lp = string
            export type edge_target = string
            export type edge_tooltip = string
            export type head_lp = string
            export type headclip = boolean
            export type headlabel = string
            export type headport = string
            export type height = number
            export type id = string
            export type label = string
            export type label_distance = number
            export type label_angle = number
            export type label_float = boolean
            export type labelfloat = boolean
            export type labelhref = string
            export type label_lp = string
            export type layer = string
            export type len = number
            export type lhead = string
            export type lp = string
            export type ltail = string
            export type minlen = number
            export type pen_width = number
            export type pos = string
            export type same_head = boolean
            export type same_tail = boolean
            export type showboxes = boolean
            export type style = string
            export type tail_lp = string
            export type tailclip = boolean
            export type taillabel = string
            export type tailport = string
            export type tooltip = string
            export type weight = number
            export type xlabel = string
            export type xlp = string
        }
        export type SG = 
            | readonly ['arrowhead', string]
            | readonly ['arrowsize', number]
            | readonly ['arrowtail', string]
            | readonly ['bgcolor', string]
            | readonly ['color', string]
            | readonly ['colorscheme', string]
            | readonly ['comment', string]
            | readonly ['constraint', boolean]
            | readonly ['decorate', boolean]
            | readonly ['dir', _i_core._T_State_Group<null, 
                | readonly ['forward', null]
                | readonly ['back', null]
                | readonly ['both', null]
                | readonly ['none', null]
            >]
            | readonly ['edge url', string]
            | readonly ['edge lp', string]
            | readonly ['edge target', string]
            | readonly ['edge tooltip', string]
            | readonly ['head lp', string]
            | readonly ['headclip', boolean]
            | readonly ['headlabel', string]
            | readonly ['headport', string]
            | readonly ['height', number]
            | readonly ['id', string]
            | readonly ['label', string]
            | readonly ['label distance', number]
            | readonly ['label angle', number]
            | readonly ['label float', boolean]
            | readonly ['labelfloat', boolean]
            | readonly ['labelhref', string]
            | readonly ['label lp', string]
            | readonly ['layer', string]
            | readonly ['len', number]
            | readonly ['lhead', string]
            | readonly ['lp', string]
            | readonly ['ltail', string]
            | readonly ['minlen', number]
            | readonly ['pen width', number]
            | readonly ['pos', string]
            | readonly ['same head', boolean]
            | readonly ['same tail', boolean]
            | readonly ['showboxes', boolean]
            | readonly ['style', string]
            | readonly ['tail lp', string]
            | readonly ['tailclip', boolean]
            | readonly ['taillabel', string]
            | readonly ['tailport', string]
            | readonly ['tooltip', string]
            | readonly ['weight', number]
            | readonly ['xlabel', string]
            | readonly ['xlp', string]
    }
    export type L = _i_core._T_State_Group<null, 
        | readonly ['arrowhead', string]
        | readonly ['arrowsize', number]
        | readonly ['arrowtail', string]
        | readonly ['bgcolor', string]
        | readonly ['color', string]
        | readonly ['colorscheme', string]
        | readonly ['comment', string]
        | readonly ['constraint', boolean]
        | readonly ['decorate', boolean]
        | readonly ['dir', _i_core._T_State_Group<null, 
            | readonly ['forward', null]
            | readonly ['back', null]
            | readonly ['both', null]
            | readonly ['none', null]
        >]
        | readonly ['edge url', string]
        | readonly ['edge lp', string]
        | readonly ['edge target', string]
        | readonly ['edge tooltip', string]
        | readonly ['head lp', string]
        | readonly ['headclip', boolean]
        | readonly ['headlabel', string]
        | readonly ['headport', string]
        | readonly ['height', number]
        | readonly ['id', string]
        | readonly ['label', string]
        | readonly ['label distance', number]
        | readonly ['label angle', number]
        | readonly ['label float', boolean]
        | readonly ['labelfloat', boolean]
        | readonly ['labelhref', string]
        | readonly ['label lp', string]
        | readonly ['layer', string]
        | readonly ['len', number]
        | readonly ['lhead', string]
        | readonly ['lp', string]
        | readonly ['ltail', string]
        | readonly ['minlen', number]
        | readonly ['pen width', number]
        | readonly ['pos', string]
        | readonly ['same head', boolean]
        | readonly ['same tail', boolean]
        | readonly ['showboxes', boolean]
        | readonly ['style', string]
        | readonly ['tail lp', string]
        | readonly ['tailclip', boolean]
        | readonly ['taillabel', string]
        | readonly ['tailport', string]
        | readonly ['tooltip', string]
        | readonly ['weight', number]
        | readonly ['xlabel', string]
        | readonly ['xlp', string]
    >
}

export namespace Graph {
    
    export namespace name {
        export type O = string
    }
    export type name = _et.Optional_Value<string>
    
    export namespace tree {
    }
    export type tree = _T_Tree
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace undirected {
                
                export namespace edges {
                    
                    export namespace L {
                        
                        export namespace yin {
                        }
                        export type yin = _T_End_Point_Specification
                        
                        export namespace yang {
                        }
                        export type yang = _T_End_Point_Specification
                        
                        export namespace attributes {
                        }
                        export type attributes = _T_Edge_Attributes
                    }
                    export type L = {
                        readonly 'yin': _T_End_Point_Specification
                        readonly 'yang': _T_End_Point_Specification
                        readonly 'attributes': _T_Edge_Attributes
                    }
                }
                export type edges = _i_core._T_List<null, {
                    readonly 'yin': _T_End_Point_Specification
                    readonly 'yang': _T_End_Point_Specification
                    readonly 'attributes': _T_Edge_Attributes
                }>
            }
            export type undirected = {
                readonly 'edges': _i_core._T_List<null, {
                    readonly 'yin': _T_End_Point_Specification
                    readonly 'yang': _T_End_Point_Specification
                    readonly 'attributes': _T_Edge_Attributes
                }>
            }
            
            export namespace directed {
                
                export namespace edges {
                    
                    export namespace L {
                        
                        export namespace _from {
                        }
                        export type _from = _T_End_Point_Specification
                        
                        export namespace to {
                        }
                        export type to = _T_End_Point_Specification
                        
                        export namespace attributes {
                        }
                        export type attributes = _T_Edge_Attributes
                    }
                    export type L = {
                        readonly 'from': _T_End_Point_Specification
                        readonly 'to': _T_End_Point_Specification
                        readonly 'attributes': _T_Edge_Attributes
                    }
                }
                export type edges = _i_core._T_List<null, {
                    readonly 'from': _T_End_Point_Specification
                    readonly 'to': _T_End_Point_Specification
                    readonly 'attributes': _T_Edge_Attributes
                }>
            }
            export type directed = {
                readonly 'edges': _i_core._T_List<null, {
                    readonly 'from': _T_End_Point_Specification
                    readonly 'to': _T_End_Point_Specification
                    readonly 'attributes': _T_Edge_Attributes
                }>
            }
        }
        export type SG = 
            | readonly ['undirected', {
                readonly 'edges': _i_core._T_List<null, {
                    readonly 'yin': _T_End_Point_Specification
                    readonly 'yang': _T_End_Point_Specification
                    readonly 'attributes': _T_Edge_Attributes
                }>
            }]
            | readonly ['directed', {
                readonly 'edges': _i_core._T_List<null, {
                    readonly 'from': _T_End_Point_Specification
                    readonly 'to': _T_End_Point_Specification
                    readonly 'attributes': _T_Edge_Attributes
                }>
            }]
    }
    export type _type = _i_core._T_State_Group<null, 
        | readonly ['undirected', {
            readonly 'edges': _i_core._T_List<null, {
                readonly 'yin': _T_End_Point_Specification
                readonly 'yang': _T_End_Point_Specification
                readonly 'attributes': _T_Edge_Attributes
            }>
        }]
        | readonly ['directed', {
            readonly 'edges': _i_core._T_List<null, {
                readonly 'from': _T_End_Point_Specification
                readonly 'to': _T_End_Point_Specification
                readonly 'attributes': _T_Edge_Attributes
            }>
        }]
    >
}

export namespace Attribute_Value {
    
    export namespace SG {
        export type _number = string
        export type _string = string
        export type html_string = string
    }
    export type SG = 
        | readonly ['number', string]
        | readonly ['string', string]
        | readonly ['html string', string]
}
