import type { App } from "vue";
declare const _default: {
    install: (app: App) => void;
    YButton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        readonly size: {
            readonly type: import("vue").PropType<import("./Button/Button").ISize>;
            readonly default: "medium";
        };
        readonly color: {
            readonly type: import("vue").PropType<import("./Button/Button").IColor>;
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
        readonly size: {
            readonly type: import("vue").PropType<import("./Button/Button").ISize>;
            readonly default: "medium";
        };
        readonly color: {
            readonly type: import("vue").PropType<import("./Button/Button").IColor>;
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
        readonly size: import("./Button/Button").ISize;
        readonly color: import("./Button/Button").IColor;
        readonly round: boolean;
        readonly plain: boolean;
        readonly icon: string;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    YCard: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        shadow: {
            type: import("vue").PropType<"always" | "hover" | "never">;
            default: string;
        };
        bodyStyle: {
            type: ObjectConstructor;
            default: () => {};
        };
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        shadow: {
            type: import("vue").PropType<"always" | "hover" | "never">;
            default: string;
        };
        bodyStyle: {
            type: ObjectConstructor;
            default: () => {};
        };
    }>> & Readonly<{}>, {
        shadow: "always" | "hover" | "never";
        bodyStyle: Record<string, any>;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
};
export default _default;
