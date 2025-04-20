declare const comtype: string[];
type ComType = (typeof comtype)[number];
interface MessageProps {
    id?: any;
    type?: ComType;
    icon?: string;
    content?: string;
    duration?: number;
    plain?: boolean;
    offset?: number;
    destroy?: () => void;
}
export declare const Message: ({ type, content, plain, icon, duration, }: MessageProps) => {
    id: string;
    vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    vm: import("vue").ComponentInternalInstance;
    props: {
        type: string | undefined;
        content: string | undefined;
        plain: boolean | undefined;
        duration: number;
        id: string;
        icon: string | undefined;
        destroy: () => void;
    };
};
export declare const getLastBottomOffset: (id: string) => any;
export {};
