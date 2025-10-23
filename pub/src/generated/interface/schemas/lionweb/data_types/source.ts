import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/resolved"

// **** TYPES

export type _T_MetaPointer = {
    readonly 'key': string
    readonly 'language': string
    readonly 'version': string
}

export type _T_SerializationChunk = {
    readonly 'languages': _i_core._T_List<null, {
        readonly 'key': string
        readonly 'version': string
    }>
    readonly 'nodes': _i_core._T_List<null, {
        readonly 'annotations': _i_core._T_List<null, string>
        readonly 'classifier': _T_MetaPointer
        readonly 'containments': _i_core._T_List<null, {
            readonly 'children': _i_core._T_List<null, string>
            readonly 'containment': _T_MetaPointer
        }>
        readonly 'id': string
        readonly 'parent': _pt.Optional_Value<string>
        readonly 'properties': _i_core._T_List<null, {
            readonly 'property': _T_MetaPointer
            readonly 'value': string
        }>
        readonly 'references': _i_core._T_List<null, {
            readonly 'reference': _T_MetaPointer
            readonly 'targets': _i_core._T_List<null, {
                readonly 'reference': string
                readonly 'resolveInfo': string
            }>
        }>
    }>
    readonly 'serializationFormatVersion': string
}

export type _T_SerializationChunks = _i_core._T_Dictionary<null, _T_SerializationChunk>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type MetaPointer = _T_MetaPointer

export type SerializationChunk = _T_SerializationChunk

export type SerializationChunks = _T_SerializationChunks

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_MetaPointer {
    export type key = string
    export type language = string
    export type version = string
}

export namespace _T_SerializationChunk {
    
    export namespace languages {
        
        export namespace L {
            export type key = string
            export type version = string
        }
        export type L = {
            readonly 'key': string
            readonly 'version': string
        }
    }
    export type languages = _i_core._T_List<null, {
        readonly 'key': string
        readonly 'version': string
    }>
    
    export namespace nodes {
        
        export namespace L {
            
            export namespace annotations {
                export type L = string
            }
            export type annotations = _i_core._T_List<null, string>
            
            export namespace classifier {
            }
            export type classifier = _T_MetaPointer
            
            export namespace containments {
                
                export namespace L {
                    
                    export namespace children {
                        export type L = string
                    }
                    export type children = _i_core._T_List<null, string>
                    
                    export namespace containment {
                    }
                    export type containment = _T_MetaPointer
                }
                export type L = {
                    readonly 'children': _i_core._T_List<null, string>
                    readonly 'containment': _T_MetaPointer
                }
            }
            export type containments = _i_core._T_List<null, {
                readonly 'children': _i_core._T_List<null, string>
                readonly 'containment': _T_MetaPointer
            }>
            export type id = string
            
            export namespace parent {
                export type O = string
            }
            export type parent = _pt.Optional_Value<string>
            
            export namespace properties {
                
                export namespace L {
                    
                    export namespace property {
                    }
                    export type property = _T_MetaPointer
                    export type value = string
                }
                export type L = {
                    readonly 'property': _T_MetaPointer
                    readonly 'value': string
                }
            }
            export type properties = _i_core._T_List<null, {
                readonly 'property': _T_MetaPointer
                readonly 'value': string
            }>
            
            export namespace references {
                
                export namespace L {
                    
                    export namespace reference {
                    }
                    export type reference = _T_MetaPointer
                    
                    export namespace targets {
                        
                        export namespace L {
                            export type reference = string
                            export type resolveInfo = string
                        }
                        export type L = {
                            readonly 'reference': string
                            readonly 'resolveInfo': string
                        }
                    }
                    export type targets = _i_core._T_List<null, {
                        readonly 'reference': string
                        readonly 'resolveInfo': string
                    }>
                }
                export type L = {
                    readonly 'reference': _T_MetaPointer
                    readonly 'targets': _i_core._T_List<null, {
                        readonly 'reference': string
                        readonly 'resolveInfo': string
                    }>
                }
            }
            export type references = _i_core._T_List<null, {
                readonly 'reference': _T_MetaPointer
                readonly 'targets': _i_core._T_List<null, {
                    readonly 'reference': string
                    readonly 'resolveInfo': string
                }>
            }>
        }
        export type L = {
            readonly 'annotations': _i_core._T_List<null, string>
            readonly 'classifier': _T_MetaPointer
            readonly 'containments': _i_core._T_List<null, {
                readonly 'children': _i_core._T_List<null, string>
                readonly 'containment': _T_MetaPointer
            }>
            readonly 'id': string
            readonly 'parent': _pt.Optional_Value<string>
            readonly 'properties': _i_core._T_List<null, {
                readonly 'property': _T_MetaPointer
                readonly 'value': string
            }>
            readonly 'references': _i_core._T_List<null, {
                readonly 'reference': _T_MetaPointer
                readonly 'targets': _i_core._T_List<null, {
                    readonly 'reference': string
                    readonly 'resolveInfo': string
                }>
            }>
        }
    }
    export type nodes = _i_core._T_List<null, {
        readonly 'annotations': _i_core._T_List<null, string>
        readonly 'classifier': _T_MetaPointer
        readonly 'containments': _i_core._T_List<null, {
            readonly 'children': _i_core._T_List<null, string>
            readonly 'containment': _T_MetaPointer
        }>
        readonly 'id': string
        readonly 'parent': _pt.Optional_Value<string>
        readonly 'properties': _i_core._T_List<null, {
            readonly 'property': _T_MetaPointer
            readonly 'value': string
        }>
        readonly 'references': _i_core._T_List<null, {
            readonly 'reference': _T_MetaPointer
            readonly 'targets': _i_core._T_List<null, {
                readonly 'reference': string
                readonly 'resolveInfo': string
            }>
        }>
    }>
    export type serializationFormatVersion = string
}

