import * as pa from 'exupery-core-alg'

import * as s_in from "../generated/interface/schemas/graphviz_high_level/data_types/target"

import * as t_graphviz_to_fountain_pen from "../transformations/graphviz/high_level/fountain_pen"

import * as s_fountain_pen from "pareto-fountain-pen/dist/serialize/block"


export const Graph = (
    $: s_in.Graph,
    $p: {
        'indentation': string
        'newline': string
    }
): string => {
    return s_fountain_pen.Block(
        t_graphviz_to_fountain_pen.Graph(
            $,
        ),
        {
            'indentation': $p.indentation,
            'newline': $p['newline'],
        }
    )
}
