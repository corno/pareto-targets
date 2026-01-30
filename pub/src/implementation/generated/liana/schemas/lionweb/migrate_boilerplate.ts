
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/lionweb/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/lionweb/data"

export const MetaPointer: t_signatures.MetaPointer = ($) => ({
    'language': _p_cc(
        $['language'],
        ($) => $
    ),
    'version': _p_cc(
        $['version'],
        ($) => $
    ),
    'key': _p_cc(
        $['key'],
        ($) => $
    ),
})

export const SerializationChunk: t_signatures.SerializationChunk = ($) => ({
    'serializationFormatVersion': _p_cc(
        $['serializationFormatVersion'],
        ($) => $
    ),
    'languages': _p_cc(
        $['languages'],
        ($) => _p.list.map(
            $,
            ($) => ({
                'key': _p_cc(
                    $['key'],
                    ($) => $
                ),
                'version': _p_cc(
                    $['version'],
                    ($) => $
                ),
            })
        )
    ),
    'nodes': _p_cc(
        $['nodes'],
        ($) => _p.list.map(
            $,
            ($) => ({
                'id': _p_cc(
                    $['id'],
                    ($) => $
                ),
                'parent': _p_cc(
                    $['parent'],
                    ($) => _p.optional.map(
                        $,
                        ($) => $
                    )
                ),
                'annotations': _p_cc(
                    $['annotations'],
                    ($) => _p.list.map(
                        $,
                        ($) => $
                    )
                ),
                'classifier': _p_cc(
                    $['classifier'],
                    ($) => MetaPointer(
                        $
                    )
                ),
                'containments': _p_cc(
                    $['containments'],
                    ($) => _p.list.map(
                        $,
                        ($) => ({
                            'containment': _p_cc(
                                $['containment'],
                                ($) => MetaPointer(
                                    $
                                )
                            ),
                            'children': _p_cc(
                                $['children'],
                                ($) => _p.list.map(
                                    $,
                                    ($) => $
                                )
                            ),
                        })
                    )
                ),
                'properties': _p_cc(
                    $['properties'],
                    ($) => _p.list.map(
                        $,
                        ($) => ({
                            'value': _p_cc(
                                $['value'],
                                ($) => $
                            ),
                            'property': _p_cc(
                                $['property'],
                                ($) => MetaPointer(
                                    $
                                )
                            ),
                        })
                    )
                ),
                'references': _p_cc(
                    $['references'],
                    ($) => _p.list.map(
                        $,
                        ($) => ({
                            'targets': _p_cc(
                                $['targets'],
                                ($) => _p.list.map(
                                    $,
                                    ($) => ({
                                        'reference': _p_cc(
                                            $['reference'],
                                            ($) => $
                                        ),
                                        'resolveInfo': _p_cc(
                                            $['resolveInfo'],
                                            ($) => $
                                        ),
                                    })
                                )
                            ),
                            'reference': _p_cc(
                                $['reference'],
                                ($) => MetaPointer(
                                    $
                                )
                            ),
                        })
                    )
                ),
            })
        )
    ),
})

export const SerializationChunks: t_signatures.SerializationChunks = ($) => _p.dictionary.map(
    $,
    ($, id) => SerializationChunk(
        $
    )
)
