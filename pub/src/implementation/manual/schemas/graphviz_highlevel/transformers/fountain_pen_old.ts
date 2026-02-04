
// import * as _p from 'pareto-core/dist/expression'
// import * as _pdev from 'pareto-core-dev'
// import * as _pi from 'pareto-core/dist/interface'

// import * as d_in from "../../../../../interface/generated/liana/schemas/graphviz_high_level/resolved"
// import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/unresolved"

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
//         sh.g.nested_block([
//             sh.b.literal("strict "),
//             pa.sg($.type, ($) => {
//                 switch ($[0]) {
//                     case 'directed': return pa.ss($, () => sh.b.literal("digraph "))
//                     case 'undirected': return pa.ss($, () => sh.b.literal("graph "))
//                     default: return pa.au($[0])
//                 }
//             }),
//             $.name.__decide(
//                 ($) => sh.b.sub([
//                     sh.b.snippet(op['serialize with quote delimiter']($)),
//                     sh.b.literal(" "),
//                 ]),
//                 () => sh.b.nothing()
//             ),
//             sh.b.literal("{"),
//             sh.b.indent([
//                 Graph_Tree($['node tree'], {
//                     'nodes': $.nodes,
//                     'path': pa.list.literal([]),
//                 }),
//                 sh.g.sub(op['dictionary to list, sorted by code point']($.nodes).__d_map(($) => {
//                     return sh.g.nested_block([
//                         sh.b.snippet(op['serialize with quote delimiter']($.key)),
//                     ])
//                 })),
//                 pa.sg($.type, ($) => {
//                     switch ($[0]) {
//                         case 'directed': return pa.ss($, ($) => sh.g.sub(op['dictionary to list, sorted by code point']($['edge specifications']['start nodes']).__d_map(($) => {
//                             const key = $.key
//                             return sh.g.sub($.value.edges.__d_map(($) => {
//                                 return sh.g.nested_block([
//                                     sh.b.snippet(op['serialize with quote delimiter'](key)),
//                                     sh.b.literal(" -> "),
//                                     End_Point_Specification($.to),
//                                     Edge_Attributes($.attributes),
//                                     sh.b.literal(";"),
//                                 ])
//                             }))
//                         })))
//                         case 'undirected': return pa.ss($, ($) => sh.g.sub($.edges.__d_map(($) => {
//                             return sh.g.nested_block([
//                                 End_Point_Specification($.yin),
//                                 sh.b.literal(" -- "),
//                                 End_Point_Specification($.yang),
//                                 sh.b.literal(";"),
//                             ])
//                         })),)
//                         default: return pa.au($[0])
//                     }
//                 })
//             ]),
//             sh.b.literal("}"),
//         ]),
//     ])
// }

// export const Edge_Attributes = ($: d_in.Edge_Attributes): d_out.Block_Part => {
//     return op['is empty']($)
//         ? sh.b.nothing()
//         : sh.b.sub([
//             sh.b.literal(" ["),
//            sh.b.sub(op['dictionary to list, sorted by code point']($).__d_map(($) => {
//                 return sh.b.sub([
//                     sh.b.literal(" "),
//                     sh.b.snippet(op['serialize with quote delimiter']($.key)),
//                     sh.b.literal("="),
//                     Attribute_Value($.value),
//                 ])
//             })),
//             sh.b.literal(" ]"),
//         ])
// }

// export const Attribute_Value = ($: d_in.Attribute_Value): d_out.Block_Part => {
//     return pa.sg($, ($) => {
//         switch ($[0]) {
//             case 'string': return pa.ss($, ($) => sh.b.snippet(op['serialize with quote delimiter']($)))
//             case 'number': return pa.ss($, ($) => sh.b.literal("FIXME NUMBER"))
//             case 'html string': return pa.ss($, ($) => sh.b.snippet($))
//             default: return pa.au($[0])
//         }
//     })
// }

// export const End_Point_Specification = ($: d_in.End_Point_Specification): d_out.Block_Part => {
//     return sh.b.sub([
//         pa.sg($, ($) => {
//             switch ($[0]) {
//                 case 'node': return pa.ss($, ($) => {
//                     return sh.b.sub([
//                         sh.b.snippet(op['serialize with quote delimiter']($.node)),
//                         $['port data'].__decide(
//                             ($) => sh.b.literal("FIXME"),
//                             () => sh.b.nothing()
//                         )
//                     ])
//                 })
//                 case 'subgraph': return pa.ss($, ($) => sh.b.snippet("subgraph " plus "FIXME"))
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
//     return sh.g.sub(op['dictionary to list, sorted by code point']($.subgraphs).__d_map(($) => {
//         return sh.g.nested_block([
//             sh.b.literal("subgraph "),
//             sh.b.snippet($.key),
//             sh.b.literal(" {"),
//             sh.b.indent([
//                 Graph_Tree($.value.tree, {
//                     'nodes': $p.nodes,
//                     'path': op['add element']($p.path, { element: $.key, where: ['end', null] }),
//                 }),
//                 sh.g.sub(op['dictionary to list, sorted by code point'](op.filter($p.nodes.__d_map(($) => {
//                     return op['is equal to']($['subgraph path'], { 'other': $p.path })
//                         ? pa.set($)
//                         : pa.not_set()
//                 }))).__d_map(($) => {
//                     return sh.g.nested_block([
//                         sh.b.snippet($.key),
//                         sh.b.literal(" ["),
//                         sh.b.literal("FIXME"), //FIXME: attributes
//                         sh.b.literal("];"),
//                     ])
//                 })),
//             ]),
//             sh.b.literal("}"),
//         ])
//     }))
// }

