import * as _pa from 'pareto-core-transformer'
import * as _pd from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/lionweb/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const MetaPointer: _i_signatures._T_MetaPointer = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'language': _pa.deprecated_cc($['language'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'version': _pa.deprecated_cc($['version'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'key': _pa.deprecated_cc($['key'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
export const SerializationChunk: _i_signatures._T_SerializationChunk = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'serializationFormatVersion': _pa.deprecated_cc($['serializationFormatVersion'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'languages': _pa.deprecated_cc($['languages'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary.literal({
        'key': _pa.deprecated_cc($['key'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'version': _pa.deprecated_cc($['version'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
    })])]),
    'nodes': _pa.deprecated_cc($['nodes'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary.literal({
        'id': _pa.deprecated_cc($['id'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'parent': _pa.deprecated_cc($['parent'], ($) => ['optional', $.transform(
            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]],
            () => ['not set', null]
        )]),
        'annotations': _pa.deprecated_cc($['annotations'], ($) => ['list', $.map(($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })])]),
        'classifier': _pa.deprecated_cc($['classifier'], ($) => MetaPointer(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'containments': _pa.deprecated_cc($['containments'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary.literal({
            'containment': _pa.deprecated_cc($['containment'], ($) => MetaPointer(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
            'children': _pa.deprecated_cc($['children'], ($) => ['list', $.map(($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })])]),
        })])]),
        'properties': _pa.deprecated_cc($['properties'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary.literal({
            'value': _pa.deprecated_cc($['value'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
            'property': _pa.deprecated_cc($['property'], ($) => MetaPointer(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
        })])]),
        'references': _pa.deprecated_cc($['references'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary.literal({
            'targets': _pa.deprecated_cc($['targets'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary.literal({
                'reference': _pa.deprecated_cc($['reference'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'resolveInfo': _pa.deprecated_cc($['resolveInfo'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })])]),
            'reference': _pa.deprecated_cc($['reference'], ($) => MetaPointer(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
        })])]),
    })])]),
})]
export const SerializationChunks: _i_signatures._T_SerializationChunks = ($, $p) => ['dictionary', $.map(($) => SerializationChunk(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
