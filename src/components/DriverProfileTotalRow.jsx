export function DriverProfileTotalRow({ lp, title, valueLeft, valueRight }) {
    return (
        <tr style={{fontWeight: "bold"}}>
            <th></th>
            <th>{title}:</th>
            <td>{valueLeft}</td>
            <td>{valueRight}</td>
        </tr>
    )
}