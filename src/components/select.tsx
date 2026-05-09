import { useState } from "react"

export interface Preset {
    rule: number
    density: number
}
interface SelectProps {
    onSelect?: (preset: Preset) => void
    options: Preset[],
    name?: string
}
/**
 *  stylized alternative for select tag
 */
export default function SelectPreset({ onSelect, options, name }: SelectProps) {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onSelect?.(options[Number(e.target.value)])
    }

    return (
        <select
            value="Select preset"
            onChange={handleChange}
            className="cursor-pointer"
        >
            <option value="Select preset" disabled>
                {name}
            </option>
            {options.map((preset, i) => {
                return (
                    <option key={i} value={i} className="cursor-pointer">
                        Density: {preset.density} | Rule: {preset.rule}
                    </option>
                )
            })}
        </select>

    )
}