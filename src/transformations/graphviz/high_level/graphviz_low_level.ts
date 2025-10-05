import * as pa from 'exupery-core-alg'
import * as pd from 'exupery-core-dev'
import * as pt from 'exupery-core-types'

import * as d_in from "../../../generated/interface/schemas/graphviz_high_level/data_types/target"
import * as d_out from "../../../generated/interface/schemas/graphviz_low_level/data_types/target"

import { $$ as op_join } from "pareto-standard-operations/dist/impure/text/join_list_of_texts_with_separator"
import { $$ as op_dictionary_to_list } from "pareto-standard-operations/dist/impure/dictionary/to_list_sorted_by_code_point"
import { $$ as op_append_element } from "pareto-standard-operations/dist/pure/list/append_element"
import { $$ as op_prepend_element } from "pareto-standard-operations/dist/pure/list/prepend_element"
import { $$ as op_flatten } from "pareto-standard-operations/dist/pure/list/flatten"

export const Graph = ($: d_in.Graph): d_out.Graph => {
    return {
        'strict': true,
        'type': pa.cc($.type, ($) => {
            switch ($[0]) {
                case 'directed': return pa.ss($, () => ['digraph', null])
                case 'undirected': return pa.ss($, () => ['graph', null])
                default: return pa.au($[0])
            }
        }),
        'name': $.name.map(($) => ['string', $]),
        'statements': op_flatten(pa.array_literal([
            Tree($.tree, { 'path': pa.array_literal([]) }),
            pa.cc($.type, ($): d_out.Graph.statements => {
                switch ($[0]) {
                    case 'directed': return pa.ss($, ($) => $.edges.map(($): d_out.Statement_List.L => {
                        return ['edge', {
                            "left": ['node', {
                                'id': ['string', $.from.start],
                                'port': pa.not_set()
                            }],
                            "right": pa.array_literal<d_out.Statement_List.L.SG.edge.right.L>([
                                ['node', {
                                    'id': ['string', $.to.start],
                                    'port': pa.not_set()
                                }]
                            ]),
                            "attributes": $.attributes.map(($) => pa.cc($, ($): d_out.Attribute_List.L => {
                                switch ($[0]) {
                                    case 'arrowhead': return pa.ss($, ($) => ({ "name": ['id', "arrowhead"], "value": ['string', $] }))
                                    case 'arrowsize': return pa.ss($, ($) => ({ "name": ['id', "arrowsize"], "value": ['number', $] }))
                                    case 'arrowtail': return pa.ss($, ($) => ({ "name": ['id', "arrowtail"], "value": ['string', $] }))
                                    case 'bgcolor': return pa.ss($, ($) => ({ "name": ['id', "bgcolor"], "value": ['string', $] }))
                                    case 'color': return pa.ss($, ($) => ({ "name": ['id', "color"], "value": ['string', $] }))
                                    case 'colorscheme': return pa.ss($, ($) => ({ "name": ['id', "colorscheme"], "value": ['string', $] }))
                                    case 'comment': return pa.ss($, ($) => ({ "name": ['id', "comment"], "value": ['string', $] }))
                                    case 'constraint': return pa.ss($, ($) => ({ "name": ['id', "constraint"], "value": ['string', "true"] }))
                                    case 'decorate': return pa.ss($, ($) => ({ "name": ['id', "decorate"], "value": ['string', $ ? "true" : "false"] }))
                                    case 'edge lp': return pa.ss($, ($) => ({ "name": ['id', "edge lp"], "value": ['string', $] }))
                                    case 'edge target': return pa.ss($, ($) => ({ "name": ['id', "edge target"], "value": ['string', $] }))
                                    case 'edge tooltip': return pa.ss($, ($) => ({ "name": ['id', "edge tooltip"], "value": ['string', $] }))
                                    case 'edge url': return pa.ss($, ($) => ({ "name": ['id', "edge url"], "value": ['string', $] }))
                                    case 'head lp': return pa.ss($, ($) => ({ "name": ['id', "head lp"], "value": ['string', $] }))
                                    case 'headclip': return pa.ss($, ($) => ({ "name": ['id', "headclip"], "value": ['string', $ ? "true" : "false"] }))
                                    case 'headlabel': return pa.ss($, ($) => ({ "name": ['id', "headlabel"], "value": ['string', $] }))
                                    case 'headport': return pa.ss($, ($) => ({ "name": ['id', "headport"], "value": ['string', $] }))
                                    case 'height': return pa.ss($, ($) => ({ "name": ['id', "height"], "value": ['number', $] }))
                                    case 'id': return pa.ss($, ($) => ({ "name": ['id', "id"], "value": ['string', $] }))
                                    case 'label': return pa.ss($, ($) => ({ "name": ['id', "label"], "value": ['string', $] }))
                                    case 'label angle': return pa.ss($, ($) => ({ "name": ['id', "label angle"], "value": ['number', $] }))
                                    case 'label distance': return pa.ss($, ($) => ({ "name": ['id', "label distance"], "value": ['number', $] }))
                                    case 'label float': return pa.ss($, ($) => ({ "name": ['id', "label float"], "value": ['string', $ ? "true" : "false"] }))
                                    case 'label lp': return pa.ss($, ($) => ({ "name": ['id', "label lp"], "value": ['string', $] }))
                                    case 'labelfloat': return pa.ss($, ($) => ({ "name": ['id', "labelfloat"], "value": ['string', $ ? "true" : "false"] }))
                                    case 'labelhref': return pa.ss($, ($) => ({ "name": ['id', "labelhref"], "value": ['string', $] }))
                                    case 'layer': return pa.ss($, ($) => ({ "name": ['id', "layer"], "value": ['string', $] }))
                                    case 'len': return pa.ss($, ($) => ({ "name": ['id', "len"], "value": ['number', $] }))
                                    case 'lhead': return pa.ss($, ($) => ({ "name": ['id', "lhead"], "value": ['string', $] }))
                                    case 'lp': return pa.ss($, ($) => ({ "name": ['id', "lp"], "value": ['string', $] }))
                                    case 'ltail': return pa.ss($, ($) => ({ "name": ['id', "ltail"], "value": ['string', $] }))
                                    case 'minlen': return pa.ss($, ($) => ({ "name": ['id', "minlen"], "value": ['number', $] }))
                                    case 'pen width': return pa.ss($, ($) => ({ "name": ['id', "pen width"], "value": ['number', $] }))
                                    case 'pos': return pa.ss($, ($) => ({ "name": ['id', "pos"], "value": ['string', $] }))
                                    case 'same head': return pa.ss($, ($) => ({ "name": ['id', "same head"], "value": ['string', $ ? "true" : "false"] }))
                                    case 'same tail': return pa.ss($, ($) => ({ "name": ['id', "same tail"], "value": ['string', $ ? "true" : "false"] }))
                                    case 'showboxes': return pa.ss($, ($) => ({ "name": ['id', "showboxes"], "value": ['string', $ ? "true" : "false"] }))
                                    case 'style': return pa.ss($, ($) => ({ "name": ['id', "style"], "value": ['string', $] }))
                                    case 'tail lp': return pa.ss($, ($) => ({ "name": ['id', "tail lp"], "value": ['string', $] }))
                                    case 'tailclip': return pa.ss($, ($) => ({ "name": ['id', "tailclip"], "value": ['string', $ ? "true" : "false"] }))
                                    case 'taillabel': return pa.ss($, ($) => ({ "name": ['id', "taillabel"], "value": ['string', $] }))
                                    case 'tailport': return pa.ss($, ($) => ({ "name": ['id', "tailport"], "value": ['string', $] }))
                                    case 'tooltip': return pa.ss($, ($) => ({ "name": ['id', "tooltip"], "value": ['string', $] }))
                                    case 'weight': return pa.ss($, ($) => ({ "name": ['id', "weight"], "value": ['number', $] }))
                                    case 'xlabel': return pa.ss($, ($) => ({ "name": ['id', "xlabel"], "value": ['string', $] }))
                                    case 'xlp': return pa.ss($, ($) => ({ "name": ['id', "xlp"], "value": ['string', $] }))
                                    case 'dir': return pa.ss($, ($) => ({ "name": ['id', "dir"], "value": ['string', "FIXME"] }))
                                    default: return pa.au($[0])
                                }
                            }))
                        }]
                    }))
                    case 'undirected': return pa.ss($, ($) => $.edges.map(($): d_out.Statement_List.L => {
                        return ['edge', {
                            "left": ['node', {
                                'id': ['string', $.yin.start],
                                'port': pa.not_set()
                            }],
                            "right": pa.array_literal<d_out.Statement_List.L.SG.edge.right.L>([
                                ['node', {
                                    'id': ['string', $.yang.start],
                                    'port': pa.not_set()
                                }]
                            ]),
                            "attributes": pa.array_literal([]), //FIXME: attributes
                        }]
                    }))
                    default: return pa.au($[0])
                }
            })
        ]))

    }
}

export const Tree = (
    $: d_in.Tree,
    $p: {
        'path': pt.Array<string>
    }
): d_out.Statement_List => {
    return op_flatten(op_dictionary_to_list($.elements).map(($) => {
        const path = op_append_element($p.path, { 'element': $.key })
        const key = $.key
        return pa.cc($.value, ($) => {
            switch ($[0]) {
                case 'node': return pa.ss($, ($) => pa.array_literal<d_out.Statement_List.L>([
                    ['node', {
                        'node': {
                            'id': ['string', op_join(path, { 'separator': '>' })],
                            'port': pa.not_set()
                        },
                        'attribute list': op_prepend_element(
                            $.attributes.map(($) => pa.cc($, ($) => {
                                switch ($[0]) {
                                    case 'color': return pa.ss($, ($) => ({ "name": ['id', "color"], "value": ['string', $] }))
                                    default: return pd.implement_me()
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
                case 'sub': return pa.ss($, ($) => Tree($.tree, { 'path': path }))
                default: return pa.au($[0])
            }
        })
    }))
}