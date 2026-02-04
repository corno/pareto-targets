import * as _p from 'pareto-core/dist/expression'

import * as d_in from "../../../../../interface/generated/liana/schemas/alan_light/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

import { $$ as s_apostrophed } from "../../../primitives/text/serializers/apostrophed"



export const Root = (
    $: d_in.Root
): d_out.Group => sh.group([
    sh.g.nested_block([
        sh.b.literal("users"),
        sh.b.indent([
            sh.g.simple_block("anonymous")
        ]),
    ]),
    sh.g.simple_block(""),
    sh.g.simple_block("interfaces"),
    sh.g.simple_block(""),
    sh.g.nested_block([
        sh.b.literal("root "),
        Node($.root)
    ]),
    sh.g.simple_block(""),
    sh.g.nested_block([
        sh.b.literal("numerical-types "),
        sh.b.indent([
        ]),
    ]),
])

export const Identifier = (
    $: d_in.Identifier
): d_out.Block_Part => sh.b.snippet(s_apostrophed($))

export const Node = (
    $: d_in.Node
): d_out.Block_Part => sh.b.sub([
    sh.b.literal("{"),
    sh.b.indent([
        sh.g.sub(
            _p.list.from_dictionary(
                $.properties,
                ($, id) => sh.g.nested_block([
                    Identifier(id),
                    sh.b.literal(": "),
                    _p.decide.state($.type, ($) => {
                        switch ($[0]) {
                            case 'collection': return _p.ss($, ($) => sh.b.sub([
                                sh.b.literal("collection ["),
                                Identifier($.id),
                                sh.b.literal("] "),
                                Node($.node)
                            ]))
                            case 'group': return _p.ss($, ($) => sh.b.sub([
                                sh.b.literal("group "),
                                Node($.node)
                            ]))
                            case 'state group': return _p.ss($, ($) => _p.boolean.dictionary_is_empty($.states)
                                ? sh.b.literal("group { }")
                                : sh.b.sub([
                                    sh.b.literal("stategroup ("),
                                    sh.b.indent([
                                        sh.g.sub(
                                            _p.list.from_dictionary(
                                                $.states,
                                                ($, id) => sh.g.nested_block([
                                                    Identifier(id),
                                                    sh.b.literal(" "),
                                                    Node($.node)
                                                ])
                                            )
                                        )
                                    ]),
                                    sh.b.literal(")")
                                ]))
                            case 'text': return _p.ss($, ($) => sh.b.literal("text"))
                            default: return _p.au($[0])
                        }
                    })
                ])
            )
        ),

    ]),
    sh.b.literal("}"),
])