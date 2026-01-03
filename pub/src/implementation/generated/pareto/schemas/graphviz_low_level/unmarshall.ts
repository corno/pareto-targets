import * as _pa from 'pareto-core-refiner'
import * as _pd from 'pareto-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/graphviz_low_level/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/graphviz_low_level/data_types/target"


export const ID: _i_signatures._T_ID = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary.literal({
            'id': ($): _i_out._T_ID.SG => ['id', _i_generic.process_text(
                $,
                null
            )],
            'string': ($): _i_out._T_ID.SG => ['string', _i_generic.process_text(
                $,
                null
            )],
            'html': ($): _i_out._T_ID.SG => ['html', _i_generic.process_text(
                $,
                null
            )],
            'number': ($): _i_out._T_ID.SG => ['number', _i_generic.process_number(
                $,
                {
                    'deserializer': $p['value deserializers']['default number'],
                }
            )],
        }),
    }
)
export const Node_ID: _i_signatures._T_Node_ID = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'id': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "id",
                }
            ), ($) => ID(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'port': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "port",
                }
            ), ($) => _i_generic.process_optional(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'port': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "port",
                                    }
                                ), ($) => ID(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                )),
                                'compass point': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "compass point",
                                    }
                                ), ($) => _i_generic.process_optional(
                                    $,
                                    {
                                        'value': ($) => ID(
                                            $,
                                            {
                                                'value deserializers': $p['value deserializers'],
                                            }
                                        ),
                                    }
                                )),
                            }),
                        }
                    ),
                }
            )),
        }),
    }
)
export const Attribute_List: _i_signatures._T_Attribute_List = ($, $p) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => _i_generic.process_group(
            $,
            {
                'properties': ($) => ({
                    'name': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "name",
                        }
                    ), ($) => ID(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    )),
                    'value': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "value",
                        }
                    ), ($) => ID(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    )),
                }),
            }
        ),
    }
)
export const Subgraph: _i_signatures._T_Subgraph = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'subgraph': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "subgraph",
                }
            ), ($) => _i_generic.process_optional(
                $,
                {
                    'value': ($) => _i_generic.process_optional(
                        $,
                        {
                            'value': ($) => ID(
                                $,
                                {
                                    'value deserializers': $p['value deserializers'],
                                }
                            ),
                        }
                    ),
                }
            )),
            'statements': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "statements",
                }
            ), ($) => Statement_List(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
        }),
    }
)
export const Statement_List: _i_signatures._T_Statement_List = ($, $p) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => _i_generic.process_unconstrained_state_group(
            $,
            {
                'states': _pa.dictionary.literal({
                    'node': ($): _i_out._T_Statement_List.L.SG => ['node', _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'node': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "node",
                                    }
                                ), ($) => Node_ID(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                )),
                                'attribute list': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "attribute list",
                                    }
                                ), ($) => Attribute_List(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                )),
                            }),
                        }
                    )],
                    'edge': ($): _i_out._T_Statement_List.L.SG => ['edge', _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'left': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "left",
                                    }
                                ), ($) => _i_generic.process_unconstrained_state_group(
                                    $,
                                    {
                                        'states': _pa.dictionary.literal({
                                            'node': ($): _i_out._T_Statement_List.L.SG.edge.left.SG => ['node', Node_ID(
                                                $,
                                                {
                                                    'value deserializers': $p['value deserializers'],
                                                }
                                            )],
                                            'subgraph': ($): _i_out._T_Statement_List.L.SG.edge.left.SG => ['subgraph', Subgraph(
                                                $,
                                                {
                                                    'value deserializers': $p['value deserializers'],
                                                }
                                            )],
                                        }),
                                    }
                                )),
                                'right': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "right",
                                    }
                                ), ($) => _i_generic.process_unconstrained_list(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_unconstrained_state_group(
                                            $,
                                            {
                                                'states': _pa.dictionary.literal({
                                                    'node': ($): _i_out._T_Statement_List.L.SG.edge.right.L.SG => ['node', Node_ID(
                                                        $,
                                                        {
                                                            'value deserializers': $p['value deserializers'],
                                                        }
                                                    )],
                                                    'subgraph': ($): _i_out._T_Statement_List.L.SG.edge.right.L.SG => ['subgraph', Subgraph(
                                                        $,
                                                        {
                                                            'value deserializers': $p['value deserializers'],
                                                        }
                                                    )],
                                                }),
                                            }
                                        ),
                                    }
                                )),
                                'attributes': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "attributes",
                                    }
                                ), ($) => Attribute_List(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                )),
                            }),
                        }
                    )],
                    'attribute list': ($): _i_out._T_Statement_List.L.SG => ['attribute list', _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'type': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "type",
                                    }
                                ), ($) => _i_generic.process_unconstrained_state_group(
                                    $,
                                    {
                                        'states': _pa.dictionary.literal({
                                            'graph': ($): _i_out._T_Statement_List.L.SG.attribute_list._type.SG => ['graph', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            'node': ($): _i_out._T_Statement_List.L.SG.attribute_list._type.SG => ['node', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            'edge': ($): _i_out._T_Statement_List.L.SG.attribute_list._type.SG => ['edge', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                        }),
                                    }
                                )),
                                'attributes': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "attributes",
                                    }
                                ), ($) => Attribute_List(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                )),
                            }),
                        }
                    )],
                    'attribute assignment': ($): _i_out._T_Statement_List.L.SG => ['attribute assignment', _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'name': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "name",
                                    }
                                ), ($) => ID(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                )),
                                'value': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "value",
                                    }
                                ), ($) => ID(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                )),
                            }),
                        }
                    )],
                    'subgraph': ($): _i_out._T_Statement_List.L.SG => ['subgraph', Subgraph(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    )],
                }),
            }
        ),
    }
)
export const Graph: _i_signatures._T_Graph = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'strict': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "strict",
                }
            ), ($) => _i_generic.process_boolean(
                $,
                {
                    'deserializer': $p['value deserializers']['boolean'],
                }
            )),
            'type': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "type",
                }
            ), ($) => _i_generic.process_unconstrained_state_group(
                $,
                {
                    'states': _pa.dictionary.literal({
                        'graph': ($): _i_out._T_Graph._type.SG => ['graph', _i_generic.process_nothing(
                            $,
                            null
                        )],
                        'digraph': ($): _i_out._T_Graph._type.SG => ['digraph', _i_generic.process_nothing(
                            $,
                            null
                        )],
                    }),
                }
            )),
            'name': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "name",
                }
            ), ($) => _i_generic.process_optional(
                $,
                {
                    'value': ($) => ID(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    ),
                }
            )),
            'statements': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "statements",
                }
            ), ($) => Statement_List(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
        }),
    }
)
