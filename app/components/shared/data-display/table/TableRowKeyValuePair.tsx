import { RegularText } from "@/app/components/ui/Texts";

interface TableRowKeyValuePairProps {
    attribute: string;
    value: boolean;
}
const TableRowKeyValuePair = ({ attribute, value }: TableRowKeyValuePairProps) => {
    return (
        <tr>
            <td className="p-4 py-3">
            <RegularText>{attribute}</RegularText>
            </td>
            <td className="p-4 py-3">
                <RegularText className="ml-2 text-right text-brandColor font-bold">{value ? "Yes" : "No"}</RegularText>
            </td>
        </tr>
    )
}

export {
    TableRowKeyValuePair
}