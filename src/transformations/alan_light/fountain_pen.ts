import * as pa from 'exupery-core-alg'

import * as _in from "../../generated/interface/schemas/alan_light/data_types/target"
import * as _out from "pareto-fountain-pen/dist/generated/interface/schemas/block/data_types/target"

import {
    b, l, block
} from "pareto-fountain-pen/dist/shorthands/block"


import { $$ as op_serialize_with_apostrophe_delimiter } from "../../operations/impure/serialize_apostrophed_string"
import { $$ as op_dictionary_to_list } from "pareto-standard-operations/dist/impure/dictionary/to_list_sorted_by_code_point"
import { $$ as op_dictionary_is_empty } from "pareto-standard-operations/dist/impure/dictionary/is_empty"


export const Root = (
    $: _in.Root
): _out.Block => {
    return block([
        b.nested_line([
            l.snippet("users"),
            l.indent([
                b.simple_line("anonymous")
            ]),
        ]),
        b.simple_line(""),
        b.simple_line("interfaces"),
        b.simple_line(""),
        b.nested_line([
            l.snippet("root "),
            Node($.root)
        ]),
        b.simple_line(""),
        b.nested_line([
            l.snippet("numerical-types "),
            l.indent([
            ]),
        ]),

    ])
}

export const Identifier = (
    $: _in.Identifier
): _out.Line_Part => l.snippet(op_serialize_with_apostrophe_delimiter($))

export const Node = (
    $: _in.Node
): _out.Line_Part => {
    return l.sub([
        l.snippet("{"),
        l.indent([
            b.sub_decorated(op_dictionary_to_list($.properties).map(($) => {
                return b.nested_line([
                    Identifier($.key),
                    l.snippet(": "),
                    pa.cc($.value.type, ($) => {
                        switch ($[0]) {
                            case 'collection': return pa.ss($, ($) => l.sub([
                                l.snippet("collection ["),
                                Identifier($.key),
                                l.snippet("] "),
                                Node($.node)
                            ]))
                            case 'group': return pa.ss($, ($) => l.sub([
                                l.snippet("group "),
                                Node($.node)
                            ]))
                            case 'state group': return pa.ss($, ($) => op_dictionary_is_empty($.states)
                                ? l.snippet("group { }")
                                : l.sub([
                                    l.snippet("stategroup ("),
                                    l.indent([
                                        b.sub_decorated(op_dictionary_to_list($.states).map(($) => {
                                            return b.nested_line([
                                                Identifier($.key),
                                                l.snippet(" "),
                                                Node($.value.node)
                                            ])
                                        }))
                                    ]),
                                    l.snippet(")")
                                ]))
                            case 'text': return pa.ss($, ($) => l.snippet("text"))
                            default: return pa.au($[0])
                        }
                    })
                ])
            })),

        ]),
        l.snippet("}"),
    ])
}