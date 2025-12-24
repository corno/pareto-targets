import * as _ea from 'exupery-core-alg'
import * as _ed from 'exupery-core-dev'
import * as _et from 'exupery-core-types'

import * as d_in from "../../../../../interface/generated/pareto/schemas/graphviz_high_level/data_types/target"
import * as d_out from "../../../../../interface/generated/pareto/schemas/graphviz_low_level/data_types/target"

import { $$ as op_join } from "pareto-standard-operations/dist/implementation/operations/impure/text/join_list_of_texts_with_separator"
import { $$ as op_dictionary_to_list } from "pareto-standard-operations/dist/implementation/operations/impure/dictionary/to_list_sorted_by_insertion"
import { $$ as op_append_element } from "pareto-standard-operations/dist/implementation/operations/pure/list/append_element"
import { $$ as op_prepend_element } from "pareto-standard-operations/dist/implementation/operations/pure/list/prepend_element"
import { $$ as op_flatten } from "pareto-standard-operations/dist/implementation/operations/pure/list/flatten"



export const Graph = ($: d_in.Graph): d_out.Graph => {
    return {
        'strict': true,
        'type': _ea.cc($.type, ($) => {
            switch ($[0]) {
                case 'directed': return _ea.ss($, () => ['digraph', null])
                case 'undirected': return _ea.ss($, () => ['graph', null])
                default: return _ea.au($[0])
            }
        }),
        'name': $.name.map(($) => ['string', $]),
        'statements': op_flatten(_ea.list_literal([
            Tree($.tree, { 'path': _ea.list_literal([]) }),
            _ea.cc($.type, ($): d_out.Graph.statements => {
                switch ($[0]) {
                    case 'directed': return _ea.ss($, ($) => $.edges.map(($): d_out.Statement_List.L => {
                        return ['edge', {
                            "left": ['node', {
                                'id': ['string', $.from.start],
                                'port': _ea.not_set()
                            }],
                            "right": _ea.list_literal<d_out.Statement_List.L.SG.edge.right.L>([
                                ['node', {
                                    'id': ['string', $.to.start],
                                    'port': _ea.not_set()
                                }]
                            ]),
                            "attributes": $.attributes.map(($) => _ea.cc($, ($): d_out.Attribute_List.L => {
                                switch ($[0]) {
                                    case 'arrowhead': return _ea.ss($, ($) => ({ "name": ['id', "arrowhead"], "value": ['string', $] }))
                                    case 'arrowsize': return _ea.ss($, ($) => ({ "name": ['id', "arrowsize"], "value": ['number', $] }))
                                    case 'arrowtail': return _ea.ss($, ($) => ({ "name": ['id', "arrowtail"], "value": ['string', $] }))
                                    case 'bgcolor': return _ea.ss($, ($) => ({ "name": ['id', "bgcolor"], "value": ['string', $] }))
                                    case 'color': return _ea.ss($, ($) => ({ "name": ['id', "color"], "value": ['string', $] }))
                                    case 'colorscheme': return _ea.ss($, ($) => ({ "name": ['id', "colorscheme"], "value": ['string', $] }))
                                    case 'comment': return _ea.ss($, ($) => ({ "name": ['id', "comment"], "value": ['string', $] }))
                                    case 'constraint': return _ea.ss($, ($) => ({ "name": ['id', "constraint"], "value": ['string', "true"] }))
                                    case 'decorate': return _ea.ss($, ($) => ({ "name": ['id', "decorate"], "value": ['string', $ ? "true" : "false"] }))
                                    case 'edge lp': return _ea.ss($, ($) => ({ "name": ['id', "edge lp"], "value": ['string', $] }))
                                    case 'edge target': return _ea.ss($, ($) => ({ "name": ['id', "edge target"], "value": ['string', $] }))
                                    case 'edge tooltip': return _ea.ss($, ($) => ({ "name": ['id', "edge tooltip"], "value": ['string', $] }))
                                    case 'edge url': return _ea.ss($, ($) => ({ "name": ['id', "edge url"], "value": ['string', $] }))
                                    case 'head lp': return _ea.ss($, ($) => ({ "name": ['id', "head lp"], "value": ['string', $] }))
                                    case 'headclip': return _ea.ss($, ($) => ({ "name": ['id', "headclip"], "value": ['string', $ ? "true" : "false"] }))
                                    case 'headlabel': return _ea.ss($, ($) => ({ "name": ['id', "headlabel"], "value": ['string', $] }))
                                    case 'headport': return _ea.ss($, ($) => ({ "name": ['id', "headport"], "value": ['string', $] }))
                                    case 'height': return _ea.ss($, ($) => ({ "name": ['id', "height"], "value": ['number', $] }))
                                    case 'id': return _ea.ss($, ($) => ({ "name": ['id', "id"], "value": ['string', $] }))
                                    case 'label': return _ea.ss($, ($) => ({ "name": ['id', "label"], "value": ['string', $] }))
                                    case 'label angle': return _ea.ss($, ($) => ({ "name": ['id', "label angle"], "value": ['number', $] }))
                                    case 'label distance': return _ea.ss($, ($) => ({ "name": ['id', "label distance"], "value": ['number', $] }))
                                    case 'label float': return _ea.ss($, ($) => ({ "name": ['id', "label float"], "value": ['string', $ ? "true" : "false"] }))
                                    case 'label lp': return _ea.ss($, ($) => ({ "name": ['id', "label lp"], "value": ['string', $] }))
                                    case 'labelfloat': return _ea.ss($, ($) => ({ "name": ['id', "labelfloat"], "value": ['string', $ ? "true" : "false"] }))
                                    case 'labelhref': return _ea.ss($, ($) => ({ "name": ['id', "labelhref"], "value": ['string', $] }))
                                    case 'layer': return _ea.ss($, ($) => ({ "name": ['id', "layer"], "value": ['string', $] }))
                                    case 'len': return _ea.ss($, ($) => ({ "name": ['id', "len"], "value": ['number', $] }))
                                    case 'lhead': return _ea.ss($, ($) => ({ "name": ['id', "lhead"], "value": ['string', $] }))
                                    case 'lp': return _ea.ss($, ($) => ({ "name": ['id', "lp"], "value": ['string', $] }))
                                    case 'ltail': return _ea.ss($, ($) => ({ "name": ['id', "ltail"], "value": ['string', $] }))
                                    case 'minlen': return _ea.ss($, ($) => ({ "name": ['id', "minlen"], "value": ['number', $] }))
                                    case 'pen width': return _ea.ss($, ($) => ({ "name": ['id', "pen width"], "value": ['number', $] }))
                                    case 'pos': return _ea.ss($, ($) => ({ "name": ['id', "pos"], "value": ['string', $] }))
                                    case 'same head': return _ea.ss($, ($) => ({ "name": ['id', "same head"], "value": ['string', $ ? "true" : "false"] }))
                                    case 'same tail': return _ea.ss($, ($) => ({ "name": ['id', "same tail"], "value": ['string', $ ? "true" : "false"] }))
                                    case 'showboxes': return _ea.ss($, ($) => ({ "name": ['id', "showboxes"], "value": ['string', $ ? "true" : "false"] }))
                                    case 'style': return _ea.ss($, ($) => ({ "name": ['id', "style"], "value": ['string', $] }))
                                    case 'tail lp': return _ea.ss($, ($) => ({ "name": ['id', "tail lp"], "value": ['string', $] }))
                                    case 'tailclip': return _ea.ss($, ($) => ({ "name": ['id', "tailclip"], "value": ['string', $ ? "true" : "false"] }))
                                    case 'taillabel': return _ea.ss($, ($) => ({ "name": ['id', "taillabel"], "value": ['string', $] }))
                                    case 'tailport': return _ea.ss($, ($) => ({ "name": ['id', "tailport"], "value": ['string', $] }))
                                    case 'tooltip': return _ea.ss($, ($) => ({ "name": ['id', "tooltip"], "value": ['string', $] }))
                                    case 'weight': return _ea.ss($, ($) => ({ "name": ['id', "weight"], "value": ['number', $] }))
                                    case 'xlabel': return _ea.ss($, ($) => ({ "name": ['id', "xlabel"], "value": ['string', $] }))
                                    case 'xlp': return _ea.ss($, ($) => ({ "name": ['id', "xlp"], "value": ['string', $] }))
                                    case 'dir': return _ea.ss($, ($) => ({ "name": ['id', "dir"], "value": ['string', "FIXME"] }))
                                    default: return _ea.au($[0])
                                }
                            }))
                        }]
                    }))
                    case 'undirected': return _ea.ss($, ($) => $.edges.map(($): d_out.Statement_List.L => {
                        return ['edge', {
                            "left": ['node', {
                                'id': ['string', $.yin.start],
                                'port': _ea.not_set()
                            }],
                            "right": _ea.list_literal<d_out.Statement_List.L.SG.edge.right.L>([
                                ['node', {
                                    'id': ['string', $.yang.start],
                                    'port': _ea.not_set()
                                }]
                            ]),
                            "attributes": _ea.list_literal([]), //FIXME: attributes
                        }]
                    }))
                    default: return _ea.au($[0])
                }
            })
        ]))

    }
}

export const Tree = (
    $: d_in.Tree,
    $p: {
        'path': _et.List<string>
    }
): d_out.Statement_List => {
    return op_flatten(op_dictionary_to_list($.elements).map(($) => {
        const path = op_append_element($p.path, { 'element': $.key })
        const key = $.key
        return _ea.cc($.value, ($) => {
            switch ($[0]) {
                case 'node': return _ea.ss($, ($) => _ea.list_literal<d_out.Statement_List.L>([
                    ['node', {
                        'node': {
                            'id': ['string', op_join(path, { 'separator': '>' })],
                            'port': _ea.not_set()
                        },
                        'attribute list': op_prepend_element(
                            $.attributes.map(($) => _ea.cc($, ($) => {
                                switch ($[0]) {
                                    case 'color': return _ea.ss($, ($) => ({ "name": ['id', "color"], "value": ['string', $] }))
                                    default: return _ed.implement_me("xx")
                                }
                            })),
                            {
                                'element': {
                                    'name': ['id', "label"],
                                    'value': ['string', key],
                                }
                            },
                        )
                    }]
                ]))
                case 'sub': return _ea.ss($, ($) => Tree($.tree, { 'path': path }))
                default: return _ea.au($[0])
            }
        })
    }))
}