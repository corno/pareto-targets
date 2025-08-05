import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_out from "../../../interface/schemas/lionweb/unconstrained"
import * as _i_signatures from "../../../interface/schemas/lionweb/unmarshall"


export const MetaPointer: _i_signatures._T_MetaPointer = ($) => _i_generic.process_group(
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
        }),
    }
)
export const SerializationChunk: _i_signatures._T_SerializationChunk = ($) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
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
                                    null
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
                                                    'containment': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "containment",
                                                        }
                                                    ), ($) => MetaPointer(
                                                        $,
                                                        null
                                                    )),
                                                }),
                                            }
                                        ),
                                    }
                                )),
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
                                                    'property': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "property",
                                                        }
                                                    ), ($) => MetaPointer(
                                                        $,
                                                        null
                                                    )),
                                                    'value': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "value",
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
                                                    'reference': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "reference",
                                                        }
                                                    ), ($) => MetaPointer(
                                                        $,
                                                        null
                                                    )),
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
            'serializationFormatVersion': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "serializationFormatVersion",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
        }),
    }
)
export const SerializationChunks: _i_signatures._T_SerializationChunks = ($) => _i_generic.process_unconstrained_dictionary(
    $,
    {
        'value': ($) => SerializationChunk(
            $,
            null
        ),
    }
)
