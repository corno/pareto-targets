
import * as _p from "pareto-core/dist/refiner"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/graphviz_low_level/unmarshall"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

export const ID: t_signatures.ID = ($, abort) => _p_unreachable_code_path(
)

export const Node_ID: t_signatures.Node_ID = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'id': _p_cc(
            $.__get_entry(
                'id',
                ($) => abort(
                    ['no such entry', "id"]
                )
            ),
            ($) => ID(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'port': _p_cc(
            $.__get_entry(
                'port',
                ($) => abort(
                    ['no such entry', "port"]
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
                        'port': _p_cc(
                            $.__get_entry(
                                'port',
                                ($) => abort(
                                    ['no such entry', "port"]
                                )
                            ),
                            ($) => ID(
                                $,
                                ($) => abort(
                                    $
                                )
                            )
                        ),
                        'compass point': _p_cc(
                            $.__get_entry(
                                'compass point',
                                ($) => abort(
                                    ['no such entry', "compass point"]
                                )
                            ),
                            ($) => v_unmarshalled_from_parse_tree.Optional(
                                $,
                                ($) => abort(
                                    ['expected an optional', null]
                                )
                            ).__o_map(
                                ($) => ID(
                                    $,
                                    ($) => abort(
                                        $
                                    )
                                )
                            )
                        ),
                    })
                )
            )
        ),
    })
)

export const Attribute_List: t_signatures.Attribute_List = ($, abort) => v_unmarshalled_from_parse_tree.List(
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
            'name': _p_cc(
                $.__get_entry(
                    'name',
                    ($) => abort(
                        ['no such entry', "name"]
                    )
                ),
                ($) => ID(
                    $,
                    ($) => abort(
                        $
                    )
                )
            ),
            'value': _p_cc(
                $.__get_entry(
                    'value',
                    ($) => abort(
                        ['no such entry', "value"]
                    )
                ),
                ($) => ID(
                    $,
                    ($) => abort(
                        $
                    )
                )
            ),
        })
    )
)

export const Subgraph: t_signatures.Subgraph = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'subgraph': _p_cc(
            $.__get_entry(
                'subgraph',
                ($) => abort(
                    ['no such entry', "subgraph"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Optional(
                $,
                ($) => abort(
                    ['expected an optional', null]
                )
            ).__o_map(
                ($) => v_unmarshalled_from_parse_tree.Optional(
                    $,
                    ($) => abort(
                        ['expected an optional', null]
                    )
                ).__o_map(
                    ($) => ID(
                        $,
                        ($) => abort(
                            $
                        )
                    )
                )
            )
        ),
        'statements': _p_cc(
            $.__get_entry(
                'statements',
                ($) => abort(
                    ['no such entry', "statements"]
                )
            ),
            ($) => Statement_List(
                $,
                ($) => abort(
                    $
                )
            )
        ),
    })
)

export const Statement_List: t_signatures.Statement_List = ($, abort) => v_unmarshalled_from_parse_tree.List(
    $,
    ($) => abort(
        ['expected a list', null]
    )
).__l_map(
    ($) => _p_unreachable_code_path(
    )
)

export const Graph: t_signatures.Graph = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'strict': _p_cc(
            $.__get_entry(
                'strict',
                ($) => abort(
                    ['no such entry', "strict"]
                )
            ),
            ($) => v_deserialize_boolean.deserialize(
                v_unmarshalled_from_parse_tree.Text(
                    $,
                    ($) => abort(
                        ['expected a text', null]
                    )
                ),
                ($) => abort(
                    ['not a valid boolean', null]
                )
            )
        ),
        'type': _p_cc(
            $.__get_entry(
                'type',
                ($) => abort(
                    ['no such entry', "type"]
                )
            ),
            ($) => _p_unreachable_code_path(
            )
        ),
        'name': _p_cc(
            $.__get_entry(
                'name',
                ($) => abort(
                    ['no such entry', "name"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Optional(
                $,
                ($) => abort(
                    ['expected an optional', null]
                )
            ).__o_map(
                ($) => ID(
                    $,
                    ($) => abort(
                        $
                    )
                )
            )
        ),
        'statements': _p_cc(
            $.__get_entry(
                'statements',
                ($) => abort(
                    ['no such entry', "statements"]
                )
            ),
            ($) => Statement_List(
                $,
                ($) => abort(
                    $
                )
            )
        ),
    })
)
