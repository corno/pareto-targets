import * as d_exupery_core_data from 'exupery-core-data' //FIXME create a schema for this
import * as d_module from "pareto/dist/interface/generated/pareto/schemas/module/data_types/target"
import * as d_path from "exupery-resources/dist/interface/generated/pareto/schemas/path/data_types/source"
import * as d_write_to_directory from "../../modules/pareto-fountain-pen-directory/interface/to_be_generated/write_to_dictionary"

export type Error = d_write_to_directory.Error

export type Parameters = {
    'module': d_module.Module<d_exupery_core_data.Source_Location>
    'path': d_path.Node_Path
    'target':
    | ['documentation', null]
    | ['graphviz', null]
    | ['lionweb', null]
    | ['typescript', null]
}

