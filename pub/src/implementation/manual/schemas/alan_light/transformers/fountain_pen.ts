import * as _pt from 'pareto-core-transformer'

import * as d_in from "../../../../../interface/generated/pareto/schemas/alan_light/data_types/target"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

import { $$ as s_apostrophed } from "../../../primitives/text/serializers/apostrophed"



export const Root = (
    $: d_in.Root
): d_out.Group => {
    return sh.group([
        sh.g.nested_block([
            sh.b.snippet("users"),
            sh.b.indent([
                sh.g.simple_block("anonymous")
            ]),
        ]),
        sh.g.simple_block(""),
        sh.g.simple_block("interfaces"),
        sh.g.simple_block(""),
        sh.g.nested_block([
            sh.b.snippet("root "),
            Node($.root)
        ]),
        sh.g.simple_block(""),
        sh.g.nested_block([
            sh.b.snippet("numerical-types "),
            sh.b.indent([
            ]),
        ]),

    ])
}

export const Identifier = (
    $: d_in.Identifier
): d_out.Block_Part => sh.b.snippet(s_apostrophed($))

export const Node = (
    $: d_in.Node
): d_out.Block_Part => {
    return sh.b.sub([
        sh.b.snippet("{"),
        sh.b.indent([
            sh.g.sub($.properties.to_list(($, key) => {
                return sh.g.nested_block([
                    Identifier(key),
                    sh.b.snippet(": "),
                    _pt.cc($.type, ($) => {
                        switch ($[0]) {
                            case 'collection': return _pt.ss($, ($) => sh.b.sub([
                                sh.b.snippet("collection ["),
                                Identifier($.key),
                                sh.b.snippet("] "),
                                Node($.node)
                            ]))
                            case 'group': return _pt.ss($, ($) => sh.b.sub([
                                sh.b.snippet("group "),
                                Node($.node)
                            ]))
                            case 'state group': return _pt.ss($, ($) => $.states.is_empty()
                                ? sh.b.snippet("group { }")
                                : sh.b.sub([
                                    sh.b.snippet("stategroup ("),
                                    sh.b.indent([
                                        sh.g.sub($.states.to_list(($, key) => {
                                            return sh.g.nested_block([
                                                Identifier(key),
                                                sh.b.snippet(" "),
                                                Node($.node)
                                            ])
                                        }))
                                    ]),
                                    sh.b.snippet(")")
                                ]))
                            case 'text': return _pt.ss($, ($) => sh.b.snippet("text"))
                            default: return _pt.au($[0])
                        }
                    })
                ])
            })),

        ]),
        sh.b.snippet("}"),
    ])
}