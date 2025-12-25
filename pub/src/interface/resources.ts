import * as _et from 'exupery-core-types'

import * as d_generate_and_write_to_disk from "./to_be_generated/generate_and_write_to_disk"

export namespace commands {

    export type generate_and_write_to_disk = _et.Command<d_generate_and_write_to_disk.Error, d_generate_and_write_to_disk.Parameters>
    
}