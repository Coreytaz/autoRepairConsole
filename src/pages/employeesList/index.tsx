import { FC } from 'react';

import { Table } from "~shared/ui";
import { Card } from "~shared/ui";
import { Typography } from '~shared/ui';

const EmployeesListPage: FC = () => {
  return (
    <div className='mt-7 mx-8'>
      <div className='pb-6'>
        <Typography tag='h2' className="font-semibold">Список сотрудников</Typography>
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
  { accessor: "nameOfEmployee", Header: "ФИО Сотрудника" },
  { accessor: "post", Header: "Должность" },
  { accessor: "contacts", Header: "Контакты" },
];

const rows = [
  { key: "1", nameOfEmployee: "Петров И. И.",  post: "Механик", contacts: "+7-900-123-45-67" },
  { key: "2", nameOfEmployee: "Попов П. К.",  post: "Механик", contacts: "+7-900-132-45-67" },
  { key: "3", nameOfEmployee: "Иванов В. Д",  post: "Электрик", contacts: "+7-900-213-45-67" },
   { key: "4", nameOfEmployee: "Карпов П. Б",  post: "Электрик", contacts: "+7-900-213-45-67" }
  
];


export default EmployeesListPage;
