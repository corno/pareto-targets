import * as d_in from "../../../interface/generated/pareto/schemas/lionweb/data_types/target"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

import { Signature } from "../../../interface/algorithms/transformations/lionweb/fountain_pen_block"

//dependencies
import * as t_json_to_fountain_pen_block from "pareto-json/dist/implementation/algorithms/transformations/json/fountain_pen_block"
import * as t_lionweb_to_json from "./json"


export const SerializationChunks = ($: d_in.SerializationChunks): d_out.Group => {
    return t_json_to_fountain_pen_block.Document(t_lionweb_to_json.SerializationChunks($))
}