import { FC } from "react";

import { Typography } from "~shared/ui";

import Orders from "./sections/Orders";
import SoldServices from "./sections/SoldServices";
import IncomingCars from "./sections/IncomingCars";

const IndexPage: FC = () => {

    return (
        <section className="mt-7 sm:mx-4 xl:mx-8">
            <div>
                <Typography tag="h2" className="font-semibold">Главная</Typography>
            </div>
            <Orders />
            <SoldServices />
            <IncomingCars />
        </section>
    )
}

export default IndexPage
