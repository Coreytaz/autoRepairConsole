import { X } from 'lucide-react'
import { FC, useId, useMemo, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { Avatar, AvatarFallback, AvatarImage, Label } from '~shared/ui'

interface DragDropProps {
    name: string
}

const DragDrop: FC<DragDropProps> = ({ name }) => {
    const { register, getValues } = useFormContext();
    // FIXME
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const avatar = useMemo(() => getValues()[name], [])
    const [currentAvatar, setCurrentAvatar] = useState(avatar)
    const input = useId()
    const [drag, setDrag] = useState(false)

    const dragStartHandler = (e: React.DragEvent<HTMLDivElement | HTMLLabelElement>): void => {
        e.preventDefault()
        setDrag(true)
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement | HTMLLabelElement>): void => {
        e.preventDefault()
        setDrag(false)
    }

    const onDropHandler = (e: React.DragEvent<HTMLDivElement | HTMLLabelElement>): void => {
        e.preventDefault()
        const file = [...e.dataTransfer.files]

        if (!(/\.(jpe?g?|png|)$/).test(file[0].name)) {
            setDrag(false)

            return
        }

        const reader = new FileReader()
        reader.readAsDataURL(file[0])

        reader.onload = function (event) {
            setCurrentAvatar(event.target?.result as string)
        }

        setDrag(false)
    }

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault()
        const file = e.target.files

        if (file !== null) {
            if (!(/\.(jpe?g?|png|)$/).test(file[0].name)) {
                return
            }

            const reader = new FileReader()
            reader.readAsDataURL(file[0])

            reader.onload = function (event) {
                setCurrentAvatar(event.target?.result as string)
            }
        }

    }

    return (
        <Label htmlFor={input} className='relative cursor-pointer'>
            {drag
                ? <div
                    className='fixed top-0 bg-gray-100 opacity-80 text-center left-0 border-4 border-dashed border-black w-full h-screen z-50'
                    onDragStart={e => dragStartHandler(e)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                    onDrop={e => onDropHandler(e)}
                >Отпустите файл, чтобы загрузить его</div>
                :
                <div onDragStart={e => dragStartHandler(e)} onDragLeave={e => dragLeaveHandler(e)} onDragOver={e => dragStartHandler(e)} className='absolute rounded-full bg-black opacity-0 hover:opacity-70 z-10 block w-full h-full'>
                    <span className='absolute text-white block top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-10'>Выберите файл</span>
                    <input
                        {...register(name)}
                        id={input}
                        name={name}
                        className='opacity-0 absolute z-0 w-0 h-0 block'
                        type='file'
                        onChange={(value) => {
                            onChangeInput(value)
                        }}
                        accept=".jpg, .jpeg, .png" />

                </div>
            }
            <Avatar className='h-40 w-40'>
                <AvatarImage className='object-cover' src={currentAvatar !== avatar ? currentAvatar : avatar} />
                <AvatarFallback></AvatarFallback>
            </Avatar>
            {currentAvatar !== avatar ? <X onClick={(e) => {
                e.preventDefault(); setCurrentAvatar(avatar)
            }} className='absolute right-[-10px] top-[-10px] z-10 hover:text-red-500' /> : null}
        </Label >
    )
}

export default DragDrop;
