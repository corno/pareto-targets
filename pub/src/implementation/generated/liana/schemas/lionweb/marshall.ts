
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/lionweb/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"
export const MetaPointer: t_signatures.MetaPointer = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'language': _p.deprecated_cc($['language'], ($,) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'version': _p.deprecated_cc($['version'], ($,) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'key': _p.deprecated_cc($['key'], ($,) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
}))]]
export const SerializationChunk: t_signatures.SerializationChunk = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'serializationFormatVersion': _p.deprecated_cc($['serializationFormatVersion'], ($,) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'languages': _p.deprecated_cc($['languages'], ($,) => ['list', $.__l_map(($,) => ['group', ['verbose', _p.dictionary.literal(({
        'key': _p.deprecated_cc($['key'], ($,) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'version': _p.deprecated_cc($['version'], ($,) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
    }))]])]),
    'nodes': _p.deprecated_cc($['nodes'], ($,) => ['list', $.__l_map(($,) => ['group', ['verbose', _p.dictionary.literal(({
        'id': _p.deprecated_cc($['id'], ($,) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'parent': _p.deprecated_cc($['parent'], ($,) => ['optional', $(($,) => ['set', ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]], () => ['set', ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]])]),
        'annotations': _p.deprecated_cc($['annotations'], ($,) => ['list', $.__l_map(($,) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })])]),
        'classifier': _p.deprecated_cc($['classifier'], ($,) => MetaPointer($)),
        'containments': _p.deprecated_cc($['containments'], ($,) => ['list', $.__l_map(($,) => ['group', ['verbose', _p.dictionary.literal(({
            'containment': _p.deprecated_cc($['containment'], ($,) => MetaPointer($)),
            'children': _p.deprecated_cc($['children'], ($,) => ['list', $.__l_map(($,) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })])]),
        }))]])]),
        'properties': _p.deprecated_cc($['properties'], ($,) => ['list', $.__l_map(($,) => ['group', ['verbose', _p.dictionary.literal(({
            'value': _p.deprecated_cc($['value'], ($,) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
            'property': _p.deprecated_cc($['property'], ($,) => MetaPointer($)),
        }))]])]),
        'references': _p.deprecated_cc($['references'], ($,) => ['list', $.__l_map(($,) => ['group', ['verbose', _p.dictionary.literal(({
            'targets': _p.deprecated_cc($['targets'], ($,) => ['list', $.__l_map(($,) => ['group', ['verbose', _p.dictionary.literal(({
                'reference': _p.deprecated_cc($['reference'], ($,) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'resolveInfo': _p.deprecated_cc($['resolveInfo'], ($,) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            }))]])]),
            'reference': _p.deprecated_cc($['reference'], ($,) => MetaPointer($)),
        }))]])]),
    }))]])]),
}))]]
export const SerializationChunks: t_signatures.SerializationChunks = ($,) => ['dictionary', $.__d_map(($,key,) => SerializationChunk($))]
