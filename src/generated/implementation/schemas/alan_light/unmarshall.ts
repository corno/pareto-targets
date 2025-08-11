import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_in from "../../../interface/core/astn_source"
import * as _i_out from "../../../interface/schemas/alan_light/data_types/unconstrained"
import * as _i_signatures from "../../../interface/schemas/alan_light/unmarshall"


export const Identifier: _i_signatures._T_Identifier = ($, $p) => _i_generic.process_text(
    $,
    null
)
export const Node: _i_signatures._T_Node = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'properties': _pa.cc(_i_generic.get_entry(
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
                                'type': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "type",
                                    }
                                ), ($) => _i_generic.process_unconstrained_state_group(
                                    $,
                                    {
                                        'states': _pa.dictionary_literal({
                                            'collection': ($): _i_out._T_Node.properties.D._type.SG => ['collection', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'key': _pa.cc(_i_generic.get_entry(
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
                                                        'node': _pa.cc(_i_generic.get_entry(
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
                                            'group': ($): _i_out._T_Node.properties.D._type.SG => ['group', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'node': _pa.cc(_i_generic.get_entry(
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
                                            'state group': ($): _i_out._T_Node.properties.D._type.SG => ['state group', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'states': _pa.cc(_i_generic.get_entry(
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
                                                                            'constraints': _pa.cc(_i_generic.get_entry(
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
                                                                                                'path': _pa.cc(_i_generic.get_entry(
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
                                                                            'node': _pa.cc(_i_generic.get_entry(
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
                                            'text': ($): _i_out._T_Node.properties.D._type.SG => ['text', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'constraint': _pa.cc(_i_generic.get_entry(
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
                                                                            'dictionary': _pa.cc(_i_generic.get_entry(
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
                                                                            'path': _pa.cc(_i_generic.get_entry(
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
export const Path: _i_signatures._T_Path = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'context': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "context",
                }
            ), ($) => _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'sibling': _pa.cc(_i_generic.get_entry(
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
                        'state constraint': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "state constraint",
                            }
                        ), ($) => _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'name': _pa.cc(_i_generic.get_entry(
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
            'selection steps': _pa.cc(_i_generic.get_entry(
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
                                'group': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "group",
                                    }
                                ), ($) => _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'name': _pa.cc(_i_generic.get_entry(
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
                                'reference': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "reference",
                                    }
                                ), ($) => _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'name': _pa.cc(_i_generic.get_entry(
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
                                'state constraint': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "state constraint",
                                    }
                                ), ($) => _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'name': _pa.cc(_i_generic.get_entry(
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
            'up steps': _pa.cc(_i_generic.get_entry(
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
        }),
    }
)
export const Root: _i_signatures._T_Root = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'numerical types': _pa.cc(_i_generic.get_entry(
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
            'root': _pa.cc(_i_generic.get_entry(
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
