import * as pd from 'exupery-core-data'
import * as pa from 'exupery-core-alg'

import * as _in from "pareto/dist/interface/generated/pareto/schemas/schema/data_types/source"
import * as _in_m from "pareto/dist/interface/generated/pareto/schemas/module/data_types/source"
import * as _out from "../../../../../interface/generated/pareto/schemas/graphviz_high_level/data_types/target"

import { $$ as op_dictionary_to_list } from "pareto-standard-operations/dist/implementation/operations/impure/dictionary/to_list_sorted_by_code_point"
import { $$ as op_flatten_list } from "pareto-standard-operations/dist/implementation/operations/pure/list/flatten"
import { Signature } from "../../../../../interface/algorithms/transformations/pareto/schema/graphviz_high_level"


export const Type_Node = (
    $: _in.Type_Node,
    $p: {
        'type name': string,
    },
): _out.Graph._type.SG.directed.edges => {
    return pa.cc($, ($) => {
        switch ($[0]) {
            case 'number': return pa.ss($, ($) => pa.array_literal([]))
            case 'boolean': return pa.ss($, ($) => pa.array_literal([]))
            case 'list': return pa.ss($, ($) => Type_Node($.node, $p))
            case 'nothing': return pa.ss($, ($) => pa.array_literal([]))
            case 'reference': return pa.ss($, ($) => pa.array_literal([]))
            case 'component': return pa.ss($, ($) => pa.array_literal<_out.Graph._type.SG.directed.edges.L>([
                {
                    'from': {
                        'start': $p['type name'],
                        'tail': pa.array_literal([]),
                        'port data': pa.not_set()
                    },
                    'to': {
                        'start': pa.cc($, ($) => {
                            switch ($[0]) {
                                case 'external': return pa.ss($, ($) => "FIXME")
                                case 'internal': return pa.ss($, ($) => $.key)
                                case 'internal cyclic': return pa.ss($, ($) => $.key)
                                default: return pa.au($[0])
                            }
                        }),
                        'tail': pa.array_literal([]),
                        'port data': pa.not_set()
                    },
                    'attributes': pa.cc($, ($) => {
                        switch ($[0]) {
                            case 'external': return pa.ss($, ($) => pa.array_literal([]))
                            case 'internal': return pa.ss($, ($) => pa.array_literal([]))
                            case 'internal cyclic': return pa.ss($, ($) => pa.array_literal([
                                ['color', "red"],
                            ]))
                            default: return pa.au($[0])
                        }
                    }),
                }

            ]))
            case 'dictionary': return pa.ss($, ($) => Type_Node($.node, $p))
            case 'group': return pa.ss($, ($) => op_flatten_list($['ordered list'].map(($) => Type_Node($.value.node, $p))))
            case 'optional': return pa.ss($, ($) => Type_Node($, $p))
            case 'state group': return pa.ss($, ($) => op_flatten_list(op_dictionary_to_list($.map(($) => Type_Node($.node, $p))).map(($) => $.value)))
            case 'text': return pa.ss($, ($) => pa.array_literal([]))
            // case 'type parameter': return pa.ss($, ($) => pa.array_literal([]))
            default: return pa.au($[0])
        }
    })
}

export const Schema = (
    $: _in.Schema,
    $p: {
        'graph name': string,
    }

): _out.Graph => {
    return {
        'name': pa.set($p['graph name']),
        'tree': {
            'attributes': pa.array_literal([]),
            'elements': $.types.dictionary.map<_out.Tree.elements.D>(($) => {
                return ['node', {

                    'attributes': pa.array_literal([]),
                }]
            }),
        },
        'type': ['directed', {
            'edges': op_flatten_list($.types['ordered list'].map(($) => {
                return Type_Node($.value.node, { 'type name': $.key })
            })),
        }],
    }
}
