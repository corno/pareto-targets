
import * as _p from "pareto-core/dist/transformer"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

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
        ($) => $.__l_map(
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
        ($) => $.__l_map(
            ($) => ({
                'id': _p_cc(
                    $['id'],
                    ($) => $
                ),
                'parent': _p_cc(
                    $['parent'],
                    ($) => $.__o_map(
                        ($) => $
                    )
                ),
                'annotations': _p_cc(
                    $['annotations'],
                    ($) => $.__l_map(
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
                    ($) => $.__l_map(
                        ($) => ({
                            'containment': _p_cc(
                                $['containment'],
                                ($) => MetaPointer(
                                    $
                                )
                            ),
                            'children': _p_cc(
                                $['children'],
                                ($) => $.__l_map(
                                    ($) => $
                                )
                            ),
                        })
                    )
                ),
                'properties': _p_cc(
                    $['properties'],
                    ($) => $.__l_map(
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
                    ($) => $.__l_map(
                        ($) => ({
                            'targets': _p_cc(
                                $['targets'],
                                ($) => $.__l_map(
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

export const SerializationChunks: t_signatures.SerializationChunks = ($) => $.__d_map(
    ($, id) => SerializationChunk(
        $
    )
)
