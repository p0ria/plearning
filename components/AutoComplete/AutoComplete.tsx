import { TextField, CircularProgress, debounce } from "@material-ui/core";
import { Autocomplete, Value } from "@material-ui/lab";
import React, { PropsWithoutRef, useCallback, useEffect, useRef, useState } from "react";

export interface AutoCompleteItem {
    label: string
    value: any
}

interface AutoCompleteProps {
    onSearch: (searchTerm: string) => Promise<AutoCompleteItem[]>,
    onSelectedChanged: (selectedItem: AutoCompleteItem | null) => void
}

export default function AutoComplete({ onSearch, onSelectedChanged, ...others }: AutoCompleteProps & Record<string, any>) {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<AutoCompleteItem[]>([]);
    const [loading, setLoading] = useState(false);
    const ref = useRef()

    useEffect(() => {
        if (!loading) return;
        let active = true;

        (async () => {
            const items = await onSearch(ref.current)
            if (active) setOptions(items)
            if (loading) setLoading(false)
        })()

        return () => {
            active = false;
        };
    }, [loading]);

    const handleChange = useCallback(value => {
        ref.current = value
        debouceChange()
    }, [])

    const debouceChange = useCallback(debounce(() => {
        setLoading(true)
    }, 2000), [])

    return (
        <Autocomplete
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            getOptionSelected={(option, selected) => option.value === selected.value}
            getOptionLabel={(option) => option.label}
            options={options}
            loading={loading}
            onChange={(_, selected) => onSelectedChanged(selected as AutoCompleteItem)}
            renderInput={(params) => (
                <TextField
                    {...others}
                    {...params}
                    label="آیکون"
                    InputProps={{
                        ...params.InputProps,
                        onChange: e => handleChange(e.target.value),
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    )
}