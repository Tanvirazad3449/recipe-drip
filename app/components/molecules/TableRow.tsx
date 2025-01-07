import { RegularText } from "../atoms/Texts"

interface TableRowKeyValuePairProps {
    attribute: string;
    value: boolean;
}
const TableRowKeyValuePair = ({ attribute, value }: TableRowKeyValuePairProps) => {
    return (
        <tr>
            <td className="px-4 py-2 ">
                <RegularText text={attribute} />
            </td>
            <td className="px-4 py-2 ">
                <RegularText className={`ml-2 text-center ${value ? "bg-green-200 text-green-600" : "bg-red-200 text-red-600"} p-2`} text={value ? "Yes" : "No"} />
            </td>
        </tr>
    )
}

export {
    TableRowKeyValuePair
}