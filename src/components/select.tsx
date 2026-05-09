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
    return (
        <select
            defaultValue={name || ""}
        >
            <option value="" disabled>
                Choose preset
            </option>
            {
                options.map((e: Preset, i) => <option key={i} onClick={() => onSelect?.(e)}>density: {e.density} rule: {e.rule}</option>)
            }
        </select>

    )
}