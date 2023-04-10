import { BarChart4, PiggyBank, Wallet } from 'lucide-react'
import { FC } from 'react'

import { Card, Typography } from '~shared/ui'

const Orders: FC = () => {
    return (
        <div className="flex mt-6 justify-between">
            <Card className="flex items-center gap-5 px-16 py-8">
                <div className="bg-primaryLight rounded-full h-20 w-20 flex items-center justify-center">
                    <BarChart4 size={40} />
                </div>
                <div>
                    <Typography tag="h1" className="font-bold">34</Typography>
                    <Typography tag="span" className="">всего заказов</Typography>
                </div>
            </Card>
            <Card className="flex items-center gap-5 px-16 py-8">
                <div className="bg-primaryLight rounded-full h-20 w-20 flex items-center justify-center">
                    <Wallet size={40} />
                </div>
                <div>
                    <Typography tag="h1" className="font-bold">300000₽</Typography>
                    <Typography tag="span" className="">общий расход</Typography>
                </div>
            </Card>
            <Card className="flex items-center gap-5 px-16 py-8">
                <div className="bg-primaryLight rounded-full h-20 w-20 flex items-center justify-center">
                    <PiggyBank size={40} />
                </div>
                <div>
                    <Typography tag="h1" className="font-bold">1000000₽</Typography>
                    <Typography tag="span" className="">общий доход</Typography>
                </div>
            </Card>
        </div>
    )
}

export default Orders
