export interface IEditorData {
    global: IEditorGlobal;
    layouts: IEditorLayout[];
}
export interface IEditorGlobal {
    orientation: 1 | 2; // 1: 竖屏, 2: 横屏
    allowVideoElements: number;
    zoom: number;
    override: any;
}
export interface IEditorLayout {
    deviceCount: number;
    combination: '1x1' | '2x1' | '3x1';
    width: number;
    height: number;
    elements: IEditorElement[];
}
export interface IEditorElement {
    type: 'media' | 'web'; // media: 图片/视频, web: H5
    // x, y, width, height 百分比布局
    x: number;
    y: number;
    width: number;
    height: number;
    data: string[]; // 素材 url
    muted: boolean;
    allowVideo: boolean;
    hasVideo: boolean;
}
