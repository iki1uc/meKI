export const MIACORE = {
    analyse(meta){
        return {
            flux: meta.tech.ix + meta.tech.xi + meta.tech.x4,
            mode: meta.mode
        };
    }
};

