import { Card, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { FcAdvertising, FcAudioFile, FcOpenedFolder } from "react-icons/fc";
import { FiArrowLeft } from "react-icons/fi";
import Header from "../../components/Header/Header";
import BottomSheetFull from "../../components/Modals/BottomSheetFull";
import NewCategory from "../../components/NewCategory.tsx/NewCategory";

export default function Panel() {
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false);
    }
    const handleClickOpen = () => {
        setOpen(true);
    }

    return (
        <>
            <Header />
            <div className="container max-w-md mx-auto flex flex-col gap-3 p-8">
                <Card className="flex justify-between items-center p-8 hover:bg-indigo-100 cursor-pointer"
                    onClick={handleClickOpen}>
                    <div className="flex flex-1 items-center gap-2">
                        <FcOpenedFolder className="text-lg" />
                        <Typography variant="subtitle1">ایجاد دسته بندی جدید</Typography>
                    </div>
                    <FiArrowLeft className="text-lg" />
                </Card>
                <Card className="flex justify-between items-center p-8 hover:bg-indigo-100">
                    <div className="flex flex-1 items-center gap-2">
                        <FcAdvertising className="text-lg" />
                        <Typography variant="subtitle1">ایجاد دوره جدید</Typography>
                    </div>
                    <FiArrowLeft className="text-lg" />
                </Card>
                <Card className="flex justify-between items-center p-8 hover:bg-indigo-100">
                    <div className="flex flex-1 items-center gap-2">
                        <FcAudioFile className="text-lg" />
                        <Typography variant="subtitle1">آپلود ویدیو جدید</Typography>
                    </div>
                    <FiArrowLeft className="text-lg" />
                </Card>
            </div>
            <BottomSheetFull
                title="دسته بندی جدید"
                open={open}
                onClose={handleClose}
                Content={NewCategory}
            />

        </>
    )
}