import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/alan_light/marshall"


export const Identifier: _i_signatures._T_Identifier = ($, $p) => ['text', ({
    'delimiter': ['quote', null],
    'value': $,
})]
export const Node: _i_signatures._T_Node = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'properties': _pa.cc($['properties'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'collection': return _pa.ss($, ($) => ({
                    'state': "collection",
                    'value': ['verbose group', _pa.dictionary_literal({
                        'key': _pa.cc($['key'], ($) => Identifier(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                        'node': _pa.cc($['node'], ($) => Node(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                    })],
                }))
                case 'group': return _pa.ss($, ($) => ({
                    'state': "group",
                    'value': ['verbose group', _pa.dictionary_literal({
                        'node': _pa.cc($['node'], ($) => Node(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                    })],
                }))
                case 'state group': return _pa.ss($, ($) => ({
                    'state': "state group",
                    'value': ['verbose group', _pa.dictionary_literal({
                        'states': _pa.cc($['states'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                            'constraints': _pa.cc($['constraints'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                                'path': _pa.cc($['path'], ($) => Path(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                            })])]),
                            'node': _pa.cc($['node'], ($) => Node(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
                        })])]),
                    })],
                }))
                case 'text': return _pa.ss($, ($) => ({
                    'state': "text",
                    'value': ['verbose group', _pa.dictionary_literal({
                        'constraint': _pa.cc($['constraint'], ($) => ['optional', $.transform(
                            ($): _i_out._T_Value.SG.optional => ['set', ['verbose group', _pa.dictionary_literal({
                                'dictionary': _pa.cc($['dictionary'], ($) => Identifier(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                                'path': _pa.cc($['path'], ($) => Path(
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
                default: return _pa.au($[0])
            }
        })]),
    })])]),
})]
export const Path: _i_signatures._T_Path = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'context': _pa.cc($['context'], ($) => ['verbose group', _pa.dictionary_literal({
        'sibling': _pa.cc($['sibling'], ($) => ['verbose group', _pa.dictionary_literal({
        })]),
        'state constraint': _pa.cc($['state constraint'], ($) => ['verbose group', _pa.dictionary_literal({
            'name': _pa.cc($['name'], ($) => Identifier(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
        })]),
    })]),
    'selection steps': _pa.cc($['selection steps'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'group': _pa.cc($['group'], ($) => ['verbose group', _pa.dictionary_literal({
            'name': _pa.cc($['name'], ($) => Identifier(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
        })]),
        'reference': _pa.cc($['reference'], ($) => ['verbose group', _pa.dictionary_literal({
            'name': _pa.cc($['name'], ($) => Identifier(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
        })]),
        'state constraint': _pa.cc($['state constraint'], ($) => ['verbose group', _pa.dictionary_literal({
            'name': _pa.cc($['name'], ($) => Identifier(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
        })]),
    })])]),
    'up steps': _pa.cc($['up steps'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
    })])]),
})]
export const Root: _i_signatures._T_Root = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'numerical types': _pa.cc($['numerical types'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
    })])]),
    'root': _pa.cc($['root'], ($) => Node(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
