
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/alan_light/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

export const Identifier: t_signatures.Identifier = ($) => ['text', {
    'delimiter': ['quote', null],
    'value': $,
}]

export const Path: t_signatures.Path = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        'up steps': _p_cc(
            $['up steps'],
            ($) => ['list', $.__l_map(
                ($) => ['group', ['verbose', _p.dictionary.literal(
                    {
                    }
                )]]
            )]
        ),
        'context': _p_cc(
            $['context'],
            ($) => ['group', ['verbose', _p.dictionary.literal(
                {
                    'sibling': _p_cc(
                        $['sibling'],
                        ($) => ['group', ['verbose', _p.dictionary.literal(
                            {
                            }
                        )]]
                    ),
                    'state constraint': _p_cc(
                        $['state constraint'],
                        ($) => ['group', ['verbose', _p.dictionary.literal(
                            {
                                'name': _p_cc(
                                    $['name'],
                                    ($) => Identifier(
                                        $
                                    )
                                ),
                            }
                        )]]
                    ),
                }
            )]]
        ),
        'selection steps': _p_cc(
            $['selection steps'],
            ($) => ['list', $.__l_map(
                ($) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        'group': _p_cc(
                            $['group'],
                            ($) => ['group', ['verbose', _p.dictionary.literal(
                                {
                                    'name': _p_cc(
                                        $['name'],
                                        ($) => Identifier(
                                            $
                                        )
                                    ),
                                }
                            )]]
                        ),
                        'state constraint': _p_cc(
                            $['state constraint'],
                            ($) => ['group', ['verbose', _p.dictionary.literal(
                                {
                                    'name': _p_cc(
                                        $['name'],
                                        ($) => Identifier(
                                            $
                                        )
                                    ),
                                }
                            )]]
                        ),
                        'reference': _p_cc(
                            $['reference'],
                            ($) => ['group', ['verbose', _p.dictionary.literal(
                                {
                                    'name': _p_cc(
                                        $['name'],
                                        ($) => Identifier(
                                            $
                                        )
                                    ),
                                }
                            )]]
                        ),
                    }
                )]]
            )]
        ),
    }
)]]

export const Node: t_signatures.Node = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        'properties': _p_cc(
            $['properties'],
            ($) => ['dictionary', $.__d_map(
                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        'type': _p_cc(
                            $['type'],
                            ($) => ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'collection':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'collection',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                            'node': _p_cc(
                                                                $['node'],
                                                                ($) => Node(
                                                                    $
                                                                )
                                                            ),
                                                            'key': _p_cc(
                                                                $['key'],
                                                                ($) => Identifier(
                                                                    $
                                                                )
                                                            ),
                                                        }
                                                    )]],
                                                })
                                            )
                                        case 'group':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'group',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                            'node': _p_cc(
                                                                $['node'],
                                                                ($) => Node(
                                                                    $
                                                                )
                                                            ),
                                                        }
                                                    )]],
                                                })
                                            )
                                        case 'text':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'text',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                            'constraint': _p_cc(
                                                                $['constraint'],
                                                                ($) => ['optional', $.__decide(
                                                                    ($): t_out.Value.optional => ['set', ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                            'path': _p_cc(
                                                                                $['path'],
                                                                                ($) => Path(
                                                                                    $
                                                                                )
                                                                            ),
                                                                            'dictionary': _p_cc(
                                                                                $['dictionary'],
                                                                                ($) => Identifier(
                                                                                    $
                                                                                )
                                                                            ),
                                                                        }
                                                                    )]]],
                                                                    () => ['not set', null]
                                                                )]
                                                            ),
                                                        }
                                                    )]],
                                                })
                                            )
                                        case 'state group':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'state group',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                            'states': _p_cc(
                                                                $['states'],
                                                                ($) => ['dictionary', $.__d_map(
                                                                    ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                            'constraints': _p_cc(
                                                                                $['constraints'],
                                                                                ($) => ['dictionary', $.__d_map(
                                                                                    ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                                                                        {
                                                                                            'path': _p_cc(
                                                                                                $['path'],
                                                                                                ($) => Path(
                                                                                                    $
                                                                                                )
                                                                                            ),
                                                                                        }
                                                                                    )]]
                                                                                )]
                                                                            ),
                                                                            'node': _p_cc(
                                                                                $['node'],
                                                                                ($) => Node(
                                                                                    $
                                                                                )
                                                                            ),
                                                                        }
                                                                    )]]
                                                                )]
                                                            ),
                                                        }
                                                    )]],
                                                })
                                            )
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            )]
                        ),
                    }
                )]]
            )]
        ),
    }
)]]

export const Root: t_signatures.Root = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        'numerical types': _p_cc(
            $['numerical types'],
            ($) => ['dictionary', $.__d_map(
                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                    {
                    }
                )]]
            )]
        ),
        'root': _p_cc(
            $['root'],
            ($) => Node(
                $
            )
        ),
    }
)]]
