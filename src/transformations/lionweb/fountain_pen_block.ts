import * as pd from 'exupery-core-data'
import * as pa from 'exupery-core-alg'

import * as _in from "../../generated/interface/schemas/lionweb/data_types/target"
import * as _out from "pareto-fountain-pen/dist/generated/interface/schemas/block/data_types/target"

import * as t_json_to_fountain_pen_block from "pareto-json/dist/transformations/json/fountain_pen_block"
import * as t_lionweb_to_json from "./json"

export const SerializationChunks = ($: _in.SerializationChunks): _out.Block => {
    return t_json_to_fountain_pen_block.Document(t_lionweb_to_json.SerializationChunks($))
}