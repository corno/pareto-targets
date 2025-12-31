import * as _pt from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'
import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../../interface/generated/pareto/schemas/graphviz_high_level/data_types/target"
import * as d_out from "../../../../../interface/generated/pareto/schemas/graphviz_low_level/data_types/target"

import { $$ as s_list_of_separated_texts } from "pareto-standard-operations/dist/implementation/temp_serializers/schemas/list_of_separated_texts"



export const Graph = ($: d_in.Graph): d_out.Graph => {
    return {
        'strict': true,
        'type': _pt.cc($.type, ($) => {
            switch ($[0]) {
                case 'directed': return _pt.ss($, () => ['digraph', null])
                case 'undirected': return _pt.ss($, () => ['graph', null])
                default: return _pt.au($[0])
            }
        }),
        'name': $.name.map(($) => ['string', $]),
        'statements': _pt.list_literal([
            Tree($.tree, { 'path': _pt.list_literal([]) }),
            _pt.cc($.type, ($): d_out.Graph.statements => {
                switch ($[0]) {
                    case 'directed': return _pt.ss($, ($) => $.edges.map(($): d_out.Statement_List.L => {
                        return ['edge', {
                            "left": ['node', {
                                'id': ['string', $.from.start],
                                'port': _pt.not_set()
                            }],
                            "right": _pt.list_literal<d_out.Statement_List.L.SG.edge.right.L>([
                                ['node', {
                                    'id': ['string', $.to.start],
                                    'port': _pt.not_set()
                                }]
                            ]),
                            "attributes": $.attributes.map(($) => _pt.cc($, ($): d_out.Attribute_List.L => {
                                switch ($[0]) {
                                    case 'arrowhead': return _pt.ss($, ($) => ({ "name": ['id', "arrowhead"], "value": ['string', $] }))
                                    case 'arrowsize': return _pt.ss($, ($) => ({ "name": ['id', "arrowsize"], "value": ['number', $] }))
                                    case 'arrowtail': return _pt.ss($, ($) => ({ "name": ['id', "arrowtail"], "value": ['string', $] }))
                                    case 'bgcolor': return _pt.ss($, ($) => ({ "name": ['id', "bgcolor"], "value": ['string', $] }))
                                    case 'color': return _pt.ss($, ($) => ({ "name": ['id', "color"], "value": ['string', $] }))
                                    case 'colorscheme': return _pt.ss($, ($) => ({ "name": ['id', "colorscheme"], "value": ['string', $] }))
                                    case 'comment': return _pt.ss($, ($) => ({ "name": ['id', "comment"], "value": ['string', $] }))
                                    case 'constraint': return _pt.ss($, ($) => ({ "name": ['id', "constraint"], "value": ['string', "true"] }))
                                    case 'decorate': return _pt.ss($, ($) => ({ "name": ['id', "decorate"], "value": ['string', $ ? "true" : "false"] }))
                                    case 'edge lp': return _pt.ss($, ($) => ({ "name": ['id', "edge lp"], "value": ['string', $] }))
                                    case 'edge target': return _pt.ss($, ($) => ({ "name": ['id', "edge target"], "value": ['string', $] }))
                                    case 'edge tooltip': return _pt.ss($, ($) => ({ "name": ['id', "edge tooltip"], "value": ['string', $] }))
                                    case 'edge url': return _pt.ss($, ($) => ({ "name": ['id', "edge url"], "value": ['string', $] }))
                                    case 'head lp': return _pt.ss($, ($) => ({ "name": ['id', "head lp"], "value": ['string', $] }))
                                    case 'headclip': return _pt.ss($, ($) => ({ "name": ['id', "headclip"], "value": ['string', $ ? "true" : "false"] }))
                                    case 'headlabel': return _pt.ss($, ($) => ({ "name": ['id', "headlabel"], "value": ['string', $] }))
                                    case 'headport': return _pt.ss($, ($) => ({ "name": ['id', "headport"], "value": ['string', $] }))
                                    case 'height': return _pt.ss($, ($) => ({ "name": ['id', "height"], "value": ['number', $] }))
                                    case 'id': return _pt.ss($, ($) => ({ "name": ['id', "id"], "value": ['string', $] }))
                                    case 'label': return _pt.ss($, ($) => ({ "name": ['id', "label"], "value": ['string', $] }))
                                    case 'label angle': return _pt.ss($, ($) => ({ "name": ['id', "label angle"], "value": ['number', $] }))
                                    case 'label distance': return _pt.ss($, ($) => ({ "name": ['id', "label distance"], "value": ['number', $] }))
                                    case 'label float': return _pt.ss($, ($) => ({ "name": ['id', "label float"], "value": ['string', $ ? "true" : "false"] }))
                                    case 'label lp': return _pt.ss($, ($) => ({ "name": ['id', "label lp"], "value": ['string', $] }))
                                    case 'labelfloat': return _pt.ss($, ($) => ({ "name": ['id', "labelfloat"], "value": ['string', $ ? "true" : "false"] }))
                                    case 'labelhref': return _pt.ss($, ($) => ({ "name": ['id', "labelhref"], "value": ['string', $] }))
                                    case 'layer': return _pt.ss($, ($) => ({ "name": ['id', "layer"], "value": ['string', $] }))
                                    case 'len': return _pt.ss($, ($) => ({ "name": ['id', "len"], "value": ['number', $] }))
                                    case 'lhead': return _pt.ss($, ($) => ({ "name": ['id', "lhead"], "value": ['string', $] }))
                                    case 'lp': return _pt.ss($, ($) => ({ "name": ['id', "lp"], "value": ['string', $] }))
                                    case 'ltail': return _pt.ss($, ($) => ({ "name": ['id', "ltail"], "value": ['string', $] }))
                                    case 'minlen': return _pt.ss($, ($) => ({ "name": ['id', "minlen"], "value": ['number', $] }))
                                    case 'pen width': return _pt.ss($, ($) => ({ "name": ['id', "pen width"], "value": ['number', $] }))
                                    case 'pos': return _pt.ss($, ($) => ({ "name": ['id', "pos"], "value": ['string', $] }))
                                    case 'same head': return _pt.ss($, ($) => ({ "name": ['id', "same head"], "value": ['string', $ ? "true" : "false"] }))
                                    case 'same tail': return _pt.ss($, ($) => ({ "name": ['id', "same tail"], "value": ['string', $ ? "true" : "false"] }))
                                    case 'showboxes': return _pt.ss($, ($) => ({ "name": ['id', "showboxes"], "value": ['string', $ ? "true" : "false"] }))
                                    case 'style': return _pt.ss($, ($) => ({ "name": ['id', "style"], "value": ['string', $] }))
                                    case 'tail lp': return _pt.ss($, ($) => ({ "name": ['id', "tail lp"], "value": ['string', $] }))
                                    case 'tailclip': return _pt.ss($, ($) => ({ "name": ['id', "tailclip"], "value": ['string', $ ? "true" : "false"] }))
                                    case 'taillabel': return _pt.ss($, ($) => ({ "name": ['id', "taillabel"], "value": ['string', $] }))
                                    case 'tailport': return _pt.ss($, ($) => ({ "name": ['id', "tailport"], "value": ['string', $] }))
                                    case 'tooltip': return _pt.ss($, ($) => ({ "name": ['id', "tooltip"], "value": ['string', $] }))
                                    case 'weight': return _pt.ss($, ($) => ({ "name": ['id', "weight"], "value": ['number', $] }))
                                    case 'xlabel': return _pt.ss($, ($) => ({ "name": ['id', "xlabel"], "value": ['string', $] }))
                                    case 'xlp': return _pt.ss($, ($) => ({ "name": ['id', "xlp"], "value": ['string', $] }))
                                    case 'dir': return _pt.ss($, ($) => ({ "name": ['id', "dir"], "value": ['string', "FIXME"] }))
                                    default: return _pt.au($[0])
                                }
                            }))
                        }]
                    }))
                    case 'undirected': return _pt.ss($, ($) => $.edges.map(($): d_out.Statement_List.L => {
                        return ['edge', {
                            "left": ['node', {
                                'id': ['string', $.yin.start],
                                'port': _pt.not_set()
                            }],
                            "right": _pt.list_literal<d_out.Statement_List.L.SG.edge.right.L>([
                                ['node', {
                                    'id': ['string', $.yang.start],
                                    'port': _pt.not_set()
                                }]
                            ]),
                            "attributes": _pt.list_literal([]), //FIXME: attributes
                        }]
                    }))
                    default: return _pt.au($[0])
                }
            })
        ]).flatten(($) => $)

    }
}

export const Tree = (
    $: d_in.Tree,
    $p: {
        'path': _pi.List<string>
    }
): d_out.Statement_List => {
    return $.elements.to_list<d_out.Statement_List>(($, key) => {
        const path = $p.path.append_element(key)
        return _pt.cc($, ($) => {
            switch ($[0]) {
                case 'node': return _pt.ss($, ($) => _pt.list_literal<d_out.Statement_List.L>([
                    ['node', {
                        'node': {
                            'id': ['string', s_list_of_separated_texts(path, { 'separator': '>' })],
                            'port': _pt.not_set()
                        },
                        'attribute list': $.attributes.map(($): d_out.Attribute_List.L => _pt.cc($, ($) => {
                            switch ($[0]) {
                                case 'color': return _pt.ss($, ($) => ({ "name": ['id', "color"], "value": ['string', $] }))
                                default: return _pdev.implement_me("xx")
                            }
                        })).prepend_element({
                            'name': ['id', "label"],
                            'value': ['string', key],
                        }),

                    }]
                ]))
                case 'sub': return _pt.ss($, ($) => Tree($.tree, { 'path': path }))
                default: return _pt.au($[0])
            }
        })
    }).flatten(($) => $)
}