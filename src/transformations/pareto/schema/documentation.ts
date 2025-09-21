import * as _ea from 'exupery-core-alg'

import * as _in from "pareto/dist/generated/interface/schemas/schema/data_types/source"
import * as _in_m from "pareto/dist/generated/interface/schemas/module/data_types/source"
import * as _out from "pareto-fountain-pen/dist/generated/interface/schemas/block/data_types/target"

import { b, l } from "pareto-fountain-pen/dist/shorthands/block"

export const Schema_Tree = ($: _in.Schema_Tree): _out.Block_Part => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'schema': return _ea.ss($, ($) => b.sub([
                b.simple_line(`types:`),
                b.nested_line([
                    l.indent([
                        b.sub_decorated($.types['ordered list'].map(($) => b.sub([
                            b.simple_line($.key)
                        ])))
                    ])
                ]),
                b.simple_line(``),
            ]))
            case 'set': return _ea.ss($, ($) => b.sub([
                b.simple_line(`schemas:`),
                b.nested_line([
                    l.indent([
                        Schemas($)
                    ])
                ]),
                b.simple_line(``),
            ]))
            default: return _ea.au($[0])
        }
    })
}

export const Schemas = ($: _in.Schemas): _out.Block_Part => {
    return b.sub_decorated($['ordered list'].map(($) => b.sub([
        b.simple_line($.key),
        b.nested_line([
            l.indent([
                Schema_Tree($['value']),
            ]),
        ]),
    ])))
}