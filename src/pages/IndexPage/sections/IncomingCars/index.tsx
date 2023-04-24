import { FC } from "react";

import { Card, Table, Typography } from "~shared/ui";

const IncomingCars: FC = () => {
    const columns = [
        {
            accessor: "brand",
            Header: "Марка",
        },
        {
            accessor: "model",
            Header: "Модель",
        },
        {
            accessor: "totalIncoming",
            Header: "Кол-во поступлений",
        },
    ];

    const rows = [
        {
            key: "1",
            brand: "BMW",
            model: "BMW X5",
            totalIncoming: "12000руб",
        },
        {
            key: "2",
            brand: "KIA",
            model: "KIA Rio",
            totalIncoming: "10000руб",
        },
        {
            key: "3",
            brand: "LADA",
            model: "LADA Granta",
            totalIncoming: "12000руб",
        },
    ];

    return (
        <Card className="p-5 mt-8">
            <Typography tag='span' className="font-medium text-lg">Поступавшие машины</Typography>
            <Table columns={columns} data={rows} />
        </Card>
    )
}

export default IncomingCars;
