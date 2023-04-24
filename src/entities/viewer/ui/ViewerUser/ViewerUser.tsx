import { FC } from 'react'

import { useStoreViewer } from '~entities/viewer';

import { Avatar, AvatarFallback, AvatarImage, Typography } from '~shared/ui';

const ViewerUser: FC = () => {
    const viewer = useStoreViewer((state) => state)

    return (
        <>
            <Typography tag="span">{viewer.Fullname}</Typography>
            <Avatar>
                <AvatarImage src={viewer.avatar} />
                <AvatarFallback>{viewer.Fullname}</AvatarFallback>
            </Avatar>
        </>
    )
}

export default ViewerUser;
