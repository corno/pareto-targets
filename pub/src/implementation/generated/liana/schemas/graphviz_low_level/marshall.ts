
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/graphviz_low_level/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"
export const ID: t_signatures.ID = ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
    switch ($[0]) {
        case 'id':
            return _p.ss($, ($,) => ({
                'option': "id",
                'value': ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })],
            }))
        case 'string':
            return _p.ss($, ($,) => ({
                'option': "string",
                'value': ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })],
            }))
        case 'html':
            return _p.ss($, ($,) => ({
                'option': "html",
                'value': ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })],
            }))
        case 'number':
            return _p.ss($, ($,) => ({
                'option': "number",
                'value': ['text', ({
                    'delimiter': ['backtick', null],
                    'value': v_serialize_number.serialize($),
                })],
            }))
        default:
            return _p.au($[0])
    }
})]
export const Node_ID: t_signatures.Node_ID = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'id': _p.deprecated_cc($['id'], ($,) => ID($)),
    'port': _p.deprecated_cc($['port'], ($,) => ['optional', $.__decide(($,): t_out.Value.optional => ['set', ['group', ['verbose', _p.dictionary.literal(({
        'port': _p.deprecated_cc($['port'], ($,) => ID($)),
        'compass point': _p.deprecated_cc($['compass point'], ($,) => ['optional', $.__decide(($,): t_out.Value.optional => ['set', ID($)], () => ['not set', null])]),
    }))]]], () => ['not set', null])]),
}))]]
export const Attribute_List: t_signatures.Attribute_List = ($,) => ['list', $.__l_map(($,) => ['group', ['verbose', _p.dictionary.literal(({
    'name': _p.deprecated_cc($['name'], ($,) => ID($)),
    'value': _p.deprecated_cc($['value'], ($,) => ID($)),
}))]])]
export const Subgraph: t_signatures.Subgraph = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'subgraph': _p.deprecated_cc($['subgraph'], ($,) => ['optional', $.__decide(($,): t_out.Value.optional => ['set', ['optional', $.__decide(($,): t_out.Value.optional => ['set', ID($)], () => ['not set', null])]], () => ['not set', null])]),
    'statements': _p.deprecated_cc($['statements'], ($,) => Statement_List($)),
}))]]
export const Statement_List: t_signatures.Statement_List = ($,) => ['list', $.__l_map(($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
    switch ($[0]) {
        case 'node':
            return _p.ss($, ($,) => ({
                'option': "node",
                'value': ['group', ['verbose', _p.dictionary.literal(({
                    'node': _p.deprecated_cc($['node'], ($,) => Node_ID($)),
                    'attribute list': _p.deprecated_cc($['attribute list'], ($,) => Attribute_List($)),
                }))]],
            }))
        case 'edge':
            return _p.ss($, ($,) => ({
                'option': "edge",
                'value': ['group', ['verbose', _p.dictionary.literal(({
                    'left': _p.deprecated_cc($['left'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                        switch ($[0]) {
                            case 'node':
                                return _p.ss($, ($,) => ({
                                    'option': "node",
                                    'value': Node_ID($),
                                }))
                            case 'subgraph':
                                return _p.ss($, ($,) => ({
                                    'option': "subgraph",
                                    'value': Subgraph($),
                                }))
                            default:
                                return _p.au($[0])
                        }
                    })]),
                    'right': _p.deprecated_cc($['right'], ($,) => ['list', $.__l_map(($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                        switch ($[0]) {
                            case 'node':
                                return _p.ss($, ($,) => ({
                                    'option': "node",
                                    'value': Node_ID($),
                                }))
                            case 'subgraph':
                                return _p.ss($, ($,) => ({
                                    'option': "subgraph",
                                    'value': Subgraph($),
                                }))
                            default:
                                return _p.au($[0])
                        }
                    })])]),
                    'attributes': _p.deprecated_cc($['attributes'], ($,) => Attribute_List($)),
                }))]],
            }))
        case 'attribute list':
            return _p.ss($, ($,) => ({
                'option': "attribute list",
                'value': ['group', ['verbose', _p.dictionary.literal(({
                    'type': _p.deprecated_cc($['type'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                        switch ($[0]) {
                            case 'graph':
                                return _p.ss($, ($,) => ({
                                    'option': "graph",
                                    'value': ['nothing', null],
                                }))
                            case 'node':
                                return _p.ss($, ($,) => ({
                                    'option': "node",
                                    'value': ['nothing', null],
                                }))
                            case 'edge':
                                return _p.ss($, ($,) => ({
                                    'option': "edge",
                                    'value': ['nothing', null],
                                }))
                            default:
                                return _p.au($[0])
                        }
                    })]),
                    'attributes': _p.deprecated_cc($['attributes'], ($,) => Attribute_List($)),
                }))]],
            }))
        case 'attribute assignment':
            return _p.ss($, ($,) => ({
                'option': "attribute assignment",
                'value': ['group', ['verbose', _p.dictionary.literal(({
                    'name': _p.deprecated_cc($['name'], ($,) => ID($)),
                    'value': _p.deprecated_cc($['value'], ($,) => ID($)),
                }))]],
            }))
        case 'subgraph':
            return _p.ss($, ($,) => ({
                'option': "subgraph",
                'value': Subgraph($),
            }))
        default:
            return _p.au($[0])
    }
})])]
export const Graph: t_signatures.Graph = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'strict': _p.deprecated_cc($['strict'], ($,) => ['text', ({
        'delimiter': ['backtick', null],
        'value': v_serialize_boolean.serialize($),
    })]),
    'type': _p.deprecated_cc($['type'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
        switch ($[0]) {
            case 'graph':
                return _p.ss($, ($,) => ({
                    'option': "graph",
                    'value': ['nothing', null],
                }))
            case 'digraph':
                return _p.ss($, ($,) => ({
                    'option': "digraph",
                    'value': ['nothing', null],
                }))
            default:
                return _p.au($[0])
        }
    })]),
    'name': _p.deprecated_cc($['name'], ($,) => ['optional', $.__decide(($,): t_out.Value.optional => ['set', ID($)], () => ['not set', null])]),
    'statements': _p.deprecated_cc($['statements'], ($,) => Statement_List($)),
}))]]
