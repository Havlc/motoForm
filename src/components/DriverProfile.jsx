import { DriverProfileRow } from "./DriverProfileRow"
import { DriverProfileDataRow } from "./DriverProfileDataRow"
import { DriverProfileTotalRow } from "./DriverProfileTotalRow"

export function DriverProfile() {
    return (
        <table>
            <thead>
                <tr style={{ background: 'lightblue' }}>
                    <th colSpan="8" >Profil motocyklisty</th>
                </tr>
                <DriverProfileRow title='Imię' value='Jan' />
                <DriverProfileRow title='Kontakt' value='123456789' />
                <DriverProfileRow title='Zdjęcie' value='miejsce na Twoje zdjęcie' />
                <tr style={{ background: 'burlywood' }}>
                    <th>Lp</th>
                    <th>Nazwa</th>
                    <th colSpan="1">Strona Lewa
                    </th>
                    <th colSpan="1">Strona Prawa
                    </th>
                    <th colSpan="3">Poziom
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </th>

                    <th>Zdjęcie</th>
                </tr>
                
            </thead>
            <tbody>
                <DriverProfileDataRow lp={1} title='Wzrok' valueLeft={20} valueRight={70} levelOne={false} />
                <DriverProfileDataRow lp={2} title='Linia przejazdu' valueLeft={80} valueRight={30} levelOne={true} />
                <DriverProfileDataRow lp={3} title='Praca gazem' valueLeft={30} valueRight={20} levelOne={true} levelTwo={true} />
                <DriverProfileDataRow lp={4} title='Przeciwskręt' valueLeft={70} valueRight={70} levelOne={true} levelTwo={true} levelThree={true} />
                <DriverProfileDataRow lp={5} title='Hamowanie' valueLeft={75} valueRight={70} levelOne={true} levelTwo={true} levelThree={true} />
                <DriverProfileDataRow lp={6} title='Pozycja' valueLeft={35} valueRight={70} levelOne={false} />
                <DriverProfileTotalRow title='Total' valueLeft={45} valueRight={65} />
            </tbody>
        </table>
    )
}

/*<tr>
                    <th></th>
                    <th></th>
                    <th colSpan="2" style={{ display: "flex" }}>
                        <td style={{ flexDirection: "row-reverse" }}>L</td>
                        <td>P</td>
                    </th>
                    <th colSpan="3">
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </th>
                    <th></th>
                </tr>*/
