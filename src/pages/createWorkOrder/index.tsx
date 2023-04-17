import { FC } from "react"
import { Steps } from "react-step-builder";

import { Card, Typography } from "~shared/ui";

import { StepsProgress } from "~entities/ProgressStepsBar";

import ClientInfo from "./clientInfo";
import AvtoInfo from "./avtoInfo";

const CreateWorkOrder: FC = () => {

    return (
        <section className="mt-7 sm:mx-4 xl:mx-8">
            <div>
                <Typography tag="h2" className="font-semibold">Создать заказ-наряда</Typography>
            </div>
            <Card className='w-full h-full mt-8 p-5 text-center' variant='default'>
                <StepsProgress />
                <Steps>
                    <ClientInfo />
                    <AvtoInfo />
                </Steps>
            </Card>
        </section>
    )
}

export default CreateWorkOrder;
