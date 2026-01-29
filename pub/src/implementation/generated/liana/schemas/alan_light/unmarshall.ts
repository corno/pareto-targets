
import * as _p from "pareto-core/dist/refiner"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/alan_light/unmarshall"

import * as t_out from "../../../../../interface/generated/liana/schemas/alan_light/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

export const Identifier: t_signatures.Identifier = ($, abort) => v_unmarshalled_from_parse_tree.Text(
    $,
    ($) => abort(
        ['expected a text', null]
    )
)

export const Path: t_signatures.Path = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'up steps': _p_cc(
            $.__get_entry(
                'up steps',
                ($) => abort(
                    ['no such entry', "up steps"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.List(
                $,
                ($) => abort(
                    ['expected a list', null]
                )
            ).__l_map(
                ($) => _p_cc(
                    v_unmarshalled_from_parse_tree.Group(
                        $,
                        ($) => abort(
                            ['expected a group', null]
                        )
                    ),
                    ($) => null
                )
            )
        ),
        'context': _p_cc(
            $.__get_entry(
                'context',
                ($) => abort(
                    ['no such entry', "context"]
                )
            ),
            ($) => _p_cc(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null]
                    )
                ),
                ($) => ({
                    'sibling': _p_cc(
                        $.__get_entry(
                            'sibling',
                            ($) => abort(
                                ['no such entry', "sibling"]
                            )
                        ),
                        ($) => _p_cc(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null]
                                )
                            ),
                            ($) => null
                        )
                    ),
                    'state constraint': _p_cc(
                        $.__get_entry(
                            'state constraint',
                            ($) => abort(
                                ['no such entry', "state constraint"]
                            )
                        ),
                        ($) => _p_cc(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null]
                                )
                            ),
                            ($) => ({
                                'name': _p_cc(
                                    $.__get_entry(
                                        'name',
                                        ($) => abort(
                                            ['no such entry', "name"]
                                        )
                                    ),
                                    ($) => Identifier(
                                        $,
                                        ($) => abort(
                                            $
                                        )
                                    )
                                ),
                            })
                        )
                    ),
                })
            )
        ),
        'selection steps': _p_cc(
            $.__get_entry(
                'selection steps',
                ($) => abort(
                    ['no such entry', "selection steps"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.List(
                $,
                ($) => abort(
                    ['expected a list', null]
                )
            ).__l_map(
                ($) => _p_cc(
                    v_unmarshalled_from_parse_tree.Group(
                        $,
                        ($) => abort(
                            ['expected a group', null]
                        )
                    ),
                    ($) => ({
                        'group': _p_cc(
                            $.__get_entry(
                                'group',
                                ($) => abort(
                                    ['no such entry', "group"]
                                )
                            ),
                            ($) => _p_cc(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null]
                                    )
                                ),
                                ($) => ({
                                    'name': _p_cc(
                                        $.__get_entry(
                                            'name',
                                            ($) => abort(
                                                ['no such entry', "name"]
                                            )
                                        ),
                                        ($) => Identifier(
                                            $,
                                            ($) => abort(
                                                $
                                            )
                                        )
                                    ),
                                })
                            )
                        ),
                        'state constraint': _p_cc(
                            $.__get_entry(
                                'state constraint',
                                ($) => abort(
                                    ['no such entry', "state constraint"]
                                )
                            ),
                            ($) => _p_cc(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null]
                                    )
                                ),
                                ($) => ({
                                    'name': _p_cc(
                                        $.__get_entry(
                                            'name',
                                            ($) => abort(
                                                ['no such entry', "name"]
                                            )
                                        ),
                                        ($) => Identifier(
                                            $,
                                            ($) => abort(
                                                $
                                            )
                                        )
                                    ),
                                })
                            )
                        ),
                        'reference': _p_cc(
                            $.__get_entry(
                                'reference',
                                ($) => abort(
                                    ['no such entry', "reference"]
                                )
                            ),
                            ($) => _p_cc(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null]
                                    )
                                ),
                                ($) => ({
                                    'name': _p_cc(
                                        $.__get_entry(
                                            'name',
                                            ($) => abort(
                                                ['no such entry', "name"]
                                            )
                                        ),
                                        ($) => Identifier(
                                            $,
                                            ($) => abort(
                                                $
                                            )
                                        )
                                    ),
                                })
                            )
                        ),
                    })
                )
            )
        ),
    })
)

