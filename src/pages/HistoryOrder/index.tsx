import { FC } from 'react';

import { Table } from "~shared/ui";
import { Card } from "~shared/ui";
import { Typography } from '~shared/ui';

const HistoryOrderPage: FC = () => {
  return (
    <div className='mt-7 mx-8'>
      <div className='pb-6'>
        <Typography tag='h2' className="font-semibold">История заказов</Typography>
      </div>
      <Card className='w-full h-full' variant='default'>
        <div className='px-7 pt-2 pb-7'>
          <Table className='' columns={columns} data={rows} isPagination isSearch />
        </div>
      </Card>
    </div>



  );
};

const columns = [
  { accessor: "orderNumber", Header: "Заказ" },
  { accessor: "request", Header: "Услуга" },
  { accessor: "nameOfEmployee", Header: "ФИО Сотрудника" },
  { accessor: "nameOfClient", Header: "ФИО Клиента" },
  { accessor: "auto", Header: "Автомобиль" },
  { accessor: "price", Header: "Цена" },
];

const rows = [
  { key: "1", orderNumber: "1", request: "услуга", nameOfEmployee: "сотрудник 1", nameOfClient: "Клиент 1", auto: "автомобиль", price: "10000 р" },
  { key: "2", orderNumber: "2", request: "услуга", nameOfEmployee: "сотрудник 2", nameOfClient: "Клиент 2", auto: "автомобиль", price: "14400 р" },
  { key: "3", orderNumber: "3", request: "услуга", nameOfEmployee: "сотрудник 3", nameOfClient: "Клиент 3", auto: "автомобиль", price: "10300 р" },
  { key: "4", orderNumber: "4", request: "услуга", nameOfEmployee: "сотрудник 2", nameOfClient: "Клиент 4", auto: "автомобиль", price: "12200 р" },
  { key: "5", orderNumber: "5", request: "услуга", nameOfEmployee: "сотрудник 2", nameOfClient: "Клиент 5", auto: "автомобиль", price: "10780 р" },
];


export default HistoryOrderPage;
