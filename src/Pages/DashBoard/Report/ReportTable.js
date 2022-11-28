import React from 'react';

const ReportTable = ({ report, count }) => {

    const { id, email, name, categoryName, sallerName, report: PReport } = report;
    return (
        <tr>
            <th>{count + 1}</th>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{categoryName}</td>
            <td>{sallerName}</td>
            <td>{PReport}</td>
        </tr>
    );
};

export default ReportTable;