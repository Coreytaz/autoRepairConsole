import { FC } from 'react'

import { Table } from "~shared/ui";
import { Card } from "~shared/ui";
import { Typography } from '~shared/ui';

const OrderStatus: FC = () => {
  return (
    <div className='mt-7 mx-8'>
      <div className='pb-6'>
        <Typography tag='h2' className="font-semibold">Статус заказа</Typography>
      </div>
      <Card className='w-full h-full' variant='default'>
        <div className='px-7 pt-2 pb-7'>
          <Table columns={columns} data={rows} isPagination pageIndex={0} pageSize={10} isSearch />
        </div>
      </Card>
    </div>
  )
}

const columns = [
  { accessor: "orderNumber", Header: "Заказ" },
    { accessor: "date", Header: "Дата и время" },
    { accessor: "request", Header: "Услуга" },
    { accessor: "orderStatus", Header: "Статус заказа" },
    { accessor: "Mark", Header: "Марка" },

];

const rows = [
  { key: "1", orderNumber: "1",  date: "04.08.21 11:00", request: "Тех. Осмотр", orderStatus: "В процессе",  Mark: "LADA Granta" },
  { key: "2", orderNumber: "2",  date: "11.08.21 12:00", request: "Ремонт ДВС", orderStatus: "Ожидание деталей", Mark: "DMX X5" },
  { key: "3", orderNumber: "3",  date: "22.08.21 17:30", request: "Масло ДВС", orderStatus: "В процессе", Mark: "BMW X5" },
  { key: "4", orderNumber: "4",  date: "28.08.21 21:00", request: "Масло ДВС", orderStatus: "В процессе", Mark: "Mazda CX-5" },
  { key: "5", orderNumber: "5",  date: "01.08.21 13:00", request: "Ремонт ДВС", orderStatus: "Ожидание деталей", Mark: "BMW X5" },
  { key: "6", orderNumber: "6",  date: "04.08.21 11:00", request: "Масло ДВС", orderStatus: "В процессе",  Mark: "LADA Granta" },
  { key: "7", orderNumber: "7",  date: "11.08.21 12:00", request: "Тех. Осмотр", orderStatus: "Ожидание деталей", Mark: "Mazda CX-5" },
  { key: "8", orderNumber: "8",  date: "22.08.21 17:30", request: "Ремонт генератора", orderStatus: "В процессе", Mark: "KIA XCeed" },
  { key: "9", orderNumber: "9",  date: "28.08.21 21:00", request: "Тех. Осмотр", orderStatus: "В процессе", Mark: "BMW X5" },
  { key: "10", orderNumber: "10",  date: "01.08.21 13:00", request: "Ремонт генератора", orderStatus: "Ожидание деталей", Mark: "BMW X5" },
  { key: "11", orderNumber: "11",  date: "04.08.21 11:00", request: "Тех. Осмотр", orderStatus: "В процессе",  Mark: "LADA Granta" },
  { key: "12", orderNumber: "12",  date: "11.08.21 12:00", request: "Ремонт ДВС", orderStatus: "Ожидание деталей", Mark: "DMX X5" },
  { key: "13", orderNumber: "13",  date: "22.08.21 17:30", request: "Масло ДВС", orderStatus: "В процессе", Mark: "KIA XCeed" },
];


export default OrderStatus;
