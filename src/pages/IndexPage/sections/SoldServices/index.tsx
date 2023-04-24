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
            service: "Тех. осмотр",
            sales: "20",
            totalService: "16000руб",
        },
        {
            key: "2",
            service: "Масло ДВС",
            sales: "10",
            totalService: "10000руб",
        },
        {
            key: "3",
            service: "Ремонт ДВС",
            sales: "4",
            totalService: "6000руб",
        },
    ];

    return (
        <Card className="p-5 mt-8">
            <Typography tag='span' className="font-medium text-lg">Количество проданных услуг</Typography>
            <Table columns={columns} data={rows} />
        </Card>
    )
}

export default SoldServices;
