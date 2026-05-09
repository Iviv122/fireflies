import type { ChangeEvent, HTMLInputTypeAttribute } from "react"

interface InputProps {
    placeHolder?: string
    onChange?: (value: string) => void
    className?: string
    type?: HTMLInputTypeAttribute
    value?: string
    min?: number
    max?: number
    step?: number
}

export default function Input({ value,onChange, className, placeHolder, type,min,max,step }: InputProps) {
    return (
        <input
            onChange={(e : ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value)}
            className={
                "bg-amber-50 text-black cursor-pointer"
                + (className || "")
            }
            placeholder={placeHolder}
            type={type}
            value={value}
            min={min}
            max={max}
            step={step}
        >
        </input>
    )

}