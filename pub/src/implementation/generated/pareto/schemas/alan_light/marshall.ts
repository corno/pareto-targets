    import * as _p from 'pareto-core-transformer'
    import * as _pdev from 'pareto-core-dev'
    
    import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/alan_light/marshall"
    import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"
    
    
    export const Identifier: _i_signatures._T_Identifier = ($, $p) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]
    export const Path: _i_signatures._T_Path = ($, $p) => ['verbose group', _p.dictionary.literal({
        'up steps': _p.deprecated_cc($['up steps'], ($) => ['list', $.__l_map(($) => ['verbose group', _p.dictionary.literal({
        })])]),
        'context': _p.deprecated_cc($['context'], ($) => ['verbose group', _p.dictionary.literal({
            'sibling': _p.deprecated_cc($['sibling'], ($) => ['verbose group', _p.dictionary.literal({
            })]),
            'state constraint': _p.deprecated_cc($['state constraint'], ($) => ['verbose group', _p.dictionary.literal({
                'name': _p.deprecated_cc($['name'], ($) => Identifier(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })]),
        })]),
        'selection steps': _p.deprecated_cc($['selection steps'], ($) => ['list', $.__l_map(($) => ['verbose group', _p.dictionary.literal({
            'group': _p.deprecated_cc($['group'], ($) => ['verbose group', _p.dictionary.literal({
                'name': _p.deprecated_cc($['name'], ($) => Identifier(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })]),
            'state constraint': _p.deprecated_cc($['state constraint'], ($) => ['verbose group', _p.dictionary.literal({
                'name': _p.deprecated_cc($['name'], ($) => Identifier(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })]),
            'reference': _p.deprecated_cc($['reference'], ($) => ['verbose group', _p.dictionary.literal({
                'name': _p.deprecated_cc($['name'], ($) => Identifier(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })]),
        })])]),
    })]
    export const Node: _i_signatures._T_Node = ($, $p) => ['verbose group', _p.dictionary.literal({
        'properties': _p.deprecated_cc($['properties'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
            'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'collection': return _p.ss($, ($) => ({
                        'state': "collection",
                        'value': ['verbose group', _p.dictionary.literal({
                            'node': _p.deprecated_cc($['node'], ($) => Node(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
                            'key': _p.deprecated_cc($['key'], ($) => Identifier(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
                        })],
                    }))
                    case 'group': return _p.ss($, ($) => ({
                        'state': "group",
                        'value': ['verbose group', _p.dictionary.literal({
                            'node': _p.deprecated_cc($['node'], ($) => Node(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
                        })],
                    }))
                    case 'text': return _p.ss($, ($) => ({
                        'state': "text",
                        'value': ['verbose group', _p.dictionary.literal({
                            'constraint': _p.deprecated_cc($['constraint'], ($) => ['optional', $.__decide(
                                ($): _i_out._T_Value.SG.optional => ['set', ['verbose group', _p.dictionary.literal({
                                    'path': _p.deprecated_cc($['path'], ($) => Path(
                                        $,
                                        {
                                            'value serializers': $p['value serializers'],
                                        }
                                    )),
                                    'dictionary': _p.deprecated_cc($['dictionary'], ($) => Identifier(
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
                    case 'state group': return _p.ss($, ($) => ({
                        'state': "state group",
                        'value': ['verbose group', _p.dictionary.literal({
                            'states': _p.deprecated_cc($['states'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
                                'constraints': _p.deprecated_cc($['constraints'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
                                    'path': _p.deprecated_cc($['path'], ($) => Path(
                                        $,
                                        {
                                            'value serializers': $p['value serializers'],
                                        }
                                    )),
                                })])]),
                                'node': _p.deprecated_cc($['node'], ($) => Node(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                            })])]),
                        })],
                    }))
                    default: return _p.au($[0])
                }
            })]),
        })])]),
    })]
    export const Root: _i_signatures._T_Root = ($, $p) => ['verbose group', _p.dictionary.literal({
        'numerical types': _p.deprecated_cc($['numerical types'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
        })])]),
        'root': _p.deprecated_cc($['root'], ($) => Node(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
    })]
