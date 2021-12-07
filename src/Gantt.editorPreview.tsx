import { parseStyle } from "./piw-utils-internal";
import { createElement } from "react";
import { GanttPreviewProps } from "../typings/GanttProps";

declare function require(name: string): string;

export function preview(props: GanttPreviewProps) {
    return (<div style={parseStyle(props.style)}></div>);
}

export function getPreviewCss(): string {
    return require("./ui/index.scss");
}