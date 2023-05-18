import { TableRow } from './TableRow'
import { TableDataRow } from './TableDataRow'

export function FormForService() {
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="2">motoForm</th>
                </tr>
            </thead>
            <tbody>
            <TableRow title='Imię' value='Jan' />
            <TableRow title='Kontakt' value='123456789' />
            <TableRow title='Poziom' value='1' />
            <TableDataRow title='Wzrok' value='20' />
            <TableDataRow title='Linia przejazdu' value='35' />
            <TableDataRow title='Praca gazem' value='25' />
            <TableDataRow title='Przeciwskręt' value='85' />
            <TableRow title='Total' value='70' />
            </tbody>
        </table>
    )
}
