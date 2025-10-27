import * as _ea from 'exupery-core-alg'

import * as _in from "pareto/dist/generated/interface/schemas/schema/data_types/source"
import * as _in_m from "pareto/dist/generated/interface/schemas/module/data_types/source"
import * as _out from "pareto-fountain-pen/dist/generated/interface/schemas/block/data_types/target"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Schema_Tree = ($: _in.Schema_Tree): _out.Group_Part => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'schema': return _ea.ss($, ($) => sh.g.sub([
                sh.g.simple_line(`types:`),
                sh.g.nested_block([
                    sh.b.indent([
                        sh.g.sub($.types['ordered list'].map(($) => sh.g.sub([
                            sh.g.simple_line($.key)
                        ])))
                    ])
                ]),
                sh.g.simple_line(``),
            ]))
            case 'set': return _ea.ss($, ($) => sh.g.sub([
                sh.g.simple_line(`schemas:`),
                sh.g.nested_block([
                    sh.b.indent([
                        Schemas($)
                    ])
                ]),
                sh.g.simple_line(``),
            ]))
            default: return _ea.au($[0])
        }
    })
}

export const Schemas = ($: _in.Schemas): _out.Group_Part => {
    return sh.g.sub($['ordered list'].map(($) => sh.g.sub([
        sh.g.simple_line($.key),
        sh.g.nested_block([
            sh.b.indent([
                Schema_Tree($['value']),
            ]),
        ]),
    ])))
}