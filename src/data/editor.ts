import { IEditorData } from '@/types/src';

export const data: IEditorData = {
    global: {
        orientation: 2, // 1: 竖屏, 2: 横屏
        allowVideoElements: 1,
        zoom: 1,
        override: {}
    },
    layouts: [{
        deviceCount: 1,
        combination: '1x1',
        width: 1920,
        height: 1080,
        elements: [{
            type: 'media', // media: 图片/视频, web: H5
            // x, y, width, height 百分比布局
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            data: [],
            muted: true,
            allowVideo: true,
            hasVideo: false
        }]
    }]
};
