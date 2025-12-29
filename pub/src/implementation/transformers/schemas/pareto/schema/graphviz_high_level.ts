import * as _pt from 'pareto-core-transformer'

import * as _in from "pareto/dist/interface/generated/pareto/schemas/schema/data_types/source"
import * as _in_m from "pareto/dist/interface/generated/pareto/schemas/module/data_types/source"
import * as _out from "../../../../../interface/generated/pareto/schemas/graphviz_high_level/data_types/target"


export const Type_Node = (
    $: _in.Type_Node,
    $p: {
        'type name': string,
    },
): _out.Graph._type.SG.directed.edges => {
    return _pt.cc($, ($) => {
        switch ($[0]) {
            case 'number': return _pt.ss($, ($) => _pt.list_literal([]))
            case 'boolean': return _pt.ss($, ($) => _pt.list_literal([]))
            case 'list': return _pt.ss($, ($) => Type_Node($.node, $p))
            case 'nothing': return _pt.ss($, ($) => _pt.list_literal([]))
            case 'reference': return _pt.ss($, ($) => _pt.list_literal([]))
            case 'component': return _pt.ss($, ($) => _pt.list_literal<_out.Graph._type.SG.directed.edges.L>([
                {
                    'from': {
                        'start': $p['type name'],
                        'tail': _pt.list_literal([]),
                        'port data': _pt.not_set()
                    },
                    'to': {
                        'start': _pt.cc($, ($) => {
                            switch ($[0]) {
                                case 'external': return _pt.ss($, ($) => "FIXME")
                                case 'internal': return _pt.ss($, ($) => $.key)
                                case 'internal cyclic': return _pt.ss($, ($) => $.key)
                                default: return _pt.au($[0])
                            }
                        }),
                        'tail': _pt.list_literal([]),
                        'port data': _pt.not_set()
                    },
                    'attributes': _pt.cc($, ($) => {
                        switch ($[0]) {
                            case 'external': return _pt.ss($, ($) => _pt.list_literal([]))
                            case 'internal': return _pt.ss($, ($) => _pt.list_literal([]))
                            case 'internal cyclic': return _pt.ss($, ($) => _pt.list_literal([
                                ['color', "red"],
                            ]))
                            default: return _pt.au($[0])
                        }
                    }),
                }

            ]))
            case 'dictionary': return _pt.ss($, ($) => Type_Node($.node, $p))
            case 'group': return _pt.ss($, ($) => $['ordered list'].flatten(($) => Type_Node($.value.node, $p)))
            case 'optional': return _pt.ss($, ($) => Type_Node($, $p))
            case 'state group': return _pt.ss($, ($) => $.to_list(($) => Type_Node($.node, $p)).flatten(($) => $))
            case 'text': return _pt.ss($, ($) => _pt.list_literal([]))
            // case 'type parameter': return pa.ss($, ($) => pa.list_literal([]))
            default: return _pt.au($[0])
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
        'name': _pt.set($p['graph name']),
        'tree': {
            'attributes': _pt.list_literal([]),
            'elements': $.types.dictionary.map<_out.Tree.elements.D>(($) => {
                return ['node', {

                    'attributes': _pt.list_literal([]),
                }]
            }),
        },
        'type': ['directed', {
            'edges': $.types['ordered list'].flatten(($) => {
                return Type_Node($.value.node, { 'type name': $.key })
            }),
        }],
    }
}
