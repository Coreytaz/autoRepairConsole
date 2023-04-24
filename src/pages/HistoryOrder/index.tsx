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
  { key: "1", orderNumber: "1", request: "Тех. Осмотр", nameOfEmployee: "Петров И. И.", nameOfClient: "Климов В. Д.", auto: "BMW X5", price: "800 р" },
  { key: "2", orderNumber: "2", request: "Ремонт генератора", nameOfEmployee: "Петров И. И.", nameOfClient: "Панова П. П.", auto: "Ford explorer", price: "700 р" },
  { key: "3", orderNumber: "3", request: "Масло ДВС", nameOfEmployee: "Иванов И. И", nameOfClient: "Комаров П. П.", auto: "LADA Granta", price: "1000 р" },
  { key: "4", orderNumber: "4", request: "Ремонт ДВС", nameOfEmployee: "Попов П. П.", nameOfClient: "Панов М. И.", auto: "LADA Vesta", price: "1500 р" },
  { key: "5", orderNumber: "5", request: "Масло ДВС", nameOfEmployee: "Иванов И. И", nameOfClient: "Попов И. М.", auto: "BMW X3", price: "1000 р" },
  { key: "6", orderNumber: "6", request: "Тех. Осмотр", nameOfEmployee: "Петров И. И.", nameOfClient: "Климов В. Д.", auto: "Mercedes-Benz CLC", price: "800 р" },
  { key: "7", orderNumber: "7", request: "Ремонт генератора", nameOfEmployee: "Петров И. И.", nameOfClient: "Панова П. П.", auto: "Mazda CX-5", price: "700 р" },
  { key: "8", orderNumber: "8", request: "Масло ДВС", nameOfEmployee: "Иванов И. И", nameOfClient: "Комаров П. П.", auto: "KIA rio", price: "1000 р" },
  { key: "9", orderNumber: "9", request: "Ремонт ДВС", nameOfEmployee: "Попов П. П.", nameOfClient: "Панов М. И.", auto: "KIA XCeed", price: "1500 р" },
  { key: "10", orderNumber: "10", request: "Масло ДВС", nameOfEmployee: "Иванов И. И", nameOfClient: "Попов И. М.", auto: "Ford fiesta", price: "1000 р" },
  { key: "11", orderNumber: "11", request: "Тех. Осмотр", nameOfEmployee: "Петров И. И.", nameOfClient: "Климов В. Д.", auto: "BMW X5", price: "800 р" },
  { key: "12", orderNumber: "12", request: "Ремонт генератора", nameOfEmployee: "Петров И. И.", nameOfClient: "Панова П. П.", auto: "Ford explorer", price: "700 р" },
  { key: "13", orderNumber: "13", request: "Масло ДВС", nameOfEmployee: "Иванов И. И", nameOfClient: "Комаров П. П.", auto: "LADA Granta", price: "1000 р" },
  { key: "14", orderNumber: "14", request: "Ремонт ДВС", nameOfEmployee: "Попов П. П.", nameOfClient: "Панов М. И.", auto: "LADA Vesta", price: "1500 р" },
];


export default HistoryOrderPage;
