// import * as pa from 'exupery-core-alg'
// import * as pd from 'exupery-core-dev'
// import * as pt from 'exupery-core-types'

// import * as d_in from "../../../../generated/interface/schemas/graphviz_high_level/resolved"
// import * as d_out from "pareto-fountain-pen/dist/generated/interface/schemas/block/unresolved"

// import {
//     b, l, block,
// } from "pareto-fountain-pen/dist/shorthands/block"

// import { impure, pure } from "pareto-standard-operations"

// const op = {
//     'enrich list elements with position information': impure.list['enrich with position information'],
//     'dictionary to list, sorted by code point': impure.dictionary['to list, sorted by code point'],
//     'add element': pure.list['extend with element'],
//     'filter': pure.dictionary.filter,
//     'serialize with quote delimiter': impure.text['serialize with quote delimiter'],
//     'is equal to': pure.list['is equal to'],
//     'is empty': impure.dictionary['is empty'],
// }

// export const Graph = ($: d_in.Graph): d_out.Block => {
//     return block([
//         sh.g.nested_line([
//             sh.l.snippet("strict "),
//             pa.cc($.type, ($) => {
//                 switch ($[0]) {
//                     case 'directed': return pa.ss($, () => sh.l.snippet("digraph "))
//                     case 'undirected': return pa.ss($, () => sh.l.snippet("graph "))
//                     default: return pa.au($[0])
//                 }
//             }),
//             $.name.transform(
//                 ($) => sh.l.sub([
//                     sh.l.snippet(op['serialize with quote delimiter']($)),
//                     sh.l.snippet(" "),
//                 ]),
//                 () => sh.l.nothing()
//             ),
//             sh.l.snippet("{"),
//             sh.l.indent([
//                 Graph_Tree($['node tree'], {
//                     'nodes': $.nodes,
//                     'path': pa.array_literal([]),
//                 }),
//                 sh.g.sub(op['dictionary to list, sorted by code point']($.nodes).map(($) => {
//                     return sh.g.nested_line([
//                         sh.l.snippet(op['serialize with quote delimiter']($.key)),
//                     ])
//                 })),
//                 pa.cc($.type, ($) => {
//                     switch ($[0]) {
//                         case 'directed': return pa.ss($, ($) => sh.g.sub(op['dictionary to list, sorted by code point']($['edge specifications']['start nodes']).map(($) => {
//                             const key = $.key
//                             return sh.g.sub($.value.edges.map(($) => {
//                                 return sh.g.nested_line([
//                                     sh.l.snippet(op['serialize with quote delimiter'](key)),
//                                     sh.l.snippet(" -> "),
//                                     End_Point_Specification($.to),
//                                     Edge_Attributes($.attributes),
//                                     sh.l.snippet(";"),
//                                 ])
//                             }))
//                         })))
//                         case 'undirected': return pa.ss($, ($) => sh.g.sub($.edges.map(($) => {
//                             return sh.g.nested_line([
//                                 End_Point_Specification($.yin),
//                                 sh.l.snippet(" -- "),
//                                 End_Point_Specification($.yang),
//                                 sh.l.snippet(";"),
//                             ])
//                         })),)
//                         default: return pa.au($[0])
//                     }
//                 })
//             ]),
//             sh.l.snippet("}"),
//         ]),
//     ])
// }

// export const Edge_Attributes = ($: d_in.Edge_Attributes): d_out.Line_Part => {
//     return op['is empty']($)
//         ? sh.l.nothing()
//         : sh.l.sub([
//             sh.l.snippet(" ["),
//            sh.l.sub(op['dictionary to list, sorted by code point']($).map(($) => {
//                 return sh.l.sub([
//                     sh.l.snippet(" "),
//                     sh.l.snippet(op['serialize with quote delimiter']($.key)),
//                     sh.l.snippet("="),
//                     Attribute_Value($.value),
//                 ])
//             })),
//             sh.l.snippet(" ]"),
//         ])
// }

// export const Attribute_Value = ($: d_in.Attribute_Value): d_out.Line_Part => {
//     return pa.cc($, ($) => {
//         switch ($[0]) {
//             case 'string':return pa.ss($, ($) => sh.l.snippet(op['serialize with quote delimiter']($)))
//             case 'number': return pa.ss($, ($) => sh.l.snippet("FIXME NUMBER"))
//             case 'html string': return pa.ss($, ($) => sh.l.snippet($))
//             default: return pa.au($[0])
//         }
//     })
// }

// export const End_Point_Specification = ($: d_in.End_Point_Specification): d_out.Line_Part => {
//     return sh.l.sub([
//         pa.cc($, ($) => {
//             switch ($[0]) {
//                 case 'node': return pa.ss($, ($) => {
//                     return sh.l.sub([
//                         sh.l.snippet(op['serialize with quote delimiter']($.node)),
//                         $['port data'].transform(
//                             ($) => sh.l.snippet("FIXME"),
//                             () => sh.l.nothing()
//                         )
//                     ])
//                 })
//                 case 'subgraph': return pa.ss($, ($) => sh.l.snippet("subgraph " + "FIXME"))
//                 default: return pa.au($[0])
//             }
//         })
//     ])
// }

// export const Graph_Tree = (
//     $: d_in.Node_Tree,
//     $p: {
//         'nodes': d_in.Graph.nodes,
//         'path': pt.Array<string>
//     }
// ): d_out.Group_Part => {
//     return sh.g.sub(op['dictionary to list, sorted by code point']($.subgraphs).map(($) => {
//         return sh.g.nested_line([
//             sh.l.snippet("subgraph "),
//             sh.l.snippet($.key),
//             sh.l.snippet(" {"),
//             sh.l.indent([
//                 Graph_Tree($.value.tree, {
//                     'nodes': $p.nodes,
//                     'path': op['add element']($p.path, { element: $.key, where: ['end', null] }),
//                 }),
//                 sh.g.sub(op['dictionary to list, sorted by code point'](op.filter($p.nodes.map(($) => {
//                     return op['is equal to']($['subgraph path'], { 'other': $p.path })
//                         ? pa.set($)
//                         : pa.not_set()
//                 }))).map(($) => {
//                     return sh.g.nested_line([
//                         sh.l.snippet($.key),
//                         sh.l.snippet(" ["),
//                         sh.l.snippet("FIXME"), //FIXME: attributes
//                         sh.l.snippet("];"),
//                     ])
//                 })),
//             ]),
//             sh.l.snippet("}"),
//         ])
//     }))
// }

