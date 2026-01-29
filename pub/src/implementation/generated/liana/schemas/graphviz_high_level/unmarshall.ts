
import * as _p from "pareto-core/dist/refiner"

import { 
    _p_unreachable_code_path, 
} from "pareto-core/dist/unreachable_code_path"

import { 
    _p_cc, 
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/graphviz_high_level/unmarshall"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_generic from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"
export const Graph_Attributes: t_signatures.Graph_Attributes = ($,abort) => v_generic.expect_list(
    $, 
    ($) => abort(
        ['expected a list', null]
    )
).__l_map(
    ($) => _p_unreachable_code_path(
    )
)
export const Node_Attributes: t_signatures.Node_Attributes = ($,abort) => v_generic.expect_list(
    $, 
    ($) => abort(
        ['expected a list', null]
    )
).__l_map(
    ($) => _p_unreachable_code_path(
    )
)
export const Tree: t_signatures.Tree = ($,abort) => _p_cc(
    v_generic.expect_group(
        $, 
        ($) => abort(
            ['expected a group', null]
        )
    ), 
    ($) => ({
        'attributes': _p_cc(
            $.__get_entry(
                'attributes', 
                ($) => abort(
                    ['no such entry', "attributes"]
                )
            ), 
            ($) => Graph_Attributes(
                $, 
                ($) => abort(
                    $
                )
            )
        ),
        'elements': _p_cc(
            $.__get_entry(
                'elements', 
                ($) => abort(
                    ['no such entry', "elements"]
                )
            ), 
            ($) => v_generic.expect_dictionary(
                $, 
                ($) => abort(
                    ['expected a dictionary', null]
                )
            ).__d_map(
                ($,id) => _p_unreachable_code_path(
                )
            )
        ),
    })
)
export const End_Point_Specification: t_signatures.End_Point_Specification = ($,abort) => _p_cc(
    v_generic.expect_group(
        $, 
        ($) => abort(
            ['expected a group', null]
        )
    ), 
    ($) => ({
        'start': _p_cc(
            $.__get_entry(
                'start', 
                ($) => abort(
                    ['no such entry', "start"]
                )
            ), 
            ($) => v_generic.expect_text(
                $, 
                ($) => abort(
                    ['expected a text', null]
                )
            )
        ),
        'tail': _p_cc(
            $.__get_entry(
                'tail', 
                ($) => abort(
                    ['no such entry', "tail"]
                )
            ), 
            ($) => v_generic.expect_list(
                $, 
                ($) => abort(
                    ['expected a list', null]
                )
            ).__l_map(
                ($) => v_generic.expect_text(
                    $, 
                    ($) => abort(
                        ['expected a text', null]
                    )
                )
            )
        ),
        'port data': _p_cc(
            $.__get_entry(
                'port data', 
                ($) => abort(
                    ['no such entry', "port data"]
                )
            ), 
            ($) => v_generic.expect_optional(
                $, 
                ($) => abort(
                    ['expected an optional', null]
                )
            ).__o_map(
                ($) => _p_cc(
                    v_generic.expect_group(
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
                            ($) => v_generic.expect_text(
                                $, 
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )
                        ),
                        'compass direction': _p_cc(
                            $.__get_entry(
                                'compass direction', 
                                ($) => abort(
                                    ['no such entry', "compass direction"]
                                )
                            ), 
                            ($) => v_generic.expect_optional(
                                $, 
                                ($) => abort(
                                    ['expected an optional', null]
                                )
                            ).__o_map(
                                ($) => v_generic.expect_text(
                                    $, 
                                    ($) => abort(
                                        ['expected a text', null]
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
export const Edge_Attributes: t_signatures.Edge_Attributes = ($,abort) => v_generic.expect_list(
    $, 
    ($) => abort(
        ['expected a list', null]
    )
).__l_map(
    ($) => _p_unreachable_code_path(
    )
)
export const Graph: t_signatures.Graph = ($,abort) => _p_cc(
    v_generic.expect_group(
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
            ($) => v_generic.expect_optional(
                $, 
                ($) => abort(
                    ['expected an optional', null]
                )
            ).__o_map(
                ($) => v_generic.expect_text(
                    $, 
                    ($) => abort(
                        ['expected a text', null]
                    )
                )
            )
        ),
        'tree': _p_cc(
            $.__get_entry(
                'tree', 
                ($) => abort(
                    ['no such entry', "tree"]
                )
            ), 
            ($) => Tree(
                $, 
                ($) => abort(
                    $
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
    })
)
export const Attribute_Value: t_signatures.Attribute_Value = ($,abort) => _p_unreachable_code_path(
)
