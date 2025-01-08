import { RegularText } from "../atoms/Texts"

interface TableRowKeyValuePairProps {
    attribute: string;
    value: boolean;
}
const TableRowKeyValuePair = ({ attribute, value }: TableRowKeyValuePairProps) => {
    return (
        <tr>
            <td className="px-4 md:px-2 py-1">
            <RegularText text={attribute}/>
            </td>
            <td className="px-4 md:px-2 py-1">
                <RegularText className="ml-2 text-right" text={value ? "Yes" : "No"} />
            </td>
        </tr>
    )
}

export {
    TableRowKeyValuePair
}