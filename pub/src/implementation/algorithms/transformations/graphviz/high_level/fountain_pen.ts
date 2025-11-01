
import * as d_in from "../../../../../interface/generated/pareto/schemas/graphviz_high_level/data_types/target"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

import * as t_1 from "../low_level/fountain_pen"
import * as t_2 from "./graphviz_low_level"
import { Signature } from "../../../../../interface/algorithms/transformations/graphviz/high_level/fountain_pen"


export const Graph = ($: d_in.Graph): d_out.Group => {
    return t_1.Graph(t_2.Graph(($)))
}
