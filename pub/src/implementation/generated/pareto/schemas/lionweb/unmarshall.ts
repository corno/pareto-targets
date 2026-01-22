    import * as _p from 'pareto-core/dist/refiner'
    import * as _pdev from 'pareto-core-dev'
    
    import * as _i_generic from "../../generic/unmarshall"
    import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/lionweb/unmarshall"
    import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
    import * as _i_out from "../../../../../interface/generated/pareto/schemas/lionweb/data_types/target"
    
    
    export const MetaPointer: _i_signatures._T_MetaPointer = ($, $p) => _i_generic.process_group(
        $,
        {
            'properties': ($) => ({
                'language': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "language",
                    }
                ), ($) => _i_generic.process_text(
                    $,
                    null
                )),
                'version': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "version",
                    }
                ), ($) => _i_generic.process_text(
                    $,
                    null
                )),
                'key': _p.deprecated_cc(_i_generic.get_entry(
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
                'serializationFormatVersion': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "serializationFormatVersion",
                    }
                ), ($) => _i_generic.process_text(
                    $,
                    null
                )),
                'languages': _p.deprecated_cc(_i_generic.get_entry(
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
                                    'key': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "key",
                                        }
                                    ), ($) => _i_generic.process_text(
                                        $,
                                        null
                                    )),
                                    'version': _p.deprecated_cc(_i_generic.get_entry(
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
                'nodes': _p.deprecated_cc(_i_generic.get_entry(
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
                                    'id': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "id",
                                        }
                                    ), ($) => _i_generic.process_text(
                                        $,
                                        null
                                    )),
                                    'parent': _p.deprecated_cc(_i_generic.get_entry(
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
                                    'annotations': _p.deprecated_cc(_i_generic.get_entry(
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
                                    'classifier': _p.deprecated_cc(_i_generic.get_entry(
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
                                    'containments': _p.deprecated_cc(_i_generic.get_entry(
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
                                                        'containment': _p.deprecated_cc(_i_generic.get_entry(
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
                                                        'children': _p.deprecated_cc(_i_generic.get_entry(
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
                                    'properties': _p.deprecated_cc(_i_generic.get_entry(
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
                                                        'value': _p.deprecated_cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "value",
                                                            }
                                                        ), ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        )),
                                                        'property': _p.deprecated_cc(_i_generic.get_entry(
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
                                    'references': _p.deprecated_cc(_i_generic.get_entry(
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
                                                        'targets': _p.deprecated_cc(_i_generic.get_entry(
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
                                                                            'reference': _p.deprecated_cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "reference",
                                                                                }
                                                                            ), ($) => _i_generic.process_text(
                                                                                $,
                                                                                null
                                                                            )),
                                                                            'resolveInfo': _p.deprecated_cc(_i_generic.get_entry(
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
                                                        'reference': _p.deprecated_cc(_i_generic.get_entry(
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
