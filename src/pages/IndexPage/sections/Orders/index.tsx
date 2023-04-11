import { BarChart4, PiggyBank, Wallet } from 'lucide-react'
import { FC } from 'react'

import { Card, Typography } from '~shared/ui'

const Orders: FC = () => {
    return (
        <div className="flex mt-6 sm:justify-between xl:gap-5 xl:justify-start">
            <Card className="flex items-center gap-5 px-16 py-8 2xl:px-16 xl:px-8 sm:px-4">
                <div className="bg-primaryLight rounded-full h-20 w-20 flex items-center justify-center sm:h-12 sm:w-12">
                    <BarChart4 size={36} />
                </div>
                <div>
                    <Typography tag="h2" className="font-bold lg:text-3xl sm:text-xl">34</Typography>
                    <Typography tag="span" className="">всего заказов</Typography>
                </div>
            </Card>
            <Card className="flex items-center gap-5 px-16 py-8 2xl:px-16 xl:px-8 sm:px-4">
                <div className="bg-primaryLight rounded-full h-20 w-20 flex items-center justify-center sm:h-12 sm:w-12">
                    <Wallet size={36} />
                </div>
                <div>
                    <Typography tag="h2" className="font-bold lg:text-3xl sm:text-xl">300000₽</Typography>
                    <Typography tag="span" className="">общий расход</Typography>
                </div>
            </Card>
            <Card className="flex items-center gap-5 px-16 py-8 2xl:px-16 xl:px-8 sm:px-4">
                <div className="bg-primaryLight rounded-full h-20 w-20 flex items-center justify-center sm:h-12 sm:w-12">
                    <PiggyBank size={36} />
                </div>
                <div>
                    <Typography tag="h2" className="font-bold lg:text-3xl sm:text-xl">1000000₽</Typography>
                    <Typography tag="span" className="">общий доход</Typography>
                </div>
            </Card>
        </div>
    )
}

export default Orders
