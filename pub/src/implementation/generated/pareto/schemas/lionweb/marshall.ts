import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/lionweb/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const MetaPointer: _i_signatures._T_MetaPointer = ($, $p) => ['verbose group', _p.dictionary.literal({
    'language': _p.deprecated_cc($['language'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'version': _p.deprecated_cc($['version'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'key': _p.deprecated_cc($['key'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
export const SerializationChunk: _i_signatures._T_SerializationChunk = ($, $p) => ['verbose group', _p.dictionary.literal({
    'serializationFormatVersion': _p.deprecated_cc($['serializationFormatVersion'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'languages': _p.deprecated_cc($['languages'], ($) => ['list', $.__l_map(($) => ['verbose group', _p.dictionary.literal({
        'key': _p.deprecated_cc($['key'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'version': _p.deprecated_cc($['version'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
    })])]),
    'nodes': _p.deprecated_cc($['nodes'], ($) => ['list', $.__l_map(($) => ['verbose group', _p.dictionary.literal({
        'id': _p.deprecated_cc($['id'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'parent': _p.deprecated_cc($['parent'], ($) => ['optional', $.__decide(
            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]],
            () => ['not set', null]
        )]),
        'annotations': _p.deprecated_cc($['annotations'], ($) => ['list', $.__l_map(($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })])]),
        'classifier': _p.deprecated_cc($['classifier'], ($) => MetaPointer(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'containments': _p.deprecated_cc($['containments'], ($) => ['list', $.__l_map(($) => ['verbose group', _p.dictionary.literal({
            'containment': _p.deprecated_cc($['containment'], ($) => MetaPointer(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
            'children': _p.deprecated_cc($['children'], ($) => ['list', $.__l_map(($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })])]),
        })])]),
        'properties': _p.deprecated_cc($['properties'], ($) => ['list', $.__l_map(($) => ['verbose group', _p.dictionary.literal({
            'value': _p.deprecated_cc($['value'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
            'property': _p.deprecated_cc($['property'], ($) => MetaPointer(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
        })])]),
        'references': _p.deprecated_cc($['references'], ($) => ['list', $.__l_map(($) => ['verbose group', _p.dictionary.literal({
            'targets': _p.deprecated_cc($['targets'], ($) => ['list', $.__l_map(($) => ['verbose group', _p.dictionary.literal({
                'reference': _p.deprecated_cc($['reference'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'resolveInfo': _p.deprecated_cc($['resolveInfo'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })])]),
            'reference': _p.deprecated_cc($['reference'], ($) => MetaPointer(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
        })])]),
    })])]),
})]
export const SerializationChunks: _i_signatures._T_SerializationChunks = ($, $p) => ['dictionary', $.__d_map(($) => SerializationChunk(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
