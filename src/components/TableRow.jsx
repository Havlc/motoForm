export function TableRow({ title, value }) {
    return (
        <tr>
            <th>{title}:</th>
            <td>{value}</td>
        </tr>
    )
}