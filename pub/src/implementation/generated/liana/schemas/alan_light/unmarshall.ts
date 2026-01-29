
import * as _p from "pareto-core/dist/refiner"

import { 
    _p_unreachable_code_path, 
} from "pareto-core/dist/unreachable_code_path"

import { 
    _p_cc, 
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/alan_light/unmarshall"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_generic from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"
export const Identifier: t_signatures.Identifier = ($,abort) => v_generic.expect_text(
    $, 
    ($) => abort(
        ['expected a text', null]
    )
)
export const Path: t_signatures.Path = ($,abort) => _p_cc(
    v_generic.expect_group(
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
            ($) => v_generic.expect_list(
                $, 
                ($) => abort(
                    ['expected a list', null]
                )
            ).__l_map(
                ($) => _p_cc(
                    v_generic.expect_group(
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
                v_generic.expect_group(
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
                            v_generic.expect_group(
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
            ($) => v_generic.expect_list(
                $, 
                ($) => abort(
                    ['expected a list', null]
                )
            ).__l_map(
                ($) => _p_cc(
                    v_generic.expect_group(
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
export const Node: t_signatures.Node = ($,abort) => _p_cc(
    v_generic.expect_group(
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
            ($) => v_generic.expect_dictionary(
                $, 
                ($) => abort(
                    ['expected a dictionary', null]
                )
            ).__d_map(
                ($,id) => _p_cc(
                    v_generic.expect_group(
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
                            ($) => _p_unreachable_code_path(
                            )
                        ),
                    })
                )
            )
        ),
    })
)
export const Root: t_signatures.Root = ($,abort) => _p_cc(
    v_generic.expect_group(
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
            ($) => v_generic.expect_dictionary(
                $, 
                ($) => abort(
                    ['expected a dictionary', null]
                )
            ).__d_map(
                ($,id) => _p_cc(
                    v_generic.expect_group(
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
