import * as _p from 'pareto-core-refiner'
import * as _pdev from 'pareto-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/alan_light/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/alan_light/data_types/target"


export const Identifier: _i_signatures._T_Identifier = ($, $p) => _i_generic.process_text(
    $,
    null
)
export const Path: _i_signatures._T_Path = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'up steps': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "up steps",
                }
            ), ($) => _i_generic.process_unconstrained_list(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => null,
                        }
                    ),
                }
            )),
            'context': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "context",
                }
            ), ($) => _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'sibling': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "sibling",
                            }
                        ), ($) => _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => null,
                            }
                        )),
                        'state constraint': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "state constraint",
                            }
                        ), ($) => _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'name': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "name",
                                        }
                                    ), ($) => Identifier(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                }),
                            }
                        )),
                    }),
                }
            )),
            'selection steps': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "selection steps",
                }
            ), ($) => _i_generic.process_unconstrained_list(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'group': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "group",
                                    }
                                ), ($) => _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'name': _p.deprecated_cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "name",
                                                }
                                            ), ($) => Identifier(
                                                $,
                                                {
                                                    'value deserializers': $p['value deserializers'],
                                                }
                                            )),
                                        }),
                                    }
                                )),
                                'state constraint': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "state constraint",
                                    }
                                ), ($) => _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'name': _p.deprecated_cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "name",
                                                }
                                            ), ($) => Identifier(
                                                $,
                                                {
                                                    'value deserializers': $p['value deserializers'],
                                                }
                                            )),
                                        }),
                                    }
                                )),
                                'reference': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "reference",
                                    }
                                ), ($) => _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'name': _p.deprecated_cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "name",
                                                }
                                            ), ($) => Identifier(
                                                $,
                                                {
                                                    'value deserializers': $p['value deserializers'],
                                                }
                                            )),
                                        }),
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
export const Node: _i_signatures._T_Node = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'properties': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "properties",
                }
            ), ($) => _i_generic.process_unconstrained_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'type': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "type",
                                    }
                                ), ($) => _i_generic.process_unconstrained_state_group(
                                    $,
                                    {
                                        'states': _p.dictionary.literal({
                                            'collection': ($): _i_out._T_Node.properties.D._type.SG => ['collection', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'node': _p.deprecated_cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "node",
                                                            }
                                                        ), ($) => Node(
                                                            $,
                                                            {
                                                                'value deserializers': $p['value deserializers'],
                                                            }
                                                        )),
                                                        'key': _p.deprecated_cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "key",
                                                            }
                                                        ), ($) => Identifier(
                                                            $,
                                                            {
                                                                'value deserializers': $p['value deserializers'],
                                                            }
                                                        )),
                                                    }),
                                                }
                                            )],
                                            'group': ($): _i_out._T_Node.properties.D._type.SG => ['group', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'node': _p.deprecated_cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "node",
                                                            }
                                                        ), ($) => Node(
                                                            $,
                                                            {
                                                                'value deserializers': $p['value deserializers'],
                                                            }
                                                        )),
                                                    }),
                                                }
                                            )],
                                            'text': ($): _i_out._T_Node.properties.D._type.SG => ['text', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'constraint': _p.deprecated_cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "constraint",
                                                            }
                                                        ), ($) => _i_generic.process_optional(
                                                            $,
                                                            {
                                                                'value': ($) => _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'path': _p.deprecated_cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "path",
                                                                                }
                                                                            ), ($) => Path(
                                                                                $,
                                                                                {
                                                                                    'value deserializers': $p['value deserializers'],
                                                                                }
                                                                            )),
                                                                            'dictionary': _p.deprecated_cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "dictionary",
                                                                                }
                                                                            ), ($) => Identifier(
                                                                                $,
                                                                                {
                                                                                    'value deserializers': $p['value deserializers'],
                                                                                }
                                                                            )),
                                                                        }),
                                                                    }
                                                                ),
                                                            }
                                                        )),
                                                    }),
                                                }
                                            )],
                                            'state group': ($): _i_out._T_Node.properties.D._type.SG => ['state group', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'states': _p.deprecated_cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "states",
                                                            }
                                                        ), ($) => _i_generic.process_unconstrained_dictionary(
                                                            $,
                                                            {
                                                                'value': ($) => _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'constraints': _p.deprecated_cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "constraints",
                                                                                }
                                                                            ), ($) => _i_generic.process_unconstrained_dictionary(
                                                                                $,
                                                                                {
                                                                                    'value': ($) => _i_generic.process_group(
                                                                                        $,
                                                                                        {
                                                                                            'properties': ($) => ({
                                                                                                'path': _p.deprecated_cc(_i_generic.get_entry(
                                                                                                    $,
                                                                                                    {
                                                                                                        'key': "path",
                                                                                                    }
                                                                                                ), ($) => Path(
                                                                                                    $,
                                                                                                    {
                                                                                                        'value deserializers': $p['value deserializers'],
                                                                                                    }
                                                                                                )),
                                                                                            }),
                                                                                        }
                                                                                    ),
                                                                                }
                                                                            )),
                                                                            'node': _p.deprecated_cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "node",
                                                                                }
                                                                            ), ($) => Node(
                                                                                $,
                                                                                {
                                                                                    'value deserializers': $p['value deserializers'],
                                                                                }
                                                                            )),
                                                                        }),
                                                                    }
                                                                ),
                                                            }
                                                        )),
                                                    }),
                                                }
                                            )],
                                        }),
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
export const Root: _i_signatures._T_Root = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'numerical types': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "numerical types",
                }
            ), ($) => _i_generic.process_unconstrained_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => null,
                        }
                    ),
                }
            )),
            'root': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "root",
                }
            ), ($) => Node(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
        }),
    }
)
