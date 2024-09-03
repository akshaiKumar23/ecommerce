import { useEffect, useState } from "react"

const ToggleMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme)

    }, [theme])
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        }
        else {
            setTheme("light");
        }
    }
    return (
        <input type="checkbox" className="toggle toggle-info" defaultChecked onChange={handleToggle} />
    )
}

export default ToggleMode