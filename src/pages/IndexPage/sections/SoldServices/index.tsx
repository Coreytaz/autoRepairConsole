import { FC } from "react";

import { Card, Table, Typography } from "~shared/ui";

const SoldServices: FC = () => {
    const columns = [
        {
            accessor: "service",
            Header: "Услуга",
        },
        {
            accessor: "sales",
            Header: "Кол-во продаж",
        },
        {
            accessor: "totalService",
            Header: "Общий доход с услуги",
        },
    ];

    const rows = [
        {
            key: "1",
            service: "двигатель",
            sales: "20",
            totalService: "120000руб",
        },
        {
            key: "2",
            service: "ТО",
            sales: "10",
            totalService: "100000руб",
        },
        {
            key: "3",
            service: "Замена масла",
            sales: "4",
            totalService: "120000руб",
        },
    ];

    return (
        <Card className="p-5 mt-8">
            <Typography tag='span' className="font-medium text-lg">Проданные услуги по кол-ву продаж</Typography>
            <Table columns={columns} data={rows} />
        </Card>
    )
}

export default SoldServices;
