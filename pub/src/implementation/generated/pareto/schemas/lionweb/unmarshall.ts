import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/lionweb/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/lionweb/data_types/target"


export const MetaPointer: _i_signatures._T_MetaPointer = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'language': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "language",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
            'version': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "version",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
            'key': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "key",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
        }),
    }
)
export const SerializationChunk: _i_signatures._T_SerializationChunk = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'serializationFormatVersion': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "serializationFormatVersion",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
            'languages': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "languages",
                }
            ), ($) => _i_generic.process_unconstrained_list(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'key': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "key",
                                    }
                                ), ($) => _i_generic.process_text(
                                    $,
                                    null
                                )),
                                'version': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "version",
                                    }
                                ), ($) => _i_generic.process_text(
                                    $,
                                    null
                                )),
                            }),
                        }
                    ),
                }
            )),
            'nodes': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "nodes",
                }
            ), ($) => _i_generic.process_unconstrained_list(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'id': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "id",
                                    }
                                ), ($) => _i_generic.process_text(
                                    $,
                                    null
                                )),
                                'parent': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "parent",
                                    }
                                ), ($) => _i_generic.process_optional(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_text(
                                            $,
                                            null
                                        ),
                                    }
                                )),
                                'annotations': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "annotations",
                                    }
                                ), ($) => _i_generic.process_unconstrained_list(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_text(
                                            $,
                                            null
                                        ),
                                    }
                                )),
                                'classifier': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "classifier",
                                    }
                                ), ($) => MetaPointer(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                )),
                                'containments': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "containments",
                                    }
                                ), ($) => _i_generic.process_unconstrained_list(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'containment': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "containment",
                                                        }
                                                    ), ($) => MetaPointer(
                                                        $,
                                                        {
                                                            'value deserializers': $p['value deserializers'],
                                                        }
                                                    )),
                                                    'children': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "children",
                                                        }
                                                    ), ($) => _i_generic.process_unconstrained_list(
                                                        $,
                                                        {
                                                            'value': ($) => _i_generic.process_text(
                                                                $,
                                                                null
                                                            ),
                                                        }
                                                    )),
                                                }),
                                            }
                                        ),
                                    }
                                )),
                                'properties': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "properties",
                                    }
                                ), ($) => _i_generic.process_unconstrained_list(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'value': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "value",
                                                        }
                                                    ), ($) => _i_generic.process_text(
                                                        $,
                                                        null
                                                    )),
                                                    'property': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "property",
                                                        }
                                                    ), ($) => MetaPointer(
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
                                'references': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "references",
                                    }
                                ), ($) => _i_generic.process_unconstrained_list(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'targets': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "targets",
                                                        }
                                                    ), ($) => _i_generic.process_unconstrained_list(
                                                        $,
                                                        {
                                                            'value': ($) => _i_generic.process_group(
                                                                $,
                                                                {
                                                                    'properties': ($) => ({
                                                                        'reference': _pa.cc(_i_generic.get_entry(
                                                                            $,
                                                                            {
                                                                                'key': "reference",
                                                                            }
                                                                        ), ($) => _i_generic.process_text(
                                                                            $,
                                                                            null
                                                                        )),
                                                                        'resolveInfo': _pa.cc(_i_generic.get_entry(
                                                                            $,
                                                                            {
                                                                                'key': "resolveInfo",
                                                                            }
                                                                        ), ($) => _i_generic.process_text(
                                                                            $,
                                                                            null
                                                                        )),
                                                                    }),
                                                                }
                                                            ),
                                                        }
                                                    )),
                                                    'reference': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "reference",
                                                        }
                                                    ), ($) => MetaPointer(
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
                    ),
                }
            )),
        }),
    }
)
export const SerializationChunks: _i_signatures._T_SerializationChunks = ($, $p) => _i_generic.process_unconstrained_dictionary(
    $,
    {
        'value': ($) => SerializationChunk(
            $,
            {
                'value deserializers': $p['value deserializers'],
            }
        ),
    }
)
