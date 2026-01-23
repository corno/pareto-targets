
import * as _pi from "pareto-core/dist/interface"

import * as i_in from "./data"

export namespace MetaPointer_ {
    
    export type I = i_in.MetaPointer
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type MetaPointer_ = (
    context: MetaPointer_.I,
) => MetaPointer_.O

export namespace SerializationChunk_ {
    
    export type I = i_in.SerializationChunk
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type SerializationChunk_ = (
    context: SerializationChunk_.I,
) => SerializationChunk_.O

export namespace SerializationChunks_ {
    
    export type I = i_in.SerializationChunks
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type SerializationChunks_ = (
    context: SerializationChunks_.I,
) => SerializationChunks_.O

export { 
    MetaPointer_ as MetaPointer, 
    SerializationChunk_ as SerializationChunk, 
    SerializationChunks_ as SerializationChunks, 
}
