import { Slide, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import { FiX } from 'react-icons/fi';

const Transition: any = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface BottomSheetFullProps {
    title: string
    open: boolean
    onClose: () => void
    Content: React.ComponentType<BottomSheetFullContentProps>
}

export interface BottomSheetFullContentProps {
    onClose: () => void
}

export default function BottomSheetFull({ title, open, onClose, Content }: BottomSheetFullProps) {
    return (
        <Dialog fullScreen open={open} onClose={onClose} TransitionComponent={Transition}>
            <AppBar>
                <Toolbar className="justify-between">
                    <Typography variant="h6">
                        {title}
                    </Typography>
                    <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
                        <FiX className="text-lg" />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className="w-full h-full pt-16">
                <Content onClose={onClose} />
            </div>
        </Dialog>
    )
}