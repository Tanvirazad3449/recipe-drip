import { RegularText } from "@/app/components/ui/Texts";

interface TableRowKeyValuePairProps {
    attribute: string;
    value: boolean;
}
const TableRowKeyValuePair = ({ attribute, value }: TableRowKeyValuePairProps) => {
    return (
        <tr>
            <td className="px-4 xl:px-4 py-2">
            <RegularText>{attribute}</RegularText>
            </td>
            <td className="px-4 xl:px-4 py-2">
                <RegularText className="ml-2 text-right">{value ? "Yes" : "No"}</RegularText>
            </td>
        </tr>
    )
}

export {
    TableRowKeyValuePair
}