export namespace _T_SerializationChunks {
    
    export namespace D {
    }
    export type D = _T_SerializationChunk
}

// *** ALIASES FOR NESTED TYPES

export namespace MetaPointer {
    export type key = string
    export type language = string
    export type version = string
}

export namespace SerializationChunk {
    
    export namespace languages {
        
        export namespace L {
            export type key = string
            export type version = string
        }
        export type L = {
            readonly 'key': string
            readonly 'version': string
        }
    }
    export type languages = _i_core._T_List<null, {
        readonly 'key': string
        readonly 'version': string
    }>
    
    export namespace nodes {
        
        export namespace L {
            
            export namespace annotations {
                export type L = string
            }
            export type annotations = _i_core._T_List<null, string>
            
            export namespace classifier {
            }
            export type classifier = _T_MetaPointer
            
            export namespace containments {
                
                export namespace L {
                    
                    export namespace children {
                        export type L = string
                    }
                    export type children = _i_core._T_List<null, string>
                    
                    export namespace containment {
                    }
                    export type containment = _T_MetaPointer
                }
                export type L = {
                    readonly 'children': _i_core._T_List<null, string>
                    readonly 'containment': _T_MetaPointer
                }
            }
            export type containments = _i_core._T_List<null, {
                readonly 'children': _i_core._T_List<null, string>
                readonly 'containment': _T_MetaPointer
            }>
            export type id = string
            
            export namespace parent {
                export type O = string
            }
            export type parent = _pt.Optional_Value<string>
            
            export namespace properties {
                
                export namespace L {
                    
                    export namespace property {
                    }
                    export type property = _T_MetaPointer
                    export type value = string
                }
                export type L = {
                    readonly 'property': _T_MetaPointer
                    readonly 'value': string
                }
            }
            export type properties = _i_core._T_List<null, {
                readonly 'property': _T_MetaPointer
                readonly 'value': string
            }>
            
            export namespace references {
                
                export namespace L {
                    
                    export namespace reference {
                    }
                    export type reference = _T_MetaPointer
                    
                    export namespace targets {
                        
                        export namespace L {
                            export type reference = string
                            export type resolveInfo = string
                        }
                        export type L = {
                            readonly 'reference': string
                            readonly 'resolveInfo': string
                        }
                    }
                    export type targets = _i_core._T_List<null, {
                        readonly 'reference': string
                        readonly 'resolveInfo': string
                    }>
                }
                export type L = {
                    readonly 'reference': _T_MetaPointer
                    readonly 'targets': _i_core._T_List<null, {
                        readonly 'reference': string
                        readonly 'resolveInfo': string
                    }>
                }
            }
            export type references = _i_core._T_List<null, {
                readonly 'reference': _T_MetaPointer
                readonly 'targets': _i_core._T_List<null, {
                    readonly 'reference': string
                    readonly 'resolveInfo': string
                }>
            }>
        }
        export type L = {
            readonly 'annotations': _i_core._T_List<null, string>
            readonly 'classifier': _T_MetaPointer
            readonly 'containments': _i_core._T_List<null, {
                readonly 'children': _i_core._T_List<null, string>
                readonly 'containment': _T_MetaPointer
            }>
            readonly 'id': string
            readonly 'parent': _pt.Optional_Value<string>
            readonly 'properties': _i_core._T_List<null, {
                readonly 'property': _T_MetaPointer
                readonly 'value': string
            }>
            readonly 'references': _i_core._T_List<null, {
                readonly 'reference': _T_MetaPointer
                readonly 'targets': _i_core._T_List<null, {
                    readonly 'reference': string
                    readonly 'resolveInfo': string
                }>
            }>
        }
    }
    export type nodes = _i_core._T_List<null, {
        readonly 'annotations': _i_core._T_List<null, string>
        readonly 'classifier': _T_MetaPointer
        readonly 'containments': _i_core._T_List<null, {
            readonly 'children': _i_core._T_List<null, string>
            readonly 'containment': _T_MetaPointer
        }>
        readonly 'id': string
        readonly 'parent': _pt.Optional_Value<string>
        readonly 'properties': _i_core._T_List<null, {
            readonly 'property': _T_MetaPointer
            readonly 'value': string
        }>
        readonly 'references': _i_core._T_List<null, {
            readonly 'reference': _T_MetaPointer
            readonly 'targets': _i_core._T_List<null, {
                readonly 'reference': string
                readonly 'resolveInfo': string
            }>
        }>
    }>
    export type serializationFormatVersion = string
}

export namespace SerializationChunks {
    
    export namespace D {
    }
    export type D = _T_SerializationChunk
}
