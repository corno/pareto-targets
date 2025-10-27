import * as pa from 'exupery-core-alg'

import * as _in from "../../generated/interface/schemas/alan_light/data_types/target"
import * as _out from "pareto-fountain-pen/dist/generated/interface/schemas/block/data_types/target"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

import { $$ as op_serialize_with_apostrophe_delimiter } from "../../operations/impure/text/serialize_apostrophed_string"
import { $$ as op_dictionary_to_list } from "pareto-standard-operations/dist/operations/impure/dictionary/to_list_sorted_by_code_point"
import { $$ as op_dictionary_is_empty } from "pareto-standard-operations/dist/operations/impure/dictionary/is_empty"


export const Root = (
    $: _in.Root
): _out.Group => {
    return sh.group([
        sh.g.nested_block([
            sh.b.snippet("users"),
            sh.b.indent([
                sh.g.simple_line("anonymous")
            ]),
        ]),
        sh.g.simple_line(""),
        sh.g.simple_line("interfaces"),
        sh.g.simple_line(""),
        sh.g.nested_block([
            sh.b.snippet("root "),
            Node($.root)
        ]),
        sh.g.simple_line(""),
        sh.g.nested_block([
            sh.b.snippet("numerical-types "),
            sh.b.indent([
            ]),
        ]),

    ])
}

export const Identifier = (
    $: _in.Identifier
): _out.Block_Part => sh.b.snippet(op_serialize_with_apostrophe_delimiter($))

export const Node = (
    $: _in.Node
): _out.Block_Part => {
    return sh.b.sub([
        sh.b.snippet("{"),
        sh.b.indent([
            sh.g.sub(op_dictionary_to_list($.properties).map(($) => {
                return sh.g.nested_block([
                    Identifier($.key),
                    sh.b.snippet(": "),
                    pa.cc($.value.type, ($) => {
                        switch ($[0]) {
                            case 'collection': return pa.ss($, ($) => sh.b.sub([
                                sh.b.snippet("collection ["),
                                Identifier($.key),
                                sh.b.snippet("] "),
                                Node($.node)
                            ]))
                            case 'group': return pa.ss($, ($) => sh.b.sub([
                                sh.b.snippet("group "),
                                Node($.node)
                            ]))
                            case 'state group': return pa.ss($, ($) => op_dictionary_is_empty($.states)
                                ? sh.b.snippet("group { }")
                                : sh.b.sub([
                                    sh.b.snippet("stategroup ("),
                                    sh.b.indent([
                                        sh.g.sub(op_dictionary_to_list($.states).map(($) => {
                                            return sh.g.nested_block([
                                                Identifier($.key),
                                                sh.b.snippet(" "),
                                                Node($.value.node)
                                            ])
                                        }))
                                    ]),
                                    sh.b.snippet(")")
                                ]))
                            case 'text': return pa.ss($, ($) => sh.b.snippet("text"))
                            default: return pa.au($[0])
                        }
                    })
                ])
            })),

        ]),
        sh.b.snippet("}"),
    ])
}