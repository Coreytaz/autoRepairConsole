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
  { key: "1", nameOfEmployee: "Петров Иван Иванович",  post: "Механик", contacts: "+7-900-123-45-67" },
  { key: "2", nameOfEmployee: "Попов Павел Кириллович",  post: "Механик", contacts: "+7-900-132-45-67" },
  { key: "3", nameOfEmployee: "Иванов Василий Дмитриевич",  post: "Электрик", contacts: "+7-900-213-45-67" },
   { key: "4", nameOfEmployee: "Карпов Петр Борисович",  post: "Электрик", contacts: "+7-922-400-47-77" }
  
];


export default EmployeesListPage;
