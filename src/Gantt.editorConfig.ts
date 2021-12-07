import { Properties, StructurePreviewProps, transformGroupsIntoTabs } from "./piw-utils-internal";
import { GanttPreviewProps } from "../typings/GanttProps";

export function getProperties(
    values: GanttPreviewProps,
    defaultProperties: Properties,
    platform: "web" | "desktop"
): Properties {
    console.log(values);
    if (platform === "web") {
        transformGroupsIntoTabs(defaultProperties);
    }
    return defaultProperties;
}
export function getPreview(values: GanttPreviewProps): StructurePreviewProps | null {
    console.log(values);
    return null;
}
