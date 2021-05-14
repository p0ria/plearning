import Icon from '../schemas/icon.schema';
import { toDto } from '../../utils/db-utils';

export const searchIcons = async (searchTerm: string): Promise<string[]> => {
    let icons = await Icon.find({
        value: {
            $regex: `.*${searchTerm}.*`,
            $options: 'i'
        }
    })
    return icons.map(icon => {
        const { value } = toDto(icon)
        return value;
    });
}