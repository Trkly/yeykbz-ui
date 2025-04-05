import type { DefineComponent, Plugin } from "vue";
export declare const withInstall: <T extends DefineComponent>(comp: T & {
    name?: string;
}) => T & Plugin;
