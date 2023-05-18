export function DriverProfileDataRow({lp, title, valueLeft, valueRight, levelOne, levelTwo,levelThree }) {
    return (
        <tr>
            <th>{lp}</th>
            <th>{title}:</th>
            <td style={valueLeft >= 70 ? {
                borderColor: 'green',
                color: 'green',
                background: ' lightgreen'
            } : {
                borderColor: 'red',
                color: 'red',
                background: 'darkred'
            }}>{valueLeft}</td>
            <td style={valueRight >= 70 ? {
                borderColor: 'green',
                color: 'green',
                background: ' lightgreen'
            } : {
                borderColor: 'red',
                color: 'red',
                background: 'darkred'
            }}>{valueRight}</td>
            <td style={levelOne ? {
                borderColor: 'green',
                color: 'green',
                background: ' lightgreen'
            } : {
                borderColor: 'red',
                color: 'red',
                background: 'darkred'
            }}>O</td>
            <td style={levelTwo ? {
                borderColor: 'green',
                color: 'green',
                background: ' lightgreen'
            } : {
                borderColor: 'red',
                color: 'red',
                background: 'darkred'
            }}>O</td>
            <td style={levelThree ? {
                borderColor: 'green',
                color: 'green',
                background: ' lightgreen'
            } : {
                borderColor: 'red',
                color: 'red',
                background: 'darkred'
            }}>O</td>
        </tr>
    )
}