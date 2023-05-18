export function TableDataRow({ title, value }) {
    return (
        <tr>
            <th>{title}:</th>
            <td style={value >= 70 ? {
                borderColor: 'green',
                color: 'green'
            } : {
                borderColor: 'red',
                color: 'red'
            }}>{value}</td>
        </tr>
    )
}
