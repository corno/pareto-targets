import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/graphviz_high_level/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const Graph_Attributes: _i_signatures._T_Graph_Attributes = ($, $p) => ['list', $.map(($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'concentrate': return _p.ss($, ($) => ({
            'state': "concentrate",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'charset': return _p.ss($, ($) => ({
            'state': "charset",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'clusterrank': return _p.ss($, ($) => ({
            'state': "clusterrank",
            'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'none': return _p.ss($, ($) => ({
                        'state': "none",
                        'value': ['nothing', null],
                    }))
                    case 'local': return _p.ss($, ($) => ({
                        'state': "local",
                        'value': ['nothing', null],
                    }))
                    case 'global': return _p.ss($, ($) => ({
                        'state': "global",
                        'value': ['nothing', null],
                    }))
                    default: return _p.au($[0])
                }
            })],
        }))
        case 'color': return _p.ss($, ($) => ({
            'state': "color",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'color scheme': return _p.ss($, ($) => ({
            'state': "color scheme",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'comment': return _p.ss($, ($) => ({
            'state': "comment",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'compound': return _p.ss($, ($) => ({
            'state': "compound",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'dpi': return _p.ss($, ($) => ({
            'state': "dpi",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'font color': return _p.ss($, ($) => ({
            'state': "font color",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'font name': return _p.ss($, ($) => ({
            'state': "font name",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'font path': return _p.ss($, ($) => ({
            'state': "font path",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'font size': return _p.ss($, ($) => ({
            'state': "font size",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'label': return _p.ss($, ($) => ({
            'state': "label",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'label distance': return _p.ss($, ($) => ({
            'state': "label distance",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'label scheme': return _p.ss($, ($) => ({
            'state': "label scheme",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'label location': return _p.ss($, ($) => ({
            'state': "label location",
            'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'top': return _p.ss($, ($) => ({
                        'state': "top",
                        'value': ['nothing', null],
                    }))
                    case 'bottom': return _p.ss($, ($) => ({
                        'state': "bottom",
                        'value': ['nothing', null],
                    }))
                    default: return _p.au($[0])
                }
            })],
        }))
        case 'landscape': return _p.ss($, ($) => ({
            'state': "landscape",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'layer list': return _p.ss($, ($) => ({
            'state': "layer list",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'layer separator': return _p.ss($, ($) => ({
            'state': "layer separator",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'layers': return _p.ss($, ($) => ({
            'state': "layers",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'margin': return _p.ss($, ($) => ({
            'state': "margin",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'max iteration': return _p.ss($, ($) => ({
            'state': "max iteration",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'mclimit': return _p.ss($, ($) => ({
            'state': "mclimit",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'mindist': return _p.ss($, ($) => ({
            'state': "mindist",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'mode': return _p.ss($, ($) => ({
            'state': "mode",
            'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'no output': return _p.ss($, ($) => ({
                        'state': "no output",
                        'value': ['nothing', null],
                    }))
                    case 'out': return _p.ss($, ($) => ({
                        'state': "out",
                        'value': ['nothing', null],
                    }))
                    case 'in': return _p.ss($, ($) => ({
                        'state': "in",
                        'value': ['nothing', null],
                    }))
                    case 'in out': return _p.ss($, ($) => ({
                        'state': "in out",
                        'value': ['nothing', null],
                    }))
                    default: return _p.au($[0])
                }
            })],
        }))
        case 'newrank': return _p.ss($, ($) => ({
            'state': "newrank",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'no loop': return _p.ss($, ($) => ({
            'state': "no loop",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'normalize': return _p.ss($, ($) => ({
            'state': "normalize",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'ordering': return _p.ss($, ($) => ({
            'state': "ordering",
            'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'out': return _p.ss($, ($) => ({
                        'state': "out",
                        'value': ['nothing', null],
                    }))
                    case 'in': return _p.ss($, ($) => ({
                        'state': "in",
                        'value': ['nothing', null],
                    }))
                    case 'in out': return _p.ss($, ($) => ({
                        'state': "in out",
                        'value': ['nothing', null],
                    }))
                    default: return _p.au($[0])
                }
            })],
        }))
        case 'orientation': return _p.ss($, ($) => ({
            'state': "orientation",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'output order': return _p.ss($, ($) => ({
            'state': "output order",
            'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'breadth first': return _p.ss($, ($) => ({
                        'state': "breadth first",
                        'value': ['nothing', null],
                    }))
                    case 'dfs': return _p.ss($, ($) => ({
                        'state': "dfs",
                        'value': ['nothing', null],
                    }))
                    default: return _p.au($[0])
                }
            })],
        }))
        case 'overlap': return _p.ss($, ($) => ({
            'state': "overlap",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'output mode': return _p.ss($, ($) => ({
            'state': "output mode",
            'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'edges first': return _p.ss($, ($) => ({
                        'state': "edges first",
                        'value': ['nothing', null],
                    }))
                    case 'nodes first': return _p.ss($, ($) => ({
                        'state': "nodes first",
                        'value': ['nothing', null],
                    }))
                    default: return _p.au($[0])
                }
            })],
        }))
        case 'pack': return _p.ss($, ($) => ({
            'state': "pack",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'pack mode': return _p.ss($, ($) => ({
            'state': "pack mode",
            'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'node': return _p.ss($, ($) => ({
                        'state': "node",
                        'value': ['nothing', null],
                    }))
                    case 'graph': return _p.ss($, ($) => ({
                        'state': "graph",
                        'value': ['nothing', null],
                    }))
                    default: return _p.au($[0])
                }
            })],
        }))
        case 'pad': return _p.ss($, ($) => ({
            'state': "pad",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'page': return _p.ss($, ($) => ({
            'state': "page",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'quadtree': return _p.ss($, ($) => ({
            'state': "quadtree",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'quantum': return _p.ss($, ($) => ({
            'state': "quantum",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'rankdir': return _p.ss($, ($) => ({
            'state': "rankdir",
            'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'top bottom': return _p.ss($, ($) => ({
                        'state': "top bottom",
                        'value': ['nothing', null],
                    }))
                    case 'bottom top': return _p.ss($, ($) => ({
                        'state': "bottom top",
                        'value': ['nothing', null],
                    }))
                    case 'left right': return _p.ss($, ($) => ({
                        'state': "left right",
                        'value': ['nothing', null],
                    }))
                    case 'right left': return _p.ss($, ($) => ({
                        'state': "right left",
                        'value': ['nothing', null],
                    }))
                    default: return _p.au($[0])
                }
            })],
        }))
        case 'ranksep': return _p.ss($, ($) => ({
            'state': "ranksep",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'ratio': return _p.ss($, ($) => ({
            'state': "ratio",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'remincross': return _p.ss($, ($) => ({
            'state': "remincross",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'rotate': return _p.ss($, ($) => ({
            'state': "rotate",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'scale': return _p.ss($, ($) => ({
            'state': "scale",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'searchsize': return _p.ss($, ($) => ({
            'state': "searchsize",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'sep': return _p.ss($, ($) => ({
            'state': "sep",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'showboxes': return _p.ss($, ($) => ({
            'state': "showboxes",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'size': return _p.ss($, ($) => ({
            'state': "size",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'smoothing': return _p.ss($, ($) => ({
            'state': "smoothing",
            'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'none': return _p.ss($, ($) => ({
                        'state': "none",
                        'value': ['nothing', null],
                    }))
                    case 'spring': return _p.ss($, ($) => ({
                        'state': "spring",
                        'value': ['nothing', null],
                    }))
                    case 'triangle': return _p.ss($, ($) => ({
                        'state': "triangle",
                        'value': ['nothing', null],
                    }))
                    default: return _p.au($[0])
                }
            })],
        }))
        case 'sortv': return _p.ss($, ($) => ({
            'state': "sortv",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'splines': return _p.ss($, ($) => ({
            'state': "splines",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'start': return _p.ss($, ($) => ({
            'state': "start",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'style': return _p.ss($, ($) => ({
            'state': "style",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'stylesheet': return _p.ss($, ($) => ({
            'state': "stylesheet",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'target': return _p.ss($, ($) => ({
            'state': "target",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'tooltip': return _p.ss($, ($) => ({
            'state': "tooltip",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'truecolor': return _p.ss($, ($) => ({
            'state': "truecolor",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'viewport': return _p.ss($, ($) => ({
            'state': "viewport",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'width': return _p.ss($, ($) => ({
            'state': "width",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'xdotversion': return _p.ss($, ($) => ({
            'state': "xdotversion",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'xlabel': return _p.ss($, ($) => ({
            'state': "xlabel",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        default: return _p.au($[0])
    }
})])]
export const Node_Attributes: _i_signatures._T_Node_Attributes = ($, $p) => ['list', $.map(($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'color': return _p.ss($, ($) => ({
            'state': "color",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'colorscheme': return _p.ss($, ($) => ({
            'state': "colorscheme",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'comment': return _p.ss($, ($) => ({
            'state': "comment",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'concentrate': return _p.ss($, ($) => ({
            'state': "concentrate",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'fill color': return _p.ss($, ($) => ({
            'state': "fill color",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'fixed size': return _p.ss($, ($) => ({
            'state': "fixed size",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'font color': return _p.ss($, ($) => ({
            'state': "font color",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'font name': return _p.ss($, ($) => ({
            'state': "font name",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'font size': return _p.ss($, ($) => ({
            'state': "font size",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'group': return _p.ss($, ($) => ({
            'state': "group",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'height': return _p.ss($, ($) => ({
            'state': "height",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'image': return _p.ss($, ($) => ({
            'state': "image",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'label': return _p.ss($, ($) => ({
            'state': "label",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'labelloc': return _p.ss($, ($) => ({
            'state': "labelloc",
            'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'top': return _p.ss($, ($) => ({
                        'state': "top",
                        'value': ['nothing', null],
                    }))
                    case 'center': return _p.ss($, ($) => ({
                        'state': "center",
                        'value': ['nothing', null],
                    }))
                    case 'bottom': return _p.ss($, ($) => ({
                        'state': "bottom",
                        'value': ['nothing', null],
                    }))
                    default: return _p.au($[0])
                }
            })],
        }))
        case 'layers': return _p.ss($, ($) => ({
            'state': "layers",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'margin': return _p.ss($, ($) => ({
            'state': "margin",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'nojustify': return _p.ss($, ($) => ({
            'state': "nojustify",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'orientation': return _p.ss($, ($) => ({
            'state': "orientation",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'pen width': return _p.ss($, ($) => ({
            'state': "pen width",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'peripheries': return _p.ss($, ($) => ({
            'state': "peripheries",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'pos': return _p.ss($, ($) => ({
            'state': "pos",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'rects': return _p.ss($, ($) => ({
            'state': "rects",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'regular': return _p.ss($, ($) => ({
            'state': "regular",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'root': return _p.ss($, ($) => ({
            'state': "root",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'shape': return _p.ss($, ($) => ({
            'state': "shape",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'showboxes': return _p.ss($, ($) => ({
            'state': "showboxes",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'sides': return _p.ss($, ($) => ({
            'state': "sides",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'skew': return _p.ss($, ($) => ({
            'state': "skew",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'style': return _p.ss($, ($) => ({
            'state': "style",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'target': return _p.ss($, ($) => ({
            'state': "target",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'tooltip': return _p.ss($, ($) => ({
            'state': "tooltip",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'width': return _p.ss($, ($) => ({
            'state': "width",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'xlabel': return _p.ss($, ($) => ({
            'state': "xlabel",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'xlp': return _p.ss($, ($) => ({
            'state': "xlp",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        default: return _p.au($[0])
    }
})])]
export const Tree: _i_signatures._T_Tree = ($, $p) => ['verbose group', _p.dictionary.literal({
    'attributes': _p.deprecated_cc($['attributes'], ($) => Graph_Attributes(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'elements': _p.deprecated_cc($['elements'], ($) => ['dictionary', $.map(($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'node': return _p.ss($, ($) => ({
                'state': "node",
                'value': ['verbose group', _p.dictionary.literal({
                    'attributes': _p.deprecated_cc($['attributes'], ($) => Node_Attributes(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })],
            }))
            case 'sub': return _p.ss($, ($) => ({
                'state': "sub",
                'value': ['verbose group', _p.dictionary.literal({
                    'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                        switch ($[0]) {
                            case 'group': return _p.ss($, ($) => ({
                                'state': "group",
                                'value': ['nothing', null],
                            }))
                            case 'cluster': return _p.ss($, ($) => ({
                                'state': "cluster",
                                'value': ['nothing', null],
                            }))
                            case 'subgraph': return _p.ss($, ($) => ({
                                'state': "subgraph",
                                'value': ['nothing', null],
                            }))
                            default: return _p.au($[0])
                        }
                    })]),
                    'tree': _p.deprecated_cc($['tree'], ($) => Tree(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })],
            }))
            default: return _p.au($[0])
        }
    })])]),
})]
export const End_Point_Specification: _i_signatures._T_End_Point_Specification = ($, $p) => ['verbose group', _p.dictionary.literal({
    'start': _p.deprecated_cc($['start'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'tail': _p.deprecated_cc($['tail'], ($) => ['list', $.map(($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })])]),
    'port data': _p.deprecated_cc($['port data'], ($) => ['optional', $.transform(
        ($): _i_out._T_Value.SG.optional => ['set', ['verbose group', _p.dictionary.literal({
            'port': _p.deprecated_cc($['port'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
            'compass direction': _p.deprecated_cc($['compass direction'], ($) => ['optional', $.transform(
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
export const Edge_Attributes: _i_signatures._T_Edge_Attributes = ($, $p) => ['list', $.map(($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'arrowhead': return _p.ss($, ($) => ({
            'state': "arrowhead",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'arrowsize': return _p.ss($, ($) => ({
            'state': "arrowsize",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'arrowtail': return _p.ss($, ($) => ({
            'state': "arrowtail",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'bgcolor': return _p.ss($, ($) => ({
            'state': "bgcolor",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'color': return _p.ss($, ($) => ({
            'state': "color",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'colorscheme': return _p.ss($, ($) => ({
            'state': "colorscheme",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'comment': return _p.ss($, ($) => ({
            'state': "comment",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'constraint': return _p.ss($, ($) => ({
            'state': "constraint",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'decorate': return _p.ss($, ($) => ({
            'state': "decorate",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'dir': return _p.ss($, ($) => ({
            'state': "dir",
            'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'forward': return _p.ss($, ($) => ({
                        'state': "forward",
                        'value': ['nothing', null],
                    }))
                    case 'back': return _p.ss($, ($) => ({
                        'state': "back",
                        'value': ['nothing', null],
                    }))
                    case 'both': return _p.ss($, ($) => ({
                        'state': "both",
                        'value': ['nothing', null],
                    }))
                    case 'none': return _p.ss($, ($) => ({
                        'state': "none",
                        'value': ['nothing', null],
                    }))
                    default: return _p.au($[0])
                }
            })],
        }))
        case 'edge url': return _p.ss($, ($) => ({
            'state': "edge url",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'edge lp': return _p.ss($, ($) => ({
            'state': "edge lp",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'edge target': return _p.ss($, ($) => ({
            'state': "edge target",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'edge tooltip': return _p.ss($, ($) => ({
            'state': "edge tooltip",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'head lp': return _p.ss($, ($) => ({
            'state': "head lp",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'headclip': return _p.ss($, ($) => ({
            'state': "headclip",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'headlabel': return _p.ss($, ($) => ({
            'state': "headlabel",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'headport': return _p.ss($, ($) => ({
            'state': "headport",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'height': return _p.ss($, ($) => ({
            'state': "height",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'id': return _p.ss($, ($) => ({
            'state': "id",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'label': return _p.ss($, ($) => ({
            'state': "label",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'label distance': return _p.ss($, ($) => ({
            'state': "label distance",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'label angle': return _p.ss($, ($) => ({
            'state': "label angle",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'label float': return _p.ss($, ($) => ({
            'state': "label float",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'labelfloat': return _p.ss($, ($) => ({
            'state': "labelfloat",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'labelhref': return _p.ss($, ($) => ({
            'state': "labelhref",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'label lp': return _p.ss($, ($) => ({
            'state': "label lp",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'layer': return _p.ss($, ($) => ({
            'state': "layer",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'len': return _p.ss($, ($) => ({
            'state': "len",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'lhead': return _p.ss($, ($) => ({
            'state': "lhead",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'lp': return _p.ss($, ($) => ({
            'state': "lp",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'ltail': return _p.ss($, ($) => ({
            'state': "ltail",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'minlen': return _p.ss($, ($) => ({
            'state': "minlen",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'pen width': return _p.ss($, ($) => ({
            'state': "pen width",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'pos': return _p.ss($, ($) => ({
            'state': "pos",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'same head': return _p.ss($, ($) => ({
            'state': "same head",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'same tail': return _p.ss($, ($) => ({
            'state': "same tail",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'showboxes': return _p.ss($, ($) => ({
            'state': "showboxes",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'style': return _p.ss($, ($) => ({
            'state': "style",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'tail lp': return _p.ss($, ($) => ({
            'state': "tail lp",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'tailclip': return _p.ss($, ($) => ({
            'state': "tailclip",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'taillabel': return _p.ss($, ($) => ({
            'state': "taillabel",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'tailport': return _p.ss($, ($) => ({
            'state': "tailport",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'tooltip': return _p.ss($, ($) => ({
            'state': "tooltip",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'weight': return _p.ss($, ($) => ({
            'state': "weight",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'xlabel': return _p.ss($, ($) => ({
            'state': "xlabel",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'xlp': return _p.ss($, ($) => ({
            'state': "xlp",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        default: return _p.au($[0])
    }
})])]
export const Graph: _i_signatures._T_Graph = ($, $p) => ['verbose group', _p.dictionary.literal({
    'name': _p.deprecated_cc($['name'], ($) => ['optional', $.transform(
        ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]],
        () => ['not set', null]
    )]),
    'tree': _p.deprecated_cc($['tree'], ($) => Tree(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'undirected': return _p.ss($, ($) => ({
                'state': "undirected",
                'value': ['verbose group', _p.dictionary.literal({
                    'edges': _p.deprecated_cc($['edges'], ($) => ['list', $.map(($) => ['verbose group', _p.dictionary.literal({
                        'yin': _p.deprecated_cc($['yin'], ($) => End_Point_Specification(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                        'yang': _p.deprecated_cc($['yang'], ($) => End_Point_Specification(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                        'attributes': _p.deprecated_cc($['attributes'], ($) => Edge_Attributes(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                    })])]),
                })],
            }))
            case 'directed': return _p.ss($, ($) => ({
                'state': "directed",
                'value': ['verbose group', _p.dictionary.literal({
                    'edges': _p.deprecated_cc($['edges'], ($) => ['list', $.map(($) => ['verbose group', _p.dictionary.literal({
                        'from': _p.deprecated_cc($['from'], ($) => End_Point_Specification(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                        'to': _p.deprecated_cc($['to'], ($) => End_Point_Specification(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                        'attributes': _p.deprecated_cc($['attributes'], ($) => Edge_Attributes(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                    })])]),
                })],
            }))
            default: return _p.au($[0])
        }
    })]),
})]
export const Attribute_Value: _i_signatures._T_Attribute_Value = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'number': return _p.ss($, ($) => ({
            'state': "number",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'string': return _p.ss($, ($) => ({
            'state': "string",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'html string': return _p.ss($, ($) => ({
            'state': "html string",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        default: return _p.au($[0])
    }
})]
