import * as _pa from 'pareto-core-transformer'
import * as _pd from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/graphviz_high_level/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const Graph_Attributes: _i_signatures._T_Graph_Attributes = ($, $p) => ['list', $.map(($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'concentrate': return _pa.ss($, ($) => ({
            'state': "concentrate",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'charset': return _pa.ss($, ($) => ({
            'state': "charset",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'clusterrank': return _pa.ss($, ($) => ({
            'state': "clusterrank",
            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'none': return _pa.ss($, ($) => ({
                        'state': "none",
                        'value': ['nothing', null],
                    }))
                    case 'local': return _pa.ss($, ($) => ({
                        'state': "local",
                        'value': ['nothing', null],
                    }))
                    case 'global': return _pa.ss($, ($) => ({
                        'state': "global",
                        'value': ['nothing', null],
                    }))
                    default: return _pa.au($[0])
                }
            })],
        }))
        case 'color': return _pa.ss($, ($) => ({
            'state': "color",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'color scheme': return _pa.ss($, ($) => ({
            'state': "color scheme",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'comment': return _pa.ss($, ($) => ({
            'state': "comment",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'compound': return _pa.ss($, ($) => ({
            'state': "compound",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'dpi': return _pa.ss($, ($) => ({
            'state': "dpi",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'font color': return _pa.ss($, ($) => ({
            'state': "font color",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'font name': return _pa.ss($, ($) => ({
            'state': "font name",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'font path': return _pa.ss($, ($) => ({
            'state': "font path",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'font size': return _pa.ss($, ($) => ({
            'state': "font size",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'label': return _pa.ss($, ($) => ({
            'state': "label",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'label distance': return _pa.ss($, ($) => ({
            'state': "label distance",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'label scheme': return _pa.ss($, ($) => ({
            'state': "label scheme",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'label location': return _pa.ss($, ($) => ({
            'state': "label location",
            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'top': return _pa.ss($, ($) => ({
                        'state': "top",
                        'value': ['nothing', null],
                    }))
                    case 'bottom': return _pa.ss($, ($) => ({
                        'state': "bottom",
                        'value': ['nothing', null],
                    }))
                    default: return _pa.au($[0])
                }
            })],
        }))
        case 'landscape': return _pa.ss($, ($) => ({
            'state': "landscape",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'layer list': return _pa.ss($, ($) => ({
            'state': "layer list",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'layer separator': return _pa.ss($, ($) => ({
            'state': "layer separator",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'layers': return _pa.ss($, ($) => ({
            'state': "layers",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'margin': return _pa.ss($, ($) => ({
            'state': "margin",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'max iteration': return _pa.ss($, ($) => ({
            'state': "max iteration",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'mclimit': return _pa.ss($, ($) => ({
            'state': "mclimit",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'mindist': return _pa.ss($, ($) => ({
            'state': "mindist",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'mode': return _pa.ss($, ($) => ({
            'state': "mode",
            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'no output': return _pa.ss($, ($) => ({
                        'state': "no output",
                        'value': ['nothing', null],
                    }))
                    case 'out': return _pa.ss($, ($) => ({
                        'state': "out",
                        'value': ['nothing', null],
                    }))
                    case 'in': return _pa.ss($, ($) => ({
                        'state': "in",
                        'value': ['nothing', null],
                    }))
                    case 'in out': return _pa.ss($, ($) => ({
                        'state': "in out",
                        'value': ['nothing', null],
                    }))
                    default: return _pa.au($[0])
                }
            })],
        }))
        case 'newrank': return _pa.ss($, ($) => ({
            'state': "newrank",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'no loop': return _pa.ss($, ($) => ({
            'state': "no loop",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'normalize': return _pa.ss($, ($) => ({
            'state': "normalize",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'ordering': return _pa.ss($, ($) => ({
            'state': "ordering",
            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'out': return _pa.ss($, ($) => ({
                        'state': "out",
                        'value': ['nothing', null],
                    }))
                    case 'in': return _pa.ss($, ($) => ({
                        'state': "in",
                        'value': ['nothing', null],
                    }))
                    case 'in out': return _pa.ss($, ($) => ({
                        'state': "in out",
                        'value': ['nothing', null],
                    }))
                    default: return _pa.au($[0])
                }
            })],
        }))
        case 'orientation': return _pa.ss($, ($) => ({
            'state': "orientation",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'output order': return _pa.ss($, ($) => ({
            'state': "output order",
            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'breadth first': return _pa.ss($, ($) => ({
                        'state': "breadth first",
                        'value': ['nothing', null],
                    }))
                    case 'dfs': return _pa.ss($, ($) => ({
                        'state': "dfs",
                        'value': ['nothing', null],
                    }))
                    default: return _pa.au($[0])
                }
            })],
        }))
        case 'overlap': return _pa.ss($, ($) => ({
            'state': "overlap",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'output mode': return _pa.ss($, ($) => ({
            'state': "output mode",
            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'edges first': return _pa.ss($, ($) => ({
                        'state': "edges first",
                        'value': ['nothing', null],
                    }))
                    case 'nodes first': return _pa.ss($, ($) => ({
                        'state': "nodes first",
                        'value': ['nothing', null],
                    }))
                    default: return _pa.au($[0])
                }
            })],
        }))
        case 'pack': return _pa.ss($, ($) => ({
            'state': "pack",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'pack mode': return _pa.ss($, ($) => ({
            'state': "pack mode",
            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'node': return _pa.ss($, ($) => ({
                        'state': "node",
                        'value': ['nothing', null],
                    }))
                    case 'graph': return _pa.ss($, ($) => ({
                        'state': "graph",
                        'value': ['nothing', null],
                    }))
                    default: return _pa.au($[0])
                }
            })],
        }))
        case 'pad': return _pa.ss($, ($) => ({
            'state': "pad",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'page': return _pa.ss($, ($) => ({
            'state': "page",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'quadtree': return _pa.ss($, ($) => ({
            'state': "quadtree",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'quantum': return _pa.ss($, ($) => ({
            'state': "quantum",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'rankdir': return _pa.ss($, ($) => ({
            'state': "rankdir",
            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'top bottom': return _pa.ss($, ($) => ({
                        'state': "top bottom",
                        'value': ['nothing', null],
                    }))
                    case 'bottom top': return _pa.ss($, ($) => ({
                        'state': "bottom top",
                        'value': ['nothing', null],
                    }))
                    case 'left right': return _pa.ss($, ($) => ({
                        'state': "left right",
                        'value': ['nothing', null],
                    }))
                    case 'right left': return _pa.ss($, ($) => ({
                        'state': "right left",
                        'value': ['nothing', null],
                    }))
                    default: return _pa.au($[0])
                }
            })],
        }))
        case 'ranksep': return _pa.ss($, ($) => ({
            'state': "ranksep",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'ratio': return _pa.ss($, ($) => ({
            'state': "ratio",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'remincross': return _pa.ss($, ($) => ({
            'state': "remincross",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'rotate': return _pa.ss($, ($) => ({
            'state': "rotate",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'scale': return _pa.ss($, ($) => ({
            'state': "scale",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'searchsize': return _pa.ss($, ($) => ({
            'state': "searchsize",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'sep': return _pa.ss($, ($) => ({
            'state': "sep",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'showboxes': return _pa.ss($, ($) => ({
            'state': "showboxes",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'size': return _pa.ss($, ($) => ({
            'state': "size",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'smoothing': return _pa.ss($, ($) => ({
            'state': "smoothing",
            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'none': return _pa.ss($, ($) => ({
                        'state': "none",
                        'value': ['nothing', null],
                    }))
                    case 'spring': return _pa.ss($, ($) => ({
                        'state': "spring",
                        'value': ['nothing', null],
                    }))
                    case 'triangle': return _pa.ss($, ($) => ({
                        'state': "triangle",
                        'value': ['nothing', null],
                    }))
                    default: return _pa.au($[0])
                }
            })],
        }))
        case 'sortv': return _pa.ss($, ($) => ({
            'state': "sortv",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'splines': return _pa.ss($, ($) => ({
            'state': "splines",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'start': return _pa.ss($, ($) => ({
            'state': "start",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'style': return _pa.ss($, ($) => ({
            'state': "style",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'stylesheet': return _pa.ss($, ($) => ({
            'state': "stylesheet",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'target': return _pa.ss($, ($) => ({
            'state': "target",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'tooltip': return _pa.ss($, ($) => ({
            'state': "tooltip",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'truecolor': return _pa.ss($, ($) => ({
            'state': "truecolor",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'viewport': return _pa.ss($, ($) => ({
            'state': "viewport",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'width': return _pa.ss($, ($) => ({
            'state': "width",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'xdotversion': return _pa.ss($, ($) => ({
            'state': "xdotversion",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'xlabel': return _pa.ss($, ($) => ({
            'state': "xlabel",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        default: return _pa.au($[0])
    }
})])]
export const Node_Attributes: _i_signatures._T_Node_Attributes = ($, $p) => ['list', $.map(($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'color': return _pa.ss($, ($) => ({
            'state': "color",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'colorscheme': return _pa.ss($, ($) => ({
            'state': "colorscheme",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'comment': return _pa.ss($, ($) => ({
            'state': "comment",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'concentrate': return _pa.ss($, ($) => ({
            'state': "concentrate",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'fill color': return _pa.ss($, ($) => ({
            'state': "fill color",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'fixed size': return _pa.ss($, ($) => ({
            'state': "fixed size",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'font color': return _pa.ss($, ($) => ({
            'state': "font color",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'font name': return _pa.ss($, ($) => ({
            'state': "font name",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'font size': return _pa.ss($, ($) => ({
            'state': "font size",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'group': return _pa.ss($, ($) => ({
            'state': "group",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'height': return _pa.ss($, ($) => ({
            'state': "height",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'image': return _pa.ss($, ($) => ({
            'state': "image",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'label': return _pa.ss($, ($) => ({
            'state': "label",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'labelloc': return _pa.ss($, ($) => ({
            'state': "labelloc",
            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'top': return _pa.ss($, ($) => ({
                        'state': "top",
                        'value': ['nothing', null],
                    }))
                    case 'center': return _pa.ss($, ($) => ({
                        'state': "center",
                        'value': ['nothing', null],
                    }))
                    case 'bottom': return _pa.ss($, ($) => ({
                        'state': "bottom",
                        'value': ['nothing', null],
                    }))
                    default: return _pa.au($[0])
                }
            })],
        }))
        case 'layers': return _pa.ss($, ($) => ({
            'state': "layers",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'margin': return _pa.ss($, ($) => ({
            'state': "margin",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'nojustify': return _pa.ss($, ($) => ({
            'state': "nojustify",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'orientation': return _pa.ss($, ($) => ({
            'state': "orientation",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'pen width': return _pa.ss($, ($) => ({
            'state': "pen width",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'peripheries': return _pa.ss($, ($) => ({
            'state': "peripheries",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'pos': return _pa.ss($, ($) => ({
            'state': "pos",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'rects': return _pa.ss($, ($) => ({
            'state': "rects",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'regular': return _pa.ss($, ($) => ({
            'state': "regular",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'root': return _pa.ss($, ($) => ({
            'state': "root",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'shape': return _pa.ss($, ($) => ({
            'state': "shape",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'showboxes': return _pa.ss($, ($) => ({
            'state': "showboxes",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'sides': return _pa.ss($, ($) => ({
            'state': "sides",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'skew': return _pa.ss($, ($) => ({
            'state': "skew",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'style': return _pa.ss($, ($) => ({
            'state': "style",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'target': return _pa.ss($, ($) => ({
            'state': "target",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'tooltip': return _pa.ss($, ($) => ({
            'state': "tooltip",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'width': return _pa.ss($, ($) => ({
            'state': "width",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'xlabel': return _pa.ss($, ($) => ({
            'state': "xlabel",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'xlp': return _pa.ss($, ($) => ({
            'state': "xlp",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        default: return _pa.au($[0])
    }
})])]
export const Tree: _i_signatures._T_Tree = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'attributes': _pa.cc($['attributes'], ($) => Graph_Attributes(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'elements': _pa.cc($['elements'], ($) => ['dictionary', $.map(($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'node': return _pa.ss($, ($) => ({
                'state': "node",
                'value': ['verbose group', _pa.dictionary.literal({
                    'attributes': _pa.cc($['attributes'], ($) => Node_Attributes(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })],
            }))
            case 'sub': return _pa.ss($, ($) => ({
                'state': "sub",
                'value': ['verbose group', _pa.dictionary.literal({
                    'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                        switch ($[0]) {
                            case 'group': return _pa.ss($, ($) => ({
                                'state': "group",
                                'value': ['nothing', null],
                            }))
                            case 'cluster': return _pa.ss($, ($) => ({
                                'state': "cluster",
                                'value': ['nothing', null],
                            }))
                            case 'subgraph': return _pa.ss($, ($) => ({
                                'state': "subgraph",
                                'value': ['nothing', null],
                            }))
                            default: return _pa.au($[0])
                        }
                    })]),
                    'tree': _pa.cc($['tree'], ($) => Tree(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })],
            }))
            default: return _pa.au($[0])
        }
    })])]),
})]
export const End_Point_Specification: _i_signatures._T_End_Point_Specification = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'start': _pa.cc($['start'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'tail': _pa.cc($['tail'], ($) => ['list', $.map(($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })])]),
    'port data': _pa.cc($['port data'], ($) => ['optional', $.transform(
        ($): _i_out._T_Value.SG.optional => ['set', ['verbose group', _pa.dictionary.literal({
            'port': _pa.cc($['port'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
            'compass direction': _pa.cc($['compass direction'], ($) => ['optional', $.transform(
                ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]],
                () => ['not set', null]
            )]),
        })]],
        () => ['not set', null]
    )]),
})]
export const Edge_Attributes: _i_signatures._T_Edge_Attributes = ($, $p) => ['list', $.map(($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'arrowhead': return _pa.ss($, ($) => ({
            'state': "arrowhead",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'arrowsize': return _pa.ss($, ($) => ({
            'state': "arrowsize",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'arrowtail': return _pa.ss($, ($) => ({
            'state': "arrowtail",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'bgcolor': return _pa.ss($, ($) => ({
            'state': "bgcolor",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'color': return _pa.ss($, ($) => ({
            'state': "color",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'colorscheme': return _pa.ss($, ($) => ({
            'state': "colorscheme",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'comment': return _pa.ss($, ($) => ({
            'state': "comment",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'constraint': return _pa.ss($, ($) => ({
            'state': "constraint",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'decorate': return _pa.ss($, ($) => ({
            'state': "decorate",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'dir': return _pa.ss($, ($) => ({
            'state': "dir",
            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'forward': return _pa.ss($, ($) => ({
                        'state': "forward",
                        'value': ['nothing', null],
                    }))
                    case 'back': return _pa.ss($, ($) => ({
                        'state': "back",
                        'value': ['nothing', null],
                    }))
                    case 'both': return _pa.ss($, ($) => ({
                        'state': "both",
                        'value': ['nothing', null],
                    }))
                    case 'none': return _pa.ss($, ($) => ({
                        'state': "none",
                        'value': ['nothing', null],
                    }))
                    default: return _pa.au($[0])
                }
            })],
        }))
        case 'edge url': return _pa.ss($, ($) => ({
            'state': "edge url",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'edge lp': return _pa.ss($, ($) => ({
            'state': "edge lp",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'edge target': return _pa.ss($, ($) => ({
            'state': "edge target",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'edge tooltip': return _pa.ss($, ($) => ({
            'state': "edge tooltip",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'head lp': return _pa.ss($, ($) => ({
            'state': "head lp",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'headclip': return _pa.ss($, ($) => ({
            'state': "headclip",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'headlabel': return _pa.ss($, ($) => ({
            'state': "headlabel",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'headport': return _pa.ss($, ($) => ({
            'state': "headport",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'height': return _pa.ss($, ($) => ({
            'state': "height",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'id': return _pa.ss($, ($) => ({
            'state': "id",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'label': return _pa.ss($, ($) => ({
            'state': "label",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'label distance': return _pa.ss($, ($) => ({
            'state': "label distance",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'label angle': return _pa.ss($, ($) => ({
            'state': "label angle",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'label float': return _pa.ss($, ($) => ({
            'state': "label float",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'labelfloat': return _pa.ss($, ($) => ({
            'state': "labelfloat",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'labelhref': return _pa.ss($, ($) => ({
            'state': "labelhref",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'label lp': return _pa.ss($, ($) => ({
            'state': "label lp",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'layer': return _pa.ss($, ($) => ({
            'state': "layer",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'len': return _pa.ss($, ($) => ({
            'state': "len",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'lhead': return _pa.ss($, ($) => ({
            'state': "lhead",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'lp': return _pa.ss($, ($) => ({
            'state': "lp",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'ltail': return _pa.ss($, ($) => ({
            'state': "ltail",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'minlen': return _pa.ss($, ($) => ({
            'state': "minlen",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'pen width': return _pa.ss($, ($) => ({
            'state': "pen width",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'pos': return _pa.ss($, ($) => ({
            'state': "pos",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'same head': return _pa.ss($, ($) => ({
            'state': "same head",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'same tail': return _pa.ss($, ($) => ({
            'state': "same tail",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'showboxes': return _pa.ss($, ($) => ({
            'state': "showboxes",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'style': return _pa.ss($, ($) => ({
            'state': "style",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'tail lp': return _pa.ss($, ($) => ({
            'state': "tail lp",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'tailclip': return _pa.ss($, ($) => ({
            'state': "tailclip",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'taillabel': return _pa.ss($, ($) => ({
            'state': "taillabel",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'tailport': return _pa.ss($, ($) => ({
            'state': "tailport",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'tooltip': return _pa.ss($, ($) => ({
            'state': "tooltip",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'weight': return _pa.ss($, ($) => ({
            'state': "weight",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'xlabel': return _pa.ss($, ($) => ({
            'state': "xlabel",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'xlp': return _pa.ss($, ($) => ({
            'state': "xlp",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        default: return _pa.au($[0])
    }
})])]
export const Graph: _i_signatures._T_Graph = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'name': _pa.cc($['name'], ($) => ['optional', $.transform(
        ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]],
        () => ['not set', null]
    )]),
    'tree': _pa.cc($['tree'], ($) => Tree(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'undirected': return _pa.ss($, ($) => ({
                'state': "undirected",
                'value': ['verbose group', _pa.dictionary.literal({
                    'edges': _pa.cc($['edges'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary.literal({
                        'yin': _pa.cc($['yin'], ($) => End_Point_Specification(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                        'yang': _pa.cc($['yang'], ($) => End_Point_Specification(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                        'attributes': _pa.cc($['attributes'], ($) => Edge_Attributes(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                    })])]),
                })],
            }))
            case 'directed': return _pa.ss($, ($) => ({
                'state': "directed",
                'value': ['verbose group', _pa.dictionary.literal({
                    'edges': _pa.cc($['edges'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary.literal({
                        'from': _pa.cc($['from'], ($) => End_Point_Specification(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                        'to': _pa.cc($['to'], ($) => End_Point_Specification(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                        'attributes': _pa.cc($['attributes'], ($) => Edge_Attributes(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                    })])]),
                })],
            }))
            default: return _pa.au($[0])
        }
    })]),
})]
export const Attribute_Value: _i_signatures._T_Attribute_Value = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'number': return _pa.ss($, ($) => ({
            'state': "number",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'string': return _pa.ss($, ($) => ({
            'state': "string",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'html string': return _pa.ss($, ($) => ({
            'state': "html string",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        default: return _pa.au($[0])
    }
})]
