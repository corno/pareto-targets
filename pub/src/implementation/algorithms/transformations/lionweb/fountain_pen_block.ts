import * as _in from "../../../../interface/generated/pareto/schemas/lionweb/data_types/target"
import * as _out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

import * as t_json_to_fountain_pen_block from "pareto-json/dist/implementation/algorithms/transformations/json/fountain_pen_block"
import * as t_lionweb_to_json from "./json"
import { Signature } from "../../../../interface/algorithms/transformations/lionweb/fountain_pen_block"


export const SerializationChunks = ($: _in.SerializationChunks): _out.Group => {
    return t_json_to_fountain_pen_block.Document(t_lionweb_to_json.SerializationChunks($))
}