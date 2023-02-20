import students from "./data"

import './style.css'


const Practise2 = () => {
    return (
        <table>
            <tr>
                <th className="">Company</th>
                <th>Contact</th>
                <th>Country</th>
            </tr>
                {students.map(student=> (
                    <tr>
                        <td >{student.company}</td>
                        <td>
                            {student.contact}
                        </td>
                        <td>
                            {student.country}
                        </td>
                    </tr>
                ))}
            


        </table>
    ) 
}

export default Practise2

