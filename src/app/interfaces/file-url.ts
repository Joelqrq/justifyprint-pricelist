export interface VariantUrl extends FileUrl {
    identifier: string;
    urls: string[];
    variants?: FileUrl[];
}

export interface FileUrl {
    identifier: string;
    urls: string[];
}
