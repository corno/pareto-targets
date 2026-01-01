import * as _p from 'pareto-core-transformer'

//interface

import * as d_in from "pareto/dist/interface/generated/pareto/schemas/schema/data_types/source"
import * as _in_m from "pareto/dist/interface/generated/pareto/schemas/module/data_types/source"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"


export const Schema_Tree = ($: d_in.Schema_Tree): d_out.Group_Part => {
    return _p.cc($, ($) => {
        switch ($[0]) {
            case 'schema': return _p.ss($, ($) => sh.g.sub([
                sh.g.simple_block(`types:`),
                sh.g.nested_block([
                    sh.b.indent([
                        sh.g.sub($.types['ordered list'].map(($) => sh.g.sub([
                            sh.g.simple_block($.key)
                        ])))
                    ])
                ]),
                sh.g.simple_block(``),
            ]))
            case 'set': return _p.ss($, ($) => sh.g.sub([
                sh.g.simple_block(`schemas:`),
                sh.g.nested_block([
                    sh.b.indent([
                        Schemas($)
                    ])
                ]),
                sh.g.simple_block(``),
            ]))
            default: return _p.au($[0])
        }
    })
}

export const Schemas = ($: d_in.Schemas): d_out.Group_Part => {
    return sh.g.sub($['ordered list'].map(($) => sh.g.sub([
        sh.g.simple_block($.key),
        sh.g.nested_block([
            sh.b.indent([
                Schema_Tree($['value']),
            ]),
        ]),
    ])))
}