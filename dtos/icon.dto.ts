export enum IconType {
    Icon = 'ICON',
    Image = 'IMAGE'
}

export default class IconDto {
    type: IconType;
    value: string;
}