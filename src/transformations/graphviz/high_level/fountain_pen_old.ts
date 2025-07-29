// import * as pa from 'exupery-core-alg'
// import * as pd from 'exupery-core-dev'
// import * as pt from 'exupery-core-types'

// import * as s_in from "../../../../generated/interface/schemas/graphviz_high_level/resolved"
// import * as s_out from "pareto-fountain-pen/dist/generated/interface/schemas/block/unresolved"

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

// export const Graph = ($: s_in.Graph): s_out.Block => {
//     return block([
//         b.nested_line([
//             l.snippet("strict "),
//             pa.cc($.type, ($) => {
//                 switch ($[0]) {
//                     case 'directed': return pa.ss($, () => l.snippet("digraph "))
//                     case 'undirected': return pa.ss($, () => l.snippet("graph "))
//                     default: return pa.au($[0])
//                 }
//             }),
//             $.name.transform(
//                 ($) => l.sub([
//                     l.snippet(op['serialize with quote delimiter']($)),
//                     l.snippet(" "),
//                 ]),
//                 () => l.nothing()
//             ),
//             l.snippet("{"),
//             l.indent([
//                 Graph_Tree($['node tree'], {
//                     'nodes': $.nodes,
//                     'path': pa.array_literal([]),
//                 }),
//                 b.sub_decorated(op['dictionary to list, sorted by code point']($.nodes).map(($) => {
//                     return b.nested_line([
//                         l.snippet(op['serialize with quote delimiter']($.key)),
//                     ])
//                 })),
//                 pa.cc($.type, ($) => {
//                     switch ($[0]) {
//                         case 'directed': return pa.ss($, ($) => b.sub_decorated(op['dictionary to list, sorted by code point']($['edge specifications']['start nodes']).map(($) => {
//                             const key = $.key
//                             return b.sub_decorated($.value.edges.map(($) => {
//                                 return b.nested_line([
//                                     l.snippet(op['serialize with quote delimiter'](key)),
//                                     l.snippet(" -> "),
//                                     End_Point_Specification($.to),
//                                     Edge_Attributes($.attributes),
//                                     l.snippet(";"),
//                                 ])
//                             }))
//                         })))
//                         case 'undirected': return pa.ss($, ($) => b.sub_decorated($.edges.map(($) => {
//                             return b.nested_line([
//                                 End_Point_Specification($.yin),
//                                 l.snippet(" -- "),
//                                 End_Point_Specification($.yang),
//                                 l.snippet(";"),
//                             ])
//                         })),)
//                         default: return pa.au($[0])
//                     }
//                 })
//             ]),
//             l.snippet("}"),
//         ]),
//     ])
// }

// export const Edge_Attributes = ($: s_in.Edge_Attributes): s_out.Line_Part => {
//     return op['is empty']($)
//         ? l.nothing()
//         : l.sub([
//             l.snippet(" ["),
//             l.sub_decorated(op['dictionary to list, sorted by code point']($).map(($) => {
//                 return l.sub([
//                     l.snippet(" "),
//                     l.snippet(op['serialize with quote delimiter']($.key)),
//                     l.snippet("="),
//                     Attribute_Value($.value),
//                 ])
//             })),
//             l.snippet(" ]"),
//         ])
// }

// export const Attribute_Value = ($: s_in.Attribute_Value): s_out.Line_Part => {
//     return pa.cc($, ($) => {
//         switch ($[0]) {
//             case 'string':return pa.ss($, ($) => l.snippet(op['serialize with quote delimiter']($)))
//             case 'number': return pa.ss($, ($) => l.snippet("FIXME NUMBER"))
//             case 'html string': return pa.ss($, ($) => l.snippet($))
//             default: return pa.au($[0])
//         }
//     })
// }

// export const End_Point_Specification = ($: s_in.End_Point_Specification): s_out.Line_Part => {
//     return l.sub([
//         pa.cc($, ($) => {
//             switch ($[0]) {
//                 case 'node': return pa.ss($, ($) => {
//                     return l.sub([
//                         l.snippet(op['serialize with quote delimiter']($.node)),
//                         $['port data'].transform(
//                             ($) => l.snippet("FIXME"),
//                             () => l.nothing()
//                         )
//                     ])
//                 })
//                 case 'subgraph': return pa.ss($, ($) => l.snippet("subgraph " + "FIXME"))
//                 default: return pa.au($[0])
//             }
//         })
//     ])
// }

// export const Graph_Tree = (
//     $: s_in.Node_Tree,
//     $p: {
//         'nodes': s_in.Graph.nodes,
//         'path': pt.Array<string>
//     }
// ): s_out.Block_Part => {
//     return b.sub_decorated(op['dictionary to list, sorted by code point']($.subgraphs).map(($) => {
//         return b.nested_line([
//             l.snippet("subgraph "),
//             l.snippet($.key),
//             l.snippet(" {"),
//             l.indent([
//                 Graph_Tree($.value.tree, {
//                     'nodes': $p.nodes,
//                     'path': op['add element']($p.path, { element: $.key, where: ['end', null] }),
//                 }),
//                 b.sub_decorated(op['dictionary to list, sorted by code point'](op.filter($p.nodes.map(($) => {
//                     return op['is equal to']($['subgraph path'], { 'other': $p.path })
//                         ? pa.set($)
//                         : pa.not_set()
//                 }))).map(($) => {
//                     return b.nested_line([
//                         l.snippet($.key),
//                         l.snippet(" ["),
//                         l.snippet("FIXME"), //FIXME: attributes
//                         l.snippet("];"),
//                     ])
//                 })),
//             ]),
//             l.snippet("}"),
//         ])
//     }))
// }

