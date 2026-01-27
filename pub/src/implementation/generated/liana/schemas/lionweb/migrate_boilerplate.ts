
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/lionweb/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/lionweb/data"
export const MetaPointer: t_signatures.MetaPointer = ($,) => ({
    'language': _p.deprecated_cc($['language'], ($,) => $),
    'version': _p.deprecated_cc($['version'], ($,) => $),
    'key': _p.deprecated_cc($['key'], ($,) => $),
})
export const SerializationChunk: t_signatures.SerializationChunk = ($,) => ({
    'serializationFormatVersion': _p.deprecated_cc($['serializationFormatVersion'], ($,) => $),
    'languages': _p.deprecated_cc($['languages'], ($,) => $.__l_map(($,) => ({
        'key': _p.deprecated_cc($['key'], ($,) => $),
        'version': _p.deprecated_cc($['version'], ($,) => $),
    }))),
    'nodes': _p.deprecated_cc($['nodes'], ($,) => $.__l_map(($,) => ({
        'id': _p.deprecated_cc($['id'], ($,) => $),
        'parent': _p.deprecated_cc($['parent'], ($,) => $.__o_map(($,) => $)),
        'annotations': _p.deprecated_cc($['annotations'], ($,) => $.__l_map(($,) => $)),
        'classifier': _p.deprecated_cc($['classifier'], ($,) => MetaPointer($)),
        'containments': _p.deprecated_cc($['containments'], ($,) => $.__l_map(($,) => ({
            'containment': _p.deprecated_cc($['containment'], ($,) => MetaPointer($)),
            'children': _p.deprecated_cc($['children'], ($,) => $.__l_map(($,) => $)),
        }))),
        'properties': _p.deprecated_cc($['properties'], ($,) => $.__l_map(($,) => ({
            'value': _p.deprecated_cc($['value'], ($,) => $),
            'property': _p.deprecated_cc($['property'], ($,) => MetaPointer($)),
        }))),
        'references': _p.deprecated_cc($['references'], ($,) => $.__l_map(($,) => ({
            'targets': _p.deprecated_cc($['targets'], ($,) => $.__l_map(($,) => ({
                'reference': _p.deprecated_cc($['reference'], ($,) => $),
                'resolveInfo': _p.deprecated_cc($['resolveInfo'], ($,) => $),
            }))),
            'reference': _p.deprecated_cc($['reference'], ($,) => MetaPointer($)),
        }))),
    }))),
})
export const SerializationChunks: t_signatures.SerializationChunks = ($,) => $.__d_map(($,id,) => SerializationChunk($))
