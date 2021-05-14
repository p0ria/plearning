import { Button, Card, CircularProgress, TextField } from "@material-ui/core";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { IconType } from "../../dtos/icon.dto";
import { createCategoryAction } from "../../state/category/category.effect";
import AutoComplete, { AutoCompleteItem } from "../AutoComplete/AutoComplete";
import { BottomSheetFullContentProps } from "../Modals/BottomSheetFull";

export default function NewCategory({ onClose }: BottomSheetFullContentProps) {
    const { register, handleSubmit, watch, formState: { errors, isValid, isSubmitting } } = useForm({ mode: 'onChange' })
    const [icon, setIcon] = useState()
    const dispatch = useDispatch()
    const onSubmit = async data => {
        return dispatch(createCategoryAction({
            title: data.title,
            icon: {
                type: IconType.Icon,
                value: data.icon
            }
        }))
    }
    const validateTitle = async value => {
        return new Promise<boolean>(resolve => {
            setTimeout(() => resolve(true), 2000)
        })
    }
    const handleSearchIcon = async (searchTerm: string): Promise<AutoCompleteItem[]> => {
        const response = await fetch(`http://localhost:3000/api/icons?q=${searchTerm}`, {
            method: 'GET'
        })

        const values: string[] = await response.json()
        return values.map(value => ({ label: value, value }))
    }
    const handleSelectedIconChanged = (selectedIcon: AutoCompleteItem | null) => {
        setIcon(selectedIcon.value)
    }

    return (
        <>
            <div className="container mx-auto p-8">
                <Card>
                    <div className="w-full max-w-xl mx-auto p-8">
                        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="flex flex-col gap-8">
                            <TextField label="عنوان"
                                {...register('title', {
                                    required: true,
                                    validate: {
                                        unique: validateTitle
                                    }
                                })}
                                required>
                            </TextField>
                            <AutoComplete required onSearch={handleSearchIcon} onSelectedChanged={handleSelectedIconChanged} />
                            {icon && <i className={icon}></i>}
                            <div className="flex self-end gap-2">
                                <Button type="submit" variant="contained" color="secondary" disabled={!isValid || isSubmitting}
                                    endIcon={isSubmitting && <CircularProgress color="inherit" size=".8rem" className="ms-1" />}>
                                    ایجاد
                                </Button>
                                <Button disabled={isSubmitting}>انصراف</Button>
                            </div>
                        </form>
                    </div>
                </Card>
            </div>
        </>
    )
}