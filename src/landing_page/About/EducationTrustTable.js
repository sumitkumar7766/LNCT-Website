import React from "react";

const EducationTrustTable = () => {
    const data = [
        {
            college: 'Administration',
            name: 'Dr. ASHOK KUMAR RAI',
            designation: 'Director Administration',
        },
        {
            college: 'LNCT',
            name: 'Dr. VINAY KUMAR SAHU',
            designation: 'Principal',
        },
        {
            college: 'LNCT S',
            name: 'Dr. VISHVENDRA NATH BARTARIA',
            designation: 'Principal',
        },
        {
            college: 'LNCT E',
            name: 'Dr. ANIL K. SAXENA',
            designation: 'Principal',
        },
        {
            college: 'LNCP',
            name: 'Dr. Mehta Parulben D.',
            designation: 'Principal',
        },
        {
            college: 'LNCT BPL Indore Campus',
            name: 'Dr. PRASHANT PUROHIT',
            designation: 'Principal',
        },
        {
            college: 'T & P',
            name: 'Dr. ANUJ GARG',
            designation: 'Group Director',
        },
        {
            college: 'R & D',
            name: 'Dr. ABHINEET A GOYAL',
            designation: 'Group Director',
        },
        {
            college: 'MBA',
            name: 'Prof. (Dr.) ARVIND SINGH',
            designation: 'Director',
        },
        {
            college: 'MCA',
            name: 'Dr. SANJAY BAJPAI',
            designation: 'Director',
        },
        {
            college: 'Student Welfare',
            name: 'Dr. AMIT SHRIVASTAVA',
            designation: 'Dean',
        },
    ];
    return (
        <div className="container" >
            <div className="row mt-4">
                <div className="col">
                    <div className="p-6 w-100 text-light fw-bold">
                        <h2 className="text-3xl font-bold text-center mb-2 fw-bolder">H.K. KALCHURI EDUCATION TRUST</h2>
                        <div className="w-100 h-1 bg-purple-600 mx-auto mb-6"></div>

                        <table className="table-auto w-full border border-collapse border-gray-300 mb-6 w-100">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border px-4 py-2 text-center fw-bolder" colSpan={2}>Managing Trustee</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2 font-semibold text-lg">Shri Jai Narayan Chouksey</td>
                                    <td className="border px-4 py-2 text-lg">Chairman and Managing Trustee of LNCT Group</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className="table-auto w-100 mt-4 border border-collapse border-gray-300">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border px-4 py-2 text-center fw-bolder" colSpan={2}>Trustees</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2 font-medium text-lg">Smt. Poonam Chouksey</td>
                                    <td className="border px-4 py-2 text-lg">Vice-Chairperson, LNCT Group, Bhopal</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2 font-medium text-lg">Dr. Anupam Chouksey</td>
                                    <td className="border px-4 py-2 text-lg">Secretary LNCT Group, Bhopal</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="p-6">
                        <h1 className="text-light font-semibold text-center mt-5">
                            OSD (Officer on Special Duty)
                        </h1>

                        <table className="w-100 table-auto border border-gray-300 text-light text-center fw-bold">
                            <thead>
                                <tr className="bg-gray-300 border">
                                    <th className="text-left p-4 fs-5 font-bold text-lg border-r border">COLLEGE NAME</th>
                                    <th className="border text-left fs-5 p-4 font-bold text-lg">NAME</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border border-gray-300">
                                    <td className="border p-2 font-semibold">GROUP OSD</td>
                                    <td className="p-2 text-blue-600 font-medium">
                                        Dr. SUNIL KUMAR SINGH
                                    </td>
                                </tr>
                                <tr className="border border-gray-300">
                                    <td className="border p-2 font-semibold">LNCT S</td>
                                    <td className="p-2 text-blue-600 font-medium">
                                        Dr. AMITBODH UPADHYAYA
                                    </td>
                                </tr>
                                <tr className="border border-gray-300">
                                    <td className="border p-2 font-semibold">LNCT E</td>
                                    <td className="p-2 font-bold">
                                        Ms. Usha Singh
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="w-90 w-lg-100">
                        <h1 className="text-light  font-extrabold text-center mb-2 mt-5">
                            PRINCIPAL/ DIRECTOR/ DEAN
                        </h1>

                        <table className="w-100 text-center border fw-bold text-light">
                            <thead>
                                <tr className="bg-gray-300">
                                    <th className="text-left fs-5 fw-bolder p-4 font-bold text-lg border">COLLEGE NAME</th>
                                    <th className="text-left fs-5 fw-bolder p-4 font-bold text-lg border">NAME</th>
                                    <th className="text-left fs-5 fw-bolder p-4 font-bold text-lg border">DESIGNATION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((entry, index) => (
                                    <tr key={index} className="border">
                                        <td className="p-3 border font-semibold">{entry.college}</td>
                                        <td className="p-3 border text-warning">{entry.name}</td>
                                        <td className="p-3 border font-bold">{entry.designation}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationTrustTable;
