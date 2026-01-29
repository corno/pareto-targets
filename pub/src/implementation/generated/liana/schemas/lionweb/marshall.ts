
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/lionweb/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

export const MetaPointer: t_signatures.MetaPointer = ($) => ['group', ['verbose', _p.dictionary.literal(
    ({
        'language': _p_cc(
            $['language'],
            ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]
        ),
        'version': _p_cc(
            $['version'],
            ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]
        ),
        'key': _p_cc(
            $['key'],
            ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]
        ),
    })
)]]

export const SerializationChunk: t_signatures.SerializationChunk = ($) => ['group', ['verbose', _p.dictionary.literal(
    ({
        'serializationFormatVersion': _p_cc(
            $['serializationFormatVersion'],
            ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]
        ),
        'languages': _p_cc(
            $['languages'],
            ($) => ['list', $.__l_map(
                ($) => ['group', ['verbose', _p.dictionary.literal(
                    ({
                        'key': _p_cc(
                            $['key'],
                            ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]
                        ),
                        'version': _p_cc(
                            $['version'],
                            ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]
                        ),
                    })
                )]]
            )]
        ),
        'nodes': _p_cc(
            $['nodes'],
            ($) => ['list', $.__l_map(
                ($) => ['group', ['verbose', _p.dictionary.literal(
                    ({
                        'id': _p_cc(
                            $['id'],
                            ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]
                        ),
                        'parent': _p_cc(
                            $['parent'],
                            ($) => ['optional', $.__decide(
                                ($): t_out.Value.optional => ['set', ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]],
                                () => ['not set', null]
                            )]
                        ),
                        'annotations': _p_cc(
                            $['annotations'],
                            ($) => ['list', $.__l_map(
                                ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]
                            )]
                        ),
                        'classifier': _p_cc(
                            $['classifier'],
                            ($) => MetaPointer(
                                $
                            )
                        ),
                        'containments': _p_cc(
                            $['containments'],
                            ($) => ['list', $.__l_map(
                                ($) => ['group', ['verbose', _p.dictionary.literal(
                                    ({
                                        'containment': _p_cc(
                                            $['containment'],
                                            ($) => MetaPointer(
                                                $
                                            )
                                        ),
                                        'children': _p_cc(
                                            $['children'],
                                            ($) => ['list', $.__l_map(
                                                ($) => ['text', ({
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                })]
                                            )]
                                        ),
                                    })
                                )]]
                            )]
                        ),
                        'properties': _p_cc(
                            $['properties'],
                            ($) => ['list', $.__l_map(
                                ($) => ['group', ['verbose', _p.dictionary.literal(
                                    ({
                                        'value': _p_cc(
                                            $['value'],
                                            ($) => ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]
                                        ),
                                        'property': _p_cc(
                                            $['property'],
                                            ($) => MetaPointer(
                                                $
                                            )
                                        ),
                                    })
                                )]]
                            )]
                        ),
                        'references': _p_cc(
                            $['references'],
                            ($) => ['list', $.__l_map(
                                ($) => ['group', ['verbose', _p.dictionary.literal(
                                    ({
                                        'targets': _p_cc(
                                            $['targets'],
                                            ($) => ['list', $.__l_map(
                                                ($) => ['group', ['verbose', _p.dictionary.literal(
                                                    ({
                                                        'reference': _p_cc(
                                                            $['reference'],
                                                            ($) => ['text', ({
                                                                'delimiter': ['quote', null],
                                                                'value': $,
                                                            })]
                                                        ),
                                                        'resolveInfo': _p_cc(
                                                            $['resolveInfo'],
                                                            ($) => ['text', ({
                                                                'delimiter': ['quote', null],
                                                                'value': $,
                                                            })]
                                                        ),
                                                    })
                                                )]]
                                            )]
                                        ),
                                        'reference': _p_cc(
                                            $['reference'],
                                            ($) => MetaPointer(
                                                $
                                            )
                                        ),
                                    })
                                )]]
                            )]
                        ),
                    })
                )]]
            )]
        ),
    })
)]]

export const SerializationChunks: t_signatures.SerializationChunks = ($) => ['dictionary', $.__d_map(
    ($, id) => SerializationChunk(
        $
    )
)]
