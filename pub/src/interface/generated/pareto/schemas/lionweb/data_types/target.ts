import * as _pi from "pareto-core-interface"
    
    import * as _i_core from "../../../core/unconstrained"
    
    // **** TYPES
    
    export type _T_MetaPointer = {
        readonly 'language': string
        readonly 'version': string
        readonly 'key': string
    }
    
    export type _T_SerializationChunk = {
        readonly 'serializationFormatVersion': string
        readonly 'languages': _i_core._T_List<null, {
            readonly 'key': string
            readonly 'version': string
        }>
        readonly 'nodes': _i_core._T_List<null, {
            readonly 'id': string
            readonly 'parent': _pi.Optional_Value<string>
            readonly 'annotations': _i_core._T_List<null, string>
            readonly 'classifier': _T_MetaPointer
            readonly 'containments': _i_core._T_List<null, {
                readonly 'containment': _T_MetaPointer
                readonly 'children': _i_core._T_List<null, string>
            }>
            readonly 'properties': _i_core._T_List<null, {
                readonly 'value': string
                readonly 'property': _T_MetaPointer
            }>
            readonly 'references': _i_core._T_List<null, {
                readonly 'targets': _i_core._T_List<null, {
                    readonly 'reference': string
                    readonly 'resolveInfo': string
                }>
                readonly 'reference': _T_MetaPointer
            }>
        }>
    }
    
    export type _T_SerializationChunks = _i_core._T_Dictionary<null, _T_SerializationChunk>
    
    // **** FRIENDLY NAMES FOR THE GLOBAL TYPES
    
    export type MetaPointer = _T_MetaPointer
    
    export type SerializationChunk = _T_SerializationChunk
    
    export type SerializationChunks = _T_SerializationChunks
    
    // **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES
    
    export namespace _T_MetaPointer {
        export type language = string
        export type version = string
        export type key = string
    }
    
    export namespace _T_SerializationChunk {
        export type serializationFormatVersion = string
        
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
                export type id = string
                
                export namespace parent {
                    export type O = string
                }
                export type parent = _pi.Optional_Value<string>
                
                export namespace annotations {
                    export type L = string
                }
                export type annotations = _i_core._T_List<null, string>
                
                export namespace classifier {
                }
                export type classifier = _T_MetaPointer
                
                export namespace containments {
                    
                    export namespace L {
                        
                        export namespace containment {
                        }
                        export type containment = _T_MetaPointer
                        
                        export namespace children {
                            export type L = string
                        }
                        export type children = _i_core._T_List<null, string>
                    }
                    export type L = {
                        readonly 'containment': _T_MetaPointer
                        readonly 'children': _i_core._T_List<null, string>
                    }
                }
                export type containments = _i_core._T_List<null, {
                    readonly 'containment': _T_MetaPointer
                    readonly 'children': _i_core._T_List<null, string>
                }>
                
                export namespace properties {
                    
                    export namespace L {
                        export type value = string
                        
                        export namespace property {
                        }
                        export type property = _T_MetaPointer
                    }
                    export type L = {
                        readonly 'value': string
                        readonly 'property': _T_MetaPointer
                    }
                }
                export type properties = _i_core._T_List<null, {
                    readonly 'value': string
                    readonly 'property': _T_MetaPointer
                }>
                
                export namespace references {
                    
                    export namespace L {
                        
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
                        
                        export namespace reference {
                        }
                        export type reference = _T_MetaPointer
                    }
                    export type L = {
                        readonly 'targets': _i_core._T_List<null, {
                            readonly 'reference': string
                            readonly 'resolveInfo': string
                        }>
                        readonly 'reference': _T_MetaPointer
                    }
                }
                export type references = _i_core._T_List<null, {
                    readonly 'targets': _i_core._T_List<null, {
                        readonly 'reference': string
                        readonly 'resolveInfo': string
                    }>
                    readonly 'reference': _T_MetaPointer
                }>
            }
            export type L = {
                readonly 'id': string
                readonly 'parent': _pi.Optional_Value<string>
                readonly 'annotations': _i_core._T_List<null, string>
                readonly 'classifier': _T_MetaPointer
                readonly 'containments': _i_core._T_List<null, {
                    readonly 'containment': _T_MetaPointer
                    readonly 'children': _i_core._T_List<null, string>
                }>
                readonly 'properties': _i_core._T_List<null, {
                    readonly 'value': string
                    readonly 'property': _T_MetaPointer
                }>
                readonly 'references': _i_core._T_List<null, {
                    readonly 'targets': _i_core._T_List<null, {
                        readonly 'reference': string
                        readonly 'resolveInfo': string
                    }>
                    readonly 'reference': _T_MetaPointer
                }>
            }
        }
        export type nodes = _i_core._T_List<null, {
            readonly 'id': string
            readonly 'parent': _pi.Optional_Value<string>
            readonly 'annotations': _i_core._T_List<null, string>
            readonly 'classifier': _T_MetaPointer
            readonly 'containments': _i_core._T_List<null, {
                readonly 'containment': _T_MetaPointer
                readonly 'children': _i_core._T_List<null, string>
            }>
            readonly 'properties': _i_core._T_List<null, {
                readonly 'value': string
                readonly 'property': _T_MetaPointer
            }>
            readonly 'references': _i_core._T_List<null, {
                readonly 'targets': _i_core._T_List<null, {
                    readonly 'reference': string
                    readonly 'resolveInfo': string
                }>
                readonly 'reference': _T_MetaPointer
            }>
        }>
    }
    
    export namespace _T_SerializationChunks {
        
        export namespace D {
        }
        export type D = _T_SerializationChunk
    }
    
    // *** ALIASES FOR NESTED TYPES
    
    export namespace MetaPointer {
        export type language = string
        export type version = string
        export type key = string
    }
    
    export namespace SerializationChunk {
        export type serializationFormatVersion = string
        
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
                export type id = string
                
                export namespace parent {
                    export type O = string
                }
                export type parent = _pi.Optional_Value<string>
                
                export namespace annotations {
                    export type L = string
                }
                export type annotations = _i_core._T_List<null, string>
                
                export namespace classifier {
                }
                export type classifier = _T_MetaPointer
                
                export namespace containments {
                    
                    export namespace L {
                        
                        export namespace containment {
                        }
                        export type containment = _T_MetaPointer
                        
                        export namespace children {
                            export type L = string
                        }
                        export type children = _i_core._T_List<null, string>
                    }
                    export type L = {
                        readonly 'containment': _T_MetaPointer
                        readonly 'children': _i_core._T_List<null, string>
                    }
                }
                export type containments = _i_core._T_List<null, {
                    readonly 'containment': _T_MetaPointer
                    readonly 'children': _i_core._T_List<null, string>
                }>
                
                export namespace properties {
                    
                    export namespace L {
                        export type value = string
                        
                        export namespace property {
                        }
                        export type property = _T_MetaPointer
                    }
                    export type L = {
                        readonly 'value': string
                        readonly 'property': _T_MetaPointer
                    }
                }
                export type properties = _i_core._T_List<null, {
                    readonly 'value': string
                    readonly 'property': _T_MetaPointer
                }>
                
                export namespace references {
                    
                    export namespace L {
                        
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
                        
                        export namespace reference {
                        }
                        export type reference = _T_MetaPointer
                    }
                    export type L = {
                        readonly 'targets': _i_core._T_List<null, {
                            readonly 'reference': string
                            readonly 'resolveInfo': string
                        }>
                        readonly 'reference': _T_MetaPointer
                    }
                }
                export type references = _i_core._T_List<null, {
                    readonly 'targets': _i_core._T_List<null, {
                        readonly 'reference': string
                        readonly 'resolveInfo': string
                    }>
                    readonly 'reference': _T_MetaPointer
                }>
            }
            export type L = {
                readonly 'id': string
                readonly 'parent': _pi.Optional_Value<string>
                readonly 'annotations': _i_core._T_List<null, string>
                readonly 'classifier': _T_MetaPointer
                readonly 'containments': _i_core._T_List<null, {
                    readonly 'containment': _T_MetaPointer
                    readonly 'children': _i_core._T_List<null, string>
                }>
                readonly 'properties': _i_core._T_List<null, {
                    readonly 'value': string
                    readonly 'property': _T_MetaPointer
                }>
                readonly 'references': _i_core._T_List<null, {
                    readonly 'targets': _i_core._T_List<null, {
                        readonly 'reference': string
                        readonly 'resolveInfo': string
                    }>
                    readonly 'reference': _T_MetaPointer
                }>
            }
        }
        export type nodes = _i_core._T_List<null, {
            readonly 'id': string
            readonly 'parent': _pi.Optional_Value<string>
            readonly 'annotations': _i_core._T_List<null, string>
            readonly 'classifier': _T_MetaPointer
            readonly 'containments': _i_core._T_List<null, {
                readonly 'containment': _T_MetaPointer
                readonly 'children': _i_core._T_List<null, string>
            }>
            readonly 'properties': _i_core._T_List<null, {
                readonly 'value': string
                readonly 'property': _T_MetaPointer
            }>
            readonly 'references': _i_core._T_List<null, {
                readonly 'targets': _i_core._T_List<null, {
                    readonly 'reference': string
                    readonly 'resolveInfo': string
                }>
                readonly 'reference': _T_MetaPointer
            }>
        }>
    }
    
    export namespace SerializationChunks {
        
        export namespace D {
        }
        export type D = _T_SerializationChunk
    }
