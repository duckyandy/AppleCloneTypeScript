export const fetchCategories = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC}/api/getCategories`)

    const data = await res.json()
    
}