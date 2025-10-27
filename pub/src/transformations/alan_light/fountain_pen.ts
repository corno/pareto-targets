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
        sh.g.nested_line([
            sh.l.snippet("users"),
            sh.l.indent([
                sh.g.simple_line("anonymous")
            ]),
        ]),
        sh.g.simple_line(""),
        sh.g.simple_line("interfaces"),
        sh.g.simple_line(""),
        sh.g.nested_line([
            sh.l.snippet("root "),
            Node($.root)
        ]),
        sh.g.simple_line(""),
        sh.g.nested_line([
            sh.l.snippet("numerical-types "),
            sh.l.indent([
            ]),
        ]),

    ])
}

export const Identifier = (
    $: _in.Identifier
): _out.Line_Part => sh.l.snippet(op_serialize_with_apostrophe_delimiter($))

export const Node = (
    $: _in.Node
): _out.Line_Part => {
    return sh.l.sub([
        sh.l.snippet("{"),
        sh.l.indent([
            sh.g.sub(op_dictionary_to_list($.properties).map(($) => {
                return sh.g.nested_line([
                    Identifier($.key),
                    sh.l.snippet(": "),
                    pa.cc($.value.type, ($) => {
                        switch ($[0]) {
                            case 'collection': return pa.ss($, ($) => sh.l.sub([
                                sh.l.snippet("collection ["),
                                Identifier($.key),
                                sh.l.snippet("] "),
                                Node($.node)
                            ]))
                            case 'group': return pa.ss($, ($) => sh.l.sub([
                                sh.l.snippet("group "),
                                Node($.node)
                            ]))
                            case 'state group': return pa.ss($, ($) => op_dictionary_is_empty($.states)
                                ? sh.l.snippet("group { }")
                                : sh.l.sub([
                                    sh.l.snippet("stategroup ("),
                                    sh.l.indent([
                                        sh.g.sub(op_dictionary_to_list($.states).map(($) => {
                                            return sh.g.nested_line([
                                                Identifier($.key),
                                                sh.l.snippet(" "),
                                                Node($.value.node)
                                            ])
                                        }))
                                    ]),
                                    sh.l.snippet(")")
                                ]))
                            case 'text': return pa.ss($, ($) => sh.l.snippet("text"))
                            default: return pa.au($[0])
                        }
                    })
                ])
            })),

        ]),
        sh.l.snippet("}"),
    ])
}