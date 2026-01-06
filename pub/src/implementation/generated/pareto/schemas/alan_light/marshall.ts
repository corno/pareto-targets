import * as _pa from 'pareto-core-transformer'
import * as _pd from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/alan_light/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const Identifier: _i_signatures._T_Identifier = ($, $p) => ['text', ({
    'delimiter': ['quote', null],
    'value': $,
})]
export const Path: _i_signatures._T_Path = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'up steps': _pa.deprecated_cc($['up steps'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary.literal({
    })])]),
    'context': _pa.deprecated_cc($['context'], ($) => ['verbose group', _pa.dictionary.literal({
        'sibling': _pa.deprecated_cc($['sibling'], ($) => ['verbose group', _pa.dictionary.literal({
        })]),
        'state constraint': _pa.deprecated_cc($['state constraint'], ($) => ['verbose group', _pa.dictionary.literal({
            'name': _pa.deprecated_cc($['name'], ($) => Identifier(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
        })]),
    })]),
    'selection steps': _pa.deprecated_cc($['selection steps'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary.literal({
        'group': _pa.deprecated_cc($['group'], ($) => ['verbose group', _pa.dictionary.literal({
            'name': _pa.deprecated_cc($['name'], ($) => Identifier(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
        })]),
        'state constraint': _pa.deprecated_cc($['state constraint'], ($) => ['verbose group', _pa.dictionary.literal({
            'name': _pa.deprecated_cc($['name'], ($) => Identifier(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
        })]),
        'reference': _pa.deprecated_cc($['reference'], ($) => ['verbose group', _pa.dictionary.literal({
            'name': _pa.deprecated_cc($['name'], ($) => Identifier(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
        })]),
    })])]),
})]
export const Node: _i_signatures._T_Node = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'properties': _pa.deprecated_cc($['properties'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
        'type': _pa.deprecated_cc($['type'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'collection': return _pa.ss($, ($) => ({
                    'state': "collection",
                    'value': ['verbose group', _pa.dictionary.literal({
                        'node': _pa.deprecated_cc($['node'], ($) => Node(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                        'key': _pa.deprecated_cc($['key'], ($) => Identifier(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                    })],
                }))
                case 'group': return _pa.ss($, ($) => ({
                    'state': "group",
                    'value': ['verbose group', _pa.dictionary.literal({
                        'node': _pa.deprecated_cc($['node'], ($) => Node(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                    })],
                }))
                case 'text': return _pa.ss($, ($) => ({
                    'state': "text",
                    'value': ['verbose group', _pa.dictionary.literal({
                        'constraint': _pa.deprecated_cc($['constraint'], ($) => ['optional', $.transform(
                            ($): _i_out._T_Value.SG.optional => ['set', ['verbose group', _pa.dictionary.literal({
                                'path': _pa.deprecated_cc($['path'], ($) => Path(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                                'dictionary': _pa.deprecated_cc($['dictionary'], ($) => Identifier(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                            })]],
                            () => ['not set', null]
                        )]),
                    })],
                }))
                case 'state group': return _pa.ss($, ($) => ({
                    'state': "state group",
                    'value': ['verbose group', _pa.dictionary.literal({
                        'states': _pa.deprecated_cc($['states'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
                            'constraints': _pa.deprecated_cc($['constraints'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
                                'path': _pa.deprecated_cc($['path'], ($) => Path(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                            })])]),
                            'node': _pa.deprecated_cc($['node'], ($) => Node(
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
    })])]),
})]
export const Root: _i_signatures._T_Root = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'numerical types': _pa.deprecated_cc($['numerical types'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
    })])]),
    'root': _pa.deprecated_cc($['root'], ($) => Node(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