export const Node: t_signatures.Node = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'properties': _p_cc(
            $.__get_entry(
                'properties',
                ($) => abort(
                    ['no such entry', "properties"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                $,
                ($) => abort(
                    ['expected a dictionary', null]
                )
            ).__d_map(
                ($, id) => _p_cc(
                    v_unmarshalled_from_parse_tree.Group(
                        $,
                        ($) => abort(
                            ['expected a group', null]
                        )
                    ),
                    ($) => ({
                        'type': _p_cc(
                            $.__get_entry(
                                'type',
                                ($) => abort(
                                    ['no such entry', "type"]
                                )
                            ),
                            ($) => _p_cc(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null]
                                    )
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Node.properties.D.type_ => {
                                        switch ($t) {
                                            case 'collection':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['collection', _p_cc(
                                                        v_unmarshalled_from_parse_tree.Group(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a group', null]
                                                            )
                                                        ),
                                                        ($) => ({
                                                            'node': _p_cc(
                                                                $.__get_entry(
                                                                    'node',
                                                                    ($) => abort(
                                                                        ['no such entry', "node"]
                                                                    )
                                                                ),
                                                                ($) => Node(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    )
                                                                )
                                                            ),
                                                            'key': _p_cc(
                                                                $.__get_entry(
                                                                    'key',
                                                                    ($) => abort(
                                                                        ['no such entry', "key"]
                                                                    )
                                                                ),
                                                                ($) => Identifier(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    )
                                                                )
                                                            ),
                                                        })
                                                    )]
                                                )
                                            case 'group':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['group', _p_cc(
                                                        v_unmarshalled_from_parse_tree.Group(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a group', null]
                                                            )
                                                        ),
                                                        ($) => ({
                                                            'node': _p_cc(
                                                                $.__get_entry(
                                                                    'node',
                                                                    ($) => abort(
                                                                        ['no such entry', "node"]
                                                                    )
                                                                ),
                                                                ($) => Node(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    )
                                                                )
                                                            ),
                                                        })
                                                    )]
                                                )
                                            case 'text':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['text', _p_cc(
                                                        v_unmarshalled_from_parse_tree.Group(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a group', null]
                                                            )
                                                        ),
                                                        ($) => ({
                                                            'constraint': _p_cc(
                                                                $.__get_entry(
                                                                    'constraint',
                                                                    ($) => abort(
                                                                        ['no such entry', "constraint"]
                                                                    )
                                                                ),
                                                                ($) => v_unmarshalled_from_parse_tree.Optional(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected an optional', null]
                                                                    )
                                                                ).__o_map(
                                                                    ($) => _p_cc(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null]
                                                                            )
                                                                        ),
                                                                        ($) => ({
                                                                            'path': _p_cc(
                                                                                $.__get_entry(
                                                                                    'path',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "path"]
                                                                                    )
                                                                                ),
                                                                                ($) => Path(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $
                                                                                    )
                                                                                )
                                                                            ),
                                                                            'dictionary': _p_cc(
                                                                                $.__get_entry(
                                                                                    'dictionary',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "dictionary"]
                                                                                    )
                                                                                ),
                                                                                ($) => Identifier(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $
                                                                                    )
                                                                                )
                                                                            ),
                                                                        })
                                                                    )
                                                                )
                                                            ),
                                                        })
                                                    )]
                                                )
                                            case 'state group':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ['state group', _p_cc(
                                                        v_unmarshalled_from_parse_tree.Group(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a group', null]
                                                            )
                                                        ),
                                                        ($) => ({
                                                            'states': _p_cc(
                                                                $.__get_entry(
                                                                    'states',
                                                                    ($) => abort(
                                                                        ['no such entry', "states"]
                                                                    )
                                                                ),
                                                                ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a dictionary', null]
                                                                    )
                                                                ).__d_map(
                                                                    ($, id) => _p_cc(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null]
                                                                            )
                                                                        ),
                                                                        ($) => ({
                                                                            'constraints': _p_cc(
                                                                                $.__get_entry(
                                                                                    'constraints',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "constraints"]
                                                                                    )
                                                                                ),
                                                                                ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a dictionary', null]
                                                                                    )
                                                                                ).__d_map(
                                                                                    ($, id) => _p_cc(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null]
                                                                                            )
                                                                                        ),
                                                                                        ($) => ({
                                                                                            'path': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'path',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "path"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Path(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )
                                                                                            ),
                                                                                        })
                                                                                    )
                                                                                )
                                                                            ),
                                                                            'node': _p_cc(
                                                                                $.__get_entry(
                                                                                    'node',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "node"]
                                                                                    )
                                                                                ),
                                                                                ($) => Node(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $
                                                                                    )
                                                                                )
                                                                            ),
                                                                        })
                                                                    )
                                                                )
                                                            ),
                                                        })
                                                    )]
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']]
                                                )
                                        }
                                    }
                                )
                            )
                        ),
                    })
                )
            )
        ),
    })
)

export const Root: t_signatures.Root = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'numerical types': _p_cc(
            $.__get_entry(
                'numerical types',
                ($) => abort(
                    ['no such entry', "numerical types"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                $,
                ($) => abort(
                    ['expected a dictionary', null]
                )
            ).__d_map(
                ($, id) => _p_cc(
                    v_unmarshalled_from_parse_tree.Group(
                        $,
                        ($) => abort(
                            ['expected a group', null]
                        )
                    ),
                    ($) => null
                )
            )
        ),
        'root': _p_cc(
            $.__get_entry(
                'root',
                ($) => abort(
                    ['no such entry', "root"]
                )
            ),
            ($) => Node(
                $,
                ($) => abort(
                    $
                )
            )
        ),
    })
)
