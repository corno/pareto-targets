
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/alan_light/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"
export const Identifier: t_signatures.Identifier = ($,) => ['text', ({
    'delimiter': ['quote', null],
    'value': $,
})]
export const Path: t_signatures.Path = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'up steps': _p.deprecated_cc($['up steps'], ($,) => ['list', $.__l_map(($,) => ['group', ['verbose', _p.dictionary.literal(({
    }))]])]),
    'context': _p.deprecated_cc($['context'], ($,) => ['group', ['verbose', _p.dictionary.literal(({
        'sibling': _p.deprecated_cc($['sibling'], ($,) => ['group', ['verbose', _p.dictionary.literal(({
        }))]]),
        'state constraint': _p.deprecated_cc($['state constraint'], ($,) => ['group', ['verbose', _p.dictionary.literal(({
            'name': _p.deprecated_cc($['name'], ($,) => Identifier($)),
        }))]]),
    }))]]),
    'selection steps': _p.deprecated_cc($['selection steps'], ($,) => ['list', $.__l_map(($,) => ['group', ['verbose', _p.dictionary.literal(({
        'group': _p.deprecated_cc($['group'], ($,) => ['group', ['verbose', _p.dictionary.literal(({
            'name': _p.deprecated_cc($['name'], ($,) => Identifier($)),
        }))]]),
        'state constraint': _p.deprecated_cc($['state constraint'], ($,) => ['group', ['verbose', _p.dictionary.literal(({
            'name': _p.deprecated_cc($['name'], ($,) => Identifier($)),
        }))]]),
        'reference': _p.deprecated_cc($['reference'], ($,) => ['group', ['verbose', _p.dictionary.literal(({
            'name': _p.deprecated_cc($['name'], ($,) => Identifier($)),
        }))]]),
    }))]])]),
}))]]
export const Node: t_signatures.Node = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'properties': _p.deprecated_cc($['properties'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
        'type': _p.deprecated_cc($['type'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
            switch ($[0]) {
                case 'collection':
                    return _p.ss($, ($,) => ({
                        'option': 'collection',
                        'value': ['group', ['verbose', _p.dictionary.literal(({
                            'node': _p.deprecated_cc($['node'], ($,) => Node($)),
                            'key': _p.deprecated_cc($['key'], ($,) => Identifier($)),
                        }))]],
                    }))
                case 'group':
                    return _p.ss($, ($,) => ({
                        'option': 'group',
                        'value': ['group', ['verbose', _p.dictionary.literal(({
                            'node': _p.deprecated_cc($['node'], ($,) => Node($)),
                        }))]],
                    }))
                case 'text':
                    return _p.ss($, ($,) => ({
                        'option': 'text',
                        'value': ['group', ['verbose', _p.dictionary.literal(({
                            'constraint': _p.deprecated_cc($['constraint'], ($,) => ['optional', $.__decide(($,): t_out.Value.optional => ['set', ['group', ['verbose', _p.dictionary.literal(({
                                'path': _p.deprecated_cc($['path'], ($,) => Path($)),
                                'dictionary': _p.deprecated_cc($['dictionary'], ($,) => Identifier($)),
                            }))]]], () => ['not set', null])]),
                        }))]],
                    }))
                case 'state group':
                    return _p.ss($, ($,) => ({
                        'option': 'state group',
                        'value': ['group', ['verbose', _p.dictionary.literal(({
                            'states': _p.deprecated_cc($['states'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
                                'constraints': _p.deprecated_cc($['constraints'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
                                    'path': _p.deprecated_cc($['path'], ($,) => Path($)),
                                }))]])]),
                                'node': _p.deprecated_cc($['node'], ($,) => Node($)),
                            }))]])]),
                        }))]],
                    }))
                default:
                    return _p.au($[0])
            }
        })]),
    }))]])]),
}))]]
export const Root: t_signatures.Root = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'numerical types': _p.deprecated_cc($['numerical types'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
    }))]])]),
    'root': _p.deprecated_cc($['root'], ($,) => Node($)),
}))]]
