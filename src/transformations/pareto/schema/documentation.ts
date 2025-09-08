import * as _ea from 'exupery-core-alg'

import * as _in from "pareto/dist/generated/interface/schemas/schema/resolved"
import * as _in_m from "pareto/dist/generated/interface/schemas/module/resolved"
import * as _out from "pareto-fountain-pen/dist/generated/interface/schemas/block/unconstrained"

import { b, l, d } from "pareto-fountain-pen/dist/shorthands/block"

export const Schemas = ($: _in.Schemas): _out.Block_Part => {
    return b.sub_decorated($['ordered list'].map(($) => b.sub([
        b.simple_line($.key),
        b.nested_line([
            l.indent([
                _ea.cc($.value, ($) => {
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

            ]),
        ]),
    ])))
}