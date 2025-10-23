import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/core/astn_target"
import * as _i_signatures from "../../../interface/schemas/lionweb/marshall"


export const MetaPointer: _i_signatures._T_MetaPointer = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'key': _pa.cc($['key'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'language': _pa.cc($['language'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'version': _pa.cc($['version'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
export const SerializationChunk: _i_signatures._T_SerializationChunk = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'languages': _pa.cc($['languages'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'key': _pa.cc($['key'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'version': _pa.cc($['version'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
    })])]),
    'nodes': _pa.cc($['nodes'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'annotations': _pa.cc($['annotations'], ($) => ['list', $.map(($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })])]),
        'classifier': _pa.cc($['classifier'], ($) => MetaPointer(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'containments': _pa.cc($['containments'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
            'children': _pa.cc($['children'], ($) => ['list', $.map(($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })])]),
            'containment': _pa.cc($['containment'], ($) => MetaPointer(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
        })])]),
        'id': _pa.cc($['id'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'parent': _pa.cc($['parent'], ($) => ['optional', $.transform(
            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]],
            () => ['not set', null]
        )]),
        'properties': _pa.cc($['properties'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
            'property': _pa.cc($['property'], ($) => MetaPointer(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
            'value': _pa.cc($['value'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
        })])]),
        'references': _pa.cc($['references'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
            'reference': _pa.cc($['reference'], ($) => MetaPointer(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
            'targets': _pa.cc($['targets'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
                'reference': _pa.cc($['reference'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'resolveInfo': _pa.cc($['resolveInfo'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })])]),
        })])]),
    })])]),
    'serializationFormatVersion': _pa.cc($['serializationFormatVersion'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
export const SerializationChunks: _i_signatures._T_SerializationChunks = ($, $p) => ['dictionary', $.map(($) => SerializationChunk(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
