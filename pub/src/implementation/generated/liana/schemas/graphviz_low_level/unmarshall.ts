
import * as _p from "pareto-core/dist/refiner"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/graphviz_low_level/unmarshall"

import * as t_out from "../../../../../interface/generated/liana/schemas/graphviz_low_level/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

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
            ($) => _p_cc(
                v_unmarshalled_from_parse_tree.State(
                    $,
                    ($) => abort(
                        ['expected a state', null]
                    )
                ),
                ($) => _p.decide.text(
                    $['option']['value'],
                    ($t): t_out.Graph.type_ => {
                        switch ($t) {
                            case 'graph':
                                return _p_cc(
                                    $['value'],
                                    ($) => ['graph', v_unmarshalled_from_parse_tree.Nothing(
                                        $,
                                        ($) => abort(
                                            ['expected a nothing', null]
                                        )
                                    )]
                                )
                            case 'digraph':
                                return _p_cc(
                                    $['value'],
                                    ($) => ['digraph', v_unmarshalled_from_parse_tree.Nothing(
                                        $,
                                        ($) => abort(
                                            ['expected a nothing', null]
                                        )
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
        'name': _p_cc(
            $.__get_entry(
                'name',
                ($) => abort(
                    ['no such entry', "name"]
                )
            ),
            ($) => _p.optional.map(
                v_unmarshalled_from_parse_tree.Optional(
                    $,
                    ($) => abort(
                        ['expected an optional', null]
                    )
                ),
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

export const Statement_List: t_signatures.Statement_List = ($, abort) => _p.list.map(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            ['expected a list', null]
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
            ($t): t_out.Statement_List.L => {
                switch ($t) {
                    case 'node':
                        return _p_cc(
                            $['value'],
                            ($) => ['node', _p_cc(
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
                                        ($) => Node_ID(
                                            $,
                                            ($) => abort(
                                                $
                                            )
                                        )
                                    ),
                                    'attribute list': _p_cc(
                                        $.__get_entry(
                                            'attribute list',
                                            ($) => abort(
                                                ['no such entry', "attribute list"]
                                            )
                                        ),
                                        ($) => Attribute_List(
                                            $,
                                            ($) => abort(
                                                $
                                            )
                                        )
                                    ),
                                })
                            )]
                        )
                    case 'edge':
                        return _p_cc(
                            $['value'],
                            ($) => ['edge', _p_cc(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null]
                                    )
                                ),
                                ($) => ({
                                    'left': _p_cc(
                                        $.__get_entry(
                                            'left',
                                            ($) => abort(
                                                ['no such entry', "left"]
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
                                                ($t): t_out.Statement_List.L.edge.left => {
                                                    switch ($t) {
                                                        case 'node':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ['node', Node_ID(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    )
                                                                )]
                                                            )
                                                        case 'subgraph':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ['subgraph', Subgraph(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    )
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
                                    'right': _p_cc(
                                        $.__get_entry(
                                            'right',
                                            ($) => abort(
                                                ['no such entry', "right"]
                                            )
                                        ),
                                        ($) => _p.list.map(
                                            v_unmarshalled_from_parse_tree.List(
                                                $,
                                                ($) => abort(
                                                    ['expected a list', null]
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
                                                    ($t): t_out.Statement_List.L.edge.right.L => {
                                                        switch ($t) {
                                                            case 'node':
                                                                return _p_cc(
                                                                    $['value'],
                                                                    ($) => ['node', Node_ID(
                                                                        $,
                                                                        ($) => abort(
                                                                            $
                                                                        )
                                                                    )]
                                                                )
                                                            case 'subgraph':
                                                                return _p_cc(
                                                                    $['value'],
                                                                    ($) => ['subgraph', Subgraph(
                                                                        $,
                                                                        ($) => abort(
                                                                            $
                                                                        )
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
                                        )
                                    ),
                                    'attributes': _p_cc(
                                        $.__get_entry(
                                            'attributes',
                                            ($) => abort(
                                                ['no such entry', "attributes"]
                                            )
                                        ),
                                        ($) => Attribute_List(
                                            $,
                                            ($) => abort(
                                                $
                                            )
                                        )
                                    ),
                                })
                            )]
                        )
                    case 'attribute list':
                        return _p_cc(
                            $['value'],
                            ($) => ['attribute list', _p_cc(
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
                                                ($t): t_out.Statement_List.L.attribute_list.type_ => {
                                                    switch ($t) {
                                                        case 'graph':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ['graph', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null]
                                                                    )
                                                                )]
                                                            )
                                                        case 'node':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ['node', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null]
                                                                    )
                                                                )]
                                                            )
                                                        case 'edge':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ['edge', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null]
                                                                    )
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
                                    'attributes': _p_cc(
                                        $.__get_entry(
                                            'attributes',
                                            ($) => abort(
                                                ['no such entry', "attributes"]
                                            )
                                        ),
                                        ($) => Attribute_List(
                                            $,
                                            ($) => abort(
                                                $
                                            )
                                        )
                                    ),
                                })
                            )]
                        )
                    case 'attribute assignment':
                        return _p_cc(
                            $['value'],
                            ($) => ['attribute assignment', _p_cc(
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
                            )]
                        )
                    case 'subgraph':
                        return _p_cc(
                            $['value'],
                            ($) => ['subgraph', Subgraph(
                                $,
                                ($) => abort(
                                    $
                                )
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
)

export const Attribute_List: t_signatures.Attribute_List = ($, abort) => _p.list.map(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            ['expected a list', null]
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
            ($) => _p.optional.map(
                v_unmarshalled_from_parse_tree.Optional(
                    $,
                    ($) => abort(
                        ['expected an optional', null]
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
                            ($) => _p.optional.map(
                                v_unmarshalled_from_parse_tree.Optional(
                                    $,
                                    ($) => abort(
                                        ['expected an optional', null]
                                    )
                                ),
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

export const ID: t_signatures.ID = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null]
        )
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.ID => {
            switch ($t) {
                case 'id':
                    return _p_cc(
                        $['value'],
                        ($) => ['id', v_unmarshalled_from_parse_tree.Text(
                            $,
                            ($) => abort(
                                ['expected a text', null]
                            )
                        )]
                    )
                case 'string':
                    return _p_cc(
                        $['value'],
                        ($) => ['string', v_unmarshalled_from_parse_tree.Text(
                            $,
                            ($) => abort(
                                ['expected a text', null]
                            )
                        )]
                    )
                case 'html':
                    return _p_cc(
                        $['value'],
                        ($) => ['html', v_unmarshalled_from_parse_tree.Text(
                            $,
                            ($) => abort(
                                ['expected a text', null]
                            )
                        )]
                    )
                case 'number':
                    return _p_cc(
                        $['value'],
                        ($) => ['number', v_deserialize_number.deserialize(
                            v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            ),
                            ($) => abort(
                                ['not a valid number', null]
                            )
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
            ($) => _p.optional.map(
                v_unmarshalled_from_parse_tree.Optional(
                    $,
                    ($) => abort(
                        ['expected an optional', null]
                    )
                ),
                ($) => _p.optional.map(
                    v_unmarshalled_from_parse_tree.Optional(
                        $,
                        ($) => abort(
                            ['expected an optional', null]
                        )
                    ),
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
