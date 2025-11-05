import * as _ea from 'exupery-core-alg'

import * as _in from "../../../../interface/generated/pareto/schemas/alan_light/data_types/target"
import * as _out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

import { $$ as op_serialize_with_apostrophe_delimiter } from "../../operations/impure/text/serialize_apostrophed_string"
import { $$ as op_dictionary_to_list } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/dictionary/to_list_sorted_by_code_point"
import { $$ as op_dictionary_is_empty } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/dictionary/is_empty"
import { Signature } from "../../../../interface/algorithms/transformations/alan_light/fountain_pen"



export const Root = (
    $: _in.Root
): _out.Group => {
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
                    _ea.cc($.value.type, ($) => {
                        switch ($[0]) {
                            case 'collection': return _ea.ss($, ($) => sh.b.sub([
                                sh.b.snippet("collection ["),
                                Identifier($.key),
                                sh.b.snippet("] "),
                                Node($.node)
                            ]))
                            case 'group': return _ea.ss($, ($) => sh.b.sub([
                                sh.b.snippet("group "),
                                Node($.node)
                            ]))
                            case 'state group': return _ea.ss($, ($) => op_dictionary_is_empty($.states)
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
                            case 'text': return _ea.ss($, ($) => sh.b.snippet("text"))
                            default: return _ea.au($[0])
                        }
                    })
                ])
            })),

        ]),
        sh.b.snippet("}"),
    ])
}