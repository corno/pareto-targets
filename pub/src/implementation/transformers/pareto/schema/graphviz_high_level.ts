import * as _ea from 'exupery-core-alg'

import * as _in from "pareto/dist/interface/generated/pareto/schemas/schema/data_types/source"
import * as _in_m from "pareto/dist/interface/generated/pareto/schemas/module/data_types/source"
import * as _out from "../../../../interface/generated/pareto/schemas/graphviz_high_level/data_types/target"

import { Signature } from "../../../../interface/algorithms/transformations/pareto/schema/graphviz_high_level"

import { $$ as op_dictionary_to_list } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/dictionary/to_list_sorted_by_insertion"
import { $$ as op_flatten_list } from "pareto-standard-operations/dist/implementation/algorithms/operations/pure/list/flatten"


export const Type_Node = (
    $: _in.Type_Node,
    $p: {
        'type name': string,
    },
): _out.Graph._type.SG.directed.edges => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'number': return _ea.ss($, ($) => _ea.list_literal([]))
            case 'boolean': return _ea.ss($, ($) => _ea.list_literal([]))
            case 'list': return _ea.ss($, ($) => Type_Node($.node, $p))
            case 'nothing': return _ea.ss($, ($) => _ea.list_literal([]))
            case 'reference': return _ea.ss($, ($) => _ea.list_literal([]))
            case 'component': return _ea.ss($, ($) => _ea.list_literal<_out.Graph._type.SG.directed.edges.L>([
                {
                    'from': {
                        'start': $p['type name'],
                        'tail': _ea.list_literal([]),
                        'port data': _ea.not_set()
                    },
                    'to': {
                        'start': _ea.cc($, ($) => {
                            switch ($[0]) {
                                case 'external': return _ea.ss($, ($) => "FIXME")
                                case 'internal': return _ea.ss($, ($) => $.key)
                                case 'internal cyclic': return _ea.ss($, ($) => $.key)
                                default: return _ea.au($[0])
                            }
                        }),
                        'tail': _ea.list_literal([]),
                        'port data': _ea.not_set()
                    },
                    'attributes': _ea.cc($, ($) => {
                        switch ($[0]) {
                            case 'external': return _ea.ss($, ($) => _ea.list_literal([]))
                            case 'internal': return _ea.ss($, ($) => _ea.list_literal([]))
                            case 'internal cyclic': return _ea.ss($, ($) => _ea.list_literal([
                                ['color', "red"],
                            ]))
                            default: return _ea.au($[0])
                        }
                    }),
                }

            ]))
            case 'dictionary': return _ea.ss($, ($) => Type_Node($.node, $p))
            case 'group': return _ea.ss($, ($) => op_flatten_list($['ordered list'].map(($) => Type_Node($.value.node, $p))))
            case 'optional': return _ea.ss($, ($) => Type_Node($, $p))
            case 'state group': return _ea.ss($, ($) => op_flatten_list(op_dictionary_to_list($.map(($) => Type_Node($.node, $p))).map(($) => $.value)))
            case 'text': return _ea.ss($, ($) => _ea.list_literal([]))
            // case 'type parameter': return pa.ss($, ($) => pa.list_literal([]))
            default: return _ea.au($[0])
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
        'name': _ea.set($p['graph name']),
        'tree': {
            'attributes': _ea.list_literal([]),
            'elements': $.types.dictionary.map<_out.Tree.elements.D>(($) => {
                return ['node', {

                    'attributes': _ea.list_literal([]),
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
