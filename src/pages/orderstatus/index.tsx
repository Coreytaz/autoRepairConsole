import { FC } from 'react'

import { Table } from "~shared/ui";
import { Card } from "~shared/ui";
import { Typography } from '~shared/ui';

const OrderStatus: FC = () => {
    return (


        <div className='mt-7 mx-8'>
        <div className='pb-6'  >
          <Typography tag='h2' className="font-semibold">Статус заказа</Typography>
        </div>
        <Card className='w-full h-full' variant='default'>
  
          <div className='px-7 pt-2 pb-7'>
            <>
              <Table className='' columns={columns} data={rows} isPagination pageIndex={0} pageSize={10} isSearch />
            </>
          </div>
        </Card>
      </div>
  


    )
}

const columns = [
    { accessor: "orderNumber", Header: "Заказ" },
    { accessor: "date", Header: "Дата и время" },
    { accessor: "request", Header: "Услуга" },
    { accessor: "Mark", Header: "Марка" },
   
  ];
  
  const rows = [
    { key: "1", orderNumber: "1",  date: "04.08.21 11:00", request: "услуга",  Mark: "Лада гранта" },
    { key: "2", orderNumber: "2",  date: "11.08.21 12:00", request: "услуга", Mark: "DMX X5" },
    { key: "3", orderNumber: "3",  date: "22.08.21 17:30", request: "услуга", Mark: "BMW X5" },
    { key: "4", orderNumber: "4",  date: "28.08.21 21:00", request: "услуга", Mark: "BMW X5" },
    { key: "5", orderNumber: "5",  date: "01.08.21 13:00", request: "услуга", Mark: "BMW X5" },
  ];
  

export default OrderStatus;
