
import * as d_in from "../../../generated/interface/schemas/graphviz_high_level/data_types/target"
import * as d_out from "pareto-fountain-pen/dist/generated/interface/schemas/block/data_types/target"

import * as t_1 from "../low_level/fountain_pen"
import * as t_2 from "./graphviz_low_level"

export const Graph = ($: d_in.Graph): d_out.Block => {
    return t_1.Graph(t_2.Graph(($)))
}
