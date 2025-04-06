import type { PropType } from "vue";
export type ISize = "small" | "medium" | "large";
export type IColor = "black" | "gray" | "red" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink";
export declare const props: {
    readonly throttle: {
        readonly type: NumberConstructor;
        readonly default: 500;
    };
    readonly size: {
        readonly type: PropType<ISize>;
        readonly default: "medium";
    };
    readonly color: {
        readonly type: PropType<IColor>;
        readonly default: "blue";
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly plain: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "";
    };
};
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly throttle: {
        readonly type: NumberConstructor;
        readonly default: 500;
    };
    readonly size: {
        readonly type: PropType<ISize>;
        readonly default: "medium";
    };
    readonly color: {
        readonly type: PropType<IColor>;
        readonly default: "blue";
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly plain: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "";
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly throttle: {
        readonly type: NumberConstructor;
        readonly default: 500;
    };
    readonly size: {
        readonly type: PropType<ISize>;
        readonly default: "medium";
    };
    readonly color: {
        readonly type: PropType<IColor>;
        readonly default: "blue";
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly plain: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "";
    };
}>> & Readonly<{}>, {
    readonly throttle: number;
    readonly size: ISize;
    readonly color: IColor;
    readonly round: boolean;
    readonly plain: boolean;
    readonly icon: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
